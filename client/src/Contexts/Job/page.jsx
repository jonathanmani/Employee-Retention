import React from "react";
import { createContext, useState } from "react";

export const ColorContext = createContext();

export function ColorProvider({ children }) {
  const [color, setColor] = useState("");

  const pinkHandler = () => {
    setColor("pink");
  };
  const blueHandler = () => {
    setColor("blue");
  };
  return (
    <ColorContext.Provider value={{ color, pinkHandler, blueHandler }}>
      {children}
    </ColorContext.Provider>
  );
}