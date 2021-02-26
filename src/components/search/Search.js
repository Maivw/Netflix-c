import React, { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../Requests";
import "./Search.css";
import Header from "../header/Header";
import { useDispatch } from "react-redux";
import { markFav } from "../../actions/index";
import MovieDetail from "../movieDetail/MovieDetail";

function Search() {
	const dispatch = useDispatch();
	const [isSearch, setIsSearch] = useState(true);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("netflix");
	const [movies, setMovies] = useState([]);
	const [genre, setGenre] = useState("");
	const fetchUrl = requests.search;
	const fetchUrlBygenre = requests.searchBygenre;

	useEffect(() => {
		async function fetchMovies() {
			try {
				const response = await axios.get(`${fetchUrl}&query=${query}`);
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

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const getQuery = (e) => {
		e.preventDefault();
		setQuery(search);
		setIsSearch(true);
		setSearch("");
	};

	const handleGenreChange = (e) => {
		setGenre(e.target.value);
	};

	const addFavorite = (movie) => {
		dispatch(markFav(movie));
	};

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
							<div className="search__movies">
								<MovieDetail
									key={item.id}
									movie={item}
									callback={addFavorite}
									isSearch={isSearch}
								/>
							</div>
						))}
				</div>
			</div>
		</>
	);
}

export default Search;
