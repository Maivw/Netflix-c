import React, { useState, useEffect } from "react";
import "./Section.css";
import axios from "../../axios";

function Section({ title, isLargeSection = false, fetchUrl }) {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);

			return request;
		}
		fetchData();
	}, [fetchUrl]);
	const baseUrl = "https://image.tmdb.org/t/p/original/";

	console.log("movies", movies);
	return (
		<div className="section">
			<h2 className="section__title">{title}</h2>
			<div className="section__movies">
				{movies?.map((movie) =>
					(isLargeSection && movie.poster_path) ||
					(!isLargeSection && movie.backdrop_path) ? (
						<img
							className={`section__image ${
								isLargeSection && "section__imagePoster"
							}`}
							src={`${baseUrl}${
								isLargeSection ? movie?.poster_path : movie?.backdrop_path
							}`}
							key={movie?.id}
							alt={movie?.name}
						/>
					) : (
						<div>Loading...</div>
					)
				)}
			</div>
		</div>
	);
}

export default Section;
