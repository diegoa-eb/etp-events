import { createStore, applyMiddleware, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

const todos = (state = [], {type, payload}) => {
    let nextSate = state;

    if (type === 'ADD_TODO') {
        nextSate = [...nextSate, payload]
    }

    return nextSate;
}

// Este seria un action
const addTodos = () => (dispatch) => {
    // Aquí podrían realizarse las llamadas a las API
    dispatch({
        type: 'ADD_TODO',
        payload: 'Mas todos!'
    })
    dispatch({
        type: 'ADD_TODO',
        payload: 'Otro todo!'
    })
}

const myReducers = combineReducers({
    todos,
})

const store=createStore(
    myReducers,
    {todos: ['Foo']},
    composeWithDevTools(
        applyMiddleware(...[thunk], createLogger({collapsed: true})),
    ),
);

store.dispatch(addTodos());

console.log(store.getState());  // el store deberia pasar a la app