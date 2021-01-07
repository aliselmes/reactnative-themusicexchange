import * as ActionTypes from './ActionTypes';

export const addMusician = (title, location, email, message) => (dispatch) => {
    const newMusician = {
        title: title,
        location: location,
        email: email,
        message: message
    }
    dispatch({
        type: ActionTypes.ADD_MUSICIAN_POST,
        payload: newMusician
    })
}

export const addGig = (venue, location, date, time, email, details) => (dispatch) => {
    const newGig = {
        venue: venue,
        location: location,
        date: date,
        time: time,
        email: email,
        details: details
    }
    dispatch({
        type: ActionTypes.ADD_GIG,
        payload: newGig
    })
}