import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from '../grid/store/PaginateSlice';
import linksReducer from '../pages/addPost/store/addPostSlice';
import modalReducer from '../grid/store/ModalSlice';
import toastReducer from '../components/dialog/store/ToastSlice';

export default configureStore({
  reducer: {
    pagination: paginationReducer,
    links: linksReducer,
    modal: modalReducer,
    toast: toastReducer
  },
});
