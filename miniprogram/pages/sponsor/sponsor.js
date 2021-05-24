// pages/sponsor/sponsor.js
const d = wx.cloud.database()
/** Sponsorship
  * index : 广告类型
  * 0     : 吃喝玩乐
  * 1     : 选课/学习
  * 2     : 银行
  * 3     : 职业规划
  * 4     : 住宿
  */

Page({

  /**
   * Page initial data
   */
  data: {
    //name of sponsor 例子：中国电信美洲公司
    name: "",
    logo: "",
    contact: "",
    address: "",
    website: "",
    article:"",
    bindtap: "toWeb",
    //branding image object
    branding: {
      type: 'image',
      url: ''
    },
    pictures: [{
      id: 0,
      type: 'image',
      url: ''
    }]
  },

  toWeb: function () {
    wx.navigateTo({
      url: 'https://www.ctexcel.us/'
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  /*
  onLoad: function (options) {
    d.collection("sponsor_info").doc(id).get({
      success: res => {
        this.setData({
          name: res.data.name,
          contact: res.data.contact,
          address: res.data.address,
          website: res.data.website,
        })
      }
    })
  },*/
  onLoad: function (options) {
    var id = options.id
    d.collection("sponsor_info").get({
      success: res => {
        this.setData({
          name: res.data[id].name,
          logo: res.data[id].logo,
          contact: res.data[id].contact,
          address: res.data[id].address,
          website: res.data[id].website,
          article: res.data[id].article,
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