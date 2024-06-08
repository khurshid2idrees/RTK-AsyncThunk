import "./App.css";
import { Create } from "./components/Create";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Read from "./components/Read";
import { showUser } from "./features/userDetailSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUser());
  }, []);

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
