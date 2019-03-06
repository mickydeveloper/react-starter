import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
//CONTAINERS
import { MainRouterOutlet } from "./main-router-outlet";
import Navigation from "./navigation";
import Footer from "./footer";
//COMPONENTS
import { ErrorBoundary } from "./../components/error-boundary/error-boundary";

export default class Layout extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  public render(): JSX.Element {
    return (
      <BrowserRouter>
        <ErrorBoundary>
          <Navigation />
          <MainRouterOutlet />
          <Footer />
        </ErrorBoundary>
      </BrowserRouter>
    );
  }
}
