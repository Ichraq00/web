import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#d1b5a1',
  color: 'white',
  padding: theme.spacing(4),
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Vintage Books
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="body1" gutterBottom>
              <Link href="#" color="inherit" underline="none">Home</Link>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Link href="#" color="inherit" underline="none">About</Link>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Link href="#" color="inherit" underline="none">Books</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="body1" gutterBottom>
              <Link href="#" color="inherit" underline="none">Features</Link>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Link href="#" color="inherit" underline="none">Events</Link>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Link href="#" color="inherit" underline="none">Contact & Hours</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="body1" gutterBottom>
              <Link href="#" color="inherit" underline="none">Help & FAQs</Link>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Link href="#" color="inherit" underline="none">Work with us</Link>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Link href="#" color="inherit" underline="none">Careers</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="body1" gutterBottom>
              Follow us
            </Typography>
            <Box display="flex" gap={2}>
              <Link href="#" color="inherit" underline="none">
                <img src="https://path-to-your-icon.svg" alt="Instagram" />
              </Link>
              <Link href="#" color="inherit" underline="none">
                <img src="https://path-to-your-icon.svg" alt="Facebook" />
              </Link>
              <Link href="#" color="inherit" underline="none">
                <img src="https://path-to-your-icon.svg" alt="Twitter" />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="inherit">
            1995 - 2023 Vintage Books
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
