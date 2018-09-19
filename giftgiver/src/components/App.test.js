import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

// setup file
configure({ adapter: new Adapter() });

const app = shallow(<App />);

it('renders correctly', () => {
    expect(app).toMatchSnapshot();
});

it('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
});

it('adds a new gift to `state`when clicking the `add gift` button', () => {
    app.find('.btn-add').simulate('click');
    expect(app.state().gifts).toEqual([{ id: 1 }]);
});

it('add a new gift to the rendered list when clicking the `add gift`', () => {
    app.find('.btn-add').simulate('click');

    expect(app.find('.gift-list').children().length).toEqual(2);
});
