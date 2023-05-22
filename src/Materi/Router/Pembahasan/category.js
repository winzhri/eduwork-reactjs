// const Category = () => {
//     return <h3>
//             Ini halaman Category
//            </h3>

// }

// export default Category;

import { useParams } from 'react-router-dom';
			
const Category = () => {
    
    const params = useParams();
    
    return <h4> Ini produk nomor {params.name} </h4>

};

export default Category;

