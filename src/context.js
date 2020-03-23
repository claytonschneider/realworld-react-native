import React, {useState, createContext} from 'react';

export const StoreContext = createContext(null);

export default ({children}) => {
  const [token, setToken] = useState();

  const store = {
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
