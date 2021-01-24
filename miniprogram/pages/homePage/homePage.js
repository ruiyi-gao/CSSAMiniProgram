const db = wx.cloud.database() //连接数据库

// pages/homePage/homePage.js
Page({

  /**
   * Page initial data
   */
  data: {
    iconList: [{
      id: 0,
      icon: 'discover',
      color: 'red',
      name: '校园周边',
      bindtap: 'XiaoYuanZhouBian'
    }, {
      id: 1,
      icon: 'activity',
      color: 'orange',
      name: '附属社团',
      bindtap: 'FuShuSheTuan'
    }, {
      id: 2,
      icon: 'goods',
      color: 'yellow',
      name: '生活必需',
      bindtap: 'YinHang'
    }, {
      id: 3,
      icon: 'notice',
      color: 'olive',
      name: '选课/学习',
      bindtap: 'XuanKe'
    }],
    gridCol: 2,
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://gtcssaminiprogram.oss-accelerate.aliyuncs.com/miniprogrampic/Welcome.PNG'
    }, {
      id: 1,
      type: 'image',
        url: 'https://gtcssaminiprogram.oss-accelerate.aliyuncs.com/miniprogrampic/CSSA.PNG',
    }, {
      id: 2,
      type: 'image',
        url: 'https://gtcssaminiprogram.oss-accelerate.aliyuncs.com/miniprogrampic/CSSA_2.PNG'
    }],

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

  Activity: function(){
    wx.navigateTo({
      url: '../activity/activity_home/activity_home'
    })
  },

  freshman_manual: function () {
    wx.navigateTo({
      url: '../freshman_manual_home/freshman_manual_home'
    })
  },

  XiaoYuanZhouBian: function () {
    wx.navigateTo({
      url: '../freshman_manual/XiaoYuanZhouBian/XiaoYuanZhouBian'
    })
  },

  FuShuSheTuan: function () {
    wx.navigateTo({
      url: '../CSSA/FuShuSheTuanHome/FuShuSheTuanHome'
    })
  },

  ZhuSu: function () {
    wx.navigateTo({
      url: '../freshman_manual/ZhuSu/homepage'
    })
  },

  YinHang: function () {
    wx.navigateTo({
      url: '../freshman_manual/YinHang/YinHang'
    })
  },

  XuanKe: function () {
    wx.navigateTo({
      url: '../freshman_manual/XuanKe/XuanKe'
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