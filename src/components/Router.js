import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Detail from "routers/Detail";
import Home from "routers/Home";
import Search from "routers/Search";
import SponsorContainer from "routers/Sponsor/SponsorContainer";
import Tv from "routers/Tv"
import Header from "./Header";

function Router() {
  return (
    <HashRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tv" exact component={Tv} />
          <Route path="/search" exact component={Search} />
          <Route path="/movie/:id" exact component={Detail} />
          <Route path="/show/:id" exact component={Detail} />
          <Route path="/sponsor" exact component={SponsorContainer} />
          <Redirect from="*" to="/" />
        </Switch>
    </HashRouter>
  );
}

export default Router;
