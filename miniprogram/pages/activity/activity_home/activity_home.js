/**
 * connect DB to the database named "activities"
 */
const DB = wx.cloud.database().collection("activities")

//refresh 为当前用户刷新了多少页的计数，每下拉至底部一次，refresh都会加1
var refresh = 1;
//numOfCont 为每次刷新会显示多少个活动
var numOfCont = 3;

var util = require('../../../utils/util.js')
Page({

  /**
   * Page initial data
   */
  data: {
    activity: [],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    /**
     * store data to activity
     */
    refresh = 1
    DB.get({
      success: res => {
        //将云端储存的data.item转为String, 移除秒数
        var modified = util.modifyData(res.data)
        var data = modified.slice(0, refresh * numOfCont)
        this.setData({
          activity: data
        })
      }
    })
  },

  queryItemClick: function(e) {
    var id = e.target.dataset.id
    wx.navigateTo({
      url: '../activity_template/activity_template?id=' + id
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
    DB.get({
      success: res => {
        if ((res.data.length / numOfCont) < refresh){
          wx.showToast({title:'已显示所有活动',icon:'none'})
          return
        }
        refresh++
        var modified = util.modifyData(res.data)
        var data = modified.slice(0, refresh * numOfCont)
        this.setData({
          activity: data
        })
      }
    })
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})