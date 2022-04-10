import React from "react"
import { Link } from "react-router-dom"

const SignUp = () => {
	return (
		<div className="form-container">
			<div className="form-group">
				<h2>Please sign up, Sir...</h2>
				<form className="form">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="" />
					<label htmlFor="password">Enter Password</label>
					<input type="password" name="password" id="" />
					<label htmlFor="password">Confirm Password</label>
					<input type="password" name="password" id="" />
					<p>
						already have a account?
						<Link style={{ color: "goldenrod" }} to="/login">
							sign in
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

export default SignUp
