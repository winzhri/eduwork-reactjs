import { useEffect, useState } from "react";

const Identity = () => {
    
	const fetchUser = () => ['Wina', 'Nana', 'Nono'];
		let [user, setUser] = useState ( [] );
    		useEffect( () => {
				const data =fetchUser();	
					setUser(data);					
			}, [])								
												
				
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
			