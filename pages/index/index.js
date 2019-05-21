//index.js
//获取应用实例
const host = require('../../host')
const app = getApp()

Page({
  data: {
    hiddenModal:true
    // // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
  },
  //事件处理函数
  clickme: function (e) {
    var userid = wx.getStorageSync('userid')
    wx.request({
      url: host.userinfo_url,
      method: 'POST',
      data: {
        'userinfo': e.detail.userInfo,
        'userid': userid
      },
      success: function(){
        wx.navigateTo({
          url: '/pages/index/index-yuker/index-yuker'
        })
      }
    })
  },

  introduction: function () {
    wx.navigateTo({
      url: '/pages/index/introduction/introduction'
    })
  },

  aboutus: function () {
    wx.navigateTo({
      url: '/pages/index/aboutus/aboutus'
    })
  },

  creator: function () {
    wx.navigateTo({
      url: '/pages/create_Yuker/create_Yuker'
    })
  },

  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  /*onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
        
      }
      this.sendInfo()
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },*/
  onLoad:function(){
   
      },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
   
  },

  collect:function(){
    wx.navigateTo({
      url: '/pages/index/collection/collection',
    })
  },

  feedback: function () {
    this.setData({
      hiddenModal: !this.data.hiddenModal
    })
  },

  feedback: function () {
      this.setData({
        hiddenModal: !this.data.hiddenModal
      })
  },

  listenerCancel: function () {
    this.setData({
      hiddenModal: true
    });
  },

  //确认
  listenerConfirm: function () {
    this.setData({
      hiddenModal: true
    })
  },
  onShareAppMessage: function (e) {

  },



})



