import {useState, useEffect} from 'react'
import { doc, getDoc } from 'firebase/firestore'
import db from '../db/db.js'
import { useParams } from 'react-router-dom'

const useIndividualProduct = () => {
	const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const {idProduct} = useParams()

    const getProduct = async () => {
        try{
            const docRef = doc(db, 'products', idProduct)
            const dataDB = await getDoc(docRef)
            const data = {...dataDB.data(), id: dataDB.id}
            setProduct(data)
            setLoading(false)
        }catch(error){
            console.log(error)
        }
    }

   useEffect(()=>{
        setLoading(true);
        getProduct()
    }, [idProduct])

    return {product, loading}
}

export default useIndividualProduct