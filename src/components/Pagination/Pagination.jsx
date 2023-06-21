import PropTypes from 'prop-types';
import { Typography, Button } from '@mui/material';

import useStyles from './styles';

const Pagination = ({ currentPage, setPage, totalPages }) => {
  const classes = useStyles();

  if (totalPages === 0) {
    return null;
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className={classes.container}>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="button"
        onClick={handlePrev}
      >
        Prev
      </Button>
      <Typography variant="h5" className={classes.pageNumber}>
        {currentPage}
      </Typography>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="button"
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  setPage: PropTypes.func,
  totalPages: PropTypes.number,
};

export default Pagination;
