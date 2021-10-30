import { Component } from "react";
const styles = {
	image:{
		height:110,
		width:110,
		bacckground: "#ccc",
		borderRadius:4
	}
}

class CartItem extends Component{
	constructor(){
		super();
		// intiliase the state attributes for the component
		this.state = {
			price: '12999',
			title: 'iPhone 12 Pro',
			qty: 1,
			img:'',
		}
	}
	increaseQty(){
		// set state re renders the dom
		// this.setState({
		// 	qty: this.state.qty+1,
		// });

		// form-2 to call setstate()
		this.setState((prevState)=>{
			return {
				qty:prevState.qty+1,
			}
		});

		// const promise = new Promise((resolve, reject)=>{
		// 	setTimeout(() => {
		// 		resolve('done');
		// 	}, 3000);
		// })

		// promise.then(()=>{
		// 	// asynchronous call
		// 	this.setState({
		// 		qty:this.state.qty+1
		// 	});
		// 	console.log(this.state);
		// })
	}
	decreaseQty = ()=>{
		let num = this.state.qty;
		this.setState({
			qty: (num>0?num-1:0),
		});
	 }
	render(){
		const {title, price, qty,} = this.state;
		return (
			<div className="cart-item">
				<div className='left-block'>
					<img style={styles.image} />
				</div>
				<div className='right-block'>
					<div style={{ fontSize:25 }}>{title}</div>
					<div style={{ color: '#777' }}>Rs. {price}</div>
					<div style={{ color: '#777' }}>Qty: {qty}</div>
					<div className='cart-item-actions'>
						<img 
							alt="increase" 
							className="action-icons" 
							src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" 
							onClick={this.increaseQty.bind(this)}
						/>
						<img 
							alt="decrease" 
							className="action-icons" 
							src="https://cdn-icons-png.flaticon.com/128/860/860821.png" 
							onClick={this.decreaseQty}
						/>
						<img 
							alt="delete" 
							className="action-icons" 
							src="https://cdn-icons-png.flaticon.com/128/3096/3096673.png" 
						/>
					</div>
				</div>
			</div>
		);
	}
}
export default CartItem;