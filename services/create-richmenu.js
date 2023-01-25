const { client } = require('../config/line')

exports.createRichMenu = () => {
  const richMenuAA = {
    size: {
      width: 2500, // รูป Rich Menu ขนาด 3x2 (2500/3 = 833)
      height: 1686, // (1686/2 = 843)
    },
    selected: false,
    name: 'My RichMenu',
    chatBarText: 'เมนูหลัก',
    areas: [
      {
        bounds: {
          x: 0,
          y: 0,
          width: 833,
          height: 843,
        },
        action: {
          type: 'uri',
          uri: 'https://google.com',
        },
      },
      {
        bounds: {
          x: 834,
          y: 0,
          width: 833,
          height: 843,
        },
        action: {
          type: 'uri',
          uri: 'https://facebook.com',
        },
      },
      {
        bounds: {
          x: 1666,
          y: 0,
          width: 833,
          height: 843,
        },
        action: {
          type: 'message',
          text: 'roompromotion',
        },
      },
      {
        bounds: {
          x: 0,
          y: 843,
          width: 833,
          height: 843,
        },
        action: {
          type: 'message',
          text: 'covid',
        },
      },
      {
        bounds: {
          x: 843,
          y: 843,
          width: 833,
          height: 843,
        },
        action: {
          type: 'uri',
          uri: 'https://hotmail.com',
        },
      },
      {
        bounds: {
          x: 1666,
          y: 843,
          width: 833,
          height: 843,
        },
        action: {
          type: 'uri',
          uri: 'https://codingthailand.com',
        },
      },
    ],
  }
}
