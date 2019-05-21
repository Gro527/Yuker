// // //服务器配置文件
// var port = "5555"
// var base = "http://10.128.232.13:"+port+"/api"
var base = "https://yuker.vip/api"

var host = {

  base, 

  //登录
  login_url:`${base}/login`,

  //上传用户信息
  userinfo_url:`${base}/userinfo`,

  //请求环节
  link_url:`${base}/link_type/all`,

  //请求所有标签
  label_all_url:`${base}/label_type/all`,

  //发起人confirm
  leader_confirm_url:`${base}/leader_confirm`,

  //参与人confirm
  member_confirm_url:`${base}/member_confirm`,

  //发起人submit
  //需提交方案id
  leader_submit_url:`${base}/submit/`,

  //查询方案信息
  program_info_url:`${base}/program_info`,

  //查询当前用户发起的方案
  leader_history_url:`${base}/leader_history`,

  //查询当前用户参与的方案
  member_history_url:`${base}/member_history`,

  //发起人release
  leader_release_url: `${base}/release`,

  //查询release_result
  release_result_url:`${base}/release_result`,

  //上传评论
  upload_comment_url:`${base}/upload_comment`,

  //查询评论
  get_comment_url:`${base}/get_comment`,


}

module.exports = host