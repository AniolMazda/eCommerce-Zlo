import './itemCount.scss'
import Button from '../../button/Button'
import {Link} from 'react-router-dom'

function ItemCount({restar,sumar,valorCount,agregarAlCarrito, showItemCount}) {
  return (
    <div className="buttons-cart">
      {
        showItemCount === true ? (
          <>
            <div className="count">
              <button className="count-button" onClick={restar}>-</button>
              <span>{valorCount}</span>
              <button className="count-button" onClick={sumar}>+</button>
            </div>
            <a onClick={agregarAlCarrito}>
              <Button buttonName="Añadir al Carrito" />
            </a>
          </>
        ) : (
          <Link to="/cart">
             <Button buttonName="Terminar Compra" />
          </Link>
        )
      }
      
    </div>
  )
}

export default ItemCount