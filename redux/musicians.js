import * as ActionTypes from './ActionTypes';

export const musicians = (state = {isloading: true,
                                 errMess: null,
                                 musicians: []}, action) => {
    switch (action.type) {
        case ActionTypes.GET_MUSICIANS:
            return {...state, isLoading: false, errMess: null, musicians: action.payload};
        
        case ActionTypes.MUSICIANS_LOADING:
            return {...state, isLoading: true, errMess: null, musicians: []}

        case ActionTypes.MUSICIANS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};