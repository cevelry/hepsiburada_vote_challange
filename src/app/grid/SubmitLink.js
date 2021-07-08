import React from "react";
import BoxContainer from "./BoxContainer";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

function SubmitLink(props) {
  const useStyles = makeStyles(theme => ({
    submitLink: {
      border: "1px solid",
      borderColor:"grey",
      borderRadius:"4px",
      backgroundColor:"rgb(247, 247, 247)"
    },
    Link:{
      textDecoration:"none",
      color:"black",
      '&:hover': {
        textDecoration:"none",
        color:"black"
     },
    },
    column:{
       padding: "5px"
    },
    submitText:{
      display: "flex",
      justifyContent:"center",
      alignContent:"center",
      flexDirection:"column",
      fontWeight:"bold",
      fontSize:"24px",

    },
    rowAuto:{
      display: "flex",
      flexDirection:"row",
    }
  }));
  const classes = useStyles(props);

  return (
    <div className={classes.submitLink}>
      <Link to="/add" className={classes.Link}>
        <Container>
          <Row className={classes.rowAuto}>
            <Col md="auto" className={classes.column}>
              <BoxContainer text="+" />
            </Col>
            <Col className={classes.submitText}>SUBMIT A LINK</Col>
          </Row>
        </Container>
      </Link>
    </div>
  );
}
export default SubmitLink;
