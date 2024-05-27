import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, IconButton, InputAdornment, Link ,Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from 'react-bootstrap/Button';

import { useNavigate } from 'react-router-dom';


export default function Register() {

  const navigate = useNavigate();
  const handleClick = () =>{
    navigate('/LoginUser')
  }


  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className='mt-5' style={{textAlign:"center",width:"40%"}}>
      <h1>User Register</h1>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '50%' }, 
          '& .MuiTextField-root': { 
            width: '100%', // Adjusted width for TextField
            backgroundColor: '#f0f0f0', // Background color for TextField
            borderRadius: '5px', // Optional: Adds rounded corners to TextField
          }, 
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Gmail" variant="outlined" />
        <TextField
          id="outlined-password"
          label="Password"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="outlined-confirm-password"
          label="Confirm Password"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Typography variant="body2">
        Already have an account?<a href="#" onClick={handleClick} style={{ textDecoration: 'none' }}>Signin</a>

      </Typography>

      {/* Integrate the first code here as the submit button */}
      <Button onClick={handleClick} variant="success" type="submit" className='mt-3' style={{width:"150px"}} >Register</Button>
    </Container>
  );
}
