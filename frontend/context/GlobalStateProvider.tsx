import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for your state
interface GlobalStateType {
  items: string[];
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
}

// Create the context with a default value
const GlobalStateContext = createContext<GlobalStateType | undefined>(undefined);

// Create the provider component
const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<string[]>(["BICEP", "ARMS"]);

  return (
    <GlobalStateContext.Provider value={{ items, setItems }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook to use the GlobalState
const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};

export { GlobalStateProvider, useGlobalState };
