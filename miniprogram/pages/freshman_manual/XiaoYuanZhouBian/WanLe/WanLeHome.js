// pages/freshman_manual/XiaoYuanZhouBian/WanLe/WanLeHome.js
Page({

  /**
   * Page initial data
   */
  data: {
    width: 200, height: 500,
  },

  BoWuGuan: function () {
    wx.navigateTo({
      url: 'BoWuGuan/BoWuGuan'
    })
  },

  JingDian: function () {
    wx.navigateTo({
      url: 'JingDian/JingDian'
    })
  },
  
  YouLeChang: function () {
    wx.navigateTo({
      url: 'YouLeChang/YouLeChang'
    })
  },

  SheJiChang: function () {
    wx.navigateTo({
      url: 'SheJiChang/SheJiChang'
    })
  },

  GouWu: function () {
    wx.navigateTo({
      url: 'GouWu/GouWu'
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
                height: res.windowHeight / 5,
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