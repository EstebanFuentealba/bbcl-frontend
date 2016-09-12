import { createStore, applyMiddleware, compose} from 'redux'
import combineReducer from '../reducers/index'
import thunk from 'redux-thunk'
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
let socket = io('http://localhost:3000');
let socketIoMiddleware = createSocketIoMiddleware(socket, "realtime:");
const store = createStore(combineReducer, {}, compose(
    applyMiddleware(socketIoMiddleware, thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
export default store;
