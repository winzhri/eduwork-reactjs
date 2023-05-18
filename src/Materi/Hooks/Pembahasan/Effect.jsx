// useEffect

import { useEffect, useState } from "react";

const Effect = () => {

    let [text, setText] = useState(' ');
    let [data, setUser] = useState(' ');
    let [seconds, setSeconds] = useState(0);

    useEffect( () => {
        console.log('get API');
            fetch('https://jsonplaceholder.typicode.com/users')  // Display --> (https://prnt.sc/9cqBtWMsQ7Z6)
                .then(res => res.json() )
                .then(res => setUser(res) );
            }, []);

    useEffect( () => {
        // Ex sinkroniasi database
        localStorage.setItem('text', text)
            console.log ('sinkronisasi');
            return () => {
                console.log('clean up')
            }
    }, [text]);

    // Use Effect 
    // useEffect( () => {
    //     console.log('interval')
    //     setInterval( ()=> {
    //         setSeconds (s => s + 1);
    //     }, 1000)
    // }, []); 

    // Use Effect clean up function
    useEffect( () => {
        console.log('interval')
        let intervalId = setInterval( () => {
            setSeconds(s => s + 1);
        }, 1000);
        
        return () => {
            console.log('clean up')
            clearInterval(intervalId);
        }
    }, []);

    return (
        <div>
            <textarea cols="30" rows="10" onChange = { (e) => setText(e.target.value)}></textarea>
            {/* <p> {display} </p> */}
            <p> {data.name} </p>
            <div> Waktu: {Math.floor(seconds / 60)} Menit {seconds % 60} Detik </div>
        </div>
    )
}

export default Effect;