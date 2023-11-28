import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import items from "./Data";
import Product from "./Product";

function ProductDetail({ cart, setCart }) {
	const { id } = useParams();
	const [product, setProduct] = useState([]);
	const [relatedProducts, setRelatedProducts] = useState([]);

	useEffect(() => {
		const filteredProduct = items.filter((product) => product.id == id);
		setProduct(filteredProduct[0]);

		const relatedProducts = items.filter(
			(p) => p.category === product.category,
		);
		setRelatedProducts(relatedProducts);
	}, [id, product.category]);

	return (
		<>
			<div className="product-item">
				<img
					src={product.imgSrc}
					className="img-fluid rounded-start"
					alt={"img" + product.id}
				/>
				<div>
					<h5 className="card-title my-3">{product.title}</h5>
					<p className="card-text">{product.description}</p>
					<div className="d-flex justify-content-start gap-3 ">
						<button className="btn btn-primary">
							₹ {product.price}
						</button>
						<Link
							target="_blank"
							to={product.amazonLink}
							className="btn btn-warning px-4"
						>
							Buy
						</Link>
					</div>
				</div>
			</div>
			<h2 className="m-5 m"> Related Products </h2>
			<Product cart={cart} setCart={setCart} items={relatedProducts} />
		</>
	);
}

export default ProductDetail;
