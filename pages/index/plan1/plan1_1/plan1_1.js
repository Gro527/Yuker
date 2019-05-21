
//index.js

//获取应用实例
const host = require('../../../../host')
const map = require('../../../../map.js')
var app = getApp()
Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    // 当前tab
    currentTab: 0,
    result:[]
  },

  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight,
        });
      }
    });
    var that = this;
    var program_info = wx.getStorageSync('program_info')
    var result = program_info.submit_result
    this.setData({
      result:result,
      program_id:program_info.program_id
    })
  },
  onShow: function () { this.onLoad() },

// 滑动切换tab
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },

// 点击切换按钮
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
    map.search_by_name(shop_name)

  },
  detail:function(e){
    var url = e.currentTarget.dataset.url
    wx.setClipboardData({
      data: url,
    })
    wx.showModal({
      title: '链接已复制',
      content: '由于微信限制，无法直接打开页面，请使用其他浏览器打开',
      showCancel: false
    })
  },


  final:function(e){
    var program_id = this.data.program_id
    var release_result = this.data.result[this.data.currentTab]
    wx.request({
      url: host.leader_release_url,
      method:'POST',
      data:{
        'program_id':program_id,
        'release_result':release_result
      }
    })
    wx.redirectTo({
      url: '/pages/index/plan1/plan1_final/plan1_final?program_id='+program_id+'&first=true',
    })

  }
})