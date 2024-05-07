import { useState, useEffect } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_SERVER_URL;

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}`)
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.log(error));
  }, []);
  console.log(products);
  return (
    <div>
      {" "}
      {products &&
        products.map((product, index) => (
          <div key={index}>{product.brand}</div>
        ))}
    </div>
  );
}
