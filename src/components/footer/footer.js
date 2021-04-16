import React from "react";
import "./Footer.css";

function Footer() {
	return (
		<div className="footer">
			<div className="footer__title">Questions? Contact us.</div>
			<div className="footer__body">
				<div className="footer__row">
					<div>FAQ</div>
					<div>Investor Relations</div>
					<div>Ways to Watch</div>
					<div>Corporate Information</div>
					<div>Nflix Originals</div>
				</div>

				<div className="footer__row">
					<div>Help Centre</div>
					<div>Jobs</div>
					<div>Terms of Use</div>
					<div>Contact Us</div>
				</div>

				<div className="footer__row">
					<div>Account</div>
					<div>Redeem gift cards</div>
					<div>Privacy</div>
					<div>Speed Test</div>
				</div>

				<div className="footer__row">
					<div>Media Centre</div>
					<div>Buy gift cards</div>
					<div>Cookie Preferences</div>
					<div>Legal Notices</div>
				</div>
			</div>
			<p>Nflix United State</p>
		</div>
	);
}

export default Footer;
