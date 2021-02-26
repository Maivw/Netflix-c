import React, { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../Requests";
import "./Search.css";
import Header from "../header/Header";

function Search() {
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("netflix");
	const [movies, setMovies] = useState([]);
	const [genre, setGenre] = useState("");
	const fetchUrl = requests.searchMovies;
	const fetchUrlBygenre = requests.searchBygenre;

	useEffect(() => {
		async function fetchMovies() {
			try {
				const response = await axios.get(`${fetchUrl}&query=${query}`);
				console.log("aaaaaaa", response.data.results);
				const moviesWithOnlyPosters =
					response.data.results &&
					response.data.results.filter((item) =>
						item.poster_path != null ? item : null
					);
				setMovies(moviesWithOnlyPosters);
			} catch (err) {
				console.log(err.message);
			}
		}

		async function fetchGenres(query) {
			if (!query) {
				return;
			}
			const response = await axios.get(
				`${fetchUrlBygenre}&with_genres=${genre}`
			);
			console.log("bbb", response.data.results);
			const moviesWithOnlyPosters =
				response.data.results &&
				response.data.results.filter((item) =>
					item.poster_path != null ? item : null
				);
			setMovies(moviesWithOnlyPosters);
		}
		fetchMovies(query);
		fetchGenres(genre);
	}, [query, genre]);

	function updateSearch(e) {
		setSearch(e.target.value);
	}

	function getQuery(e) {
		e.preventDefault();
		setQuery(search);
		setSearch("");
	}

	function handleGenreChange(e) {
		setGenre(e.target.value);
	}
	const baseUrl = "https://image.tmdb.org/t/p/original/";
	return (
		<>
			<Header />
			<div className="search">
				<form onSubmit={getQuery}>
					<div className="search__wrap">
						<input
							className="search__input"
							placeholder="Search movies and films"
							value={search}
							onChange={updateSearch}
						/>
						<button className="search__button">Search</button>
					</div>
					<div className="search__wrap">
						<select
							className="search__dropdown"
							onChange={handleGenreChange}
							value={genre}
						>
							<option hidden>Find by Genre</option>
							<option value="28">Action</option>
							<option value="12">Adventure</option>
							<option value="16">Animation</option>
							<option value="35">Comedy</option>
							<option value="99">Documentary</option>
							<option value="14">Fantasy</option>
							<option value="36">History</option>
							<option value="27">Horror</option>
							<option value="9648">Mystery</option>
							<option value="10749">Romance</option>
							<option value="878">Science Fiction</option>
							<option value="53">Thriller</option>
							<option value="10752">War</option>
							<option value="37">Western</option>
						</select>
					</div>
				</form>

				<div className="search__show">
					{movies &&
						movies.map((item) => (
							<div className="search__show-movie" key={item.id}>
								<img
									className="search__show-img"
									src={`${baseUrl}${item.poster_path}`}
								/>
								<div>
									<div className="search__show-title">{item.title}</div>
									<div className="search__show-overview">{item.overview}</div>
									<div className="search__buttons">
										<button className="search__button-small">Play</button>
										<button className="search__button-small">My List</button>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</>
	);
}

export default Search;
