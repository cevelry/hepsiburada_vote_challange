import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import BoxContainer from './BoxContainer';


Enzyme.configure({ adapter: new EnzymeAdapter() });
describe('<BoxContainer /> unit tests', () => {


    const getWrapper = () => mount(
        <BoxContainer text="54" subText="POINTS" />
    );

    it('Should generate the correct text', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('.BoxContainerTest').text()).toBe("54");
    });
    it('Should activate the correct sub text', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('div').at(2).text()).toBe("POINTS");
    });
});