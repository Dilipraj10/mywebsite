import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Typography } from '@mui/material';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function LoginUsers() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/UserForgotPassword');
  };

  const handleClick2 = () => {
    navigate('/Register');
  };

  return (
    <Container className='mt-5' style={{textAlign:"center",width:"40%" }}>
      <h1>User Login</h1>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '50%' }, 
          '& .MuiTextField-root': { 
            width: '100%',
            backgroundColor: '#f0f0f0',
            borderRadius: '5px',
          }, 
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Gmail" variant="outlined" />
        <TextField
          id="outlined-password"
          label="Password"
          variant="outlined"
          type="password"
        />
      </Box>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Typography variant="body2">
          Don't have an account? <a href="#" onClick={handleClick2} style={{ textDecoration: 'none' }}>Register</a>
        </Typography>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Typography variant="body2">
          <a href="#" onClick={handleClick} style={{ textDecoration: 'none' }}>Forgot Password?</a>
        </Typography>
      </div>

      <Button variant="success" type="submit" className='mt-3' style={{width:"150px"}} >Login</Button>
    </Container>
  );
}
