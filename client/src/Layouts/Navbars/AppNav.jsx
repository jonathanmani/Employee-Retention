import Navbar from "../../Components/Navbar/App/Navbar"
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
