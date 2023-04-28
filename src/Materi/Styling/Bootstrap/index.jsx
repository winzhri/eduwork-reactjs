import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from "react-bootstrap";

export default class Bootstrap extends React.Component {

    render() {
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home"> Wina Az </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home"> Biografi </Nav.Link>
                            <Nav.Link href="#features"> Contact </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}