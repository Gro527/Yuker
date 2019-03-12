// pages/index/plan1/plan1.js
const host = require('../../../host')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    member_type:0
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
      var that = this
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