import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";


export const AddProduct = () => {
    const { add } = useContext(CartContext);
    

    return <>
    <button onClick={ add }>Lägg till produkt</button>
    </>

}