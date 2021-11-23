import React from "react";
import InputForm from "../components/InputForm";
import SelectForm from "../components/SelectForm";

const Header: React.FC = () => {
	return (
		<div className="bg-success bg-gradient p-0">
			<h1 className="text-center text-white mb-4 pt-4" >Search for books</h1>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-sm-10 col-md-8 col-xl-6">
						<InputForm />
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
							<SelectForm />
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
							<SelectForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;