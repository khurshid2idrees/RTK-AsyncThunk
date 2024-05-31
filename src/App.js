import "./App.css";
import { Create } from "./components/Create";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Read from "./components/Read";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Create />} />
        <Route path="/read" element={<Read />} />
      </Routes>
    </>
  );
}

export default App;
