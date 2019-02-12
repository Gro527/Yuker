// pages/leader/step-2/step-2.js
var clicktime=0;
var link_choose = new Array();
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
    
    link:["美食","娱乐","运动","购物","酒店","丽人"],
   

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

show:function(e){
  var linkid = e.target.id;
  
  var link_up = "link_choose[" + clicktime + "]";
  this.setData({
    [link_up]: this.data.link[linkid],
  })
  clicktime++;
  if (clicktime > 2) { clicktime = 2; }
  console.log(this.data.link_choose);
},

remove:function(e){
  var removeid = e.target.id;
  link_choose.splice(0,1);//为啥不能删除
  console.log(this.data.link_choose);

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