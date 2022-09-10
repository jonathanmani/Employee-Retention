import React from "react";
import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("");

  const userStorageHandler = (fName,lName,email,role,company,type) => {
    setFirstName(fName)
    setLastName(lName)
    setEmail(email)
    setRole(role)
    setCompany(company)
    setType(type)
  }
  return (
    <UserContext.Provider
      value={{ color, firstName, lastName, email, role, company, type, userStorageHandler }}
    >
      {children}
    </UserContext.Provider>
  );
}
