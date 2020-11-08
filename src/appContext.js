import React, { useReducer, createContext } from "react";

export const AppContext = createContext();

const initialState = {
  crawlers: [],
  loading: false,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CRAWLERS":
        return {
          crawlers: [...state.crawlers, ...action.payload]
        };
    case "ADD_CRAWLER":
      return {
        crawlers: [...state.crawlers, action.payload]
      };
    case "DELETE_CRAWLER":
      return {
        crawlers: state.crawlers.filter(
          contact => contact.id !== action.payload
        )
      };
    case "START":
      return {
        loading: true
      };
    case "COMPLETE":
      return {
        loading: false
      };
    default:
      throw new Error();
  }
};

export const AppContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};