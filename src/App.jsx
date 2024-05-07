import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { Link } from "react-router-dom";

import "./App.css";
function App() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
