import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Grid, Button } from '@mui/material';
import '../App.css'; 

const BookList = () => {
  const [books] = useState([
    { id: 1, title: '1984', author: 'George Orwell', cover: 'https://m.media-amazon.com/images/I/61NAx5pd6XL._AC_UF1000,1000_QL80_.jpg', },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', cover: 'https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', cover: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', cover: 'https://rukminim2.flixcart.com/image/850/1000/kkec4280/book/d/h/d/pride-prejudice-original-imafzra6pfewjjwb.jpeg?q=90&crop=false' },
    { id: 5, title: 'Moby-Dick', author: 'Herman Melville', cover: 'https://m.media-amazon.com/images/M/MV5BZWUyOTgyMzktMjhmNi00NThkLTkxMGEtMGU0ZDEzZWQxNjNlXkEyXkFqcGc@._V1_.jpg' },
    { id: 6, title: 'War and Peace', author: 'Leo Tolstoy', cover: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781524864989/war-and-peace-9781524864989_hr.jpg' },
    { id: 7, title: 'The Catcher in the Rye', author: 'J.D. Salinger', cover: 'https://rukminim2.flixcart.com/image/850/1000/kufuikw0/book/p/a/q/the-catcher-in-the-rye-original-imag7jttju9vfuxa.jpeg?q=20&crop=false' },
    { id: 8, title: 'The Hobbit', author: 'J.R.R. Tolkien', cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/The_Hobbit_trilogy_dvd_cover.jpg/220px-The_Hobbit_trilogy_dvd_cover.jpg' },
    { id: 9, title: 'Fahrenheit 451', author: 'Ray Bradbury', cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfafFFZfw_7oSOwT0B1Qbun8TyWMe3yaqRdQ&s' },
    { id: 10, title: 'Brave New World', author: 'Aldous Huxley', cover: 'https://cdn2.penguin.com.au/covers/original/9781784876258.jpg' },
  ]);

  return (
    <div>
      
      <div className="library-background">
        <div className="overlay">
          <Typography variant="h2" className="library-text">Welcome to the Library</Typography>
        </div>
      </div>

      {/* Book List */}
      <Typography variant="h4" gutterBottom>Book List</Typography>
      <Grid container spacing={4}>
        {books.map(book => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={book.cover}
                alt={book.title}
              />
              <CardContent>
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="subtitle1">{book.author}</Typography>
                <Button component={Link} to={`/book/${book.id}`} variant="contained" color="primary"style={{backgroundColor:"#004b69"}}>
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button component={Link} to="/add-book" variant="contained" color="secondary" sx={{ marginTop: 2 }}style={{backgroundColor:"#004b69",margin:"10px",borderRadius:"30px"}}>
        Add New Book
      </Button>
    </div>
  );
};

export default BookList;
