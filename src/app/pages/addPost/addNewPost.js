import React, { useCallback } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddLink } from "./store/addPostSlice";
import { setToastStateAsync } from "./store/ToastSlice";
import { makeStyles } from '@material-ui/core/styles';

function AddNewPost(props) {

  const useStyles = makeStyles(theme => ({
    LinkBack: {
      textDecoration:"none",
      color: "black"
    },
    SubmitLink:{
      float: "right",
      backgroundColor:"black",
      color: "white",
      fontWeight:"bold",
      borderRadius:"20px",
      fontSize:"24px",
      width: "120px",
      margin:"15px"
    },
    BackIcon:{
      fontSize:"14px"
    }
    
  }));
  const classes = useStyles(props);


  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const { linkDesc, urlLink } = e.target;
      dispatch(AddLink({ linkDesc: linkDesc.value, urlLink: urlLink.value }));
      history.push("/");
      dispatch(
        setToastStateAsync({
          linkDesc: linkDesc.value,
          removedOrAdded: false,
          duration: 1500,
        })
      );
      e.target.reset();
    },
    [dispatch, history]
  );
  return (
    <div>
      <Link to="/" className={classes.LinkBack}>
        <i className="material-icons BackIcon">keyboard_backspace</i>
        Return To List
      </Link>
      <h3 className="">Add New Link</h3>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="linkDesc">Link Name:</Label>
          <Input id="linkDesc" placeholder="e.g. Alphabet" />
        </FormGroup>
        <FormGroup>
          <Label for="urlLink">Link URL:</Label>
          <Input id="urlLink" placeholder="e.g. http://abc.xyz" />
        </FormGroup>
        <button className={classes.SubmitLink}>
          ADD
        </button>
      </Form>
    </div>
  );
}

export default AddNewPost;
