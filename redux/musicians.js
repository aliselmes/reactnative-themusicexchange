import * as ActionTypes from './ActionTypes';

const initialState = {
    musicians: [
        {title: 'Lead Guitarist Wanted', location: 'Sioux Falls, SD', email: 'example@example.com', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum nulla eu nisi tempus, quis ultricies tellus placerat. Curabitur elit nisi, ullamcorper nec placerat sed, suscipit id nisl. Duis mi quam, egestas scelerisque odio sed, gravida tincidunt elit.'},
        {title: 'Vocalist Looking For a Band', location: 'Denver, CO', email: 'example2@example.com', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum nulla eu nisi tempus, quis ultricies tellus placerat. Curabitur elit nisi, ullamcorper nec placerat sed, suscipit id nisl. Duis mi quam, egestas scelerisque odio sed, gravida tincidunt elit.'}
    ],
}

export const Musicians = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_MUSICIAN_POST:
            const musician = action.payload
            musician.id = state.musicians.length
            return { ...state, musicians: state.musicians.concat(musician) }
        default:
            return state
    }
}  