import React, { useReducer, createContext, useEffect } from "react";
import { getCrawlers } from "./api";
import { Toast } from "./components/toasts";

export const AppContext = createContext();

const initialState = {
  crawlers: [],
  error: null,
  notification: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CRAWLER":
      return {
        ...state,
        crawlers: [...state.crawlers, action.payload],
        notification: 'Crawler has been created'
      };
    case "ADD_CRAWLERS":
      return {
        ...state,
        crawlers: [...state.crawlers, ...action.payload]
      };
    case "UPDATE_CRAWLER": 
      return {
        ...state,
        crawlers: state.crawlers.map(crawler => {
          if (crawler.id !== action.payload.id) {
            return crawler;
          }

          return {
            ...crawler,
            ...action.payload
          }
        }),
        notification: 'Your changes have been saved'
      }
    case "DELETE_CRAWLER":
      return {
        crawlers: state.crawlers.filter(
          crawler => crawler.id !== action.payload
        ),
        notification: 'Crawler has been deleted'
      };
    case "CLEAR_NOTIFICATION":
      return {
        ...state,
        notification: null,
      };
    default:
      throw new Error('Undefined action type');
  }
};

export const AppContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => dispatch({ type: "ADD_CRAWLERS", payload: await getCrawlers() });
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {state.notification && <Toast message={state.notification} onClose={() => dispatch({ type: "CLEAR_NOTIFICATION" })}/>}
      {children}
    </AppContext.Provider>
  );
};