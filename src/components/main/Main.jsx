import './main.scss'
import ItemListContainer from '../itemList/ItemListContainer.jsx'
import ItemDetailsContainer from '../itemDetails/itemDetailsContainer.jsx'
import { Routes, Route } from 'react-router-dom'
function Main() {
	return(
		<main>
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/category/:idCategory" element={<ItemListContainer />} />
				<Route path="/detail/:idProduct" element={<ItemDetailsContainer />} />
			</Routes>
		</main>
	)
}
export default Main