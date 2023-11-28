import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product({ items, cart, setCart }) {
	const addToCart = (id, price, title, description, imgSrc) => {
		setCart((prevCart) => {
			const obj = {
				id,
				price,
				title,
				description,
				imgSrc,
			};
			return [...prevCart, obj];
		});

		console.log("Cart Element = ", cart);
		toast.success("Item Added", {
			position: "top-center",
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});
	};

	// useEffect to log the updated cart state
	useEffect(() => {
		console.log("Cart Element = ", cart);
	}, [cart]);
	return (
		<>
			<ToastContainer
				position="top-center"
				autoClose={4000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>

			<div className="container">
				<div className="row">
					{items.map((product, index) => {
						return (
							<div key={index} className="col-lg-4 col-md-6 my-3">
								<div
									className="card"
									style={{ width: "18rem" }}
								>
									<Link
										to={`/eCommerce-react-app/product/${product.id}`}
										onClick={window.scrollTo(0, 0)}
									>
										<img
											src={product.imgSrc}
											className="card-img-top"
											alt={"img" + index}
										/>
									</Link>
									<div className="card-body">
										<h5 className="card-title">
											{product.title}
										</h5>
										<p className="card-text">
											{product.description}
										</p>
										<div className="d-flex justify-content-evenly gap-5">
											<button className="btn btn-primary">
												₹ {product.price}
											</button>
											<button
												onClick={() =>
													addToCart(
														product.id,
														product.price,
														product.title,
														product.description,
														product.imgSrc,
													)
												}
												className="btn btn-warning px-2"
											>
												Add To Cart
											</button>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default Product;
