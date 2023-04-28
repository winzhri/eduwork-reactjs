import React from "react";
import "./Materi/StylingWeb/Style.css";
import NavBar from "./Materi/Web/Navbar";
import MainContainer from "./Materi/Web/MainContainer";
import MainCard from "./Materi/Web/MainCard";


function App() {
	return (
		<div className="App">
			<div className="WebBg">
				<NavBar />
				<MainContainer />
			</div>

			<div className="content">
				<MainCard />
			</div>
			
			<div className="end">
			</div>
		</div>
	);
}

export default App;