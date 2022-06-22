import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";

const CategoryPreview = ({title , products}) => {

 
    return(
        <div className="category-preview-container">
        <Link to={`/shop/${title}`}><span className="title" name={title}>{title.toUpperCase()}</span></Link>
        <div className="preview">
                {products.filter((_ , idx) => idx < 4 ).map((product) => {
                    return(<ProductCard key={product.id} product={product} />)
                })
                }
                </div>
        </div>)
}

export default CategoryPreview