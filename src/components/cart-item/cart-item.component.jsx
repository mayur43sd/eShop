import "./cart-item.styles.scss"

const CartItem = ({cartItem}) =>{

    const {id,name ,quantity , imageUrl , price} = cartItem;

    return(<div key={id} className="cart-item-container">
        
        <img src={imageUrl} alt={`${name}`}/>
        <div className="item-details">
        <span className="name">{name}</span>
        <span >{quantity} x ${price}</span>
        </div>
       
        </div>)
}

export default CartItem;