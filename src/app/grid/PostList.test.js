import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import addPostSlice from "../pages/addPost/store/addPostSlice"
import paginationReducer from "../grid/store/PaginateSlice"
import { createStore, combineReducers } from '@reduxjs/toolkit';
import TestData from '../static/TestData'
import PostList from './PostList';


Enzyme.configure({ adapter: new EnzymeAdapter() });
describe('<List /> unit tests', () => {

    var reducers = combineReducers({
        pagination: paginationReducer,
        links: addPostSlice
    });
    const defaultPagination = { page: 1 }
    const defaultLinks = {
        links: TestData,
        sortProperty: 'createDate',
        reverseSort: false,
        hoveredLinkId: -1
    }
    var initialState = { pagination: defaultPagination, links: defaultLinks };
    const mockStore = createStore(reducers, initialState);

    const getWrapper = () => mount(
        <Provider store={mockStore}>
            <PostList />
        </Provider>
    );

    it('Should generate  number of items', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('.ItemTest').length).toBe(5);
    });

});