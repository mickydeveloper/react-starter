import React from "react";
import { Grid } from "../../components/common/grid";

export default class HomePage extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <Grid>
        This is the start
      </Grid>
    );
  }
}
