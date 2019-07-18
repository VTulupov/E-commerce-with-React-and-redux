import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const PaymentForm = () => {

  return (
    <form>
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
            />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
            required 
            id="cardNumber" 
            label="Card number" 
            fullWidth 
            />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
            required 
            id="expDate" 
            label="Expiry date" 
            fullWidth
            />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
          />
        </Grid>
      </Grid>
    </form>
  )
}

export default PaymentForm
