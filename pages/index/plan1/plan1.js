// pages/index/plan1/plan1.js
const host = require('../../../host')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    member_type:0,
    userid:[],
    userid_current:3
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
      this.setData({
        proid:options.proid,
        //设置成员类型：0未参与者，1为发起人，2为参与者
        // member_type:options.type
      })
    
      //当前用户id刷新storage
      wx.login({
        success: function (res) {
          //发送请求
          wx.request({
            url: host.login_url, //接口地址
            data:
              { 'code': res.code },
            header: {
              'content-type': 'application/json' //默认值
            },
            method: 'POST',
            success: function (res) {
              console.log(res)
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
    
    var that = this

     wx.getStorage({
      key: 'userid',
      success: function (res) {
        that.setData({
          userid_current: res.data
        })
      },
     })


    //判断当前用户类型所属（0未发起者，1为参与人，2为路人）
    if (that.data.userid_current = that.data.userid[0]){
      that.setData({
        member_type:0
      })
    }
    else if(that.data.userid_current in that.data.userid){
      that.setData({
        member_type: 1
      })
    }
    else {
      that.setData({
        member_type: 2
      })
    }


      wx.request({
        url: host.program_info_url,
        data:{'program_id': this.data.proid},
        method:'POST',
        header:{
          'content-type': 'application/json'
        },
        success: function(res){
          console.log(res.data)
          that.setData({
            time:res.data.time,
            members: res.data.members,
            userid: res.data.members[0].userid,
            location: res.data.members[0].location.location,
          })
          
          
        }
      })
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  confirm:function(){
    wx.navigateTo({
      url: '/pages/index/plan1/plan1_1/plan1_1'
      })
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
})