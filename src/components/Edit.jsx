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

      setUpdateData(singleUser[0]);
    }
  }, [users, id]);


  // console.log(updateData, "kd");

  return (
    <>
      <div>
        <h2 className="text-center mt-2">Fill the data</h2>
        <form className="w-50 mx-auto my-5">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={updateData && updateData.name}
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
              value={updateData && updateData.email}
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
              value={updateData && updateData.age}
              name="age"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              value={"male"}
              checked={updateData && updateData.gender === "male"}
              type="radio"
              name="gender"
              // checked={gender === "male"}
              id="flexRadioDefault1"
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              checked={updateData && updateData.gender === "female"}
              type="radio"
              value={"female"}
              name="gender"
              // checked={gender === "female"}
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
