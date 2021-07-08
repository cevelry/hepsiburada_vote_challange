import React from "react";
import hb from '../../../app/static/icon/Hepsiburada.png'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

function Header(props) {

  const useStyles = makeStyles(theme => ({
    HeaderContainer: {
      width: "100%",
      marginTop:"10px"
    },
    HeaderQuato:{
      fontWeight:"bold"

    },
    HeaderQuatoNext:{
      fontWeight:"lighter"
    },
    HeaderQuatoContainer:{
      float: "right",
      fontSize:"23px",
      padding: "5px"
    }
  }));
  const classes = useStyles(props);
  return (
    <div className={classes.HeaderContainer}>
      <Link to="/">
        <img src={hb} alt="logo" />
      </Link>
      <span className={classes.HeaderQuatoContainer}>
        <span className={classes.HeaderQuato}>Link</span>
        <span className={classes.HeaderQuatoNext}>VOTE </span>
        Challenge
      </span>
      <hr />
    </div>
  );
}

export default Header;
