import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { items } from './items';
import { instructors } from './instructors';
import { musicians } from './musicians';
import { gigs } from './gigs';
import { favorites } from './favorites';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            items,
            instructors,
            gigs,
            musicians,
            favorites
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
} 