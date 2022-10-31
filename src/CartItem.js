import React  from "react";

class CartItem extends React.Component{
     
    constructor(){
        super();
        this.state = {
            title : 'HeadPhone',
            price : 1999,
            qty : 5,
            img : ''
        }
    }

    increaseQty = () => {
        console.log('this.state ->', this.state);
    }
    render(){
        const {title, price, qty} = this.state;   
        
        return(
            <div className="cart-item">
                <div className="left-block" style={styles.images}>
                    <img/>
                </div>

                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs:{price}</div>
                    <div style={{color: '#777'}}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                    {/* {button} */}
                    <img 
                    alt="add" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                    onClick={this.increaseQty}
                    />

                    <img 
                    alt="minus" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                    />

                    <img 
                    alt="delete" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/512/3096/3096687.png"
                    />

                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    images : {
        height : 110, 
        width : 100,
        borderRadius : 5,
        background : '#ccc'
    }
}

export default CartItem;