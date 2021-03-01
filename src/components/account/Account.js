import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Account.css";
import PlanScreen from "../planScreen/PlanScreen";

function Account() {
	const user = useSelector((state) => state.user.user);
	const isPaid = useSelector((state) => state.payment.payment);
	const history = useHistory();
	console.log("isPaid", isPaid);
	return (
		<div className="account">
			<img
				src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1"
				alt="avatar"
			/>
			<div className="account__question">Who's watching?</div>
			<div className="account__name">{user?.email}</div>
			<button onClick={() => history.push("/profile")}>Watch Now</button>
		</div>
	);
}

export default Account;
