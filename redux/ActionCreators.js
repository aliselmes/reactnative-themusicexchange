import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchItems = () => dispatch => {

    dispatch(itemsLoading());

    return fetch(baseUrl + 'items')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(items => dispatch(getItems(items)))
        .catch(error => dispatch(itemsFailed(error.message)));
};

export const itemsLoading = () => ({
    type: ActionTypes.ITEMS_LOADING
});

export const itemsFailed = errMess => ({
    type: ActionTypes.ITEMS_FAILED,
    payload: errMess
});

export const getItems = items => ({
    type: ActionTypes.GET_ITEMS,
    payload: items
});

export const fetchMusicians = () => dispatch => {

    dispatch(musiciansLoading());

    return fetch(baseUrl + 'musicians')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(musicians => dispatch(getMusicians(musicians)))
        .catch(error => dispatch(musiciansFailed(error.message)));
};

export const musiciansLoading = () => ({
    type: ActionTypes.MUSICIANS_LOADING
});

export const musiciansFailed = errMess => ({
    type: ActionTypes.MUSICIANS_FAILED,
    payload: errMess
});

export const getMusicians = musicians => ({
    type: ActionTypes.GET_MUSICIANS,
    payload: musicians
});