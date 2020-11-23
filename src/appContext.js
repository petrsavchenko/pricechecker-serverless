import React, { useReducer, createContext, useEffect } from "react";
import { getCrawlers } from "./api";

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
    case "UPDATE_CRAWLER": 
      return {
        crawlers: state.crawlers.map((crawler, index) => {
          if (crawler.id !== action.payload.id) {
            // This isn't the item we care about - keep it as-is
            return crawler
          }
      
          // Otherwise, this is the one we want - return an updated value
          return {
            ...crawler,
            ...action.payload
          }
        })
      }
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
        loading: true, 
      };
    case "COMPLETE":
      return {
        loading: false,
      };
    default:
      throw new Error();
  }
};

export const AppContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => dispatch({ type: "ADD_CRAWLERS", payload: await getCrawlers() });
    if (!state.state) {
      fetchData();
    }
  }, []);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};