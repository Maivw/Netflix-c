import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./SignIn.css";
import { auth, googleProvider } from "../../firebase";
import { useDispatch } from "react-redux";
import { signIn } from "../../actions/index";

function SignIn() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [email, setEmail] = useState("demoUser@gmail.com");
	const [password, setPassword] = useState("password");
	const handleLogin = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					signIn({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
					})
				);
			})
			.catch((err) => alert(err));

		history.push("/account");
	};
	const handleLoginGoogle = (e) => {
		e.preventDefault();
		auth
			.signInWithPopup(googleProvider)
			.then((userAuth) => {
				dispatch(
					signIn({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
					})
				);
			})
			.catch((err) => alert(err));

		history.push("/account");
	};

	return (
		<div className="signIn">
			<div>
				<Link to="/">
					<img
						className="signIn__logo"
						alt="Netflix"
						src="../images/logo/Netflix-Logo.png"
					/>
				</Link>
			</div>
			<div className="signIn__form">
				<div className="signIn__title">Sign In</div>
				<div className="signIn__Innerform">
					<input
						placeholder="Email address"
						value={email}
						className="signIn__input"
						autoComplete="off"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						autoComplete="off"
						placeholder="Password"
						className="signIn__input"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						type="submit"
						className="signIn__button"
						onClick={handleLogin}
					>
						Sign In
					</button>
					<button
						type="button"
						className="signIn__googleButton"
						onClick={handleLoginGoogle}
					>
						Sign in with Google
					</button>
				</div>

				<div className="signIn__toSignUp">
					New to Netflix?{" "}
					<Link to="/signup" className="signIn__link">
						Sign up now.
					</Link>
				</div>
				<div className="signIn__more">
					This page is protected by Google reCAPTCHA to ensure you're not a bot.
					Learn more.
				</div>
			</div>
		</div>
	);
}

export default SignIn;
