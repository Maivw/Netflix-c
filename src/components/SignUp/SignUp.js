import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./SignUp.css";
import Header from "../header/Header";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { signUp } from "../../actions/index";

function SignUp() {
	const history = useHistory();
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleRegister = (e) => {
		e.preventDefault();

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					signUp({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
					})
				);
			})
			.catch((err) => alert(err.message));
		history.push("/account");
	};
	return (
		<div className="signUp">
			<div>
				<Link to="/">
					<img
						className="signUp__logo"
						alt="Nflix"
						src="https://res.cloudinary.com/maivw/image/upload/v1618590328/color_logo_with_background_oeek1j.svg"
					/>
				</Link>
			</div>
			<div className="signUp__form">
				<div className="signUp__title">Sign Up</div>
				<div className="signUp__Innerform">
					<input
						placeholder="Email address"
						value={email}
						className="signUp__input"
						autoComplete="off"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						autoComplete="off"
						placeholder="Password"
						className="signUp__input"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						type="submit"
						className="signUp__button"
						onClick={handleRegister}
					>
						Sign Up
					</button>
				</div>

				<div className="signUp__toSignUp">
					Already have Nflix Account ?
					<Link to="/signin" className="signUp__link">
						Sign in now.
					</Link>
				</div>
				<div className="signUp__more">
					This page is protected by Google reCAPTCHA to ensure you're not a bot.
					Learn more.
				</div>
			</div>
		</div>
	);
}

export default SignUp;
