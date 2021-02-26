import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Profile.css";
import Header from "../header/Header";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { signOut } from "../../actions/index";

function Profile() {
	const dispatch = useDispatch();
	const history = useHistory();
	const user = useSelector((state) => state.user.user);
	const logOut = () => {
		dispatch(signOut());
		auth.signOut();
		history.push("/");
	};
	return (
		<div className="profile__wrapper">
			<Header />
			<div className="profile">
				<div className="profile__title">Edit Profile</div>
				<div className="profile__content">
					<div className="profile__content-left">
						<img
							src="https://cdn4.iconfinder.com/data/icons/ui-user-interface-line-circle-multi-color/750/93_-_User-512.png"
							alt="account"
							className="profile__accountImage"
						/>
					</div>
					<div className="profile__content-right">
						<div className="profile__name">{user?.email}</div>
						<div className="profile__plans">Plans: (Current Plan: premium)</div>
						<div className="profile__renewal">Renewal date:</div>
						<div className="profile__button" onClick={logOut}>
							Sign Out
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
