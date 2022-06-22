
import "./directory-item.styles.scss"
import { Link } from "react-router-dom";

const DirectoryItem = ({ category}) => {
    const {id , title , imageUrl} = category;

    return(
        <div key={id} className="directory-item-container" >
        <div className='background-image' style={{backgroundImage:`url(${imageUrl})`}} />
        <div className='directory-item-body-container'>
        <Link to={`/shop/${title.toLowerCase()}`}>
       
        <h2>{title}</h2>
        <p>Shop Now</p>
        
        </Link>
        </div>
        </div>
    )

}

export default DirectoryItem;