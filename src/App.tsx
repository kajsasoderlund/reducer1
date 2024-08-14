import './App.css'
import { useReducer, useState } from 'react'
import { ActionType, CartReducer } from './Reducers/CartReducer';


function App() {
  
  const localProducts: [] = JSON.parse(localStorage.getItem("products") || "[]")

  const [products, dispatch] = useReducer(CartReducer, localProducts);

 /*  const [localProducts, setLocalProducts] = useState<String>("");

  if(localProducts !== ""){
    
  } */
  
  /* if(localStorage) {
    JSON.parse(localStorage.getItem("products") || "[]")
  } */
  

  const handleAdd = () => {
    dispatch({
      type: ActionType.ADDED,
      payload: JSON.stringify({
        name: "Sko",
        
        price: 199,
      }),
    })
  }

  const handleRemoved = (id: number) => {
    dispatch({
      type: ActionType.REMOVED,
      payload: id.toString(),
    })

  }

  const handleIncrease = (id: number) => {
    dispatch({
      type: ActionType.INCREASED,
      payload: id.toString(),
    })

  }

  const handleDecrease = (id: number) => {
    dispatch({
      type: ActionType.DECREASED,
      payload: id.toString(),
    })
  }





  return <>
    <button onClick={handleAdd}>Lägg till produkt</button>

    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>

          <div>
            <button onClick={() => {
              handleIncrease(product.id)
            }} > + </button>
            <p>{product.amount}</p>
            <button onClick={() => {
              handleDecrease(product.id)
            }} > - </button>
          </div>

          <button onClick={() => {
            handleRemoved(product.id)
          }}> Ta bort </button>

        </div>
      ))}



    </div>
  </>

}

export default App
