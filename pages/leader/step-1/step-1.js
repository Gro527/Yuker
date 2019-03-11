// pages/leader/step-1/step-1.js
var tcity = require("../../../utils/citys.js")
const county = ["附近", "热门商圈"]
const area = ["500m", "1km", "2km", "3km", "4km", "5km", "6km", "7km", "8km", "10km", "15km", "20km", "20km以上"]


Page({
  
  /**
   * 页面的初始数据
   */
  data: {
     where_go_array: county,
     where_go_area: area,
     
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


//跳转页面
5:function(e){
  wx.showToast({
    icon: 'none',
    title: '请完成本页填写！'
  });
},

3: function (e) {
    wx.showToast({
      icon: 'none',
      title: '请完成本页填写！'
    });
},

  chooseLocation: function () {
    var that = this
    wx.chooseLocation({
      success: function (res) {
        console.log(res)
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


  show_food_list: function (e) {
    var that = this;
    
    tcity.init(that);
    var cityData = that.data.cityData;

    for (let i = 0; i < cityData[0].sub[0].sub.length; i++) {
      county.push(cityData[0].sub[0].sub[i].name);
    }
    this.setData({ 
      hiddenname: !this.data.hiddenname ,
      where_go_array: county
    })
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
        key: 'text',
        data: this.data.text,
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
    
    wx.request({
     // url: "http://47.94.210.236:5555/dbtest",
      url: 'http://47.94.210.236:5555/api/link_type/all',//json数据地址
    
      success: function (result) {
        console.log('request success', result)
      },

      fail: function ({ errMsg }) {
        console.log('request fail', errMsg)
        /*self.setData({
          loading: false
        })*/
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