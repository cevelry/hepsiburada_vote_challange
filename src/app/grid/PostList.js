import React from "react";
import VoteItem from "./VoteItem";
import { useSelector, useDispatch } from "react-redux";
import { selectPage, setPage } from "./store/PaginateSlice";
import {
  selectLinks,
  selectSortOptions,
  selectPageCount,
} from "../pages/addPost/store/addPostSlice";
import { SortByOption } from "../../app/utils/SortByOption";
import { MaxPostPer } from "../../app/utils/MaxPostPer";

function PostList(props) {
  const page = useSelector(selectPage);
  const links = useSelector(selectLinks);
  const sortOptions = useSelector(selectSortOptions);
  const pageCount = useSelector(selectPageCount);
  const dispatch = useDispatch();
  if (page > pageCount && page > 1) {
    dispatch(
      setPage({
        newPage: page - 1,
        pageCount: pageCount,
      })
    );
    return null;
  }
  const items = MaxPostPer(SortByOption(links, sortOptions), page).map(
    (link) => {
      return <VoteItem key={link.id} id={link.id} />;
    }
  );

  return <div>{items}</div>;
}

export default React.memo(PostList);
