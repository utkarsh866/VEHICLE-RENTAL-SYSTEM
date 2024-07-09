import { Box, TextField, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
const GooglePayForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission for Google Pay
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, margin: 'auto' }}>
       <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2, mb: 4, bgcolor: '#1976d2', color: 'white' }}
        component={Link}
        to="/userdetails"
      >
        BACK
      </Button>
      <Typography variant="h5" gutterBottom>
        Google Pay Payment
      </Typography>
      <TextField
        required
        label="Google Pay Email"
        fullWidth
        margin="normal"
        sx={{ bgcolor: 'white' }}
        InputLabelProps={{
          style: { color: 'black' },
        }}
        InputProps={{
          style: { color: 'black' },
        }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Pay with Google Pay
      </Button>
    </Box>
  );
};

export default GooglePayForm;
