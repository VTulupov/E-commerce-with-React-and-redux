const paymentFormReducerDefaultState = {
  shippingAddress: {},
  paymentMethod: {}
}

const paymentFormReducer = (state = paymentFormReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_SHIPPING_ADDRESS':
      return {
        ...state,
        shippingAddress: action.shippingAddress
      }
    case 'ADD_PAYMENT_METHOD':
      return {
        ...state,
        paymentMethod: action.paymentMethod
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