import React from "react";
import { Nav } from 'react-bootstrap';


function Company () {
  return (
    <div className="home">
      <div class="container" >
        <h1 className="mt-3">
          <b> About </b> <br />
        </h1> <br />
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid.
        </p>
      </div>
      <div>
        <Nav className="justify-content-center" activeKey="/">
          <Nav.Item>
            <Nav.Link href="/cominfo"> COMPANY INFO </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/history"> HISTORY </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}

export default Company;

