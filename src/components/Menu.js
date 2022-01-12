import { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbar from "./Navbar";
import Cart from './Cart'
import {BsFillCartFill} from 'react-icons/bs'
import { NavLink } from "react-router-dom";

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      menu: [],
      cart:[],
      cartCount:0,
      openCart:false
    };
  }
  componentDidMount = () => {
    fetch("http://localhost:3001/menu")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.menuItems);
        this.setState({ menu: data.menuItems });
      });
  };
  _addToCart = (e) => {
    e.preventDefault();
    this.setState({cartCount:this.state.cartCount+1,cart:[...this.state.cart,{name:e.target.name,item_id:e.target.className}]})
    console.log(this.state.openCart)
    
  };
  
  render() {
    return (
      <Container>
        <Navbar/>
        <h1>Menu</h1>
        <Container>
        <Button onClick={()=> {this.setState({openCart:true})}}><BsFillCartFill/>({this.state.cartCount})</Button>
          {this.state.menu.map((item) => {
            return (
              <Card key={item.id}>
                <Card.Title>{item.name}</Card.Title>
                <Card.Body>
                  <Card.Text>{item.priceInCents / 100}</Card.Text>
                  <button id={item.priceInCents} name={item.name} className={item.id} onClick={this._addToCart}>
                    Add To Cart
                  </button>
                </Card.Body>
              </Card>
            );
          })}
              <Card>
                 {this.state.openCart?<Cart cart={this.state.cart} open={this.state.openCart}/>:''}
              </Card>
        </Container>
        <NavLink to="/">Back to Home</NavLink>
      </Container>
    );
  }
}

export default Menu;
