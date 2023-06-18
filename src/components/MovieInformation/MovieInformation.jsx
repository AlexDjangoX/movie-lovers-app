import {
  Modal,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Box,
  CircularProgress,
  useMediaQuery,
  Rating,
} from '@mui/material';
import {
  Movie as MovieIcon,
  Theaters,
  Language,
  PlusOne,
  Favorite,
  FavoriteBorderOutlined,
  Remove,
  ArrowBack,
} from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGetMovieQuery } from '../../services/TMDB';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory.js';

import genreIcons from '../../assets/genres/index.js';

import useStyles from './styles';

const MovieInformation = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const classes = useStyles();

  const { data, isFetching, error } = useGetMovieQuery(id);

  const addToFavorites = () => {};
  const addToWatchList = () => {};

  const isMovieFavored = true;
  const isMovieWatchListed = true;

  if (isFetching) {
    return (
      <Box display={'flex'} justifyContent={'center'}>
        <CircularProgress size={'8rem'} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display={'flex'} justifyContent={'center'}>
        <Link to="/">Go back</Link>
      </Box>
    );
  }

  return (
    <Grid className={classes.containerSpaceAround}>
      <Grid item sm={12} lg={4}>
        <img
          className={classes.poster}
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          alt={data?.title}
        />
      </Grid>
      <Grid item container direction="column" lg={7}>
        <Typography variant="h5" align="center" gutterBottom>
          {data?.title} ({data?.release_date.split('-')[0]})
        </Typography>
        <Typography variant="h7" gutterBottom align="center">
          {data?.tagline}
        </Typography>
        <Grid item className={classes.containerSpaceAround}>
          <Box display={'flex'} align={'center'}>
            <Rating readOnly value={data?.vote_average / 2} />
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ marginLeft: '10px' }}
            >
              {data?.vote_average} / 10
            </Typography>
          </Box>
          <Typography variant="subtitle1" gutterBottom align="center">
            {data?.runtime} min /
            {data?.spoken_languages && data.spoken_languages.length > 0
              ? ` ${data.spoken_languages[0].name}`
              : ''}
          </Typography>
        </Grid>
        <Grid item className={classes.genresContainer}>
          {data?.genres?.map((genre) => (
            <Link
              key={genre.name}
              className={classes.links}
              to={`/`}
              onClick={() => dispatch(selectGenreOrCategory(genre.id))}
            >
              <img
                src={genreIcons[genre.name.toLowerCase()]}
                className={classes.genreImage}
                height={30}
              />
              <Typography variant="subtitle1" color="textPrimary">
                {genre?.name}
              </Typography>
            </Link>
          ))}
        </Grid>
        <Typography variant="h6" gutterBottom style={{ marginTop: '10px' }}>
          Overview
        </Typography>
        <Typography style={{ MarginBottom: '2rem' }}>
          {data?.overview}
        </Typography>
        <Typography variant="h6" gutterBottom style={{ marginTop: '10px' }}>
          Top Caste
        </Typography>
        <Grid item container spacing={2}>
          {data &&
            data.credits?.cast
              ?.map((character, index) => {
                return (
                  <>
                    <Grid
                      item
                      key={index}
                      xs={4}
                      md={2}
                      component={Link}
                      to={`/actors/${character.id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <img
                        className={classes.casteImage}
                        src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`}
                        alt={`${character.name}`}
                      />
                      <Typography
                        color={'textPrimary'}
                        align="center"
                        maxWidth={'7em'}
                        fontSize={'1rem'}
                      >
                        {character.name}
                      </Typography>
                      <Typography
                        align="center"
                        color={'textSecondary'}
                        maxWidth={'7em'}
                        fontSize={'0.8rem'}
                      >
                        {character.character.split(' ')[0]}
                      </Typography>
                    </Grid>
                  </>
                );
              })
              .slice(0, 6)}
        </Grid>
        <Grid item container style={{ marginTop: '2rem' }}>
          <div className={classes.buttonsContainer}>
            <Grid item xs={12} sm={6}>
              <ButtonGroup size="small" variant="outlined">
                <Button
                  target="_blank"
                  rel="noreferrer noopener"
                  className={classes.button}
                  href={data?.homepage}
                  endIcon={<Language />}
                >
                  Website
                </Button>
                <Button
                  target="_blank"
                  rel="noreferrer noopener"
                  className={classes.button}
                  href={`https://www.imdb.com/title/${data?.imdb_id}`}
                  endIcon={<MovieIcon />}
                >
                  IMDB
                </Button>
                <Button
                  onDoubleClick={() => window.open(data?.homepage, '_blank')}
                  href="#"
                  className={classes.button}
                  endIcon={<Theaters />}
                >
                  Trailer
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ButtonGroup size="small" variant="outlined">
                <Button
                  onClick={addToFavorites}
                  endIcon={
                    isMovieFavored ? <FavoriteBorderOutlined /> : <Favorite />
                  }
                >
                  {!isMovieFavored ? 'Not Favorite' : 'Favorite'}
                </Button>

                <Button
                  onClick={addToWatchList}
                  endIcon={isMovieWatchListed ? <Remove /> : <PlusOne />}
                >
                  Watch List
                </Button>
                <Button
                  className={classes.button}
                  endIcon={<ArrowBack />}
                  sx={{ borderColor: 'primary.main' }}
                >
                  <Typography
                    component={Link}
                    to={`/`}
                    color="inherit"
                    variant="subtitle1"
                    style={{ textDecoration: 'none' }}
                  >
                    Back
                  </Typography>
                </Button>
              </ButtonGroup>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MovieInformation;
