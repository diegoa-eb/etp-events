import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import './styles.scss';

import Divider from 'eventbrite_design_system/divider/Divider';

import reducers from './reducers';
import ConnectedEventList from './containers/ConnectedEventList';
import ConnectedStepper from './containers/ConnectedStepper';

import { formatEventData } from './utils';
import { events as eventConstant } from './components/constants';

let events = eventConstant.map(formatEventData);

export default class App extends React.Component {

    constructor(props){
        super(props);

        let initialState = { events };

        this._store = createStore(
            reducers,
            initialState,
            composeWithDevTools(
                applyMiddleware(...[thunk], createLogger({ collapsed: true })),
            ),
        );
    }

    render() {
        return (
            <Provider store={this._store}>
                    <div className="eds-g-grid">
                        <div className="eds-g-group eds-g-group--full-width eds-align--center-horizontal">
                            <div className="eds-g-cell eds-g-cell-8-12">
                                <ConnectedEventList />
                                <Divider />
                                <ConnectedStepper />
                            </div>
                        </div>
                    </div>
            </Provider>
        );
    }
}