import React from "react";
import "./CustomModal.css";
import { useSelector } from "react-redux";

const CustomModel = ({ id, showPopup, setShowPopup }) => {
  const allusers = useSelector((state) => state.app.users);
  const singleUser = allusers.filter((data) => data.id === id);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => setShowPopup(false)}>Close</button>
        <h2>{singleUser[0].name}</h2>
        <h2>{singleUser[0].email}</h2>
        <h2>{singleUser[0].age}</h2>
        <h2>{singleUser[0].gender}</h2>
      </div>
    </div>
  );
};

export default CustomModel;
