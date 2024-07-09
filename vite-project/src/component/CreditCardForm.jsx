import { Box, TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const CreditCardForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
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
      <Typography variant="h5" gutterBottom >
        Credit Card Payment
      </Typography>
      <TextField
        required
        label="Card Number"
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
      <TextField
        required
        label="Expiry Date"
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
      <TextField
        required
        label="CVC"
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
        Pay
      </Button>
    </Box>
  );
};

export default CreditCardForm;