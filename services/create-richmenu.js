const { readFileSync } = require('fs')
const path = require('path')

const { client } = require('../config/line')

exports.createRichMenu = async () => {
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

  // 1. Create RichMenu
  const richMenuAAId = await client.createRichMenu(richMenuAA)

  // 2.Upload richmenu image (ต้อง upload ไปที่ server ของ line โดยรูปต้องไฟล์ข้อมูลชนิด buffer เวลาใช้งานรูปนี้ไม่ได้มาจาก server เรา)

  const imagePath = path.resolve('./') + '/public/images/static/richmenu-aa.png'
  const bufferImage = readFileSync(imagePath)

  await client.setRichMenuImage(richMenuAAId, bufferImage)

  // 3. Set default menu (กรณีมีหลาย menu)

  await client.setDefaultRichMenu(richMenuAA)

  // 4. Create alias to richmenu สร้างชื่อเล่นให้กับ menu แทนการจำ id
  await client.createRichMenuAlias(richMenuAAId, 'richmenu-alias-aa')
}
