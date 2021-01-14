import * as ActionTypes from './ActionTypes';

export const instructors = (state = {isloading: true,
                                 errMess: null,
                                 instructors: []}, action) => {
    switch (action.type) {
        case ActionTypes.GET_INSTRUCTORS:
            return {...state, isLoading: false, errMess: null, instructors: action.payload};
        
        case ActionTypes.INSTRUCTORS_LOADING:
            return {...state, isLoading: true, errMess: null, instructors: []}

        case ActionTypes.INSTRUCTORS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};