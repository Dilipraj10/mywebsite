import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NavbarUi from './Navbar';
import Footer from './Footer';
import { Container } from '@mui/material';

export default function FeedBack() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [feedback, setFeedback] = React.useState('');

  const handleSubmit = () => {
    // Handle submission logic here, e.g., send data to backend
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Feedback:', feedback);
  };

  return (
    <>
      <NavbarUi />
      <Container className='mt-5'>
      <h1 style={{textAlign:'center'}}>ENTER YOUR FEEDBACK</h1>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > :not(style)': { m: 1 },
          maxWidth: '400px', // Adjust maximum width as needed
          margin: 'auto', // Center align the box
        }}
      >
        <Box sx={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            helperText="Please enter your name"
            id="name"
            label="Name"
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText="Please enter your email"
            id="email"
            label="Email"
          />
        </Box>
        <TextField
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          helperText="Please enter your feedback"
          id="feedback"
          label="Feedback"
          multiline
          rows={4}
          fullWidth
        />
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </Box>
      </Container>
      <Footer />
    </>
  );
}
