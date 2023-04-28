import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "../StylingWeb/Style.css";

export default class NavBar extends React.Component {
    render() {
     return (

        <Navbar bg="transparant" variant="dark" fixed="top" expand="lg">
        <Container>
          <Navbar.Brand href="#"> WINA </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#action1"> Home </Nav.Link>
              <Nav.Link href="#action2"> About </Nav.Link>
              <Nav.Link href="#action2"> Project </Nav.Link>
              <NavDropdown title="Others" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3"> Resume </NavDropdown.Item>
                <NavDropdown.Item href="#action4"> Social Media </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5"> Separated link </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    //   <Navbar bg="transparant" variant="dark" >
    //     <Container>
    //       <Navbar.Brand href="#"> WINA </Navbar.Brand>
    //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //       <Navbar.Collapse id="responsive-navbar-nav">
    //         <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
    //           <Nav.Link href="#act1"> Home </Nav.Link>
    //           <Nav.Link href="#act2"> About </Nav.Link>
    //           <Nav.Link href="#act3"> Project </Nav.Link>
    //           <NavDropdown title="Others" id="navbarScrollingDropdown">
    //             <NavDropdown.Item href="#act4"> Resume </NavDropdown.Item>
    //             <NavDropdown.Item href="#act5"> Social Media </NavDropdown.Item>
    //             <NavDropdown.Item href="#act6"> Something </NavDropdown.Item>
    //             <NavDropdown.Divider />
    //             <NavDropdown.Item href="#act7"> Separated link </NavDropdown.Item>
    //           </NavDropdown>
    //         </Nav> 
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    );
  }
}