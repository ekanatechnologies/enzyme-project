

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
      case "REGISTER":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
      case "UPDATE_USER":
      return {
        ...state,
        user: action.payload,
      };
        default:
            return state;
        }
    }

       
  
  export const productReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_PRODUCTS":
            return {
                ...state,
                products: action.payload
            };
      case "UPDATE_PRODUCT":
        return {
          ...state,
            products: state.products.map((product) =>
                product._id === action.payload._id ? action.payload : product
                ),
            };
      case "DELETE_PRODUCT":
        return {
          ...state,
            products: state.products.filter((product) => product._id !== action.payload),
        };
      case "ADD_PRODUCT":
        return { ...state, products: [...state.products, action.payload] };
      case "":
        return { ...state, byRating: action.payload };
      case "FILTER_BY_SEARCH":
        return { ...state, searchQuery: action.payload };
      case "CLEAR_FILTERS":
        return { byStock: false, byFastDelivery: false, byRating: 0 };
      default:
        return state;
    }
  };

  export const reviewReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_REVIEWS":
        return {
          ...state,
          reviews: action.payload,
        };
      case "ADD_REVIEW":
        return { ...state, reviews: [...state.reviews, action.payload] };
      case "DELETE_REVIEW":
        return {
          ...state,
          reviews: state.reviews.filter((review) => review._id !== action.payload),
        };
      default:
        return state;
    }
  };


  export const forumReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_FORUMS":
        return {
          ...state,
          forums: action.payload,
        };
      case "ADD_FORUM":
        return { ...state, forums: [...state.forums, action.payload] };
      case "DELETE_FORUM":
        return {
          ...state,
          forums: state.forums.filter((forum) => forum._id !== action.payload),
        };

      default:
        return state;
    }
  };
