import { Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header/Header"
import Shop from "./components/Shop/Shop"
// import Order from "./components/Order/Order"
import OrderDetails from "./components/OrderDetails/OrderDetails"
import Inventory from "./components/Inventory/Inventory"
import Login from "./components/Login/Login"
import SignUp from "./components/SignUp/SignUp"
import { useEffect, useState } from "react"

function App() {
	return (
		<div>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Shop />}></Route>
				<Route path="/shop" element={<OrderDetails />}></Route>
				<Route path="/orders" element={<OrderDetails />}></Route>
				<Route path="/inventory" element={<Inventory />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/signup" element={<SignUp />}></Route>
			</Routes>
		</div>
	)
}

export default App
