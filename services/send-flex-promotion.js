const axios = require('axios').default

exports.sendFlexPromotion = async () => {
  const response = await axios.get(
    // process.env.BASE_URL + '/getpromotion',
    `${process.env.BASE_URL}/getpromotion`,
    // 'http://localhost:4000/getpromotion',
    // `${process.env.BASE_LOCAL_URL}/getpromotion`,
    {
      headers: { 'Content-Type': 'application/json' },
    }
  )

  console.log(response.data)

  let bubbles = []
  let promotions = response.data

  bubbles = promotions.map((item) => {
    let postbackType = { type: 'roompromotion' }
    // เอา type ไปเช็คเพิ่มเติม เพื่อ response หรือ query ตอบกลับไปให้ลูกค้า
    let newItem = { ...postbackType, ...item }
    return {
      type: 'bubble',
      size: 'mega',
      hero: {
        type: 'image',
        url: item.picture,
        size: 'full',
        aspectRatio: '20:13',
        aspectMode: 'cover',
        action: {
          type: 'uri',
          uri: 'http://linecorp.com/',
        },
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: `[Id: ${item.id} ] ${item.name}`, //use backtick
            weight: 'bold',
            size: 'xl',
            color: '#077BA6',
            align: 'center',
          },
        ],
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        contents: [
          {
            type: 'button',
            style: 'primary',
            height: 'md',
            action: {
              type: 'postback',
              label: 'ดูรายละเอียดเพิ่มเติม',
              // data: JSON.stringify(item),
              data: JSON.stringify(newItem),
            },
            color: '#077BA6',
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [],
            margin: 'sm',
          },
        ],
        flex: 0,
      },
    }
  })

  let msg = {
    type: 'flex',
    altText: 'โปรโมชั่นห้องพักสำหรับผู้ป่วย',
    contents: {
      type: 'carousel',
      contents: bubbles,
    },
  }

  return msg
}
