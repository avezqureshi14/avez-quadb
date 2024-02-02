import React from "react";
import "./App.css";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SingleShow from "./pages/SingleShow";
import Search from "./pages/Search";
const App = () => {
  return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<SingleShow />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/show/:id" element={<SingleShow />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
};

export default App;
