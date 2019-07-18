export const addShippingAddress = ({ firstName = "", lastName = "", address = "", city = "", region = "", zip = 0, country = "" } = {}) => ({
  type: 'ADD_SHIPPING_ADDRESS',
  shippingAddress: {
    firstName,
    lastName,
    address,
    city,
    region,
    zip,
    country
  }
})

export const addPaymentMethod = ({ cardName = "", cardNumber = 0, expiryDate = 0, CVV = 0 } = {}) => ({
  type: 'ADD_PAYMENT_METHOD',
  paymentMethod: {
    cardName,
    cardNumber,
    expiryDate,
    CVV
  }
})

export const clearInfo = () => ({
  type: 'CLEAR_INFO'
})