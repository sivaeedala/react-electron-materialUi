import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  Avatar,
  Badge,
  CardHeader,
  Collapse,
  Grid,
  GridList,
  GridListTile,
  IconButton,
  GridListTileBar,
  Paper,
  Popover,
  Popper,
  Tooltip,
  AppBar,
  Toolbar,
  Box,
} from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreIcon from "@material-ui/icons/MoreVert";
import clsx from "clsx";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import EventIcon from "@material-ui/icons/Event";
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@material-ui/lab";
import Meeting from "./Meeting";
import CallIcon from "@material-ui/icons/Call";
import m2 from "../Images/M2.jpeg";
import m3 from "../Images/M3.jpg";
import wm1 from "../Images/wm1.jpeg";
import wm2 from "../Images/wm2.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  badge: {
    top: "0%",
    right: "1%",
    color: "red",
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
  meeting: {
    border: "1px solid #4184bf",
    borderRadius: "16px",
    backgroundColor: "#4184bf",
    display: "flex",
    flexDirection: "column",
    boxShadow:
      "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
  },
  legend: {
    backgroundColor: "#4184bf",
    padding: "5px",
    margin: 0,
    borderRadius: "25px",
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    backgroundColor: "#ffc73f",
  },
  button: {
    color: "white",
    padding: "0px 16px",
    "&:hover": {
      backgroundColor: green[400],
      color: "#FFF",
    },
  },
  iconButton: {
    color: "white",
    padding: "0px 12px",
  },
  typoEllips: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  paper: {
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  customTooltip: {
    // I used the rgba color for the standard "secondary" color
    backgroundColor: "#d8a9ba",
  },
  customArrow: {
    color: "#d8a9ba",
  },
  box: {
    border: "1px solid #4184bf",
    borderRadius: "16px",
    backgroundColor: "#4184bf",
    margin: "8px 8px 0px 8px",
    boxShadow:
      "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
  },
}));

function Meetings(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const [popoverAnchor, setPopoverAnchor] = React.useState(null);

  const handleClick = (event) => {
    // setPopoverAnchor(popoverAnchor ? null : event.currentTarget);
    setPopoverAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setPopoverAnchor(null);
  };

  const openPopover = Boolean(popoverAnchor);
  const id = openPopover ? "meetings-popper" : undefined;

  const upcomingMeetings = (
    <div>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">09:30 am</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>DTD Upcoming CR</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">10:00 am</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Code review</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">12:00 am</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Weekly round up</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">9:30 am</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Sprint Planning</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );

  return (
    <div>
      <Box display="flex" justifyContent="center" p={1}>
        <AppBar position="static" className={classes.box}>
          <Toolbar variant="dense">
            <Grid container spacing={1}>
              <Meeting
                time="10:30"
                subject="NX-Redesgin daily scrum meeting"
                img={m2}
              ></Meeting>
              <Meeting
                time="11:30"
                subject="RCA on open production defects and Security risk analysis"
                img={m3}
              ></Meeting>
              <Meeting
                time="14:00"
                subject="Code review and sonar issues discussion"
                // img={m3}
              ></Meeting>
              <Meeting
                time="20:00"
                subject="Sprint Planning"
                img={wm1}
              ></Meeting>

              {/* <Grid item container xs={1}>
                <CallIcon />
              </Grid> */}
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>

      {/* <Grid container spacing={0}>
        <Grid item container xs={11}>
          <Grid item container xs={6}>
            <Meeting></Meeting>
          </Grid>
          <Grid item container xs={6}>
            <Meeting></Meeting>
          </Grid>
          <Grid item container xs={4}>
            <Meeting></Meeting>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <IconButton
            className={clsx(
              classes.expand,
              {
                [classes.expandOpen]: expanded,
              },
              classes.iconButton
            )}
            onClick={handleClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <Tooltip
              title={upcomingMeetings}
              interactive
              arrow
              classes={{
                tooltip: classes.customTooltip,
                arrow: classes.customArrow,
              }}
            >
              <EventIcon />
            </Tooltip>
          </IconButton>
        </Grid>
      </Grid>
     */}
    </div>
  );
}

Meetings.propTypes = {};

export default Meetings;
