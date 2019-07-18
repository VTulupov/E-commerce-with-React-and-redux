import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const PaymentForm = (props) => {
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField 
            required 
            id="cardName" 
            label="Name on card" 
            fullWidth 
            value={props.paymentInput.cardName}
            onChange={props.handleCardName}
            />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
            required 
            id="cardNumber" 
            label="Card number" 
            fullWidth
            value={props.paymentInput.cardNumber}
            onChange={props.handleCardNumber}
            />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
            required 
            id="expDate" 
            label="Expiry date" 
            fullWidth
            value={props.paymentInput.expiryDate}
            onChange={props.handleExpiryDate}
            />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            value={props.paymentInput.CVV}
            onChange={props.handleCVV}
          />
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default PaymentForm
