import { MARK_FAVORITE, REMOVE_FROM_FAVORITE } from "../actions/type";
const INITIAL_STATE = {
	moviesFav: [],
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case MARK_FAVORITE:
			const i = state.moviesFav.findIndex(
				(item) => item.id === action.payload.id
			);
			let newFav = [...state.moviesFav];

			if (i < 0) {
				newFav = [...newFav, action.payload];
			}
			return {
				...state,
				moviesFav: [...newFav],
			};
		case REMOVE_FROM_FAVORITE:
			const index = state.moviesFav.findIndex(
				(item) => item.id === action.payload.id
			);
			let newFavList = [...state.moviesFav];

			if (index >= 0) {
				newFavList.splice(index, 1);
			} else {
				console.warn(
					`Cant remove product (id: ${action.id}) as its not in List!`
				);
			}
			return {
				...state,
				moviesFav: [...newFavList],
			};
		default:
			return state;
	}
};
