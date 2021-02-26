import React from "react";
import jumboData from "../../fixtures/jumbo.json";
import "./Jumbotron.css";

function Jumbotron() {
	return (
		<div className="jumbotron">
			{jumboData.map((item) => (
				<div
					className="jumbotron__item"
					key={item.id}
					direction={item.direction}
				>
					<div className="jumbotron__header">
						<div className="jumbotron__title">{item.title}</div>
						<div className="jumbotron__subTitle">{item.subTitle}</div>
					</div>
					<div className="jumbotron__body">
						<img className="jumbotron__image" src={item.image} alt={item.alt} />
					</div>
				</div>
			))}
		</div>
	);
}

export default Jumbotron;
