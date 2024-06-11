import React, { Component } from "react";

import { Box } from '@mui/material';
import Appbar from '../Appbar';
import Herobanner from '../Herobanner';
import BestSellerBooks from '../BestSellerBooks';
import NewBooks from '../NewBooks';
import PopularBooks from '../PopularBooks';
import Footer from '../Footer';

function Home() {
  return (
    <div className="Home">
      <Appbar />
      <Box my={4}>
        <Herobanner />
      </Box>
      <Box my={4}>
        <NewBooks />
      </Box>
      <Box my={4}>
        <BestSellerBooks />
      </Box>
      <Box my={4}>
        <PopularBooks />
      </Box>
      <Footer />
    </div>
  );
}

export default Home;
