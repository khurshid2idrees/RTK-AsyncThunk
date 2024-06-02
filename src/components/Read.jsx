import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showUser } from "../features/userDetailSlice";

const Read = () => {
  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>Loadding</h2>;
  }

  return (
    <>
      <div>
        <h2 className="text-center">All Data</h2>

        <div>
          {users.map((user) => {
            return (
              <div className="card w-50  mx-auto mt-5">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {user.email}
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="card-link">{user.age}</div>
                  <div className="">{user.gender}</div>
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
