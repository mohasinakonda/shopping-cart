import React from "react"
import "./Cart.css"

const Cart = (props) => {
	const { img, name, price, seller, ratings, id } = props.product
	return (
		<div className="cart-container">
			<img src={img} alt="" />
			<div className="product-info">
				<p className="product-name">{name}</p>
				<p className="product-price">price: ${price}</p>
				<p>Seller: {seller}</p>
				<p>Ratings: {ratings}</p>
			</div>
			<button onClick={() => props.cartHandler(props.product)}>
				Add to cart
			</button>
		</div>
	)
}

export default Cart
