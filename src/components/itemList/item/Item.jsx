import './item.scss'

function Item({producto}) {
    
  return (
    <div className="card">
        <img src={producto.image} />
        <h3>{producto.name}</h3>
        <p>{producto.category}</p>
        <p>{producto.price}</p>
    </div>
  )
}

export default Item