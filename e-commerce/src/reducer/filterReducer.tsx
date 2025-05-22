const filterReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload.products],
        all_products: [...action.payload.products],
      };

    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      let tempSortProduct = [...state.filter_products]; // ✅ Always use the latest filtered products from state

      if (state.sorting_value === "a-z") {
        newSortData = tempSortProduct.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
      if (state.sorting_value === "z-a") {
        newSortData = tempSortProduct.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      if (state.sorting_value === "lowest") {
        newSortData = tempSortProduct.sort((a, b) => a.price - b.price);
      }
      if (state.sorting_value === "highest") {
        newSortData = tempSortProduct.sort((a, b) => b.price - a.price);
      }

      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value.toLowerCase(),
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProducts = [...all_products];

      const { text,category,company ,color} = state.filters;
      if (text) {
        tempFilterProducts = tempFilterProducts.filter((currElem) => {
          return currElem.name.toLowerCase().includes(text.toLowerCase());
        });
      }

      if(category!=="all"){
        tempFilterProducts=tempFilterProducts.filter((currElem)=>{
          return currElem.category===category;  //it means agar api ki category equal hai cuurrElem ke category se
          //it means suppose user ne mobile category select kra toh ab filter property api m jayega and one 
          // by one check krega ki kya first category mobile agar ha toh return kr

        })
      }

       if(company!=="all"){
        tempFilterProducts=tempFilterProducts.filter((currElem)=>{
          return currElem.company.toLowerCase() ===company.toLowerCase() ;  

        })
      }

      if(color){
        tempFilterProducts=tempFilterProducts.filter((currElem)=>{
          currElem.colors.includes(color)
        })
      }
      

      return {
        ...state,
        filter_products: tempFilterProducts,
      };

     

    default:
      return state;
  }
};

export default filterReducer;
// NOTE->basically spread operation we are using beacuse
// we dont want original data kharab ho aye we are making
// copy of it
