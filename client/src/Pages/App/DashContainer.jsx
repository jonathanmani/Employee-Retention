import React from "react";
import AppNav from "../../Layouts/Navbars/AppNav";
import { useContext } from "react";
import { UserContext } from "../../Contexts/User/context";
import Page from "../../Layouts/Page";
import { useEffect } from "react";
import TripleCardRep from "../../Components/Cards/MatCan/TripleCard";
import TripleCardCan from "../../Components/Cards/MatRep/TripleCard";
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
              <div class="text-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </>
          )}
        </Page>
      </AppNav>
    </>
  );
};

export default Dashboard;
