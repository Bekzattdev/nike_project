import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";

import ProductCard from "./ProductCard";
import { Box } from "@mui/material";

const ProductList = () => {
  const { readProduct, product, deleteProduct } = useProduct();
  useEffect(() => {
    readProduct();
  }, []);

  return (
    <Box
      sx={{
        p: "30px 0",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "17px",
      }}
    >
      {product ? (
        product.map((i, index) => (
          <ProductCard i={i} deleteProduct={deleteProduct} key={index} />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </Box>
  );
};

export default ProductList;
