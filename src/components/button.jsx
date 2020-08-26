import React from "react";
import { Button as MUIButton } from "@material-ui/core";

function Button({ children, ...otherProps }) {
  return (
    <MUIButton
      {...otherProps}
      variant={otherProps.variant ?? "contained"}
      color={otherProps.color ?? "primary"}
    >
      {children}
    </MUIButton>
  );
}

export default Button;
