
const App = () => {
  console.log("app is working");
  return (
    <Router>
      <Routes>
        <Route path="/app" element={<PrivateOutlet />}>


        </Route>

        <Route path="/auth" element={<PublicOutlet />}>
          <Route index path="/login" element={<LoginScreen />} />
          <Route exact path="/register" element={<RegisterScreen />} />
          <Route
            exact
            path="/forgotpassword"
            element={<ForgotPasswordPafge />}
          /> 
          <Route
            exact
            path="/passwordreset/:resetToken"
            element={<ResetPage />}
          />
        </Route>

        <Route path="/web" element={<PublicOutlet />}>
          <Route path="" element={<HomePage />} />
        </Route>


      </Routes>
    </Router>
  );
};

export default App;
