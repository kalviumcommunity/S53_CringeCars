import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext();

const ParentContext = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(AppContext)

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ParentContext;