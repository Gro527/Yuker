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
    comment_list:[],

   //五星评分
   
    key: 0,
    two_2: 5

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var program_id = options.program_id
    //如果是第一次进入发布页面
    if(options.first == "true")
    {
      wx.showModal({
        title: '方案已发布',
        content: '方案已发布，快去分享给好友吧',
        confirmText: "确定",
        showCancel:false,
      })
    }
    //如果不是第一次进入发布页面，查询是否存在评论
    else
    {
      wx.request({
        url: host.get_comment_url,
        method: 'POST',
        data:{
          program_id: program_id
        },
        success: function(res){
          that.setData({
            comment_list: res.data
          })
          for(var user in res.data)
          {
            if(res.data[user].user_id == wx.getStorageSync('userid'))
              that.setData({
                comment_finished:true
              })
          }
        }
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


//星级评分
  in_xin: function (e) {
    var in_xin = e.currentTarget.dataset.in;
    var key;
    if (in_xin === 'selected') {
      key = Number(e.currentTarget.id);
    } else {
      key = Number(e.currentTarget.id) + this.data.key;
    }
    this.setData({
      key: key,
      two_2: 5 - key
    })
    console.log(this.data.key)
  },


  showCommentArea: function(){
    this.setData({
      comment_show: !this.data.comment_show,
    })
    console.log(this.data.comment_finished)
  },

  confirmComment: function(e){
    this.setData({
      commentText: e.detail.value,
    })
  },

  submitComment: function(){
    var that = this
    wx.request({
      url: host.upload_comment_url,
      method: 'POST',
      data:{
        user_id: wx.getStorageSync('userid'),
        program_id: that.data.program_info.program_id,
        stars: this.data.key,
        comment: that.data.commentText
      },
      success: function(res){
        that.setData({
          comment_finished: true,
          comment_show: false
        })
        that.onLoad({
          program_id: that.data.program_info.program_id
        })
      }
    })

    /*
    if (getCurrentPages().length != 0) {
      //刷新当前页面的数据
      getCurrentPages()[getCurrentPages().length - 1].onLoad()
    }
    */
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