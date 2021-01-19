// pages/freshman_manual/ZhiYeGuiHua/ZhiYeGuiHua.js
Page({

  /**
   * Page initial data
   */
  data: {
    width: 0, height: 0,
  },

  XiaoNeiShiXi: function () {
    wx.navigateTo({
      url: 'XiaoNeiShiXi/XiaoNeiShiXi'
    })
  },

  XiaoWaiShiXi: function () {
    wx.navigateTo({
      url: 'XiaoWaiShiXi/XiaoWaiHome'
    })
  },

  SSN_CPT: function () {
    wx.navigateTo({
      url: 'SSN_CPT/SSN_CPT'
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
                  leftBorderWidth: res.windowWidth/22,
                  width: res.windowWidth/1.10,
                  height: res.windowHeight / 4.5
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