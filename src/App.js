import React from "react";
import { HashRouter, Route, NavLink, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import MyNavLink from "./components/MyNavLink";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import "./App.css";

export default function App() {
    return (
        <div>
            <HashRouter>
                <NavBar>
                    <NavLink activeClassName="active" exact component={MyNavLink} to="/">About Me</NavLink>
                    <NavLink activeClassName="active" exact component={MyNavLink} to="/contact">Contact Me</NavLink>
                    <NavLink activeClassName="active" exact component={MyNavLink} to="/portfolio">Portfolio</NavLink>
                </NavBar>
                <main className="container blue-grey-text text-lighten-5">
                    <Switch>
                        <Route exact path="/"><About /></Route>
                        <Route exact path="/contact"><Contact /></Route>
                        <Route exact path="/portfolio"><Portfolio /></Route>
                    </Switch>
                </main>
            </HashRouter>
        </div>
    )
}
