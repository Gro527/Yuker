
//index.js

//获取应用实例
const host = require('../../../../host')
var QQMap = require('../../../../libs/qqmap-wx-jssdk.js')
var QQMapSdk
var app = getApp()
Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,
    result:[]
  },

  onLoad: function () {
    var that = this;
    QQMapSdk = new QQMap({
      key: 'X5MBZ-WWM3Q-TT45A-G5VQO-DU34F-QKB2Q'
    })
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight,

        });
      }
    });
    
    
    var program_info = wx.getStorageSync('program_info')
    var result = program_info.submit_result
    this.setData({
      result:result,
    })



  },
  /**

     * 滑动切换tab

     */

  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },

  /**

   * 点击tab切换

   */

  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  daohang:function(e){
    var shop_name = e.currentTarget.dataset.dest
    QQMapSdk.search({
      keyword: shop_name,
      success: function (res) {
        console.log(res);
        wx.openLocation({
          latitude: res.data[0].location.lat,
          longitude: res.data[0].location.lng,
          name: shop_name
        })
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    });
  },

  final:function(e){
    var program_info = wx.getStorageSync('program_info')
    program_info.release_result = this.data.result[this.data.currentTab]
    wx.setStorage({
      key: 'program_info',
      data: program_info,
    })
    wx.request({
      url: host.leader_release_url,
      method:'POST',
      data:{
        'program_id':program_info.program_id,
        'release_result':program_info.release_result
      }
    })
    wx.navigateTo({
      url: '/pages/index/plan1/plan1_final/plan1_final',
    })

  }
})
