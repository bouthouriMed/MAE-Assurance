import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Navbar from "../NavbarAuth";
import Step1 from "../steps/Step1";
import Step2 from "../steps/Step2";
import Step4 from "../steps/Step4";
import Step5 from "../steps/Step5";
import Step6 from "../steps/Step6";
import { ADD_RECLAMATION } from "../../redux/actions/types";
import {
  addReclamation,
  confirmExpertise,
  confirmReclamation,
  confirmPostExpertise,
  finishExpertise,
} from "../../redux/actions/reclamationActions";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Informations Véhicule 1",
    "Informations Véhicule 2",
    "Confirmation",
    "Expertise avant réparation",
    "Expertise aprés réparation",
    "Résumé",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Step1 />;
    case 1:
      return <Step2 />;
    case 2:
      return <Step4 />;
    case 3:
      return <Step5 />;
    case 4:
      return <Step6 />;
    default:
      return "Unknown step";
  }
}

export default function HorizontalLinearStepper({ history }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return null;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const dispatch = useDispatch();
  const reclamation = useSelector(
    (state) => state.reclamationReducer.reclamation
  );

  const handleNext = () => {
    if (reclamation.status === "IN_PROGRESS") {
      console.log("1");
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    } else if (reclamation.status === "REFUSED" && activeStep > 1) {
      console.log("2");

      toast.error("Réclamation refusée");
      history.push("/reclamations-table");
    } else if (reclamation.status === "IN_PROGRESS" && activeStep > 2) {
      dispatch();
    } else {
      console.log("3");
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
      switch (activeStep) {
        case 2:
          return dispatch(confirmReclamation(reclamation, history));
        default:
          return null;
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleClick = () => {
    dispatch(confirmExpertise(reclamation, history));
  };

  return (
    <div className="reclamation-page">
      <div className="reclamation-form ">
        <div className="container mt-5">
          <div className={classes.root}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepOptional(index)) {
                  labelProps.optional = (
                    <Typography variant="caption">Optional</Typography>
                  );
                }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <div>
              {activeStep === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>
                    La réclamation a été envoyé
                  </Typography>
                  <Button onClick={handleReset} className={classes.button}>
                    Reset
                  </Button>
                </div>
              ) : (
                <div>
                  <Typography className={classes.instructions}>
                    {getStepContent(activeStep)}
                  </Typography>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    {isStepOptional(activeStep) && (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSkip}
                        className={classes.button}
                      >
                        Skip
                      </Button>
                    )}

                    {activeStep === steps.length - 1 ? (
                      <Button
                        variant="contained"
                        className={classes.button}
                        color="primary"
                        onClick={() =>
                          dispatch(finishExpertise(reclamation, history))
                        }
                      >
                        Finish
                      </Button>
                    ) : (
                      <Fragment>
                        <Button
                          variant="contained"
                          className={classes.button}
                          color="primary"
                          onClick={handleNext}
                        >
                          Next
                        </Button>
                        {activeStep == 2 &&
                          reclamation &&
                          reclamation.status == "EN_ATTENTE" && (
                            <Button
                              variant="contained"
                              className={classes.button}
                              color="secondary"
                              onClick={() =>
                                dispatch(
                                  confirmReclamation(reclamation, history)
                                )
                              }
                            >
                              Confirmer reclamation
                            </Button>
                          )}
                        {activeStep == 3 &&
                          reclamation &&
                          reclamation.status == "IN_PROGRESS" && (
                            <Button
                              variant="contained"
                              className={classes.button}
                              color="secondary"
                              onClick={handleClick}
                            >
                              Confirmer l'expert
                            </Button>
                          )}
                        {activeStep == 4 &&
                          reclamation &&
                          reclamation.status == "PRE_EXPERTISE" && (
                            <Button
                              variant="contained"
                              className={classes.button}
                              color="secondary"
                              onClick={() =>
                                dispatch(confirmPostExpertise(reclamation, history))
                              }
                            >
                              Confirmer l'expertise
                            </Button>
                          )}
                      </Fragment>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
