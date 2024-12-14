import './itemlist.scss'
import Item from './item/Item.jsx'

function ItemList({arrayProductos}) {
  return (
    <>{
        arrayProductos.map((producto)=>{
          return <Item producto={producto} key={producto.id}/>
        })
    }</>
  )
}

export default ItemList