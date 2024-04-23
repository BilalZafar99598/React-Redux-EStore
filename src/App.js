import { data } from "./component/db";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./component/ProductList";
import ProductPage from "./component/ProductPage";
import AddProduct from "./component/AddProduct";

const App = () => {
  const [products, setProducts] = useState(data);

  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ProductList products={products} />}/>
          <Route path="/additem" element={<AddProduct products={products} />}/>
          <Route path="/item/:id" element={<ProductPage products={products} />}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App
