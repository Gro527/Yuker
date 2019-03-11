//服务器配置文件
var base = "http://47.94.210.236:5555/api"

var host = {

  base, 

  //登录
  login_url:`${base}/login`,

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
  leader_submit_url:`${base}/submit`,

  //查询方案信息
  //需提交方案id
  program_info_url:`${base}/program_info`,

  
}

module.exports = host