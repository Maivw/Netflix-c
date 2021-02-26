import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import SignIn from "./signIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Profile from "./profile/Profile";
import HomeScreen from "./home/HomeScreen";
import Search from "./search/Search";
import { auth } from "../firebase";
import "../index.css";

function App() {
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log("authUser", authUser);
			// if (authUser) {
			// 	dispatch({
			// 		type: "SET_USER",
			// 		user: authUser,
			// 	});
			// } else {
			// 	dispatch({
			// 		type: "SET_USER",
			// 		user: null,
			// 	});
			// }
		});
	}, []);
	return (
		<div className="app">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/main" component={HomeScreen} />
					<Route path="/signin" exact={true} component={SignIn} />
					<Route path="/signup" exact={true} component={SignUp} />
					<Route path="/profile" exact={true} component={Profile} />
					<Route path="/search" exact={true} component={Search} />

					{/*
					<Route path="/login" exact={true} component={Login} />
					<Route path="/cart" exact={true} component={CartScreen} />
					<Route path="/favorite" exact={true} component={FavoriteProducts} />
					<Route path="/checkout" exact={true} component={Checkout} /> */}
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
