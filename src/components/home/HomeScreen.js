import React from "react";
import Feature from "../feature/Feature";
import Header from "../header/Header";
import Section from "../rowSections/Section";
import "./Home.css";
import requests from "../../Requests";

function HomeScreen() {
	return (
		<div className="home">
			<div className="home__top">
				<Feature />
				<Header />
			</div>
			<div className="home__body">
				<Section
					title="NETFLIX ORIGINALS"
					fetchUrl={requests.fetchNetflixOriginals}
					isLargeSection={true}
				/>
				<Section title="Trending now" fetchUrl={requests.fetchTrending} />
				<Section title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
				<Section title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
				<Section
					title="Ronance movies"
					fetchUrl={requests.fetchRomanceMovies}
				/>
				<Section title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
			</div>
		</div>
	);
}

export default HomeScreen;
