import  { useState } from 'react';
import { Container, Typography, Box, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PaymentOptions from './PaymentOptions';
import CreditCardForm from './CreditCardForm';
import GooglePayForm from './GooglePayForm';
// import PayPalForm from './PayPalForm'; // Assuming you have a PayPalForm component

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const Paymentg = () => {
  const [selectedPayment, setSelectedPayment] = useState('');

  const renderPaymentForm = () => {
    switch (selectedPayment) {
      case 'creditCard':
        return <CreditCardForm />;
      case 'paypal':
        return <h1>this is Paypal Component</h1>;
      case 'googlePay':
        return <GooglePayForm />;
      default:
        return <PaymentOptions onSelect={setSelectedPayment} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(to right, #6a11cb, #2575fc)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', my: 4 }}>
            <Typography variant="h2" component="h1" gutterBottom color="white">
              Payment Gateway
            </Typography>
            {renderPaymentForm()}
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Paymentg;