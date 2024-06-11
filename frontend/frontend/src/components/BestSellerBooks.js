  import React, { useRef } from 'react';
  import { Container, Typography, Grid, Box, IconButton } from '@mui/material';
  import BookCard from './BookCard';
  import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
  import ArrowBackIcon from '@mui/icons-material/ArrowBack';
  import { styled } from '@mui/system';
  
  const StyledBookCard = styled(BookCard)({
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  });
  
  const BestSellerBooks = () => {
    const scrollRef = useRef(null);
  
    const bestSellerBooks = [
      {"title": "The Four Agreements: A Practical Guide to Personal Freedom", "price": 17.66, "categorie": "spirituality", "rating": 5, "description": "In The Four Agreements, don Miguel Ruiz reveals the source of self-limiting beliefs that rob us of joy and create needless suffering. Based on ancient Toltec wisdom, the Four Agreements offer a powerful code of conduct that can rapidly transform our lives to a new experience of freedom, true happiness, and love. The Four Agreements are: Be Impeccable With Your Word, Don't In The Four Agreements, don Miguel Ruiz reveals the source of self-limiting beliefs that rob us of joy and create needless suffering. Based on ancient Toltec wisdom, the Four Agreements offer a powerful code of conduct that can rapidly transform our lives to a new experience of freedom, true happiness, and love. The Four Agreements are: Be Impeccable With Your Word, Don't Take Anything Personally, Don't Make Assumptions, Always Do Your Best. ...more", "tax": "£0.00", "availibility": 18, "url": "https://books.toscrape.com/catalogue/the-four-agreements-a-practical-guide-to-personal-freedom_970/index.html", "image": "https://books.toscrape.com/media/cache/2b/1b/2b1bfecae9d512cb6ee943ccf786216f.jpg"},
  {"title": "Wall and Piece", "price": 44.18, "categorie": "art", "rating": 4, "description": "Banksy, Britain's now-legendary \"guerilla\" street artist, has painted the walls, streets, and bridges of towns and cities throughout the world. Not only did he smuggle his pieces into four of New York City's major art museums, he's also \"hung\" his work at London's Tate Gallery and adorned Israel's West Bank barrier with satirical images. Banksy's identity remains unknown, Banksy, Britain's now-legendary \"guerilla\" street artist, has painted the walls, streets, and bridges of towns and cities throughout the world. Not only did he smuggle his pieces into four of  New York City's major art museums, he's also \"hung\" his work at London's Tate Gallery and adorned Israel's West Bank barrier with satirical images. Banksy's identity remains unknown, but his work is unmistakable—with prints selling for as much as $45,000. ...more", "tax": "£0.00", "availibility": 18, "url": "https://books.toscrape.com/catalogue/wall-and-piece_971/index.html", "image": "https://books.toscrape.com/media/cache/df/34/df346322ddfdd3b4da0e34cad17f49dc.jpg"},
  {"title": "The Five Love Languages: How to Express Heartfelt Commitment to Your Mate", "price": 31.05, "categorie": "nonfiction", "rating": 3, "description": "Are you and your spouse speaking the same language? While love is a many splendored thing, it is sometimes a very confusing thing, too. And as people come in all varieties, shapes, and sizes, so do their choices of personal expressions of love. But more often than not, the giver and the receiver express love in two different ways. This can lead to misunderstanding, quarrel Are you and your spouse speaking the same language? While love is a many splendored thing, it is sometimes a very confusing thing, too. And as people come in all varieties, shapes, and sizes, so do their choices of personal expressions of love. But more often than not, the giver and the receiver express love in two different ways. This can lead to misunderstanding, quarrels, and even divorce.Quality time, words of affirmation, gifts, acts of service, and physical touch are the five basic love languages. Dr. Gary Chapman identifies these and guides couples towards a better understanding of their unique languages of love. Learn to speak and understand your mate's love language, and in no time you will be able to effectively love and truly feel loved in return. Skillful communication is within your grasp! ...more", "tax": "£0.00", "availibility": 18, "url": "https://books.toscrape.com/catalogue/the-five-love-languages-how-to-express-heartfelt-commitment-to-your-mate_969/index.html", "image": "https://books.toscrape.com/media/cache/7c/10/7c10101fe1759c5a17ba57e4bef9e764.jpg"},
  {"title": "Untitled Collection: Sabbath Poems 2014", "price": 14.27, "categorie": "poetry", "rating": 4, "description": "More than thirty-five years ago, when the weather allowed, Wendell Berry began spending his sabbaths outdoors, walking and wandering around familiar territory, seeking a deep intimacy only time could provide. These walks arranged themselves into poems and each year since he has completed a sequence dated by the year of its composition. Last year we collected the lot into a More than thirty-five years ago, when the weather allowed, Wendell Berry began spending his sabbaths outdoors, walking and wandering around familiar territory, seeking a deep intimacy only time could provide. These walks arranged themselves into poems and each year since he has completed a sequence dated by the year of its composition. Last year we collected the lot into a collection, This Day, the Sabbath Poems 1979-2013. This new sequence for the following year is one of the richest yet. This group provides a virtual syllabus for all of Mr. Berry’s cultural and agricultural work in concentrated form. Many of these poems are drawn from the view from a small porch in the woods, a place of stillness and reflection, a vantage point “of the one/life of the forest composed/of uncountable lives in countless/years each life coherent itself within/ the coherence, the great composure,/of all.” A new collection of Wendell Berry poems is always an occasion of joyful celebration and this one is especially so. ...more", "tax": "£0.00", "availibility": 16, "url": "https://books.toscrape.com/catalogue/untitled-collection-sabbath-poems-2014_953/index.html", "image": "https://books.toscrape.com/media/cache/65/6e/656e79dfd4f8b6bf19ffde2c75ceda81.jpg"},
  
    ];
    const handlePrevClick = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
      }
    };
  
    const handleNextClick = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
      }
    };
  
    return (
      <Container maxWidth="lg">
        <Typography variant="h5" component="h2" gutterBottom align="left">
          Best Seller Books
        </Typography>
        <Box display="flex" alignItems="center">
          <IconButton onClick={handlePrevClick}>
            <ArrowBackIcon fontSize="large" />
          </IconButton>
          <Box
            ref={scrollRef}
            display="flex"
            overflow="hidden"
            flexWrap="nowrap"
            width="100%"
          >
            {bestSellerBooks.map((book, index) => (
              <Box key={index} minWidth="25%" sx={{ marginRight: 2 }}>
                <StyledBookCard book={book} />
              </Box>
            ))}
          </Box>
          <IconButton onClick={handleNextClick}>
            <ArrowForwardIcon fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    );
  };
  
  export default BestSellerBooks;
  