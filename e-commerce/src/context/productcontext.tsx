// // create a useContext;
// // Provider
// // consumer=>useContext Hook

// // 📌 What is ReactNode?
// // ReactNode is a type from react that includes anything React can render: strings, numbers, JSX, fragments, arrays, etc.

// // Step1->Create  a useContext

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import axios from "axios"; //used to call API just like fetch
import reducer from "../reducer/productReducer";

type AppProviderProps = {
  children: ReactNode;
};

const AppContext = createContext<initialState | undefined>(undefined);
const API = "https://api.pujakaitem.com/api/products";

type Product = {
  id: string;
  name: string;
  company: string;
  price: number;
  color: number;
  image: string;
  category: string;
  featured: boolean;
};

//usereducer ke liye use hoga
type initialState = {
  isLoading: boolean;
  isError: boolean;
  products: Product[];
  featureProducts: Product[];
  isSingleLoading: boolean;
  singleProduct: Product[];
};

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [], //means api m jiske feature m true
  //  h wahi image show krwanani h home page par
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }: AppProviderProps) => {
  //useReducer
  const [state, dispatch] = useReducer(reducer, initialState);
  //reducer and initialstate are the 2 functions

  //API
  const getProduct = async (url: string) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;

      //  console.log(products) //contain all data of api
      //dispatch used to tell yeh yeh kaam krne ke liye jo items use honge isliye we are defining kya kya lagega

      //In programming, a payload refers to the core data or content being transmitted within a network packet, message, or API request/response. It's the actual data being
      // exchanged, distinct from the surrounding headers or metadata used for routing and formatting.
      dispatch({ type: "SET_API-DATA", payload: products });
    } catch (error) {
      //if error is there then run catch
      dispatch({ type: "API_ERROR" });
    }
  };

  //my 2nd api call for single product

  const getSingleProduct = async (url: string) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProducts = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProducts });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProduct(API);
  }, []);
  //we have assign initialdata  values in the state means anyone can get the data easily
  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

//custom hooks
const useProductContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useProductContext must be used within an AppProvider");
  }
  return context;
};

export { AppProvider, AppContext, useProductContext };
