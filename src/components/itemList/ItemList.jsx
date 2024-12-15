import './itemlist.scss'
import Item from './item/Item.jsx'

function ItemList({arrayProductos,categoria}) {
  return (
    <div>
      <h2>{categoria}</h2>
    {
        arrayProductos.map((producto)=>{
          return <Item producto={producto} key={producto.id}/>
        })
    }
    </div>
  )
}

export default ItemList