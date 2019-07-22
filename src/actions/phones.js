import uuid from 'uuid/v4';

export const addNewPhone = ({ brand = '', name = '', price = '', description = '', stats, size = '', resolution = '', GPU = '', CPU = '', camera = '', battery = '' } = {}) => ({
  type: 'ADD_NEW_PHONE',
  phone: {
    id: uuid(),
    brand,
    name,
    price,
    description,
    stats: {
      size,
      resolution,
      GPU,
      CPU,
      camera,
      battery
    }
  }
})

export const addToCart = (id) => ({
  type: 'ADD_TO_CART',
  id
});

export const removeFromCart = (id) => ({
  type: 'REMOVE_FROM_CART',
  id
});

export const decrementFromCart = (id) => ({
  type: 'DECREMENT',
  id
})

export const clearCart = () => ({
  type: 'CLEAR_CART'
});
