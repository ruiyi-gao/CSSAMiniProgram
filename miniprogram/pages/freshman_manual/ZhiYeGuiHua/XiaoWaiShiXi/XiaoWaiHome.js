// pages/freshman_manual/ZhiYeGuiHua/XiaoWaiShiXi/XiaoWaiHome.js
Page({

  /**
   * Page initial data
   */
  data: {
    width: 0, height: 0,
  },

  ZhaoPin: function () {
    wx.navigateTo({
      url: 'ZhaoPin/ZhaoPin'
    })
  },

  RenMai: function () {
    wx.navigateTo({
      url: 'RenMai/RenMai'
    })
  },

  C2D2: function () {
    wx.navigateTo({
      url: 'C2D2/C2D2'
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
      fileList: ['cloud://dev-dt0db.6465-dev-dt0db-1301626594/freshman_manuel/zhaopin.jpg', 
      'cloud://dev-dt0db.6465-dev-dt0db-1301626594/freshman_manuel/renmai.jpg'],
      success: res => {
        console.log(res.fileList)
        this.setData({
          zhaopinURL:res.fileList[0].tempFileURL,
          renmaiURL: res.fileList[1].tempFileURL,
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