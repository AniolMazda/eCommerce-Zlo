import React, { useState, useEffect } from "react";
import ItemList from './ItemList.jsx'
import { getProducts } from "../data/dataProducts.js";

function ItemListContainer() {
	const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts()
        .then((data)=>{
            setProducts(data);
        })
        .catch((error)=>{
            console.error(error);
        })
    }, [])

  	return (
  		<ItemList arrayProductos={products}/>
  	)
}

export default ItemListContainer