import { Component } from "react";
import ReactDOM from 'react-dom';
import Cart from './Cart';
import './index.css';
import Navbar from './Navbar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products:[
        {
          price: 2499,
          title: 'One Plus Smart band',
          qty: 1,
          img:'',
          id:1,
        },
        {
          price: 169999,
          title: 'Macbook Pro 16 inch',
          qty: 1,
          img:'',
          id:2,
        },
        {
          price: 104999,
          title: 'iPhone 12 Pro',
          qty: 1,
          img:'',
          id:3,
        },
      ]
    }
  }
  increaseQty = (product)=>{
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products
    })
  }
  decreaseQty = (product)=>{
    const {products} = this.state;
    const index = products.indexOf(product);
    const n = products[index].qty;
    products[index].qty = n>0?n-1:0;
    this.setState({
      products
    })
  }
  deleteProduct = (product)=>{
    const {products} = this.state;
    const items = products.filter((i)=> i.id!==product.id);
    this.setState({
      products:items,
    });
  }
  getCartCount = ()=>{
    const {products} = this.state;
    let numProducts = 0;
    products.forEach((p)=>{
      numProducts += p.qty;
    });
    return numProducts;
  }
  getTotalPrice = ()=>{
    const {products} = this.state;
    let totalPrice = 0;
    products.forEach(({price, qty})=>{
      totalPrice += price*qty;
    })
    return totalPrice;
  }
  render(props){
      return (
      <div className="App">
        <Navbar
          count = {this.getCartCount()}
        />
        <Cart
          onIncrease = {this.increaseQty}
          onDecrease = {this.decreaseQty}
          onDelete = {this.deleteProduct}
          products = {this.state.products}
        />
      <div>
        TOTAL: {this.getTotalPrice()}
      </div>

      </div>
    );
  }
}

export default App;
