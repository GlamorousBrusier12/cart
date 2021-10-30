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
	render(){
		const {title, price, qty,} = this.props.product;
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
							onClick={()=>this.props.onIncrease(this.props.product)}
              />
						<img 
							alt="decrease" 
							className="action-icons" 
							src="https://cdn-icons-png.flaticon.com/128/860/860821.png" 
							onClick={()=>this.props.onDecrease(this.props.product)}
						/>
						<img 
							alt="delete" 
							className="action-icons" 
							src="https://cdn-icons-png.flaticon.com/128/3096/3096673.png" 
              onClick = {()=>this.props.onDelete(this.props.product)}
						/>
					</div>
				</div>
			</div>
		);
	}
}
export default CartItem;