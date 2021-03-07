import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

// Provide the Data layer to our application
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Grab the information
export const useStateValue = () => useContext(StateContext);
