import useIndividualProduct from '../../hooks/useIndividualProduct'
import ItemDetails from './ItemDetails'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'

function ItemDetailsContainer() {
    const {product,loading} = useIndividualProduct()
    const {idProduct} = useParams()

    const addProductCart = (count) => {
        console.log(count)
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