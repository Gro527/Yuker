var host = require('../../host.js');
var QQMap = require('../../libs/qqmap-wx-jssdk.js');
var QQMapSdk;
Page({

  Data: {

    links_chosen: [],
    labels_all: [],
    labels_toChoose: [],
    labels_toChoose_split: [],
    hidden_swiper: [true],
    numLabel_chosen: [0],
    labels_chosen: []
  },

  data: {
    viewid: 0,
    item: [{ id: 1, name: 'step-1', addr: '/images/c-1.png' }, { id: 2, name: 'step-2', addr: '/images/line.png' }, { id: 3, name: 'step-3', addr: '/images/c-1.png' }, { id: 4, name: 'step-3', addr: '/images/line.png' }, { id: 5, name: 'step-3', addr: '/images/c-0.png' }]
  },

  split_array: function split_array(arr) {
    //拆分数组
    var a_len = arr.length;
    var result = [];
    for (var i = 0; i < a_len; i += 10) {
      result.push(arr.slice(i, i + 10));
    }
    return result;
  },

  onLoad: function onLoad(options) {
    var that = this;
    var program_info = wx.getStorageSync('program_info');
    var links_chosen = [];
    for (var i in program_info.members[0].sub) {
      links_chosen.push(program_info.members[0].sub[i].link);
    }
    this.setData({
      program_info:program_info,
      links_chosen:links_chosen
    })
    //获取标签列表
    wx.request({
      url: host.label_all_url,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function success(res) {
        var _labels_all = new Map();
        for (link in res.data) {
          _labels_all.set(res.data[link].link, res.data[link].sub);
        }
        that.setData({ labels_all: _labels_all });
        //加载环节选项框内标签
        var _labels_toChoose = [];
        for (var link in that.data.links_chosen) {
          var _that$setData;

          _labels_toChoose[link] = _labels_all.get(that.data.links_chosen[link]);
          var _labels_toChoose_split = [];
          _labels_toChoose_split = that.split_array(_labels_toChoose[link]);
          for (var label in _labels_toChoose[link]) {
            _labels_toChoose[link][label].chosen = false;
          }
          //初始化选中标签数组
          var _labels_chosen = [];
          //设置所有滑块为隐藏状态
          var index_swiper = "hidden_swiper[" + link + "]";
          var index_numlabel = "numLabel_chosen[" + link + "]";
          var index_labels_chosen = "labels_chosen[" + link + "]";
          var index_labels_toChoose_split = "labels_toChoose_split[" + link + "]";
          that.setData({
            [index_swiper]: true,
            [index_numlabel]: 0,
            [index_labels_chosen]: _labels_chosen,
            [index_labels_toChoose_split]: _labels_toChoose_split
          })
        }
        that.setData({ labels_toChoose: _labels_toChoose });
      }
    });

    QQMapSdk = new QQMap({
      key: 'X5MBZ-WWM3Q-TT45A-G5VQO-DU34F-QKB2Q'
    });
    var that = this;
    wx.getLocation({
      success: function success(res) {
        QQMapSdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function success(res1) {
            that.setData({
              hasLocation: true,
              addr_longitude_latitude: [res.longitude, res.latitude],
              locationAddress: res1.result.address
            });
          }
        });
      }
    });
  },

  chooseLocation: function chooseLocation() {
    var that = this;
    wx.chooseLocation({
      success: function success(res) {
        that.setData({
          hasLocation: true,
          addr_longitude_latitude: [res.longitude, res.latitude],
          locationAddress: res.address
        });
      }
    });
  },

  get_view: function get_view(e) {
    this.setData({
      viewid: e.detail.currentItemId
    });
  },

  show_swiper: function show_swiper(data) {
    var id = parseInt(data.currentTarget.id);
    var hidden = !this.data.hidden_swiper[id];
    var index = "hidden_swiper[" + id + "]";
    this.setData({
      [index]: hidden
    })
  },

  label_choose: function label_choose(data) {
    var _setData2;

    var link = data.currentTarget.dataset.link;
    var index = data.currentTarget.dataset.index;
    var id = data.currentTarget.id;
    var label = this.data.labels_toChoose_split[link][index][id];
    label.chosen = !label.chosen;
    // var link_chosenlist = this.data.labels_chosen[link]
    var chosenNum = this.data.numLabel_chosen[link];
    if (label.chosen == true) {
      this.data.labels_chosen[link].push(label);
      chosenNum++;
    } else {
      for (var i in this.data.labels_chosen[link]) {
        if (this.data.labels_chosen[link][i].id == label.id) {
          this.data.labels_chosen[link].splice(i, 1);
        }
      }
      chosenNum--;
    }
    var index_labels_toChoose = "labels_toChoose[" + link + "][" + label.id + "].chosen";
    var index_labels_toChoose_split = "labels_toChoose_split[" + link + "][" + index + "][" + id + "].chosen";
    var index_numLabel_chosen = "numLabel_chosen[" + link + "]";
    this.setData({
      [index_labels_toChoose]: label.chosen,
      [index_numLabel_chosen]: chosenNum,
      [index_labels_toChoose_split]: label.chosen
    })
  },

  next3: function next3(data) {
    var that = this;
    wx.navigateTo({
      url: '/pages/leader/step-4/step-4'
    });
    //将label发送至storage
    wx.setStorage({
      key: 'labels_chosen',
      data: that.data.labels_chosen
    });
    //打包json数据并发送至后台
    var json = {};
    var openid = wx.getStorageSync("openid");
    json.openid = openid;
    json.program_id = this.data.program_info.program_id;
    var long_lati = wx.getStorageSync('addr_long_lati');
    json.location = {};
    json.location.name = wx.getStorageSync('addr');
    json.location.longitude = long_lati[0];
    json.location.latitude = long_lati[1];
    var program_name = wx.getStorageSync('program_name');
    json.program_name = program_name;
    var links = [];
    for (var i in that.data.links_chosen) {
      var j = {};
      j.name = that.data.links_chosen[i];
      var sub = [];
      for (var label in that.data.labels_chosen[i]) {
        var n = {};
        n.label = that.data.labels_chosen[i][label].label;
        sub.push(n);
      }
      j.sub = sub;
      links.push(j);
    }
    json.links = links;
    // 向服务器发送member_confirm请求
    wx.request({
      url: host.member_confirm_url,
      data: { json: json },
      method: 'POST',
      success: function success(res) {
        wx.setStorage({
          key: 'program_id',
          data: res.data.program_id
        });
      }
    });
  }
});
