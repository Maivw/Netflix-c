import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import "./PlanScreen.css";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

function PlanScreen() {
	const [products, setProducts] = useState([]);
	const user = useSelector((state) => state.user.user);
	const [subscription, setSubscription] = useState("");
	useEffect(() => {
		db.collection("customers")
			.doc(user.uid)
			.collection("subscriptions")
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach(async (subscription) => {
					setSubscription({
						role: subscription.data().role,
						current_period_end: subscription.data().current_period_end.seconds,
						current_period_start: subscription.data().current_period_start
							.seconds,
					});
				});
			});
	}, []);
	useEffect(() => {
		db.collection("products")
			.where("active", "==", true)
			.get()
			.then((querySnapshot) => {
				const products = {};
				querySnapshot.forEach(async (productDoc) => {
					products[productDoc.id] = productDoc.data();
					const priceSnap = await productDoc.ref.collection("prices").get();
					priceSnap.docs.forEach((doc) => {
						products[productDoc.id].prices = {
							priceId: doc.id,
							priceData: doc.data(),
						};
					});
				});
				setProducts(products);
			});
	}, []);
	const loadCheckout = async (priceId) => {
		const docRef = await db
			.collection("customers")
			.doc(user.uid)
			.collection("checkout_sessions")
			.add({
				price: priceId,
				success_url: window.location.origin,
				cancel_url: window.location.origin,
			});
		docRef.onSnapshot(async (snap) => {
			const { error, sessionId } = snap.data();

			if (error) {
				alert(`An error occured: ${error.message}`);
			}
			if (sessionId) {
				const stripe = await loadStripe(
					"pk_test_51I4GzjCSzA8Pexg4xaBYghBP2TsZELo8UJCqx1j3h7QLmfz1KOtBOcHmhpWZaMRfSYhmpH59jlB79VXOwdnoCgeN00D2S62SPI"
				);
				stripe.redirectToCheckout({ sessionId });
			}
		});
	};
	console.log("subscriptions", subscription);
	return (
		<div className="planScreen">
			{subscription && (
				<>
					<div className="planScreen__name">Plan: {subscription?.role}</div>
					<div className="planScreen__renewal">
						Renewal date:{" "}
						{new Date(
							subscription?.current_period_end * 1000
						).toLocaleDateString()}
					</div>
				</>
			)}
			{Object.entries(products).map(([productId, productData]) => {
				const isCurrentPackage = productData?.name
					?.toLowerCase()
					.includes(subscription?.role);
				return (
					<div className="planScreen__plan" key={productId}>
						<div className="planScreen__info">
							<h5>{productData.name}</h5>
							<h6>{productData.description}</h6>
						</div>
						<button
							className={`${isCurrentPackage ? "button__disabled" : "button"} `}
							onClick={() =>
								!isCurrentPackage && loadCheckout(productData?.prices.priceId)
							}
						>
							{isCurrentPackage ? "Current package" : "Subscribe"}
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default PlanScreen;
