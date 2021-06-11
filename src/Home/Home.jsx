import React, { useState } from "react";
import PropTypes from "prop-types";
import Footer from "../Footer/Footer";
import { Box, Typography } from "@material-ui/core";
import Header from "../Header/Header";
import { makeStyles } from "@material-ui/core/styles";
import MainContent from "../MainContent/MainContent";
import SplashPage from "../SplashScreen/SplashPage";
const useStyles = makeStyles((theme) => ({
  home: {
    background: "#4184bf",
  },
}));

function Home(props) {
  const [showSplash, setShowSplash] = useState(true);
  const classes = useStyles();
  if (showSplash) {
    setTimeout(() => {
      setShowSplash(false);
    }, 8000);
    return <SplashPage />;
  }
  return (
    <>
      {!showSplash && (
        <Box p={0} className={classes.home}>
          <Header></Header>
          <MainContent></MainContent>
          <Footer></Footer>
        </Box>
      )}
    </>
  );
}

Home.propTypes = {};

export default Home;
