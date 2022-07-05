
/*
钱迹
***************************
QuantumultX:
[rewrite_local]
^https?:\/\/qianji\.xxoojoke\.com\/vip\/configios script-response-body https://raw.githubusercontent.com/ottocsb/tov-template/main/src/modules/qianjivip.js
[mitm]
hostname = qianji.xxoojoke.com
**************************/

var body = $response.body
	.replace(/"vipstart" : -1/g,'"vipstart":0')
	.replace(/"vipend" : -1/g,'"vipend":0')
	.replace(/"viptype" : -1/g,'"viptype":100')
$.log("进入钱迹")
$.log("我是钱迹我已进入")
$.log($response.body)
$done({ body });
