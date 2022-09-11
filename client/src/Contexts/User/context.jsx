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
  const [onboarding, setOnboarding ] = useState("");

  const userStorageHandler = (fName,lName,email) => {
    
    setFirstName(fName)
    setLastName(lName)
    setEmail(email)
    console.log('set')
  }
  return (
    <UserContext.Provider
      value={{firstName, lastName, email, role, company, type, userStorageHandler }}
    >
      {children}
    </UserContext.Provider>
  );
}
