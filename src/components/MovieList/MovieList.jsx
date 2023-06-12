import PropTypes from 'prop-types';
import { Grid } from '@mui/material';

import useStyles from './styles';
import { Movie } from '..';

const MovieList = ({ movies }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.map((movie, index) => (
        <Movie movie={movie} key={index} index={index} />
      ))}
    </Grid>
  );
};

MovieList.propTypes = {
  movies: PropTypes.object.isRequired,
};

export default MovieList;
