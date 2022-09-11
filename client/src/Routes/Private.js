import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import jwtDecode from "jwt-decode";
import { tokenRemover } from "../Utils/token";
import { getAuthConfig } from "../Utils/config";
import { UserContext } from "../Contexts/User/context";
import axios from "axios";

function PrivateOutlet() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userStorageHandler } = useContext(UserContext);

  const config = getAuthConfig();

  const securityCheck = () => {
    let token = localStorage.getItem("authToken");
    const { exp } = jwtDecode(token);
    const currentTime = new Date().getTime();
    if (exp * 1000 < currentTime) {
      navigate("/login");
      tokenRemover();
    }
    userObject();
  };
  const userObject = async () => {
    try {
      await axios
        .get("http://localhost:4000/api/user", config)
        .then((response) => {
          const { firstName, lastName, email, candidateType} = response.data.user;
          userStorageHandler(firstName,lastName,email, candidateType);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    securityCheck();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const auth = localStorage.getItem("authToken");

  
  if(auth){
    return <Outlet />
  } else {
    return navigate('auth/login')
  }
}

export default PrivateOutlet;
