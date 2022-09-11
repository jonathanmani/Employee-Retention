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

  const userStorageHandler = (fName,lName,email,candidateType) => {
    
    setFirstName(fName)
    setLastName(lName)
    setEmail(email)
    setType(candidateType)
    console.log(candidateType)
  }
  return (
    <UserContext.Provider
      value={{firstName, lastName, email,type, userStorageHandler }}
    >
      {children}
    </UserContext.Provider>
  );
}
