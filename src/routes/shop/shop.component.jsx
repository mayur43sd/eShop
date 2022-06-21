
import { useContext } from "react";
import { productContext } from "../../contexts/products/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss"

const Shop = () => {

    const  {products} = useContext(productContext);

    return(
        <div className="products-container">
        {products.map((product) => {
            return(<ProductCard key={product.id} product={product} />)
        })
        }
        </div>
    )
}

export default Shop;