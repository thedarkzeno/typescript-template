import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../../Assets/logo.png";
import { Pt } from "../../Config/lang";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appbar: {
      backgroundColor: "#FFF",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    middle: {
      flexGrow: 5,
    },
    links: {
      display: "flex",
      justifyContent: "space-around",
      flexGrow: 1,
      marginRight: 0,
      color: "#9e9e9e",
    },
    link: {
      fontWeight: "bold",
      "&:hover": {
        color: "#420f73",
      },
    },
  })
);

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.title}>
            <img src={logo} width="150" alt="" />
          </Typography>
          <div className={classes.middle}></div>
          <div className={classes.links}>
            <Typography className={classes.link}>{Pt.values.header.howItWorks}</Typography>
            <Typography className={classes.link}>{Pt.values.header.solutions}</Typography>
            <Typography className={classes.link}>{Pt.values.header.enterprise}</Typography>
            <Typography className={classes.link}>{Pt.values.header.login}</Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
