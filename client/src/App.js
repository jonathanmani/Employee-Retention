import Home from "./Pages/Web/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateOutlet from "./Routes/Private";
import PublicOutlet from "./Routes/Public";

import RegisterPage from "./Pages/Auth/Register/Register";
import LoginPage from "./Pages/Auth/Login/Login";
import ForgotPasswordPage from "./Pages/Auth/ResetPass/ForgotPassword";
import ResetPage from "./Pages/Auth/ResetPass/Reset";
import DashboardPage from "./Pages/App/DashContainer";
import RouterDash from "./Pages/Auth/RouterDash/Page";

const App = () => {
  console.log("app is working");
  return (
    <Router>
      <Routes>
        <Route path="/app" element={<PrivateOutlet />}>
          <Route path="router" element={<RouterDash />}/>
        <Route exact path="dashboard" element={<DashboardPage />} />
        </Route>

        <Route path="/auth" element={<PublicOutlet />}>
          <Route exact path="login" element={<LoginPage />} />
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
