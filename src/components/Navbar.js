import { Component } from "react";
import Container from "react-bootstrap/Container";
import {NavLink} from 'react-router-dom'


class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      nav: "",
      openCart:false

    };
  }
  render() {
    return (
      <Container> 
          <NavLink to='/menu'>Menu</NavLink>
      </Container>
    );
  }
}

export default Navbar;
