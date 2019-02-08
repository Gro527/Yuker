// pages/leader/step-2/step-2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenName1: true,
    hiddenName2: true,
    hiddenName3: true,
    hiddenName4: true,
    hiddenName5: true,
    hiddenName6: true,
    clicktime: 0,
    link1: "",
    link2: "",
    link3: "",

   type1:true,
   type2: true,
   type3: true,
   type4: true,
   type5: true,
   type6: true,

    item: [
      { id: 1, name: 'step-1', addr: '/images/num.png' },
      { id: 2, name: 'step-2', addr: '/images/line.png' },
      { id: 3, name: 'step-3', addr: '/images/num_k.png' },
      { id: 4, name: 'step-3', addr: '/images/line.png' },
      { id: 5, name: 'step-3', addr: '/images/num_k.png' },
    ],

  },
/*
1:function(e){
  wx.navigateBack({
    delta:1
  })
},

3: function (e) {
    wx.navigateTo({
      url: '/pages/leader/step-3/step-3?text=' + this.data.text + '&addr=' + this.data.addr + '&d1=' + this.data.link1 + '&d2=' + this.data.link2 + '&d3=' + this.data.link3
    })
  },
*/

  showa:function(e){
   this.setData({type1:!this.data.type1})
  },
  showb: function (e) {
    this.setData({ type2: !this.data.type2 })
  },
  showc: function (e) {
    this.setData({ type3: !this.data.type3 })
  },
  showd: function (e) {
    this.setData({ type4: !this.data.type4 })
  },
  showe: function (e) {
    this.setData({ type5: !this.data.type5 })
  },
  showf: function (e) {
    this.setData({ type6: !this.data.type6 })
  },




  show1: function (e) {
    this.setData({ clicktime: this.data.clicktime += 1 })

    if (this.data.clicktime == 1) {
      this.setData({ link1: this.data.link1 = "美食" })
    }

    if (this.data.clicktime == 2) {
      this.setData({ link2: this.data.link2 = "美食" })
    }

    if (this.data.clicktime == 3) {
      this.setData({ link3: this.data.link3 = "美食" })
    }
  },

  show2: function (e) {
    this.setData({

      clicktime: this.data.clicktime += 1
    })
    if (this.data.clicktime == 1) {
      this.setData({ link1: this.data.link1 = "娱乐" })
    }

    if (this.data.clicktime == 2) {
      this.setData({ link2: this.data.link2 = "娱乐" })
    }

    if (this.data.clicktime == 3) {
      this.setData({ link3: this.data.link3 = "娱乐" })
    }
  },

  show3: function (e) {
    this.setData({

      clicktime: this.data.clicktime += 1
    })
    if (this.data.clicktime == 1) {
      this.setData({ link1: this.data.link1 = "运动" })
    }

    if (this.data.clicktime == 2) {
      this.setData({ link2: this.data.link2 = "运动" })
    }

    if (this.data.clicktime == 3) {
      this.setData({ link3: this.data.link3 = "运动" })
    }
  },

  show4: function (e) {
    this.setData({

      clicktime: this.data.clicktime += 1
    })
    if (this.data.clicktime == 1) {
      this.setData({ link1: this.data.link1 = "购物" })
    }

    if (this.data.clicktime == 2) {
      this.setData({ link2: this.data.link2 = "购物" })
    }

    if (this.data.clicktime == 3) {
      this.setData({ link3: this.data.link3 = "购物" })
    }
  },

  show5: function (e) {
    this.setData({

      clicktime: this.data.clicktime += 1
    })
    if (this.data.clicktime == 1) {
      this.setData({ link1: this.data.link1 = "酒店" })
    }

    if (this.data.clicktime == 2) {
      this.setData({ link2: this.data.link2 = "酒店" })
    }

    if (this.data.clicktime == 3) {
      this.setData({ link3: this.data.link3 = "酒店" })
    }
  },

  show6: function (e) {
    this.setData({

      clicktime: this.data.clicktime += 1
    })
    if (this.data.clicktime == 1) {
      this.setData({ link1: this.data.link1 = "丽人" })
    }

    if (this.data.clicktime == 2) {
      this.setData({ link2: this.data.link2 = "丽人" })
    }

    if (this.data.clicktime == 3) {
      this.setData({ link3: this.data.link3 = "丽人" })
    }
  },


  next: function (e) {
    wx.navigateTo({
      url: '/pages/leader/step-3/step-3?text=' + this.data.text + '&addr=' + this.data.addr + '&d1=' + this.data.link1 + '&d2=' + this.data.link2 + '&d3=' + this.data.link3+'&ct='+this.data.clicktime
    })
  },





























  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      text: options.text,
      address: options.addr,
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