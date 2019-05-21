// pages/index/plan1/plan1.js
const host = require('../../../host')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    member_type:0,
    userid:[],
    userid_current:3,
    showProgressStatus: false,
    ok:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      program_id:options.program_id,
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
        that.setData({
          time : res.data.time,
          name: res.data.program_name,
          members : res.data.members,
          userid_current : wx.getStorageSync('userid'),
          submit_state: res.data.submit_state,
          release_state: res.data.release_state
        })
        
        console.log(res.data.members)
        console.log(res.release_state)

        var _member_type = 2
        //判断当前用户类型所属（0为发起者，1为参与人，2为路人）
        if (that.data.userid_current == that.data.members[0].userid) {
          _member_type = 0
        }
        else {
          for (var i in that.data.members) {
            if (that.data.members[i].userid == that.data.userid_current) {
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

  showProgress: function () {
    var showProgressStatus = !this.data.showProgressStatus
    var that = this

    /* 动画部分 */
    // 第1步：创建动画实例 
    var animation = wx.createAnimation({
      duration: 200,  //动画时长
      timingFunction: "ease", //线性
      delay: 0  //0则不延迟
    });

    // 第2步：这个动画实例赋给当前的动画实例
    this.animation = animation;

    // 第3步：执行第一组动画
    animation.opacity(0).rotateX(-100).step();

    // 第4步：导出动画对象赋给数据对象储存
    that.setData({
      animationData: animation.export()
    })

   // 第5步：设置定时器到指定时候后，执行第二组动画
    setTimeout(function () {
      // 执行第二组动画
      animation.opacity(1).rotateX(0).step();
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象
      that.setData({
        animationData: animation
      })
    })
    that.setData({
      showProgressStatus: showProgressStatus
    })
  },

  submit:function(){
    var that = this
    wx.showModal({
      title: '生成结果后将无法邀请新同伴',
      content: '是否继续？',
      showCancel: true,
      cancelText: "否",
      cancelColor: 'skyblue',
      confirmText: "是",
      confirmColor: 'skyblue',
      success: function (res) {
        if (res.cancel) {//点击取消,默认隐藏弹框
          
        } else {//点击确定
         
          that.showProgress()
         
          wx.request({
            url: host.leader_submit_url + that.data.program_id,
            method: 'GET',
            success(res) {
              var program_info = wx.getStorageSync('program_info')
              program_info.submit_result = res.data
              wx.setStorage({
                key: 'program_info',
                data: program_info,
              })
              wx.redirectTo({
                url: '/pages/index/plan1/plan1_1/plan1_1'
              })
              that.setData({
                showProgressStatus: false
              })
            }
          })

        }
      },
      fail: function (res) { },//接口调用失败的回调函数
      complete: function (res) { },//接口调用结束的回调函数（调用成功、失败都会执行）
    })
  },

  check: function(){
    var that = this
    wx.request({
      url: host.leader_submit_url + that.data.program_id,
      method: 'GET',
      success(res) {
        var program_info = wx.getStorageSync('program_info')
        program_info.submit_result = res.data
        wx.setStorage({
          key: 'program_info',
          data: program_info,
        })
        wx.redirectTo({
          url: '/pages/index/plan1/plan1_1/plan1_1'
        })
        that.setData({
          showProgressStatus: false
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


  backhome: function () {
    wx.reLaunch({
      url: '/pages/index/index',
    })
  },

  onShow: function () { this.onLoad({program_id:this.data.program_id}) },

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