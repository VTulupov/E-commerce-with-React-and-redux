import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { addShippingAddress } from '../../actions/payment';
import { useDispatch } from 'react-redux';

const AddressForm = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [zip, setZip] = useState(0);
  const [country, setCountry] = useState('');

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleRegion = (e) => setRegion(e.target.value);
  const handleZip = (e) => setZip(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addShippingAddress({
      firstName,
      lastName,
      address,
      city,
      region,
      zip,
      country
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            value={firstName}
            onChange={handleFirstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
            value={lastName}
            onChange={handleLastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            value={address}
            onChange={handleAddress}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            value={city}
            onChange={handleCity}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            id="state" 
            name="state" 
            label="State/Province/Region" 
            fullWidth
            value={region}
            onChange={handleRegion} 
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            value={zip}
            onChange={handleZip}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            value={country}
            onChange={handleCountry}
          />
        </Grid>
      </Grid>
    </form>
  )
}

export default AddressForm
