// pages/index/step-2/step-2.js
// var util = require('/utils/util.js')
// var formatLocation = util.formatLocation
  //  var text= document.getElementById('text').value;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    link_choose:[],//初始定义为空
    label_1a:[ ],
    label_2a:[ ],
    label_3a:[ ],

    label_food: [{ name: "咖啡厅", state:false }, { name: "烧烤", state:false }, { name: "面包甜点", state:false }, { name: "火锅", state:false }, { name: "小吃快餐", state:false }, { name: "自助餐", state:false }, { name: "日本菜", state:false }, { name: "西餐", state:false }, { name: "北京菜", state:false }, { name: "韩国料理", state:false }],

    label_entertainment: [{ name: "电影", state: false }, { name: "狼人杀", state: false }, { name: "三国杀点", state: false }, { name: "打牌", state: false }, { name: "轰趴", state: false }, { name: "麻将", state: false }, { name: "唱歌", state: false }, { name: "私人影院", state: false }, { name: "徐子球", state: false }, { name: "球茈徐", state: false }],

    label_sport: [{ name: "篮球", state: false }, { name: "羽毛球", state: false }, { name: "兵乓球", state: false }, { name: "羽毛球", state: false }, { name: "网球", state: false }, { name: "橄榄球", state: false }, { name: "跆拳道", state: false }, { name: "健身房", state: false }, { name: "跑步", state: false }, { name: "滑雪", state: false }],

    label_shopping: [{ name: "电子", state: false }, { name: "美妆", state: false }, { name: "国朝", state: false }, { name: "日潮", state: false }, { name: "港潮", state: false }, { name: "美潮", state: false }, { name: "母婴", state: false }, { name: "零食", state: false }, { name: "综合", state: false }, { name: "水果", state: false }],

    label_hotel: [{ name: "如家1", state: false }, { name: "如家2", state: false }, { name: "如家3", state: false }, { name: "如家4", state: false }, { name: "如家5", state: false }, { name: "如家6", state: false }, { name: "如家7", state: false }, { name: "如家8", state: false }, { name: "如家9", state: false }, { name: "如家10", state: false }],

    label_beauty: [{ name: "aa", state: false }, { name: "bb", state: false }, { name: "cc", state: false }, { name: "dd", state: false }, { name: "ee", state: false }, { name: "ff", state: false }, { name: "gg菜", state: false }, { name: "hh", state: false }, { name: "ii", state: false }, { name: "jj", state: false }],

 
   // label2: ["茶馆", "酒吧", "融合菜", "江西菜", "东南亚菜", "粤菜", "川菜", "海鲜", "小龙虾","徐茈球"] ,
   // label3: ["湘菜", "下午茶", "素菜", "云南菜", "新疆菜", "江浙菜", "人气餐厅", "东北菜", "俄罗斯菜","粉面馆"],
    link_number:0,
    clicktime1: 0,
    clicktime2: 0,
    clicktime3: 0,
  
    hiddenname1: true,
    hiddenname2: true,
    hiddenname3: true,
  
    color: 'floralwhite',
    title1:"默认 ∨",
    title2: "默认 ∨",
    title3: "默认 ∨",

    item: [
      { id: 1, name: 'step-1', addr: '/images/num.png' },
      { id: 2, name: 'step-2', addr: '/images/line.png' },
      { id: 3, name: 'step-3', addr: '/images/num.png' },
      { id: 4, name: 'step-3', addr: '/images/line.png' },
      { id: 5, name: 'step-3', addr: '/images/num_k.png' },
    ],
  


  },

  get1: function (e) {
    var labelId = e.target.id;
    var clickstate;
    var label1_up= "label_1a["+labelId+"].state";

    this.setData({
      [label1_up]: !this.data.label_1a[labelId].state,
     })
    this.setData({
      clickstate: this.data.label_1a[labelId].state
    })
    console.log(this.data.clickstate);

    if (this.data.clickstate) {
      this.setData({
        //color: this.data.color = 'white',
        clicktime1: this.data.clicktime1 += 1
      })
    }
    else {
      this.setData({
        //color: this.data.color = 'floralwhite',
        clicktime1: this.data.clicktime1 -= 1
      })
    }
    if (this.data.clicktime1 == 0) { this.setData({ title1: this.data.title1 = "默认 ∨ " }) }
    if (this.data.clicktime1 > 0) { this.setData({ title1: this.data.title1 = "已选:  " + this.data.clicktime1 + " 项 ∨ "  }) }
  },

  get2: function (e) {
    var labelId = e.target.id;
    var clickstate;
    var label2_up = "label_2a[" + labelId + "].state";

    this.setData({
      [label2_up]: !this.data.label_2a[labelId].state,
    })
    this.setData({
      clickstate: this.data.label_2a[labelId].state
    })
    console.log(this.data.clickstate);

    if (this.data.clickstate) {
      this.setData({
        //color: this.data.color = 'white',
        clicktime1: this.data.clicktime2 += 1
      })
    }
    else {
      this.setData({
        //color: this.data.color = 'floralwhite',
        clicktime2: this.data.clicktime2 -= 1
      })
    }
    if (this.data.clicktime2 == 0) { this.setData({ title2: this.data.title2 = "默认 ∨ " }) }
    if (this.data.clicktime2 > 0) { this.setData({ title2: this.data.title2 = "已选:  " + this.data.clicktime2 + " 项 ∨ " }) }
  },

  get3: function (e) {
    var labelId = e.target.id;
    var clickstate;
    var label3_up = "label_3a[" + labelId + "].state";

    this.setData({
      [label3_up]: !this.data.label_3a[labelId].state,
    })
    this.setData({
      clickstate: this.data.label_3a[labelId].state
    })
    console.log(this.data.clickstate);

    if (this.data.clickstate) {
      this.setData({
        //color: this.data.color = 'white',
        clicktime3: this.data.clicktime3 += 1
      })
    }
    else {
      this.setData({
        //color: this.data.color = 'floralwhite',
        clicktime3: this.data.clicktime3 -= 1
      })
    }
    if (this.data.clicktime3 == 0) { this.setData({ title3: this.data.title3 = "默认 ∨ " }) }
    if (this.data.clicktime3 > 0) { this.setData({ title3: this.data.title3 = "已选:  " + this.data.clicktime3 + " 项 ∨ " }) }
  },




  next3: function (e) {
    wx.navigateTo({
      url: '/pages/leader/step-4/step-4?text=' + this.data.text + '&addr=' + this.data.address + '&d1=' + this.data.d1 + '&d2=' + this.data.d2 + '&d3=' + this.data.d3+'&ct='+this.data.ct
    })
  },

  tap1: function (e) {
    console.log(this.data.link_number)
    this.setData({
      hiddenname1: !this.data.hiddenname1,
    })
  },

  tap2: function (e) {
    console.log(this.data.link_number)
    this.setData({
      hiddenname2: !this.data.hiddenname2,
    })
  },

  tap3: function (e) {
    console.log(this.data.link_number)
    this.setData({
      hiddenname3: !this.data.hiddenname3,
    })
  },

  

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.data.link_choose = JSON.parse(options.link_choose);
    this.data.link_number = this.data.link_choose.length;
    this.setData({
      link_number:this.data.link_number,
      link_choose:this.data.link_choose,
    })
     //this.data.clicktime = options.clicktime;

    

  
      if(this.data.link_choose[0]=="美食"){
        this.setData({
          label_1a:this.data.label_food,
        })
      }
      else if (this.data.link_choose[0] == "娱乐") {
        this.setData({
          label_1a: this.data.label_entertainment,
        })
      }
      else if (this.data.link_choose[0] == "运动") {
        this.setData({
          label_1a: this.data.label_sport,
        })
      }
      else if (this.data.link_choose[0] == "购物") {
        this.setData({
          label_1a: this.data.label_shopping,
        })
      }
      else if (this.data.link_choose[0] == "酒店") {
        this.setData({
          label_1a: this.data.label_hotel,
        })
      }
      else  {
        this.setData({
          label_1a: this.data.label_beauty,
        })
      }

    if (this.data.link_choose[1] == "美食") {
      this.setData({
        label_2a: this.data.label_food,
      })
    }
    else if (this.data.link_choose[1] == "娱乐") {
      this.setData({
        label_2a: this.data.label_entertainment,
      })
    }
    else if (this.data.link_choose[1] == "运动") {
      this.setData({
        label_2a: this.data.label_sport,
      })
    }
    else if (this.data.link_choose[1] == "购物") {
      this.setData({
        label_2a: this.data.label_shopping,
      })
    }
    else if (this.data.link_choose[1] == "酒店") {
      this.setData({
        label_2a: this.data.label_hotel,
      })
    }
    else  {
      this.setData({
        label_2a: this.data.label_beauty,
      })
    }


   if (this.data.link_choose[2] == "美食") {
      this.setData({
        label_3a: this.data.label_food,
      })
    }
    else if (this.data.link_choose[2] == "娱乐") {
      this.setData({
        label_3a: this.data.label_entertainment,
      })
    }
    else if (this.data.link_choose[2] == "运动") {
      this.setData({
        label_3a: this.data.label_sport,
      })
    }
    else if (this.data.link_choose[2] == "购物") {
      this.setData({
        label_3a: this.data.label_shopping,
      })
    }
    else if (this.data.link_choose[2] == "酒店") {
      this.setData({
        label_3a: this.data.label_hotel,
      })
    }
    else {
      this.setData({
        label_3a: this.data.label_beauty,
      })
    }


    
   
    
   

 

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