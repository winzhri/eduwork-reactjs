// let initiaState = {
//     count: 0
// }

// const counterReducer = (state = initiaState, action ) => {
//     switch(action.type) {
//         case 'INC':
//             return {
//                 ...state, // Copy dengan rest parameter
//                 count: state.count + action.value
//             }
        
//         case 'DEC':
//             return {
//                 count: state.count - action.value
//             }
//         default:
//             return state
//     }
// }

// export default counterReducer;


// Constants.js

import * as counter from './constants';

let initiaState = {
    count: 0
}

const counterReducer = (state = initiaState, action ) => {
    switch(action.type) {
        case counter.INC:
            return {
                ...state, // Copy dengan rest parameter
                count: state.count + action.value
            }
        
        case counter.DEC:
            return {
                count: state.count - action.value
            }
        default:
            return state
    }
}

export default counterReducer;