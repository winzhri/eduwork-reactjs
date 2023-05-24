// export const increment = (value) => {
//     return {
//         type: 'INC',
//         value: value
//     }
// }

// export const decrement = (value) => {
//     return {
//         type: 'DEC',
//         value: value
//     }
// }

// Constants.js

// import * as counter from './constants';

// export const increment = (value) => {
//     return {
//         type: counter.INC,
//         value: value
//     }
// }

// export const decrement = (value) => {
//     return {
//         type: counter.DEC,
//         value: value
//     }
// }

// Redux Thunk

import * as counter from './constants';

export const increment = (value) => {
    return {
        type: counter.INC,
        value: value
    }
}

export const decrement = (value) => {
    return {
        type: counter.DEC,
        value: value
    }
}

export const decrementWitchCheckingAction = (value) => {
    return(dispatch, getState) => {
        if(getState().counter.count > 0 ) {
            dispatch(decrement(value));
        }
    }
}