import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Navigationitems from './Navigationitems';
import Navigationitem from'./Navigationitem/Navigationitem';

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Navigationitems/>);
    });

    it('should render two <Navigationitem /> elements if not authenticated', () => {
        expect(wrapper.find(Navigationitem)).toHaveLength(2);
    });

    it('should render three <NavigationItem /> elements if authenticated', () => {
        // wrapper = shallow(<NavigationItems isAuthenticated />);
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(Navigationitem)).toHaveLength(3);
    });

    it('should an exact logout button', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<Navigationitem link='/logout' >Logout</Navigationitem>)).toEqual(true);
    });
});