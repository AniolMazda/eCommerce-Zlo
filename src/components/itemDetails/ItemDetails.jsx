import './itemdetails.scss'

function ItemDetails({producto}) {
  return (
    <div className="item-details">
      <img src={producto.image} alt="" />
      <div className="item-info">
        <h1>{producto.name}</h1>
        <p className="category-detail">{producto.category}</p>
        <article>{producto.description}</article>
        <p className="price-detail">${producto.price}</p>
      </div>
    </div>
  )
}

export default ItemDetails