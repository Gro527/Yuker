// pages/index/step-2/step-2.js
// var util = require('/utils/util.js')
// var formatLocation = util.formatLocation
  //  var text= document.getElementById('text').value;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    label1: [{
      n1: "咖啡厅"
    }, {
      n2: "烧烤"
    }, {
      n3: "面包甜点"
    }, {
      n4: "火锅"
    }, {
      n5: "小吃快餐"
    }, {
      n6: "自助餐"
    }, {
      n7: "日本菜"
    }, {
      n8: "西餐"
    }, {
      n9: "北京菜"
    }, {
      n10: "韩国料理"
    }],
    label2: [{
      n11: "茶馆"
    }, {
      n12: "酒吧"
    }, {
      n13: "融合菜"
    }, {
      n14: "山西菜"
    }, {
      n15: "江西菜"
    }, {
      n16: "东南亚菜"
    }, {
      n17: "粤菜"
    }, {
      n18: "川菜"
    }, {
      n19: "海鲜"
    }, {
      n20: "小龙虾"
    }],
    label3: [{
      n21: "湘菜"
    }, {
      n22: "下午茶"
    }, {
      n23: "素菜"
    }, {
      n24: "云南菜"
    }, {
      n25: "新疆菜"
    }, {
      n26: "江浙菜"
    }, {
      n27: "人气餐厅"
    }, {
      n28: "东北菜"
    }, {
      n29: "俄罗斯菜"
    }, {
      n30: "粉面馆"
    }],


    clicktime: 0,
    title: "默认 ∨",
    dire: "∨",
    hiddenname_food: true,

    clickchange1: false,
    clickchange2: false,
    clickchange3: false,
    color1: 'floralwhite',
    color2: 'floralwhite',
    color3: 'floralwhite',

  },

  next3: function (e) {
    wx.navigateTo({
      url: '/pages/leader/step-4/step-4?text=' + this.data.text + '&addr=' + this.data.address + '&d1=' + this.data.d1 + '&d2=' + this.data.d2 + '&d3=' + this.data.d3
    })
  },

  tap: function (e) {
    this.setData({
      hiddenname_food: !this.data.hiddenname_food,
    })
  },

  get1: function (e) {
    this.setData({ clickchange1: !this.data.clickchange1 })

    if (this.data.clickchange1) {
      this.setData({
        color1: this.data.color1 = 'white',
        clicktime: this.data.clicktime += 1
      })
    }
    else {
      this.setData({
        color1: this.data.color1 = 'floralwhite',
        clicktime: this.data.clicktime -= 1
      })
    }
    if (this.data.clicktime == 0)
    { this.setData({ title: this.data.title = "默认 " + this.data.dire }) }
    if (this.data.clicktime == 1)
    { this.setData({ title: this.data.title = "咖啡厅 " + this.data.dire }) }
    if (this.data.clicktime > 1)
    { this.setData({ title: this.data.title = "已选: " + this.data.clicktime + " 项 " + this.data.dire }) }

  },

  get2: function (e) {
    this.setData({ clickchange2: !this.data.clickchange2 })

    if (this.data.clickchange2) {
      this.setData({
        color2: this.data.color2 = 'white',
        clicktime: this.data.clicktime += 1
      })
    }
    else {
      this.setData({
        color2: this.data.color2 = 'floralwhite',
        clicktime: this.data.clicktime -= 1
      })
    }
    if (this.data.clicktime == 0)
    { this.setData({ title: this.data.title = "默认 " + this.data.dire }) }
    if (this.data.clicktime == 1)
    { this.setData({ title: this.data.title = "烧烤 " + this.data.dire }) }
    if (this.data.clicktime > 1)
    { this.setData({ title: this.data.title = "已选: " + this.data.clicktime + " 项 " + this.data.dire }) }

  },

  get3: function (e) {
    this.setData({ clickchange3: !this.data.clickchange3 })

    if (this.data.clickchange3) {
      this.setData({
        color3: this.data.color3 = 'white',
        clicktime: this.data.clicktime += 1
      })
    }
    else {
      this.setData({
        color3: this.data.color3 = 'floralwhite',
        clicktime: this.data.clicktime -= 1
      })
    }
    if (this.data.clicktime == 0)
    { this.setData({ title: this.data.title = "默认 " + this.data.dire }) }
    if (this.data.clicktime == 1)
    { this.setData({ title: this.data.title = "面包甜点 " + this.data.dire }) }
    if (this.data.clicktime > 1)
    { this.setData({ title: this.data.title = "已选: " + this.data.clicktime + " 项 " + this.data.dire }) }

  },






  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      text: options.text,
      address: options.addr,
      d1: options.d1,
      d2: options.d2,
      d3: options.d3,

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