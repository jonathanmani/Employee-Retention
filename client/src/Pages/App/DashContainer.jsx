import React from "react";
import AppNav from "../../Layouts/Navbars/AppNav";
import { useContext } from "react";
import { UserContext } from "../../Contexts/User/context";
import Page from "../../Layouts/Page";
import { useEffect } from "react";
import TripleCardRep from "../../Components/Cards/MatCan/TripleCard";
import TripleCardCan from "../../Components/Cards/MatRep/TripleCard";
import TripleCardSkeleton from "../../Components/Cards/TripleCardSkeleton"
const Dashboard = () => {
  const { type } = useContext(UserContext);
  let component;
  if (type === "matRep") {
    component = <TripleCardCan />;
  }
  if (type === "matCan") {
    component = <TripleCardRep />;
  }

  return (
    <>
      <AppNav>
        <Page>
          {component ? (
            <>{component}</>
          ) : (
            <>
              <TripleCardSkeleton />
            </>
          )}
        </Page>
      </AppNav>
    </>
  );
};

export default Dashboard;
