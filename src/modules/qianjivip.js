
/*
解锁钱迹测试
*/
let body = $response.body.replace(/"vipstart" : -1/g,'"vipstart":0')
body.$response.body.replace(/"vipend" : -1/g,'"vipend":0')
body.$response.body.replace(/"viptype" : -1/g,'"viptype":100')
$.log("进入钱迹")
$.log("进入钱迹")
$done({ body });
