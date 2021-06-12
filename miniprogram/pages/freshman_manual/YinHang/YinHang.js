// pages/freshman_manual/XiaoYuanZhouBian/XiaoYuanZhouBian.js
const d = wx.cloud.database()
Page({

  /**
   * Page initial data
   */
  data: {
    width: 200, height: 500,
    name_on_list: "",
  },

/** Sponsorship
  * index : 广告类型
  * 0     : 吃喝玩乐
  * 1     : 选课/学习
  * 2     : 银行  <--此处类型
  * 3     : 职业规划
  * 4     : 住宿
  */
 TeBieTuiJian: function () {
  wx.navigateTo({
    url: '../../sponsor/sponsor?id=' + 2
  })
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
            leftBorderWidth: res.windowWidth/22,
            width: res.windowWidth/1.10,
            height: res.windowHeight / 3.4
        })
      },
    }) 

    var index = 2;
    d.collection("sponsor_info").where({
      index: 2
    }).get({
      success: res => {
        this.setData({
          name_on_list: res.data[0].name_on_list
        })
      }
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