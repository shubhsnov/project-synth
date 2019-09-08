import { CONNECT_TO_SERVER } from '../actions/types';

const initialState = {
    connected: false,
    serverState: {}
};

export default function(state = initialState,  action) {
    switch(action.type) {
        case CONNECT_TO_SERVER:
            return {
                ...state,
                connected: action.payload.connected
            };
        default:
            return state;
    }
}