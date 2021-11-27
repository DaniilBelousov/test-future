import React, { useState } from "react";
import InputForm from "./InputForm";
import SelectForm from "./SelectForm";
import { useAction } from "../hooks/useAction";
import { QueryBooksVolume } from "../redux/types";

const Header: React.FC = () => {
	const sorts = ["relevance", "newest"];
	const categories = ["all", "art", "biography", "computers", "history", "medical", "poetry"];
	const [input, setInput] = useState("");
	const [category, setCategory] = useState(categories[0]);
	const [sort, setSort] = useState(sorts[0]);
	const { fetchBook } = useAction();

	const onSubmitFrom = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		let q = input;

		if (category !== "all") {
			q += `+subject:${category}`;
		}

		const query: QueryBooksVolume = {
			q: q,
			orderBy: sort,
			maxResults: "10",
		};

		fetchBook(query);
	};

	return (
		<div className="bg-dark bg-gradient p-0">
			<h1 className="text-center text-white mb-4 pt-4" >Search for books</h1>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-sm-10 col-md-8 col-xl-6">
						<InputForm
							value={input} 
							placeholder="Harry Pot..."
							onSubmit={onSubmitFrom}
							onChange={event => setInput(event.currentTarget.value)}
						/>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-12 col-sm-5 col-md-5 col-xl-4 col-xxl-3">
					<div className="row justify-content-center">
						<div className="col-3 col-sm-4 col-xl-3">
							<p className="text-white text-end">
								Categories
							</p>
						</div>
						<div className="col-6 col-sm-8 col-lg-6">
							<SelectForm
								value={category}
								options={categories}
								onChange={event => setCategory(event.currentTarget.value)}
							/>
						</div>
					</div>
				</div>
				<div className="col-12 col-sm-5 col-md-5 col-xl-4 col-xxl-3">
					<div className="row justify-content-center">
						<div className="col-3 col-sm-4 col-xl-3">
							<p className="text-white text-end">
								Sorting&nbsp;by
							</p>
						</div>
						<div className="col-6 col-sm-8 col-lg-6">
							<SelectForm
								value={sort}
								options={sorts}
								onChange={event => setSort(event.currentTarget.value)}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;