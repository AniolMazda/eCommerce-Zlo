import Cart from './Cart'
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'

function CartContainer() {
    const {cart, totalPrice, deleteProductById, deleteCart} = useContext(CartContext)

  	return (
        <Cart productsCart={cart} totalPrice={totalPrice()} deleteProduct={deleteProductById} deleteCart={deleteCart} />
  	)
}

export default CartContainer