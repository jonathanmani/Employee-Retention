import React from "react";
import Select from "../../../Components/Form/Profile";
import NavLayout from "../../../Layouts/Navbars/AppNav";
import Page from "../../../Layouts/Page";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const ProfilePage = () => {

 
  return (
    <div>
      <NavLayout>
        <Page>
          <div className="">
            <motion.div
              className="box"
              whileHover={{ x: -5 }}
              transition={{ type: "spring" }}
            >
              <Link to="/app/dash">
                <IoIosArrowBack className="backIcon fs-3" />
              </Link>
            </motion.div>
          </div>
          <div className="d-flex justify-content-center">
            <Select />
          </div>
        </Page>
      </NavLayout>
    </div>
  );
};

export default ProfilePage;
