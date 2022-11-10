import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

  class App extends React.Component {

    constructor(){
      super();
      this.state = {
          products : [
              {
                  title : 'HeadPhone',
                  price : 1999,
                  qty : 1,
                  img : 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
                  id : 1
              },
              {
                  title : 'Watch',
                  price : 1899,
                  qty : 1,
                  img : 'https://images.unsplash.com/photo-1594576722512-582bcd46fba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
                  id : 2
              },
              {
                  title : 'I Phone 13pro',
                  price : 197799,
                  qty : 1,
                  img : 'https://images.unsplash.com/photo-1577895202579-7280306572c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
                  id : 3
              },
              {
                  title : 'Laptop',
                  price : 78999,
                  qty : 1,
                  img : 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
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
          products
      })
  }

  handlerDeleteProduct = (id) => {
      const { products } = this.state;

      const items = products.filter((item) => item.id !== id);

      this.setState({
          products: items
      })
  }

   getCartCount = () =>{
    const {products} = this.state;
    let count = 0;
    products.forEach((product) =>{
      count += product.qty;
    });

    return count;
    
  }

  getCartTotal = () => {
    const {products} = this.state;

    let cartTotal = 0;

    products.map((product) =>{
      cartTotal = cartTotal + product.qty * product.price;
    });

    return cartTotal;
  }
      render(){
        const {products} = this.state;

      return (
        <div className="App">
          <Navbar count = {this.getCartCount()}/>
          <Cart
              products = {products}
              onIncreaseQuantity = {this.handlerIncreaseQuantity}
              onDecreaseQuantity = {this.handlerDecreaseQuantity}
              onDeleteProduct = {this.handlerDeleteProduct}
          />
          <div style={{padding: 20, fontSize: 28, marginLeft: 10}}> Total : {this.getCartTotal()}</div>
        </div>
      );
    }
  }

export default App;
