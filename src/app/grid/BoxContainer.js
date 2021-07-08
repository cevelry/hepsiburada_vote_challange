import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx";

function BoxContainer(props) {
 
  const useStyles = makeStyles(theme => ({
    BoxView: {
      width: "75px",
      height: "75px",
      border: "1px solid",
      borderRadius:"7.5px",
      textAlign:"center",
      display: "flex",
      flexDirection:"column",
      backgroundColor:"rgba(236, 236, 236)"
    },
    BoxView_text:{
      fontWeight:"bold",
      fontSize:"32px",
    }
  }));
  const classes = useStyles(props);
  return (
    <div className={classes.BoxView}>
      <div
        className={clsx(classes.BoxView_text,"BoxContainerTest")}
        style={props.subText === undefined ? { fontSize: "45px" } : {}}
      >
        {props.text}
      </div>
      <div>{props.subText}</div>
    </div>
  );
}

export default React.memo(BoxContainer);
