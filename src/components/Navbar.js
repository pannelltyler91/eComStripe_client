import { Component } from "react";
import Container from "react-bootstrap/Container";
import {NavLink} from 'react-router-dom'
import { BsFillCartFill } from "react-icons/bs";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      nav: "",
    };
  }
  render() {
    return (
      <Container>
          <NavLink to='/cart'><BsFillCartFill/></NavLink>
          <NavLink to='/menu'>Menu</NavLink>
      </Container>
    );
  }
}

export default Navbar;
