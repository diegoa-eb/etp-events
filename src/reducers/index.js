import { combineReducers } from 'redux';

const events = (state = [], {type, payload}) => {
    let nextSate = state;

    if (type === 'ADD_EVENT') {
        nextSate = [...nextSate, payload]
    }

    if (type === 'ADD_EVENTS') {
        nextSate = [...nextSate, ...payload]
    }

    return nextSate;
}

const stepper = (state = 0, {type}) => {
    let nextSate = state;

    if (type === 'INCREASE_COUNTER') {
        nextSate += 1;
    }

    if (type === 'DECREASE_COUNTER') {
        nextSate -= 1;
    }

    if (type === 'RESET_COUNTER') {
        nextSate = 0;
    }

    return nextSate;
}

export default combineReducers({
    events,
    stepper,
})