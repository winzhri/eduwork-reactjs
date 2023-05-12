import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Row, ProgressBar, Card, Button, Col } from "react-bootstrap";

class NewsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      News: [],
      isLoading: true,
      error: null,
      searchQuery: "",
    };
  }

  componentDidMount() {
    this.fetchNews();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchNews();
    }
  }

  fetchNews = async () => {
    this.setState({ isLoading: true });
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=cef4629403514db3a22b403bd2e1631b&q=${this.state.searchQuery}`);
      this.setState({
        News: response.data.articles,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  };

  handleInputChange = (event) => {
    const searchQuery = event.target.value.trim();
    this.setState({ searchQuery });
  };

  render() {
    
    const { News, isLoading, error } = this.state;

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
            <input type="text" className="form-control" id="search-box" placeholder="Search news..." onChange={this.handleInputChange} />
          </div> <br />

          <Row className=" card-columns mt-4 ">
            {isLoading ? (
            //  <p align='center'> Loading...</p>
            <ProgressBar  striped variant="success" animated now={89} />
            ) : error ? (
              <p> {error.message} </p>
            ) : (
              News.map((item) => (
                <Col className="mb-6" xs={4} key={item.url}  >  
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
  }
}

export default NewsApp;