import { Pagination, Stack } from "@mui/material";
import React from "react";
import { useProduct } from "../../context/ProductContext";

const PaginateCard = () => {
  const { setPage, count } = useProduct();
  function handleChange(p, n) {
    setPage(n);
  }
  return (
    <Stack spacing={2}>
      <Pagination onChange={handleChange} count={count} color="primary" />
    </Stack>
  );
};

export default PaginateCard;
