// import { useDispatch, useSelector } from "react-redux";

// const Counter = () => {

//     let count = useSelector (state => state.counter)

//     const dispatch = useDispatch();
//     // Dispatch --> Alat /fungsi yang bisa digunakan sebagai pilot. Dan pilot akan ditangkap oleh store
//                     // yang kemudian akan diteruskan ke reducer. Shg, action yang tertulis akan ter trigger
//                     // untuk mengoperasikan state yang dideklarasikan.
//     return (
//         <div>
//             <button onClick={() => dispatch({type: 'DEC', value: 1})}> - </button>
//             {' '} <span> {count.count} </span> {' '}
//             <button onClick={() => dispatch({type: 'INC', value: 1})}> + </button>
//         </div>
//     )
// }

// export default Counter;


// Action.jsx

// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment } from "../../../app/features/Counter/action";

// const Counter = () => {

//     let count = useSelector (state => state.counter)

//     const dispatch = useDispatch();
//     // Dispatch --> Alat /fungsi yang bisa digunakan sebagai pilot. Dan pilot akan ditangkap oleh store
//                     // yang kemudian akan diteruskan ke reducer. Shg, action yang tertulis akan ter trigger
//                     // untuk mengoperasikan state yang dideklarasikan.
//     return (
//         <div>
//             <button onClick={() => dispatch(decrement(1))}> - </button>
//             {' '} <span> {count.count} </span> {' '}
//             <button onClick={() => dispatch(increment(1))}> + </button>
//         </div>
//     )
// }

// export default Counter;

// Redux Thunk

import { useDispatch, useSelector } from "react-redux";
import { decrementWitchCheckingAction, increment } from "../../../app/features/Counter/action";

const Counter = () => {

    let count = useSelector (state => state.counter)

    const dispatch = useDispatch();
    // Dispatch --> Alat /fungsi yang bisa digunakan sebagai pilot. Dan pilot akan ditangkap oleh store
                    // yang kemudian akan diteruskan ke reducer. Shg, action yang tertulis akan ter trigger
                    // untuk mengoperasikan state yang dideklarasikan.
    return (
        <div>
            <button onClick={() => dispatch(decrementWitchCheckingAction(1))}> - </button>
            {' '} <span> {count.count} </span> {' '}
            <button onClick={() => dispatch(increment(1))}> + </button> 
        </div>
                // install middleware spt redux thunk untuk fungsi increment
    )
}

export default Counter;