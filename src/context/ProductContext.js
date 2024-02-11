import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);
const ProductContext = ({ children }) => {
  let API_PRODUCTS = "http://localhost:3000/products";

  const [product, setProduct] = useState([]);

  const [oneProduct, setOneProduct] = useState({});

  async function addProduct(newProduct) {
    await axios.post(API_PRODUCTS, newProduct);
    readProduct();
  }

  async function readProduct() {
    const { data } = await axios(API_PRODUCTS);
    setProduct(data);
  }
  async function deleteProduct(id) {
    await axios.delete(`${API_PRODUCTS}/${id}`);
    readProduct();
  }

  async function getOneProduct(id) {
    const { data } = await axios(`${API_PRODUCTS}/${id}`);
    setOneProduct(data);
  }

  async function editProduct(id, editedProduct) {
    await axios.patch(`${API_PRODUCTS}/${id}`, editedProduct);
    readProduct();
  }
  // ?!Pagination
  const [page, setPage] = useState();
  const itemsperPage = 1;
  // const count = Math.ceil(data.length / itemsperPage);

  // function currentPage() {
  //   const next = (page - 1) * itemsperPage;
  //   const prev = next + itemsperPage;
  //   return data.slice(next, prev);
  // }
  // ?!Pagination

  let values = {
    addProduct,
    readProduct,
    product,
    deleteProduct,
    oneProduct,
    getOneProduct,
    editProduct,
    // setPage,
    // count,
    // currentPage,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
