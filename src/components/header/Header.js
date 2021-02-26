import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";

function Header() {
	const user = useSelector((state) => state.user.user);
	const history = useHistory();
	const changSearchPage = () => {
		history.push("/search");
	};
	return (
		<div>
			<div className="header">
				<div>
					<img
						src="../../images/misc/home-bg.jpg"
						className="header__bgImage"
					/>
				</div>
				<div className="header__top">
					{user ? (
						<Link to="/main">
							<img
								className="header__logo"
								alt="Netflix"
								src="../images/logo/Netflix-Logo.png"
							/>
						</Link>
					) : (
						<Link to="/">
							<img
								className="header__logo"
								alt="Netflix"
								src="../images/logo/Netflix-Logo.png"
							/>
						</Link>
					)}

					{user ? (
						<div className="header__top-left">
							<div
								className="header__myListText"
								onClick={() => history.push("/my-list")}
							>
								My Watch List
							</div>
							<div className="header__searchText" onClick={changSearchPage}>
								Search
							</div>
							<Link to="/profile" className="header__link">
								<img
									src="https://cdn4.iconfinder.com/data/icons/ui-user-interface-line-circle-multi-color/750/93_-_User-512.png"
									alt="account"
									className="header__accountImage"
								/>
							</Link>
						</div>
					) : (
						<Link to="/signIn" className="header__link">
							<button className="header__button">Sign In</button>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}

export default Header;
