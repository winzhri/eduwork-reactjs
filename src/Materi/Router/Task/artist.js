import React from "react";
import Nav from 'react-bootstrap/Nav';
// import { Link } from "react-router-dom";


function Artist () {
  return (
    <div className="home">
      <div class="container" align="center" className="mt-3">
        <b> <h1 > A R T I S T </h1> </b>        
      </div>
      <div>
        <Nav className="justify-content-center" activeKey="/">
          <Nav.Item>
            <Nav.Link href="/actor"> ACTOR </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link activeKey="/athlete"> ATHLETE </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link activeKey="/enterainer"> ENTERTAINER </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link activeKey="/model"> MODEL </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link activeKey="/musician"> MUSICIAN </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}

export default Artist;