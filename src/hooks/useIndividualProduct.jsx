import {useState, useEffect} from 'react'
import {getProducts} from '../components/data/dataProducts.js'
import { useParams } from 'react-router-dom'

const useIndividualProduct = () => {
	const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const {idProduct} = useParams()

   useEffect(()=>{
        setLoading(true);

        getProducts()
        .then((data)=>{
            const productFind = data.find((dataProduct) => dataProduct.id === parseInt(idProduct));
            setProduct(productFind);
        })
        .catch((error)=>{
            console.error(error);
        })
        .finally(()=>{
            setLoading(false);
        })
    }, [idProduct])

    return {product, loading}
}

export default useIndividualProduct