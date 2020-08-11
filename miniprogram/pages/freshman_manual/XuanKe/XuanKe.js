// pages/freshman_manual/XuanKe/XuanKe.js
Page({

  /**
   * Page initial data
   */
  data: {
    width: 200, height: 500,
  },
  
  TuShuGuan: function () {
    wx.navigateTo({
      url: 'TuShuGuan/TuShuGuan'
    })
  },

  XuanKeNeiRong: function () {
    wx.navigateTo({
      url: 'XuanKeNeiRong/XuanKeNeiRong'
    })
  },

  XueXi: function () {
    wx.navigateTo({
      url: 'XueXi/XueXi'
    })
  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
            success: function (res) {
              console.log(res);
              // 计算主体部分高度,单位为px
              that.setData({
                width: res.windowWidth,
                height: res.windowHeight / 3,
              })
            },
          }) 
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})