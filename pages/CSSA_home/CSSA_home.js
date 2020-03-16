// pages/CSSA_home/CSSA_home.js
Page({

  /**
   * Page initial data
   */
  data: {
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

    gridCol: 2,
    cardCur: 0,
    departmentList: [{
        id: 0,
        icon: '../../images/ZhuXiTuan.png',
        color: 'white',
        name: '主席团',
        bindtap: 'ZhuXiTuan'
    }, {
        id: 1,
        icon: '../../images/JiShuBu.png',
        color: 'white',
        name: '技术部',
        bindtap: 'JiShuBu'
    }, {
        id: 2,
        icon: '../../images/QiHuaBu.png',
        color: 'white',
        name: '企划部',
        bindtap: 'QiHuaBu'
    }, {
        id: 3,
        icon: '../../images/ZhiYeBu.png',
        color: 'white',
        name: '职业部',
        bindtap: 'ZhiYeBu'
      }, {
        id: 4,
        icon: '../../images/WaiLianBu.png',
        color: 'white',
        name: '外联部',
        bindtap: 'WaiLianBu'
      }, {
        id: 5,
        icon: '../../images/NeiLianBu.png',
        color: 'white',
        name: '内联部',
        bindtap: 'NeiLianBu'
      }, {
        id: 6,
        icon: '../../images/XuanChuanBu.png',
        color: 'white',
        name: '宣传部',
        bindtap: 'XuanChuanBu'
      }, {
        id: 7,
        icon: '../../images/CaiWuBu.png',
        color: 'white',
        name: '财务部',
        bindtap: 'CaiWuBu'
      }],
  },

  ZhuXiTuan: function () {
    wx.redirectTo({
      url: '../CSSA/ZhuXiTuan/ZhuXiTuan'
    })
  },

  JiShuBu: function () {
    wx.redirectTo({
      url: '../CSSA/JiShuBu/JiShuBu'
    })
  },

  QiHuaBu: function () {
    wx.redirectTo({
      url: '../CSSA/QiHuaBu/QiHuaBu'
    })
  },

  ZhiYeBu: function () {
    wx.redirectTo({
      url: '../CSSA/ZhiYeBu/ZhiYeBu'
    })
  },

  NeiLianBu: function () {
    wx.redirectTo({
      url: '../CSSA/NeiLianBu/NeiLianBu'
    })
  },

  WaiLianBu: function () {
    wx.redirectTo({
      url: '../CSSA/WaiLianBu/WaiLianBu'
    })
  },

  CaiWuBu: function () {
    wx.redirectTo({
      url: '../CSSA/CaiWuBu/CaiWuBu'
    })
  },

  XuanChuanBu: function () {
    wx.redirectTo({
      url: '../CSSA/XuanChuanBu/XuanChuanBu'
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