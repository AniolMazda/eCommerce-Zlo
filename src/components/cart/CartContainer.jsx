import {Cart,HeaderCart} from './Cart'
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'

function CartContainer() {
    const {cart, totalPrice} = useContext(CartContext)

  	return (
        <ul className="cart-list">
        <h1>Cart</h1>
        <HeaderCart name="Nombre del Producto" img="Imagen del Producto" category="Categoria" quantity="Cantidad" 
        price="Precio del Producto"/>
        {    
            cart.map((productCart) => (
                <Cart key={productCart.id} name={productCart.name} img={productCart.image} category={productCart.category}
                quantity={productCart.quantity} price={productCart.price}/> 
            ))
        }
        <h3>Total Price: {totalPrice()}</h3>
        </ul>
  	)
}

export default CartContainer