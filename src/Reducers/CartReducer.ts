import { Product } from "../models/Product";

interface IAction {
    type: ActionType;
    payload: string;
}


export enum ActionType {
    ADDED,
    REMOVED,
    INCREASED,
    DECREASED,
}


export const CartReducer = (products: Product[], action: IAction): Product[] => {


    switch (action.type) {
        case ActionType.ADDED:
            const product: Product = JSON.parse(action.payload);
            localStorage.setItem("products", JSON.stringify([...products, new Product(product.name, product.price)]));
            return [...products, new Product(product.name, product.price)];

        case ActionType.REMOVED:
            localStorage.setItem("products", JSON.stringify(products.filter((product) => product.id !== +action.payload)));
            return products.filter((product) => product.id !== +action.payload)


        case ActionType.INCREASED:
            localStorage.setItem("products", JSON.stringify(products.map((product) => {
                if (product.id !== +action.payload) return product;
                const updatedAmount = product.amount + 1;
                return { ...product, amount: updatedAmount }
            })));
            return products.map((product) => {
                if (product.id !== +action.payload) return product;
                const updatedAmount = product.amount + 1;
                return { ...product, amount: updatedAmount }
            })

        case ActionType.DECREASED:
            localStorage.setItem("products", JSON.stringify(products.map((product) => {
                if (product.id !== +action.payload || product.amount === 1) return product;
                const updatedAmount = product.amount - 1;

                return { ...product, amount: updatedAmount }
            })))

            return products.map((product) => {
                if (product.id !== +action.payload || product.amount === 1) return product;
                const updatedAmount = product.amount - 1;

                return { ...product, amount: updatedAmount }
            })
        default:
            return products;
    }
}