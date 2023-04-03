import React from "react";

// import Komponen from './Materi/Komponen';

// Button
import Button from './Materi/Komponen/Pembahasan/BasicComponent-Task/Button';
// Navbar
import Navbar from './Materi/Komponen/Pembahasan/BasicComponent-Task/Navbar';
// Footer
import Footer from './Materi/Komponen/Pembahasan/BasicComponent-Task/Footer';
// ClassComponent
import ClassComponent from "./Materi/Komponen/Pembahasan/ClassComponent";


// bisa juga menggunakan arrow function: const App  () => {}
function App() {

  // navbar
  const navHeading= "Navigation Bar";
  const navText= "More...";

  //button
  const clicked = () => {
    return alert("HALLO!");
  };

  // paragraf
  const paragraf = () => {
    return (
      <div>
        <marquee> 
          BASIC COMPONENT REACTJS 
        </marquee>
      </div>
    );
  };

  return (
    <div className="App">
      <Navbar text={navText} heading={navHeading} />
      <Button clicked={clicked} />
      <ClassComponent/>
      <Footer paragraf={paragraf} />
    </div>
  );
}

export default App;
