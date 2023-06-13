"use client";

import Link from "next/link";
import { createContext, useContext, useState } from "react";

export const UserContext = createContext({ user: {} });

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const LogoutBtn = () => {
  const logoutHandler = () => {
    alert("LoggedOut");
  };

  const { user } = useContext(UserContext);

  return user.id ? (
    <button className="btn" onClick={logoutHandler}>
      Logout
    </button>
  ) : (
    <Link href={"/login"}>Login</Link>
  );
};

export const TodoHandlinghBtn = ({ id, completed }) => {
  const deleteHandler = () => {
    alert(`Deleted : ${id}`);
  };
  return (
    <>
      <input type="checkbox" checked={completed} />
      <button className="btn" onClick={() => deleteHandler(id)}>
        Delete
      </button>
    </>
  );
};
