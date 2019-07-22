const paymentFormReducerDefaultState = {
  paymentInfo: {}
}

const paymentFormReducer = (state = paymentFormReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PAYMENT_INFO':
      return {
        ...state,
        paymentInfo: action.paymentInfo
      }
    case 'CLEAR_INFO':
      return {
        ...state,
        shippingAddress: {},
        paymentMethod: {}
      }
    default:
      return state;
  }
}

export default paymentFormReducer;