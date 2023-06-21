import { useEffect } from 'react';
import { Typography, Button, Box, CircularProgress } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useGetListQuery } from '../../services/TMDB';

import RatedCards from '../RatedCards/RatedCards.jsx';

const Profile = () => {
  const { user } = useSelector((state) => state.userSlice);

  const logout = () => {
    localStorage.clear();
    window.location = '/';
  };

  const {
    data: favoriteMovies,
    refetch: refetchFavorites,
    isFetching: isFetchingFavorites,
    error: errorFavorites,
  } = useGetListQuery({
    listName: 'favorite/movies',
    accountId: user?.id,
    sessionId: localStorage.getItem('session_id'),
    page: 1,
  });

  const {
    data: watchlist,
    refetch: refetchWatchlist,
    isFetching: isFetchingWatchlist,
    error: errorWatchlist,
  } = useGetListQuery({
    listName: 'watchlist/movies',
    accountId: user?.id,
    sessionId: localStorage.getItem('session_id'),
    page: 1,
  });

  useEffect(() => {
    refetchFavorites();
    refetchWatchlist();
  }, []);

  if (isFetchingFavorites || isFetchingWatchlist) {
    return (
      <Box display={'flex'} justifyContent={'center'}>
        <CircularProgress size={'8rem'} />
      </Box>
    );
  }

  if (errorFavorites || errorWatchlist) {
    return (
      <Box display={'flex'} justifyContent={'center'}>
        <Link to="/">Go back</Link>
      </Box>
    );
  }

  return (
    <Box>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography variant="h4" gutterBottom>
          My Profile {user.username}
        </Typography>
        <Button variant="contained" color="success" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies?.results?.length && !watchlist?.results?.length ? (
        <Typography variant="h5">
          Add favorite or watchlist same movies to see them here!
        </Typography>
      ) : (
        <Box>
          <RatedCards title="Favorite Movies" movies={favoriteMovies} />
          <RatedCards title="Watchlist" movies={watchlist} />
        </Box>
      )}
    </Box>
  );
};

export default Profile;
