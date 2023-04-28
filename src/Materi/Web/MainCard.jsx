import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';

const MainCard = () => {
  return (
    <div className="content">
      <Card className="Card" bg="dark" text="light">
        <Card.Header> 
         {/* <h4> About </h4>  */}
         About
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maxime mollitia,molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum 
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
            </p>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MainCard;