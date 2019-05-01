var QQMap = require('/libs/qqmap-wx-jssdk.js')
var QQMapSdk = new QQMap({
  key: 'X5MBZ-WWM3Q-TT45A-G5VQO-DU34F-QKB2Q'
})


var map = {
  search_by_name(shop_name) {
    QQMapSdk.search({
      keyword: shop_name,
      success: function (res) {
        console.log(res);
        wx.openLocation({
          latitude: res.data[0].location.lat,
          longitude: res.data[0].location.lng,
          name: shop_name
        })
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    })
  },
}

module.exports = map


