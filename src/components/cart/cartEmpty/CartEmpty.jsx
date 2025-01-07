import './cart-empty.scss'
import {Link} from 'react-router-dom'
import Button from '../../button/Button'

function CartEmpty() {

  	return (
        <div className="cart-empty">
            <span>
                <h1>El carrito esta vacio</h1>
                <p>👿</p>
            </span>
            <Link to="/">
                <Button buttonName="Ir a Inicio" />
            </Link>
        </div>
  	)
}

export default CartEmpty