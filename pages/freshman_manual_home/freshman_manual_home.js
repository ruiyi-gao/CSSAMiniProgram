// pages/freshman_manual_home/freshman_manual_home.js
Page({

  /**
   * Page initial data
   */
  data: {
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://raw.githubusercontent.com/ruiyi-gao/CSSAMiniProgram/images/images/test1.PNG'
    }, {
      id: 1,
      type: 'image',
        url: 'https://raw.githubusercontent.com/ruiyi-gao/CSSAMiniProgram/images/images/test2.PNG',
    }, {
      id: 2,
      type: 'image',
        url: 'https://raw.githubusercontent.com/ruiyi-gao/CSSAMiniProgram/images/images/test3.PNG'
    }, {
      id: 3,
      type: 'image',
        url: 'https://raw.githubusercontent.com/ruiyi-gao/CSSAMiniProgram/images/images/test4.PNG'
    }],

    gridCol: 2,
    cardCur: 0,
    departmentList: [{
      id: 0,
      icon: '../../images/XiaoYuanZhouBian.png',
      color: 'white',
      name: '校园周边',
      bindtap: 'XiaoYuanZhouBian'
    }, {
      id: 1,
      icon: '../../images/ZhuSu.png',
      color: 'white',
      name: '住宿',
      bindtap: 'ZhuSu'
    }, {
      id: 2,
      icon: '../../images/ZhiYeBu.png',
      color: 'white',
      name: '职业规划',
      bindtap: 'ZhiYeGuiHua'
    }, {
      id: 3,
      icon: '../../images/XuanKe.png',
      color: 'white',
      name: '选课',
      bindtap: 'XuanKe'
    }, {
      id: 4,
      icon: '../../images/JieJi.png',
      color: 'white',
      name: '接机',
      bindtap: 'JieJi'
    }, {
      id: 5,
      icon: '../../images/YinHang.png',
      color: 'white',
      name: '银行',
      bindtap: 'YinHang'
    }],
  },

  XiaoYuanZhouBian: function () {
    wx.navigateTo({
      url: '../freshman_manual/XiaoYuanZhouBian/XiaoYuanZhouBian'
    })
  },

  ZhuSu: function () {
    wx.navigateTo({
      url: '../freshman_manual/ZhuSu/homepage'
    })
  },

  ZhiYeGuiHua: function () {
    wx.navigateTo({
      url: '../freshman_manual/ZhiYeGuiHua/ZhiYeGuiHua'
    })
  },

  XuanKe: function () {
    wx.navigateTo({
      url: '../freshman_manual/XuanKe/XuanKe'
    })
  },

  JieJi: function () {
    wx.navigateTo({
      url: '../freshman_manual/JieJi/JieJi'
    })
  },

  YinHang: function () {
    wx.navigateTo({
      url: '../freshman_manual/YinHang/YinHang'
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