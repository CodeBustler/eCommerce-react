import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import items from "./Data";
import Product from "./Product";

function SearchItem() {
	const { term } = useParams();
	const [searchedProducts, setSearchedProducts] = useState([]);

	useEffect(() => {
		const filteredData = () => {
			const data = items.filter((p) =>
				p.title.toLowerCase().includes(term.toLowerCase()),
			);
			setSearchedProducts(data);
			console.log(data);
		};
		filteredData();
	}, [term]);

	return <Product items={searchedProducts} />;
}

export default SearchItem;
