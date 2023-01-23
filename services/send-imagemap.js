exports.sendImageMap = () => {
  let msg = {
    type: "imagemap",
    baseUrl: `${process.env.BASE_URL}/images/static/imagemap`,
    altText: "โปรดเลือก Menu ของเรา",
    baseSize: {
      width: 1040,
      height: 1040,
    },
    video: {
      originalContentUrl: `${process.env.BASE_URL}/images/static/imagemap/video.mp4`,
      previewImageUrl: `${process.env.BASE_URL}/images/static/imagemap/preview.jpg`,
      area: {
        x: 0,
        y: 0,
        width: 1040,
        height: 521,
      },
      externalLink: {
        linkUri: "https://google.com",
        label: "ดูวิดีโอทั้งหมด",
      },
    },
    actions: [
      {
        type: "uri",
        linkUri: "https://codingthailand.com",
        area: {
          x: 0,
          y: 521,
          width: 520,
          height: 520,
        },
      },
      {
        type: "message",
        text: "555",
        area: {
          x: 521,
          y: 521,
          width: 520,
          height: 520,
        },
      },
    ],
  };

  return msg;
};
