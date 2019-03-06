// pages/leader/step-4/step-4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: [
      { id: 1, name: 'step-1', addr: '/images/c-1.png' },
      { id: 2, name: 'step-2', addr: '/images/line.png' },
      { id: 3, name: 'step-3', addr: '/images/c-1.png' },
      { id: 4, name: 'step-3', addr: '/images/line.png' },
      { id: 5, name: 'step-3', addr: '/images/c-1.png' },
    ],

    stepitems:[
      { id: 1,  addr: '/images/step.png' },
      { id: 2,  addr: '/images/step.png' },
      { id: 3,  addr: '/images/step.png' },
    ]
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this
    wx.getStorage({
      key: 'text',
      success: function(res) {
        console.log(res.data),
        that.setData({
          text:res.data
        })
      },
    })

    /*this.setData({
     // text: options.text,
      address: options.addr,
      d1: options.d1,
      d2: options.d2,
      d3: options.d3,
      ct: options.ct,
    })*/
  },


  myplan: function () {
    wx.redirectTo({
      url: '/pages/index/index?text=' + this.data.text,
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