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
import { addShippingAddress, addPaymentMethod, clearInfo } from '../../actions/payment';

const useStyles = makeStyles(theme => ({
  stepper: {
    padding: theme.spacing(3, 0, 3),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
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

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [zip, setZip] = useState(0);
  const [country, setCountry] = useState('');

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleRegion = (e) => setRegion(e.target.value);
  const handleZip = (e) => setZip(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);

  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [CVV, setCVV] = useState('');

  const handleCardName = (e) => setCardName(e.target.value);
  const handleCardNumber = (e) => setCardNumber(e.target.value);
  const handleExpiryDate = (e) => setExpiryDate(e.target.value);
  const handleCVV = (e) => setCVV(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeStep === 0) {
      dispatch(addShippingAddress({
        firstName,
        lastName,
        address,
        city,
        region,
        zip,
        country
      }))
      handleNext();
    } else if (activeStep === 1) {
      dispatch(addPaymentMethod({
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

  const userInput = { firstName, lastName, address, city, region, zip, country }
  const paymentInput = { cardName, cardNumber, expiryDate, CVV }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

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
        return <AddressForm userInput={userInput}
          handleFirstName={handleFirstName}
          handleLastName={handleLastName}
          handleAddress={handleAddress}
          handleCity={handleCity}
          handleRegion={handleRegion}
          handleZip={handleZip}
          handleCountry={handleCountry}
        />;
      case 1:
        return <PaymentForm paymentInput={paymentInput} 
          handleCardName={handleCardName}
          handleCardNumber={handleCardNumber}
          handleExpiryDate={handleExpiryDate}
          handleCVV={handleCVV}
        />;
      case 2:
        return <Review />;
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
        <Typography component="h1" variant="h4" align="center">
            CHECKOUT
        </Typography>
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
                <form onSubmit={handleSubmit}>
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
