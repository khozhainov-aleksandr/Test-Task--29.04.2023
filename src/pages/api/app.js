export const orders = [
  {
    id: 1,
    title: 'Order 1',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() { return products },
  },
  {
    id: 2,
    title: 'Order 2',
    date: '2018-06-29 05:09:33',
    description: 'desc',
    get products() { return products },
  },
  {
    id: 3,
    title: 'Order 3',
    date: '2019-06-29 10:09:33',
    description: 'desc',
    get products() { return products },
  },
]

export const products = [
  {
    id: 1,
    serialNumber: 5624,
    isNew: 0,
    photo: 'pathToFile.jpg',
    title: 'Alienware',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 1},
      {value: 2600, symbol: 'UAH', isDefault: 0}
    ],
    order: 1,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 2,
    serialNumber: 3425,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Samsung',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 1,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 3,
    serialNumber: 4567,
    isNew: 0,
    photo: 'pathToFile.jpg',
    title: 'LG',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 1,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 4,
    serialNumber: 6574,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Samsung',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 1},
      {value: 2600, symbol: 'UAH', isDefault: 0}
    ],
    order: 1,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 5,
    serialNumber: 7895,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Dell',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 6,
    serialNumber: 1345,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'LG',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 7,
    serialNumber: 4678,
    isNew: 0,
    photo: 'pathToFile.jpg',
    title: 'Dell',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 8,
    serialNumber: 4567,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Samsung',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 9,
    serialNumber: 9257,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'ViewSonic',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  },
]