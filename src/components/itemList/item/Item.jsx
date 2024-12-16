import './item.scss'
import { Link } from 'react-router-dom'

function Item({producto}) {
    
  return (
    <div className="card">
        <img src={producto.image} />
        <div className="details-card">
          <h3>{producto.name}</h3>
          <p className="category-card">{producto.category}</p>
        </div>
        <p className="price-card">${producto.price}</p>
        <Link to={"/detail/"+producto.id} className="boton-default">
          <div className="top"><span>See Details</span></div>
          <div className="bottom"><span>See Details</span></div>
        </Link>
    </div>
  )
}

export default Item