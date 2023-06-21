import PropTypes from 'prop-types';
import { Grid } from '@mui/material';

import useStyles from './styles';
import Movie from '../Movie/Movie.jsx';

const MovieList = ({ movies, numberOfMovies }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.slice(0, numberOfMovies).map((movie, index) => (
        <Movie movie={movie} key={index} index={index} />
      ))}
    </Grid>
  );
};

MovieList.propTypes = {
  movies: PropTypes.object.isRequired,
  numberOfMovies: PropTypes.number,
};

export default MovieList;
