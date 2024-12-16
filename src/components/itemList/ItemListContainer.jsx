import useProducts from '../../hooks/useProducts'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'

function ItemListContainer() {
	const {products, loading} = useProducts()
    const {idCategory} = useParams()

  	return (
    <>
        {  
        loading === true ? (
            <Loading />
        ):(
            <ItemList arrayProductos={products} categoria={idCategory === undefined ? "All Products" : idCategory} />
        )
        }
    </>
  	)
}

export default ItemListContainer