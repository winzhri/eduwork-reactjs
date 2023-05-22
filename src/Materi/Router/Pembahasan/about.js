// const About = () => {
//     return <h3>
//                 Ini Halaman About!
//            </h3>
// }

// export default About;

import { useNavigate } from 'react-router-dom';
			
const About = () => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('../home', { replace: true });
    }
    
    return (
        <>
            <h4> Ini halaman About </h4>
            <button onClick={handleClick}> Klik menuju ke home </button>
            
        </>
    );
};

export default About;