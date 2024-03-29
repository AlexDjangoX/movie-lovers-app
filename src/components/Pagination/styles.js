import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    margin: '30px 2px',
  },
  pageNumber: {
    margin: '0px 20px !important',
    color: theme.palette.text.primary,
  },
}));
