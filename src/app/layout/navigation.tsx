import React, { Component } from "react";
import { Link } from "react-router-dom";
import { STRINGS } from "../utils/constants/strings";

export default class Navigation extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  public render(): JSX.Element {
    return (
      <nav className="main-nav container">
        <div className="links">
          <Link to="/">{STRINGS.HOME.WELCOME}</Link>
        </div>
      </nav>
    );
  }
}
