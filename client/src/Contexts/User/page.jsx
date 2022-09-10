import React from "react";
import { createContext, useState } from "react";

export const UserContext = createContext();

export function ColorProvider({ children }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("");

  const pinkHandler = () => {
    setColor("pink");
  };
  const blueHandler = () => {
    setColor("blue");
  };
  return (
    <UserContext.Provider
      value={{ color, firstName, lastName, email, role, company, type }}
    >
      {children}
    </UserContext.Provider>
  );
}
