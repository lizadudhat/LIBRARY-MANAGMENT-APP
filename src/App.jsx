import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import BookForm from './components/BookForm';
import Login from './components/Login';
function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar style={{backgroundColor:"#004b69"}}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}style={{fontSize:"50px"}}>
            Library 
          </Typography>
          <Button  
            component={Link} 
            to="/add-book" 
            variant="contained" 
            color="inherit" 
            sx={{ marginLeft: 2 }}
            style={{backgroundColor:"#096388"}}
          >
            Add New Book
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/add-book" element={<BookForm />} />
          <Route path="/login" element={<Login />} /> 
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
