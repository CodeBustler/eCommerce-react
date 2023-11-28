import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import items from "./Data";
import Logo from "/shopping-cart.png";

function NavBar({ setData, cart }) {
	const [search, setSearchTerm] = useState("");
	const location = useLocation();
	const navigate = useNavigate();

	const filterByCategory = (category) => {
		const element = items.filter((p) => p.category === category);
		console.log(element);
		setData(element);
	};

	const filterByPrice = (price) => {
		const element = items.filter((p) => p.price >= price);
		console.log(element);
		setData(element);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/search/${search}`);
		setSearchTerm("");
	};

	return (
		<>
			<header className="sticky-top">
				<nav className="nav-bar">
					<Link to={"/eCommerce-react-app"} className="brand">
						<img src={Logo} alt="logo" width={30} />
						eCommerce
					</Link>

					<form className="search-bar" onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Search Products"
							value={search}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						<i
							className="fa-brands fa-searchengin"
							onClick={handleSubmit}
						></i>
					</form>
					<Link to={"/eCommerce-react-app/cart"} className="cart">
						<button
							type="button"
							className="btn btn-primary position-relative"
						>
							<i className="fa-solid fa-cart-plus"></i>
							<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
								{cart.length}
								<span className="visually-hidden">Cart</span>
							</span>
						</button>
					</Link>
				</nav>

				{/*FILER BY PRODUCT*/}
				{location.pathname == "/eCommerce-react-app" && (
					<div className="nav-wrapper">
						<div className="filter">
							<i className="fa-solid fa-filter"></i> Filter By
							&nbsp; <i className="fa-solid fa-arrow-right"></i>
						</div>
						<div
							className="items"
							onClick={() => filterByCategory("mobiles")}
						>
							Mobiles
						</div>
						<div
							className="items"
							onClick={() => filterByCategory("tablets")}
						>
							Tablet
						</div>
						<div
							className="items"
							onClick={() => filterByCategory("laptops")}
						>
							Laptops
						</div>
						<div
							className="items pr"
							onClick={() => filterByPrice(39999)}
						>
							Below ₹ 39,999
						</div>
						<div
							className="items pr"
							onClick={() => filterByPrice(49999)}
						>
							Below ₹ 49,999
						</div>
						<div
							className="items pr"
							onClick={() => filterByPrice(59999)}
						>
							Below ₹ 59,999
						</div>
						<div
							className="items pr"
							onClick={() => filterByPrice(59999)}
						>
							Below ₹ 69,999
						</div>
						<div
							className="items pr"
							onClick={() => filterByPrice(69999)}
						>
							Below ₹ 79,999
						</div>
						<div
							className="items pr"
							onClick={() => filterByPrice(79999)}
						>
							Below ₹ 89,999
						</div>
					</div>
				)}
			</header>
		</>
	);
}

export default NavBar;
