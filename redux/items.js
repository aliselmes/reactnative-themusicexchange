import * as ActionTypes from './ActionTypes';

export const items = (state = {isloading: true,
                                 errMess: null,
                                 items: []}, action) => {
    switch (action.type) {
        case ActionTypes.GET_ITEMS:
            return {...state, isLoading: false, errMess: null, items: action.payload};
        
        case ActionTypes.ITEMS_LOADING:
            return {...state, isLoading: true, errMess: null, items: []}

        case ActionTypes.ITEMS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};