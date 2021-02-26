import React from "react";
import "./MovieDetail.css";

function MovieDetail({ movie, key, callback, callbackRemove, isSearch }) {
	const baseUrl = "https://image.tmdb.org/t/p/original/";
	return (
		<div className="movie" key={key}>
			<img className="movie__img" src={`${baseUrl}${movie.poster_path}`} />
			<div>
				<div className="movie__title">{movie.title}</div>
				<div className="movie__overview">{movie.overview}</div>
				<div className="movie__buttons">
					<button className="movie__button-small">Play</button>
					{isSearch ? (
						<button
							onClick={() => callback(movie)}
							className="movie__button-small"
						>
							My List
						</button>
					) : (
						<button
							onClick={() => callbackRemove(movie)}
							className="movie__button-small"
						>
							Remove
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default MovieDetail;
