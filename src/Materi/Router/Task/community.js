import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Community = () => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('../company', { replace: true });
    }
     return (
    <div className="home">
      <div class="container" align="center" className="mt-3">
      <>
      <b> <h1 > C O M M U N I T Y </h1> </b>
      <br />
        <Button variant="outline-secondary" onClick={handleClick}> Back to home page </Button> 
      </>
      </div>
    </div>
  );
}

export default Community;