import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CardDetails from "./components/CardDetails";
import ProductForm from "./components/ProductForm";





function App() {
  return (
   <>
    <Router>
      <Header />
      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart/:id" element={<CardDetails />} />
        <Route exact path="/products" element={<ProductForm/>}/>
      </Routes>
    </Router>
   </>
  );
}

export default App;
