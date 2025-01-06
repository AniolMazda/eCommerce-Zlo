import useIndividualProduct from '../../hooks/useIndividualProduct'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemDetails from './ItemDetails'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'

function ItemDetailsContainer() {
    const {product,loading} = useIndividualProduct()
    const {idProduct} = useParams()
    const { addProducts } = useContext(CartContext)

    const addProductCart = (count) => {
        const productCart = {...product, quantity: count}
        addProducts(productCart)
    }

  	return (
        <>{
            loading === true ? (
                <Loading />
            ) : (
                <ItemDetails producto={product} addProductCart={addProductCart} />
            )
        }
        </>
  	)
}

export default ItemDetailsContainer