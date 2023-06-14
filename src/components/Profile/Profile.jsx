import { useEffect } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';

import { useSelector } from 'react-redux';

const Profile = () => {
  const { user } = useSelector((state) => state.userSlice);
  const favoriteMovies = [];

  const logout = () => {
    localStorage.clear();
    window.location = '/';
  };

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
      {!favoriteMovies.length ? (
        <Typography variant="h5" gutterBottom>
          Add favorites or watchlist some movies to see them here !
        </Typography>
      ) : (
        <Box>FAVORITE MOVIES</Box>
      )}
    </Box>
  );
};

export default Profile;
