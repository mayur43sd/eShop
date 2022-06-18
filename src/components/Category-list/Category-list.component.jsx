import Category from "../category/category.component"
import './category-list.scss'
const CategoryList = ({categories}) =>
{
    
      
    return(
      <div className="categories-container">
        {categories.map((category) => { return(<Category key={category.id} category={category}/>)})}
        </div>)

}

export default CategoryList