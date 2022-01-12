import { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      
    };
  }
  _checkout = (e) =>{
    e.preventDefault()
    const data = {cart:this.props.cart };

fetch('http://localhost:3001/create_checkout_session', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data.url);
})
.catch((error) => {
  console.error('Error:', error);
});

  }
  render() {
    return (
      <Container className="modalBackground">
          <Container className='modalContainer'>
        <h1>Cart</h1>
        {this.props.cart.map((item) => {
            
          return (
            <Container key={item.name}>
              <Card>
                <Card.Title className='title'>{item.name}</Card.Title>
                <Card.Body className='body'>
                  <Card.Text>Quantity:{1}</Card.Text>
                </Card.Body>
              </Card>
            </Container>
          );
        })}
        <Container className='footer'>
        <Card.Footer>Total</Card.Footer>
        <Button onClick={this._checkout}>Checkout</Button>
        </Container>
        </Container>
      </Container>
    );
  }
}

export default Cart;
