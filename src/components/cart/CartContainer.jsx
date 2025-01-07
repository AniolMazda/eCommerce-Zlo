import Cart from './Cart'
import CartEmpty from './cartEmpty/CartEmpty'
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'

function CartContainer() {
    const {cart, totalPrice, deleteProductById, deleteCart} = useContext(CartContext)

    if(cart.length === 0){
        return <CartEmpty />
    }

  	return (
        <Cart productsCart={cart} totalPrice={totalPrice()} deleteProduct={deleteProductById} deleteCart={deleteCart} />
  	)
}

export default CartContainer