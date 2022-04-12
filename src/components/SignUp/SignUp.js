import React, { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../images/google-icon.png"

const SignUp = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [error, setError] = useState("")
	const [massage, setMassage] = useState("")
	const emailHandler = (event) => {
		setEmail(event.target.value)
	}
	const passwordHandler = (event) => {
		setPassword(event.target.value)
	}
	const confirmPasswordHandler = (event) => {
		setPassword(event.target.value)
	}
	if (password !== confirmPassword) {
		setError("your password did not match")
		return
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		setMassage("form submitted success!")
	}
	return (
		<div className="form-container">
			<div className="form-group">
				<h2>Please sign up, Sir...</h2>
				<form className="form">
					<label htmlFor="email">Email</label>
					<input onBlur={emailHandler} type="email" name="email" id="" />
					<label htmlFor="password">Enter Password</label>
					<input
						onBlur={passwordHandler}
						type="password"
						name="password"
						id=""
					/>
					<label htmlFor="password">Confirm Password</label>
					<input
						onBlur={confirmPasswordHandler}
						type="password"
						name="password"
						id=""
					/>
					<p>{error}</p>
					<p style={{ color: "green" }}>{massage}</p>
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
					<img style={{ width: "30px" }} src={logo} alt="" />
					Sign in with google
				</button>
			</div>
		</div>
	)
}

export default SignUp
