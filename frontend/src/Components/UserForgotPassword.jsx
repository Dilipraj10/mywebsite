import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container} from '@mui/material';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';



// Login form component
export default function UserForgotPassword() {

  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/LoginUser')
  }


  return (
    <Container className='mt-5' style={{textAlign:"center",width:"40%" }}>
      <h1>Forgotten Password</h1>
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
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <TextField
          id="outlined-password"
          label="Confirm Password"
          variant="outlined"
          type="password"
        />
      </Box>
      {/* Submit button */}
      <Button onClick = {handleClick} variant="success" type="submit" className='mt-3' style={{width:"150px"}} >submit</Button>
    </Container>
  );
}
