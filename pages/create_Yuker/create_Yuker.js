const host = require('../../host')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    

   
  },
  /**
  * 生命周期函数--监听页面加载
  */

//onLoad当页面加载时执行的方法
onLoad: function(e) {
  var progressNum = 0; 
    // progressNum
    var that = this;
    var timer = setInterval(function () {
      progressNum++;
      //当进度条为100时清除定时任务
      if (progressNum >= 100) {
        clearInterval(timer);
      }
      //并且把当前的进度值设置到progress中
      that.setData({
        progress: progressNum
      })
    })
  },



  percentor: function () {
    wx.navigateTo({
      url: '/pages/index/index'
    })
  },

  creator: function (e) {
    var userid = wx.getStorageSync('userid')
    wx.request({
      url: host.userinfo_url,
      method: 'POST',
      data:{
        'userinfo':e.detail.userInfo,
        'userid':userid
      },
      success: function (res){
      }
    })
    wx.navigateTo({
      url: '/pages/leader/step-1/step-1'
    })
  },

 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
},



)