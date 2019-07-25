import uuid from 'uuid/v4';

export const makeOrder = ({ shippingInfo = {}, cardInfo = {}, items = {} } = {}) => ({
  type: 'MAKE_ORDER',
  order: {
    id: uuid(),
    shippingInfo,
    cardInfo,
    items
  }
})