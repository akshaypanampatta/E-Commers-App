import HomePage from './Pages/HomePage'
import { Route, Routes,BrowserRouter } from "react-router-dom";
import EachProductPage from './Pages/EachProductPage';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import Catagory from './Components/Catagory/Catagory';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<EachProductPage />} />
        <Route path="/catagories/:names" element={<Catagory />} />
        <Route path="/catagories/:names/:id" element={<EachProductPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
