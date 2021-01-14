import * as ActionTypes from './ActionTypes';

export const gigs = (state = {isloading: true,
                                 errMess: null,
                                 gigs: []}, action) => {
    switch (action.type) {
        case ActionTypes.GET_GIGS:
            return {...state, isLoading: false, errMess: null, gigs: action.payload};
        
        case ActionTypes.GIGS_LOADING:
            return {...state, isLoading: true, errMess: null, gigs: []}

        case ActionTypes.GIGS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};