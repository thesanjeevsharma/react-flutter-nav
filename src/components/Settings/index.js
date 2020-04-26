import React from "react";

import { Placeholder, Grid } from "../styled";

const Settings = () => {
  return (
    <>
      <Placeholder height="30px" />
      <Grid>
        <Placeholder height="30px" />
        <Placeholder height="30px" />
      </Grid>
      <Placeholder height="30px" />
      <Placeholder height="30px" />
      <Grid cuts="3">
        <Placeholder height="30px" />
        <Placeholder height="30px" />
        <Placeholder height="30px" />
      </Grid>
    </>
  );
};

export default Settings;
