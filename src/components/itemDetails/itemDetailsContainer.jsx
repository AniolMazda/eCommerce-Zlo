import React, { useState, useEffect } from "react";
import ItemDetails from './ItemDetails'
import { getProducts } from "../data/dataProducts.js";
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'

function ItemDetailsContainer() {
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

  	return (
        <>{
            loading === true ? (
                <Loading />
            ) : (
                <ItemDetails producto={product} />
            )
        }
        </>
  	)
}

export default ItemDetailsContainer