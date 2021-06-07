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
  IconButton,
  Paper,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    padding: "7px",
  },
  content: {
    paddingLeft: "20px",
    paddingTop: "0px",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
    backgroundColor: "#321861",
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  cardAction: {
    marginTop: "-40px",
  },
  badge: {
    top: "0%",
    right: "1%",
    color: "red",
  },
}));

function Meetings(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Badge
        badgeContent={<HighlightOffIcon />}
        overlap="circle"
        color="error"
        className={classes.badge}
      >
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                M
              </Avatar>
            }
            title="Meetings"
            // subheader="Different time zones"
            className={classes.header}
          />
          <CardContent className={classes.content}>
            <Button size="small" color="primary">
              Daily Scrum - Skype
            </Button>
            <Typography>08:00 am</Typography>
          </CardContent>
          <CardActions disableSpacing className={classes.cardAction}>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent className={classes.content}>
              <Typography>11:30</Typography>
              <Typography>Daily team connect</Typography>
              <Typography>02:30</Typography>
              <Typography>Sprint planning</Typography>
              {/* <Timeline align="alternate">
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
           */}
            </CardContent>
          </Collapse>
        </Card>
      </Badge>
    </div>
  );
}

Meetings.propTypes = {};

export default Meetings;
