import { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Actors from './components/Actors/Actors.jsx';
import MovieInformation from './components/MovieInformation/MovieInformation.jsx';
import Movies from './components/Movies/Movies.jsx';
import Profile from './components/Profile/Profile.jsx';
import NavigationBar from './components/NavigationBar/NavigationBar.jsx';

import { CssBaseline } from '@mui/material';
import useStyles from './styles.js';
import { metadata } from './metadata.js';

// import useAlan from './Alan.jsx';

const App = () => {
  // const alanButtonContainer = useRef();
  const classes = useStyles();

  // useAlan();

  return (
    <div className={classes.root} data-testid="app-component">
      <CssBaseline />

      <Helmet>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.icons.icon} />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.icons.icon} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Router>
        <NavigationBar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="movie/:id" element={<MovieInformation />} />
            <Route path="actor/:id" element={<Actors />} />
            <Route path="profile/:id" element={<Profile />} />
            <Route path="*" element={<Profile />} />
          </Routes>
        </main>
      </Router>
      {/* <div ref={alanButtonContainer} /> */}
    </div>
  );
};

export default App;
