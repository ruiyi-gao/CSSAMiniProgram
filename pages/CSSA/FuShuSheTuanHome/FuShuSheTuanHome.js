// pages/CSSA/FuShuSheTuanHome/FuShuSheTuanHome.js
Page({

  /**
   * Page initial data
   */
  data: {
    gridCol: 2,
    cardCur: 0,
    departmentList: [{
        id: 0,
        icon: '../../../images/MinYue.jpg',
        color: 'white',
        name: '民乐社',
        bindtap: 'MinYueShe'
    }, {
        id: 1,
        icon: '../../../images/BiQiu.png',
        color: 'white',
        name: '壁球社',
        bindtap: 'BiQiuShe'
    }, {
        id: 2,
        icon: '../../../images/DianJing.png',
        color: 'white',
        name: '电竞社',
        bindtap: 'DianJingShe'
    }, {
        id: 3,
        icon: '../../../images/WuDao.png',
        color: 'white',
        name: '舞千舞蹈社',
        bindtap: 'WuDaoShe'
      }, {
        id: 4,
        icon: '../../../images/ShuHua.png',
        color: 'white',
        name: '书画社',
        bindtap: 'ShuHuaShe'
      }, {
        id: 5,
        icon: '../../../images/ShiWei.png',
        color: 'white',
        name: '食味社',
        bindtap: 'ShiWeiShe'
      }, {
        id: 6,
        icon: '../../../images/SheYing.png',
        color: 'white',
        name: '摄影社',
        bindtap: 'SheYingShe'
      }, {
        id: 7,
        icon: '../../../images/ZhuoYou.png',
        color: 'white',
        name: '桌游社',
        bindtap: 'ZhuoYouShe'
      }],
  },

  MinYueShe: function () {
    wx.navigateTo({
      url: 'MinYueShe/MinYueShe',
    })
  },

  BiQiuShe: function () {
    wx.navigateTo({
      url: 'BiQiuShe/BiQiuShe',
    })
  },

  DianJingShe: function () {
    wx.navigateTo({
      url: 'DianJingShe/DianJingShe',
    })
  },

  WuDaoShe: function () {
    wx.navigateTo({
      url: 'WuDaoShe/WuDaoShe',
    })
  },

  ShuHuaShe: function () {
    wx.navigateTo({
      url: 'ShuHuaShe/ShuHuaShe',
    })
  },

  ShiWeiShe: function () {
    wx.navigateTo({
      url: 'ShiWeiShe/ShiWeiShe',
    })
  },

  SheYingShe: function () {
    wx.navigateTo({
      url: 'SheYingShe/SheYingShe',
    })
  },

  ZhuoYouShe: function () {
    wx.navigateTo({
      url: 'ZhuoYouShe/ZhuoYouShe',
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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