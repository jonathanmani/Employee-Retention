import { useState, useEffect } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./register.module.css";

import { getConfig } from "../../../Utils/config";
import { tokenChecker } from "../../../Utils/token";

import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";

const RegisterPage = ({ history }) => {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (tokenChecker()) {
      return navigate("/app/dashboard");
    }
  }, [history]);

  const registerHandler = async (e) => {
    e.preventDefault();
    const config = getConfig();

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }
    try {
      const { data } = await axios.post(
        "/api/auth/register",
        { firstName, lastName, email, password },
        config
      );
      console.log(data)
      localStorage.setItem("authToken", data.token);
      console.log(data);
      return navigate("/app/onboarding");
    } catch (error) {
      setError(error.response.data.error);
      console.log("error");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <>
      <div className={styles.registerScreen}>
        <form
          className={styles.registerScreen__form}
          onSubmit={registerHandler}
        >
          <div>
            <motion.div
              className="box"
              whileHover={{ x: -5 }}
              transition={{ type: "spring" }}
            >
              <Link to="/">
                <IoIosArrowBack className="backIcon fs-3" />
              </Link>
            </motion.div>
          </div>
          <h3 className="text-center">Register</h3>
          {error && (
            <span className=" bg-danger error-message rounded p-1 text-white">
              {error}
            </span>
          )}

          <div className="form-group d-flex flex-column py-2">
            <label htmlFor="FirstName">First Name:</label>
            <input
              className="form-control"
              type="text"
              required
              id="email"
              placeholder="Enter Your Name"
              
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group d-flex flex-column py-2">
            <label htmlFor="LastName">Last Name:</label>
            <input
              className="form-control"
              type="text"
              required
              id="email"
              placeholder="Enter Your Last Name"
              
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group d-flex flex-column py-2">
            <label htmlFor="email">Email:</label>
            <input
              className="form-control"
              type="email"
              required
              id="email"
              placeholder="enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className=" form-group d-flex flex-column pb-2">
            <label htmlFor="password">Password:</label>
            <input
              className="form-control"
              type="password"
              required
              id="password"
              placeholder="enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className=" form-group d-flex flex-column pb-2">
            <label htmlFor="password">Confirm Password:</label>
            <input
              className="form-control"
              type="password"
              required
              id="password"
              placeholder="Confirm Your Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Register
          </button>

          <span className="Registerscreen__subtext pt-2">
            <Link to="/auth/login">
              <b>Already have an account?</b>
            </Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;