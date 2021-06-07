import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ClockTime from "./ClockTime";
import Meetings from "./Meetings";
import Events from "./Events";
const useStyles = makeStyles((theme) => ({
  events: {
    border: "1px solid #4184bf",
    borderRadius: "16px",
    backgroundColor: "#4184bf",
    margin: "0px 8px 0px 8px",
    boxShadow:
      "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
  },
}));

function MainContent(props) {
  const classes = useStyles();
  return (
    <div>
      <Box p={3} className={classes.events}>
        <Events></Events>
      </Box>
      <Box p={3} className={classes.main}>
        <Grid container spacing={2}>
          <Grid item>
            <ClockTime></ClockTime>
          </Grid>
          <Grid item>
            <Meetings></Meetings>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

MainContent.propTypes = {};

export default MainContent;
