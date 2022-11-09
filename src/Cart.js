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

    handlerIncreaseQuantity = (product) =>{
        const { products  } = this.state;

        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            products: products
        });
    }

    handlerDecreaseQuantity = (product) => {
        const { products } = this.state;

        const index = products.indexOf(product);

        if(products[index].qty === 0) { return ;}

        products[index].qty -= 1;

        this.setState({
            products: products
        })
    }
    render(){
        const {products} = this.state;
        return(
            <div className="cart"> 
           { products.map((product) => {
            return <CartItem 
            product = {product} 
            key = {product.id}
            onIncreaseQuantity = {this.handlerIncreaseQuantity}
            onDecreaseQuantity = {this.handlerDecreaseQuantity}
             /> 
           })}
             </div>
        );
    }
}

export default Cart;