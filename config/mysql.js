const mysql = require('mysql2/promise')

exports.connectMySQL = async () => {
  const conn = await mysql.createConnection({
    host: 'codingthailand.com',
    user: 'line',
    password: 'dvETVz2A2WCsFhKX',
    database: 'line',
    port: '3306',
  })
  return conn
}
