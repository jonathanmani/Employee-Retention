import React from "react";
import Jobs from "../../../Components/Jobs/MatRep/Jobs";
import Navbar from "../../../Layouts/Navbars/MatRep/Nav";

const MatRepBoard = () => {
  return (
    <div>
      <Navbar>
        <h1 className="text-center fs-2"> You are looking to cover someones job while on mat leave</h1>
        {/* <Jobs /> */}
      </Navbar>
    </div>
  );
};

export default MatRepBoard;
