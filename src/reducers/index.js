import { combineReducers } from 'redux';
import connectReducer  from './connectReducer';

export default combineReducers({
    connectToServer: connectReducer
});
