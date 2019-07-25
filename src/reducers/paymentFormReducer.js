const paymentFormReducerDefaultState = {
  shippingInfo: [],
  cardInfo: []
}

const paymentFormReducer = (state = paymentFormReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_SHIPPING_INFO':
      return {
        ...state,
        shippingInfo: [ ...state.shippingInfo, action.shippingInfo  ]
      }   
    case 'ADD_CARD_INFO': 
      return {
        ...state,
        cardInfo: [ ...state.cardInfo, action.cardInfo ]
      }
    case 'CLEAR_INFO':
      return []
    default:
      return state;
  }
}

export default paymentFormReducer;