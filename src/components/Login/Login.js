import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Login.css"

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleEmail = (event) => {
		setEmail(event.target.value)
	}
	const handlePassword = (event) => {
		setPassword(event.target.value)
	}
	const handleSubmit = (event) => {
		event.preventDefault()
	}
	return (
		<div className="form-container">
			<div className="form-group">
				<h2>Please Login , Sir...</h2>
				<form onSubmit={handleSubmit} className="form">
					<label htmlFor="email">Email</label>
					<input onBlur={handleEmail} type="email" name="email" id="" />
					<label htmlFor="password">Enter Password</label>

					<input
						onBlur={handlePassword}
						type="password"
						name="password"
						id=""
					/>
					<p>
						need account?
						<Link style={{ color: "goldenrod" }} to="/signup">
							sign up
						</Link>
					</p>
				</form>
				<div className="lines">
					<p className="line"></p>
					<p className="text">or</p>
					<p className="line"></p>
				</div>
				<button className="sign-in-btn">
					<img src="../../images/google-icon.png" alt="" />
					Sign in with google
				</button>
			</div>
		</div>
	)
}

export default Login
