import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import {useSelector} from 'react-redux'
import { getCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/categories.selector";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
  const {category} = useParams();
 const categoriesMap = useSelector(getCategoriesMap);
 const isLoading = useSelector(selectCategoriesIsLoading)
  const [products , setProducts] = useState(categoriesMap[category]);


  useEffect(() => {
      setProducts(categoriesMap[category])
  } , [category , categoriesMap]);


    return(
      <Fragment >
    
      { isLoading ? <Spinner /> : <Fragment >
      <h2 className="category-title"><span >{category.toUpperCase()}</span></h2>
      <div className="category-container">
      {products && products.map((product) => <ProductCard key={product.id} product={product}/>)}
      </div>
      </Fragment> 
  }
  </Fragment>  
       
        )
}

export default Category