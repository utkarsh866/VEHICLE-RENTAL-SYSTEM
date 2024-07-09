import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GoogleIcon from '@mui/icons-material/Google';

const PaymentOptions = ({ onSelect }) => {
  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom color="white">
        Choose Payment Method
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card
            onClick={() => onSelect('creditCard')}
            sx={{
              cursor: 'pointer',
              backgroundColor: '#ffffff',
              '&:hover': { backgroundColor: '#e0e0e0' },
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <CreditCardIcon fontSize="large" color="primary" />
              <Typography variant="h6">Credit Card</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card
            onClick={() => onSelect('paypal')}
            sx={{
              cursor: 'pointer',
              backgroundColor: '#ffffff',
              '&:hover': { backgroundColor: '#e0e0e0' },
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <AccountBalanceWalletIcon fontSize="large" color="secondary" />
              <Typography variant="h6">PayPal</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card
            onClick={() => onSelect('googlePay')}
            sx={{
              cursor: 'pointer',
              backgroundColor: '#ffffff',
              '&:hover': { backgroundColor: '#e0e0e0' },
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <GoogleIcon fontSize="large" sx={{ color: '#34A853' }} />
              <Typography variant="h6">Google Pay</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentOptions;