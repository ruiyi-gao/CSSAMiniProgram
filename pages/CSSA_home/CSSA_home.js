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

    iconList: [{
      icon: '../../images/ZhuXiTuan.png',
      color: 'white',
      name: '主席团',
      bindtap: 'redirect1'
    }, {
      icon: '../../images/JiShuBu.png',
      color: 'white',
      name: '技术部',
      bindtap: 'redirect2'
    }, {
      icon: '../../images/QiHuaBu.png',
      color: 'white',
      name: '企划部',
      bindtap: 'redirect3'
    }, {
      icon: '../../images/ZhiYeBu.png',
      color: 'white',
      name: '职业部',
      bindtap: 'redirect4'
      }, {
      icon: '../../images/WaiLianBu.png',
      color: 'white',
      name: '外联部',
      bindtap: 'redirect5'
      }, {
      icon: '../../images/NeiLianBu.png',
      color: 'white',
      name: '内联部',
      bindtap: 'redirect6'
      }, {
      icon: '../../images/XuanChuanBu.png',
      color: 'white',
      name: '宣传部',
      bindtap: 'redirect7'
      }, {
      icon: '../../images/CaiWuBu.png',
      color: 'white',
      name: '财务部',
      bindtap: 'redirect8'
      }, {
        icon: '../../images/ZhuXiTuan.png',
        color: 'olive',
        name: '选课',
        bindtap: 'redirect4'
      }],
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