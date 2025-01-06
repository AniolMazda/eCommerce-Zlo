import {CartList,HeaderCartList} from './CartList'

function CartListContainer({cart, deleteProduct}) {

  	return (
        <ul className="cart-list">
        <HeaderCartList name="Nombre del Producto" img="Imagen del Producto" category="Categoria" quantity="Cantidad" 
        price="Precio del Producto" totalPartialPrice="Total Parcial" />
        {    
            cart.map((productCart) => (
                <CartList key={productCart.id} name={productCart.name} img={productCart.image} category={productCart.category}
                quantity={productCart.quantity} price={productCart.price}
                totalPartialPrice={productCart.quantity * productCart.price} borrar={() => deleteProduct(productCart.id)} /> 
            ))
        }
        </ul>
  	)
}

export default CartListContainer