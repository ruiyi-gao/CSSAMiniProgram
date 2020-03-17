// pages/homePage/homePage.js
Page({

  /**
   * Page initial data
   */
  data: {
    iconList: [{
      id: 0,
      icon: 'discoverfill',
      color: 'red',
      name: '校园周边',
      bindtap: 'redirect1'
    }, {
      id: 1,
      icon: 'shopfill',
      color: 'orange',
      name: '二手物品',
      bindtap: 'redirect2'
    }, {
      id: 2,
      icon: 'locationfill',
      color: 'yellow',
      name: '接机',
      bindtap: 'redirect3'
    }, {
      id: 3,
      icon: 'noticefill',
      color: 'olive',
      name: '选课',
      bindtap: 'redirect4'
    }],
    gridCol: 2,
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: '../../images/test1.png'
    }, {
      id: 1,
      type: 'image',
        url: '../../images/test2.png',
    }, {
      id: 2,
      type: 'image',
        url: '../../images/test3.png'
    }, {
      id: 3,
      type: 'image',
        url: '../../images/test4.png'
    }],
    activitylist:[{
      id: 0,
      url: '../../images/test1.png',
      description: '这是一段示例的活动介绍1'
    },{
        id: 1,
        url: '../../images/test2.png',
        description: '这是一段示例的活动介绍2'
    },{
        id: 2,
        url: '../../images/test3.png',
        description: '这是一段示例的活动介绍3'
    }]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  CSSA: function(){
    wx.navigateTo({
      url: '../CSSA_home/CSSA_home'
    })
  },

  freshman_manual: function () {
    wx.navigateTo({
      url: '../freshman_manual_home/freshman_manual_home'
    })
  },

  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
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