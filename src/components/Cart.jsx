import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart }) {
	const navigate = useNavigate();

	console.log(cart);
	return (
		<>
			<div className="container-fluid d-flex flex-column justify-content-center align-items-center">
				{cart.length == 0 ? (
					<div className="d-flex align-items-center flex-column ">
						<div className="text-center m-5 fs-5 fw-bolder text-primary">
							Cart is Empty
						</div>
						<button
							className="btn btn-warning"
							onClick={() => navigate("/eCommerce-react")}
						>
							Return Home
						</button>
					</div>
				) : (
					cart.map((product, index) => {
						return (
							<div
								key={index}
								className="card mb-3 m-5 "
								style={{ maxWidth: "600px" }}
							>
								<div className="row g-0">
									<div className="col-md-4">
										<img
											src={product.imgSrc}
											className="img-fluid rounded-start"
											alt="..."
										/>
									</div>
									<div className="col-md-8">
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
												<button className="btn btn-warning px-4">
													Buy
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})
				)}
			</div>

			{cart.length !== 0 && (
				<div className="d-flex justify-content-center align-items-center gap-5 my-5">
					<button className="btn btn-primary">Checkout</button>
					<button
						className="btn btn-danger"
						onClick={() => setCart([])}
					>
						Clear Cart
					</button>
				</div>
			)}
		</>
	);
}

export default Cart;
