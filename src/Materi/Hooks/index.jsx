// import Counter from "./Pembahasan/Counter";
// import Effect from "./Pembahasan/Effect";
// import Identity from "./Pembahasan/Identity";
// import { useState } from "react";
// import { useToggle } from "./Pembahasan/useToggle";


// const Hooks = () => {

//     let [label,setLabel] =useState('ON');
//     let [lampu,setLampu]= useToggle();

//     const style = {
//         background: lampu ? '#36ff26' : 'black',
//         textAlign: 'center',
//         height: '500px'
//     }

//     const saklar = () => {
//         setLampu(!lampu);
//         setLabel(e => {
//             if (e === 'ON') {
//                 return 'OFF'
//             }
//             return'ON'
//         })
//     }

//     return (
//         <div style={style}>
//             {/* <Counter /> */}
//             {/* <Effect />  */}
//             {/* <Identity /> */}
//             <button onClick={saklar}> {label} </button>
//         </div>
//     )
// }

// export default Hooks;

import HookNewsApp from "./Task/HookNewsApp";
			
const Hooks = () => {
    return (
        <div> 
            <Hooks />
        </div>
    )
}

export default HookNewsApp;

// import React from "react";
// import HookNewsApp from "./Task/HookNewsApp";

// export default class Hooks extends React.Component {

//     render() {
//         return (
//             <div>
//                 <HookNewsApp  />
//             </div>
//         )
//     }
// } 