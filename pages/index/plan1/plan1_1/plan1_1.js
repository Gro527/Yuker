
//index.js

//获取应用实例

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
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight,

        });
      }
    });
    
    var result = []
    result = wx.getStorageSync('result')
    this.setData({
      result:result,
    })
    console.log(result)



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
    console.log(e)
   wx.showToast({
    icon: 'none',
    title: e.currentTarget.dataset.dest
  });
  },

  final:function(e){
    wx.navigateTo({
      url: '/pages/index/plan1/plan1_final/plan1_final',
    })

  }
})
