import React, { useState } from "react";

export const Create = () => {
  const [users, setUsers] = useState({});

  setUsers({...users,[e.target.name]:e.target.value})


  return (
    <>
      <div>
        <form className="w-50 mx-auto my-5">
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
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div class="form-check mb-3">
            <input
              class="form-check-input"
              type="radio"
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
