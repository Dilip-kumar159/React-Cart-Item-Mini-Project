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
        </div>
      );
    }
  }

export default App;
