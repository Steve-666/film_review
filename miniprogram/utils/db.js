const util = require('./util')

const db = wx.cloud.database({
  env: 'wx-server-sdk-001'
})

module.exports = {
  getFilmList() {
    return db.collection('film').orderBy('slotNo','asc').get()
  },
  getRandomFilm() {
    return db.collection('film').limit(1).get()
  },
  getReviewDetails(id) {
    return db.collection('review').doc(id).get()
  },
  getRandomReview(id){
    return db.collection('review').where({
      filmid:id
    }).limit(1).get()
  },
  addFilm(data) {
    return wx.cloud.callFunction({
      name: 'addFilm',
      data
    })
  },
  getFilmDetails(id) {
    return wx.cloud.callFunction({
      name:"getFilmDetails",
      data:{
        id
      }
    })
  },
  addReview(data){
    return util.isAuthenticated()
      .then(() => {
        return wx.cloud.callFunction({
          name: 'addReview',
          data,
        })
      }).catch((err) => {
        console.log(err)
        wx.showToast({
          icon: 'none',
          title: '请登陆'
        })
        return {}
      })
  },
  getReviewList(id) {
    return util.isAuthenticated()
      .then(() => {console.log("db id:"+id)
        return wx.cloud.callFunction({
          name: 'getReviewList',
          data: {
            id: id
          }
        })
      }).catch((err) => {
        console.log(err)
        wx.showToast({
          icon: 'none',
          title: '请登陆'
        })
        return {}
      })
  },
  addFavReview(data) {
    return util.isAuthenticated()
      .then(() => {
        return wx.cloud.callFunction({
          name: 'addFavReview',
          data
        })
      }).catch((err) => {
        console.log(err)
        wx.showToast({
          icon: 'none',
          title: '请登陆'
        })
        return {}
      })
  },
  getFavReviewList(id) {
    return util.isAuthenticated()
      .then(() => {
        console.log("db id:" + id)
        return wx.cloud.callFunction({
          name: 'getFavReviewList',
          data: {
            id: id
          }
        })
      }).catch((err) => {
        console.log(err)
        wx.showToast({
          icon: 'none',
          title: '请登陆'
        })
        return {}
      })
  },
  getFavReviewListViaUser() {
    return util.isAuthenticated()
      .then(() => {
        return wx.cloud.callFunction({ 
          name: 'getFavReviewListViaUser'
        })
      }).catch((err) => {
        console.log(err)
        wx.showToast({
          icon: 'none',
          title: '请登陆'
        })
        return {}
      })
  },
  getSubmittedReviewList() {
    return util.isAuthenticated()
      .then(() => {
        return wx.cloud.callFunction({
          name: 'getSubmittedReviewList',
        })
      }).catch((err) => {
        console.log(err)
        wx.showToast({
          icon: 'none',
          title: '请登陆'
        })
        return {}
      })
  },
  getReviewListViaIdList(idList) {
    return util.isAuthenticated()
      .then(() => {
        return wx.cloud.callFunction({
          name: 'getReviewListViaIdList',
          data:{
            reviewIdList: idList
          }
        })
      }).catch((err) => {
        console.log(err)
        wx.showToast({
          icon: 'none',
          title: '请登陆'
        })
        return {}
      })
  },
  getFilmListViaIdList(idList) {
    return util.isAuthenticated()
      .then(() => {
        return wx.cloud.callFunction({
          name: 'getFilmListViaIdList',
          data: {
            filmIdList: idList
          }
        })
      }).catch((err) => {
        console.log(err)
        wx.showToast({
          icon: 'none',
          title: '请登陆'
        })
        return {}
      })
  },
  getReviewDetailsViafilmIdAndUser(id) {
    return util.isAuthenticated()
      .then(() => {
        return wx.cloud.callFunction({
          name: 'getReviewDetailsViafilmIdAndUser',
          data: {
            id: id
          }
        })
      }).catch((err) => {
        console.log(err)
        wx.showToast({
          icon: 'none',
          title: '请登陆'
        })
        return {}
      })
  },
  getUserId(){
    return util.isAuthenticated()
      .then(() => {
        return wx.cloud.callFunction({
          name: 'getUserId',
        })
      }).catch((err) => {
        console.log(err)
        wx.showToast({
          icon: 'none',
          title: '请登陆'
        })
        return {}
      })
  }

  
}
