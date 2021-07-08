import React from "react";
import { Container, Row, Col } from "reactstrap";
import clsx from "clsx"
import BoxContainer from "./BoxContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  UpVote,
  DownVote,
  selectHoveredLinkId,
  SetHoveredLinkId,
  selectLinkInfos,
} from "../pages/addPost/store/addPostSlice";
import { makeStyles } from '@material-ui/core/styles';
import { setModalLink } from "./store/ModalSlice";

function VoteItem(props) {
  const useStyles = makeStyles(theme => ({
    remove: {
      width: "30px",
      height: "30px",
      marginRight:"300px",
    },
    removeButton: {
      border: "0",
      cursor: "pointer",
      position: "absolute",
      top:"0",
      right:"0",
      zIndex:"1"
    },
    Item:{
      listStyleType:"none",
      cursor: "pointer",
      position: "relative"
    },
    ItemContainer:{
     paddingTop:"10px",
     paddingBottom:"10px",
     paddingLeft:"2px",
     '&:hover': {
       border:"1",
      background: "rgba(210, 207, 207, 0.6)",
      borderRadius:"6px"
    },
    },
    linkNamee:{
      fontWeight:"bold",
      fontSize:"20px"
      
    },
    linkURLL:{
      opacity: "0.5",
      fontSize:"14px"
    },
    voteButton:{
      fontSize:"10px",
      border: "0px",
      backgroundColor:"transparent"
      
    },
    colmdauto:{
      margin: "0px 5px",
      padding:"0px 5px"
    },
    rowAuto:{
      display: "flex",
      flexDirection:"row",
      marginTop:"5px"
    },
    materialIcons:{
      border: "none"
    }
  }));
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const hovered = props.id === useSelector(selectHoveredLinkId);
  const link = useSelector(selectLinkInfos).find(
    (link) => link.id === props.id

    
  );

  return (
    <li
    
      className={clsx(classes.Item,"ItemTest")}
      onMouseEnter={() => dispatch(SetHoveredLinkId(link.id))}
      onMouseLeave={() => dispatch(SetHoveredLinkId(-1))}
    >
      
      {hovered && (
        <div className={classes.removeButton}>
        <i
          className="material-icons Item-removeButton"
          
          onClick={() =>
            dispatch(setModalLink({ id: link.id, linkDesc: link.linkDesc }))
          }
        >
          {/* <img src={removeIcon} className={classes.remove} /> */}
          remove_circle_outline
        </i>
         </div>
      )}
      <Container className={classes.ItemContainer}>
        <Row className={classes.rowAuto}>
          <Col className={classes.colmdauto}>
            <BoxContainer text={link.vote} subText="POINTS" />
          </Col>
          <Col>
            <Row  className={classes.linkNamee}>{link.linkDesc}</Row>
            <Row className={classes.linkURLL}>{"(" + link.urlLink + "/)"}</Row>
            <Row className={classes.rowAuto}>
              <Col className={classes.colmdauto}>
                <span
                // className="voteButton"
                  className={classes.voteButton}
                  onClick={() => dispatch(UpVote(link.id))}
                >
                  <i className="material-icons">arrow_upward</i> Up Vote
                </span>
              </Col>
              <Col></Col>
              <Col className={classes.colmdauto}>
                <span
                className={classes.voteButton}
                  // className="voteButton"
                  onClick={() => dispatch(DownVote(link.id))}
                ><i className="material-icons">arrow_downward</i>Down Vote
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </li>
  );
}

export default React.memo(VoteItem);
