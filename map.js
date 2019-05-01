var QQMap = require('/libs/qqmap-wx-jssdk.js')
var QQMapSdk = new QQMap({
  key: 'X5MBZ-WWM3Q-TT45A-G5VQO-DU34F-QKB2Q'
})


var map = {
  // 根据店名搜索
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
  // 根据地址获取地名
  // 参数1：经纬度，参数2：page
  get_address_by_long_lati(data,page){
    QQMapSdk.reverseGeocoder({
      location: {
        latitude: data.latitude,
        longitude: data.longitude
      },
      success: function (res) {
        page.setData({
          hasLocation: true,
          addr_longitude_latitude: [data.longitude, data.latitude],
          locationAddress: res.result.address
        })
      }
    })
  },

}

module.exports = map


