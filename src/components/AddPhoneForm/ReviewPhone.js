import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import phoneImg from './../../product-2.png';
import './ReviewPhone.scss';

const useStyles = makeStyles(theme => ({
  gutterBottom: {
    paddingBottom: theme.spacing(3)
  },
  phoneName: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  marginTopBig: {
    marginTop: theme.spacing(4),
  },
  whiteSpace: {
    flex: 1
  }
}));

const ReviewPhone = ({ values }) => {
  const classes = useStyles();

  return (
    <div className="custom-ui">
      <Typography component="h1" variant="h6" className={classes.gutterBottom} >
        Review your phone
      </Typography>
      <Grid container>
        <Grid item container direction="column"  xs={12} sm={6}>
          <Grid container>
            <Grid item xs={12}>
              <div className="imgBox">
                <img src={phoneImg} alt="phone" className='imgBox--img' />
              </div>
            </Grid>
            <Grid item xs={12} className='title'>
              <Typography gutterBottom variant="h6">{values.brand} {values.name} ${values.price}</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container direction="column"  xs={12} sm={6}>
          <Grid container>
            {
              Object.entries(values).map(([key, value]) => {
                return (
                  <Fragment key={key}>
                    <Grid item xs={12} className='grid-key'>
                      <Typography className='key'>{key}</Typography>
                    </Grid>
                    <Grid item xs={12} className='grid-value'>
                      <Typography gutterBottom className='value'>{value.toString()}</Typography>
                    </Grid>
                  </Fragment>
                )
              })
            }
          </Grid>
        </Grid>
        

      </Grid>

      <Grid item container direction="column" xs={12}>
        <Grid item xs={12} className={classes.marginTopBig}>
          <Typography gutterBottom>{values.description}</Typography>
        </Grid>
      </Grid>

    </div>
  )
}

export default ReviewPhone
