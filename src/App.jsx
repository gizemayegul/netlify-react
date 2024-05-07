import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.log(error));
  }, []);
  console.log(products);

  return (
    <div>
      {products &&
        products.map((product, index) => (
          <div key={index}>{product.brand}</div>
        ))}
    </div>
  );
}

export default App;
