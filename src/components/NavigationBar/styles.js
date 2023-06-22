import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
  toolbar: {
    height: '80px',
    display: 'column',
    justifyContent: 'space-between',
    marginLeft: '200px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      flexWrap: 'wrap',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      height: '100px',
      backgroundColor: 'blue',
      flexShrink: 0,
    },
  },
  drawerPaper: { width: drawerWidth },
  linkButton: {
    color: '#D3D3D3',
    '&:hover': {
      color: 'white !important',
      textDecoration: 'none',
    },
  },
}));
