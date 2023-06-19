import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Typography,
  Modal,
  Button,
  ButtonGroup,
  Grid,
  Box,
  CircularProgress,
  Rating,
} from '@mui/material';
import {
  useGetActorDetailsQuery,
  useGetMoviesByActorIdQuery,
} from '../../services/TMDB';

import { MovieList } from '..';

import useStyles from './styles';

const Actors = () => {
  const { id } = useParams();
  const classes = useStyles();
  const { data, error, isFetching } = useGetActorDetailsQuery(id);

  const [modalOpen, setModalOpen] = useState(false);

  const shouldDisplayLink = data?.homepage?.startsWith('https');
  const biography = data?.biography;
  const shortBiography =
    biography?.length > 600
      ? `${biography?.substring(0, 600)} .......`
      : biography;

  const {
    data: movies,
    error: errorMovies,
    isFetching: isFetchingMovies,
  } = useGetMoviesByActorIdQuery(id);

  if (error || errorMovies) {
    return (
      <Box display={'flex'} justifyContent={'center'}>
        <Link to="/">Go back</Link>
      </Box>
    );
  }

  if (isFetching || isFetchingMovies) {
    return (
      <Box display={'flex'} justifyContent={'center'}>
        <CircularProgress size={'8rem'} />
      </Box>
    );
  }

  return (
    <>
      <Grid container item className={classes.imageTextContainer}>
        <Grid
          item
          sm={4}
          className={classes.imageContainer}
          direction={'column'}
        >
          <img
            className={classes.image}
            src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`}
            alt={data?.name}
          />
          {shouldDisplayLink && (
            <a
              href={data.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              {data?.name}
            </a>
          )}
        </Grid>

        <Grid item container direction="column" lg={7}>
          <Typography variant="h4" align="center" gutterBottom>
            {data?.name}
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
            {data?.birthday} - {data?.place_of_birth}
          </Typography>

          <Typography className={classes.biography} variant="subtitle1">
            {shortBiography}
          </Typography>
          {biography?.length > 600 && (
            <Button onClick={() => setModalOpen(true)}>Read More</Button>
          )}
          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            className={classes.modal}
          >
            <div className={classes.modalContent}>
              <Typography variant="subtitle1">{biography}</Typography>
            </div>
          </Modal>
        </Grid>
      </Grid>

      <Grid item>
        <Box margin={'2rem 0'} width={'100%'}>
          {movies ? (
            <MovieList movies={movies} numberOfMovies={12} />
          ) : (
            <Box>
              <Typography>Not Found</Typography>
            </Box>
          )}
        </Box>
      </Grid>
    </>
  );
};

export default Actors;
