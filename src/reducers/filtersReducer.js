
const filtersReducerDefaultState = {
  brand: [],
  name: ""
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        name: action.name
      };
    case 'SET_CHECKBOX_FILTER':
      return {
        ...state,
        brand: [...state.brand, action.brand]
      }
    case 'REMOVE_CHECKBOX_FILTER':
      return {
        ...state,
        brand: state.brand.filter((brand) => brand !== action.brand)
      }
    case 'CLEAR_FILTERS':
      return {
        ...state,
        brand: [],
        name: ""
      }
    default:
      return state
  }
}

export default filtersReducer;