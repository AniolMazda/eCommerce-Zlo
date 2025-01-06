import './cart.scss'

function HeaderCart({name,img,category,quantity,price}){
  return(
    <li className="header-cart">
      <h2>{img}</h2>
      <h2>{name}</h2>
      <h2>{category}</h2>
      <h2>{quantity}</h2>
      <h2>{price}</h2>
    </li>
  )
}
function Cart({name,img,category,quantity,price}) {
  return (
    <li>
      <img src={img} alt={`${category} de ${name}`}/>
      <p>{name}</p>
      <p>{category}</p>
      <p>Cantidad: {quantity}</p>
      <p>Precio Unitario: {price}</p>
    </li>
  )
}

export {HeaderCart,Cart}