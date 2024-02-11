import React from "react";
import Admin from "../components/admin/Admin";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "../pages/ProductsPage";
import EditProduct from "../components/EditProduc/EditProduct";
import SignUp from "../components/Register/SignUp";
import SignIn from "../components/Register/SignIn";

const MainRoutes = () => {
  const PUBLIC = [
    { link: "/admin", element: <Admin />, id: 1 },
    { link: "/", element: <ProductsPage />, id: 2 },
    { link: "/edit/:id", element: <EditProduct />, id: 3 },
    { link: "/sign_up", element: <SignUp />, id: 4 },
    { link: "/sign_in", element: <SignIn />, id: 5 },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
