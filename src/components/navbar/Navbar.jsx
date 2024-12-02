import './navbar.scss'

function Navbar({cambiarMenu,valorMenu}) {
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
    {valorMenu === true &&
    <nav>
      <button onClick={cambiarMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
          <rect x="-3.24" y="12.03" width="36.48" height="5.95" transform="translate(-6.21 15) rotate(-45)"/>
          <rect x="12.03" y="-3.24" width="5.95" height="36.48" transform="translate(-6.21 15) rotate(-45)"/>
        </svg>
      </button>
      <ul>
        <li><a href="#">CDs</a></li>
        <li><a href="#">LPs</a></li>
      </ul>
    </nav>
    }
    </>
  )
}

export default Navbar