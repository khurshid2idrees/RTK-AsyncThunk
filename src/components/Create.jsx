import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";

export const Create = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState("male");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      age,
      gender,
    };

    dispatch(createUser(user));

    navigate("/read");
  };

  return (
    <>
      <div>
        <h2 className="text-center mt-2">Fill the data</h2>
        <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Age
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              name="age"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              onChange={(e) => setGender(e.target.value)}
              value={"male"}
              type="radio"
              name="gender"
              checked={gender === "male"}
              id="flexRadioDefault1"
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              onChange={(e) => setGender(e.target.value)}
              type="radio"
              value={"female"}
              name="gender"
              checked={gender === "female"}
              id="flexRadioDefault2"
            />
            <label className="form-check-label">Female</label>
          </div>
          <button type="submit" className="btn btn-primary ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
