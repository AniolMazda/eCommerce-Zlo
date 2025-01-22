import './main.scss'
import ItemListContainer from '../itemList/ItemListContainer'
import ItemDetailsContainer from '../itemDetails/itemDetailsContainer'
import CartContainer from '../cart/CartContainer'
import CheckoutContainer from '../Checkout/CheckoutContainer'
import { Routes, Route } from 'react-router-dom'
function Main() {
	return(
		<main>
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/category/:idCategory" element={<ItemListContainer />} />
				<Route path="/product/:idProduct" element={<ItemDetailsContainer />} />
				<Route path="/cart" element={<CartContainer />} />
				<Route path="/checkout" element={<CheckoutContainer />} />
			</Routes>
		</main>
	)
}
export default Main