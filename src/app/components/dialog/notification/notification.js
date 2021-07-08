import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';



function Alert(props) {
    return <MuiAlert elevation={1} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width:"400px",
        height: "250px"
    },
}));

const CustomizedSnackbars = props =>{
    const classes = useStyles();
    // severity : "success", "error", "warning", "info"

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        props.setOpenNotification(false);
    };

    return (
        <div className={classes.root}>
            <Snackbar open={props.openNotification} autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    {props.message}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default CustomizedSnackbars;