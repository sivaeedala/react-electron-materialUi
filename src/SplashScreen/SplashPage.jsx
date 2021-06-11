import React from "react";
import PropTypes from "prop-types";
import "./style/splash.css";
import SplashLoading from "./SplashLoading";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  typography: {
    display: "flex",
    justifyContent: "center",
  },
}));

function SplashPage(props) {
  const classes = useStyles();
  return (
    <Box className="bg">
      <Typography variant="h6" className={classes.typography}>
        <Box letterSpacing={6} m={0} p={10}>
          Virtual Assistant
        </Box>
      </Typography>
      <SplashLoading />
      {/* <div className="loader">
        <div className="box"></div>
        <div className="hill"></div>
      </div> */}
    </Box>
  );
}

SplashPage.propTypes = {};

export default SplashPage;
