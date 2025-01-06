import './cartlist.scss'
import Close from '../../icons/Close'

function HeaderCartList({name,img,category,quantity,price,totalPartialPrice}){
  return(
    <li className="header-cart">
      <h2>{img}</h2>
      <h2>{name}</h2>
      <h2>{category}</h2>
      <h2>{quantity}</h2>
      <h2>{price}</h2>
      <h2>{totalPartialPrice}</h2>
    </li>
  )
}
function CartList({name,img,category,quantity,price,totalPartialPrice,borrar}) {
  return (
    <li className="item-cart">
      <img className="img-item" src={img} alt={`${category} de ${name}`}/>
      <p>{name}</p>
      <p>{category}</p>
      <p>{quantity}</p>
      <p>${price}</p>
      <p>${totalPartialPrice}</p>
      <button onClick={borrar}>
        <Close />
      </button>
    </li>
  )
}

export {HeaderCartList,CartList}