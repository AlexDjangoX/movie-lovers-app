import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  Actors,
  MovieInformation,
  Movies,
  Navbar,
  Profile,
} from './components/index.js';

import { CssBaseline } from '@mui/material';

import useStyles from './styles.js';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} data-testid="app-component">
      <CssBaseline />

      <Router>
        <Navbar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="movie/:id" element={<MovieInformation />} />
            <Route path="actors/:id" element={<Actors />} />
            <Route path="profile/:id" element={<Profile />} />
            <Route path="*" element={<Profile />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
