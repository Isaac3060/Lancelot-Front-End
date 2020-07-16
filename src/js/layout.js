import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { LoginView } from "./views/login";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Private } from "./views/private";
import injectContext from "./store/appContext";
import { SignupView } from "./views/signup";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { TestView } from "./views/test";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/login" component={LoginView} />
						<Route path="/signup" component={SignupView} />
						<Route path="/private" component={Private} />
						<Route path="/demo" component={Demo} />
						<Route path="/single/:theid" component={Single} />
						<Route path="/test" component={TestView} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
