import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-transparent mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1" />
			</Link>
			<div className="ml-auto">
				<Link to="/home">
					<button className="btn btn-primary">Back</button>
				</Link>
			</div>
		</nav>
	);
};
