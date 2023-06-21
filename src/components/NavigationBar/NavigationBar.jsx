import { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from '@mui/material';
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useStyles from './styles.js';

import Search from '../Search/Search.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';

import {
  fetchToken,
  moviesApi,
  createSessionId,
} from '../../../utils/index.js';

import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../features/auth.js';

import { ColorModeContext } from '../../../utils/ToggleColorMode.jsx';

const NavigationBar = () => {
  const { toggleColorMode } = useContext(ColorModeContext);

  const { isAuthenticated, user } = useSelector((state) => state.userSlice);
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();

  const token = localStorage.getItem('request_token');
  const session = localStorage.getItem('session_id');

  const dispatch = useDispatch();

  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (session) {
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${session}`
          );
          dispatch(setUser(userData));
        } else {
          const thisSessionId = await createSessionId();
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${thisSessionId}`
          );
          dispatch(setUser(userData));
        }
      }
    };

    logInUser();

    return () => {};
  }, [token]);

  const buttonClicked = () => {
    return;
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={toggleColorMode}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button
                color="inherit"
                onClick={() => {
                  fetchToken();
                }}
              >
                Login &nbsp;
                <AccountCircle />
              </Button>
            ) : (
              <NavLink
                to={`/profile/${user.id}`}
                className={classes.linkButton}
              >
                <Button color="inherit" onClick={buttonClicked}>
                  {!isMobile && <>My Movies &nbsp;</>}
                  <Avatar
                    style={{ width: 30, height: 30 }}
                    alt="Profile"
                    src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
                  />
                </Button>
              </NavLink>
            )}
          </div>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              setMobileOpen={setMobileOpen}
              classes={{ paper: classes.drawerPaper }}
              variant="permanent"
              open
            >
              <Sidebar />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default NavigationBar;
