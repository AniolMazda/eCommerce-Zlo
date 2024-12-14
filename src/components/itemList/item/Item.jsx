import './item.scss'

function Item({producto}) {
    
  return (
    <div>
        <p>{producto.name}</p>
    </div>
  )
}

export default Item