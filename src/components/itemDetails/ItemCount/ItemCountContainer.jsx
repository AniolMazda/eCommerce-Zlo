import { useState } from 'react'
import ItemCount from './ItemCount'

function ItemCountContainer({stock, addProductCart, showItemCount}) {
	const [count,setCount] = useState(1)

    const handleClickRemove = () => {
        count > 1 && setCount( count - 1)
    }
    const handleClickAdd = () => {
        count - stock && setCount( count + 1)
    }

  	return (
        <ItemCount restar={handleClickRemove} sumar={handleClickAdd} valorCount={count}
        agregarAlCarrito={() => addProductCart(count)} showItemCount={showItemCount} /> 
  	)
}

export default ItemCountContainer