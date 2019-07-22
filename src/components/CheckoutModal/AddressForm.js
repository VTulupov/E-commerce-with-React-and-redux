import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const AddressForm = ({ values, onChange }) => {

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="First Name"
            label="First name"
            fullWidth
            value={values.firstName}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="Last Name"
            label="Last name"
            fullWidth
            autoComplete="lname"
            value={values.lastName}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="Address"
            label="Address line 1"
            fullWidth
            value={values.address}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="City"
            label="City"
            fullWidth
            value={values.city}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            id="state" 
            name="Region" 
            label="State/Province/Region" 
            fullWidth
            value={values.region}
            onChange={onChange} 
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="Zip"
            label="Zip / Postal code"
            fullWidth
            value={values.zip}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="Country"
            label="Country"
            fullWidth
            value={values.country}
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default AddressForm
