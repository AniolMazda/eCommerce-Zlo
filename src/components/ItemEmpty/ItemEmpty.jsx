import './itemEmpty.scss'
import {Link} from 'react-router-dom'
import Button from '../button/Button'

function ItemEmpty() {

  	return (
        <div className="item-empty">
            <span>
                <p>😥</p>
                <h1>¡Nop! Donde intentas ingresar es una dirección invalida</h1>
            </span>
            <Link to="/">
                <Button buttonName="Ir a Inicio" />
            </Link>
        </div>
  	)
}

export default ItemEmpty