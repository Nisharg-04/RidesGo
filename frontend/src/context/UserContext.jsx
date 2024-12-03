import React from "react";
export const UserDataContext = createContext();
const UserContext = ({ children }) => {
  return (
    <div>
      <UserDataContext.provider>{children}</UserDataContext.provider>
    </div>
  );
};

export default UserContext;
