import {
	SIGN_IN,
	SIGN_OUT,
	SIGN_UP,
	MARK_FAVORITE,
	REMOVE_FROM_FAVORITE,
	MAKE_PAYMENT,
} from "./type";
export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: userId,
	};
};

export const signUp = (user) => {
	return {
		type: SIGN_UP,
		payload: user,
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT,
	};
};
export const markFav = (movie) => {
	return {
		type: MARK_FAVORITE,
		payload: movie,
	};
};

export const unMarkFav = (movie) => {
	return {
		type: REMOVE_FROM_FAVORITE,
		payload: movie,
	};
};
export const makePayment = (payment) => {
	console.log("ooooo", payment);
	return {
		type: MAKE_PAYMENT,
		payload: payment,
	};
};
