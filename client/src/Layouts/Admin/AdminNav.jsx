import Navbar from "../../Components/Navbar/Admin/Navbar"
const AdminNav = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
    </>
  );
};

export default AdminNav;
