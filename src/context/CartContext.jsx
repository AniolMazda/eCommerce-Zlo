import {createContext, useState} from 'react'

const CartContext = createContext()

const CartProvider = ({children}) => {

	const [cart,setCart] = useState([])

	const addProducts = (newProduct) => {
		const index = cart.findIndex((product) => product.id === newProduct.id)
		if(index === -1){
			setCart([...cart, newProduct])
		}else{
			const newCart = [...cart]
			newCart[index].quantity += newProduct.quantity
			setCart(newCart)
		}
		
	}

	const totalQuantity = () => {
		const quantity = cart.reduce((total,productCart) => total + productCart.quantity, 0)
		return quantity
	}

	const totalPrice = () => {
		const price = cart.reduce((total,productCart) => total + (productCart.quantity * productCart.price), 0)
		return price
	}
	const deleteProductById = (idProduct) => {
		const filterProducts = cart.filter((productCart) => productCart.id !== idProduct)
		setCart(filterProducts)
	}
	const deleteCart = () => {
		setCart([])
	}

	console.log(cart)

	return(
		<CartContext.Provider value={{ addProducts , cart, totalQuantity, totalPrice, deleteProductById, deleteCart }}>
			{children}
		</CartContext.Provider>
	)
}
export {CartContext,CartProvider}