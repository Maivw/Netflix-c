import { SIGN_IN, SIGN_OUT, SIGN_UP } from "../actions/type";
const INITIAL_STATE = {
	user: null,
	users: [],
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SIGN_IN:
			return {
				...state,
				user: action.payload,
			};
		case SIGN_OUT:
			return { ...state, user: null };

		case SIGN_UP:
			return {
				...state,
				user: action.payload,
				users: [...state.users, action.payload],
			};
		default:
			return state;
	}
};
