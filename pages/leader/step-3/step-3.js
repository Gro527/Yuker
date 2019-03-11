const host = require('../../../host')
Page({

  Data:{
    
    links_chosen:[],
    labels_all:[],
    labels_toChoose:[],
    hidden_swiper:[true,],
    numLabel_chosen:[0,],
    labels_chosen:[]
  },

  data:{
    item: [
      { id: 1, name: 'step-1', addr: '/images/c-1.png' },
      { id: 2, name: 'step-2', addr: '/images/line.png' },
      { id: 3, name: 'step-3', addr: '/images/c-1.png' },
      { id: 4, name: 'step-3', addr: '/images/line.png' },
      { id: 5, name: 'step-3', addr: '/images/c-0.png' },
    ],
  },

  onLoad: function(options){
    var that = this;

    //获取step-2中选中的标签
    wx.getStorage({
      key: 'link_choose',
      success: function(res) {
        that.setData({links_chosen:res.data})
      }
    }),

    //获取标签列表
    wx.request({
      url: 'http://47.94.210.236:5555/api/label_type/all',
      headers:{
        'Content-Type': 'application/json'
      },
      success: function(res){
        console.log(res.data)
        var _labels_all = new Map()
        for(link in res.data){
          _labels_all.set(res.data[link].link, res.data[link].sub)
        }
        that.setData({labels_all:_labels_all})
        console.log(that.data.labels_all)
        //加载环节选项框内标签
        var _labels_toChoose = []
        for (var link in that.data.links_chosen) {
          _labels_toChoose[link] = _labels_all.get(that.data.links_chosen[link])
          for(var label in _labels_toChoose[link]){
            _labels_toChoose[link][label].chosen = false
          }
          //初始化选中标签数组
          var _labels_chosen = []
          //设置所有滑块为隐藏状态
          var index_swiper =  "hidden_swiper["+link+"]"
          var index_numlabel = "numLabel_chosen["+link+"]"
          var index_labels_chosen = "labels_chosen["+link+"]"
          that.setData({
            [index_swiper]:true,
            [index_numlabel]:0,
            [index_labels_chosen]:_labels_chosen
          })
        }
        that.setData({labels_toChoose:_labels_toChoose})
        console.log(that.data.labels_toChoose)
      }
    })


  },

  show_swiper: function(data){
    var id = parseInt(data.currentTarget.id)
    var hidden = !this.data.hidden_swiper[id]
    var index = "hidden_swiper["+id+"]"
    this.setData({
      [index]:hidden
    })
  },

  label_choose: function(data){
    var link = data.currentTarget.dataset.link
    var id = data.currentTarget.id
    var label = this.data.labels_toChoose[link][id]
    label.chosen = !label.chosen
    // var link_chosenlist = this.data.labels_chosen[link]
    var chosenNum = this.data.numLabel_chosen[link]
    if(label.chosen==true) {
      this.data.labels_chosen[link].push(label)
      chosenNum++
    }
    else {

      for(var i in this.data.labels_chosen[link]){
        if(this.data.labels_chosen[link][i].id == label.id){
          this.data.labels_chosen[link].splice(i,1)
        }
      }
      chosenNum--
    }
    var index_labels_toChoose = "labels_toChoose["+link+"]["+id+"].chosen"
    var index_numLabel_chosen = "numLabel_chosen["+link+"]"
    this.setData({
      [index_labels_toChoose]:label.chosen,
      [index_numLabel_chosen]:chosenNum
    })
  },

  next3: function(data){
    var that = this
    wx.navigateTo({
      url: '/pages/leader/step-4/step-4'
    })
    //将label发送至storage
    wx.setStorage({
      key: 'labels_chosen',
      data: that.data.labels_chosen,
    })
    //打包json数据并发送至后台
    var json = {}
    var openid = wx.getStorageSync("openid")
    json.openid = openid
    var long_lati = wx.getStorageSync('addr_long_lati')
    json.location = {}
    json.location.longitude = long_lati[0]
    json.location.latitude = long_lati[1]
    var links = []
    for (var i in that.data.links_chosen) {
      console.log(i)
      var j = {}
      j.name = that.data.links_chosen[i]
      var sub = []
      for (var label in that.data.labels_chosen[i]) {
        var n = {}
        n.label = that.data.labels_chosen[i][label].label
        sub.push(n)
      }
      j.sub = sub
      links.push(j)
    }
    json.links = links
    // 向服务器发送leader_confirm请求
    wx.request({
      url: host.leader_confirm_url,
      data:{json},
      method:'POST',
      success: function(res){
        console.log(res)
      }
    })
  }
})