// import { useState } from "react";
// //	Import dari react karena kita import tungga buka default.

// //step 1
// const FunctionalComponent = ({nama}) => {
// 	const [value, setValue] = useState (0);
//     //	Kita beri nilai awal = 0
						
// // step 4 (untuk memanggilnya/menambahkannya buat fungsi)
//     const handlePlus = () => {
// 	    setValue(value + 1);	// untuk mengubah nilainya
// 	}
// 	const handleMinus = () => {
//         setValue(value - 1);	// untuk mengubah nilainya
// 	}
							
// // step 2
// 	return (
// 		<div>
// 			<h1> Membuat komponen dengan functional component</h1>
//     		<h2> Hi {nama}! Selamat belajar. </h2>
// 			<button onClick = {handleMinus}> - </button>
// 				<span> {' '} {value} {' '} </span>
// 			<button onClick= {handlePlus}> + </button>
// 		</div>
// 	)
// }	
					
// // Step 5 (Untuk Menambahkan nilai default)
		
// FunctionalComponent.defaultProps = {
// 	nama: "User";   
    
//     // untuk nama di index.jsx, sehinggasaat props tidak
//     // diberikan/dideklrasikan di sini,props itulah yang
//     // akan digunakan/muncul.
// }
					
// // Step 6

// export default FunctionalComponent;

// import { useState } from "react";

// const FunctionalComponent = ({nama}) => {
// 	const [value, setValue] = useState (0);

//     const handlePlus = () => {
// 	    setValue(value + 1);
// 	}
// 	const handleMinus = () => {
//         setValue(value - 1);
// 	}
							
// 	return (
// 		<div>
// 			<h1> Membuat komponen dengan functional component</h1>
//     		<h2> Hi {nama}! Selamat belajar. </h2>
// 			<button onClick = {handleMinus}> - </button>
// 				<span> {' '} {value} {' '} </span>
// 			<button onClick= {handlePlus}> + </button>
// 		</div>
// 	)
// }	
		
// FunctionalComponent.defaultProps = {
// 	nama: "User";   
// }

// export default FunctionalComponent;