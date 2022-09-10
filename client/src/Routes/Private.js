import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { tokenRemover } from "../Utils/token";
import {getAuthConfig} from'../Utils/config';

function PrivateOutlet() {
  const location = useLocation();
  const navigate = useNavigate();
  const config = getAuthConfig()

  const securityCheck = () => {
    let token = localStorage.getItem("authToken");
    const { exp } = jwtDecode(token);
    const currentTime = new Date().getTime();
    if (exp * 1000 < currentTime) {
      navigate("/login");
      tokenRemover();
    }
    userObject()
  };
  const userObject = async() => {

    try {
      await axios.get("/api/user", config).then((response) => {
        const {firstName,lastName, isOnboardingCompleted, email, role, company, type } = response.data
        userStorageHandler(firstName, lastName,)
      });
    } catch (error) {
      console.log(error);
    }
  };
  }

  useEffect(() => {
    securityCheck()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const auth = localStorage.getItem("authToken");
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateOutlet;
