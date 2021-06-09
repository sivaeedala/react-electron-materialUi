import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Box, Grid, OutlinedInput, TextField } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  gridContent: {
    color: "white",
  },
  textField: {
    width: "8ch",
    padding: "8px 10px",
    fontSize: ".8rem",
    color: "white",
  },
  label: {
    color: "black",
  },
}));

function Clocks(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Box display="flex" justifyContent="center" p={1}>
        <Grid container spacing={1} className={classes.gridContent}>
          <Grid item>
            <TextField
              id="outlined-read-only-input"
              label="IST"
              defaultValue="10:30 AM"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
              inputProps={{ className: classes.textField }}
              InputLabelProps={{ className: classes.label }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-read-only-input"
              label="CST"
              defaultValue="10:30 AM"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
              inputProps={{ className: classes.textField }}
              InputLabelProps={{ className: classes.label }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-read-only-input"
              label="EST"
              defaultValue="10:30 AM"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
              inputProps={{ className: classes.textField }}
              InputLabelProps={{ className: classes.label }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-read-only-input"
              label="PST"
              defaultValue="10:30 AM"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
              inputProps={{ className: classes.textField }}
              InputLabelProps={{ className: classes.label }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-read-only-input"
              label="AST"
              defaultValue="10:30 AM"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
              inputProps={{ className: classes.textField }}
              InputLabelProps={{ className: classes.label }}
            />
          </Grid>
          {/* <Grid item>
            <TextField
              id="outlined-read-only-input"
              label="MST"
              defaultValue="10:30 AM"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
              inputProps={{ className: classes.textField }}
              InputLabelProps={{ className: classes.label }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-read-only-input"
              label="AST"
              defaultValue="10:30 AM"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
              inputProps={{ className: classes.textField }}
              InputLabelProps={{ className: classes.label }}
            />
          </Grid> */}
        </Grid>
      </Box>
    </div>
  );
}

Clocks.propTypes = {};

export default Clocks;
