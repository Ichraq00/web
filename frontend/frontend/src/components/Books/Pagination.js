import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Pagination = ({ currentPage, totalPages, handleNextPage, handlePrevPage }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" mt={4}>
      <Button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        sx={{ marginRight: 2 }}
      >
        Prev
      </Button>
      <Typography variant="body1">
        Page {currentPage} of {totalPages}
      </Typography>
      <Button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        sx={{ marginLeft: 2 }}
      >
        Next
      </Button>
    </Box>
  );
};

export default Pagination;
