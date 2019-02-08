// pages/index/step-2/step-2.js
// var util = require('/utils/util.js')
// var formatLocation = util.formatLocation
  //  var text= document.getElementById('text').value;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    label1: [{ name: "咖啡厅", state:false }, { name: "烧烤", state:false }, { name: "面包甜点", state:false }, { name: "火锅", state:false }, { name: "小吃快餐", state:false }, { name: "自助餐", state:false }, { name: "日本菜", state:false }, { name: "西餐", state:false }, { name: "北京菜", state:false }, { name: "韩国料理", state:false }],

 
    label2: ["茶馆", "酒吧", "融合菜", "江西菜", "东南亚菜", "粤菜", "川菜", "海鲜", "小龙虾","徐茈球"]
     ,
    label3: ["湘菜", "下午茶", "素菜", "云南菜", "新疆菜", "江浙菜", "人气餐厅", "东北菜", "俄罗斯菜","粉面馆"]
     ,

    clicktime22: 0,
    title: "默认 ∨",
    dire: "∨",
    hiddenname_food: true,
  
    color: 'floralwhite',


    item: [
      { id: 1, name: 'step-1', addr: '/images/num.png' },
      { id: 2, name: 'step-2', addr: '/images/line.png' },
      { id: 3, name: 'step-3', addr: '/images/num.png' },
      { id: 4, name: 'step-3', addr: '/images/line.png' },
      { id: 5, name: 'step-3', addr: '/images/num_k.png' },
    ],
  


  },

  get: function (e) {
    var labelId = e.target.id;
    var clickstate;
    var label1_up= "label1["+labelId+"].state";

    this.setData({
      [label1_up]: !this.data.label1[labelId].state,
     })
    this.setData({
      clickstate: this.data.label1[labelId].state
    })
    console.log(this.data.clickstate);
    

    if (this.data.clickstate) {
      this.setData({
        //color: this.data.color = 'white',
        clicktime22: this.data.clicktime22 += 1
      })
    }
    else {
      this.setData({
        //color: this.data.color = 'floralwhite',
        clicktime22: this.data.clicktime22 -= 1
      })
    }
    if (this.data.clicktime22 == 0) { this.setData({ title: this.data.title = "默认 " + this.data.dire }) }
    if (this.data.clicktime22 > 0) { this.setData({ title: this.data.title = "已选: " + this.data.clicktime22 + " 项 " + this.data.dire }) }

  },

  next3: function (e) {
    wx.navigateTo({
      url: '/pages/leader/step-4/step-4?text=' + this.data.text + '&addr=' + this.data.address + '&d1=' + this.data.d1 + '&d2=' + this.data.d2 + '&d3=' + this.data.d3+'&ct='+this.data.ct
    })
  },

  tap: function (e) {
    this.setData({
      hiddenname_food: !this.data.hiddenname_food,
    })
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
      ct: options.ct

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