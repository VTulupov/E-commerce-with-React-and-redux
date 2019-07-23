import React, { Fragment, useState } from 'react'
import Modal from 'react-modal';
import './CheckoutModal.scss';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import uuid from 'uuid/v4'
import { clearCart } from '../../actions/phones';
import { useDispatch } from 'react-redux';
import { addPaymentInfo, clearInfo } from '../../actions/payment';
import { useForm } from '../../hooks/useForm.js/useForm';
import validateForm from './CheckoutFormValidtation';

const useStyles = makeStyles(theme => ({
  stepper: {
    padding: theme.spacing(2, 0, 2),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  marginTopSmall: {
    marginTop: theme.spacing(1.5)
  },
  marginTopBig: {
    marginTop: theme.spacing(3)
  }
}));

const CheckoutModal = ({ modal, closeModal }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  let [ activeStep, setActiveStep ] = useState(0);
  const steps = ['Shipping address', 'Payment details', 'Review your order'];

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const submitFormCallback = () => {
    if (activeStep === 2) {
      dispatch(addPaymentInfo({
        firstName,
        lastName,
        address,
        city,
        region,
        zip,
        country,
        cardName,
        cardNumber,
        expiryDate,
        CVV
      }))
      handleNext();
    } else {
      handleNext();
    }
  }

  const { values, errors, onChange, onSubmit } = useForm(submitFormCallback, validateForm(activeStep));

  const { firstName, lastName, address, city, region, zip, country, cardName, cardNumber, expiryDate, CVV } = values;

  const resetSteps = () => {
    if (activeStep === steps.length) {
      setActiveStep(activeStep = 0);
      closeModal();
      dispatch(clearCart());
      dispatch(clearInfo());
    } else {
      closeModal();
    }
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm values={values} onChange={onChange} errors={errors} />;
      case 1:
        return <PaymentForm values={values} onChange={onChange} errors={errors} />;
      case 2:
        return <Review values={values} />;
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <Modal
      isOpen={modal}
      onRequestClose={resetSteps}
      contentLabel='CheckoutModal'
      ariaHideApp={false}
      className='Modal'
      overlayClassName='Overlay'
    >
      <CssBaseline />
      <main >
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Fragment>
          {activeStep === steps.length ? (
            <Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
              Your order number is <b>#{uuid().substring(0, 7)}</b> We have emailed your order confirmation, and will
                send you an update when your order has shipped.
              </Typography>
              <div className={classes.buttons + ' ' + classes.marginTopBig}>
                <Button 
                  variant="contained"
                  color="primary"
                  onClick={resetSteps}
                >
                Close
                </Button>
              </div>
            </Fragment>
          ) : (
              <form onSubmit={onSubmit} noValidate autoComplete='off'>
                {
                  getStepContent(activeStep)
                }
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    type='submit'
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </form>
            )
          }
        </Fragment>
      </main>
    </Modal>
  )
}

export default CheckoutModal
