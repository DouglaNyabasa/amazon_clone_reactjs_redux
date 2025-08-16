import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, Checkout, SearchResults, ProductPage } from "./componets/Home/";
import Navbar from "./componets/Navbar/Navbar";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;