// import { ColorProvider } from "./ColorContext";
import { UserProvider } from "./User/context";
import React from "react";

export const ContextWrapper = ({ children }) => {
  return (
    <div>
      <UserProvider>{children}</UserProvider>
    </div>
  );
};
