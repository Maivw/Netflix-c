import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import SignIn from "./signIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Profile from "./profile/Profile";
import HomeScreen from "./home/HomeScreen";
import Search from "./search/Search";
import MyList from "./myList/MyList";
import "../index.css";

function App() {
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
					<Route path="/my-list" exact={true} component={MyList} />

					{/*
					<Route path="/cart" exact={true} component={CartScreen} />
					<Route path="/favorite" exact={true} component={FavoriteProducts} />
					<Route path="/checkout" exact={true} component={Checkout} /> */}
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
