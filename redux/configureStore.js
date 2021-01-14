import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { items } from './items';
import { instructors } from './instructors';
import { musicians } from './musicians';
import { gigs } from './gigs';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            items,
            instructors,
            gigs,
            musicians
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
} 