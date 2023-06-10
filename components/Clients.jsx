"use client";

export const LogoutBtn = () => {
  const logoutHandler = () => {
    alert("LoggedOut");
  };

  return (
    <button className="btn" onClick={logoutHandler}>
      Logout
    </button>
  );
};
