import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./StylingWeb/Style.css";

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
              <Nav.Link href="#action3"> Project </Nav.Link>
              <NavDropdown title="Others" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action4"> Resume </NavDropdown.Item>
                <NavDropdown.Item href="#action5"> Social Media </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action6"> Separated link </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    );
  }
}