import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { items } from './items';
import { instructors } from './instructors';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            items,
            instructors
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
} 