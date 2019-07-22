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
    padding: theme.spacing(0, 0, 3),
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

  const [phoneInfo, setPhoneInfo] = useState({});
  const [phoneStats, setPhoneStats] = useState({});

  const handlePhoneInfo = (e) => {
    e.persist();
    setPhoneInfo({ ...phoneInfo, [e.target.name]: e.target.value });
  }

  const handlePhoneStats = (e) => {
    e.persist();
    setPhoneStats({ ...phoneStats, [e.target.name]: e.target.value });
  }

  const { brand, name, price, description } = phoneInfo
  const { size, camera, resolution, CPU, GPU, battery } = phoneStats

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <PhoneNameStep phoneBrands={phoneBrands} phoneInfo={phoneInfo} handlePhoneInfo={handlePhoneInfo} />;
      case 1:
        return <PhoneStatsStep phoneStats={phoneStats} handlePhoneStats={handlePhoneStats} />;
      case 2:
        return <ReviewPhone phoneInfo={phoneInfo} phoneStats={phoneStats} />;
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
            <form onSubmit={handleSubmit}>
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
