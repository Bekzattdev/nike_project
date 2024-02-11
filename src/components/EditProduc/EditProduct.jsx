import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContext";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";

const EditProduct = () => {
  const { getOneProduct, oneProduct, editProduct } = useProduct();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setName(oneProduct.name);
      setPrice(oneProduct.price);
      setType(oneProduct.type);
      setImg(oneProduct.img);
    }
  }, [oneProduct]);

  function handleSaveChange() {
    let editObj = {
      name: name,
      price: price,
      type: type,
      img: img,
    };
    editProduct(id, editObj);
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
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
            EDIT
          </Typography>
          <TextField
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
          />
          <TextField
            onChange={(e) => setPrice(e.target.value)}
            id="outlined-basic"
            label="Price"
            variant="outlined"
            value={price}
          />
          <TextField
            onChange={(e) => setType(e.target.value)}
            id="outlined-basic"
            label="Type"
            variant="outlined"
            value={type}
          />
          <TextField
            onChange={(e) => setImg(e.target.value)}
            id="outlined-basic"
            label="Image"
            variant="outlined"
            value={img}
          />
          <Link to="/">
            <Button
              onClick={() => handleSaveChange()}
              sx={{
                width: "100%",
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
              edit Shoes
            </Button>
          </Link>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default EditProduct;
