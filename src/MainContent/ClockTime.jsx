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
  TextField,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "./style/main.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#c5e3e6",
  },
  header: {
    padding: "7px",
  },
  content: {
    paddingLeft: "20px",
    paddingTop: "5px",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
    backgroundColor: red[500],
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
    backgroundColor: "#f50057",
  },
  gridContent: {
    color: "white",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

function ClockTime(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      {/* <Badge
        badgeContent={<HighlightOffIcon />}
        overlap="circle"
        color="error"
        className={classes.badge}
      > */}
      <fieldset className={classes.meeting}>
        <legend className={classes.legend}>
          <Avatar aria-label="recipe" className={classes.avatar}>
            T
          </Avatar>
        </legend>
        <Grid container spacing={3} className={classes.gridContent}>
          <Grid item>
            {/* <Typography>India (IST)</Typography>
            <Typography>10:20 pm</Typography> */}
            <TextField
              id="outlined-read-only-input"
              label="India-IST"
              defaultValue="10:30 AM"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
              className={{
                input: classes.textField,
              }}
            />
          </Grid>
          <Grid item>
            <Typography>NY (ET)</Typography>
            <Typography>10:20 am</Typography>
          </Grid>
          <Grid item>
            <Typography>California (CT)</Typography>
            <Typography>09:00 am</Typography>
          </Grid>
        </Grid>
      </fieldset>

      {/* <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar
                aria-label="recipe"
                className={classes.avatar}
                size="small"
              >
                C
              </Avatar>
            }
            title="Clock (time-zones)"
            // subheader="Different time zones"
            className={classes.header}
          />
          <CardContent className={classes.content}>
            <Typography>India (IST)</Typography>
            <Typography>10:20 pm</Typography>
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
              <Typography>NY (ET)</Typography>
              <Typography>10:20 pm</Typography>
              <Typography>California (CT)</Typography>
              <Typography>10:20 pm</Typography>
            </CardContent>
          </Collapse>
          {/* <Grid container spacing={1} direction="column">
          <Grid item>
            <CardContent className={classes.content}>
              <Typography>India (IST)</Typography>
              <Typography>10:20 pm</Typography>
            </CardContent>
          </Grid>
          <Grid item>
            <CardContent className={classes.content}>
              <Typography>India (IST)</Typography>
              <Typography>10:20 pm</Typography>
            </CardContent>
          </Grid>
          <Grid item>
            <CardContent className={classes.content}>
              <Typography>India (IST)</Typography>
              <Typography>10:20 pm</Typography>
            </CardContent>
          </Grid>
          <Grid item>
            <CardContent className={classes.content}>
              <Typography>India (IST)</Typography>
              <Typography>10:20 pm</Typography>
            </CardContent>
          </Grid>
        </Grid> 
        </Card> */}
      {/* </Badge> */}
    </div>
    // <Card className={classes.root}>
    //   <CardContent>
    //     {/* <Typography
    //       color="textSecondary"
    //       gutterBottom
    //     >
    //       Time Zones
    //     </Typography>
    //     <Typography className={classes.pos} color="textSecondary">
    //       adjective
    //     </Typography>
    //     <Typography variant="body2" component="p">
    //       well meaning and kindly.
    //       <br />
    //       {'"a benevolent smile"'}
    //     </Typography> */}

    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
  );
}

ClockTime.propTypes = {};

export default ClockTime;
