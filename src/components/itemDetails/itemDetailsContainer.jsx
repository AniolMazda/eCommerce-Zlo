import useIndividualProduct from '../../hooks/useIndividualProduct'
import { useContext,useState } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemDetails from './ItemDetails'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'

function ItemDetailsContainer() {
    const {product,loading} = useIndividualProduct()
    const {idProduct} = useParams()
    const { addProducts } = useContext(CartContext)

    //Variable de estado para cambiar la visualización de boton de agregar al carrito a terminar compra
    const [showItemCount,setShowItemCount] = useState(true)

    const addProductCart = (count) => {
        const productCart = {...product, quantity: count}
        addProducts(productCart)
        //Cambio de estado, que al dar click pasa a ser false el ItemCount
        setShowItemCount(false)
    }

  	return (
        <>{
            loading === true ? (
                <Loading />
            ) : (
                <ItemDetails producto={product} addProductCart={addProductCart} showItemCount={showItemCount} />
            )
        }
        </>
  	)
}

export default ItemDetailsContainer