import React, { Component } from "react";

import { Box } from '@mui/material';
import Appbar from '../Appbar';
import BookDetails from "./BookDetails";


import Footer from '../Footer';

function BookDetails0() {
  return (
    <div className="BookDetails0">
      <Appbar />
      <Box my={4}>
        <BookDetails/>
      </Box>
      
      <Footer />
    </div>
  );
}

export default BookDetails0;
