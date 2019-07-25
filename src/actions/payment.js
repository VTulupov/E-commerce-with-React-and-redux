import uuid from 'uuid/v4';

export const addShippingInfo = ({ firstName = "", lastName = "", address = "", city = "", region = "", zip = 0, country = "" } = {}) => ({
  type: 'ADD_SHIPPING_INFO',
  shippingInfo: {
    id: uuid(),
    firstName,
    lastName,
    address,
    city,
    region,
    zip,
    country
  }
})

export const addCardInfo = ({ cardName = "", cardNumber = 0, expiryDate = 0, CVV = 0 }) => ({
  type: 'ADD_CARD_INFO',
  cardInfo: {
    id: uuid(),
    cardName,
    cardNumber,
    expiryDate,
    CVV
  }
})

export const clearInfo = () => ({
  type: 'CLEAR_INFO'
})