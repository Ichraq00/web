import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import booksdata from './books.json';
import { Box, Container, Grid, Card, CardMedia, CardContent, Typography, Slider, Checkbox, FormControlLabel, FormGroup, Rating, Button } from '@mui/material';

const categories = [
  "Music",
  "Cultural",
  "Contemporary",
  "Mystery",
  "Self Help",
  "Business",
  "Autobiography",
  "Psychology",
  "Default",
  "Poetry",
  "Erotica",
  "Fantasy",
  "Food and Drink",
  "Childrens",
  "Horror",
  "Young Adult",
  "Travel",
  "History",
  "New Adult",
  "Health",
  "Add a Comment",
  "Crime",
  "Christian Fiction",
  "Romance",
  "Art",
  "Christian",
  "Science",
  "Politics",
  "Fiction",
  "Thriller",
  "Nonfiction",
  "Philosophy",
  "Science Fiction",
  "Religion",
  "Humor",
  "Historical Fiction",
  "Womens Fiction",
  "Spirituality",
  "Sequential Art",
  "Biography"
];

const booksPerPage = 12; // Number of books per page

const Books = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [rating, setRating] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [books, setBooks] = useState(booksdata);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.name.toLowerCase();
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  // Convert categories to lowercase for comparison
  const lowercaseCategories = selectedCategories.map(category => category.toLowerCase());

  // Filter books based on rating and categories
  const filteredBooks = books.filter((book) => {
    const bookCategory = book.categorie.toLowerCase();
    const matchesRating = rating === 0 || book.rating === rating;
    const matchesCategory = lowercaseCategories.length === 0 || lowercaseCategories.includes(bookCategory);
    return matchesRating && matchesCategory;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} mt={4}>
        <Grid item xs={12} md={3}>
          <Box component="aside" p={2} sx={{ backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <Typography variant="h6" gutterBottom>
              Product Categories
            </Typography>
            <FormGroup>
              {categories.map((category, index) => (
                <FormControlLabel
                  key={index}
                  control={<Checkbox name={category} onChange={handleCategoryChange} />}
                  label={category}
                />
              ))}
            </FormGroup>

            <Box mt={4}>
              <Typography variant="h6" gutterBottom>
                Filter by price
              </Typography>
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={0}
                max={1000}
                aria-labelledby="range-slider"
              />
            </Box>

            <Box mt={4}>
              <Typography variant="h6" gutterBottom>
                Average rating
              </Typography>
              <Rating
                name="average-rating"
                value={rating}
                onChange={handleRatingChange}
                precision={1}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={4}>
            {currentBooks.map((book, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card component={Link} to={`/book/${book.id}`} style={{ textDecoration: 'none' }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={book.image}
                    alt={book.title}
                  />
                  <CardContent>
                    <Typography variant="h6">{book.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {book.author}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      ${book.price.toFixed(2)}
                    </Typography>
                    <Rating name="book-rating" value={book.rating} readOnly />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
            <Button onClick={handlePrevPage} disabled={currentPage === 1}>
              Prev
            </Button>
            <Typography variant="body1" mx={2}>
              Page {currentPage} of {totalPages}
            </Typography>
            <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Books;
