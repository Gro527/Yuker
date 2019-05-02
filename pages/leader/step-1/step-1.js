// pages/leader/step-1/step-1.js
const host = require('../../../host')
const map = require('../../../map')

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    program_name:"我的Yuker方案",
    hasLocation: false,
    info_food: "默认",
    hiddenname: true,
    color1: 'floralwhite',
    
    item: [
      { id: 1, name: 'step-1', addr:'/images/c-0.png' },
      { id: 2, name: 'step-2', addr: '/images/line.png' },
      { id: 3, name: 'step-3', addr: '/images/c-0.png' },
      { id: 4, name: 'step-3', addr:'/images/line.png' },
      { id: 5, name: 'step-3', addr: '/images/c-0.png' },
    ],
  
  },


  chooseLocation: function () {
    var that = this
    wx.chooseLocation({
      success: function (res) {
        that.setData({
          hasLocation: true,
          addr_longitude_latitude:[res.longitude,res.latitude],
          //addr_latitude:res.latitude,
          // location: formatLocation(res.longitude, res.latitude),
          locationAddress: res.address
        })
      }
    })
  },

  forcontent: function (e) {
    this.setData({
      program_name: e.detail.value,
    })
  },


  next: function () {
    if (!this.data.hasLocation && this.data.hasLocation) {
      wx.showToast({
        icon: 'none',
        title: '请选择您的位置！'
      });
    }
    else {
      wx.navigateTo({
        url: '/pages/leader/step-2/step-2'//?text='+this.data.text+'&addr='+this.data.locationAddress
      }),
      wx.setStorage({
        key: 'program_name',
        data: this.data.program_name,
      })
      wx.setStorage({
        key: 'addr',
        data: this.data.locationAddress,
      }),
      wx.setStorage({
        key: 'addr_long_lati',
        data: this.data.addr_longitude_latitude,
      })
    }

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getLocation({
      success: function(res){
        map.get_address_by_long_lati(
          {
            latitude:res.latitude,
            longitude:res.longitude
          },
          that
        )
      }
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