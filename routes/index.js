const express = require('express')
const router = express.Router()
const db = require('../config/mysql')
const { createRichMenu } = require('../services/create-richmenu')
const { deleteRichMenu } = require('../services/delete-richmenu')

/* localhost:4000/getpromotion */
router.get('/getpromotion', async function (req, res, next) {
  const conn = await db.connectMySQL()
  const [rows] = await conn.query(
    'select * from pro_room order by id desc limit 12'
  ) // line ยอมให้แสดง flex message สูงสุด 12 อัน

  return res.status(200).json(rows)
})

/* localhost:4000/getpromotion/1 */
router.get('/getpromotion/:id', async function (req, res, next) {
  const conn = await db.connectMySQL()
  const [rows] = await conn.query('select * from pro_room where id=?', [
    req.params.id,
  ]) // line ยอมให้แสดง flex message สูงสุด 12 อัน

  return res.status(200).json(rows[0])
})

/* localhost:4000/createrichmenu */
router.get('/createrichmenu', async function (req, res, next) {
  await createRichMenu()
  return res.status(200).json({ message: 'สร้าง Menu สำเร็จ' })
})

// localhost:4000/deleterichmenu
router.get('/deleterichmenu', async function (req, res, next) {
  await deleteRichMenu()
  return res.status(200).json({ message: 'ลบเมนูสำเร็จ' })
})

// localhost:4000/auth/callback // ใช้กับ Line Login
router.get('/auth/callback', async function (req, res, next) {
  // console.log(req.query.code)

  // get access token
  return res.status(200).json({ message: 'Login สำเร็จ' })
})

module.exports = router
