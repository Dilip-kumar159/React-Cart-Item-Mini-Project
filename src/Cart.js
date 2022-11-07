import React from "react";
import CartItem  from "./CartItem";

class Cart extends React.Component{

    constructor(){
        super();
        this.state = {
            products : [
                {
                    title : 'HeadPhone',
                    price : 1999,
                    qty : 1,
                    img : '',
                    id : 1
                },
                {
                    title : 'Watch',
                    price : 1899,
                    qty : 1,
                    img : '',
                    id : 2
                },
                {
                    title : 'I Phone',
                    price : 197799,
                    qty : 1,
                    img : '',
                    id : 3
                },
                {
                    title : 'Laptop',
                    price : 78999,
                    qty : 1,
                    img : '',
                    id : 4
                }
            ]
        }
    }

    render(){
        const {products} = this.state;
        return(
            <div className="cart"> 
           { products.map((products) => {
            return <CartItem 
            products = {products} 
            key = {products.id}
             /> 
           })}
             </div>
        );
    }
}

export default Cart;