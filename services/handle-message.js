const config = require('../config/line')
const { sendFlexCovidInfo } = require('./send-flex-covid-info')
const { sendImage } = require('./send-image')
const { sendImageMap } = require('./send-imagemap')
const { sendLocation } = require('./send-location')
const { sendText } = require('./send-text')

exports.handleMessage = (event) => {
  let msg

  switch (event.message.text.toLowerCase().trim()) {
    case 'image':
      msg = sendImage()
      break

    case 'imagemap':
      msg = sendImageMap()
      break

    case 'covid':
      msg = sendFlexCovidInfo()
      break

    case 'location':
      msg = sendLocation()

      break
    default:
      msg = sendText(event)
  }

  // use reply API
  return config.client.replyMessage(event.replyToken, msg)
}
