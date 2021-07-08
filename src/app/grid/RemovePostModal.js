import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectModalLink, setModalLink } from "./store/ModalSlice";
import { RemoveLink } from "../pages/addPost/store/addPostSlice";
import { makeStyles } from '@material-ui/core/styles';
import { setToastStateAsync } from "../components/dialog/store/ToastSlice";

function RemovePostModal(props) {

  const useStyles = makeStyles(theme => ({
    RemoveModal: {
      textAlign:"center",
      backgroundColor:"#e0e0e0"
    },
    button:{
      float: "right",
      backgroundColor:"black",
      color: "white",
      fontWeight:"bold",
      borderRadius:"20px",
      fontSize:"24px",
      width: "120px",
      marginRight:"10%"
      
    },
    buttonSubmit:{
      float: "left",
      backgroundColor:"black",
      color: "white",
      fontWeight:"bold",
      borderRadius:"20px",
      fontSize:"24px",
      width: "120px",
      marginRight:"30%",
      
    },
    HeaderModalClose:{
      backgroundColor:"black",
      color: "white"

    },
    close:{
      backgroundColor:"black",
      '&:span': {
        backgroundColor:"black"
     },
    }
  }));
  const classes = useStyles(props);
  const dispatch = useDispatch();

  const toggle = () => dispatch(setModalLink({}));
  let modalLink = useSelector(selectModalLink);
  const removeItem = () => {
    dispatch(RemoveLink(modalLink.id));
    toggle();
    dispatch(
      setToastStateAsync({
        linkDesc: modalLink.linkDesc,
        removedOrAdded: true,
        duration: 1500,
      })
    );
  };
  return (
    <div>
      <Modal isOpen={modalLink.hasOwnProperty("id")} toggle={toggle}>
        <ModalHeader toggle={toggle} className={classes.HeaderModalClose} >Remove Link</ModalHeader>
        <div className={classes.RemoveModal}>
          <ModalBody>Do you want to remove:</ModalBody>
          <ModalBody className="LinkName">{modalLink.linkDesc}</ModalBody>
          <ModalFooter>
            <button className={classes.buttonSubmit} onClick={removeItem}>OK</button>
            <button className={classes.button} onClick={toggle}>Cancel</button>
          </ModalFooter>
        </div>
      </Modal>
    </div>
  );
}
export default React.memo(RemovePostModal);
