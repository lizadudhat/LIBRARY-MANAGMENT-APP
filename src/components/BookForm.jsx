import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container } from '@mui/material';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log({ title, author, description });
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Add New Book</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}style={{backgroundColor:"#004b69",color:"white"}}>
          Add Book
        </Button>
      </form>
      <Button onClick={() => navigate('/')} variant="outlined"  sx={{ marginTop: 2 }}style={{backgroundColor:"#004b69",color:"white"}}>
        Back to Home
      </Button>
    </Container>
  );
};

export default BookForm;
