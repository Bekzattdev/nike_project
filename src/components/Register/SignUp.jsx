import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import google from "../../image/96c8c8c229729cd0551cb040e43e94c6.png";
import { useAuthContext } from "../../context/AuthContext";
const SignUp = () => {
  const { register, signInWithGoogle } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit() {
    try {
      register(email, password);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <Box sx={{ display: "flex", justifyContent: "center", height: "90vh" }}>
      <Box
        sx={{
          width: "450px",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Sign up
        </Typography>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />
        <Button onClick={handleSubmit} variant="contained">
          Sign up
        </Button>
        <hr />
        <Button
          onClick={() => signInWithGoogle()}
          sx={{ border: "solid 1px blue" }}
          variant="h3"
        >
          <img style={{ width: "20px" }} src={google} alt="" /> Sing in with
          Google
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;
