import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";

export const Create = () => {
  const [users, setUsers] = useState({});

  const dispatch = useDispatch();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("users...", users);
    dispatch(createUser(users));
  };

  return (
    <>
      <div>
        <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              onChange={getUserData}
              name="name"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Email
            </label>
            <input
              type="email"
              onChange={getUserData}
              name="email"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Age
            </label>
            <input
              type="text"
              name="age"
              onChange={getUserData}
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div class="form-check mb-3">
            <input
              class="form-check-input"
              type="radio"
              onChange={getUserData}
              name="gender"
              value={`male`}
              id="flexRadioDefault1"
            />
            <label class="form-check-label">Male</label>
          </div>
          <div class="form-check mb-3">
            <input
              class="form-check-input"
              type="radio"
              onChange={getUserData}
              name="gender"
              value={`female`}
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label">Female</label>
          </div>
          <button type="submit" class="btn btn-primary ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
