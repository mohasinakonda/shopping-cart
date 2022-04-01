import React from "react"
import "./Order.css"
const Order = (props) => {
	const { cart } = props
	// console.log(cart)
	const quantity = cart.reduce((acc, cur) => (acc += cur.quantity), 0)
	// console.log(quantity)
	const totalPrice = cart.reduce((acc, cur) => (acc += cur.price * quantity), 0)
	const shippingCost = cart.reduce((acc, cur) => (acc += cur.shipping), 0)
	const tax = (totalPrice * 0.1).toFixed(2)
	const grandTotal = totalPrice + shippingCost + parseFloat(tax)
	return (
		<div className="order-container">
			<h2 style={{ textAlign: "center" }}>Order Summery</h2>
			<div className="order-info">
				<p>Selected items : {quantity}</p>
				<p>price:{totalPrice}</p>
				<p>Total Shipping Cost:{shippingCost}</p>
				<p>Tax:{tax}</p>
				<h3>Grand Total:{grandTotal}</h3>
			</div>
			{props.children}
		</div>
	)
}

export default Order
