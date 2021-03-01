import { MAKE_PAYMENT } from "../actions/type";
const INITIAL_STATE = {
	payment: false,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case MAKE_PAYMENT:
			return {
				...state,
				payment: action.payload,
			};
		default:
			return state;
	}
};
