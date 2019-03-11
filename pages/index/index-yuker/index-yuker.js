// pages/index/index-yuker/index-yuker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  currentTab:0,
  coupons:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var coupons=this.loadCoupons(0);
     this.setData({coupons:coupons})  ;
  },

  switchNav: function(e){
    var page = this;
    var index = e.target.dataset.current;
    if(this.data.currentTab == index){
      return false;
    } else{
      page.setData({ currentTab: index});
    }
    var coupons = this.loadCoupons(index);
    page.setData({coupons:coupons});
  },
  loadCoupons:function(flag){
    var coupons = new Array();
    var coupon = new Object();
    coupon.id = "1";

    coupon.name = "同学liuneng聚会";
    coupon.time = "2019.01.01";
    coupon.status = "已完成";
    coupon.type = "0";
    coupons.push(coupon);

    var coupon2 = new Object();
    coupon2.id = "2";

    coupon2.name = "朋友聚会";
    coupon2.time = "2019.01.01";
    coupon2.status = "已完成";
    coupon2.type = "0";
    coupons.push(coupon2);

    var coupon3 = new Object();
    coupon3.id = "3";
    coupon3.count = "三";
    coupon3.name = "亲hehehehehheh人聚会";
    coupon3.time = "2019.03.01";
    coupon3.status = "未完成";
    coupon3.type = "0";
    coupons.push(coupon3);

    var coupon4 = new Object();
    coupon4.id = "4";
    coupon4.count = "四";
    coupon4.name = "基友聚会";
    coupon4.time = "2019.01.01";
    coupon4.status = "已完成";
    coupon4.type = "0";
    coupons.push(coupon4);

    var coupon5 = new Object();
    coupon5.id = "5";
    coupon5.count = "一";
    coupon5.name = "基友聚会";
    coupon5.time = "2019.01.01";
    coupon5.status = "已完成";
    coupon5.type = "1";
    coupons.push(coupon5);

    var coupon6 = new Object();
    coupon6.id = "6";
    coupon6.count = "二";
    coupon6.name = "基友聚会";
    coupon6.time = "2019.01.01";
    coupon6.status = "已完成";
    coupon6.type = "1";
    coupons.push(coupon6);

    var coupon7 = new Object();
    coupon7.id = "7";
    coupon7.count = "三";
    coupon7.name = "基友聚会";
    coupon7.time = "2019.02.01";
    coupon7.status = "已完成";
    coupon7.type = "1";
    coupons.push(coupon7);

    var coupon8 = new Object();
    coupon8.id = "8";
    coupon8.count = "四";
    coupon8.name = "这个方案名字有、长";
    coupon8.time = "2019.03.11";
    coupon8.status = "未完成";
    coupon8.type = "1";
    coupons.push(coupon8);

    var result = new Array();
    for(var i=0;i<coupons.length;i++){
      if(flag==coupons[i].type){
        result.push(coupons[i]);
      }
    }
    return result;
  },



  plan1:function(){
    wx.navigateTo({
      url: '/pages/index/plan1/plan1?proid=31',
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