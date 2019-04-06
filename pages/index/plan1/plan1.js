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
        program_id:options.program_id,
        //设置成员类型：0为发起者，1为参与人，2为路人
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
    wx.request({
      url: host.program_info_url,
      data:{'program_id': this.data.program_id},
      method:'POST',
      header:{
        'content-type': 'application/json'
      },
      success: function(res){
        console.log(res.data)
        wx.setStorage({
          key: 'program_info',
          data: res.data,
        })
        that.setData({
          time : res.data.time,
          name: res.data.program_name,
          members : res.data.members,
          userid_current : wx.getStorageSync('userid'),
          release_state: res.data.release_state
        })


        var _member_type = 2
        //判断当前用户类型所属（0为发起者，1为参与人，2为路人）
        if (that.data.userid_current == that.data.members[0].userid) {
          _member_type = 0
        }
        else {
          for (var i in that.data.members) {
            if (that.data.members[i] == that.data.userid_current) {
              _member_type = 1
            }
          }
        }
        that.setData({
          member_type: _member_type
        })

      }
    })
      



  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  submit:function(){
    wx.request({
      url: host.leader_submit_url+this.data.program_id,
      method:'GET',
      success(res){
        var program_info = wx.getStorageSync('program_info')
        program_info.submit_result = res.data
        wx.setStorage({
          key: 'program_info',
          data: program_info,
        })
        wx.navigateTo({
          url: '/pages/index/plan1/plan1_1/plan1_1'
        })

      }
    })
  },

  join: function () {
    var program_id = this.data.program_info.program_id
    wx.navigateTo({
      url: '/pages/member/member?program_id='+program_id
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