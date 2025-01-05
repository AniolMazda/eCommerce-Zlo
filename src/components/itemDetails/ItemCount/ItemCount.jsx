import './itemCount.scss'
import Button from '../../button/Button'

function ItemCount({restar,sumar,valorCount,agregarAlCarrito}) {
  return (
    <div className="buttons-cart">
      <div className="count">
        <button className="count-button" onClick={restar}>-</button>
        <span>{valorCount}</span>
        <button className="count-button" onClick={sumar}>+</button>
      </div>
      <a onClick={agregarAlCarrito}>
        <Button buttonName="Add to Cart" />
      </a>
    </div>
  )
}

export default ItemCount