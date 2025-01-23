import './cart.scss'
import CartListContainer from './cartList/CartListContainer'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

function Cart({productsCart,totalPrice, deleteProduct, deleteCart}) {
  return (
    <div className="cart">
      <h1>Carrito</h1>
      <CartListContainer cart={productsCart} deleteProduct={deleteProduct} />
      <h3>Precio Total: {totalPrice}</h3>
      <div className="cart-buttons">
        <a className="clean-cart-button" onClick={deleteCart}>
          <Button buttonName="Limpiar Carrito" />
        </a>
        <Link to="/checkout">
          <Button buttonName="Continuar Con La Compra" />
        </Link>
      </div>
    </div>
  )
}

export default Cart