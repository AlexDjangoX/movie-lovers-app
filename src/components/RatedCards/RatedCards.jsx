import PropTypes from 'prop-types';
import { Typography, Box } from '@mui/material';
import useStyles from './styles';

import { Movie } from '../index';

const RatedCards = ({ title, movies }) => {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Box display="flex" flexWrap="wrap" className={classes.container}>
        {movies?.results.map((movie, i) => (
          <Movie key={movie.id} movie={movie} index={i} />
        ))}
      </Box>
    </Box>
  );
};

RatedCards.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default RatedCards;
