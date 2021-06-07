import React from "react";
import PropTypes from "prop-types";
import Footer from "../Footer/Footer";
import { Box } from "@material-ui/core";
import Header from "../Header/Header";
import { makeStyles } from "@material-ui/core/styles";
import MainContent from "../MainContent/MainContent";
const useStyles = makeStyles((theme) => ({
  home: {
    background: "#4184bf",
  },
}));

function Home(props) {
  const classes = useStyles();
  return (
    <Box p={3} className={classes.home}>
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
    </Box>
  );
}

Home.propTypes = {};

export default Home;
