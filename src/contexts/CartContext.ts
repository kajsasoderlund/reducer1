import { Product } from "../models/Product";
import { createContext } from "react"; 

 export interface ICartContext {
    products: Product[];
    add: () => void;
    addAmount: (id:number) => void;
    decreaseAmount: (id:number) => void;
    remove: (id:number) => void;

}

export const CartContext = createContext<ICartContext>({
    products: [],
    add: () => {},
    addAmount: () => {},
    decreaseAmount: () => {},
    remove: () => {},
});