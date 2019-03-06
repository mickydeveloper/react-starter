import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
//COMPONENTS
import HomePage from "../pages/home-page/home-page";

class Main extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  public render(): JSX.Element {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
      </Switch>
    );
  }
}
export const MainRouterOutlet: React.ComponentClass<{}> = withRouter(Main);
