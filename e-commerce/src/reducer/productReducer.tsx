//jaise hi dispatch call hoga in productcontext file


// then action will try to do work so iss file m aa jayenge
function productReducer(state:any, action:any) {
  //if this dipatch is call->dispatch({type:"SET_LOADING"})

  // if(action.type==="SET_LOADING"){
  //   return{
  //     ...state,
  //      isLoading:true, //sirf isse hi use krna h
  //   };
  // }

  // if(action.type==="API_ERROR"){
  //   return{
  //     ...state,
  //     isLoading:false, //false beacause humai error dikhana
  //     // hai isliye isloading ko false kra h
  //     isError:true, //error dikhana h toh true kra
  //   }
  // }

  // now we have noticed that we are writing if statement 2 times
  // to reduce it we can use switch

  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true, //sirf isse hi use krna h
      };
     

      case "API_ERROR":
        return{
              ...state,
              isLoading:false, //false beacause humai error dikhana
              // hai isliye isloading ko false kra h
              isError:true, //error dikhana h toh true kra
            }
       
          //below code is used to set the featured data
          //that we want to display on screen 
       case "SET_API-DATA":
        //action.payload is object 
        //that's why after it .is used for filter
        const featureData=action.payload.filter((currElem:any)=>{
          return currElem.featured===true;
        })

        return{
          ...state,
          isLoading:false, //false because now no need of loading
          //once its done
          products:action.payload,
          featureProducts:featureData, //means feauturedata=true
        }

        

       
  //my 2nd api call for single product

  case "SET_SINGLE_LOADING":
    return {
      ...state,
      isSingleLoading: true, 
    };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false, 
       singleProduct: action.payload,
      };

      case "SET_SINGLE_ERROR":
        return {
          ...state,
          isSingleLoading: false,
          isError:true, 
        };

        
    default:
      return state;
  }
}

export default productReducer;
