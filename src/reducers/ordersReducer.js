const ordersReducerDefaultState = [];

const ordersReducer = (state = ordersReducerDefaultState, action) => {
  switch (action.type) {
    case 'MAKE_ORDER':
      return [ ...state, action.order ]
    default:
      return state;
  }
}

export default ordersReducer;