import { SIGN_IN, SIGN_OUT, SIGN_UP } from "./type";
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
