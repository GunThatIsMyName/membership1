import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Details from "routers/Details";
import Home from "routers/Home";
import Search from "routers/Search";
import Tv from "routers/Tv";
import Header from "./Header";

function Router() {
  return (
    <HashRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tv" component={Tv} />
          <Route path="/search" component={Search} />
          <Route path="/details" component={Details} />
          <Redirect from="*" to="/" />
        </Switch>
    </HashRouter>
  );
}

export default Router;
