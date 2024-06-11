import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { styled } from '@mui/system';

import image1 from './assets/images/Virginia.jpg';

const HeroSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(4),
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

const TextSection = styled(Box)(({ theme }) => ({
  maxWidth: '50%',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

const ImageSection = styled(Box)(({ theme }) => ({
  width: '60%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    margin: '0 auto',
  },
}));

const LearnMoreLink = styled(Link)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  marginTop: theme.spacing(2),
  textDecoration: 'none',
  color: 'black',
  fontWeight: 'bold',
  '&:hover': {
    textDecoration: 'underline',
  },
  '&::after': {
    content: '"→"',
    marginLeft: theme.spacing(1),
  },
}));

const HeroBanner = ({ text, image }) => {
  return (
    <HeroSection>
      <TextSection>
        <Typography variant="h4" component="h1" gutterBottom>
          {text.title}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {text.subtitle}
        </Typography>
        <LearnMoreLink href={text.link}>Learn more</LearnMoreLink>
      </TextSection>
      <ImageSection>
        <img src={image.src} alt={image.alt} style={{ width: '280px', height: '280px', borderRadius: '50%' }} />
      </ImageSection>
    </HeroSection>
  );
};

const App = () => {
  const heroData = [
    {
      text: {
        title: 'Poetry collections to help you understand the world',
        subtitle:
          "Poetry's mindful and political potential came into sharp focus when Amanda Gorman delivered her inaugural poem, The Hill We Climb. Here are a few more poetry collections to help understand the world better.",
        link: '#',
      },
      image: {
        src: 'https://path-to-your-image.jpg', // Replace with your image path
        alt: 'A person reading a book',
      },
    },
    {
      text: {
        title: '12 times Virginia Woolf understood the millennial condition',
        subtitle:
          "Virginia Woolf's insightful and poignant observations about life and society resonate deeply with the millennial generation. Here are some instances where her work reflects modern concerns.",
        link: '#',
      },
      image: {
        src: image1, // Replace with your image path
        alt: 'Virginia Woolf portrait',
      },
    },
  ];

  return (
    <Container maxWidth="lg">
      <Carousel autoPlay interval={5000} infiniteLoop showThumbs={false} showStatus={false}>
        {heroData.map((hero, index) => (
          <HeroBanner key={index} text={hero.text} image={hero.image} />
        ))}
      </Carousel>
    </Container>
  );
};

export default App;
