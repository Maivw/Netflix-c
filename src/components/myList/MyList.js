import React from "react";
import "./MyList.css";
import Header from "../header/Header";
import { useSelector, useDispatch } from "react-redux";
import MovieDetail from "../movieDetail/MovieDetail";
import { unMarkFav } from "../../actions/index";

function MyList() {
	const movies = useSelector((state) => state.movies.moviesFav);
	const dispatch = useDispatch();
	const removeMovie = (movie) => {
		dispatch(unMarkFav(movie));
	};
	return (
		<>
			<Header />
			<div className="my_List-wrapper">
				<div className="my_List">
					{!movies.length && (
						<div className="my_List-title">
							Your Favorite list is empty.
							<br /> Search and add movies or films to your list.
						</div>
					)}
					{movies?.map((movie) => (
						<MovieDetail
							key={movie.id}
							movie={movie}
							callbackRemove={removeMovie}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default MyList;
