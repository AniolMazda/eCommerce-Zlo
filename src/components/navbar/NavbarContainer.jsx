import React, { useEffect, useState } from "react";
import Navbar from './Navbar.jsx'
function NavbarContainer() {
	const [menu,setMenu] = useState(false);
	const viewMenu = () =>{
		setMenu( !menu );
	}
  	return (
    	<Navbar cambiarMenu={viewMenu} valorMenu={menu} />
  	)
}

export default NavbarContainer