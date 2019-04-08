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
        var program = res.data
        //若方案已发布，则直接进入发布结果页面
        if(res.data.release_state == 1)
        {
          wx.request({
            url: host.release_result_url,
            method: 'POST',
            data: { "program_id": res.data.program_id },
            success: function (res) {
              program.release_result = res.data
              wx.setStorage({
                key: 'program_info',
                data: program,
              })
            }
          })
          wx.reLaunch({
            url: '/pages/index/plan1/plan1_final/plan1_final',
          })
        }
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

  join: function (e) {
    var program_id = this.data.program_id
    var userid = wx.getStorageSync('userid')
    wx.request({
      url: host.userinfo_url,
      method: 'POST',
      data: {
        'userinfo': e.detail.userInfo,
        'userid': userid
      },
      success: function(res){
        wx.navigateTo({
          url: '/pages/member/member?program_id=' + program_id
        })
      }
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