// pages/leader/step-1/step-1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    where_go_array: ["附近", "热门商圈", "海淀区", "朝阳区", "西城区", "东城区"],
    // 选择位置
    hasLocation: false,
  // 出行范围
    label1: "附近",
    label2: "热门商圈",
    label3: "海淀区",
    label4: "朝阳区",
    label5: "西城区",
    label6: "东城区",
    label7: "昌平区",
    label8: "怀柔区",
    label9: "丰台区",
    label10: "石景山区",
    label11: "通州区",
    label12: "大兴区",
    label13: "顺义区",
    label14: "房山区",
    label15: "密云区",
    label16: "延庆区",
    label17: "门头沟",
    label18: "平谷区",

    labela: "",
    labelb: "",
    labelc: "",
    labeld: "",
    labele: "",

    info_food: "默认",
    hiddenname: false,
    color1: 'floralwhite',

  
   
  },

  chooseLocation: function () {
    var that = this
    wx.chooseLocation({
      success: function (res) {
        console.log(res)
        that.setData({
          hasLocation: true,
          // location: formatLocation(res.longitude, res.latitude),
          locationAddress: res.address
        })
      }
    })
  },

// show1:function(){
//   this.setData({
//     plain:this.data.plain=false,
//   })

// },
  item_clicked:function()
  {
    
  },

  show_food_list: function (e) {
    this.setData({ hiddenname: !this.data.hiddenname })
  },

  get1: function (e) {
    this.setData({
      info_food: this.data.info_food = "附近",
      labela: this.data.labela = "智能距离",
      labelb: this.data.labelb = "1000m",
      labelc: this.data.labelc = "3000m",
      labeld: this.data.labeld = "5000m",
      color1: this.data.color1 = 'whitesmoke',
    })
  },

  get2: function (e) {
    this.setData({ info_food: this.data.info_food = "热门商圈" })
  },

  get7: function (e) {
    this.setData({
      info_food: this.data.info_food = "昌平区"
    })
  },
  forcontent: function (e) {
    this.setData({
      text: e.detail.value,
    })
  },


  next: function () {
    if (!this.data.hasLocation) {
      wx.showToast({
        icon: 'none',
        title: '请选择您的位置！'
      });
    }
    else {
      wx.navigateTo({
        url: '/pages/leader/step-2/step-2?text='+this.data.text+'&addr='+this.data.locationAddress
      })
    }

  },

  // next: function () {
  //   wx.navigateTo({
  //     url: '/pages//step-2/step-2?d1='+this.data.link1+'&d2='+this.data.link2+'&d3='+this.data.link3+'&click='+this.data.clicktime
  //   })






























  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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