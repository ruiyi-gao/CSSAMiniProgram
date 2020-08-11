// pages/freshman_manual/XiaoYuanZhouBian/XiaoYuanZhouBian.js
Page({

  /**
   * Page initial data
   */
  data: {
    width: 200, height: 500,
  },

  WellsFargo: function () {
    wx.navigateTo({
      url: 'WellsFargo/WellsFargo'
    })
  },

  BOA: function () {
    wx.navigateTo({
      url: 'BOA/BOA'
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
                height: res.windowHeight / 2,
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