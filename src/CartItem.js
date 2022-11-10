import React  from "react";

const CartItem = (props) => {

        const {title, price, qty} = props.product;   
        const {product, 
            onIncreaseQuantity, 
            onDecreaseQuantity, 
            onDeleteProduct }  = props;
        
        return(
            <div className="cart-item">
                <div className="left-block" style={styles.images}>
                    <img style={styles.images} src={product.img} alt="" />
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
                    onClick={() => onDeleteProduct(product.id)}
                    />

                    </div>
                </div>
            </div>
        );
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