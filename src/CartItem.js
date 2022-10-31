import React  from "react";

class CartItem extends React.Component{

    render(){
        return(
            <div className="cart-item">
                <div className="left-block" style={styles.images}>
                    <img/>
                </div>

                <div className="right-block">
                    <div style={{fontSize:25}}>Price</div>
                    <div style={{color: '#777'}}>Rs:999</div>
                    <div style={{color: '#777'}}>Qty:4</div>
                    <div className="cart-item-actions">
                    {/* {button} */}
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