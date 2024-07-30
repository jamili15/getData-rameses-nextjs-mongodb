"use client";

import React, { useContext, useState, createContext } from "react";

interface ContextType {
  editList: any;
  setEditList: React.Dispatch<React.SetStateAction<any>>;
}

const Context = createContext<ContextType | undefined>(undefined);

export const useMyContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a Provider");
  }
  return context;
};

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [editList, setEditList] = useState<any>(null);
  const value = { editList, setEditList };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
