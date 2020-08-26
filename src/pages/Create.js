import React from "react";
import TextField from "@material-ui/core/TextField";

function Create() {
  return (
    <>
      <div>Create New Pet</div>
      <form>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Hobby" variant="outlined" />
        <TextField id="outlined-basic" label="Color" variant="outlined" />
      </form>
    </>
  );
}

export default Create;
