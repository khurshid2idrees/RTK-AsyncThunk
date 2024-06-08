import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showUser } from "../features/userDetailSlice";
import CustomModel from "./CustomModel";
import { deleteUser } from "../features/userDetailSlice";

const Read = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState();
  const [showPopup, setShowPopup] = useState(false);

  const { users, loading } = useSelector((state) => state.app);

  // useEffect(() => {
  //   dispatch(showUser());
  // }, []);

  if (loading) {
    return <h2>Loadding</h2>;
  }

  const handleDelete = (e, id) => {
    e.preventDefault();

    dispatch(deleteUser(id));
  };

  return (
    <>
      <div>
        {showPopup && (
          <CustomModel
            id={id}
            showPopup={showPopup}
            setShowPopup={setShowPopup}
          />
        )}
        <h2 className="text-center">All Data</h2>

        <div>
          {users.map((user) => {
            return (
              <div key={user.id} className="card w-50  mx-auto mt-5">
                <div className="card-body text-center">
                  <h5 className="card-title">{user.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {user.email}
                  </h6>
                  <p className="card-text">{user.age}</p>
                  <button
                    href=""
                    className="card-link"
                    onClick={() => [setId(user.id), setShowPopup(true)]}
                  >
                    View
                  </button>
                  <a href="" className="card-link">
                    Edit
                  </a>
                  <button
                    onClick={(e) => handleDelete(e, user.id)}
                    className="card-link"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Read;
