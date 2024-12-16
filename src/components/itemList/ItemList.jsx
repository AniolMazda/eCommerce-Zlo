import './itemlist.scss'
import Item from './item/Item'

function ItemList({arrayProductos,categoria}) {
  return (
    <div>
      <h1>{categoria}</h1>
      <div className="item-list">
      {
        arrayProductos.map((producto)=>{
          return <Item producto={producto} key={producto.id}/>
        })
      }
      </div>
    </div>
  )
}

export default ItemList