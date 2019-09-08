import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
//import { composeWithDevTools } from 'redux-devtools-extension';
//import compose from 'redux; 
//compose with enhancers
/* 
     compose(
         applyMiddleware(...middleware).
         ...any number of other middleware
     )
*/

const initialState = {};

const middleware = [ thunk ];

const store = createStore(
    rootReducer,
    initialState, 
    applyMiddleware(
        ...middleware
    )
);

export default store;