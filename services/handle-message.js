const config = require("../config/line");
const { sendImage } = require("./send-image");
const { sendLocation } = require("./send-location");
const { sendText } = require("./send-text");

exports.handleMessage = (event) => {
  // Basic 1
  //   if (event.type !== "message" || event.message.type !== "text") {
  //     // ignore non-text-message event
  //     return Promise.resolve(null);
  //   }

  //   // create a echoing text message
  //   const echo = { type: "text", text: event.message.text };
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
