const { client } = require('../config/line')

exports.handlePostback = (event) => {
  let postbackData = event.postback.data // ข้อมูลเป็น String

  let data = JSON.parse(postbackData)

  let msg
  if (data.type === 'roompromotion') {
    // console.log(data.price)
    msg = [
      { type: 'text', text: 'รายละเอียดโปรโมชั่นนี้' },
      { type: 'text', text: `ราคา ${data.price}` },
    ]
  }

  return client.replyMessage(event.replyToken, msg)
}
