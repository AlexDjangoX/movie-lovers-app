import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  containerSpaceAround: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '10px 0 !important',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
  },
  image: {
    borderRadius: '20px',
    boxShadow: '0.5em 1em 1em rgb(64, 64, 70)',
    width: '80%',
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
      width: '140%',
      height: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '40px',
      margin: '0 auto',
      width: '75%',
      height: '350px',
      marginBottom: '30px',
    },
  },
  imageTextContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  link: {
    fontWeight: 'lighter',
    textDecoration: 'underline',
    marginTop: '2rem',
    color: 'black',
    fontSize: '1.4rem',
    '&:hover': {
      color: 'darkgray',
    },
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  biography: {
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxHeight: '45%',
    width: '80%',
    overflow: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '45%',
    },
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'gray',
      borderRadius: '5px',
      height: '6px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'lightBlue',
    },
  },
}));
