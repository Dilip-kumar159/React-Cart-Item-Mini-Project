import React  from "react";

class CartItem extends React.Component{
     
    // increaseQty = () => {
    //     // Inorder to increase the quantity there are two ways to do
    //     // ->  1. Object form using setState
    //     // -> This helps in changing any state
    //     // this.setState({
    //     //     qty : this.state.qty+1
    //     // });

    //     // -> 2. Using function this is used whenever the prev state is required
    //     this.setState((prevState)=>{
    //         return{
    //             qty : prevState.qty + 1
    //         }
    //     });
    // }

    // decreaseQty = () => {

    //     const {qty} = this.state;

    //     if(qty === 0) return;

    //     this.setState((prevState)=>{
    //             return {
    //                 qty : prevState.qty - 1
    //             }           
    //     });
    // }
    render(){
        
        const {title, price, qty} = this.props.product;   
        const {product, onIncreaseQuantity, onDecreaseQuantity}  = this.props;
        
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
                    onClick={() => onIncreaseQuantity(product)}
                    />

                    <img 
                    alt="minus" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                    onClick={() => onDecreaseQuantity(product)}
                    />

                    <img 
                    alt="delete" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/512/3096/3096687.png"
                    onClick={this.handleClick}
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