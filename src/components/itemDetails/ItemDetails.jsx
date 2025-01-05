import './itemdetails.scss'
import ItemCountContainer from './ItemCount/ItemCountContainer'

function ItemDetails({producto, addProductCart}) {
  return (
    <div className="item-details">
      <img src={producto.image} alt="" />
      <div className="item-info">
        <h1>{producto.name}</h1>
        <p className="category-detail">{producto.category}</p>
        <article>{producto.description}</article>
        <p className="price-detail">${producto.price}</p>
        <ItemCountContainer stock={producto.stock} addProductCart={addProductCart} />
      </div>
    </div>
  )
}

export default ItemDetails