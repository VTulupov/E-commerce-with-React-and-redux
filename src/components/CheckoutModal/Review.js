import React, {Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { useSelector } from "react-redux";
import { getCartState, getCartTotal } from './../../selectors/phones'

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

const Review = () => {
  const classes = useStyles();
  const products = useSelector(getCartState);
  const total = useSelector(getCartTotal);

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map(product => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={`${product.brand} ${product.name}`} secondary={`Quantity: ${product.quantity}`} />
            <Typography variant="body2">${product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${total}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item container direction="column"  xs={12} sm={6}>
          <Typography gutterBottom variant="h6" className={classes.title} >User Info</Typography>
          <Grid container>

          </Grid>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>Card Type</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Visa</Typography>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default Review
