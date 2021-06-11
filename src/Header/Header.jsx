import React from "react";
import {
  AppBar,
  Grid,
  Avatar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import NotificationsIcon from "@material-ui/icons/Notifications";
import homeImg from "../Images/photo-1488426862026-3ee34a7d66df.jfif";
import Menus from "./Menus";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "white",
  },
  toolbar: {
    alignItems: "flex-start",
    minHeight: 40,
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
  large: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  appbar: {
    borderRadius: 16,
    backgroundColor: "#6fa6d6",
    // paddingTop: "2px",
    // paddingBottom: "2px",
  },
  inline: {
    display: "inline-flex",
  },
  typography: {
    padding: "10px",
  },
}));
function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box
        display="flex"
        borderRadius={16}
        justifyContent="center"
        p={1}
        // bgcolor="primary.main"
      >
        <AppBar position="static" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Grid container spacing={0}>
              <Grid item xs={11} lg={11} className={classes.inline}>
                <div style={{ paddingTop: "5px" }}>
                  <Avatar
                    className={classes.large}
                    src={homeImg}
                    alt="Home"
                  ></Avatar>
                </div>
                <Typography className={classes.typography}>
                  Good Morning!
                </Typography>
              </Grid>
              <Grid item xs={1} lg={1}>
                {/* <IconButton
                  aria-label="display more actions"
                  edge="end"
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton> */}
                <Menus />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

Header.propTypes = {};

export default Header;
