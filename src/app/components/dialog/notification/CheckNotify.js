import React from "react";
import { Toast, ToastBody } from "reactstrap";
import { useSelector } from "react-redux";
import { selectToastState } from "../store/ToastSlice";
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function CheckNotify(props) {

    const useStyles = makeStyles(theme => ({
      toastNotification: {
        position: "absolute",
        backgroundColor:"green",
        zIndex:"1",
        top: "100px",
        left:"150px",
        right:"150px",
        textAlign:"center",
        borderRadius:"9"
        
      }
    }));

    const classes = useStyles(props);
  const toastInfo = useSelector(selectToastState);
  if (toastInfo.linkDesc.length > 0) {
    return (
      <div className={classes.toastNotification}>
        <Toast>
          <MuiAlert>
            {toastInfo.linkDesc +
              " " +
              (toastInfo.removedOrAdded ? "removed" : "added") +
              "."}
          </MuiAlert>
        </Toast>
      </div>
    );
  } else {
    return null;
  }
}

export default React.memo(CheckNotify);
