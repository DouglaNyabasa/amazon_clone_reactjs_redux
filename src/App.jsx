import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Checkout, HomePage, ProductPage, SearchResults } from "./componets/Home";
import Navbar from "./componets/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route  path="/checkout" element={<Checkout />} />
        <Route  path="/search" element={<SearchResults />} />

        <Route  path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
