
/*
钱迹
***************************
QuantumultX:
[rewrite_local]
^https?:\/\/qianji\.xxoojoke\.com\/vip\/configios script-response-body https://raw.githubusercontent.com/ottocsb/tov-template/main/src/modules/qianjivip.js
[mitm]
hostname = qianji.xxoojoke.com
**************************/


let obj = JSON.parse($response.body);
obj.data.config.userinfo.vipstart = 1;
obj.data.config.userinfo.vipend = 1000;
obj.data.config.userinfo.viptype = 100;

$done({ body: JSON.stringify(obj) });

