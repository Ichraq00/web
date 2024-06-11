import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import Appbar from '../Appbar';
import Footer from '../Footer';

const MyLibrary = () => {
  const [libraryBooks, setLibraryBooks] = useState({
    currentlyReading: [],
    nextUp: [],
    finished: []
  });

  useEffect(() => {
    fetch('/libraryBooks.json')
      .then(response => response.json())
      .then(data => setLibraryBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  const renderBooks = (books) => (
    <Grid container spacing={2}>
      {books.map((book, index) => (
        <Grid item key={index}>
          <Card sx={{ width: 150 }}>
            <CardMedia
              component="img"
              height="200"
              image={book.image}
              alt={book.title}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {book.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <div>
      <Appbar />
      <Container maxWidth="lg">
        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            Currently Reading
          </Typography>
          <Box sx={{ display: 'flex', overflowX: 'auto', paddingBottom: 2 }}>
            {renderBooks(libraryBooks.currentlyReading)}
          </Box>
        </Box>
        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            Next Up
          </Typography>
          <Box sx={{ display: 'flex', overflowX: 'auto', paddingBottom: 2 }}>
            {renderBooks(libraryBooks.nextUp)}
          </Box>
        </Box>
        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            Finished
          </Typography>
          <Box sx={{ display: 'flex', overflowX: 'auto', paddingBottom: 2 }}>
            {renderBooks(libraryBooks.finished)}
          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default MyLibrary;
