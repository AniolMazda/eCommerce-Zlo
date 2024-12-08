import React, { useState } from "react";
import Navbar from './Navbar.jsx'
function NavbarContainer() {
	const [menu,setMenu] = useState(false);
	const viewMenu = () =>{
		setMenu( !menu );
	}
  	return (
  		menu === true ?
    		<Navbar cambiarMenu={viewMenu} valorClaseMenu={"open-menu"}/>
  		:	<Navbar cambiarMenu={viewMenu} valorClaseMenu={"close-menu"}/>
  	)
}

export default NavbarContainer