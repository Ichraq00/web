import React, { Component } from "react";

import { Box } from '@mui/material';
import Appbar from '../Appbar';
import Libarary from "./MyLibrary";


import Footer from '../Footer';

function MyLibrary0() {
  return (
    <div className="MyLibrary0">
      <Appbar />
      <Box my={4}>
        <MyLibrary/>
      </Box>
      
      <Footer />
    </div>
  );
}

export default MyLibrary0;
