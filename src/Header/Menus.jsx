import React from "react";
import PropTypes from "prop-types";
import {
  FormControlLabel,
  FormGroup,
  Switch,
  IconButton,
  MenuItem,
  Menu,
} from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menu: {
    "& ul": {
      paddingBottom: "2px",
      paddingTop: "2px",
    },
    "& ul li": {
      minHeight: "0px",
    },
  },
}));

function Menus(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [checked, setChecked] = React.useState(false);
  const [support, setSupport] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
    setSupport(!support);
  };
  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        // PaperProps={{
        //   style: {
        //     border: "1px solid #d3d4d5",
        //     top: "45px",
        //     left: "580px",
        //   },
        // }}
        anchorPosition={{ top: 200, left: 600 }}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        className={classes.menu}
      >
        <MenuItem onClick={handleClose}>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  size="small"
                  checked={checked}
                  onChange={toggleChecked}
                />
              }
              label={!support ? "Developer" : "Support"}
            />
          </FormGroup>
        </MenuItem>
      </Menu>
    </div>
  );
}

Menus.propTypes = {};

export default Menus;
