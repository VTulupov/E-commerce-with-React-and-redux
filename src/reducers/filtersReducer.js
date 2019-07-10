
const filtersReducerDefaultState = {
  mark: [],
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
        mark: [...state.mark, action.mark]
      }
    case 'REMOVE_CHECKBOX_FILTER' :
      return {
        ...state,
        mark: state.mark.filter((mark) => mark !== action.mark)
      }
    default:
      return state
  }
}

export default filtersReducer;