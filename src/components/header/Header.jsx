import './header.scss'
import NavbarContainer from '../navbar/NavbarContainer.jsx';
import CartWidget from './cart/CartWidget.jsx';

function Header() {
  return (
    <header>
      <NavbarContainer />
      <img src="../../src/assets/zlo-logo.svg" alt="Logo Zło" />
      <CartWidget />
    </header>
  )
}

export default Header