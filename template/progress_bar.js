// template/progress_bar.js
Page({
    
  data: {
    percent: 15
  },

  /**
   * 组件的方法列表
   */
  end: function() {
    var add = Math.ceil(Math.random() * 20);
    if (this.data.percent + add < 100) {
      this.setData({
        percent: this.data.percent + add
      })
    }
    else {
      this.setData({
        percent: 99
      })
    }
  }
})