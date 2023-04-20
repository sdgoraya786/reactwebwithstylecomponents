import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

const AppContext = createContext(); /** #6 */

const API = "https://thapareactapi.up.railway.app"; /** #8 */

const initialState = {
  name: "",
  image: "",
  services: [],
};

const AppProvider = ({ children }) => {
  /** #7 */
  const [state, dispatch] = useReducer(reducer, initialState);
  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: { name: "goraya", image: "./images/hero.svg" },
    });
  };
  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: { name: "Shahzad", image: "./images/about1.svg" },
    });
  };

  /** #8 - o get the api data */
  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  /** #8 - to call the api */
  useEffect(() => {
    // getServices(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// use Gloabal custom hook
const useGloabalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useGloabalContext };
