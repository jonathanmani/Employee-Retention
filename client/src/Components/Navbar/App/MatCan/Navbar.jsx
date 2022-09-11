import React from "react";
import { useNavigate } from "react-router-dom";
import { tokenRemover } from "../../../../Utils/token";

const Navbar = () => {
  let navigate = useNavigate()
  const logoutHandler = () => {
    tokenRemover()
    return navigate("/")
  }
  return (
    <>
      <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a
            href="/"
            class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          >
            Maternity.IO
          </a>

          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" class="nav-link px-2 link-secondary">
                Post a Job 
              </a>
            </li>
            {/* <li>
              <a href="#" class="nav-link px-2 link-dark">
                See Jobs
              </a>
            </li> */}
            <li>
              <a href="#" class="nav-link px-2 link-dark">
                Maternity Timeline
              </a>
            </li>
            {/* <li>
              <a href="#" class="nav-link px-2 link-dark">
                Skills Profile
              </a>
            </li> */}
            {/* <li>
              <a href="#" class="nav-link px-2 link-dark">
                About
              </a>
            </li> */}
          </ul>

          <div class="col-md-3 text-end">
            <button type="button" class="btn btn-outline-success me-2" onClick={logoutHandler}>
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
