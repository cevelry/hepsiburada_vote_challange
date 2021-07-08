import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPageCount } from "../pages/addPost/store/addPostSlice";
import {
  incrementPage,
  decrementPage,
  setPage,
  selectPage,
} from "./store/PaginateSlice";
import { makeStyles } from '@material-ui/core/styles';

function Pagination(props) {
  const useStyles = makeStyles(theme => ({
    Pagination: {
      textAlign:"center",
      fontSize:"24px"
    },
    PaginationActivePage:{
      border:"1px solid !important"
    },
    pageButton:{
      fontSize:"24px",
      border: "0px",
      backgroundColor:"transparent",
    },
    i:{
      fontSize:"75%"
    }
  }));
  const classes = useStyles(props);

  const dispatch = useDispatch();
  let activePage = useSelector(selectPage);
  let pageCount = useSelector(selectPageCount);

  let pages = [...Array(pageCount)].map((_, index) => (
    <button
      key={index}
      className={
        classes.
        pageButton +
        (index + 1 === activePage ? classes.PaginationActivePage : "")
      }
      onClick={() =>
        dispatch(setPage({ newPage: index + 1, pageCount: pageCount }))
      }
    >
      {index + 1}
    </button>
  ));
  return (
    <div className={classes.Pagination}>
      <button className={classes.pageButton} onClick={() => dispatch(decrementPage())}>
        <i className="material-icons">keyboard_arrow_left</i>
      </button>
      {pages}
      <button
        className={classes.pageButton} 
        onClick={() => dispatch(incrementPage(pageCount))}
      >
        <i className="material-icons">keyboard_arrow_right</i>
      </button>
    </div>
  );
}

export default React.memo(Pagination);
