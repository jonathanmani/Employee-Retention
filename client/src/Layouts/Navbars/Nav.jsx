import Navbar from '../../Components/Navbar/Website/Navbar'
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
