import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import { Grid, Avatar, Typography } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid white",
    borderRadius: "10px",
    margin: "0px 10px 0px 2px",
    padding: "5",
    padding: "5px",
    fontSize: "10px",
    // fontFamily: "Roboto", "Helvetica", "Arial", sans-serif;
    lineHeight: "1.5",
    // fontFamily: "'Libre Baskerville', serif",
  },
  typoEllips: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: ".9rem",
  },
  avatar: {
    width: "20px",
    height: "20px",
    backgroundColor: "#ffc73f",
    fontSize: ".8rem",
  },
  callIcon: {
    height: ".7em",
  },
}));

function Meeting({ time, subject, img }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Grid item container xs={12}>
        <Grid item xs={1}>
          <Avatar alt="Remy Sharp" src={img} className={classes.avatar} />
        </Grid>
        <Grid item xs={10}>
          <Typography className={classes.typoEllips}>
            {`${time} - ${subject}`}
            {/* 10:30 - Meeting with Gowtham on open items and test and upcoming
            Production CR */}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <CallIcon className={classes.callIcon} />
        </Grid>
      </Grid>
      {/* <div className={classes.root}>
        <Grid item container xs={12}>
          <Grid item xs={3}>
            <Avatar aria-label="recipe" className={classes.avatar}>
              M
            </Avatar>
          </Grid>
          <Grid item xs={7}>
            10:30 AM
          </Grid>
          <Grid item xs={2}>
            <CallIcon />
          </Grid>
        </Grid>
        <Grid item container xs={12}>
          <Grid item>Production support - Eco call issue</Grid>
        </Grid>
      </div> */}
    </>
  );
}

Meeting.propTypes = {};

export default Meeting;
