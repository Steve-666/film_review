const util = require('../../utils/util')
const db = require('../../utils/db')
const app = getApp()

Page({

  data: {
    filmDetails:{},
    review:{},
    noReview: true,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.showLoading({
      title: 'Loading...',
    })
    db.getRandomFilm().then(result => {
      wx.hideLoading()
      const filmData = result.data[0]
      if (filmData) {
        wx.showToast({
          title: 'Succeed',
        })
        this.setData({
          filmDetails: filmData
        })
      }
    })
    
    let filmid = this.data.filmDetails._id
    db.getRandomReview(filmid).then(result => {
      wx.hideLoading()
      const reviewData = result.data[0]
      
      if (reviewData) {
        wx.showToast({
          title: 'Succeed',
        })
        console.log(reviewData);
        this.setData({
          review: reviewData,
          noReview:false
        })
      }
    })
  },

  redirectToFilmList:function(){
    wx.redirectTo({
      url: '../film-list/film-list',
    })
  },
  redirectToMe:function(){
    wx.redirectTo({
      url: '../me/me',
    })
  },
  redirectToFilmDetails:function(){
    wx.navigateTo({
      url: '../film-details/film-details?id=' + this.data.filmDetails._id,
    })
  },
  redirectToReviewDetails: function () {
    console.log(this.data.review._id != undefined)
    if (this.data.review._id != undefined){
      wx.navigateTo({
        url: '../film-review-details/film-review-details?id=' + this.data.review._id,
      })
    }
    
  },
  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  }
})