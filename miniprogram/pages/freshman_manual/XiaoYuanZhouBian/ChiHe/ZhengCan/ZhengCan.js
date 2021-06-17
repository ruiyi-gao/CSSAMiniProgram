// pages/freshman_manual/XiaoYuanZhouBian/ChiHe/ZhengCan/ZhengCan.js
Page({

  /**
   * Page initial data
   */
  data: {
    width: 200, height: 500,
  },

  Barcelona: function () {
    wx.navigateTo({
      url: 'Barcelona/Barcelona'
    })
  },

  Wagaya: function () {
    wx.navigateTo({
      url: 'Wagaya/Wagaya'
    })
  },

  Jia: function () {
    wx.navigateTo({
      url: 'Jia/Jia'
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
                  height: res.windowHeight / 3.4
              })
            },
          }) 

    // Transfer fileID to URL for image showing 
    wx.cloud.getTempFileURL({
      fileList: ['cloud://dev-dt0db.6465-dev-dt0db-1301626594/freshman_manuel/Jia.jpg'],
      success: res => {
        console.log(res.fileList)
        this.setData({
          JiaURL:res.fileList[0].tempFileURL,
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