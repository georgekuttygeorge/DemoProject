import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import FeedReducer from './reducers/item'

const Reducerslist=combineReducers({feed:FeedReducer})
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

export const store = createStore(Reducerslist,applyMiddleware(loggerMiddleware,thunkMiddleware))