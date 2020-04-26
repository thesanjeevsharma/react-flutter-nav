import React from "react";

import { Placeholder, Grid } from "../styled";

const Home = () => {
  return (
    <>
      <Placeholder height="100px" />
      <Grid>
        <Placeholder height="100px" />
        <Placeholder height="100px" />
      </Grid>
      <Placeholder height="50px" />
      <Grid cuts="4">
        <Placeholder height="70px" />
        <Placeholder height="70px" />
        <Placeholder height="70px" />
        <Placeholder height="70px" />
      </Grid>
      <Placeholder margin="8px" />
      <Placeholder margin="8px" />
      <Placeholder height="8px" />
    </>
  );
};

export default Home;
