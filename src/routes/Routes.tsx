import { Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import Detail from "../pages/detail/Detail";
import Search from "../pages/search/Search";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function Index() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Index;
