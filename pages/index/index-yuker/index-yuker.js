// pages/index/index-yuker/index-yuker.js
const host = require('../../../host')
Page({

  /**
   * 页面的初始数据
   */
  data: {
  currentTab:0,
  show:[],
  leader_program:[],
  member_program:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var userid = wx.getStorageSync('userid')
    wx.request({
      url: host.leader_history_url,
      data:{"userid":userid},
      method:'POST',
      success: function(res){
        for(var program in res.data){
          var program_info = {}
          program_info.id = res.data[program].id
          program_info.name = res.data[program].program_name
          program_info.time = res.data[program].datetime
          program_info.status = res.data[program].submit_state
          program_info.type = "0"
          var name_leader_program = "leader_program["+program+"]"
          that.setData({
              [name_leader_program]:program_info
          })
        }
        that.setData({
          show:that.data.leader_program
        })
      }
    })
    wx.request({
      url: host.member_history_url,
      data:{"userid":userid},
      method:'POST',
      success:function(res){
        for (var program in res.data) {
          var program_info = {}
          program_info.id = res.data[program].id
          program_info.name = res.data[program].name
          program_info.time = res.data[program].datetime
          program_info.type = "1"
          var name_member_program = "member_program[" + program + "]"
          that.setData({
            [name_member_program]: program_info
          })
        }
      }
    })
  },

  switchNav: function(e){
    var page = this;
    var index = e.target.dataset.current;
    if(this.data.currentTab == index){
      return false;
    } else{
      page.setData({ currentTab: index});
    }
    if(this.data.currentTab == 0){
      this.setData({
        show:this.data.leader_program
      })
    }
    else{
      this.setData({
        show:this.data.member_program
      })
    }
  },



  plan1:function(options){
    var program_id = options.currentTarget.dataset.program_id
    wx.navigateTo({
      url: '/pages/index/plan1/plan1?proid='+program_id,
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
})