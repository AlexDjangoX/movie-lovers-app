import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import {
  Actors,
  MovieInformation,
  Movies,
  NavBar,
  Profile,
} from './components/index.js';

import { CssBaseline } from '@mui/material';

import useStyles from './styles';

let router;

const usedRouter =
  router ||
  createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieInformation />} />
        <Route path="/actors/:id" element={<Actors />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="*" element={<Profile />} />
      </>
    )
  );

const App = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <NavBar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <RouterProvider router={usedRouter} />
        </main>
      </div>
    </>
  );
};

export default App;
