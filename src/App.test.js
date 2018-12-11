import React from 'react';
import { mount } from 'enzyme';

import App from './App';
import Stepper from './components/stepper';

describe('Render the main App', () => {

    it('should render the app', () => {
        const component=mount(
            <App />
        );

        // let stepper = component.find(Stepper);

        // expect(stepper).toBePresent();
        expect(component).toMatchSnapshot();
    })

});
