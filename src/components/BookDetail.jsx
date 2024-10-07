import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

 
  const books = [
    { 
      id: 1, 
      title: '1984', 
      author: 'George Orwell', 
      description: 'Dystopian novel set in a totalitarian society, highlighting themes of surveillance, control, and freedom.', 
      cover: 'https://m.media-amazon.com/images/I/61NAx5pd6XL._AC_UF1000,1000_QL80_.jpg' 
      
    },
    { 
      id: 2, 
      title: 'To Kill a Mockingbird', 
      author: 'Harper Lee', 
      description: 'A classic novel that explores the serious issues of racial inequality and moral growth.', 
      cover: 'https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg' 
    },
    { 
      id: 3, 
      title: 'The Great Gatsby', 
      author: 'F. Scott Fitzgerald', 
      description: 'A portrayal of the Jazz Age, illustrating the themes of wealth, class, and the American Dream.', 
      cover: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg' 
    },
    { 
      id: 4, 
      title: 'Pride and Prejudice', 
      author: 'Jane Austen', 
      description: 'A romantic novel that explores the themes of love, marriage, and societal expectations.', 
      cover: 'https://rukminim2.flixcart.com/image/850/1000/kkec4280/book/d/h/d/pride-prejudice-original-imafzra6pfewjjwb.jpeg?q=90&crop=false' 
    },
    { 
      id: 5, 
      title: 'Moby-Dick', 
      author: 'Herman Melville', 
      description: 'A novel that chronicles the quest of Captain Ahab to take revenge on the white whale Moby-Dick.', 
      cover: 'https://m.media-amazon.com/images/M/MV5BZWUyOTgyMzktMjhmNi00NThkLTkxMGEtMGU0ZDEzZWQxNjNlXkEyXkFqcGc@._V1_.jpg' 
    },
    { 
      id: 6, 
      title: 'War and Peace', 
      author: 'Leo Tolstoy', 
      description: 'A historical novel that depicts the French invasion of Russia and its impact on Tsarist society.', 
      cover: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781524864989/war-and-peace-9781524864989_hr.jpg' 
    },
    { 
      id: 7, 
      title: 'The Catcher in the Rye', 
      author: 'J.D. Salinger', 
      description: 'A novel about teenage rebellion, isolation, and the struggles of growing up.', 
      cover: 'https://rukminim2.flixcart.com/image/850/1000/kufuikw0/book/p/a/q/the-catcher-in-the-rye-original-imag7jttju9vfuxa.jpeg?q=20&crop=false' 
    },
    { 
      id: 8, 
      title: 'The Hobbit', 
      author: 'J.R.R. Tolkien', 
      description: 'A fantasy novel that tells the story of Bilbo Baggins’ journey to win a share of treasure guarded by a dragon.', 
      cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/The_Hobbit_trilogy_dvd_cover.jpg/220px-The_Hobbit_trilogy_dvd_cover.jpg' 
    },
    { 
      id: 9, 
      title: 'Fahrenheit 451', 
      author: 'Ray Bradbury', 
      description: 'Fahrenheit 451 is a 1953 dystopian novel by American writer Ray Bradbury.[4] It presents a future American society where books have been outlawed and "firemen" burn any that are found.[5] The novel follows in the viewpoint of Guy Montag, a fireman who soon becomes disillusioned with his role of censoring literature and destroying knowledge, eventually quitting his job and committing himself to the preservation of literary and cultural writings.', 
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfafFFZfw_7oSOwT0B1Qbun8TyWMe3yaqRdQ&s' 
    },
    { 
      id: 10, 
      title: 'Brave New World', 
      author: 'Aldous Huxley', 
      description: 'Brave New World is set in 2540 ce, which the novel identifies as the year AF 632. AF stands for “after Ford,” as Henry Ford’s assembly line is revered as god-like; this era began when Ford introduced his Model T. The novel examines a futuristic society, called the World State, that revolves around science and efficiency. In this society, emotions and individuality are conditioned out of children at a young age, and there are no lasting relationships because “every one belongs to every one else” (a common World State dictum). Huxley begins the novel by thoroughly explaining the scientific and compartmentalized nature of this society, beginning at the Central London Hatchery and Conditioning Centre, where children are created outside the womb and cloned in order to increase the population. The reader is then introduced to the class system of this world, where citizens are sorted as embryos to be of a certain class. The embryos, which exist within tubes and incubators, are provided with differing amounts of chemicals and hormones in order to condition them into predetermined classes. Embryos destined for the higher classes get chemicals to perfect them both physically and mentally, whereas those of the lower classes are altered to be imperfect in those respects. These classes, in order from highest to lowest, are Alpha, Beta, Gamma, Delta, and Epsilon. The Alphas are bred to be leaders, and the Epsilons are bred to be menial labourers.', 
      cover: 'https://cdn2.penguin.com.au/covers/original/9781784876258.jpg' 
    },
  ];
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return <Typography variant="h4">Book not found</Typography>;
  }

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
      <CardMedia
        component="img"
        image={book.cover}
        alt={book.title}
        style={{ objectFit: 'contain', height: '400px', width: '100%' }} 
      />
      <CardContent>
        <Typography variant="h3" gutterBottom>{book.title}</Typography>
        <Typography variant="h5" gutterBottom>Author: {book.author}</Typography>
        <Typography variant="body1" paragraph>{book.description}</Typography>

        
        <Button 
          onClick={() => navigate('/login')}  
          variant="contained" 
          color="secondary" 
          sx={{ marginTop: 2 }}
          style={{backgroundColor:"#096388"}}
        >
          Buy Now  {book.price}
        </Button>

       
        <Button 
          onClick={() => navigate('/')} 
          variant="contained" 
          color="primary" 
          sx={{ marginTop: 2, marginLeft: 2 }}
          style={{backgroundColor:"#004b69"}}
        >
          Back to Home
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookDetail;