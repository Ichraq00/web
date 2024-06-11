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

const PopularBooks = () => {
  const scrollRef = useRef(null);

  const popularBooks = [
    {
      "title": "Close to You",
      "price": 49.46,
      "categorie": "christian fiction",
      "rating": 4,
      "description": "A disgraced scholar running from her past and an entrepreneur chasing his future find themselves thrown together\u2014and fall in love\u2014on a Tolkien tour of New Zealand.Allison Shire (yes, like where the Hobbits live) is a disgraced academic who is done with love. Her belief in \u201chappily ever after\u201d ended the day she discovered her husband was still married to a wife she knew not A disgraced scholar running from her past and an entrepreneur chasing his future find themselves thrown together\u2014and fall in love\u2014on a Tolkien tour of New Zealand.Allison Shire (yes, like where the Hobbits live) is a disgraced academic who is done with love. Her belief in \u201chappily ever after\u201d ended the day she discovered her husband was still married to a wife she knew nothing about. She finally finds a use for her English degree by guiding tours through the famous sites featured in the Lord of the Rings and The Hobbit movies. By living life on the road and traveling New Zealand as a luxury tour guide, Allison manages to outrun the pain of her past she can\u2019t face.Jackson Gregory was on the cusp of making it big. Then suddenly his girlfriend left him\u2014for his biggest business competitor\u2014and took his most guarded commercial secrets with her. To make matters worse, the Iowa farm that has been in his family for generations is facing foreclosure. Determined to save his parents from financial ruin, he\u2019ll do whatever it takes to convince his wealthy great-uncle to invest in his next scheme, which means accompanying him to the bottom of the world to spend three weeks pretending to be a die-hard Lord of the Rings fan, even though he knows nothing about the stories. The one thing that stands between him and his goal is a know-it-all tour guide who can\u2019t stand him and pegged him as a fake the moment he walked off the plane.When Allison leads the group through the famous sites of the Tolkien movies, she and Jackson start to see each other differently, and as they keep getting thrown together on the tour, they find themselves drawn to each other. Neither expected to fall in love again, but can they find a way beyond their regrets to take a chance on the one thing they\u2019re not looking for? ...more",
      "tax": "\u00a30.00",
      "availibility": 15,
      "url": "https://books.toscrape.com/catalogue/close-to-you_798/index.html",
      "image": "https://books.toscrape.com/media/cache/94/f4/94f4405dae04559ecdd92e62486623e3.jpg",
      "id": 182
  },
  {
      "title": "Chasing Heaven: What Dying Taught Me About Living",
      "price": 37.8,
      "categorie": "spirituality",
      "rating": 2,
      "description": "From the author of the New York Times bestseller, Waking Up in Heaven, comes an extraordinary story about Crystal McVea\u2019s personal transformation after visiting heaven and how readers can experience heaven themselves\u2014and live a more meaningful life.On December 10, 2009, Crystal McVea was being treated in a hospital for pancreatitis. Her heart stopped pumping for nine minut From the author of the New York Times bestseller, Waking Up in Heaven, comes an extraordinary story about Crystal McVea\u2019s personal transformation after visiting heaven and how readers can experience heaven themselves\u2014and live a more meaningful life.On December 10, 2009, Crystal McVea was being treated in a hospital for pancreatitis. Her heart stopped pumping for nine minutes before doctors managed to revive her. In those nine minutes, she went to heaven, stood with God, and was forever changed.Ever since Crystal\u2019s incredible experience, her life has been profoundly different. She has become a brand new person in every conceivable way\u2014heart, mind, soul, and spirit. By dying, Crystal learned how to live. Crystal realized that heaven is real and our true home, but we are still meant to have meaningful lives full of passion and purpose right here on earth. She believes we have to chase heaven while we are still alive and allow God to turn our lukewarm love into a firestorm of faith. Chasing Heaven is the story of how God called to Crystal, what He told her, and how she found a way to get closer to Him again here on earth.Crystal assures us that we don\u2019t have to die and go to heaven in order to ignite our faith. We also don\u2019t have to abandon the lives we have in order to experience God and heaven. Chasing Heaven is about following the path to the Lord, and discovering your spiritual destiny.The journey that followed Crystal\u2019s time in heaven has been difficult, complicated, and surprising\u2014full of twists and turns, setbacks and triumphs, drama and comedy, and everything that makes life so messy and beautiful. ...more",
      "tax": "\u00a30.00",
      "availibility": 15,
      "url": "https://books.toscrape.com/catalogue/chasing-heaven-what-dying-taught-me-about-living_797/index.html",
      "image": "https://books.toscrape.com/media/cache/87/cd/87cd2aa5c4e38244ffcb17b84b0f6efd.jpg",
      "id": 183
  },
  {
      "title": "You (You #1)",
      "price": 43.61,
      "categorie": "thriller",
      "rating": 5,
      "description": "When a beautiful, aspiring writer strides into the East Village bookstore where Joe Goldberg works, he does what anyone would do: he Googles the name on her credit card.There is only one Guinevere Beck in New York City. She has a public Facebook account and Tweets incessantly, telling Joe everything he needs to know: she is simply Beck to her friends, she went to Brown Uni When a beautiful, aspiring writer strides into the East Village bookstore where Joe Goldberg works, he does what anyone would do: he Googles the name on her credit card.There is only one Guinevere Beck in New York City. She has a public Facebook account and Tweets incessantly, telling Joe everything he needs to know: she is simply Beck to her friends, she went to Brown University, she lives on Bank Street, and she\u2019ll be at a bar in Brooklyn tonight\u2014the perfect place for a \u201cchance\u201d meeting.As Joe invisibly and obsessively takes control of Beck\u2019s life, he orchestrates a series of events to ensure Beck finds herself in his waiting arms. Moving from stalker to boyfriend, Joe transforms himself into Beck\u2019s perfect man, all while quietly removing the obstacles that stand in their way\u2014even if it means murder. ...more",
      "tax": "\u00a30.00",
      "availibility": 14,
      "url": "https://books.toscrape.com/catalogue/you-you-1_784/index.html",
      "image": "https://books.toscrape.com/media/cache/f2/f1/f2f19169771a8a8e1a4b72f22e799de8.jpg",
      "id": 184
  },
  {
      "title": "Dark Notes",
      "price": 19.19,
      "categorie": "erotica",
      "rating": 5,
      "description": "They call me a slut. Maybe I am.Sometimes I do things I despise.Sometimes men take without asking.But I have a musical gift, only a year left of high school, and a plan.With one obstacle.Emeric Marceaux doesn\u2019t just take.He seizes my will power and bangs it like a dark note.When he commands me to play, I want to give him everything.I kneel for his punishments, tremble for They call me a slut. Maybe I am.Sometimes I do things I despise.Sometimes men take without asking.But I have a musical gift, only a year left of high school, and a plan.With one obstacle.Emeric Marceaux doesn\u2019t just take.He seizes my will power and bangs it like a dark note.When he commands me to play, I want to give him everything.I kneel for his punishments, tremble for his touch, and risk it all for our stolen moments.He\u2019s my obsession, my master, my music.And my teacher. ...more",
      "tax": "\u00a30.00",
      "availibility": 15,
      "url": "https://books.toscrape.com/catalogue/dark-notes_800/index.html",
      "image": "https://books.toscrape.com/media/cache/1c/88/1c8807c42be085f3b061fe63f62a3c39.jpg",
      "id": 185
  },
    // Add more books as needed
  ];

  const handlePrevClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    }
  };

  const handleNextClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" component="h2" gutterBottom align="left">
        Popular Books
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
          {popularBooks.map((book, index) => (
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

export default PopularBooks;
