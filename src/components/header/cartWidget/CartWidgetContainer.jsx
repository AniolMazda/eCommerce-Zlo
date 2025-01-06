import CartWidget from './CartWidget'
import {useContext} from 'react'
import { CartContext } from '../../../context/CartContext'
import {Link} from 'react-router-dom'

function CartWidgetContainer() {
	const { totalQuantity } = useContext(CartContext)

  	return (
  		<Link className="cart-container" to="cart">
        	<CartWidget quantity={totalQuantity()} />
        </Link>
  	)
}

export default CartWidgetContainer