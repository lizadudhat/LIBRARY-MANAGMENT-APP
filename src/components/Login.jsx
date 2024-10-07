import React from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

 

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom  >Login</Typography>
      <TextField label="Username" fullWidth margin="normal"  />
      <TextField label="Password" type="password" fullWidth margin="normal"  />
      <Button 
        variant="contained" 
        color="primary" 
        sx={{ mt: 2 }}
        fullWidth
        style={{backgroundColor:"#096388",color:"white"}}
        >
        Login
      </Button>

     
      <Button 
        variant="outlined" 
        color="secondary" 
        onClick={() => navigate('/')} 
        sx={{ mt: 2 }}
        fullWidth
        style={{backgroundColor:"#096388",color:"white"}}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default Login;
