// event handler
exports.handleEvent = (event) => {
  //   console.log("Event : ", event);
  switch (event.type) {
    case "message":
      switch (event.message.type) {
        case "text":
          console.log("text message");
          break;
        case "sticker":
          console.log("sticker message");
          break;
      }
      break;
    case "postback":
      console.log("postback");
      break;
    default:
      throw new Error(`Unknow event ${JSON.stringify(event.message.type)}`);
  }
};
