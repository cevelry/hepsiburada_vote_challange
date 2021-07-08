import React from "react";
import Pagination from "../../grid/pagination";
import OrderOption from "../../grid/OrderOption";
import SubmitLink from "../../grid/SubmitLink";
import RemovePostModal from "../../grid/RemovePostModal";
import CheckNotify from "./notification/CheckNotify";
import PostList from "../../grid/PostList";

function MainPage(props) {
  return (
    <div>
      <CheckNotify />
      <RemovePostModal />
      <SubmitLink />
      <hr />
      <OrderOption />
      <PostList />
      <Pagination />
    </div>
  );
}

export default MainPage;
