import "./App.css";
import { Create } from "./components/Create";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Create />} />
      </Routes>
     
    </>
  );
}

export default App;
