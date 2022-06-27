import { createContext, useReducer } from "react";
import { authReducer,reviewReducer, productReducer ,forumReducer} from "./Reducers";

export const  aspyrContext = createContext();

const Context = ({ children }) => {
    

  const [userState, userDispatch] = useReducer(authReducer, {
    user: null,
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    products: [],
  });
  const [reviewsState, reviewDispatch] = useReducer(reviewReducer, {
    reviews: [],
  });
  const [forumState, forumDispatch] = useReducer(forumReducer, {
    forums: [],
  });



  return (
    <aspyrContext.Provider value={{ userState, userDispatch,
     productState, productDispatch,
     reviewsState ,reviewDispatch,
      forumState, forumDispatch
     }}>
      {children}
    </aspyrContext.Provider>
  );
};




export default Context;