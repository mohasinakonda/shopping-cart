import React from "react"
import { Link, useNavigate } from "react-router-dom"
import useCart from "../../hooks/useOrderHooks/useCart"
import useOrder from "../../hooks/useOrderHooks/useOrder"
import { removeFromDb } from "../../utilities/fakedb"
import Order from "../Order/Order"
import ReviewOreder from "../ReviewOrder/ReviewOreder"
import "./OrderDetails.css"

const OrderDetails = () => {
	const [order, setOrder] = useOrder()
	const [cart, setCart] = useCart(order)
	const itemDeleteHandle = (id) => {
		const restItem = cart.filter((product) => product.id !== id)
		setCart(restItem)
		removeFromDb(id)
	}
	let info
	if (cart.length === 0) {
		info = "There is no products available"
	}
	return (
		<div className="shop-container">
			<div className="products-container">
				{<h2>{info}</h2>}
				{cart.map((data) => (
					<ReviewOreder
						key={data.id}
						products={data}
						itemDeleteHandle={itemDeleteHandle}
					/>
				))}
			</div>
			<Order cart={cart}>
				<Link to="/inventory">
					<button className="order-clear-btn btn"> Order proceed </button>
				</Link>
			</Order>
		</div>
	)
}

export default OrderDetails
