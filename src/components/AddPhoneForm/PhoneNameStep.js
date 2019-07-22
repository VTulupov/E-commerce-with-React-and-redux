import React from 'react';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  gutterBottom: {
    paddingBottom: theme.spacing(3)
  }
}));

const PhoneNameStep = ({ phoneBrands, phoneInfo, handlePhoneInfo }) => {
  const classes = useStyles(); 

  return (
    <React.Fragment>
    <Typography component="h1" variant="h6" className={classes.gutterBottom} >
      Phone Name and Description
    </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="phone-brand">Brand *</InputLabel>
            <Select
              required
              value={phoneInfo.brand || ''}
              onChange={handlePhoneInfo}
              inputProps={{
                name: 'brand',
                id: 'phone-brand'
              }}
            >
            {
              phoneBrands.map((brand) => (
                <MenuItem key={brand} value={brand}>
                  {brand}
                </MenuItem>
              ))
            }
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Phone name"
            fullWidth
            autoComplete="lname"
            value={phoneInfo.name || ''}
            onChange={handlePhoneInfo}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="price"
            name="price"
            label="Phone price"
            fullWidth
            autoComplete="lname"
            value={phoneInfo.price || ''}
            onChange={handlePhoneInfo}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label='Phone Description'
            id="description"
            name="description"
            multiline={true}
            rows={6}
            rowsMax={6}
            fullWidth
            value={phoneInfo.description || ''}
            onChange={handlePhoneInfo}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default PhoneNameStep
