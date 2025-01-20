import './item.scss'
import Button from '../../button/Button'
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
        <Link to={`/product/${producto.id}`}>
          <Button buttonName="See Details" />
        </Link>
    </div>
  )
}

export default Item