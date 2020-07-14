import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { LoginView } from "./views/login";
import { Demo } from "./views/demo";
import { Barchart } from "./views/barchart";
import { Questions } from "./views/questions";
import { NextQuestion } from "./views/nextquestion";
import { Single } from "./views/single";
import { Private } from "./views/private";
import injectContext from "./store/appContext";
import { SignupView } from "./views/signup";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/login">
							<Navbar />
							<LoginView />
						</Route>
						<Route path="/signup" component={SignupView} />
						<Route path="/barchart" component={Barchart} />
						<Route path="/private" component={Private} />
						<Route path="/questions" component={Questions} />
						<Route path="/next-question" component={NextQuestion} />
						<Route path="/demo" component={Demo} />
						<Route path="/single/:theid" component={Single} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
