import useProducts from '../../hooks/useProducts'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import ItemEmpty from '../ItemEmpty/ItemEmpty'

function ItemListContainer() {
	const {products, loading} = useProducts()
    const {idCategory} = useParams()

    if(loading){
       return <Loading />
    }
    if(products.length === 0){
        return <ItemEmpty />
    }

  	return (
        <ItemList arrayProductos={products} categoria={idCategory === undefined ? "All Products" : idCategory} />  
  	)
}

export default ItemListContainer