import { useEffect, useState } from "react"
import { getShoppingCart } from "../../utilities/fakedb"

const useCart = (products) => {
	const [cart, setCart] = useState([])

	useEffect(() => {
		const saveCart = []
		const storedCart = getShoppingCart()
		for (const id in storedCart) {
			const existProduct = products.find((data) => data.id === id)
			if (existProduct) {
				const quantity = storedCart[id]
				existProduct.quantity = quantity
				saveCart.push(existProduct)
			}
			setCart(saveCart)
		}
	}, [products])
	return [cart, setCart]
}
export default useCart
