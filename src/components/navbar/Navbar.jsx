import './navbar.scss'
import { Link } from 'react-router-dom'

function Navbar({cambiarMenu,valorClaseMenu}) {
  return (
    <>
    <button onClick={cambiarMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.66 22.41">
        <g data-name="Capa_1">
          <rect width="30.66" height="5"/>
          <rect y="8.7" width="30.66" height="5"/>
          <rect y="17.41" width="30.66" height="5"/>
        </g>
      </svg>
      <a>Menu</a>
    </button>
    <nav className={valorClaseMenu}>
      <button onClick={cambiarMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
          <rect x="-3.24" y="12.03" width="36.48" height="5.95" transform="translate(-6.21 15) rotate(-45)"/>
          <rect x="12.03" y="-3.24" width="5.95" height="36.48" transform="translate(-6.21 15) rotate(-45)"/>
        </svg>
      </button>
      <ul>
        <li><Link to="/category/CDs">CDs</Link></li>
        <li><Link to="/category/LPs">LPs</Link></li>
        <li><Link to="/category/T-Shirts">T-Shirts</Link></li>
        <li><Link to="/category/Hoodies">Hoodies</Link></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar