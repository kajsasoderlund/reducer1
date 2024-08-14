import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import { ProductPresentation } from "../components/ProductPresentation"

export const Products = () => {
 const { products }  = useContext(CartContext);

 return (
    <>
    <div>
        {products.map((product) => (
                <ProductPresentation key={product.id} product={product}></ProductPresentation>
    )) }
    </div>
    </>
)
}

