import './navbar.scss'
import { Link } from 'react-router-dom'
import Close from '../icons/Close'
import Menu from '../icons/Menu'

function Navbar({cambiarMenu,valorClaseMenu, condicionMenu}) {
  return (
    <>
    <button onClick={cambiarMenu}>
      <Menu />
      <a>Menu</a>
    </button>
    { condicionMenu === true &&
    <nav className={valorClaseMenu}>
      <button onClick={cambiarMenu}>
        <Close /> 
      </button>
      <ul>
        <li onClick={cambiarMenu}><Link to="/category/CDs">CDs</Link></li>
        <li onClick={cambiarMenu}><Link to="/category/LPs">LPs</Link></li>
        <li onClick={cambiarMenu}><Link to="/category/T-Shirts">T-Shirts</Link></li>
        <li onClick={cambiarMenu}><Link to="/category/Hoodies">Hoodies</Link></li>
      </ul>
    </nav>
    }
    </>
  )
}

export default Navbar