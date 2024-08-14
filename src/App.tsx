import { CartContext, ICartContext } from './contexts/CartContext'
import './App.css'
import { useState } from 'react'
import { Products } from './components/Products';
import { AddProduct } from './components/AddProduct';
import { Product } from './models/Product';

function App() {
 
  
  const [cartHandler, setCartHandler] = useState<ICartContext>({
    products: JSON.parse(localStorage.getItem("products") || "[]"),
    add: () => {},
    addAmount: () => {},
    decreaseAmount: () => {},
    remove: () => {},
  });
  

  cartHandler.add = () => {
    const updatedProducts = [...cartHandler.products, new Product(Date.now(),"sko",199, 1)];
    setCartHandler({...cartHandler, products: updatedProducts});
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  }

  cartHandler.addAmount = (id: number) => {
    const updatedProducts = cartHandler.products.map((product) => {
      if(product.id !== id) return product;
      const updatedAmount = product.amount +1 ;
      return {...product, amount: updatedAmount}
    })
    setCartHandler({...cartHandler, products: updatedProducts});
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  }

  cartHandler.decreaseAmount = (id: number) => {
    const updatedProducts = cartHandler.products.map((product) => {
      if(product.id !== id || product.amount === 1) return product;
        const updatedAmount = product.amount -1 ;
     
      return {...product, amount: updatedAmount}
    })
    setCartHandler({...cartHandler, products: updatedProducts});
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  }

  cartHandler.remove = (id:number) => {
    const updatedProducts = cartHandler.products.filter((product) => product.id !== id);
    setCartHandler({...cartHandler, products: updatedProducts});
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  }

  return (
    
     <CartContext.Provider value={cartHandler}>
      <AddProduct />
      <Products />
     </CartContext.Provider>
    
 
  )
}

export default App
