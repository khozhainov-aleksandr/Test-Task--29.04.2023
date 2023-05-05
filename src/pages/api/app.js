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
    specification: 'IPS • 3840x2160 • 16:9 • HDMI • DisplayPort • 144 Гц',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2020-06-29 12:09:33'
    },
    price: [
      {value: 50, symbol: 'USD', isDefault: 1},
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
    specification: 'IPS • 2560x1440 • 16:9 • HDMI • DisplayPort • 165 Гц',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2020-06-29 12:09:33'
    },
    price: [
      {value: 193, symbol: 'USD', isDefault: 0},
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
    specification: 'IPS • 2560x1440 • 16:9 • HDMI (2x) • DisplayPort • 165 Гц ',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2020-06-29 12:09:33'
    },
    price: [
      {value: 83, symbol: 'USD', isDefault: 0},
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
    specification: 'Nano IPS • 2560x1440 • 16:9 • HDMI (2x) • DisplayPort • 165 Гц',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2020-06-29 12:09:33'
    },
    price: [
      {value: 118, symbol: 'USD', isDefault: 1},
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
    specification: 'QD-OLED • 3440x1440 • 21:9 • HDMI (2x) • DisplayPort • 175 Гц',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2020-06-29 12:09:33'
    },
    price: [
      {value: 68, symbol: 'USD', isDefault: 0},
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
    specification: 'IPS • 2560x1440 • 16:9 • HDMI (2x) • DisplayPort • 144 Гц',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2020-06-29 12:09:33'
    },
    price: [
      {value: 152, symbol: 'USD', isDefault: 0},
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
    specification: 'IPS • 3840 x 2160 • 16:9 • HDMI (HDCP 2.2) • DisplayPort (HDCP 2.2) • 60 Гц',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2020-06-29 12:09:33'
    },
    price: [
      {value: 130, symbol: 'USD', isDefault: 0},
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
    specification: 'IPS • 3840x2160 • 16:9 • HDMI (2x) • DisplayPort • 144 Гц',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2020-06-29 12:09:33'
    },
    price: [
      {value: 132, symbol: 'USD', isDefault: 0},
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
    specification: 'IPS • 1920x1080  • 16:9 • HDMI (2x) • DisplayPort • 144 Гц',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2020-06-29 12:09:33'
    },
    price: [
      {value: 185, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  },
]