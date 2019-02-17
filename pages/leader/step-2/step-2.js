// pages/leader/step-2/step-2.js
Page({

  data: {
    clicktime :0,
    link:["美食","娱乐","运动","购物","酒店","丽人"],
    style: [{ name: "家庭", state: false }, { name: "同学", state: false }, { name: "情侣", state: false }, { name: "同事", state: false }, { name: "商务", state: false }, { name: "温馨", state: false }],

    link_choose:[],
    style_choose:[ ],
   

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
  
  //var link_up = "link_choose[" + this.data.clicktime + "]";
  if(this.data.clicktime<3){
  this.data.link_choose.push(this.data.link[linkid])

  this.setData({
    link_choose:this.data.link_choose
  })
  
  }

  this.data.clicktime++;
  if (this.data.clicktime > 2) { this.data.clicktime = 3; }
  console.log(this.data.link_choose+this.data.clicktime);

},

remove:function(e){
  var removeid = e.target.id;
  this.data.link_choose.splice(removeid,1);
  this.setData({
    link_choose: this.data.link_choose
  })

  this.data.clicktime--;
  if (this.data.clicktime < 0) { this.data.clicktime = 0; }
  console.log(this.data.link_choose);

},

display:function(e){
  var styleId = e.target.id;
  var style_up = "style[" + styleId + "].state";
  

  this.setData({
    [style_up]: !this.data.style[styleId].state,
  })
  this.setData({
    clickstate: this.data.style[styleId].state,
    style_choose:[]//清空
  })
for(let i=0;i<this.data.style.length;i++){
  if (this.data.style[i].state){this.data.style_choose.push(this.data.style[i].name)} //每次点击事件重新获取风格标签

}

  console.log(this.data.style_choose);

},


  next: function (e) {
    wx.navigateTo({
      url: '/pages/leader/step-3/step-3?link_choose='+JSON.stringify(this.data.link_choose),
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