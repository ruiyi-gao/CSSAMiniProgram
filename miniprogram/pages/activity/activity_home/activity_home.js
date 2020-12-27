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
        this.setData({
          activity: res.data
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