const config = require("../config/line");
const { sendImage } = require("./send-image");
const { sendLocation } = require("./send-location");
const { sendText } = require("./send-text");

exports.handleMessage = (event) => {
  let msg;

  switch (event.message.text.toLowerCase().trim()) {
    case "image":
      msg = sendImage();
      break;

    case "location":
      msg = sendLocation();

      break;
    default:
      msg = sendText(event);
  }

  // use reply API
  return config.client.replyMessage(event.replyToken, msg);
};
