import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    Content: "Test tlkadsndlasdjlasdmnv klasdhv,ms cv;ljsdfj lkasjd sjdv ",
  },
  {
    Content: "Test tlkadsndlasdjlasdmnv klasdhv,ms cv;ljsdfj lkasjd sjdv ",
  },
  {
    Content: "Test tlkadsndlasdjlasdmnv klasdhv,ms cv;ljsdfj lkasjd sjdv ",
  },
  {
    Content: "Test tlkadsndlasdjlasdmnv klasdhv,ms cv;ljsdfj lkasjd sjdv ",
  },
  {
    Content:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  mobileStepper: {
    justifyContent: "center",
    backgroundColor: "#4184bf",
  },
}));

function Events() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div style={{ color: "white" }}>{step.Content}</div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        variant="dots"
        position="static"
        activeStep={activeStep}
        className={classes.mobileStepper}
        style={{ color: "white" }}
      />
    </div>
  );
}

export default Events;
