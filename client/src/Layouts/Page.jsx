import React from "react";

const Page = ({ children }) => {
  return (
    <>
      <div className="container-md mt-3">{children}</div>
    </>
  );
};

export default Page;
