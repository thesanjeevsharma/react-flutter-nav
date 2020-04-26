import React from "react";

import { Placeholder, Grid } from "../styled";

const Profile = () => {
  return (
    <>
      <Grid>
        <Placeholder height="100px" width="100px" rounded />
      </Grid>
      <Placeholder height="50px" />
      <Placeholder height="70px" />
      <Grid cuts="4">
        <Placeholder height="50px" margin="0px" />
        <Placeholder height="50px" margin="0px" />
        <Placeholder height="50px" margin="0px" />
        <Placeholder height="50px" margin="0px" />
        <Placeholder height="50px" margin="0px" />
        <Placeholder height="50px" margin="0px" />
        <Placeholder height="50px" margin="0px" />
      </Grid>
    </>
  );
};

export default Profile;
