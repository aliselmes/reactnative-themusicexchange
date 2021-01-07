import * as ActionTypes from './ActionTypes';

const initialState = {
    gigs: [
        {venue: 'The District', location: 'Sioux Falls, SD', date: '1/6/21', time: '19:30', email: 'example@example.com', details: 'The District is looking for a rock/pop band to open (30 min set) for a national touring artist. Please send demo mp3 of three original songs plus a link to your band website to the email address provided.'},
        {venue: 'The 9:30 Club', location: 'Washington, DC', date: '2/23/21', time: '20:00', email: 'example@example.com', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum nulla eu nisi tempus, quis ultricies tellus placerat. Curabitur elit nisi, ullamcorper nec placerat sed, suscipit id nisl. Duis mi quam, egestas scelerisque odio sed, gravida tincidunt elit.'}
    ],
}

export const Gigs = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_GIG:
            const gig = action.payload
            gig.id = state.gigs.length
            return { ...state, gigs: state.gigs.concat(gig) }
        default:
            return state
    }
}  