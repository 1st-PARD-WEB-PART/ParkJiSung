import { Box, TextField, Button, Divider, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginBox() {
  return (
    <Box sx={{
      display: 'flex',
      width: '30%',
      height: '25%',
      flexDirection: 'column',
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: 5,
      boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.25)',
    }}
    >
      <TextField
        label="Email or phone number"
        variant="outlined"
        sx={{ mb: 2, }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        sx={{ mb: 4, }}
      />

      <Button
        component={Link} to="/home"
        variant="contained"
        sx={{
          mb: 2,
          textTransform: 'none',
          fontWeight: 700,
          fontSize: '1rem',
          backgroundColor: '#1877F2',
          height: '3rem',
          fontFamily: 'Roboto',
          color: 'white',
        }}
      >
        Login
      </Button>

      <Typography
        sx={{
          textAlign: 'center',
          mb: 2,
          fontWeight: 700,
          fontSize: '1rem',
          color: '#1877F2',
          borderColor: 'white',
        }}
      >Forgot Password?
      </Typography>
      <Divider sx={{ bgcolor: '#8A8D91', mb: 2, }} />
      <Button
        variant="outlined"
        sx={{
          textTransform: 'none',
          fontWeight: 700,
          fontSize: '1rem',
          bgcolor: '#42B72A',
          color: 'white',
          height: '3rem',
        }}
      >Create new account
      </Button>
    </Box>
  );
}
