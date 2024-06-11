import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const BookCard = ({ book }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={book.image}
        alt={book.title}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {book.author}
        </Typography>
        <Typography variant="h6" color="primary">
          ${book.price.toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;
