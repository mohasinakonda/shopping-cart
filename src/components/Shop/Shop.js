import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useCart from "../../hooks/useOrderHooks/useCart"
import useOrder from "../../hooks/useOrderHooks/useOrder"
import { addToDb, getShoppingCart } from "../../utilities/fakedb"
import Cart from "../Cart/Cart"
import Order from "../Order/Order"
import "./Shop.css"

const Shop = () => {
	const [order, setOrder] = useOrder()
	const [cart, setCart] = useCart(order)
	// console.log(order)
	// get stored cart

	const cartHandler = (selectedProduct) => {
		let newProducts = []

		const exists = cart.find((product) => product.id === selectedProduct.id)
		if (!exists) {
			selectedProduct.quantity = 1
			newProducts = [...cart, selectedProduct]
		} else {
			const rest = cart.filter((product) => product.id !== selectedProduct.id)
			exists.quantity = exists.quantity + 1
			newProducts = [...rest, exists]
		}
		setCart(newProducts)
		addToDb(selectedProduct.id)
	}
	return (
		<div className="shop-container">
			<div className="products">
				{order.map((product) => (
					<Cart
						key={product.id}
						product={product}
						cartHandler={cartHandler}
					></Cart>
				))}
			</div>

			<Order cart={cart}>
				<Link to="/orders">
					<button className="order-clear-btn btn">review order</button>
				</Link>
			</Order>
		</div>
	)
}

export default Shop
