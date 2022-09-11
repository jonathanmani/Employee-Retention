import React from "react";
import TripleCard from "../../../Components/Cards/MatRep/TripleCard";
import Jobs from "../../../Components/Jobs/MatRep/Jobs";
import Navbar from "../../../Layouts/Navbars/AppNav";

const MatRepBoard = () => {
  return (
    <div>
      <Navbar>
        <TripleCard />
        {/* <Jobs /> */}
      </Navbar>
    </div>
  );
};

export default MatRepBoard;
