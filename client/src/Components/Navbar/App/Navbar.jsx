import React from "react";
import { useNavigate } from "react-router-dom";
import { tokenRemover } from "../../../Utils/token";

const Navbar = () => {
  let navigate = useNavigate();
  const logoutHandler = () => {
    tokenRemover();
    return navigate("/");
  };
  return (
    <>
      <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          Maternity.IO
          <div class="col-md-3 text-end">
            <button
              type="button"
              class="btn btn-outline-success me-2"
              onClick={logoutHandler}
            >
              Logout
            </button>
            {/* <button type="button" class="btn btn-primary">
              Sign-up
            </button> */}
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
