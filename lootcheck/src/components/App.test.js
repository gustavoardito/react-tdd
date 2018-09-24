import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    const app = shallow(<App />);

    it('render properly', () => {
        expect(app).toMatchSnapshot();
    });

    it('constains a connected Wallet component', () => {
        expect(app.find('Connect(Wallet)').exists()).toBe(true);
    });
});