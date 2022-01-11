import { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsCartPlus } from "react-icons/bs";
import Navbar from './Navbar'
import {NavLink} from 'react-router-dom'

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      menu: [],
    };
  }
  render() {
    return (
      <Container>
        <Navbar/>
        <h1>Menu</h1>
        <Container>
          <Card>
            <Card.Title>Item 1</Card.Title>
            <Card.Body>
              <Button>
                <BsCartPlus />
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>Item 2</Card.Title>
            <Card.Body>
              <Button>
                <BsCartPlus />
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>Item 3</Card.Title>
            <Card.Body>
              <Button>
                <BsCartPlus />
              </Button>
            </Card.Body>
          </Card>
        </Container>
        <NavLink to='/'>Back to Home</NavLink>
      </Container>
    );
  }
}

export default Menu;
