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

    // Paragraphs
    paragraph1: null,
    paragraph2: null,
    paragraph3: null,
    paragraph4: null,
    paragraph5: null,
    paragraph6: null,
    paragraph7: null,

    // Images
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
    image6: null,

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
        // Replace \\n with \n so we can use \n in database
        var paragraphs = [];
        for (var i = 0; i < res.data[id].paragraphs.length; i++) {
          var p = res.data[id].paragraphs[i];
          if (p != null) {
            p = p.replace(/\\n/g,'\n')
          } else {
            p = ""
          }
          paragraphs.push(p);
        }

        this.setData({
          name: res.data[id].name.replace(/\\n/g,'\n'),
          logo: res.data[id].logo,

          paragraph1: paragraphs[0],
          paragraph2: paragraphs[1],
          paragraph3: paragraphs[2],
          paragraph4: paragraphs[3],
          paragraph5: paragraphs[4],
          paragraph6: paragraphs[5],
          paragraph7: paragraphs[6],

          image1: res.data[id].images[0],
          image2: res.data[id].images[1],
          image3: res.data[id].images[2],
          image4: res.data[id].images[3],
          image5: res.data[id].images[4],
          image6: res.data[id].images[5],
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