const service = require('./handle-message')
const { handlePostback } = require('./handle-postback')

// event handler
exports.handleEvent = (event) => {
  //   console.log("Event : ", event);
  switch (event.type) {
    case 'message':
      switch (event.message.type) {
        case 'text':
          service.handleMessage(event)
          // console.log(event, event.message.type);
          break
        case 'sticker':
          console.log('sticker message')
          break
        default:
          throw new Error(
            `Unknow message ${JSON.stringify(event.message.type)}`
          )
      }
      break
    case 'postback':
      // console.log(`"Room Pro ID" :${event.postback.data}`)
      handlePostback(event)
      break

    case 'follow':
      console.log(`มีคนติดตามเพิ่ม / เลิก Block คือ : ${event.source.userId}`)
      // อาจจะเอาไปเพิ่มในฐานข้อมูลต่อไปได้
      break

    case 'unfollow':
      console.log(`มีคน Block / เลิกเป็นเพื่อนแล้ว`)
      // อาจจะเอาไป ทำต่อในฐานข้อมูลต่อไปได้ เช่น ลบ userId นี้ออก
      break
    default:
      throw new Error(`Unknow event ${JSON.stringify(event.message.type)}`)
  }
}
