
const Navbar = (props)=>{
    return (
        <div style={styles.nav}> 
            <h1 className="page-heading" >Cart</h1>  
            <div style={styles.cartIconContainer}>
                <img 
                    style={styles.cartIcon} 
                    src="https://cdn-icons-png.flaticon.com/128/833/833314.png" 
                    alt="cart-icon"
                />
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    );
}
const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20,
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative',
        marginRight: 30,
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };
export default Navbar;