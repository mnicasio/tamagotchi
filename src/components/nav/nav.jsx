import React from "react";
import { Grid } from "@material-ui/core";

function Nav({ children }) {
  return (
    <Grid id="nav-wrapper" container>
      {children}
    </Grid>
  );
}

export default Nav;
