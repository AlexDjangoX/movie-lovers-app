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
import useStyles from './styles';
import axios from 'axios';
const MovieInformation = () => {
  const { id } = useParams();
  const classes = useStyles();

  const { data, isFetching, error } = useGetMovieQuery(id);
  console.log(id);

  console.log(data);

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

  console.log(data);

  return (
    <Grid className={classes.containerSpaceAround}>
      <Grid item sm={12} lg={4}>
        <img
          className={classes.poster}
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          alt={data?.title}
        />
      </Grid>
    </Grid>
  );
};

export default MovieInformation;
