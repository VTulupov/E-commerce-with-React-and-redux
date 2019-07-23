import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  gutterBottom: {
    paddingBottom: theme.spacing(3)
  }
}));

const PhoneStatsStep = ({ values, onChange, errors }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Typography component="h1" variant="h6" className={classes.gutterBottom} >
        Phone Stats and Size
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="size"
            name="size"
            label="Phone Size"
            helperText={errors.size}
            error={errors.size ? true : false}
            fullWidth
            value={values.size || ''}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="camera"
            name="camera"
            label="Phone Camera"
            helperText={errors.camera}
            error={errors.camera ? true : false}
            fullWidth
            value={values.camera || ''}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="resolution"
            name="resolution"
            label="Phone Resolution"
            helperText={errors.resolution}
            error={errors.resolution ? true : false}
            fullWidth
            value={values.resolution || ''}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="CPU"
            name="CPU"
            label="Phone CPU"
            helperText={errors.CPU}
            error={errors.CPU ? true : false}
            fullWidth
            value={values.CPU || ''}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="GPU"
            name="GPU"
            helperText={errors.GPU}
            error={errors.GPU ? true : false}
            label="Phone GPU"
            fullWidth
            value={values.GPU || ''}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="battery"
            name="battery"
            label="Phone Battery"
            helperText={errors.battery}
            error={errors.battery ? true : false}
            fullWidth
            value={values.battery || ''}
            onChange={onChange}
          />
        </Grid>
      </Grid> 
    </Fragment>
  )
}

export default PhoneStatsStep
