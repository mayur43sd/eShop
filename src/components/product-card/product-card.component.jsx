import "./product-card.styles.scss"
import Button from "../button/button.component"
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";


const ProductCard = ({product}) => {
    const {name,price,imageUrl} = product;
    const {addItemToCart } = useContext(CartContext);

    const handleClick = () => {
        addItemToCart(product);
       
    }
    

    return(<div className="product-card-container">
        <img src={imageUrl} alt={name}/>
        <div className="footer">
        <span>{name}</span>
        <span>{price}</span>
        </div>
        <Button onClick={handleClick}>Add to Cart</Button>
        </div>)
}

export default ProductCard