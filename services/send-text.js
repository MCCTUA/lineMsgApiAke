// send message text and sticker

exports.sendText = (event) => {
  let msg

  let msgText = event.message.text.toLowerCase().trim()

  if (msgText === 'promotion') {
    msg = { type: 'text', text: 'มีโปรโมชั่นวัคซีน ราคา 1,500 บาท' }
  } else if (msgText === '555') {
    msg = { type: 'text', text: 'ฮ่าๆๆๆ' }
  } else if (msgText === 'liff') {
    msg = { type: 'text', text: 'https://liff.line.me/1657847875-BQovPKz5' }
  } else if (msgText === 'จองวัคซีนสำเร็จ') {
    msg = { type: 'text', text: 'ขอบคุณที่จองวัคซีนกับเรา' }
  } else if (msgText === 'love') {
    // send sticker format
    msg = {
      type: 'sticker',
      packageId: '789',
      stickerId: '10856',
    }
  } else {
    msg = { type: 'text', text: 'สวัดสี กรุณาพิมพ์ข้อความอีกครั้ง' }
  }

  return msg
}
