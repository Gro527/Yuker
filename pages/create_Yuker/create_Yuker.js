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
    // var userid = wx.getStorageSync('userid')
    // wx.request({
    //   url: host.userinfo_url,
    //   method: 'POST',
    //   data:{
    //     'userinfo':e.detail.userInfo,
    //     'userid':userid
    //   },
    //   success: function (res){
    //   }
    // })
    // wx.navigateTo({
    //   url: '/pages/leader/step-1/step-1'
    // })
    if(wx.getStorageSync('login_state') == 0)
    {
      wx.login({
        success: function (res) {
          //发送请求
          wx.request({
            url: host.login_url, //接口地址
            data: {
              'code': res.code,
              'userinfo': e.detail.userInfo,
            },
            header: {
              'content-type': 'application/json' //默认值
            },
            method: 'POST',
            success: function (res) {
              wx.setStorage({
                key: 'openid',
                data: res.data.openid,
              })
              wx.setStorage({
                key: 'userid',
                data: res.data.id,
              })
              wx.setStorage({
                key: 'session_key',
                data: res.data.session_key,
              })
              wx.setStorage({
                key: 'login_state',
                data: 1,
              })
              wx.navigateTo({
                url: '/pages/leader/step-1/step-1'
              })
            },
            fail: function (res) {
              console.log(res)
            }
          })
        }
      })
    }
    else{
      wx.navigateTo({
        url: '/pages/leader/step-1/step-1'
      })
    }


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