
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
body.replace(/"vipstart" : -1/g, '"ipstart":0');
body.replace(/"vipend" : -1/g, '"pend":0');
body.replace(/"viptype" : -1/g, '"iptype":100');
$done({ body });

