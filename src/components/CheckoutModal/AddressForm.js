import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const AddressForm = ({ values, onChange, errors }) => {
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
            name="firstName"
            label="First name"
            helperText={errors.firstName}
            error={errors.firstName ? true : false}
            fullWidth
            value={values.firstName || ''}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            helperText={errors.lastName}
            error={errors.lastName ? true : false}
            value={values.lastName || ''}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address"
            label="Address line 1"
            helperText={errors.address}
            error={errors.address ? true : false}
            fullWidth
            value={values.address || ''}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            helperText={errors.city}
            error={errors.city ? true : false}
            fullWidth
            value={values.city || ''}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            id="state" 
            name="region" 
            label="State/Province/Region" 
            helperText={errors.region}
            error={errors.region ? true : false}
            fullWidth
            value={values.region || ''}
            onChange={onChange} 
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            helperText={errors.zip}
            error={errors.zip ? true : false}
            fullWidth
            value={values.zip || ''}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            helperText={errors.country}
            error={errors.country ? true : false}
            fullWidth
            value={values.country || ''}
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default AddressForm
