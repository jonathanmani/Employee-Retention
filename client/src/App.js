import Home from "./Pages/Web/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateOutlet from "./Routes/Private";
import PublicOutlet from "./Routes/Public";

import RegisterPage from "./Pages/Auth/Register/Register";
import LoginPage from "./Pages/Auth/Login/Login";
import ForgotPasswordPage from "./Pages/Auth/ResetPass/ForgotPassword";
import ResetPage from "./Pages/Auth/ResetPass/Reset";
const App = () => {
  console.log("app is working");
  return (
    <Router>
      <Routes>
        {/* <Route path="/app" element={<PrivateOutlet />}> */}

        {/* </Route> */}

        <Route path="/auth" element={<PublicOutlet />}>
          <Route index path="login" element={<LoginPage />} />
          <Route exact path="register" element={<RegisterPage />} />
          <Route
            exact
            path="forgotpassword"
            element={<ForgotPasswordPage />}
          />
          <Route
            exact
            path="passwordreset/:resetToken"
            element={<ResetPage />}
          />
        </Route>

        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
