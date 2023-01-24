const { client } = require('../config/line')

exports.handlePostback = (event) => {
  let postbackData = event.postback.data // ข้อมูลเป็น String

  let data = JSON.parse(postbackData)

  let msg
  if (data.type === 'roompromotion') {
    // console.log(data.price, data.id)
    msg = [
      { type: 'text', text: 'รายละเอียดโปรโมชั่นนี้' },
      { type: 'text', text: `ราคา ${data.price}` },
    ]
  }

  // ลองใช้ push message หรือ broadcast -> หมายเหตุ event จะมี user id ด้วย อ่านค่าผ่าน event.source.userId

  //   let msg2 = { type: 'text', text: 'ข้อความนี้จาก push' }
  //   return client.pushMessage(event.source.userId, msg2)

  //   let msg3 = { type: 'text', text: 'ข้อความนี้จาก push แบบ Broadcast' }
  // ส่งหาทุกคน ไม่มียกเว้น แต่ push สามารถส่งตามเงื่อนไขได้
  //   return client.broadcast(msg3)

  return client.replyMessage(event.replyToken, msg)
}
