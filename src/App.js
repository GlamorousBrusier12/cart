import { Component } from "react";
import Cart from './Cart';
import './index.css';
import Navbar from './Navbar'; 
// import { firestore } from "./firebase";
import firebase from './firebase';
import { firestore } from "firebase";
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products:[],
      loading:true,
    }
  }
  componentDidMount(){
      firebase
      .firestore()
      .collection("products")
      .onSnapshot((snapshot)=>{
        // console.log(snapshot.docs);
        const products = snapshot.docs.map((doc)=>{
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        });
        
        this.setState({
          products,
          loading:false,
        })
      });
  }
  increaseQty = (product)=>{
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    // this.setState({
    //   products
    // })
    console.log(products[index].id);
    const docRef = firestore().collection("products").doc(products[index].id);

    docRef 
      .update({
        qty: products[index].qty,
      })
      .then(()=>{console.log("document Sucessfully updated")})
      .catch((e)=>{console.log(e);})
  }
  decreaseQty = (product)=>{
    const {products} = this.state;
    const index = products.indexOf(product);
    const n = products[index].qty;
    products[index].qty = n>0?n-1:0;
    // this.setState({
    //   products
    // })
    // console.log(products[index].id);
    const docRef = firestore().collection("products").doc(products[index].id);
    
    docRef 
      .update({
        qty: products[index].qty,
      })
      .then(()=>{console.log("document Sucessfully updated")})
      .catch((e)=>{console.log(e);})
  }
  deleteProduct = (product)=>{
    const {products} = this.state;
    const items = products.filter((i)=> i.id!==product.id);
    this.setState({
      products:items,
    });
    const docRef = firestore().collection("products").doc(product.id);
    docRef.delete();
    console.log(`${product.title} has been removed from the cart`);
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
  addItem = ()=>{
    firebase
      .firestore()
      .collection("products")
      .add({
        img: '',
        qty: 2,
        price : 1799,
        title: "Jio Phone",
      })
      .then((doc)=>{
        console.log("added an item!", doc);
      })
      .catch((err)=>{console.log(err)});
  } 
  render(props){
    const { loading } = this.state;
    return (
      <div className="App">
        <Navbar
          count = {this.getCartCount()}
          />
          <button onClick={this.addItem} style={{padding:15, fontSize:15, fontFamily: "sans-serif"}}> Add an Item? </button>
        <Cart
          onIncrease = {this.increaseQty}
          onDecrease = {this.decreaseQty}
          onDelete = {this.deleteProduct}
          products = {this.state.products}
          />
        {loading && <h1>Loading Products...</h1> } 
      <div>
        TOTAL: {this.getTotalPrice()}
      </div>

      </div>
    );
  }
}

export default App;
