import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import SignIn from "./signIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Profile from "./profile/Profile";
import HomeScreen from "./home/HomeScreen";
import Search from "./search/Search";
import MyList from "./myList/MyList";
import Account from "./account/Account";
import "../index.css";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/main" component={HomeScreen} />
					<Route path="/signin" exact={true} component={SignIn} />
					<Route path="/signup" exact={true} component={SignUp} />
					<Route path="/profile" exact={true} component={Profile} />
					<Route path="/search" exact={true} component={Search} />
					<Route path="/my-list" exact={true} component={MyList} />
					<Route path="/account" exact={true} component={Account} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
