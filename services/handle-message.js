const config = require("../config/line");

exports.handleMessage = (event) => {
  //   if (event.type !== "message" || event.message.type !== "text") {
  //     // ignore non-text-message event
  //     return Promise.resolve(null);
  //   }

  //   // create a echoing text message
  //   const echo = { type: "text", text: event.message.text };
  let msg;

  let msgText = event.message.text.toLowerCase().trim();

  if (msgText === "promotion") {
    msg = { type: "text", text: "มีโปรโมชั่นวัคซีน ราคา 1,500 บาท" };
  } else if (msgText === "555") {
    msg = { type: "text", text: "ฮ่าๆๆๆ" };
  } else {
    msg = { type: "text", text: "สวัดสี กรุณาพิมพ์ข้อความอีกครั้ง" };
  }

  // use reply API
  return config.client.replyMessage(event.replyToken, msg);
};
