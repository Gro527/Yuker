// template/progress_bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    percent:15
  },

  /**
   * 组件的方法列表
   */
  methods: {
    end: function(){
      var add = Math.ceil(Math.random() * 20);
      if(this.data.percent + add < 100) {
        this.setData({
          percent: this.data.percent + add
        })
      }
      else{
        this.setData({
          percent: 99
        })
      }
    }
  }
})
