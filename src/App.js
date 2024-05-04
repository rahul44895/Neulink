import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Inventory from "./Components/Inventory/Inventory";
import Sales from "./Components/Sales/Sales";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<div>HomePage</div>} />
        <Route exact path="/inventory" element={<Inventory />} />
        <Route exact path="/sales" element={<Sales />} />
        <Route path="*" element={<div>Page Under Construction</div>} />
      </Routes>
    </>
  );
}

export default App;
