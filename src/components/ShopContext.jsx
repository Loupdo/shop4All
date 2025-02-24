import { createContext, useState, useContext } from "react";

const ShopContext = createContext();

export function ShopProvider({ children }) {
  /* make total and userName accessible to all pages*/
  const [total, setTotal] = useState(0);
  const [userName, setUserName] = useState("");

  return (
    <ShopContext.Provider value={{ total, setTotal, userName, setUserName }}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  return useContext(ShopContext);
}
