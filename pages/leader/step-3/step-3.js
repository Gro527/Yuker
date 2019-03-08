// pages/index/step-2/step-2.js
// var util = require('/utils/util.js')
// var formatLocation = util.formatLocation
  //  var text= document.getElementById('text').value;
var text, addr_lo_la, link_choose

//var plan_data=[]
Page({

  /**
   * 页面的初始数据
   */
  data: {

    linkType_label1: [], linkType_label2: [], linkType_label3: [], linkType_label4: [], linkType_label5: [], linkType_label6: [],           linkType_label7: [], //接收api所有标签 标签按环节分类

    middle1: [], middle2: [], middle3: [], middle4: [], middle5: [], middle6: [], middle7: [],//中间量 添加false状态
   
    first:[],second:[],third:[],//页面中三个环节所呈现标签
    label_choose_first: [], label_choose_second: [], label_choose_third: [],//每个环节所选择标签
    label_choose_all:[],

    viewid_first:0 , viewid_second:0, viewid_third:0,
    link_number: 0,//上页面所选环节数

    Link: [],//初始定义为空
    link_choose:[],//接收上个页面所选择环节

  
    clicktime1: 0,
    clicktime2: 0,
    clicktime3: 0,
  
    hiddenname1: true,
    hiddenname2: true,
    hiddenname3: true,
  
    
    title1: "默认 ∨",
    title2: "默认 ∨",
    title3: "默认 ∨",

    item: [
      { id: 1, name: 'step-1', addr: '/images/c-1.png' },
      { id: 2, name: 'step-2', addr: '/images/line.png' },
      { id: 3, name: 'step-3', addr: '/images/c-1.png' },
      { id: 4, name: 'step-3', addr: '/images/line.png' },
      { id: 5, name: 'step-3', addr: '/images/c-0.png' },
    ],
  


  },

  get_label_first: function (e) {
    var labelid = e.target.id;
    var clickstate;
    var label1_up = "first["+this.data.viewid_first+"]["+labelid+"].state"
    this.setData({
      [label1_up]: !this.data.first[this.data.viewid_first][labelid].state,
    })
    this.setData({
      clickstate: this.data.first[this.data.viewid_first][labelid].state
    })
    console.log(this.data.clickstate);
    
    if (this.data.clickstate) {
      this.setData({
       clicktime1: this.data.clicktime1 += 1
      })
      this.data.label_choose_first.push(this.data.first[this.data.viewid_first][labelid])//添加元素
    }
    else {
      this.setData({
        clicktime1: this.data.clicktime1 -= 1
      })
      for(var index in this.data.label_choose_first){
        if (this.data.first[this.data.viewid_first][labelid].id == this.data.label_choose_first[index].id  ){
          this.data.label_choose_first.splice(index,1)

        }
      }

    }
    if (this.data.clicktime1 == 0) { this.setData({ title1: this.data.title1 = "默认 ∨ " }) }
    if (this.data.clicktime1 > 0) { this.setData({ title1: this.data.title1 = "已选:  " + this.data.clicktime1 + " 项 ∨ " }) }
  
    
    console.log(this.data.label_choose_first)
  
  },
   
  get_label_second: function (e) {
    var labelid = e.target.id;
    var clickstate;
    var label2_up = "second[" + this.data.viewid_second + "][" + labelid + "].state"
    this.setData({
      [label2_up]: !this.data.second[this.data.viewid_second][labelid].state,
    })
    this.setData({
      clickstate: this.data.second[this.data.viewid_second][labelid].state
    })
    console.log(this.data.clickstate);

    if (this.data.clickstate) {
      this.setData({
        clicktime2: this.data.clicktime2 += 1
      })
      this.data.label_choose_second.push(this.data.second[this.data.viewid_second][labelid])//添加元素
    }
    else {
      this.setData({
        clicktime2: this.data.clicktime2 -= 1
      })
      for (var index in this.data.label_choose_second) {
        if (this.data.second[this.data.viewid_second][labelid].id == this.data.label_choose_second[index].id) {
          this.data.label_choose_second.splice(index, 1)

        }
      }

    }
    if (this.data.clicktime2 == 0) { this.setData({ title2: this.data.title2 = "默认 ∨ " }) }
    if (this.data.clicktime2 > 0) { this.setData({ title2: this.data.title2 = "已选:  " + this.data.clicktime2 + " 项 ∨ " }) }


    console.log(this.data.label_choose_second)

  },

  get_label_third: function (e) {
    var labelid = e.target.id;
    var clickstate;
    var label3_up = "third[" + this.data.viewid_third + "][" + labelid + "].state"
    this.setData({
      [label3_up]: !this.data.third[this.data.viewid_third][labelid].state,
    })
    this.setData({
      clickstate: this.data.third[this.data.viewid_third][labelid].state
    })
    console.log(this.data.clickstate);

    if (this.data.clickstate) {
      this.setData({
        clicktime3: this.data.clicktime3 += 1
      })
      this.data.label_choose_third.push(this.data.third[this.data.viewid_third][labelid])//添加元素
    }
    else {
      this.setData({
        clicktime3: this.data.clicktime3 -= 1
      })
      for (var index in this.data.label_choose_third) {
        if (this.data.third[this.data.viewid_third][labelid].id == this.data.label_choose_third[index].id) {
          this.data.label_choose_third.splice(index, 1)

        }
      }

    }
    if (this.data.clicktime3 == 0) { this.setData({ title3: this.data.title3 = "默认 ∨ " }) }
    if (this.data.clicktime3 > 0) { this.setData({ title3: this.data.title3 = "已选:  " + this.data.clicktime3 + " 项 ∨ " }) }


    console.log(this.data.label_choose_third)

  },

  


  get_view_first: function(e){
    this.setData({
      viewid_first : e.detail.currentItemId})
    console.log(this.data.viewid_first)

  },

  get_view_second: function (e) {
    this.setData({
      viewid_second: e.detail.currentItemId
    })
    console.log(this.data.viewid_second)

  },

  get_view_third: function (e) {
    this.setData({
      viewid_third: e.detail.currentItemId
    })
    console.log(this.data.viewid_third)

  },

 






  next3: function (e) {
    //将所选所有标签放进label_choose_all
    that.data.label_choose_all.push(that.data.label_choose_first);
    that.data.label_choose_all.push(that.data.label_choose_second);
    that.data.label_choose_all.push(that.data.label_choose_third);
    console.log(that.data.label_choose_all)
     /* wx.setStorage({
        key: 'label1',
        data: this.data.label1,
       }),
      wx.setStorage({
        key: 'label2',
        data: this.data.label2,
       }),
      wx.setStorage({
        key: 'label3',
        data: this.data.label3,
       }),*/
    var that=this
    
      //let list_arr=["openid","location","links"]
      var json = {}
      json.openid=1
       var addr = {}
        addr.longitude=that.data.addr_lo_la[0]
        addr.latitude=that.data.addr_lo_la[1]
      json.location=addr

        var links=[]
        for(let i = 0;i<that.data.link_choose.length;i++){
          var j={}
          j.name=that.data.link_choose[i]
           var sub=[]
           for(let m = 0;m<that.data.label[i].length;m++){
             var n={}
             n.label=that.data.label[i][m]
             sub.push(n)
           }
           j.sub=sub
           links.push(j)
        }
        json.links=links
        console.log(JSON.stringify(json))
  

      wx.navigateTo({
      url: '/pages/leader/step-4/step-4'//?text=' + this.data.text + '&addr=' + this.data.address + '&d1=' + this.data.d1 + '&d2=' + this.data.d2 + '&d3=' + this.data.d3+'&ct='+this.data.ct
    }),
      wx.request({
        url: 'http://47.94.210.236:5555/api/login', //接口地址
        data:
           { 'data':JSON.stringify(json) },
         header: {
           'content-type': 'application/json' //默认值
         },
         method: 'POST',
         success: function (res) {
           console.log(res)
         },
         fail: function (res) {
           console.log(res)
         }
      })
  },

  tap1: function (e) {
    //console.log(this.data.link_number)
    this.setData({
      hiddenname1: !this.data.hiddenname1,
    })
  },

  tap2: function (e) {
    //console.log(this.data.link_number)
    this.setData({
      hiddenname2: !this.data.hiddenname2,
    })
  },

  tap3: function (e) {
    //console.log(this.data.link_number)
    this.setData({
      hiddenname3: !this.data.hiddenname3,
    })
  },

  split_array: function (arr) { //拆分数组
    var a_len = arr.length;
    var result = [];
    for (let i = 0; i < a_len; i += 10) {
      result.push(arr.slice(i, i + 10));
    }
    return result
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var that = this
   //获取偏好标签
    wx.request({
      url: 'http://47.94.210.236:5555/api/label_type/all',//json数据地址
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        wx.showToast({
          title: '请求成功',
          icon: 'success',
          mask: true,
        })




        that.setData({

        middle1: res.data[0].sub,
        middle2: res.data[1].sub,
        middle3: res.data[2].sub,
        middle4: res.data[3].sub,
        middle5: res.data[4].sub,
        middle6: res.data[5].sub,
        middle7: res.data[6].sub,

        })

        for(var index in that.data.middle1){
          var stateParam = "middle1["+ index +"].state"
          that.setData({[stateParam]:false})
        }
        for (var index in that.data.middle2) {
          var stateParam = "middle2[" + index + "].state"
          that.setData({ [stateParam]: false })
        }
        for (var index in that.data.middle3) {
          var stateParam = "middle3[" + index + "].state"
          that.setData({ [stateParam]: false })
        }
        for (var index in that.data.middle4) {
          var stateParam = "middle4[" + index + "].state"
          that.setData({ [stateParam]: false })
        }
        for (var index in that.data.middle5) {
          var stateParam = "middle5[" + index + "].state"
          that.setData({ [stateParam]: false })
        }
        for (var index in that.data.middle6) {
          var stateParam = "middle6[" + index + "].state"
          that.setData({ [stateParam]: false })
        }
        for (var index in that.data.middle7) {
          var stateParam = "middle7[" + index + "].state"
          that.setData({ [stateParam]: false })
        }
        



        that.setData({ 
          
          linkType_label1: that.split_array(that.data.middle1), 
          linkType_label2: that.split_array(that.data.middle2),
          linkType_label3: that.split_array(that.data.middle3),
          linkType_label4: that.split_array(that.data.middle4),
          linkType_label5: that.split_array(that.data.middle5),
          linkType_label6: that.split_array(that.data.middle6),
          linkType_label7: that.split_array(that.data.middle7),
         
          })

         
       
          
            
        if (that.data.link_choose[0] == res.data[0].link) {that.setData({first: that.data.linkType_label1})}
        else if (that.data.link_choose[0] == res.data[1].link) { that.setData({ first: that.data.linkType_label2 }) }
        else if (that.data.link_choose[0] == res.data[2].link) { that.setData({ first: that.data.linkType_label3 }) }
        else if (that.data.link_choose[0] == res.data[3].link) { that.setData({ first: that.data.linkType_label4 }) }
        else if (that.data.link_choose[0] == res.data[4].link) { that.setData({ first: that.data.linkType_label6 }) }
        else if (that.data.link_choose[0] == res.data[5].link) { that.setData({ first: that.data.linkType_label6 }) }
        else if (that.data.link_choose[0] == res.data[6].link) { that.setData({ first: that.data.linkType_label7 }) }

        if (that.data.link_choose[1] == res.data[0].link) { that.setData({ second: that.data.linkType_label1 }) }
        else if (that.data.link_choose[1] == res.data[1].link) { that.setData({ second: that.data.linkType_label2 }) }
        else if (that.data.link_choose[1] == res.data[2].link) { that.setData({ second: that.data.linkType_label3 }) }
        else if (that.data.link_choose[1] == res.data[3].link) { that.setData({ second: that.data.linkType_label4 }) }
        else if (that.data.link_choose[1] == res.data[4].link) { that.setData({ second: that.data.linkType_label6 }) }
        else if (that.data.link_choose[1] == res.data[5].link) { that.setData({ second: that.data.linkType_label6 }) }
        else if (that.data.link_choose[1] == res.data[6].link) { that.setData({ second: that.data.linkType_label7 }) }

        if (that.data.link_choose[2] == res.data[0].link) { that.setData({ third: that.data.linkType_label1 }) }
        else if (that.data.link_choose[2] == res.data[1].link) { that.setData({ third: that.data.linkType_label2 }) }
        else if (that.data.link_choose[2] == res.data[2].link) { that.setData({ third: that.data.linkType_label3 }) }
        else if (that.data.link_choose[2] == res.data[3].link) { that.setData({ third: that.data.linkType_label4 }) }
        else if (that.data.link_choose[2] == res.data[4].link) { that.setData({ third: that.data.linkType_label6 }) }
        else if (that.data.link_choose[2] == res.data[5].link) { that.setData({ third: that.data.linkType_label6 }) }
        else if (that.data.link_choose[2] == res.data[6].link) { that.setData({ third: that.data.linkType_label7 }) }


        
        
        
      }

    })
   
    //接收上个页面传值
    wx.getStorage({
      key: 'text',
      success: function (res) {
        that.setData({
          text: res.data
        })
        console.log(that.data.text)
      }
    }),
      wx.getStorage({
        key: 'addr_long_lati',
        success: function (res) {
          that.setData({
            addr_lo_la: res.data
          })
          console.log(that.data.addr_lo_la)
        }
      }),
      wx.getStorage({
        key: 'link_choose',
        success: function (res) {
          that.setData({
            link_choose: res.data,
            link_number: res.data.length,
          })
          console.log(that.data.link_choose)
        },
      })

    

     /* wx.getStorage({
        key: 'label1',
        success: function (res) {
          that.setData({
            label1: res.data
          })
          console.log(that.data.label1)
        },
      }),
      wx.getStorage({
        key: 'label2',
        success: function (res) {
          that.setData({
            label2: res.data
          })
          console.log(that.data.label2)
        },
      }),
      wx.getStorage({
        key: 'label3',
        success: function (res) {
          that.setData({
            label3: res.data
          })
          console.log(that.data.label3)
        },
      })*/


     // var first,second,third = [];
      

    
   
    
   

 

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