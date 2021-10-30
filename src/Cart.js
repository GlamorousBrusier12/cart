import { Component } from "react";
import CartItem from "./CartItem";

class Cart extends Component{
  constructor(){
    super();
    this.state = {
      products:[
        {
          price: '2,499',
          title: 'One Plus Smart band',
          qty: 1,
          img:'',
          id:1,
        },
        {
          price: '1,69,999',
          title: 'Macbook Pro 16 inch',
          qty: 1,
          img:'',
          id:2,
        },
        {
          price: '104,999',
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
  render(){
    return (
      <div className="cart">
          {
            this.state.products.map((p)=>{
              return (
                <CartItem 
                  onIncrease = {this.increaseQty}
                  onDecrease = {this.decreaseQty}
                  onDelete = {this.deleteProduct}
                  product = {p}
                  key = {p.id}
                />
                )
                    })
                  }
            </div>
        );
    }
  }

  export default Cart;