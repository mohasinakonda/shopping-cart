import React, { useEffect, useState } from "react"
import { addToDb, getShoppingCart } from "../../utilities/fakedb"
import Cart from "../Cart/Cart"
import Order from "../Order/Order"
import "./Shop.css"

const Shop = () => {
	const [cart, setCart] = useState([])
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch("products.json")
			.then((res) => res.json())
			.then((data) => setProducts(data))
	}, [])
	// get stored cart
	useEffect(() => {
		const saveCart = []
		const storedCart = getShoppingCart()
		for (const id in storedCart) {
			const addedProduct = products.find((product) => product.id === id)
			// console.log(addedProduct)
			if (addedProduct) {
				const quantity = storedCart[id]
				addedProduct.quantity = quantity
				saveCart.push(addedProduct)
			}
		}
		setCart(saveCart)
	}, [products])
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
				{products.map((product) => (
					<Cart
						key={product.id}
						product={product}
						cartHandler={cartHandler}
					></Cart>
				))}
			</div>

			<Order cart={cart}></Order>
		</div>
	)
}

export default Shop
