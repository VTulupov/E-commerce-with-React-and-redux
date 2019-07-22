export const addPaymentInfo = ({ firstName = "", lastName = "", address = "", city = "", region = "", zip = 0, country = "", cardName = "", cardNumber = 0, expiryDate = 0, CVV = 0 } = {}) => ({
  type: 'ADD_PAYMENT_INFO',
  paymentInfo: {
    firstName,
    lastName,
    address,
    city,
    region,
    zip,
    country,
    cardName,
    cardNumber,
    expiryDate,
    CVV
  }
})

export const clearInfo = () => ({
  type: 'CLEAR_INFO'
})