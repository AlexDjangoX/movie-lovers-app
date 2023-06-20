import PropTypes from 'prop-types';
import useStyles from './styles';

import { Typography, Grid, Grow, Tooltip, Rating } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Movie = ({ movie, index }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow in key={index} timeout={(index + 1) * 250}>
        <NavLink className={classes.links} to={`/movie/${movie.id}`}>
          <img
            alt={movie.title}
            className={classes.image}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : 'https://www.filmurray.com/200/300'
            }
          />
          <Typography className={classes.title} variant="h7">
            {movie.title}
          </Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} />
            </div>
          </Tooltip>
        </NavLink>
      </Grow>
    </Grid>
  );
};

Movie.propTypes = {
  index: PropTypes.number.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired,
};

export default Movie;
