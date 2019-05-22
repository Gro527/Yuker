// pages/index/plan1/plan1.js
const host = require('../../../host')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    member_type:0,
    userid:[],
    userid_current:3,
    showProgressStatus: false,
    ok:false,
    display_height:[],
    timer:'a',
    countDownNum: 30,
    showCountDown: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      program_id:options.program_id,
    })
    var that = this
    wx.request({
      url: host.program_info_url,
      data:{'program_id': this.data.program_id},
      method:'POST',
      header:{
        'content-type': 'application/json'
      },
      success: function(res){
        console.log(res.data)
        wx.setStorage({
          key: 'program_info',
          data: res.data,
        })
        var program = res.data

        // 计算每个成员对应区块的高度
        // var rpx = wx.getSystemInfoSync().windowWidth / 750
        var display_height = []
        for(var i in res.data.members)
        {
          var cur_height = 300
          if(res.data.members[i].length == 3) cur_height = 500
          for(var j in res.data.members[i].sub)
          {
            cur_height += parseInt(res.data.members[i].sub[j].sub.length / 4) * 50
          }
          display_height.push(cur_height)
        }


        that.setData({
          time : res.data.time,
          name: res.data.program_name,
          members : res.data.members,
          userid_current : wx.getStorageSync('userid'),
          submit_state: res.data.submit_state,
          release_state: res.data.release_state,
          display_height: display_height
        })
        
        console.log(res.data.members)
        console.log(res.data.release_state)
        if(res.data.release_state == 1)
        {
          wx.redirectTo({
            url: '/pages/index/plan1/plan1_final/plan1_final?program_id='+that.data.program_id+'&first=false',
          })
        }
        var _member_type = 2
        //判断当前用户类型所属（0为发起者，1为参与人，2为路人）
        if (that.data.userid_current == that.data.members[0].userid) {
          _member_type = 0
        }
        else {
          for (var i in that.data.members) {
            if (that.data.members[i].userid == that.data.userid_current) {
              _member_type = 1
            }
          }
        }
        that.setData({
          member_type: _member_type
        })

      }
    })
      



  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  showProgress: function () {
    var showProgressStatus = !this.data.showProgressStatus
    var that = this

    /* 动画部分 */
    // 第1步：创建动画实例 
    var animation = wx.createAnimation({
      duration: 200,  //动画时长
      timingFunction: "ease", //线性
      delay: 0  //0则不延迟
    });

    // 第2步：这个动画实例赋给当前的动画实例
    this.animation = animation;

    // 第3步：执行第一组动画
    animation.opacity(0).rotateX(-100).step();

    // 第4步：导出动画对象赋给数据对象储存
    that.setData({
      animationData: animation.export()
    })

   // 第5步：设置定时器到指定时候后，执行第二组动画
    setTimeout(function () {
      // 执行第二组动画
      animation.opacity(1).rotateX(0).step();
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象
      that.setData({
        animationData: animation
      })
    })
    that.setData({
      showProgressStatus: showProgressStatus
    })
  },

  submit:function(){
    var that = this
    wx.showModal({
      title: '生成结果后将无法邀请新同伴',
      content: '是否继续？',
      showCancel: true,
      cancelText: "否",
      confirmText: "是",
      success: function (res) {
        if (res.cancel) {//点击取消,默认隐藏弹框
          
        } else {//点击确定
         
          that.showProgress()
         
          wx.request({
            url: host.leader_submit_url + that.data.program_id,
            method: 'GET',
            success(res) {
              var program_info = wx.getStorageSync('program_info')
              program_info.submit_result = res.data
              console.log(res.data)
              wx.setStorage({
                key: 'program_info',
                data: program_info,
              })
              wx.redirectTo({
                url: '/pages/index/plan1/plan1_1/plan1_1'
              })
              that.setData({
                showProgressStatus: false
              })
            },
            fail: function(res){
              wx.showModal({
                title: '服务器忙',
                content: '请求仍在处理中，稍后可在“我的Yuker方案”内查看',
                showCancel: false,
                success: function(){
                  wx.reLaunch({
                    url: '/pages/index/index',
                  })
                }
              })
            }
          })
        }
      },
      fail: function (res) { },//接口调用失败的回调函数
      complete: function (res) { },//接口调用结束的回调函数（调用成功、失败都会执行）
    })

    var countDownNum = that.data.countDownNum
    //倒计时
    that.setData({
      timer: setInterval(function () {//这里把setInterval赋值给变量名为timer的变量
        //每隔一秒countDownNum就减一，实现同步
        countDownNum--;
        //然后把countDownNum存进data，好让用户知道时间在倒计着
        that.setData({
          countDownNum: countDownNum
        })
        if (countDownNum <= 20) {
          that.setData({
            showCountDown : true
          })
        }
        if (countDownNum == 0) {
          //这里特别要注意，计时器是始终一直在走的，如果你的时间为0，那么就要关掉定时器！不然相当耗性能
          //因为timer是存在data里面的，所以在关掉时，也要在data里取出后再关闭
          clearInterval(that.data.timer);
          //关闭定时器之后，可作其他处理codes go here
        }
      }, 1000)
    })
  },

  check: function(){
    var that = this
    wx.request({
      url: host.leader_submit_url + that.data.program_id,
      method: 'GET',
      success(res) {
        var program_info = wx.getStorageSync('program_info')
        program_info.submit_result = res.data
        wx.setStorage({
          key: 'program_info',
          data: program_info,
        })
        wx.redirectTo({
          url: '/pages/index/plan1/plan1_1/plan1_1'
        })
        that.setData({
          showProgressStatus: false
        })
      }
    })
  },

  join: function (e) {
    var program_id = this.data.program_id
    var userid = wx.getStorageSync('userid')
    // wx.request({
    //   url: host.userinfo_url,
    //   method: 'POST',
    //   data: {
    //     'userinfo': e.detail.userInfo,
    //     'userid': userid
    //   },
    //   success: function(res){
    //     wx.navigateTo({
    //       url: '/pages/member/member?program_id=' + program_id
    //     })
    //   }
    // })
    if(wx.getStorageSync('login_state') == 0)
    {
      wx.login({
        success: function (res) {
          //发送请求
          wx.request({
            url: host.login_url, //接口地址
            data: {
              'code': res.code,
              'userinfo': e.detail.userInfo,
            },
            header: {
              'content-type': 'application/json' //默认值
            },
            method: 'POST',
            success: function (res) {
              wx.setStorage({
                key: 'openid',
                data: res.data.openid,
              })
              wx.setStorage({
                key: 'userid',
                data: res.data.id,
              })
              wx.setStorage({
                key: 'session_key',
                data: res.data.session_key,
              })
              wx.setStorage({
                key: 'login_state',
                data: 1,
              })
              wx.navigateTo({
                url: '/pages/member/member?program_id=' + program_id
              })
            },
            fail: function (res) {
              console.log(res)
            }
          })
        }
      })
    }
    else{
      wx.navigateTo({
        url: '/pages/member/member?program_id=' + program_id
      })
    }

  },


  backhome: function () {
    wx.reLaunch({
      url: '/pages/index/index',
    })
  },

  onShow: function () { this.onLoad({program_id:this.data.program_id}) },

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