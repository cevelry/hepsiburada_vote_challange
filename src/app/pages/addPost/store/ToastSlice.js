import { createSlice } from '@reduxjs/toolkit';

export const ToastSlice = createSlice({
    name: 'toast',
    initialState: {
        linkDesc: "",
        removedOrAdded: true
    },
    reducers: {
        setToastState: (state, action) => {
            state.linkDesc = action.payload.linkDesc;
            state.removedOrAdded = action.payload.removedOrAdded;
        },
    },
});
export const { setToastState } = ToastSlice.actions;

// The function below is called a thunk
export const setToastStateAsync = action => dispatch => {
    dispatch(setToastState({ linkDesc: action.linkDesc, removedOrAdded: action.removedOrAdded }));
    setTimeout(() => {
        dispatch(setToastState({ linkDesc: "", removedOrAdded: true }));
    }, action.duration);
};

export const selectToastState = state => ({ linkDesc: state.toast.linkDesc, removedOrAdded: state.toast.removedOrAdded });

export default ToastSlice.reducer;
