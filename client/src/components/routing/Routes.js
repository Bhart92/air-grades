import React, { Fragment } from "react";
import NotFound from "../notFound/NotFound";
import MainContainer from "../containers/MainContainer";
import Header from "../header/Header";
import About from "../about/About";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};
export default Routes;
