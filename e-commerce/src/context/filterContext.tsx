import { createContext, useContext, useEffect, useReducer } from "react";
import { ReactNode } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterReducer";

type FilterContextProps = {
  children: ReactNode;
};
type FilterState = {
  filter_products: any[]; // Replace `any` with your Product type if available
  all_products: any[];
  grid_view: boolean;
  setGridView: () => void;
  setListView: () => void;
  sorting: (value: string) => void;
  sorting_value: string;
updateFilterValue: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | React.MouseEvent<HTMLButtonElement>
) => void;
  filters: {
    text: string;
    category:string;
    company:string;
    color:number;
  };
};

const FilterContext = createContext<FilterState | undefined>(undefined);

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true, //this means whether i have to show images in grid view or in list view
  sorting_value: "lowest", //store the data of sorting
  filters: {
    text: "",
    category:"all",
    company:"all",
    color:"all"
  },
};

export const FilterContextProvider = ({ children }: FilterContextProps) => {
  const { products } = useProductContext();

  //now we have access data now its time to add it to do so we will use useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  //to access product we use it like this..and jaise hi page reload hoga useEffect run hoga

  // to set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };

  //to set the list view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  //sorting function
  const sorting = (value: string) => {
    dispatch({ type: "GET_SORT_VALUE", payload: value });
  };
 
// First, when filters or sorting_value change, filter products

useEffect(() => {
  dispatch({ type: "FILTER_PRODUCTS" });
  dispatch({ type: "SORTING_PRODUCTS" });
}, [state.filters, state.sorting_value,state.filters]);



//update the filter value
  const updateFilterValue = (event: any) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: { products } });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting, updateFilterValue }}
    >
      {children}
    </FilterContext.Provider>
  );
};

//custom hook
export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error(
      "useFilterContext must be used within a FilterContextProvider"
    );
  }
  return context;
};
