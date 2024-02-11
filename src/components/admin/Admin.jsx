import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import UpNavbar from "../Navbar/UpNavbar";
import NavbarTest from "../Navbar/NavbarTest";
import NavbarCarusel from "../Navbar/NavbarCarusel";
import Footer from "../Footer/Footer";
import { useProduct } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const { addProduct } = useProduct();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState("");

  function handleChange() {
    let newObj = {
      name: name,
      type: type,
      price: price,
      img: img,
    };
    addProduct(newObj);
  }
  return (
    <>
      <UpNavbar />
      <NavbarTest />
      <NavbarCarusel />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
        }}
      >
        <Box
          sx={{
            width: "350px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: "27px",
              fontWeight: "bold",
            }}
          >
            ADMIN
          </Typography>
          <TextField
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setPrice(e.target.value)}
            id="outlined-basic"
            label="Price"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setType(e.target.value)}
            id="outlined-basic"
            label="Type"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setImg(e.target.value)}
            id="outlined-basic"
            label="Image"
            variant="outlined"
          />
          <Button
            onClick={handleChange}
            sx={{
              color: "#000",
              border: "1px solid #000",
              fontWeight: "bold",
              background: "transparent",
              "&:hover": {
                background: "#000",
                color: "#fff",
              },
            }}
            variant="contained"
          >
            add Shoes
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Admin;
