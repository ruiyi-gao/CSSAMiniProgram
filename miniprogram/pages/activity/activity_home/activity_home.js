/**
 * connect DB to the database named "activities"
 */
const DB = wx.cloud.database().collection("activities")
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
    DB.get({
      success: res => {
        //将云端储存的data.item转为String, 移除秒数
        var modified = res.data
        for (let i in res.data) {
          modified[i].time = res.data[i].time.toLocaleString()
          modified[i].time = modified[i].time.substring(0, modified[i].time.length - 3)
        }
        this.setData({
          activity: modified
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

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})