// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  const filmRes = await db.collection('film').limit(1).get()
  const filmData = filmRes.data[0]

  const reviewRes = await db.collection('film').where({
    filmid: filmData._id
  }).limit(1).get()
  const reviewData = reviewRes.data[0]
  filmData.review = reviewData

  return filmData
  
}