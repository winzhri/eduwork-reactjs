// import counterReducer from "./features/Counter/reducer"
// import { combineReducers, compose, createStore } from 'redux'

// let rootReducers = combineReducers ({
//     counter: counterReducer
// });

// const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// let store =  createStore (rootReducers, composeEnchancers() );

// export default store;

// Redux Thunk

import counterReducer from "./features/Counter/reducer";
import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'

let rootReducers = combineReducers ({
    counter: counterReducer
});

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store =  createStore (rootReducers, composeEnchancers(applyMiddleware(thunk)) ); // Middleware thunk

export default store;