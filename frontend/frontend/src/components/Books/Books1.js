import React, { Component } from "react";

import { Box } from '@mui/material';
import Appbar from '../Appbar';
import Books from "./Books";


import Footer from '../Footer';

function Books1() {
  return (
    <div className="Books1">
      <Appbar />
      <Box my={4}>
        <Books/>
      </Box>
      
      <Footer />
    </div>
  );
}

export default Books1;
