import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Feature from "../feature/Feature";
import Header from "../header/Header";
import Acoordion from "../acooridion/Acoordion";
import Footer from "../footer/footer";
import Jumbotron from "../jumbotron/Jumbotron";
import Banner from "../banner/Banner";
import Search from "../search/Search";
import "./Home.css";

function App() {
	return (
		<div className="home">
			<Banner />
			<Header />
			<Jumbotron />
			<Acoordion />
			<Footer />
		</div>
	);
}

export default App;
