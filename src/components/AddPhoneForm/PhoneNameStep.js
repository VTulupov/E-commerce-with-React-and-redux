import React from 'react';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText'

const useStyles = makeStyles(theme => ({
  gutterBottom: {
    paddingBottom: theme.spacing(3)
  }
}));

const PhoneNameStep = ({ phoneBrands, values, onChange, errors }) => {
  const classes = useStyles(); 
  console.log(errors);
  
  return (
    <React.Fragment>
    <Typography component="h1" variant="h6" className={classes.gutterBottom} >
      Phone Name and Description
    </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth error={errors.brand ? true : false}>
            <InputLabel htmlFor="phone-brand">Brand *</InputLabel>
            <Select
              required
              value={values.brand || ''}
              onChange={onChange}
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
            <FormHelperText>{errors.brand}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Phone name"
            helperText={errors.name}
            error={errors.name ? true : false}
            fullWidth
            autoComplete="lname"
            value={values.name || ''}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="price"
            name="price"
            label="Phone price"
            helperText={errors.price}
            error={errors.price ? true : false}
            fullWidth
            autoComplete="lname"
            value={values.price || ''}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label='Phone Description'
            id="description"
            name="description"
            helperText={errors.description}
            error={errors.description ? true : false}
            multiline={true}
            rows={6}
            rowsMax={6}
            fullWidth
            value={values.description || ''}
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default PhoneNameStep
