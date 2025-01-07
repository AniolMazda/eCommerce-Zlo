import './cart.scss'
import CartListContainer from './cartList/CartListContainer'
import Button from '../button/Button'

function Cart({productsCart,totalPrice, deleteProduct, deleteCart}) {
  return (
    <div className="cart">
      <h1>Carrito</h1>
      <CartListContainer cart={productsCart} deleteProduct={deleteProduct} />
      <h3>Precio Total: {totalPrice}</h3>
      <a className="clean-cart-button" onClick={deleteCart}>
        <Button buttonName="Limpiar Carrito" />
      </a>
    </div>
  )
}

export default Cart