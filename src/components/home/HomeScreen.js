import React from "react";
import Feature from "../feature/Feature";
import Header from "../header/Header";
import Section from "../rowSections/Section";
import "./Home.css";
import requests from "../../Requests";

function HomeScreen() {
	return (
		<div className="homeScreen">
			<div className="homeScreen__top">
				<Header />
				<Feature />
			</div>
			<div className="homeScreen__body">
				<Section
					title="NFLIX ORIGINALS"
					fetchUrl={requests.fetchNetflixOriginals}
					isLargeSection={true}
					key={1}
				/>
				<Section
					title="Trending now"
					fetchUrl={requests.fetchTrending}
					key={2}
				/>
				<Section
					title="Comedy movies"
					fetchUrl={requests.fetchComedyMovies}
					key={3}
				/>
				<Section
					title="Horror movies"
					fetchUrl={requests.fetchHorrorMovies}
					key={4}
				/>
				<Section
					title="Ronance movies"
					fetchUrl={requests.fetchRomanceMovies}
					key={5}
				/>
				<Section
					title="Documentaries"
					fetchUrl={requests.fetchDocumentaries}
					key={6}
				/>
			</div>
		</div>
	);
}

export default HomeScreen;
