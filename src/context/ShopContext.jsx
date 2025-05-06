import { createContext, useState, useContext, useEffect } from "react";

const ShopContext = createContext();

export function ShopProvider({ children }) {
  /* make total and userName accessible to all pages*/
  const [total, setTotal] = useState(0);
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      return JSON.parse(storedUsers);
    } else {
      const defaultUsers = [
        {
          email: "testThisApp@gmail.com",
          password: "PasswrdTe$t",
        },
      ];
      localStorage.setItem("users", JSON.stringify(defaultUsers));
      return defaultUsers;
    }
  });
  const [userName, setUserName] = useState("");
  const [visible, setVisible] = useState(userName === "");
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <ShopContext.Provider
      value={{
        total,
        setTotal,
        users,
        setUsers,
        userName,
        setUserName,
        visible,
        setVisible,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  return useContext(ShopContext);
}
