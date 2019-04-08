//app.js
const host = require('/host')
App({
  onLaunch: function () {
    // 展示本地存储能力as
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }

              var that = this
              // 登录
              wx.login({
                success: function (res) {
                  //发送请求
                  wx.request({
                    url: host.login_url, //接口地址
                    data: {
                      'code': res.code,
                      'userinfo': that.globalData.userInfo,
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

                    },
                    fail: function (res) {
                      console.log(res)
                    }
                  })
                }
              })
            }
          })
        }
      }
    })
  },
  
  globalData: {
    userInfo: null
  }
})