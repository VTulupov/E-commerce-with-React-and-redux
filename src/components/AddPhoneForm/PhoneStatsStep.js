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

const PhoneStatsStep = ({ phoneStats, handlePhoneStats }) => {
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
            fullWidth
            value={phoneStats.size || ''}
            onChange={handlePhoneStats}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="camera"
            name="camera"
            label="Phone Camera"
            fullWidth
            value={phoneStats.camera || ''}
            onChange={handlePhoneStats}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="resolution"
            name="resolution"
            label="Phone Resolution"
            fullWidth
            value={phoneStats.resolution || ''}
            onChange={handlePhoneStats}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="CPU"
            name="CPU"
            label="Phone CPU"
            fullWidth
            value={phoneStats.CPU || ''}
            onChange={handlePhoneStats}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="GPU"
            name="GPU"
            label="Phone GPU"
            fullWidth
            value={phoneStats.GPU || ''}
            onChange={handlePhoneStats}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="battery"
            name="battery"
            label="Phone Battery"
            fullWidth
            value={phoneStats.battery || ''}
            onChange={handlePhoneStats}
          />
        </Grid>
      </Grid> 
    </Fragment>
  )
}

export default PhoneStatsStep
