// pages/index/plan1/plan1_final/plan1_final.js
const host = require('../../../../host')
const map = require('../../../../map')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comment_show: false,
    comment_finished: false,
    commentText: "",
    commentStars: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var program_id = options.program_id
    if(options.first == "true")
    {
      wx.showModal({
        title: '方案已发布',
        content: '方案已发布，快去分享给好友吧',
        confirmText: "确定",
        showCancel:false,
      })
    }
    var that = this
    wx.request({
      url: host.program_info_url,
      method: 'POST',
      data:{
        program_id: program_id
      },
      success: function(res){
        that.setData({
          program_info: res.data
        })
      }
    })
  },

  showCommentArea: function(){
    this.setData({
      comment_show: !this.data.comment_show,
    })
  },

  confirmComment: function(e){
    var comment = e.detail.value
    this.setData({
      commentText: comment,
    })
  },

  submitComment: function(){
    this.setData({
      comment_finished:true,
      comment_show:false
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

  },

  // 导航
  daohang: function(e) {
    var shop_name = e.currentTarget.dataset.dest
    map.search_by_name(shop_name)
  },


  return:function(e){
    wx.reLaunch({
        url: '/pages/index/index',
    })
  }
})