import React, {useState, createContext} from 'react';

export const StoreContext = createContext(null);

export default ({children}) => {
  const [user, setUser] = useState();

  const store = {
    user,
    setUser,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
