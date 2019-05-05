/*
 * @repo: https://github.com/yichahucha/surge
 * @script: https://raw.githubusercontent.com/yichahucha/surge/master/wb_launch.js
 * @regular: ^https?:\/\/(sdk|wb)app\.uve\.weibo\.com(\/interface\/sdk\/actionad.php|\/interface\/sdk\/sdkad.php|\/wbapplua\/wbpullad.lua)
 */

const path1 = "/interface/sdk/actionad.php";
const path2 = "/interface/sdk/sdkad.php";
const path3 = "/wbapplua/wbpullad.lua";

var result = body;
if (url.indexOf(path1) != -1) {
    result = '';
    console.log('启动页功能广告');
}

if (url.indexOf(path2) != -1) {
    result = body.replace('OK','');
    var obj = JSON.parse(result);
    if (obj.background_delay_display_time) {
        obj.background_delay_display_time = 60*24*365;
    }
    if (obj.show_push_splash_ad) {
        obj.show_push_splash_ad = false;
    }
    if (obj.ads) {
        obj.ads = [];
        console.log('启动页广告');
    }
    result = JSON.stringify(obj) + 'OK';
}

if (url.indexOf(path3) != -1) {
    var obj = JSON.parse(body);
    if (obj.cached_ad && obj.cached_ad.ads) {
        obj.cached_ad.ads = [];
        console.log('启动页缓存广告');
    }
    result = JSON.stringify(obj);
}
result;