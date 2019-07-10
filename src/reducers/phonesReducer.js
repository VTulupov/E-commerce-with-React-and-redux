import uuid from 'uuid/v4';

const phonesDefaultState = {
  phones: [
    {
      id: uuid(),
      brand: 'Xiaomi',
      name: `Redmi 7`,
      price: 130,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
        {
          size: '6.26 inches, 97.8 cm2 ',
      resolution: '720 x 1520 pixels, 19:9 ratio',
      GPU: 'Mali-G76 MP12 - EMEA',
      CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
      camera: '12+ 2MP rear camera',
      battery: '1400 mAh',
        },
      inCart: false
    },
    {
      id: uuid(),
      brand: 'Xiaomi',
      name: `Redmi K20 Pro`,
      price: 130,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
        {
          size: '6.26 inches, 97.8 cm2 ',
      resolution: '720 x 1520 pixels, 19:9 ratio',
      GPU: 'Mali-G76 MP12 - EMEA',
      CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
      camera: '12+ 2MP rear camera',
      battery: '1400 mAh',
        },
      inCart: false
    },
    {
      id: uuid(),
      brand: 'Xiaomi',
      name: `Mi 9t`,
      price: 130,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
        {
          size: '6.26 inches, 97.8 cm2 ',
      resolution: '720 x 1520 pixels, 19:9 ratio',
      GPU: 'Mali-G76 MP12 - EMEA',
      CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
      camera: '12+ 2MP rear camera',
      battery: '1400 mAh',
        },
      inCart: false
    },
    {
      id: uuid(),
      brand: 'Samsung',
      name: `Galaxy A10`,
      price: 130,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
        {
          size: '6.26 inches, 97.8 cm2 ',
      resolution: '720 x 1520 pixels, 19:9 ratio',
      GPU: 'Mali-G76 MP12 - EMEA',
      CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
      camera: '12+ 2MP rear camera',
      battery: '1400 mAh',
        },
      inCart: false
    },
    {
      id: uuid(),
      brand: 'Samsung',
      name: `Galaxy S10+`,
      price: 130,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
        {
          size: '6.26 inches, 97.8 cm2 ',
      resolution: '720 x 1520 pixels, 19:9 ratio',
      GPU: 'Mali-G76 MP12 - EMEA',
      CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
      camera: '12+ 2MP rear camera',
      battery: '1400 mAh',
        },
      inCart: false
    },
    {
      id: uuid(),
      brand: 'Samsung',
      name: `Galaxy A70`,
      price: 130,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
        {
          size: '6.26 inches, 97.8 cm2 ',
      resolution: '720 x 1520 pixels, 19:9 ratio',
      GPU: 'Mali-G76 MP12 - EMEA',
      CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
      camera: '12+ 2MP rear camera',
      battery: '1400 mAh',
        },
      inCart: false
    },
    {
      id: uuid(),
      brand: 'Samsung',
      name: `Galaxy Note9`,
      price: 130,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
        {
          size: '6.26 inches, 97.8 cm2 ',
      resolution: '720 x 1520 pixels, 19:9 ratio',
      GPU: 'Mali-G76 MP12 - EMEA',
      CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
      camera: '12+ 2MP rear camera',
      battery: '1400 mAh',
        },
      inCart: false
    },
    {
      id: uuid(),
      brand: 'Huawei',
      name: `P30 Pro`,
      price: 130,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
        {
          size: '6.26 inches, 97.8 cm2 ',
      resolution: '720 x 1520 pixels, 19:9 ratio',
      GPU: 'Mali-G76 MP12 - EMEA',
      CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
      camera: '12+ 2MP rear camera',
      battery: '1400 mAh',
        },
      inCart: false
    },
    {
      id: uuid(),
      brand: 'Huawei',
      name: `Mate 20 Pro`,
      price: 130,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
        {
          size: '6.26 inches, 97.8 cm2 ',
      resolution: '720 x 1520 pixels, 19:9 ratio',
      GPU: 'Mali-G76 MP12 - EMEA',
      CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
      camera: '12+ 2MP rear camera',
      battery: '1400 mAh',
        },
      inCart: false
    },
    {
      id: uuid(),
      brand: 'Huawei',
      name: `P20 Lite`,
      price: 130,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
        {
          size: '6.26 inches, 97.8 cm2 ',
      resolution: '720 x 1520 pixels, 19:9 ratio',
      GPU: 'Mali-G76 MP12 - EMEA',
      CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
      camera: '12+ 2MP rear camera',
      battery: '1400 mAh',
        },
      inCart: false
    },
    {
      id: uuid(),
      brand: 'Huawei',
      name: `P30`,
      price: 130,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
        {
          size: '6.26 inches, 97.8 cm2 ',
      resolution: '720 x 1520 pixels, 19:9 ratio',
      GPU: 'Mali-G76 MP12 - EMEA',
      CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
      camera: '12+ 2MP rear camera',
      battery: '1400 mAh',
        },
      inCart: false
    },
    {
      id: uuid(),
      brand: 'Huawei',
      name: `Y9 Prime`,
      price: 130,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
        {
          size: '6.26 inches, 97.8 cm2 ',
      resolution: '720 x 1520 pixels, 19:9 ratio',
      GPU: 'Mali-G76 MP12 - EMEA',
      CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
      camera: '12+ 2MP rear camera',
      battery: '1400 mAh',
        },
      inCart: false
    },
    {
      id: uuid(),
      brand: 'Apple',
      name: `Iphone 7 Plus`,
      price: 130,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
        {
          size: '6.26 inches, 97.8 cm2 ',
      resolution: '720 x 1520 pixels, 19:9 ratio',
      GPU: 'Mali-G76 MP12 - EMEA',
      CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
      camera: '12+ 2MP rear camera',
      battery: '1400 mAh',
        },
      inCart: false
    },
    {
      id: uuid(),
      brand: 'Apple',
      name: `Iphone X`,
      price: 130,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
        {
          size: '6.26 inches, 97.8 cm2 ',
      resolution: '720 x 1520 pixels, 19:9 ratio',
      GPU: 'Mali-G76 MP12 - EMEA',
      CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
      camera: '12+ 2MP rear camera',
      battery: '1400 mAh',
        },
      inCart: false
    },
    {
      id: uuid(),
      brand: 'Apple',
      name: `Iphone 6s`,
      price: 130,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
        {
          size: '6.26 inches, 97.8 cm2 ',
      resolution: '720 x 1520 pixels, 19:9 ratio',
      GPU: 'Mali-G76 MP12 - EMEA',
      CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
      camera: '12+ 2MP rear camera',
      battery: '1400 mAh',
        },
      inCart: false
    },
    {
      id: uuid(),
      brand: 'Apple',
      name: `Iphone 8 Plus`,
      price: 130,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
        {
          size: '6.26 inches, 97.8 cm2 ',
      resolution: '720 x 1520 pixels, 19:9 ratio',
      GPU: 'Mali-G76 MP12 - EMEA',
      CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
      camera: '12+ 2MP rear camera',
      battery: '1400 mAh',
        },
      inCart: false
    },
    {
      id: uuid(),
      brand: 'Lenovo',
      name: `Z6 Pro`,
      price: 130,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
        {
          size: '6.26 inches, 97.8 cm2 ',
      resolution: '720 x 1520 pixels, 19:9 ratio',
      GPU: 'Mali-G76 MP12 - EMEA',
      CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
      camera: '12+ 2MP rear camera',
      battery: '1400 mAh',
        },
      inCart: false
    },
    {
      id: uuid(),
      brand: 'Lenovo',
      name: `A6000`,
      price: 130,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
        {
          size: '6.26 inches, 97.8 cm2 ',
      resolution: '720 x 1520 pixels, 19:9 ratio',
      GPU: 'Mali-G76 MP12 - EMEA',
      CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
      camera: '12+ 2MP rear camera',
      battery: '1400 mAh',
        },
      inCart: false
    },
    {
      id: uuid(),
      brand: 'Lenovo',
      name: `A7000`,
      price: 130,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
        {
          size: '6.26 inches, 97.8 cm2 ',
      resolution: '720 x 1520 pixels, 19:9 ratio',
      GPU: 'Mali-G76 MP12 - EMEA',
      CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
      camera: '12+ 2MP rear camera',
      battery: '1400 mAh',
        },
      inCart: false
    },
    {
      id: uuid(),
      brand: 'HTC',
      name: `U19e`,
      price: 130,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
        {
          size: '6.26 inches, 97.8 cm2 ',
      resolution: '720 x 1520 pixels, 19:9 ratio',
      GPU: 'Mali-G76 MP12 - EMEA',
      CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
      camera: '12+ 2MP rear camera',
      battery: '1400 mAh',
        },
      inCart: false
    },
    {
      id: uuid(),
      brand: 'HTC',
      name: `10`,
      price: 130,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
        {
          size: '6.26 inches, 97.8 cm2 ',
      resolution: '720 x 1520 pixels, 19:9 ratio',
      GPU: 'Mali-G76 MP12 - EMEA',
      CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
      camera: '12+ 2MP rear camera',
      battery: '1400 mAh',
        },
      inCart: false
    }
  ],
  cart: []
}

const phonesReducer = (state = phonesDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PHONE':
      return {
        ...state,
        phones: [ ...state.phones, action.phone ]
      }
    default:
      return state;
  }
}

export default phonesReducer;