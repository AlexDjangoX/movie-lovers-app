import { NavLink } from 'react-router-dom';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from '@mui/material';
import useStyles from './styles.js';

import genreIcons from '../../assets/genres/index.js';
import { useGetGenresQuery } from '../../services/TMDB.js';
import { useDispatch } from 'react-redux';

import { selectGenreOrCategory } from '../../features/currentGenreOrCategory.js';

const categories = [
  {
    label: 'Popular',
    value: 'popular',
  },
  {
    label: 'Top rated',
    value: 'top_rated',
  },
  {
    label: 'Upcoming',
    value: 'upcoming',
  },
];

const Sidebar = () => {
  const classes = useStyles();
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();

  return (
    <>
      <NavLink to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={'/logo/svg/logo-black.svg'}
          alt="Filmpire Logo"
        />
      </NavLink>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <NavLink key={value} className={classes.link} to="/">
            <ListItem onClick={() => dispatch(selectGenreOrCategory(value))}>
              <ListItemIcon>
                <img
                  src={genreIcons[label.toLowerCase()]}
                  className={classes.genreImages}
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genre</ListSubheader>
        {isFetching ? (
          <>
            <Box display="flex" justifyContent="center">
              <CircularProgress size="4rem" />
            </Box>
          </>
        ) : (
          data.genres.map(({ name, id }) => (
            <NavLink key={name} className={classes.link} to="/">
              <ListItem onClick={() => dispatch(selectGenreOrCategory(id))}>
                <ListItemIcon>
                  <img
                    src={genreIcons[name.toLowerCase()]}
                    className={classes.genreImages}
                    height={30}
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </NavLink>
          ))
        )}
      </List>
    </>
  );
};

export default Sidebar;
