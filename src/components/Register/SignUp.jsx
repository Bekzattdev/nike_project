import { Box, Button, TextField } from "@mui/material";
import React from "react";

const SignUp = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Button variant="contained">Sign in</Button>
      </Box>
    </Box>
  );
};

export default SignUp;
