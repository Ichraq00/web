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

const NewBooks = () => {
  const scrollRef = useRef(null);

  const newBooks = [
    {
      title: "America's Cradle of Quarterbacks: Western Pennsylvania's Football Factory from Johnny Unitas to Joe Montana",
      price: 22.5,
      categorie: "default",
      rating: 3,
      description:
        "Any fan of the Baltimore Colts of my era, any fan of my friend and teammate Johnny Unitas, or, for that matter, any fan of football in general should enjoy Wayne Stewart's book. It contains great stories, statistics, and information on all of the many great quarterbacks whocame out of Western Pennsylvania and much more. Raymond Berry NFL Hall of Fame Wide Receiver It’s wel Any fan of the Baltimore Colts of my era, any fan of my friend and teammate Johnny Unitas, or, for that matter, any fan of football in general should enjoy Wayne Stewart's book. It contains great stories, statistics, and information on all of the many great quarterbacks whocame out of Western Pennsylvania and much more. Raymond Berry NFL Hall of Fame Wide Receiver It’s well known that the NFL has been dominated through the years by quarterbacks sown and grown in a relatively small area surrounding the city of Pittsburgh in Western Pennsylvania. In America’s Cradle of Quarterbacks, author Wayne Stewart not only tells us who they are, he digs deep to explain the nature and nurture behind the rich harvest of signal callers (Montana, Unitas, Marino, Namath, Kelly, Blanda, etc.) who have risen from that fertile soil to claim Lombardi Trophies and dominate the gallery of busts in the Pro Football Hall of Fame. Stewart has written a fascinating book that belongs on the shelves of football historians and everyday fans alike. Jeffrey J. Miller Author of Rockin’ The Rockpile, Buffalo’sForgotten Champions, and Game Changers ...more",
      tax: "£0.00",
      availibility: 19,
      url: "https://books.toscrape.com/catalogue/americas-cradle-of-quarterbacks-western-pennsylvanias-football-factory-from-johnny-unitas-to-joe-montana_974/index.html",
      image: "https://books.toscrape.com/media/cache/a3/2a/a32ab3b8c024c6c2b274a86b185e7585.jpg",
    },
    {
      title: "Birdsong: A Story in Pictures",
      price: 54.64,
      categorie: "childrens",
      rating: 3,
      description:
        "Bring the thrilling story of one red bird to life. When an innocent bird meets two cruel kids, their world is forever changed. But exactly how that change unfolds is up to you, in the tradition of Kamishibai—Japanese paper theater. The wordless story by master cartoonist James Sturm is like a haiku—the elegant images leave space for children to inhabit this timeless tale—a Bring the thrilling story of one red bird to life. When an innocent bird meets two cruel kids, their world is forever changed. But exactly how that change unfolds is up to you, in the tradition of Kamishibai—Japanese paper theater. The wordless story by master cartoonist James Sturm is like a haiku—the elegant images leave space for children to inhabit this timeless tale—and make it their own, leading them to learn an ultimate lesson they'll never forget.James Sturm is the author of several books for kids including the Adventures in Cartooning series (with Andrew Arnold and Alexis Frederick-Frost) and the forthcoming Ape and Armadillo. James also helped start a college for cartoonists, The Center for Cartoon Studies, in the small railroad village of White River Junction, Vermont. ...more",
      tax: "£0.00",
      availibility: 19,
      url: "https://books.toscrape.com/catalogue/birdsong-a-story-in-pictures_975/index.html",
      image: "https://books.toscrape.com/media/cache/af/2f/af2fe2419ea136f2cd567aa92082c3ae.jpg",
    },
    {
      title: "Chase Me (Paris Nights #2)",
      price: 25.27,
      categorie: "romance",
      rating: 5,
      description:
        "A Michelin two-star chef at twenty-eight, Violette Lenoir could handle anything, including a cocky burglar who broke into her restaurant in the middle of the night.Or so she thought.Elite counterterrorist operative Chase “Smith” had been through things that made Hell Week look easy. But nothing had prepared him for a leather-clad blonde who held him at bay at knifepoint an A Michelin two-star chef at twenty-eight, Violette Lenoir could handle anything, including a cocky burglar who broke into her restaurant in the middle of the night.Or so she thought.Elite counterterrorist operative Chase “Smith” had been through things that made Hell Week look easy. But nothing had prepared him for a leather-clad blonde who held him at bay at knifepoint and dared him to take her on.Now if only saving the world didn’t require he ruin her life.Two people who thought they could handle anything now have to take on each other. It's a battle neither one expected. But with their futures on the line, they have nothing to lose...but their hearts.Warning: This book contains one arrogant Navy SEAL, nights of Paris passion, and a woman who wants to have it all. ...more",
      tax: "£0.00",
      availibility: 19,
      url: "https://books.toscrape.com/catalogue/chase-me-paris-nights-2_977/index.html",
      image: "https://books.toscrape.com/media/cache/6c/84/6c84fcf7a53b02b6e763de7272934842.jpg",
    },
    {
      title: "In Her Wake",
      price: 12.84,
      categorie: "thriller",
      rating: 1,
      description:
        "A perfect life … until she discovered it wasn’t her own.A tragic family event reveals devastating news that rips apart Bella’s comfortable existence. Embarking on a personal journey to uncover the truth, she faces a series of traumatic discoveries that take her to the ruggedly beautiful Cornish coast, where hidden truths, past betrayals and a 25-year-old mystery threaten n A perfect life … until she discovered it wasn’t her own.A tragic family event reveals devastating news that rips apart Bella’s comfortable existence. Embarking on a personal journey to uncover the truth, she faces a series of traumatic discoveries that take her to the ruggedly beautiful Cornish coast, where hidden truths, past betrayals and a 25-year-old mystery threaten not just her identity, but also her life.Chilling, complex and profoundly moving, In Her Wake is a gripping psychological thriller that questions the nature of family – and reminds us that sometimes the most shocking crimes are committed closest to home. ...more",
      tax: "£0.00",
      availibility: 19,
      url: "https://books.toscrape.com/catalogue/in-her-wake_980/index.html",
      image: "https://books.toscrape.com/media/cache/27/92/2792ef951651ff1eae40a410cac41e0f.jpg",
    },
    {
      title: "Aladdin and His Wonderful Lamp",
      price: 53.13,
      categorie: "default",
      rating: 3,
      description:
        'Planning on seeing Aladdin the Disney musical? Read the classic story of "Aladdin and his Wonderful Lamp" in this sparkling new edition by Harpendore. Synopsis: Aladdin is a poor boy who lives with his mother in the ancient kingdom of Cathay. One day a strange man appears offering untold riches! Aladdin is not so sure, yet he\'s sorely tempted. Join Aladdin on his incredib Planning on seeing Aladdin the Disney musical? Read the classic story of "Aladdin and his Wonderful Lamp" in this sparkling new edition by Harpendore. Synopsis: Aladdin is a poor boy who lives with his mother in the ancient kingdom of Cathay. One day a strange man appears offering untold riches! Aladdin is not so sure, yet he\'s sorely tempted. Join Aladdin on his incredible adventures and visit the cave of treasures. A world of magic awaits you, but watch your step - there\'s mischief lurking at every turn! The Arabian Nights (also known as The One Thousand and One Nights) is an ancient collection of tales that have existed for thousands of years. Harpendore\'s Arabian Nights Adventures are beautifully retold versions of these ancient classics that are specially designed to appeal to children aged seven years and above. They are written in a warm and accessible style and include wonderful illustrations inside. With mischief and magic in equal measure, this series is sure to captivate readers everywhere. The Arabian Nights Adventures series is being released throughout 2016 and 2017. Stories to be included are: The Adventures of Prince Camar & Princess Badoura Aladdin and his Wonderful Lamp Gulnare of the Sea Ali Baba and the Forty Thieves The Seven Voyages of Sinbad the Sailor The Enchanted Horse The Talking Bird, the Singing Tree and the Golden Water The Merchant and the Genie The Tale of Zubaidah and the Three Qalandars The Adventures of Harun al-Rashid, Caliph of Baghdad The Three Princes, the Princess and the Jinni Pari Banou The Fisherman and the Genie The King\'s Jester (also known as The Little Hunchback) ...more',
      tax: "£0.00",
      availibility: 19,
      url: "https://books.toscrape.com/catalogue/aladdin-and-his-wonderful-lamp_973/index.html",
      image: "https://books.toscrape.com/media/cache/a8/3c/a83c460fab82f35a37c0846729485547.jpg",
    },
    {
      title: "You can't bury them all: Poems",
      price: 33.63,
      categorie: "poetry",
      rating: 2,
      description:
        "A poetry that is at once harrowing, angry, and achingly beautiful Patrick Woodcock has spent the past seven years engaging with and being shaped by the people, politics, and landscapes of the Kurdish north of Iraq, Fort Good Hope in the Northwest Territories, and Azerbaijan. His powerful new collection offers a poetry that simultaneously explores hope and horror while doc A poetry that is at once harrowing, angry, and achingly beautiful Patrick Woodcock has spent the past seven years engaging with and being shaped by the people, politics, and landscapes of the Kurdish north of Iraq, Fort Good Hope in the Northwest Territories, and Azerbaijan. His powerful new collection offers a poetry that simultaneously explores hope and horror while documenting the transformative processes of coping. You can’t bury them all follows the narratives we construct to survive the tragic failures of our humanity to their very end: everything that’s buried by snow, dirt, and ash, just like everything that’s buried by politics, homophobia, sexism, racism, religion; and history is resurrected, demanding to be heard and addressed.In Woodcock’s poetry, how we deal with what resurfaces is the key. What do those who suffer really mean to those who have abandoned them to small, conscience-soothing charitable donations or the occasional tweet? How can the poet, or anyone else, sleep at night knowing homosexuals are being thrown off building tops, after one steps into a hole and finds an abandoned corpse in an Azeri cemetery, or after the elders of an Aboriginal community are left helpless against those who only want to exploit them? Still, You can’t bury them all demonstrates that the world is not just the horrific place the media often portrays. In each of the worlds he touches, Woodcock discovers a spirit and strength to celebrate. ...more",
      tax: "£0.00",
      availibility: 17,
      url: "https://books.toscrape.com/catalogue/you-cant-bury-them-all-poems_961/index.html",
      image: "https://books.toscrape.com/media/cache/b7/44/b7440aa88046b0bf8cba50d59295518e.jpg",
    },
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
        New Books from Vintage
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
          {newBooks.map((book, index) => (
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

export default NewBooks;
