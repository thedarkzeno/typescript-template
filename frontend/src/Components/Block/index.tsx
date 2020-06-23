import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
      marginTop: 20,
    },
  })
);
export default function Block(props: any) {
  const classes = useStyles();
  return <div className={classes.container}>{props.children}</div>;
}
