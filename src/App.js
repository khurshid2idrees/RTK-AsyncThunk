import "./App.css";
import { Create } from "./components/Create";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Read from "./components/Read";
import { showUser } from "./features/userDetailSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Edit } from "./components/Edit";

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
        <Route exact path="/Edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
