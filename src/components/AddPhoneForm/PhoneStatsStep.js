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

const PhoneStatsStep = (props) => {
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
            id="phoneSize"
            name="phoneSize"
            label="Phone Size"
            fullWidth
            value={props.phoneStats.size}
            onChange={props.handleSize}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneCamera"
            name="phoneCamera"
            label="Phone Camera"
            fullWidth
            value={props.phoneStats.camera}
            onChange={props.handleCamera}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phoneResolution"
            name="phoneResolution"
            label="Phone Resolution"
            fullWidth
            value={props.phoneStats.resolution}
            onChange={props.handleResolution}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phoneCPU"
            name="phoneCPU"
            label="Phone CPU"
            fullWidth
            value={props.phoneStats.CPU}
            onChange={props.handleCPU}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneGPU"
            name="phoneGPU"
            label="Phone GPU"
            fullWidth
            value={props.phoneStats.GPU}
            onChange={props.handleGPU}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneBattery"
            name="phoneBattery"
            label="Phone Battery"
            fullWidth
            value={props.phoneStats.battery}
            onChange={props.handleBattery}
          />
        </Grid>
      </Grid> 
    </Fragment>
  )
}

export default PhoneStatsStep
