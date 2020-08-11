// pages/CSSA_home/CSSA_home.js
Page({

  /**
   * Page initial data
   */
  data: {
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
      }, {
        id: 8,
        icon: '../../images/FuShuSheTuan.png',
        color: 'white',
        name: '附属社团',
        bindtap: 'FuShuSheTuan'
      }],
  },

  ZhuXiTuan: function () {
    wx.navigateTo({
      url: '../CSSA/ZhuXiTuan/ZhuXiTuan'
    })
  },

  JiShuBu: function () {
    wx.navigateTo({
      url: '../CSSA/JiShuBu/JiShuBu'
    })
  },

  QiHuaBu: function () {
    wx.navigateTo({
      url: '../CSSA/QiHuaBu/QiHuaBu'
    })
  },

  ZhiYeBu: function () {
    wx.navigateTo({
      url: '../CSSA/ZhiYeBu/ZhiYeBu'
    })
  },

  NeiLianBu: function () {
    wx.navigateTo({
      url: '../CSSA/NeiLianBu/NeiLianBu'
    })
  },

  WaiLianBu: function () {
    wx.navigateTo({
      url: '../CSSA/WaiLianBu/WaiLianBu'
    })
  },

  CaiWuBu: function () {
    wx.navigateTo({
      url: '../CSSA/CaiWuBu/CaiWuBu'
    })
  },

  XuanChuanBu: function () {
    wx.navigateTo({
      url: '../CSSA/XuanChuanBu/XuanChuanBu'
    })
  },

  FuShuSheTuan: function () {
    wx.navigateTo({
      url: '../CSSA/FuShuSheTuanHome/FuShuSheTuanHome',
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