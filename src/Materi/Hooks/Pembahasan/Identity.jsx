import { useCallback, useEffect, useState } from "react";

const Identity = () => {
    // Sebuah fungsi pemanggilan API
    const fetchUser = useCallback ( () => ['Wina', 'Nana', 'Nono'], []);
    let [user, setUser] = useState ( [] );

    useEffect( () => {
        const data =fetchUser();
        setUser(data);
    }, [fetchUser])

    return (
        <div>
            <ul>
                {
                    user.map (u => <li key={u}> {u} </li>)
                }
            </ul>
        </div>
    )
}

export default Identity;