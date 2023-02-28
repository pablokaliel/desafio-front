import { Routes,Route} from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header/>
    
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
