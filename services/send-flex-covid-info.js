const axios = require('axios').default

exports.sendFlexCovidInfo = async () => {
  const response = await axios.get(
    'https://covid19.ddc.moph.go.th/api/Cases/today-cases-all',
    {
      headers: { 'Content-Type': 'application/json' },
    }
  )

  //   console.log(response.data)

  let msg = {
    type: 'flex',
    altText: 'รายงานสถานการณ์โควิด ประจำวัน',
    contents: {
      type: 'bubble',
      hero: {
        type: 'image',
        url: 'https://codingthailand.com/covid_cover.png',
        size: 'full',
        aspectRatio: '20:13',
        aspectMode: 'cover',
        action: {
          type: 'uri',
          uri: 'https://ddc.moph.go.th/covid19-dashboard/',
        },
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: `วันที่ ${response.data[0].update_date.slice(0, 10)}`,
            weight: 'bold',
            size: 'xl',
            align: 'start',
            color: '#0C8742',
          },
          {
            type: 'box',
            layout: 'vertical',
            margin: 'lg',
            spacing: 'sm',
            contents: [
              {
                type: 'box',
                layout: 'baseline',
                spacing: 'sm',
                contents: [
                  {
                    type: 'text',
                    text: 'ผู้ป่วยรายใหม่',
                    color: '#EA4211',
                    size: 'md',
                    flex: 0,
                  },
                  {
                    type: 'text',
                    text: `${response.data[0].new_case} ราย`,
                    wrap: true,
                    color: '#EA4211',
                    size: 'lg',
                    flex: 5,
                    align: 'end',
                  },
                ],
              },
              {
                type: 'box',
                layout: 'baseline',
                spacing: 'sm',
                contents: [
                  {
                    type: 'text',
                    text: 'ผู้เสียชีวิตรายใหม่',
                    color: '#191717',
                    size: 'md',
                    flex: 0,
                    align: 'start',
                  },
                  {
                    type: 'text',
                    text: `${response.data[0].new_death} ราย`,
                    wrap: true,
                    color: '#191717',
                    size: 'md',
                    flex: 5,
                    align: 'end',
                  },
                ],
              },
            ],
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
            height: 'sm',
            action: {
              type: 'uri',
              uri: 'https://ddc.moph.go.th/covid19-dashboard/',
              label: 'ดูข้อมูลเพิ่มเติม...',
            },
            color: '#0C8742',
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [],
            margin: 'sm',
          },
        ],
        flex: 0,
        borderColor: '#0C8742',
      },
    },
  }

  return msg
}
