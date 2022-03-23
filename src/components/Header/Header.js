import React from "react"
import logo from "../../images/Logo.svg"
import "./Header.css"

const Header = () => {
	return (
		<nav className="header-container">
			<img src={logo} alt="" />
			<div className="nav-items">
				<a href="/home">Home</a>
				<a href="/about">About</a>
				<a href="/inventory">Inventory</a>
				<a href="/shop">Shop</a>
			</div>
		</nav>
	)
}
export default Header
