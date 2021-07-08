import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import modalReducer from "../grid/store/ModalSlice"
import RemovePostModal from './RemovePostModal';


Enzyme.configure({ adapter: new EnzymeAdapter() });
describe('<RemovePostModal /> unit tests', () => {


    const defaultModal = { id: 0, linkDesc: "Test Link" }
    var initialState = { link: defaultModal };
    const mockStore = createStore(modalReducer, { modal: initialState });
    const getWrapper = () => mount(
        <Provider store={mockStore}>
            <RemovePostModal />
        </Provider>
    );

    it('Should show correct link name', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('.LinkName .modal-body').text()).toBe(defaultModal.linkDesc);
    });
});