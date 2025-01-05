import { useState } from 'react'
import ItemCount from './ItemCount'

function ItemCountContainer({stock, addProductCart}) {
	const [count,setCount] = useState(1)

    const handleClickRemove = () => {
        count > 1 && setCount( count - 1)
    }
    const handleClickAdd = () => {
        count - stock && setCount( count + 1)
    }

  	return (
        <ItemCount restar={handleClickRemove} sumar={handleClickAdd} valorCount={count} agregarAlCarrito={() => addProductCart(count)} /> 
  	)
}

export default ItemCountContainer