import React from "react";
import "./Banner.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Banner() {
	const history = useHistory();
	const user = useSelector((state) => state.user.user);
	const isPaid = useSelector((state) => state.payment.payment);
	return (
		<div className="banner">
			<div className="banner__title">
				Unlimited films, TV Programmes and more
			</div>
			<div className="banner__subTitle">Watch anywhere. Cancel anytime</div>
			<form className="banner__form">
				<div className="banner__wrap">
					<input className="banner__input" placeholder="Email Address" />
					{user && isPaid === " active" ? (
						<div
							onClick={() => history.push("/main")}
							className="banner__button"
						>
							Get started
						</div>
					) : (
						<div
							onClick={() => history.push("/signIn")}
							className="banner__button"
						>
							Try it Now
						</div>
					)}
					<img src="/images/icons/chevron-right.png" alt="Try now" />
				</div>
				<div className="banner__content">
					Ready to watch? Enter your email to create or restart your membership
				</div>
			</form>
		</div>
	);
}

export default Banner;
