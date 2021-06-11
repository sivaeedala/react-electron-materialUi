import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Avatar, Badge, Box, Grid, Toolbar } from "@material-ui/core";
import logo from "../Images/WellsFargoLogo.png";
import AutoCompleteSearch from "../Autocomplete/AutoCompleteSearch";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(1),
      position: "absolute",
      left: 0,
      bottom: 0,
    },
  },
  toolbar: {
    alignItems: "flex-start",
    minHeight: 45,
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  appbar: {
    borderRadius: 16,
    backgroundColor: "#6fa6d6",
    paddingTop: "5px",
    paddingBottom: "0px",
  },
  notification: {
    color: "#f50000",
  },
  avatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    backgroundColor: "#ffc73f",
  },
}));

function Footer(props) {
  const classes = useStyles();
  return (
    <div>
      <Box display="flex" justifyContent="center" p={1}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Grid container spacing={1}>
              <Grid item xs={2} lg={1} alignContent="flex-end">
                <Avatar
                  alt="Wellsfargo logo"
                  variant="square"
                  src={logo}
                  className={classes.small}
                />
              </Grid>
              <Grid item xs={9} lg={10}>
                <AutoCompleteSearch></AutoCompleteSearch>
              </Grid>
              <Grid item xs={1} lg={1}>
                <Badge badgeContent={4} overlap="circle" color="primary">
                  <Avatar className={classes.avatar}>
                    <NotificationsIcon
                      fontSize="large"
                      className={classes.notification}
                    />
                  </Avatar>
                </Badge>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
