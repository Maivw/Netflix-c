import React, { useState } from "react";
import faqsData from "../../fixtures/faqs.json";
import "./Acoordion.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Acoordion() {
	const [toggle, setToggle] = useState(null);
	const [selected, setSelected] = useState();
	const history = useHistory();
	const user = useSelector((state) => state.user.user);
	const isPaid = useSelector((state) => state.payment.payment);

	return (
		<div className="acoordion">
			<div className="acoordion__title">Frequently Asked Questions</div>
			<div className="acoordion__questions">
				{faqsData.map((item) => (
					<div className="acoordion__question" key={item.id}>
						<div
							className="acoordion__header"
							onClick={(item) => setSelected(item)}
						>
							{item.header}
							<img
								src={
									toggle?.id === item.id
										? "/images/icons/close-slim.png"
										: "/images/icons/add.png"
								}
								alt="Close/Open"
								onClick={() =>
									setToggle((prev) => (prev?.id === item.id ? null : item))
								}
							/>
						</div>
						<div className="acoordion__answer">
							{toggle?.id === item.id ? item.body : null}
						</div>
					</div>
				))}
			</div>

			<div className="acoordion__footer">
				<div className="acoordion__wrap">
					<input className="acoordion__input" placeholder="Email Address" />
					{user && isPaid === " active" ? (
						<div
							onClick={() => history.push("/main")}
							className="acoordion__button"
						>
							Get started
						</div>
					) : (
						<div
							onClick={() => history.push("/signIn")}
							className="acoordion__button"
						>
							Try it Now
						</div>
					)}
					<img src="/images/icons/chevron-right.png" alt="Try now" />
				</div>
				<div className="acoordion__content">
					Ready to watch? Enter your email to create or restart your membership
				</div>
			</div>
		</div>
	);
}

export default Acoordion;
