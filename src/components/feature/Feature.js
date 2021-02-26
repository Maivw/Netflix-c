import React, { useState, useEffect } from "react";
import "./Feature.css";
import axios from "../../axios";
import requests from "../../Requests";
import { markFav } from "../../actions/index";
import { useDispatch } from "react-redux";

function Feature() {
	const dispatch = useDispatch();
	const [movie, setMovie] = useState({});
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
		}
		fetchData();
	}, []);
	const addFavorite = (movie) => {
		dispatch(markFav(movie));
	};

	const imgUrl = `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`;
	return (
		<div className="feature__secondary">
			<img
				className="feature__secondary-image"
				src={`${
					movie
						? imgUrl
						: "https://lh3.googleusercontent.com/9yppnvlY2yNA0FIkQl0gKStehWj5CpXpAJZHPAJE8znca-Tyew_nxgsye_gW1vnZG-ebrFSTn4CWMcC_WwPXBGtuyw=w1000"
				}`}
			/>
			<div className="feature__secondary-body">
				<h1 className="feature__title-small">
					{movie?.title ||
						movie?.name ||
						movie?.original_name ||
						"Welcome to Netflix"}
				</h1>
				{movie && (
					<div className="feature__buttons">
						<button className="feature__button-small">Play</button>
						<button
							onClick={() => addFavorite(movie)}
							className="feature__button-small"
						>
							My List
						</button>
					</div>
				)}
				<div className="feature__description">
					{movie?.overview || "Enjoy and have fun"}
				</div>
			</div>
		</div>
	);
}

export default Feature;
