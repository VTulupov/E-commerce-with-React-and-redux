import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import ReviewPhone from './ReviewPhone';
import PhoneNameStep from './PhoneNameStep';
import PhoneStatsStep from './PhoneStatsStep';
import { getAllPhoneBrands } from '../../selectors/phones';
import { addNewPhone } from '../../actions/phones';
import { useForm } from '../../hooks/useForm.js/useForm';
import validateForm from './formValidation';

const useStyles = makeStyles(theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(0, 0, 2),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  button: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(1),
  },
  backButton: {
    marginTop: theme.spacing(4),
  },
  whiteSpace: {
    flex: 1
  }
}));

const AddPhoneForm = ({ history }) => {
  const steps = ['Phone Name', 'Phone Stats', 'Review your phone'];
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const phoneBrands = useSelector(getAllPhoneBrands);
  const dispatch = useDispatch();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const submitFormCallback = () => {
    if (activeStep === steps.length - 1) {
      dispatch(addNewPhone({
        brand,
        name,
        price,
        description,
        size,
        resolution,
        GPU,
        CPU,
        camera,
        battery
      }))
      history.push('/');
    } else {
      handleNext();
    }
  }

  const { onChange, onSubmit, errors, values } = useForm(submitFormCallback, validateForm(activeStep))

  const { brand, name, price, description, size, resolution, GPU, CPU, camera, battery } = values;

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <PhoneNameStep phoneBrands={phoneBrands} values={values} errors={errors} onChange={onChange} />;
      case 1:
        return <PhoneStatsStep values={values} errors={errors} onChange={onChange} />;
      case 2:
        return <ReviewPhone values={values} />;
      default:
        throw new Error('Unknown step');
    }
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
            <React.Fragment>
            <form onSubmit={onSubmit} noValidate autoComplete="off">
              {getStepContent(activeStep)}
            
              <div className={classes.buttons}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => history.push('/')}
                  className={classes.backButton}
                >
                  Back To Homepage
                </Button>
                <div className={classes.whiteSpace}></div>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  type='submit'
                >
                  {activeStep === steps.length - 1 ? 'Submit phone' : 'Next'}
                </Button>
              </div>
            </form>
            </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  )
}

export default AddPhoneForm
