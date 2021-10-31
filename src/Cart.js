import { Component } from "react";
import CartItem from "./CartItem";

const Cart = (props)=>{
  const { products } = props;
  return (
    <div className="cart">
        {
          products.map((p)=>{
            return (
              <CartItem 
                onIncrease = {props.onIncrease}
                onDecrease = {props.onDecrease}
                onDelete = {props.onDelete}
                product = {p}
                key = {p.id}
              />
            )
          })
        }
    </div>
  );
}

  export default Cart;