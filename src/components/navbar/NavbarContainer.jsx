import React, { useState,useEffect } from "react";
import Navbar from './Navbar.jsx'
function NavbarContainer() {
	const [menu,setMenu] = useState(false);
	const [init,setInit] = useState(false);
	const handleViewMenu = () =>{
		setMenu( !menu )
		if(init){
			setTimeout(() => {
				setInit(false)
			},900)
		}else{
			setInit(true)
		}
	}
  	return (
  		<Navbar cambiarMenu={handleViewMenu} valorClaseMenu={menu === true ? "open-menu" : "close-menu"} condicionMenu={init}/>
  	)
}

export default NavbarContainer