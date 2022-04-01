import React from "react"
import "./ReviewOrder.css"
const ReviewOreder = (props) => {
	const { products, itemDeleteHandle } = props
	const { name, img, price, shipping } = products
	return (
		<div className="container">
			<img src={img} alt="" />
			<div className="order-info-container">
				<div className="order-info-1">
					<p className="products-name">{name}</p>
					<p>Price:${price}</p>
					<p>shipping cost: ${shipping}</p>
				</div>
				<div className="delete-btn">
					<button onClick={() => itemDeleteHandle(products.id)}> delete</button>
				</div>
			</div>
		</div>
	)
}

export default ReviewOreder
