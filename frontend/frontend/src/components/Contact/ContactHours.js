import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button } from '@mui/material';
import Appbar from '../Appbar';
import Footer from '../Footer';

const ContactHours = () => {
  return (
    <div>
      <Appbar />
      <Box my={4}>
      <Container maxWidth="lg">
        <Box mt={4}>
          <Typography variant="h4" gutterBottom>
            Contact & Hours
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h5" gutterBottom>
                  Contact Details
                </Typography>
                <Typography variant="body1">
                  <strong>Address:</strong> 123 Bookstore Ave, Library City, BK 12345
                </Typography>
                <Typography variant="body1">
                  <strong>Phone:</strong> (123) 456-7890
                </Typography>
                <Typography variant="body1">
                  <strong>Email:</strong> contact@bookstore.com
                </Typography>
                <Typography variant="h5" gutterBottom mt={4}>
                  Business Hours
                </Typography>
                <Typography variant="body1">
                  <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
                </Typography>
                <Typography variant="body1">
                  <strong>Saturday:</strong> 10:00 AM - 4:00 PM
                </Typography>
                <Typography variant="body1">
                  <strong>Sunday:</strong> Closed
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h5" gutterBottom>
                  Contact Us
                </Typography>
                <form noValidate autoComplete="off">
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    Send Message
                  </Button>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      </Box>
      <Footer />
    </div>
  );
};

export default ContactHours;
