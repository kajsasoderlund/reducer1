import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Product } from "../models/Product";

interface IProductProps  {
    product: Product;
}



export const ProductPresentation = ({ product }: IProductProps) => {
    const { addAmount, decreaseAmount, remove } = useContext(CartContext);
    return <>

        <div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <div>
                <button onClick={()=> {
                    decreaseAmount(product.id)
                }}> - </button>
                <p>{product.amount}</p>
                <button onClick={() => {
                addAmount(product.id)
            }}> + </button>
            </div>

            <button onClick={()=>{
                remove(product.id)
            }}>Ta bort produkt</button>
            
        </div>

    </>

}