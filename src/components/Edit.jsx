import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, showUser } from "../features/userDetailSlice";
import { useNavigate, useParams } from "react-router-dom";

export const Edit = () => {
  const { id } = useParams();

  const [updateData, setUpdateData] = useState();

  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    if (users.length) {
      const singleUser = users.filter((ele) => ele.id === id);

      setUpdateData(singleUser);
    }
  }, [users, id]);

  console.log(updateData, "kd");

  return (
    <>
      <div>
        <h2 className="text-center mt-2">Fill the data</h2>
        <form className="w-50 mx-auto my-5">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              value={updateData && updateData[0].name}
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
              value={updateData && updateData[0].email}
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
              type="number"
              value={updateData && updateData[0].age}
              name="age"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div class="form-check mb-3">
            <input
              class="form-check-input"
              value={"male"}
              checked={updateData && updateData[0].gender === "male"}
              type="radio"
              name="gender"
              // checked={gender === "male"}
              id="flexRadioDefault1"
            />
            <label class="form-check-label">Male</label>
          </div>
          <div class="form-check mb-3">
            <input
              class="form-check-input"
              checked={updateData && updateData[0].gender === "female"}
              type="radio"
              value={"female"}
              name="gender"
              // checked={gender === "female"}
              id="flexRadioDefault2"
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
