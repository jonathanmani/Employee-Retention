import Navbar from "../../../Components/Navbar/App/MatCan/Navbar"
const Nav = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
    </>
  );
};

export default Nav;