import { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from './Navbar'


class Home extends Component {
  constructor() {
    super();
    this.state = {
      home: "",
    };
  }
  render() {
    return (
      <Container>
        <h1>Landing Page</h1>
        <Navbar/>
        <Button>Click here!</Button>
      </Container>
    );
  }
}

export default Home;
