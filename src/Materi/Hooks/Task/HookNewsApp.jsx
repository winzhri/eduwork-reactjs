import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, ProgressBar, Card, Button, Col } from "react-bootstrap";

const HookNewsApp = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchNews();
  }, [searchQuery]);

  const fetchNews = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=id&apiKey=cef4629403514db3a22b403bd2e1631b&q=${searchQuery}`
      );
      setNews(response.data.articles);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const handleInputChange = (event) => {
    const searchQuery = event.target.value.trim();
    setSearchQuery(searchQuery);
  };

  return (
    <div className="fluid-container">
      <nav className="navbar navbar-dark bg-success">
        <div className="container">
          <a className="navbar-brand" href="/">
            News App
          </a>
        </div>
      </nav>

      <div className="container mt-4">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="search-box"
            placeholder="Search news..."
            onChange={handleInputChange}
          />
        </div>{" "}
        <br />

        <Row className=" card-columns mt-4 ">
          {isLoading ? (
            <ProgressBar striped variant="success" animated now={89} />
          ) : error ? (
            <p> {error.message} </p>
          ) : (
            news.map((item) => (
              <Col className="mb-6" xs={4} key={item.url}>
                <Card className="news-card card mb-3 shadow" key={item.url}>
                  <Card.Img variant="top" src={item.urlToImage} alt={item.title} />
                  <Card.Body>
                    <Card.Title> {item.title} </Card.Title>
                    <Card.Text> {item.description} </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">{item.author}</small>
                      <Button variant="success" onClick={() => window.open(item.url, "_blank")}>
                        Details
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </div>

      <div className="text-center mt-5" id="load">
        {isLoading && <div className="load"></div>}
      </div>
    </div>
  );
};

export default HookNewsApp;
