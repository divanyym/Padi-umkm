import React from "react";
import { useRoutes } from "react-router-dom";
import Home from './pages/Home';
import RelatedProductsSection from "./pages/Overview/RelatedProductsSection";
import Landing from "./pages/Landing/index";  // Mengasumsikan Landing memiliki file index.jsx yang valid

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },               // Home sebagai halaman utama
    { path: "*", element: <RelatedProductsSection /> },           // NotFound untuk menangani semua rute tidak ditemukan
    { path: "landing", element: <Landing /> },      // Landing diakses melalui /landing
    { path: "home", element: <Home /> },            // Tambahan, jika Anda ingin /home juga mengarah ke Home
  ]);

  return element;
};

export default ProjectRoutes;
