import './header.scss'
import NavbarContainer from '../navbar/NavbarContainer.jsx';
import CartWidget from './cart/CartWidget.jsx';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <NavbarContainer />
        <Link to="/"><img src="../../src/assets/zlo-logo.svg" alt="Logo Zło" /></Link>
      <CartWidget />
    </header>
  )
}

export default Header