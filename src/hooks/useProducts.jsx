import {useState, useEffect} from 'react'
import { collection,getDocs, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import db from '../db/db.js'

const useProducts = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const {idCategory} = useParams()
    const collectionName = collection(db, 'products')

    const getProducts = async () => {
        try{
            if(idCategory){
                const q = query(collectionName, where("category","==", idCategory))
                const dataDB = await getDocs(q)
                const data = dataDB.docs.map((productDB) => {
                    return {...productDB.data(), id: productDB.id}
                })
                setProducts(data)
                setLoading(false)
            }else{
                const dataDB = await getDocs(collectionName)
                const data = dataDB.docs.map((productDB) => {
                    return {...productDB.data(), id: productDB.id}
                })
                setProducts(data)
                setLoading(false)
            }

        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        setLoading(true)
    	getProducts()
    }, [idCategory])

    return {products, loading}
}

export default useProducts