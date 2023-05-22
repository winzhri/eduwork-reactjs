import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Cominfo = () => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('../company', { replace: true });
    }
     return (
      <div className="home">
        <div class="container" >
          <h1 className="mt-3">
            <b align="center"> Company Info </b> <br />
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
        <br />
        <Button variant="outline-secondary" onClick={handleClick}> Back to home page </Button>
      </div>
    </div>
  );
}

export default Cominfo;

