import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from "react-bootstrap";

const MainContainer = () => {
  return (
    <div className="greetings">
      <Container className="text-white d-flex text-center justify-content-center align-items=center">
        <Row>
          <Col>
            <div className="title"> Hello!! </div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark"> Clik Here !! </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainContainer;