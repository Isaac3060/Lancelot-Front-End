import React from "react";
import lancelot from "../../img/Lancelot.png";
import newshield from "../../img/newshield.png";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
// import { useDarkMode } from "react-recipes";
export const Home = () => (
<<<<<<< HEAD
	<div className="text-center mt-5">
		<p>
			<img
				src={newshield}
				style={{
					width: "300px"
				}}
			/>
		</p>
		<div className="btn-group-vertical mx-auto justify-content-center">
			<Link to="/login">
				<button className="btn btn-primary">login</button>
			</Link>
			<Link to="/signup">
				<button className="btn btn-primary">signup</button>
			</Link>
=======
	<>
		<div className="text-center mt-5">
			<p>
				<img
					src={newshield}
					style={{
						width: "400px"
					}}
				/>
			</p>
>>>>>>> 2798521ed177332cb50e036326126fcc5dea1d8f
		</div>
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-3">
					<Link to="/login">
						<button className="btn btn-primary btn-xl btn-block mb-2">login</button>
					</Link>
					<Link to="/signup">
						<button className="btn btn-primary btn-xl btn-block">signup</button>
					</Link>
				</div>
			</div>
		</div>
	</>
);
// this is for toggle between light and darkmode
// function App() {
//   const [darkMode, setDarkMode] = useDarkMode();
//   return (
//     <div className="header">
//       <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
//     </div>
//   );
// }
