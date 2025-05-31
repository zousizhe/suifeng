let http;
try {
    http = config.依赖.replace(/[^/]*$/, "");
} catch (e) {
    http = (readFile("hiker://files/rules/FYJK/git.txt") || "https://raw.githubusercontent.com/zousizhe/suifeng/refs/heads/main/ycl.js").replace(/[^/]*$/, "");
};

require(http + "public.js");
let btget = getItem("zgb", "影视");
let get = btget == "影视" ? "ys" : btget == "小说" ? "xs" : btget == "其它" ? "qt" : btget == "漫画" ? "mh" : btget == "听书" ? "ts" : "";
UPzg(get, getItem("fyzg", "周更"));


if (!fileExist("hiker://files/cache/FY/image/123云.png")) {
    let api = "http://123.56.105.145/tubiao/";

    let image = ["more/47.png", "more/213.png", "more/288.png", "more/101.png", "more/44.png", "more/83.png", "more/201.png", "more/185.png", "tu/moren.png", "tu/jing.png", "q/103.png", "q/123.png", "more/121.png", "more/299.png", "tu/reso.jpg", "more/23.png", "more/13.png", "more/74.png", "more/239.png", "more/10.png", "more/175.png", "more/145.png", "more/159.png", "more/341.png", "more/104.png", "messy/63.svg", "messy/55.svg", "q/94.png", "q/93.png", "q/106.png", "q/92.png", "tu/fytb.jpg", "system/10.png", "messy/145.svg", "tu/qing.png", "messy/156.svg", "tu/fyq.jpg", "tu/ip.png", "messy/123.svg", "messy/124.svg", "tu/suifeng.jpg", "system/30.png", "system/32.png", "system/31.png", "unframed/85.png", "erdi/142.png", "erdi/16.png", "erdi/14.png", "erdi/282.png", "erdi/45.png", "erdi/219.png", "erdi/320.png", "erdi/1.png", "erdi/68.png", "erdi/155.png", "erdi/160.png", "erdi/214.png", "more/118.png", "more/48.png", "erdi/166.png", "erdi/74.png", "erdi/7.png", "erdi/276.png", "erdi/239.png", "erdi/130.png", "erdi/165.png", "erdi/113.png", "erdi/6.png", "tu/123云.svg"];

    let name = ["首页.png", "分类.png", "追更.png", "搜索.png", "设置.png", "历史.png", "收藏.png", "搜录.png", "默认.png", "精准.png", "单搜.png", "聚搜.png", "分类排列.png", "切换类型.png", "热搜.jpg", "搜标.png", "线路.png", "详情.png", "推荐.png", "热播.png", "电影.png", "剧集.png", "综艺.png", "动漫.png", "其它.png", "关.svg", "开.svg", "功能.png", "播放.png", "配置.png", "关于.png", "风影.jpg", "跳转.png", "更新.svg", "清除.png", "强更.svg", "Q群码.jpg", "IP.png", "正序.svg", "倒序.svg", "随风.jpg", "1.png", "2.png", "3.png", "搜索排列.png", "夸克.png", "阿里.png", "UC.png", "云盘.png", "百度.png", "迅雷.png", "哔哩.png", "斗鱼.png", "虎牙.png", "快手.png", "抖音.png", "网易.png", "更新.png", "排行.png", "影视.png", "小说.png", "漫画.png", "听书.png", "追其它.png", "天翼.png", "移动.png", "磁力.png", "123.png", "123云.png"];

    for (let i in image) {
        let li = image[i];
        let apis = /tu\//.test(li) ? http : api;
        saveImage(apis + li, "hiker://files/cache/FY/image/" + name[i]);
    };
    saveImage("http://123.56.105.145/weisyr/img/Loading1.gif", "hiker://files/cache/FY/image/Loading.gif");
    saveImage("https://www.ctyun.cn/s/q04sv38ZSzTBF4mEHo-3dVsyWITNHb2AHhoKmmcfMQvFLURsx3V4aUR26W8PQUqCT8irIp8kNZZFmZcjQa3tK6eXmmMshjNGFvsiB8BbIGaFz_TPP8FfRddLJaCyZHeBXWsC1L62ycvoisuSuYDeDRtmnH44p_kJ", "hiker://files/cache/FY/image/天翼云.png");

saveImage("https://ecloud.eos-guangzhou-1.cmecloud.cn/op-portal-static/9.4.1_h2/static/ecloud-logo-2023.835f0962.png", "hiker://files/cache/FY/image/移动云.png");

};

function isBase64(str) {
    try {
        const decoded = base64Decode(str);
        const reEncoded = base64Encode(decoded);
        return reEncoded === str;
    } catch (e) {
        return false;
    };
};

let CT = Date.now();
let Json;
let file = getItem("dy", "本地") == "本地" ? "hiker://files/rules/FYJK/ys.json" : "hiker://files/cache/FY/dy/" + getItem("dy") + ".json";
try {
    Json = JSON.parse(readFile(file));
} catch (e) {
    Json = [];
    //saveFile(file, JSON.stringify(Json));
    log(e.toString());
};

let lx0 = getItem("lx1", "全部");
let lx2 = "\\[私\\]|\\[优\\]|\\[免\\]|\\[盘\\]|\\[听\\]|\\[阅\\]|\\[漫\\]|\\[画\\]|\\[短\\]|\\[音\\]|\\[影\\]|盘|短剧|影|剧|视|漫|番|次元|音|歌|曲|DJ|MV|有声|听书|说|阅|读|书|漫画|盤|短劇|劇|視|有聲|聽書|說|閱|讀|書|漫畫";

let lx1 = lx0 == "听书" ? "\\[听\\]|有声|听书|有聲|聽書" : lx0 == "小说" ? "\\[阅\\]|说|阅|读|书|說|閱|讀|書" : lx0 == "漫画" ? "\\[画\\]|漫画|漫畫" : lx0 == "网盘" ? "\\[盘\\]|盘|盤" : lx0 == "私有" ? "\\[私\\]|\\[优\\]|\\[免\\]" : lx0 == "短剧" ? "\\[短\\]|短剧|短劇" : lx0 == "影视" ? "\\[影\\]|影|剧|视|劇|視" : lx0 == "动漫" ? "\\[漫\\]|漫|番|次元" : lx0 == "音乐" ? "\\[音\\]|音|歌|曲|DJ|MV" : "";

let reg1 = new RegExp(lx1);
let reg2 = new RegExp(lx2);

function ttls(ttl) {
    return typeof ttl === 'string' && ttl === '';
};

let off1 = lx0 == "音乐" ? Json.filter(item => item.off === "1" && reg1.test(item.name.replace(/&&.*/g, "")) && !(item.ttl && item.ttl >= 5) && !/\[私\]|\[优\]|\[免\]|\[盘\]/.test(item.name.replace(/&&.*/g, ""))) : lx0 == "动漫" ? Json.filter(item => item.off === "1" && reg1.test(item.name.replace(/&&.*/g, "")) && !(item.ttl && item.ttl >= 5) && !/\[私\]|\[优\]|\[免\]|\[盘\]|盘|漫画|漫畫|\[画\]/.test(item.name.replace(/&&.*/g, ""))) : lx0 == "影视" ? Json.filter(item => item.off === "1" && reg1.test(item.name.replace(/&&.*/g, "")) && !(item.ttl && item.ttl >= 5) && !/\[私\]|\[优\]|\[免\]|\[盘\]|盘|盤|短剧|短劇/.test(item.name.replace(/&&.*/g, ""))) : lx0 == "漫画" ? Json.filter(item => item.off === "1" && reg1.test(item.name.replace(/&&.*/g, "")) && !(item.ttl && item.ttl >= 5) && !/\[私\]|\[优\]|\[免\]/.test(item.name.replace(/&&.*/g, ""))) : lx0 == "小说" ? Json.filter(item => item.off === "1" && reg1.test(item.name.replace(/&&.*/g, "")) && !(item.ttl && item.ttl >= 5) && !/\[私\]|\[优\]|\[免\]|有声|听书|有聲|聽書/.test(item.name.replace(/&&.*/g, ""))) : lx0 == "听书" ? Json.filter(item => item.off === "1" && reg1.test(item.name.replace(/&&.*/g, "")) && !(item.ttl && item.ttl >= 5) && !/\[私\]|\[优\]|\[免\]/.test(item.name.replace(/&&.*/g, ""))) : lx0 == "网盘" ? Json.filter(item => item.off === "1" && reg1.test(item.name.replace(/&&.*/g, "")) && !(item.ttl && item.ttl >= 5) && !/\[私\]|\[优\]|\[免\]/.test(item.name.replace(/&&.*/g, ""))) : lx0 == "私有" ? Json.filter(item => item.off === "1" && reg1.test(item.name.replace(/&&.*/g, "")) && !(item.ttl && item.ttl >= 5)) : lx0 == "短剧" ? Json.filter(item => item.off === "1" && reg1.test(item.name.replace(/&&.*/g, "")) && !(item.ttl && item.ttl >= 5) && !/\[私\]|\[优\]|\[免\]/.test(item.name.replace(/&&.*/g, ""))) : lx0 === "其它" ? Json.filter(item => item.off === "1" && !reg2.test(item.name.replace(/&&.*/g, "")) && !(item.ttl && item.ttl >= 5)) : Json.filter(item => item.off === "1" && reg1.test(item.name.replace(/&&.*/g, "")) && !(item.ttl && item.ttl >= 5) && !/\[私\]|\[优\]|\[免\]/.test(item.name.replace(/&&.*/g, "")));

let myName = getMyVar("namejs", "");
let result = Json.find(item => item.name === myName);
let gsValue;
let timea;
if (result) {
    gsValue = result.gs;
    timea = result.time;
    //console.log(gsValue);
} else {
    gsValue = "JS";
    //console.log("没有找到匹配的项");
};

function sourl(type) {
    try {
        eval("var sojl = " + readFile("hiker://files/cache/FY/sojl.js"));
    } catch (e) {
        var sojl = [];
    };
    sojl.unshift(input); //新增在最前面

    //利用 includes() 去重
    /* let newArr = [];
     wenj.forEach((item) => {
         if (!newArr.includes(item)) {
             newArr.push(item);
         }
     })*/
    //利用 filter() 去重
    let sojl = sojl.filter((item, index) => sojl.indexOf(item) === index);

    if (sojl.length > 25) {
        sojl.splice(-1, 1);
    };
    saveFile("hiker://files/cache/FY/sojl.js", JSON.stringify(sojl));
    putMyVar("Mysou", input);
    if (getMyVar('影搜') != '1') {
        return $("hiker://empty#noRecordHistory##noHistory#fypage").rule((type) => {
            require(config.依赖);
            require(config.依赖.replace(/[^/]*$/, "yso.js"));
            yso(type);
        }, type);
    } else {
        refreshPage();
        return "hiker://empty";
    }
};

//分隔
let piin = getItem("全屏", "off") == "on";
let game = piin ? "##gameTheme#" : "#";

//更新
function gx() {
    if (getItem("dy", "本地") != "本地") {
        try {
            let dy = JSON.parse(readFile("hiker://files/rules/FYJK/dy.json") || []);
            let dyt = dy.find(item => item.title === getItem("dy"));
            if (CT > (dyt.time + 2 * 24 * 60 * 60 * 1000)) {
                let html;
                try {
                    html = fetch(dyt.url, {
                        timeout: 5000
                    });
                } catch (e) {
                    html = {};
                    log(e.toString());
                };
                if (/^(\{\s*"(?:name|host|sourl|sy|fl|er|so|time|ttl|fbhost|sxtit|gs|off)"\s*:\s*").*("\s*\}|\d+\s*\})$/.test(html)) {
                    if (dyt) {
                        dyt.time = CT;
                    };
                    saveFile("hiker://files/rules/FYJK/dy.json", JSON.stringify(dy));
                    saveFile("hiker://files/cache/FY/dy/" + getItem("dy") + ".json", "[" + html + "]");
                    refreshPage(false);
                    return "toast://订阅已更新！";
                } else {
                    log(html);
                    return "toast://订阅更新失败！";
                };
            };
        } catch (e) {
            log(e.toString());
        };
    };

    let SC = parseInt(getItem("清除", "0").replace("SC", ""));
    let SY = parseInt(getItem("sy清", "0").replace("SY", ""));
    let ersc = (CT > (SC + 15 * 24 * 60 * 60 * 1000));
    let sysc = (CT > (SY + 30 * 24 * 60 * 60 * 1000));
    let get1 = getMyVar("清除", "0") == "1";
    if (ersc || sysc || get1) {
        let file = require(http + "sc.js");
        let dele = "/storage/emulated/0/Android/data/com.example.hikerview/files/Documents/cache/FY/";
        let ur1;
        let ur2;
        let toas;
        if (ersc) {
            setItem("清除", CT + "SC");
            clearMyVar("MY_URL");
            if (file.deleteFiles(dele + "erji")) {
                toast("自动清除二级缓存");
            } else {
                toast("没有缓存可清除");
            };

        } else
        if (sysc) {
            setItem("sy清", CT + "SY");
            clearMyVar("换");
            if (file.deleteFiles(dele + "sy")) {
                toast("自动清除首页缓存");
            } else {
                toast("没有缓存可清除");
            };

        } else
        if (get1) {
            clearMyVar("MY_URL");
            clearMyVar("换");
            if (file.deleteFiles(dele + "erji") && file.deleteFiles(dele + "sy") || deleteFile("hiker://files/cache/FY/ChCache.js")) {
                toast("已清除 首页、二级、分页 缓存");
                clearMyVar("清除");
                refreshPage(false);
            } else {
                toast("无需清除");
                clearMyVar("清除");
            };
        };
    };

    let LT = parseInt(getItem("上次", "0").replace("CT", ""));
    let 更新up = (CT > (LT + 2 * 24 * 60 * 60 * 1000)) && getItem("自动", "on") == "on";
    let mytitle = MY_RULE.title != "风影 Beta";
    let 手 = getMyVar("手动", "0") == "1";
    let 强 = getMyVar("强制", "0") == "1";
    let 手d = getVar("fy手动fy", "0") == "1";
    let ver = "250426";
    let zver = getItem("ver", "1");
    if ((ver > zver) && mytitle) {
        let vers = $.toString((ver) => {
            setItem("ver", ver);
            deleteCache();
            return "海阔视界规则分享，当前分享的是：小程序，随风￥home_rule_v2￥base64://@风影@eyJsYXN0X2NoYXB0ZXJfcnVsZSI6IiIsInRpdGxlIjoi6aOO5b2xIiwiYXV0aG9yIjoi6ZqP6aOOIiwidXJsIjoiaGlrZXI6Ly9lbXB0eSMjZnlwYWdlIiwidmVyc2lvbiI6MjUwNDI2LCJjb2xfdHlwZSI6Im1vdmllXzMiLCJjbGFzc19uYW1lIjoiIiwidHlwZSI6ImFsbCIsImNsYXNzX3VybCI6IiIsImFyZWFfbmFtZSI6IiIsImFyZWFfdXJsIjoiIiwic29ydF9uYW1lIjoiIiwieWVhcl9uYW1lIjoiIiwic29ydF91cmwiOiIiLCJ5ZWFyX3VybCI6IiIsImZpbmRfcnVsZSI6ImpzOlxuIHJlcXVpcmUoY29uZmlnLuS+nei1lik7XG4gc3koKSIsInNlYXJjaF91cmwiOiJoaWtlcjovL2VtcHR5IyMqKiIsImdyb3VwIjoi4pGgQeW9sSIsInNlYXJjaEZpbmQiOiJqczpcbiByZXF1aXJlKGNvbmZpZy7kvp3otZYpO1xuIHNvdSgpIiwiZGV0YWlsX2NvbF90eXBlIjoibW92aWVfMSIsImRldGFpbF9maW5kX3J1bGUiOiIiLCJzZGV0YWlsX2NvbF90eXBlIjoibW92aWVfMSIsInNkZXRhaWxfZmluZF9ydWxlIjoiKiIsInVhIjoibW9iaWxlIiwicHJlUnVsZSI6ImV2YWxQcml2YXRlSlMoXCI0SFoxQ0lNeUR5STAranVwVUxDR0pIeVdZWXp2S3RPMzMwclNVZWM3dzVuT0Q1YjJ5TFFpbUxpUFU5VnNGUEhPdEJ2dEtoaWRlcDJhbWhzUUFzODFPcDkxTnN1WUl1WU4ySXkyTklKUUZYcmVCcEZKSlZvb3hlSk9jV1p6MHBkOGRuNHBDdWZvS05jVzYzaWxTaVBPNkRiSEQ0VTFRd1BjaXg3eDhubm5BcUpTRktxMW1QYkNiaExqc2Nld201YWtzcWVuekhsclc2VC8xbldTQ2VlUzZQK2E5UytnK21TK1dKTkdLamZ1LzMwemd2c3U3clFGYTFNQmova3pqeThoWDlzSlVabUxLNUhzaU1EUmNlZnFMUVJMWWhCZXdLZWdyRk9hMnBTMG56bCs0K3ZnUVpLOW0zS0ZLditaQkJucWlrdW1MOFR2SVMvTENCUGJ3c0Jad2hIWXRXVzlKRkp4alJJdG9QSENOZ1ZFcllwVGhkeStuYnAzajBMRk5NUkJCMUxWRG9aZUUrUmJLbisrVnNqeVpLTDZsRTN0RmpVd2JPbGZvRmFtVytKbzVQOEU0NlM0ZDQ0bUhSMEsrSmppYWFuZHZmMnNlTFJ3eFBmZi9nUm1Nd0dHUXJJdXVzYm5VbXZyb3RkOUdXdklkcVBDZ0hpM1FQY0JoZEh1VU5VdHlCRkI5NzRXSndMK1RWUnkvQ24xZ0FNUkdXY2FVK1F4TUtPSUpaeCtLdWd6akpxMlgwNm1QZ2k3OVdmbVlJVGRIeGF1VHYyb0NDZzJRc3JQcnZ2bUkzTVpUTkZTbUZiWTVhOGpRMWJNS0UzUzg0Zk8zdXk5dFhPN00vMGp2VnEzbmwzL2hvS3NpZ2dTckh1anhKK2xVUWJFNVJQSG4yQUdEdVE3S1RNcGowSjVmYlZiTGdRSDRsQVZpTXpIdGNPb0xpdEMvRW5aSkhJZGpVNHBFbG5RTnpKdElmcmYyMEJoQ015Q1JQTmEvb3pZa1BHSldLVk1PRkxrS0ZsUTdCSDRldGRPSkFqVnpmUGQ0a0dXa1lEdWxxdFVJejB6R255TndPY2ZDWHIvUUxtRlNXUEJBWW53d0t0dU0rTXdjVkVHUVdVYk1Qb0VQVDVZeFBHR3BpR0FlN1N2NVpWNm11NktYNU9ydWJ6QVJacGV4dUhLb2Y3bVI4cys5aCtMdTlXVjdBZVhRbEpPMWFycXFrMUxEMDAxLzlicjlCd0R3d1V0dEc5NFpkbHVqVnZVR3UzcUhldFZwYUlNRHdFMTZGQ2FcIik7IiwicGFnZXMiOiJbe1wiY29sX3R5cGVcIjpcIm1vdmllXzNcIixcIm5hbWVcIjpcIuWvvOWFpeWPo+S7pFwiLFwicGF0aFwiOlwiaW1wb3J0XCIsXCJydWxlXCI6XCJldmFsUHJpdmF0ZUpTKFxcXCJkNG1uK0dwTEdLT3BEN1A1dUJwS2JXUUp2ODVIcjk4amgwUnpsa01IbTg2cWdPRER3MWlMVDllZVJGWCtGZllpUXl0Y05VMUpQS2I2a2U5MFh0RUZOc0I4cjNpcXY4Q2pzS2R1QmtaMi8xbmtjazVDZjlOQTluNnJWdHQwOW5ZVjY1RkNDSHJWWjhTSEsrc2x1TWgrMHEyWm1ON1F0L05PbGIxVzJhZVpnL3gzVlFWNmRvZ01KNG1ESDVlQldOYmQvMnF4L2lucTJOd3gzbnFmWkdJMjBLVEoydGY0L21KdmhzMGIxQUtjVGoraEV0Z05vbm8xWUlWRHBvOWxnaVNBMXRtaktlc3ZCbjdZR2xVMWxiVE9ma0N3VWd1bGpzdjdCek5jd2xIeEkzMk5HZGF6dkIwd0QvdFRiUWdrdFZqZzVvQUg0ZVowaFVUV2VrNFRnY3I0QjBRUHcrU0ROSXlNNVpaUlI4ZGRJd0NHMytyQWcxV25WWWdsMVZ2dTNhaEgyUERRQ3ZqdFlUaXVLT0htNTl3U1ZBYXl4THR6UzVRdmVxdzBhWWFLd3pObzNabytsejlBcm4yclUzRXFuZndRK2J3NTd2K1lQUDJpWS85aUsvdDFhNlo2cEx2ekx4dmVPaitIUVR1cmt0REQ0ckR6Nk15dGp0eHlGOE1yYkdFZmtTcGg2Z2NoWFM0NktJWnNiMUdkQTBkNVNleEk0dFJnT2MvWkhBYm1TS3QyaG9IWUFPUkRPTjdQRnd6MlNHNjdYcm5RS0ViWXArbFhYbHR3RVNRZ1B4cGJQUUthL290WlJQYm1GY0VaTlErN0o0WG1wRDNjN1F5azYyalg5N1JNQUw1SVlTQWc3MmQ3RllEZENuMFM5dUxJOTlZckJCQjFwb29VRHdidWFRd3IwcWtTbFJXUFlnUGVQVmpuQk5jaDBZakJVU2FTS1NLSHZtNmFQZlFTd1VCSjdHaFdhWGlsakpUY2pUN0M4Q2xpT0gwSENLQW5JRGU1WkdmeXZ6dzdldkRnSHZsUXlzYWp1UTZhSmVGVTZOZ2cvMWNyNDJxK21RZFE1ZUZWSktMdVJMV2dJR0QwVGQ0RDVoMjgzWlYrMFdHbDRjTjNvQ3FvUnhvbzM1M05GdXo1Sng5UXFIMDFBbUYyNGpmdWtMZ1hseUlpU0JVY2RxOXp2bmt4VUg0Visza3l2ek5pRm9mVS9obGJ0WnAxWWtkM1VycUk5RDlqM2sxWXNTNVl0REg5NzBYWm1DR0svbmF0SWpyUzVRTER4SlEyaFg3K2I4TEdoZ0lmdkRNMFFodDJ2ZU4xS3Y1UXZpYlRVVVl0eW1EOTZqS0tNOUMwdEJlRm04SFd4L0phbGhEbHhNL0VsQk1QOWpzYWhtZzkxZjBuRjZhUm1BRVV1S3FEY3VoakVFMTRSSmR2OE91aDBVY3EySzBIaXN3MjFHNG5rTlVHTmNSelNaUTUxbGNzajIvTmJiVktkTjBQZUZqYjZoS05PaGFQOE14cElYRlZ4bnN5aGFYYWlmd2FNc052YURVdGZodnplSmora00wM2xuczJPZnlaQ3ZNanY3ZjNMdzFKY1FHdG53bzNoUVVxNlJVd2wvQ2UrL1RmeXl2TFNOWldjL3NJbi92V1NBSFU5dU14eUVSY0Nua1BiS3h4d3huNUt0ZDFjcjdDajU2cTZ2THJsY3cwTDZ3WmdrVGtMZWU1aGF6bzhqeCtQYXFmZTRFUy81U0YxUkZHdGsvWnhPVjVTT3FGUjBJeCt5ZjFZN0l2aXN0ekFidDl5cW0yUDJXVVRack9vd1NjMzZPOHFsTDQ0dmkvZUhFWE8rZjN5cnZmMHpXTXJ6eU1ud3JWVFlyWWFCeU1sRm1uUSs3TlFWeklvQkMzY1dUeXYyUndzQVlSZUd1SHVZSjlhRUIwMUNLSHh6eDYrNmdud3p5RU5iUDg2MjBZYkJub2lBakpQOVNnclRGUFRkVElXaFEyYWhuUldwaTZ6Yk9ub1RpZVBwUFdseUZKR2ZIZE9SV1dTWGNRN0p5Skk0ajhTSHJKNy9VNVdkQTRzck9MOGkwUXVEcjNSZU5QcUIyM0pnTHkrZDFjeVJTR3hEODBLTW93emJLSnRldXlybzZnT3FXYlU5bmhRamRNVnI3YS9pOE8vMEpKaENQbzU0MXNvV1dhdUdwODRaYXJOQkwyYXNrVmtKZjNJSW9KVnpQZ1BBNXFaaXNsTWNFdEdibURELzJldjdKcy9QRG1KeUdNYUwyaDF2cnp4Vk00Vmd6eXBZcnRlNGZoT2xVR2Y5NlJtQUROUnE4d1JzdTZ2bGVxejNudTdPeFdsdjBnRU16SHFxby9oWFczWnduZ1ZNblMzWGVJejloSDFDdWVVV2diMVRVY3JUTEJQWk5oR1oySEY2dE5OUEl1a2JrdlhvdEJPUVlDQ29KRUticEZuanRQKzhZdWF6RlE2TXFtam4wS3dJY3RjSDVmaitrWjdzT0hxYXUvaDN3bHlMWXU1aHVTQXM4azRRZmNwZnBEREYwTUZ2aDAwY0NsRS9vV0dJOEV6QzRQcDRtQXJ4VmZEeGpWNm55UGVLTWxaaDZTOVpHSi9FVVhkN0pFejdKYTVuK2VkQ3A2UklsSlZRbW42NU5QdU1sc3M4c1NTWkgrNXZ6ZStJZmlHMVlWbVpnMldJY3k1TkZWam1yY1plRWRCWDlBQUhWZDZoSHZDLzJXQzZiQUFFNjFESldIOEhBQlEydWwwVEtDWndna28vRW5IY3dmaWE3SUt3MnlDWlluVkNUb1B0MXJ5MTBaRm5LV1dwWU9lTTBUU2lzeGZGK3NzbUJDZkYwMm1nc3FsSWxjV04xaStKN25LeGFNejY0RzVsMlBDREs4Q1hJVW9CbVNBbURyVXloU1pFVUZoQTJTS3lML2F3Yi85UGR6Z2tpdDdONy9scUtkNVJ0OWlkYkF4WHpUQkRyWkwwc1U3UHY0Y09obWt3bzJxS1hxbVpSdXpTbW9MeE4zVzNNL01PL1kwZmpWR2s0aHJVWC8wVkpUdGJ3YXRBT1k5NGt4b29KQUJsdEM1SUxwbGpZRGVLQVJzOGhSVkd4N29CeUdLMGw1WDJMemVkUFlxbzBXcHNRVGU1a1VManJaeVV4VmpPV0Z6Rm5KcDY2UUF3OEVzUTBwL2NpWHUxVlo3QjdCTEx5eVMvQWZMU3BqZFhSdW1nT1VzNnBNVUhPYldrZHFQUTBIWHdCU25VU3NCSCtKZ29QV2hiektiUHc4Umh0MnZlTjFLdjVRdmliVFVVWXR5bURrdGM5QjVDMGk2VVBnMXNCbUZBa3lheXBKYmliUWxsRVpwQWo1TkFOYWlTNXBKT2h3Y2NUR1dXcFdwL2dhMWIxQkxUTnhzQkpKYmtkc1lSOGUvMUhwZzZtLzlrcXBORG1yMXYvU1p5YVlsZzlicXdiM2Y0cTZydnI4NVdDdnZtSzVIOXVzMlJMZUlOMll4VU5Pb2FwenFkUWpHUTl0dEVOdnhuQkRjQ0Z1YzZYSTRML1ljTk9FdjhDbUIxR2VtTWZ0anhvcHFuekZ2a2ptL3NsdVBkSDN5S3orRTlXWFRzaG5ORVBFdnZtbUdLSXZxQ0VDY2RwMlRnLzRhdDdVa053OFFrUlBDTjRJM2p3OVFyRWRiaXc0TUZpalU1Wkt1eWxjdnk3RUNlYmE1LzhlR3RDYTMrT0RNZm1oMGZocHo3RXhHOTM2QmJueWJ6aDBlQ3JDRzdZRi9VN1JlOTVmTFZnOFRQdkRlZFRvcWJmUXc2KzI3REdNSzhLMmF2Q0ZNb1JrSHRzNFl6dndEWHhUTjlKUjU1UlZTWDN0clY3UWw3UGZCRENYMW84RjVydDJxV25FWUJqRGM5d2NwS2NTN1BQWW9iaE00c3NZclI0Wm9UbjdsOE1PT211Qk9kdDNac2lkK1NxWVBjcksxZTFkaXFwWjdkbVhscURRaUFGbk5uVDJ4cDJnMWFLS3M0ZkhwN2hETE9Lb1c5cWNsNTAzUStYeEdWbUpNaUhvTkhKR252dE1KcDZjbFlmQTVidlZTb3FZL0x0bVY5SkV0UklYV1krL0xzZ0V5Z2krQi9ERkNNdjQ0aGFFTkhML2k4WnZybi9yUGE0S0NlYkkyTlI3R0FTUDNXQjIwZ1RiMjNiK0s2OFlITkhLUGk3S1pDck9PcUI2WW5YNlQ1WElyZlNaMHBVdFI5dlFFQnlMZmxHdSthNmxlUE1XY2ZxYUZOK01RaEJLWm8xZXZkVkFyNVBCekJjcTVkWlJXYmpjQTdmTm1RZWE0RjNwYlJmSDFhK01zcG9CSnI5WjJtRlF6WnVzekdKN05oQzBLYlM3VlVxOVhSTVdQRzZEL1R1VytJclg4Y0p2cmpnTHAzUFNOeEEvelFLSEdrMHV1L3ZjYjh3d1NidElmVWtHL2NwTTBBTTVlWmtjSCtRTjZ0TFAxSDdyeUd6blRZNmQreE9OU0JlM0pjTVhVKzI3Um54ajhSVmxpRVd4MjdsQjR2d0FPU0RXY1lFQzNhUzc5MndVTWJQbVl5bzlzT0xSc09ONjVsVVZzbmpINVpzQ2kvaVdGZlVaVXcwVXF1Qjd2Y3huR3d6TGl6WFpEREdrNHZBYTUzL3dCa3Q2NVZJZWh2cUthbjJMNlVoK3ZWRnZ6Z292S3pURERPUkhoUWxjOTUwS3ltcFRCcUZvcVJIRkFpUzJGZmRITDRKOGMycjEvRGwrbThsT3Q3L3ZzSDd4QU44OHAwQUZTbWFXaUdLL3ZaN3JnMXJ3ZEltMTBzR2dxeGFqL1F4UUpYTWdJNkhWMWVYZ0hqM3ZaSlFGa2xzRno0Zzl1aTRYVHRsSnRFTHdiZ3lVaFhPQXl2TGV2Ly9MS2xhcE1iV2R2a1FsYnJoTW5tMnpkSmtjbnBTYkV3aklXcld4Vk5Cd1llcHA5TjROV3FibWJKUnRUZThoTHRkTTBCZG5lVW5sMEQ3Ync0Ykl0UmtrMzhDQ0FMZjNtUForeTBFZUhuU1piUVJ0bU1mZEFTRGNMajhpQTdKdUNJamxmbXBhYVE9PVxcXCIpO1wifSx7XCJjb2xfdHlwZVwiOlwibW92aWVfM1wiLFwibmFtZVwiOlwi5a+85YWl56Gu6K6kXCIsXCJwYXRoXCI6XCJjZm1cIixcInJ1bGVcIjpcImpzOlxcbmV2YWxQcml2YXRlSlMoXFxcIlppWlVuTVpCaVovMlRPdUpnOUVScERycnc0YWlSUFJ5SHA2ZmpvbXdjaWhNc1hUNllaSHFTa05vTlp2S3hEV0pneEswam9pamh1UW9nOGR0ejVSVnFoYXR5RzljbXAwVE1ieUc0SXZidTA1T2NMeXRWY1dzemRsMXc1dXBlL3lnMDEvc25vd3VmVDBTdFo4ekorNGZwSXZXVUtzY3hTS3dzemtsWVhodG1rMldvL0E2RzJkUVhjOXYzSXpISm9senpOa1k2NFRpVlVPNzB4MHcrR3llckE9PVxcXCIpO1wifV0iLCJpY29uIjoiaGlrZXI6Ly9maWxlcy9jYWNoZS9GWS9pbWFnZS/po47lvbEuanBnIiwicHJveHkiOiIifQ=="
        }, ver);
        confirm({
            title: "发现新版本：" + ver,
            content: '新版本需重新导入，否则会出现未知错误，是否立即导入？',
            confirm: vers,
            cancel: vers
        });
    } else
    if (更新up || 手 || 强 || 手d) {
        function up() {
            if (强 && bbh != "报错") {
                let file = require(http + "sc.js");
                let dele = "/storage/emulated/0/Android/data/com.example.hikerview/files/Documents/cache/FY";
                file.deleteFiles(dele);
                deleteCache();
                clearMyVar("强制");
                refreshPage();
                toast("强制更新完成");
            } else {
                let nowb;
                try {
                    eval("let current = " + readFile("hiker://files/cache/FY/Changelog.js"));
                    nowb = current[0].版本;
                } catch (e) {
                    nowb = "1.0";
                };
                let lsh = getMyVar("临时", "1.0");
                putMyVar("更新", newb);
                let ych = getMyVar("更新");
                if (ych > nowb && ych > lsh || ych > nowb && (手 || 手d)) {
                    clearMyVar("手动");
                    clearVar("fy手动fy");
                    log("当前版本: " + nowb + " < 新版本: " + newb + "\n更新日期: " + 日期 + "\n" + 内容)
                    confirm({
                        title: "风影更新提示",
                        content: "当前 V" + nowb + " ➠ 新版 V" + newb + "\n是否更新？",
                        confirm: $.toString((neb, ych, http) => {
                            /*let file = require(http + "sc.js");
                            let dele = "/storage/emulated/0/Android/data/com.example.hikerview/files/Documents/cache/FY/sy";
                            file.deleteFiles(dele)*/
                            deleteCache();
                            let Changelog = neb;
                            saveFile("hiker://files/cache/FY/Changelog.js", JSON.stringify(Changelog));
                            //clearItem("m1");
                            //clearItem("s0");

                            refreshPage();
                            toast("更新完成");
                            require(config.依赖);
                            change();
                        }, lisb, ych, http),
                        cancel: $.toString((ych) => {
                            putMyVar("临时", ych);
                            toast("取消更新");
                        }, ych)
                    })
                } else {
                    clearMyVar("手动");
                    clearVar("fy手动fy");
                    toast("已是最新版");
                }
            }
        };
        if (更新up) {
            setItem("上次", CT + "CT");
        };
        let bbh;
        let lisb;
        let newb;
        let 日期;
        let 内容;
        try {
            bbh = fetch(http + "bbh.js", {
                timeout: 3000
            });
            lisb = /http/.test(http) ? eval(bbh) : eval(JSON.parse(bbh).rule);
            newb = lisb[0].版本;
            日期 = lisb[0].日期;
            内容 = lisb[0].内容;
        } catch (e) {
            bbh = "报错";
            log(e.toString());
        };
        if (bbh == "报错") {
            let codeberg = "https://codeberg.org/suifeng/yin/raw/branch/master/";
            let framagit = "https://framagit.org/suifeng/yin/-/raw/master/";
            let git = /codeberg/.test(http) ? framagit : codeberg;
            try {
                bbh = fetch(git + "bbh.js", {
                    timeout: 3000
                });
                lisb = eval(bbh);
                newb = lisb[0].版本;
                日期 = lisb[0].日期;
                内容 = lisb[0].内容;
            } catch (e) {
                bbh = "报错";
                log(e.toString())
            };

            if (bbh == "报错") {
                clearMyVar("强制");
                clearMyVar("手动");
                toast("获取远程数据时，出现未知错误");
                confirm({
                    title: "远程仓库失联",
                    content: "请勿强制更新或清理\t" + MY_RULE.title + "\t缓存\n否则必定报错",
                    confirm: null,
                    cancel: null,
                })
            } else {
                saveFile("hiker://files/rules/FYJK/git.txt", git + "ycl.js");
                up();
                back(true);
            }
        };
        up();
    };
};

//首页
function sy() {
    putMyVar("vers", MY_RULE.version);
    gx();
    let z = [];
    let d = [];
    let fr = off1.filter(item => (item.fl != "" || item.sy != "") && item.gs != "HOST" || item.gs == "HOST").map(item => item.name.replace(/&&.*/, ""));
    let rn = ["首页"].concat(fr);
    if (getItem("首页", "off") == "on" && getItem("Mysye", "首页") == "首页" && getMyVar("Myfl") == "" && getMyVar("Mysou") == "") {
        let arr = fr;
        let suii = [];
        let num = 1;
        while (suii.length < num) {
            var temp = (Math.random() * arr.length) >> 0;
            suii.push(arr.splice(temp, 1));
            storage0.putMyVar("sui", suii);
            var ssui = getMyVar("sui").replace(/\[|\]|\"|\./g, '');
            setItem("m1", ssui);
            clearMyVar("待");
            deleteItemByCls("so_id");
            clearMyVar("dxz");
            clearMyVar("Myurl.url");
            clearMyVar("Myurl.title");
            clearMyVar("Myfl");
            clearMyVar("sd_zh");
            clearMyVar("flxz1");
        };
    } else {
        deleteItemByCls("so_id");
        clearMyVar("dxz");
    };

    let sui = getItem("m1", "选源");

    let syurl;
    let cesy;
    try {
        let yu = Json.find(item => item.name.replace(/&&.*/, "") === sui); //log(yu)
        if (yu != undefined) {
            try {
                if (yu.fbhost == "") {
                    let s = yu.host;
                    let syur = new Function(s);
                    toast("获取域名中，请稍后！");
                    syurl = syur();
                    let dList = Json.map(item => {
                        if (item.name.replace(/&&.*/, "") === sui) {
                            const newItem = Object.assign({}, item, {
                                fbhost: syurl
                            });
                            return newItem;
                        }
                        return item;
                    });
                    saveFile(file, JSON.stringify(dList));
                } else {
                    syurl = yu.fbhost;
                }
            } catch (e) {
                syurl = yu.host;
            };
            cesy = yu.sy;
        } else {
            syurl = "http://fenying";
            cesy = "";
            clearItem("m1");
            clearItem("Mysye");
        };
    } catch (e) {
        clearItem("m1");
        refreshPage(false);
    };

    if (cesy == "*") {
        MYURL = syurl;
    } else {
        MY_URL = getHome(syurl);
    };
    log(sui + " - " + getHome(syurl));

    let bia = rn.map((tit) => {
        return tit == sui ? '‘‘’’<b>' + tit.fontcolor('#FA7298') + '</b>' : tit;
    });

    let 首页 = $("#noLoading#").lazyRule((sui) => {
        let Json;
        let file = getItem("dy", "本地") == "本地" ? "hiker://files/rules/FYJK/ys.json" : "hiker://files/cache/FY/dy/" + getItem("dy") + ".json";
        try {
            Json = JSON.parse(readFile(file));
        } catch (e) {
            Json = [];
            console.error('解析文件内容出错:', e);
        };

        function bia(Json, sui) {
            let fr = Json.filter(item => (item.fl != "" || item.sy != "") && item.gs != "HOST" && !(item.ttl && item.ttl >= 5) && item.off == 1 || item.gs == "HOST" && !(item.ttl && item.ttl >= 5) && item.off == 1).map(item => item.name.replace(/&&.*/, ""));
            let rn = ["首页"].concat(fr);
            let bia = rn.map((tit) => {
                return tit == sui ? `‘‘’’<b>${tit.fontcolor('#FA7298')}</b>` : tit;
            });
            return bia;
        };

        const hikerPop = $.require(config.依赖.replace(/[^/]*$/, "hikerPop.js"));
        //hikerPop.setUseStartActivity(false);
        let spen = 3;
        let names = bia(Json, sui);
        let inputBox;
        let pop = hikerPop.selectBottomRes({
            options: names,
            columns: spen,
            title: "订阅-" + getItem("dy", "本地") + " ➠ " + sui.replace("首页", "未选择"),
            noAutoDismiss: true,
            position: 1,
            extraInputBox: (inputBox = new hikerPop.ResExtraInputBox({
                hint: "输 入 关 键 字 查 找",
                title: "类型",
                onChange(s, manage) {
                    //log("onChange:" + s);
                    let lxx = getItem("lx1", "全部");
                    const regexPattern = s === "听书" ?
                        "^(?!.*(\\[私\\]|\\[优\\]|\\[免\\])).*?(\\[听\\]|有声|听书|有聲|聽書)" :
                        s === "小说" ?
                        "^(?!.*(\\[私\\]|\\[优\\]|\\[免\\]|有声|听书|有聲|聽書)).*?(\\[阅\\]|说|阅|读|书|說|閱|讀|書)" :
                        s === "漫画" ?
                        "^(?!.*(\\[私\\]|\\[优\\]|\\[免\\])).*?(\\[画\\]|漫画|漫畫)" :
                        s === "网盘" ?
                        "^(?!.*(\\[私\\]|\\[优\\]|\\[免\\])).*?(\\[盘\\]|盘|盤)" :
                        s === "私有" ?
                        "\\[私\\]|\\[优\\]|\\[免\\]" :
                        s === "短剧" ?
                        "^(?!.*(\\[私\\]|\\[优\\]|\\[免\\])).*?(\\[短\\]|短剧|短劇)" :
                        s === "影视" ?
                        "^(?!.*(\\[私\\]|\\[优\\]|\\[免\\]|\\[盘\\]|盘|短剧|短劇|盤)).*?(\\[影\\]|影|剧|视|劇|視)" :
                        s === "动漫" ?
                        "^(?!.*(\\[私\\]|\\[优\\]|\\[免\\]|\\[盘\\]|盘|漫画|漫畫|盤|\\[画\\])).*?(\\[漫\\]|漫|番|次元)" :
                        s === "音乐" ?
                        "^(?!.*(\\[私\\]|\\[优\\]|\\[免\\]|\\[盘\\])).*?(\\[音\\]|音|歌|曲|DJ|MV)" :
                        s === "其它" ?
                        "^(?!.*(\\[私\\]|\\[优\\]|\\[免\\]|\\[盘\\]|\\[听\\]|\\[阅\\]|\\[漫\\]|\\[画\\]|\\[短\\]|\\[音\\]|\\[影\\]|盘|短剧|影|剧|视|漫|番|次元|音|歌|曲|DJ|MV|有声|听书|说|阅|读|书|漫画|盤|短劇|劇|視|有聲|聽書|說|閱|讀|書|漫畫)).*$" :
                        "^(?!.*(\\[私\\]|\\[优\\]|\\[免\\])).*?" + s;

                    let lists = names.filter(o => {
                        try {
                            const regex = new RegExp(regexPattern, 'i');
                            return regex.test(o);
                        } catch (error) {
                            return false;
                        }
                    });

                    manage.list.length = 0;
                    lists.forEach(i => {
                        manage.list.push(i);
                    });
                    manage.change();
                },
                defaultValue: getItem("lx1", "全部").replace("全部", ""),
                click(s, manage) {
                    let 私;
                    if (getItem("隐藏", "off") == "on") {
                        私 = "私有";
                    };
                    let titl = ["全部", "影视", "短剧", "动漫", "网盘", "音乐", "漫画", "小说", "听书", "其它"];
                    if (私) {
                        titl.push(私);
                    };
                    let lei = titl.map((tit) => {
                        return tit == getItem("lx1", "全部") ? `““<b>${tit}</b>””` : tit;
                    });
                    hikerPop.selectCenter({
                        options: lei,
                        columns: 2,
                        title: "类型",
                        click(c, manage) {
                            let cc = c.replace(/\“|\”|\<b\>|\<\/b\>/g, "");
                            inputBox.setDefaultValue(cc.replace("全部", ""));
                            setItem("lx1", cc);
                            clearItem("m1");
                            clearItem("s0");
                            refreshPage(true);
                        },
                    });
                },
                //titleVisible: true
            })),
            click(s, i, manage) {
                pop.dismiss();
                let ss = s.replace(/.*FA7298"\>(.*?)\<\/font.*/g, "$1");
                setItem("m1", ss);
                setItem("Mysye", ss);
                clearMyVar("待");
                deleteItemByCls("so_id");
                clearMyVar("dxz");
                clearMyVar("Myurl.url");
                clearMyVar("Myurl.title");
                clearMyVar("Myfl");
                clearMyVar("sd_zh");
                clearMyVar("flxz1");
                if (getItem("Mysye") == "首页") {
                    clearMyVar("Mysou");
                    clearMyVar("Myfl");
                }
                refreshPage(true);
            },
            longClick(ne) {
                let n = ne.replace(/.*FA7298"\>(.*?)\<\/font.*/g, "$1");
                if (n != "首页" && getItem("dy", "本地") == "本地") {
                    hikerPop.selectCenter({
                        options: ["完整编码", "文件Hiker", "文件TXT"].concat(getPastes()),
                        columns: 2,
                        title: "分享 " + n,
                        click(s) {
                            hikerPop.runOnNewThread(() => {

                                let list = Json.filter(item => {
                                    return item.name.replace(/&&.*/g, "") == n;
                                });
                                //let no = list.length;
                                let resb64 = base64Encode(JSON.stringify(list));
                                let getPass = (n, rule, type) => "海阔视界「风影源 - " + n + "」，复制整条口令自动导入$" + rule + "$" + type + "@import=js:$.require('import?rule='+" + JSON.stringify(MY_RULE.title) + ")(input)";

                                if (s == "完整编码") {
                                    return "copy://" + getPass(n, resb64, "a");
                                } else if (getPastes().includes(s)) {
                                    let share = sharePaste(resb64, s);
                                    return "copy://" + getPass(n, base64Encode(share), "b");
                                } else {
                                    let path = "hiker://files/_cache/风影源 - " + n + "." + (s === "文件Hiker" ? "hiker" : "txt");
                                    writeFile(path, getPass(n, resb64, "c"));
                                    return "share://" + path;
                                }
                            })
                        },
                        //titleVisible: true
                    });
                };
            },
            menuClick(manage) {
                let teurl;
                try {
                    teurl = JSON.parse(readFile("hiker://files/rules/FYJK/dy.json"));
                } catch (e) {
                    teurl = [];
                };
                let name = ["改变排列", "滑到顶部", "滑到底部", "本地"].concat(teurl.map(item => item.title)).map((tit) => {
                    return tit == getItem("dy", "本地") ? `““<b>${tit}</b>””` : tit;
                });
                hikerPop.selectCenter({
                    options: name,
                    columns: 3,
                    title: "订阅切换",
                    click(s, i) {
                        if (i === 0) {
                            spen = spen == 3 ? 2 : spen == 2 ? 1 : 3;
                            manage.changeColumns(spen);
                        } else if (i === 2) {
                            manage.scrollToPosition(manage.list.length - 1, true);

                        } else if (i === 1) {
                            manage.scrollToPosition(0, true);

                        } else {
                            let ss = s.replace(/\“|\”|\<b\>|\<\/b\>/g, "");
                            pop.dismiss();
                            setItem("dy", ss);
                            clearItem("m1");
                            clearItem("s0");
                            clearMyVar("待");
                            deleteItemByCls("so_id");
                            clearMyVar("dxz");
                            clearMyVar("Myurl.url");
                            clearMyVar("Myurl.title");
                            clearMyVar("Myfl");
                            clearMyVar("sd_zh");
                            clearMyVar("flxz1");
                            if (getItem("Mysye") == "首页") {
                                clearMyVar("Mysou");
                                clearMyVar("Myfl");
                            }
                            refreshPage(true);
                            toast("已切换 " + ss);
                        }
                    },
                });
            },
        });
        return "hiker://empty";
    }, sui);

    let 分类 = MY_URL == "http://fenying" ? "toast://请选择首页" : cesy == "*" ? "toast://当前无首页，已显示分类" : $(syurl + "#noLoading#").lazyRule((url) => {
        clearMyVar("Mysou");
        clearMyVar("Myurl.title");
        //putMyVar("Myfl", "电影");
        //putMyVar("Myurl.url", input);
        return $("hiker://empty#" + url + "#noRecordHistory##noHistory##fypage").rule(() => {
            require(config.依赖);
            require(config.依赖.replace(/[^/]*$/, "fenlei.js"));
            fenlei("1");
        });
    }, syurl);
    let 追更 = $("hiker://empty#noRecordHistory##noHistory#noRefresh#").rule(() => {
        require(config.依赖);
        Wp()
    });
    let 影搜 = $("hiker://empty#noRecordHistory##noHistory#fypage").rule(() => {
        require(config.依赖);
        require(config.依赖.replace(/[^/]*$/, "yso.js"));
        yso("1");
    });
    let 设置 = $("hiker://empty#noRecordHistory##noHistory##noRefresh#").rule(() => {
        require(config.依赖);
        she();
    });

    let urlu = [首页, 分类, 追更, 影搜, 设置];
    let titll = [sui, "分类", "追更", "搜索", "设置"]

    let 图 = "hiker://files/cache/FY/image/";
    let pici = ["首页.png", "分类.png", "追更.png", "搜索.png", "设置.png"];

    for (let i in titll) {
        z.push({
            title: "‘‘’’<b>" + titll[i] + "</b>",
            url: urlu[i],
            img: 图 + pici[i],
            col_type: "icon_5",
            extra: {
                inheritTitle: false,
                longClick: i == 0 && getItem("dy", "本地") == "本地" ? [{
                    title: "删除 " + sui,
                    js: $.toString((name) => {
                        return name == "首页" || name == "选源" ? "toast://当前未选择源" : $("删除后不可恢复，确认删除  " + name + " ？").confirm((name) => {
                            let list;
                            let file = "hiker://files/rules/FYJK/ys.json";
                            try {
                                list = JSON.parse(readFile(file));
                            } catch (e) {
                                list = [];
                                console.error('解析文件内容出错:', e);
                            };
                            const result = list.filter(item => {
                                return !(item.name.replace(/&&.*/g, "") == name);
                            });
                            saveFile(file, JSON.stringify(result));
                            clearItem("m1");
                            refreshPage(false);
                            return "toast://已删除 " + name;
                        }, name);
                    }, getItem("m1", "首页"))
                }] : ""
            }
        });
    }

    if (getItem("搜索", "on") == "on") {
        z.push({
            title: "搜索",
            desc: "可 以 少 字 ，不 可 错 字 ！",
            url: $.toString((sui, myurl) => {
                putMyVar("Mysou", input);
                if (getMyVar("Mysou") && myurl != "http://fenying" || getItem("s1", "0") == "1" || /pan\.quark\.cn|cloud\.189.cn|yun\.139|www\.123[a-zA-Z\d]{3}\.com|www\.ali(yun|pan).*?\.com|pan\.baidu\.com|drive\.uc\.cn|magnet:|\.torrent|ed2k:|pan\.xunlei\.com/.test(input)) {
                    if (getItem("s1", "0") != "1" && myurl != "http://fenying") {
                        setItem("s0", sui);
                    };
                    return input + $("#noLoading#").lazyRule(() => {
                        require(config.依赖);
                        return sourl("1")
                    });
                } else {
                    return myurl == "http://fenying" ? "toast://请选择首页" : "toast://请输入关键字";
                }
            }, sui, MY_URL),
            col_type: "input",
            extra: {
                //pageTitle: "搜索",
                inheritTitle: false
            }
        });
    };

    if (getItem("记录", "off") == "on") {
        let name = ["观影记录", "我的收藏"];
        let curl = ["hiker://history?rule=", "hiker://collection?rule="];
        let slpic = ["历史.png", "收藏.png"];
        for (let s in curl) {
            z.push({
                title: name[s],
                img: 图 + slpic[s],
                url: curl[s] + MY_RULE.title,
                col_type: "icon_small_3"
            })
        }

        z.push({
            title: "搜索记录",
            img: 图 + "搜录.png",
            url: $("#noLoading#").lazyRule((sui) => {
                if (getMyVar("dxz", "off") == "on") {
                    deleteItemByCls("so_id");
                    putMyVar("dxz", "off");
                } else {
                    try {
                        eval("var sojl = " + readFile("hiker://files/cache/FY/sojl.js"), 0);
                    } catch (e) {
                        var sojl = "";
                    }
                    if (sojl != "") {
                        titls = sojl.map(li => {
                            return {
                                title: "‘‘’’<small>" + li + "</small>",
                                url: li + $("#noLoading#").lazyRule(() => {
                                    require(config.依赖);
                                    return sourl("1")
                                }),
                                col_type: "flex_button",
                                extra: {
                                    pageTitle: "搜索",
                                    cls: "so_id"
                                }
                            }
                        });
                    } else {
                        titls = [{
                            title: "‘‘’’<small>没有搜索记录</small>",
                            url: "hiker://empty",
                            col_type: "text_center_1",
                            extra: {
                                cls: "so_id",
                                lineVisible: false
                            }
                        }]
                    };
                    addItemAfter("sojl_id", titls);
                    putMyVar("dxz", "on");
                };
                return "hiker://empty"
            }, sui),
            col_type: "icon_small_3",
            extra: {
                id: "sojl_id",
                longClick: [{
                    title: "清除记录",
                    js: $.toString(() => {
                        deleteFile("hiker://files/cache/FY/sojl.js");
                        deleteItemByCls("so_id");
                        clearMyVar("dxz");
                        return "hiker://empty";
                    })
                }]
            }
        })
    };

    z.push({
        col_type: "big_blank_block"
    });

    if (MY_URL == "http://fenying") {
        z.push({
            col_type: "big_blank_block"
        }, {
            title: '‘‘’’<font color="#b0e0e6">点击选择首页</font>',
            desc: "0",
            url: 首页,
            img: 图 + "风影.jpg",
            col_type: "card_pic_1"
        });
    };
    if (MY_URL != "http://fenying") {
        z.push({
            img: 图 + "Loading.gif",
            url: "hiker://empty",
            col_type: "pic_1_center",
            extra: {
                cls: "cls_load"
            }
        })
    };
    setPreResult(z);

    if (syurl != "http://fenying") {
        if (cesy != "*") {
            if (MY_PAGE == 1) {
                require(config.依赖);
                xsy(MY_URL, d, sui, "1");
            };
        } else {
            putMyVar("flurl", syurl);
            require(config.依赖);
            require(config.依赖.replace(/[^/]*$/, "fenlei.js"));
            fenlei("1")
            deleteItemByCls("cls_load");
        };
    };
};

//轮播Html
let getHtml = (image) => `
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>轮播图</title>
    <style>
        .carousel-container {
    width: calc(100% - 10px);
    margin: 0 auto;
    position: relative;
    overflow: hidden; /* 确保溢出部分被隐藏 */
    border-radius: 10px;
}

.carousel {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.carousel img {
    width: 100%;
    height: 45vw; /* 设置高度为屏幕宽度的45% */
    object-fit: cover;
    border-radius: 10px; /* 确保图片和容器边角一致 */
    display: block; /* 确保没有额外的间隙 */
}

.carousel-item {
    flex: 0 0 100%; /* 确保轮播项宽度为容器宽度 */
    box-sizing: border-box; /* 确保内边距和边框计算在内 */
}

.carousel-buttons {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.carousel-button {
    background-color: rgba(0, 0, 0, 0.05);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 50px;
}

.carousel-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
}

.carousel-indicator {
    width: 10px;
    height: 4px;
    background-color: #808080; /* 灰色 */
    margin: 0 2px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.carousel-indicator.active {
    background-color: #00FF00; /* 绿色 */
}

.carousel-title {
    position: absolute;
    top: 10px;
    left: 10px;
    color: white;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
    padding: 5px 10px;
    border-radius: 50px;
    font-weight: bold;
}

.carousel-caption h5 {
    font-family: 'Arial', sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
    padding: 5px 10px;
    border-radius: 10px;
}

.carousel-caption p {
    font-family: 'Georgia', serif;
    font-size: 18px;
    font-weight: bold;
    color: #cccccc;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
    padding: 5px 10px;
    border-radius: 10px;
}
    </style>
</head>
<body>
    <div class="carousel-container">
        <div class="carousel" id="carousel" data-images='${JSON.stringify(image)}'>
            <!-- 这里将通过JavaScript动态插入图片 -->
        </div>
        <div class="carousel-buttons">
            <button class="carousel-button" id="prevBtn">〈</button>
            <button class="carousel-button" id="nextBtn">〉</button>
        </div>
        <div class="carousel-indicators" id="carouselIndicators">
            <!-- 这里将通过JavaScript动态插入指示器 -->
        </div>
        <div class="carousel-title" id="carouselTitle">标题</div>
    </div>

</body>
</html>
`;


function dpush(d, image, sui, type) {
    let Html = getHtml(image);
    let path = getPath("hiker://files/_cache/fy.html");
    writeFile(path, '<!DOCTYPE html><html lang="zh"><body></body></html>');
    let px = fetch('hiker://files/cache/FY/Windh.txt') || "188";
    d.push({
        col_type: "x5_webview_single",
        url: path + "#a=" + sui,
        desc: "list&&" + px,
        extra: {
            js: $.toString((Html) => {
                // 监听窗口大小变化
                window.addEventListener('resize', function() {
                    // 获取当前窗口的宽度
                    var screenWidth = window.innerWidth;
                    // 计算窗口宽度的49%
                    var percentageWidth = Math.round(screenWidth * 0.49);
                    let path = "hiker://files/cache/FY/Windh.txt";
                    fba.writeFile(path, percentageWidth);
                });
                document.documentElement.innerHTML = Html;

                let currentIndex = 0;
                let carouselInterval;

                const carousel = document.getElementById('carousel');
                const carouselIndicators = document.getElementById('carouselIndicators');
                const carouselTitle = document.getElementById('carouselTitle');
                let images = JSON.parse(carousel.dataset.images); // 获取初始图片数据

                function updateCarousel() {
                    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
                    carouselTitle.textContent = images[currentIndex].title;
                    document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
                        indicator.classList.toggle('active', index === currentIndex);
                    });
                }

                function createCarousel() {
                    carousel.innerHTML = '';
                    carouselIndicators.innerHTML = '';

                    images.forEach((image, index) => {
                        const imgElement = document.createElement('a');
                        imgElement.href = `${image.link}#${image.src}#${image.title}#${image.sode}`;
                        imgElement.classList.add('carousel-item');
                        imgElement.innerHTML = `<img src="${decodeURIComponent(image.src)}" alt="${image.title}">`;
                        carousel.appendChild(imgElement);

                        const indicator = document.createElement('div');
                        indicator.classList.add('carousel-indicator');
                        indicator.addEventListener('click', () => {
                            currentIndex = index;
                            updateCarousel();
                            resetCarouselInterval();
                        });
                        carouselIndicators.appendChild(indicator);
                    });

                    if (currentIndex >= images.length) {
                        currentIndex = 0;
                    }
                    updateCarousel();
                    startCarouselInterval();
                }

                function startCarouselInterval() {
                    carouselInterval = setInterval(() => {
                        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
                        updateCarousel();
                    }, 3000); // 设置自动轮播时间为3秒
                }

                function resetCarouselInterval() {
                    clearInterval(carouselInterval);
                    startCarouselInterval();
                }

                document.getElementById('prevBtn').addEventListener('click', () => {
                    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
                    updateCarousel();
                    resetCarouselInterval();
                });

                document.getElementById('nextBtn').addEventListener('click', () => {
                    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
                    updateCarousel();
                    resetCarouselInterval();
                });

                // 初始化轮播图
                createCarousel();

            }, Html),
            urlInterceptor: $.toString((game, sui, myurle, type) => {
                return $.toString((game, sui, myurle, input, type) => {

                    let findRule = "js:" + $$$.toString(() => {

                        require(config.依赖);
                        erji();
                    });

                    let pat = input.split("#");
                    let title = decodeURIComponent(pat[2]);
                    let url = `hiker://empty##${pat[0]}#immersiveTheme##noHistory##autoCache${game}`;
                    let img = `${pat[1]}@Referer=`;
                    let desc = decodeURIComponent(pat[3]);
                    fba.open(JSON.stringify({
                        rule: myurle,
                        title: `${title}「${sui}」`,
                        url: url,
                        findRule: findRule,
                        extra: {
                            title: title,
                            desc: desc,
                            img: img,
                            type: type,
                            inheritTitle: false,
                            pageTitle: `${title}「${sui}」`
                        }
                    }));
                }, game, sui, myurle, input, type);
            }, game, sui, MY_RULE.title, type),
            //cls: "cls_fylunbo",
            ua: MOBILE_UA,
            //imgLongClick: false
        }
    });
};


//首页列表
function xsy(syurl, d, sui, type) {
    MY_URL = getHome(syurl);
    try {
        if (type == "1") {
            eval("var sy = " + readFile("hiker://files/cache/FY/sy/" + base64Encode(sui) + ".js", 0));
        } else {
            报错;
        };
    } catch (e) {
        if (MY_URL != "http://fenying") {
            putMyVar("待", "1");
            require(config.依赖.replace(/[^/]*$/, "dw.js"));
            var sy = DW(type);
        };
    };
    let 标 = sy.标;
    let 列 = sy.列;
    let 样 = eval(sy.样);
    let 免 = sy.免;
    let 文 = sy.文;
    let 开 = sy.开;
    let 点 = sy.点;
    let 排 = sy.排;
    let 含 = sy.含;
    let 广 = sy.广;
    let 变 = sy.变;

    let 排e = typeof(排) != "undefined" ? 排.toString() : "";
    try {
        var 排除ex = 排e.replace(/\\/g, "").replace(/^\//, "").replace(/\/$/, "");
    } catch (e) {};

    let pic = ["热播", "电影", "剧集", "综艺", "动漫", "其它"];
    let m3u8 = getItem("缓存") == "on" ? true : false;
    let extr;
    if (/function/.test(免) && 开 == "on") {
        extr = {
            js: $.toString((点播) => {
                if (点播 != "undefined" && 点播 != "") {
                    eval(点播.replace(/\'/g, ""));
                };
            }, 点),
            videoExcludeRules: [".html", 排除ex],
            /*videoRules: ['.mp3'],*/
            blockRules: [".gif", ".jpeg", ".jpg", ".ico", ".png", "hm.baidu.com", "/ads/*.js", "cnzz.com"],
            jsLoadingInject: true,
            /*ua: PC_UA,*/
            cacheM3u8: m3u8
        };
    };

    let lb列 = 列[0].length != 0 ? 列[0] : 列[1].length != 0 ? 列[1] : 列[2].length != 0 ? 列[2] : 列[3].length != 0 ? 列[3] : 列[4].length != 0 ? 列[4] : 列[5].length != 0 ? 列[5] : 列[6];
    if (lb列 && 标[0] != "禁用" && getItem("轮播", "on") == "on") {
        let image = [];
        // 假设传入的图片数据
        image = lb列.map(item => {
            // 使用正则表达式分割字符串
            const [title, sode, src, link] = item.split('$');
            return {
                title: title.trim(), // 去除可能的空白字符
                src: src.trim().replace("@Referer=", ""),
                sode: sode.trim(),
                link: link.trim()
            };
        });
        dpush(d, image, sui, type);
    } else {
        d.push({
            col_type: "big_blank_block"
        })
    };

    let Colors = 变 == "on" ? function() {       
        return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);     
    } : function() {       
        return "";   
    };
    let lxn = getItem("lx1", "全部");
    let lxna = /影视|动漫|短剧|网盘/.test(lxn) ? "影视" : /听书|音乐/.test(lxn) ? "听书" : /全部|其它/.test(lxn) ? "其它" : lxn;

    let fxlj = "hiker://page/fxlj?rule=百度云盘&realurl=";
    let login = "hiker://page/login?rule=百度云盘&realurl=";
    
    for (let i in 列) {
        if (标[i] != "轮播" && 标[i] != null && 标[i] != "禁用") {
            /*if (i != 1) {
                d.push({
                    col_type: "line_blank"
                }, {
                    col_type: "big_blank_block"
                })
            };*/
            d.push({
                title: "<b>" + 标[i].replace(/[^\u4e00-\u9fff]/g, "") + "</b>",
                img: "hiker://files/cache/FY/image/" + (/虎牙/.test(标[i]) ? "虎牙" : /斗鱼/.test(标[i]) ? "斗鱼" : /网易/.test(标[i]) ? "网易" : /哔哩|bili|B站/.test(标[i]) ? "哔哩" : /快手/.test(标[i]) ? "快手" : /抖音/.test(标[i]) ? "抖音" : pic[parseInt(i) - 1]) + ".png",
                url: "hiker://empty",
                col_type: "avatar"
            });
            try {
                let list = 列[i];
                for (let j of list) {
                    let tit = j.split("$")[0];
                    let title = isBase64(tit) == true ? base64Decode(tit) : tit;
                    let de = j.split("$")[1];
                    let desc = isBase64(de) == true ? base64Decode(de) : de;
                    let im = j.split("$")[2];
                    let img = isBase64(im) == true && im !== "undefined" ? base64Decode(im) : decodeURIComponent(im);

                    let urll = j.split("$")[3];
                    let url = /@lazyRule=|@rule=/.test(urll) ? urll : urll == "hiker://empty" ? urll : (/function/.test(免) && 开 == "on") ? $("hiker://empty").lazyRule((nad, game, MY_HOME, url, type) => {
                        require(config.依赖.replace(/[^/]*$/, "lazy.js"));
                        return mx(url, nad, MY_HOME, game, url, type);
                    }, sui, game, getHome(MY_URL), urll, type) : (/function/.test(文) && 开 == "on") ? $(urll + "#readTheme#").rule((nad, game, MY_HOME, type) => {
                        require(config.依赖.replace(/[^/]*$/, "lazy.js"));
                        return zw(nad, MY_URL, MY_HOME, game, type);
                    }, sui, game, getHome(MY_URL), type) : /magnet:|\.torrent|ed2k:|pan\.xunlei/.test(urll) ? "hiker://page/diaoyong?rule=迅雷&page=fypage#" + urll : /ali(pan|yun)/.test(urll) ? "hiker://page/aliyun?rule=云盘君.简&page=fypage&realurl=" + encodeURIComponent(urll) : /(quark|\.uc)\.cn/.test(urll) ? "hiker://page/quarkList?rule=Quark.简&realurl=" + encodeURIComponent(urll) + "&sharePwd=" : /baidu/.test(urll) ? (fetch(fxlj) == "" ? login : fxlj) + urll : /cloud\.189|yun\.139|www\.123[0-9a-zA-Z]{3}\.com/.test(urll) ? $("hiker://empty#noHistory#").rule((url) => {
                        let d = [];
                        putMyVar("fypanys", "1");
                        require(config.依赖.replace(/[^/]*$/, "pan.js"));
                        hs(url, d, url);
                        setResult(d);
                    }, urll) : $("hiker://empty##" + urll + "#immersiveTheme##noHistory##autoCache" + game).rule(() => {
                        require(config.依赖);
                        erji()
                    });
                    let ti = title !== undefined ? title.replace(/\n.*/, "") : title;
                    let des = desc !== undefined ? desc.replace(/\n.*/, "") : desc;
                    let extra = Object.assign({}, extr, {
                        id: urll,
                        title: ti,
                        desc: des,
                        img: img,
                        type: type,
                        inheritTitle: false,
                        pageTitle: ti + "「" + sui + "」",
                        backgroundColor: Colors(),
                        longClick: [{
                            title: "加入周更",
                            js: $.toString((name, title, desc, img, url, Title) => {
                                setItem("zgb", name);
                                setItem("fyzg", "周更");
                                require(config.依赖.replace(/[^/]*$/, "public.js"));
                                return jrzg(name, title, desc, img, url, Title, "无记录", "周更");

                            }, lxna, ti, des, img, base64Encode(url), sui)
                        }, {
                            title: "加入日更",
                            js: $.toString((name, title, desc, img, url, Title) => {
                                setItem("zgb", name);
                                setItem("fyzg", "日更");
                                require(config.依赖.replace(/[^/]*$/, "public.js"));
                                return jrzg(name, title, desc, img, url, Title, "无记录", "日更");

                            }, lxna, ti, des, img, base64Encode(url), sui)
                        }, {
                            title: "加入完更",
                            js: $.toString((name, title, desc, img, url, Title) => {
                                setItem("zgb", name);
                                setItem("fyzg", "完更");
                                require(config.依赖.replace(/[^/]*$/, "public.js"));
                                return jrzg(name, title, desc, img, url, Title, "无记录", "完更");

                            }, lxna, ti, des, img, base64Encode(url), sui)
                        }]
                    });
                    let col = 样 !== undefined ? 样(标[i]) : (/热播|新更|精选|热映|热门|推荐|最近|奈飞|新片|即将/.test(标[i]) ? "movie_2" : "movie_3_marquee");
                    d.push({
                        title: title,
                        desc: desc,
                        img: img,
                        url: url,
                        col_type: col,
                        extra: extra
                    })
                }
            } catch (e) {
                log(e.toString());
            };
        }
    };
    d.push({
        title: "‘‘’’<small>－－到\t底\t了－－</small>",
        url: "hiker://empty",
        col_type: "text_center_1",
        extra: {
            lineVisible: false
        }
    });
    deleteItemByCls("cls_load");
    setResult(d);
    if (getMyVar("待") != "1") {
        require(config.依赖.replace(/[^/]*$/, "dw.js"));
        DW(type);
    };
};

//二级
function erji() {
    require(http + "erji.js");
};

//设置
function she() {
    let d = [];
    let shtu = "hiker://files/cache/FY/image/";
    d.push({
        title: "<b><small>功能</small></b>",
        url: "hiker://empty",
        col_type: "avatar",
        img: shtu + "功能.png",
    });

    let coll = "text_icon";

    let 屏 = "二级页面顶部以全屏显示，右上角为菜单按钮，设置后，需返回下拉刷新生效。";
    let 记 = "开启后，首页会显示历史记录、我的收藏、搜索记录，长按搜索记录清除记录。";
    let 首 = "开启后，随机选择一个站点作为首页。";
    let 轮 = "开启后，首页显示滚动轮播图片。";
    let 失 = "开启会自动检测规则是否失效。"

    let 名称 = ["顶部全屏", "记录收藏", "首页搜索", "随机首页", "首页轮播", "检测失效"];
    let 储存 = ["全屏", "记录", "搜索", "首页", "轮播", "失效"];
    let des = [屏, 记, "", 首, 轮, 失];

    for (let i in 储存) {
        let 取 = getItem(储存[i], /轮播|失效|搜索/.test(储存[i]) ? "on" : "off");
        d.push({
            title: "<b>" + 名称[i] + "</b>",
            url: $("#noLoading#").lazyRule((储存, 取) => {
                if (取 == "on") {
                    setItem(储存, "off");
                } else {
                    setItem(储存, "on");
                };
                refreshPage(false);
                return 储存 == "全屏" ? "toast://返回首页刷新生效" : "hiker://empty";
            }, 储存[i], 取),
            img: shtu + (/on/.test(取) ? "开.svg" : "关.svg"),
            col_type: coll,
            extra: {
                inheritTitle: false,
                longClick: [{
                    title: des[i],
                    js: $.toString((des) => {
                        return "toast://" + des;
                    }, des[i])
                }]
            }
        });
    };

    d.push({
        col_type: "line_blank"
    }, {
        title: "<b><small>播放</small></b>",
        url: "hiker://empty",
        col_type: "avatar",
        img: shtu + "播放.png",
    });

    let 推 = "电视端TVBOX推送，频道查看使用教程。";
    let 嗅 = "开启后，使用播放器自带功能索检视频。";
    let 缓 = "部分视频开启缓存无法播放，自行判断是否开启。";
    let 助 = "调用配置助手。";
    let 断 = "开启后，所有大厂线路都会调用断插、魔断的解析。";
    let 名 = getItem("嗅探", "off") == "on" ? ["Box推送", "VID嗅探", "m3u8缓存", "CY 助手"] : ["Box推送", "VID嗅探", "DN 断插"];

    let 储 = getItem("嗅探", "off") == "on" ? ["推送", "嗅探", "缓存", "助手"] : ["推送", "嗅探", "断插"];
    let desc = getItem("嗅探", "off") == "on" ? [推, 嗅, 缓, 助] : [推, 嗅, 断];
    for (let j in 名) {
        let 播 = getItem(储[j], "off");
        d.push({
            title: "<b>" + 名[j] + "</b>",
            url: $("#noLoading#").lazyRule((储, 播) => {
                if (播 == "on") {
                    clearItem(储);
                } else {
                    setItem(储, "on");
                }
                refreshPage(false);
                return "hiker://empty";
            }, 储[j], 播),
            img: shtu + (播 ==
                "on" ? "开.svg" : "关.svg"),
            col_type: coll,
            extra: {
                longClick: [{
                    title: desc[j],
                    js: $.toString((des) => {
                        return "toast://" + des;
                    }, desc[j])
                }]
            }
        });
    };
    /*
        let ai = "开启后，(嗅探时长会增加2-3秒)大厂线路无法播放时，会自动调用断插、魔断的解析。";
        if (getItem("断插", "off") == "off" && getItem("嗅探", "off") == "off") {
            clearItem("AID");
            let Ai = getItem("AI", "off");
            d.push({
                title: "<b>A I 断插</b>",
                url: $("#noLoading#").lazyRule((Ai) => {
                    if (Ai == "off") {
                        setItem("AI", "on");
                    } else {
                        clearItem("AI");
                    };
                    refreshPage(false);
                    return "hiker://empty";
                }, Ai),
                img: shtu + (Ai == "on" ? "开.svg" : "关.svg"),
                col_type: coll,
                extra: {
                    longClick: [{
                        title: ai,
                        js: $.toString((des) => {
                            return "toast://" + des;
                        }, ai)
                    }]
                }
            });
        } else {
            setItem("AID", "off");
        };
    */
    d.push({
        col_type: "line_blank"
    }, {
        title: "<b><small>配置</small></b>",
        url: "hiker://empty",
        col_type: "avatar",
        img: shtu + "配置.png",
    }, {
        title: "<b>影源管理</b>",
        pic: shtu + "跳转.png",
        url: $("hiker://empty#noRecordHistory##noHistory##noRefresh#").rule(() => {
            require(config.依赖);
            Yygl();
        }),
        col_type: coll,
        extra: {
            newWindow: true,
            windowId: MY_RULE.title + "影源管理",
            inheritTitle: false,
            longClick: [{
                title: "视频源 编辑，分享，删除 等管理。",
                js: $.toString(() => {
                    return "toast://视频源 编辑，分享，删除 等管理。";
                })
            }]
        }
    }, {
        title: "<b>帐号管理</b>",
        pic: shtu + "跳转.png",
        url: $("hiker://empty#noRecordHistory##noHistory##noRefresh#").rule(() => {
            require(config.依赖.replace(/[^/]*$/, "pan.js"));
            dlu();
        }),
        col_type: coll,
        extra: {
            inheritTitle: false
        }
    });

    let zs = "配置助手设置，频道查看设置教程。";
    if (getItem("嗅探", "off") == "on") {
        d.push({
            title: "<b>助手配置</b>",
            img: shtu + "跳转.png",
            url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
                try {
                    eval(JSON.parse(request("hiker://page/home?rule=配置助手&type=设置#noHistory#")).rule);
                } catch (e) {
                    back(false);
                    toast("未找到配置助手");
                };
            }),
            col_type: coll,
            extra: {
                inheritTitle: false,
                longClick: [{
                    title: zs,
                    js: $.toString((des) => {
                        return "toast://" + des;
                    }, zs)
                }]
            }
        })
    } else {
        let title = ["断插接口", "断插配置"];
        let url = ["编辑", "设置"];
        for (let i in url) {
            d.push({
                title: "<b>" + title[i] + "</b>",
                img: shtu + "跳转.png",
                url: "hiker://page/Route?rule=MyFieldᴰⁿ&type=" + url[i] + "#noHistory##noRecordHistory#",
                col_type: coll,
                extra: {
                    inheritTitle: false
                }
            })
        };
    }

    let ips = "TVBOX推送IP设置，频道查看设置教程";
    let ip = /海阔/.test(MY_NAME) ? "http://" + getIP() + ":9978" : "http://";
    if (getItem("推送", "off") == "on") {
        d.push({
            title: "<b>TV BOX</b>\t\t<small>" + (getItem("ip", ip)) + "</small>",
            url: $(getItem("ip", ip), "TVBOX推送IP").input(() => {
                setItem("ip", input);
                refreshPage(false);
            }),
            img: shtu + "IP.png",
            col_type: coll,
            extra: {
                longClick: [{
                    title: ips,
                    js: $.toString((des) => {
                        return "toast://" + des;
                    }, ips)
                }]
            }
        });
    } else {
        clearItem("ip");
    };
    d.push({
        col_type: "line_blank"
    }, {
        title: "<b><small>关于</small></b>",
        img: shtu + "关于.png",
        url: "hiker://empty",
        col_type: "avatar",
    });

    let 当前;
    let 日期;
    let 内容;
    try {
        eval("let Changelog = " + readFile("hiker://files/cache/FY/Changelog.js"), 0);
        当前 = Changelog[0].版本;
        日期 = Changelog[0].日期;
        内容 = Changelog[0].内容;
    } catch (e) {
        当前 = "1.0";
        日期 = "2022-08-06";
        内容 = "1. 风影初始版本。"
    };

    function about(CT, 当前) {
        let d = [];
        let gtu = "hiker://files/cache/FY/image/"
        d.push({
            url: "hiker://empty",
            col_type: "card_pic_3",
            extra: {
                longClick: [{
                    title: getItem("隐藏", "off") == "on" ? "私有：当前已开启" : "私有：当前已关闭",
                    js: $.toString(() => {
                        let 隐 = getItem("隐藏", "off");
                        if (隐 == "on") {
                            clearItem("隐藏");
                        } else {
                            setItem("隐藏", "on");
                        };
                        refreshPage(false);
                        return 隐 == "off" ? "toast://已开启" : "toast://已关闭";
                    })
                }]
            }
        }, {
            title: "‘‘’’<b>版本: " + 当前 + "</b>",
            url: "hiker://empty",
            img: gtu + "风影.jpg",
            col_type: "card_pic_3_center"
        }, {
            col_type: "line_blank"
        })

        let items = CT > (parseInt(getItem("强时", "0").replace("CT", "")) + 6 * 60 * 60 * 1000);
        d.push({
            title: "<b>自动更新</b>",
            url: $("#noLoading#").lazyRule(() => {
                if (getItem("自动", "on") == "on") {
                    setItem("自动", "off");
                } else {
                    clearItem("自动");
                };
                refreshPage(false);
                return "hiker://empty";
            }),
            img: gtu + (getItem("自动", "on") == "on" ? "开.svg" : "关.svg"),
            col_type: "text_icon"
        }, {
            title: "<b>强制更新</b>",
            url: $("#noLoading#").lazyRule((items, CT) => {
                if (items) {
                    confirm({
                        title: "重要提示",
                        content: "强制更新专为小程序无法更新或更新异常时使用(更新完成需返回首页刷新页面)\n确认将会清除全部数据",
                        confirm: $.toString((CT) => {
                            setItem("强时", CT);
                            putMyVar("强制", "1");
                            require(config.依赖);
                            gx();
                        }, CT),
                        cancel: $.toString(() => {
                            toast("强制更新取消");
                        })
                    });
                    toa = "hiker://empty";
                } else {
                    toa = "toast://强制更新为备用，已禁用";
                };
                return toa;
            }, items, CT + "CT"),
            img: gtu + "强更.svg",
            col_type: "text_icon"
        }, {
            col_type: "line_blank"
        }, {
            title: "‘‘’’<b>免责声明</b>",
            url: "hiker://empty",
            col_type: "text_1",
            extra: {
                lineVisible: false
            }
        }, {
            title: "1、此小程序为空壳，规则内容均来源于互联网，经软件对原网页源码重新排版后显示，此小程序与海阔不参与任何制作、上传、储存等内容，其显示的所有内容，其版权均归原网站作者所有。<br>2、此小程序代码内容仅供爱好者学习与交流使用，禁止用于其他用途，请于导入后24小时内删除，请勿传播！<br>3、因使用此小程序产生的版权问题，软件开发者与此小程序作者概不负责。<br>4、请勿相信网页或者视频中的任何广告，切记！！！",
            col_type: "rich_text",
            extra: {
                textSize: "13"
            }
        });
        setResult(d);
    };

    let tile = ["检测更新", "风影反馈", "关于风影", "清除数据"];

    let 检 = "手动检测更新，无需频繁点击，频繁点击会禁用检测更新。";
    let item = CT > (parseInt(getMyVar("时间", "0").replace("CT", "")) + 0.2 * 60 * 60 * 1000);
    let 更新 = $("#noLoading#").lazyRule((CT, item) => {
        let toa;
        if (item) {
            putMyVar("时间", CT);
            putMyVar("手动", "1");
            require(config.依赖);
            gx();
            toa = "hiker://empty";
        } else {
            toa = "toast://检测更新过于频繁，已禁止检测";
        };
        return toa;
    }, CT + "CT", item);

    let 反馈 = $("hiker://empty#noRecordHistory##noHistory##noRefresh#").rule(() => {
        let d = [];
        let qq = "hiker://files/cache/FY/image/Q群码.jpg";
        d.push({
            col_type: "rich_text"
        }, {
            url: "hiker://empty",
            col_type: "card_pic_3"
        }, {
            img: qq,
            url: qq,
            col_type: "card_pic_3"
        }, {
            col_type: "rich_text"
        }, {
            title: "扫码或点击 <a href = 'https://h5.qun.qq.com/s/md75B8VrlC'> 群① </a>加入风影反馈群！",
            col_type: "rich_text"
        });
        setResult(d);
    });

    let 关于 = $("hiker://empty#noRecordHistory##noHistory##noRefresh#").rule((about, CT, 当前) => {
        about(CT, 当前);
    }, about, CT, 当前);

    let itemi = CT > (parseInt(getItem("时", "0").replace("CT", "")) + 24 * 60 * 60 * 1000);

    let 清除 = $("#noLoading#").lazyRule((item, CT) => {
        if (item) {
            return $("确认清除二级页面缓存数据？").confirm((CT) => {
                putMyVar("清除", "1");
                setItem("时", CT);
                require(config.依赖);
                gx();
                refreshPage(false);
                return "hiker://empty";
            }, CT);
        } else {
            refreshPage(false);
            return "toast://清除完成";
        };
    }, itemi, CT + "CT");
    let urlg = [更新, 反馈, 关于, 清除];
    let png = ["跳转.png", "清除.png"];
    let 清 = "清除二级页面缓存数据，首页缓存不会清除(不要频繁清除，清除后进入二级会变慢)，每隔15天自动清除一次，首页缓存每隔60天清除一次。";

    for (let i in tile) {
        let extra = i == 0 ? {
            longClick: [{
                title: 检,
                js: $.toString((des) => {
                    return "toast://" + des;
                }, 检)
            }]
        } : i == 3 ? {
            longClick: [{
                title: 清,
                js: $.toString((des) => {
                    return "toast://" + des;
                }, 清)
            }]
        } : {
            inheritTitle: false
        };
        d.push({
            title: "<b>" + tile[i] + "</b>",
            url: urlg[i],
            col_type: coll,
            img: shtu + (i == 3 ? "清除.png" : i == 0 ? "更新.svg" : "跳转.png"),
            extra: extra
        });
    };

    d.push({
        col_type: "line_blank"
    }, {
        title: "<b>版本: " + 当前 + "</b>",
        desc: "❯❯\t\t",
        img: shtu + "风影.jpg",
        url: $("#noLoading#").lazyRule(() => {
            require(config.依赖);
            change();
            return "hiker://empty";
        }),
        col_type: "avatar",
    });

    d.push({
        title: "<b>更新日期：" + 日期 + "<small>\t\t\tBy\t随风</small></b>" + 内容.replace("1. ", "<br>1. ").replace(/\n/g, "<br>") + ("<br>注：风影从未添加过任何广告，近期有某些添加广告，改名的小程序，那不是风影本影！！！").fontcolor("#ff1100"),
        col_type: "rich_text",
        extra: {
            textSize: "12"
        }
    }, {
        title: "<br>",
        col_type: "rich_text"
    });
    setResult(d);
};

//更新日志
function change() {
    const hikerPop = $.require(config.依赖.replace(/[^/]*$/, "hikerPop.js"));
    let rlog = JSON.parse(readFile("hiker://files/cache/FY/Changelog.js") || []);

    function transformData(data) {
        return data.map(item => {
            let records = [];
            let nr = item.内容.split("\n");
            for (let i in nr) {
                let li = nr[i];
                if (li.includes('修复') || li.includes('修改') || li.includes('bug') || li.includes('BUG')) {
                    records.push(`${li.replace(/\d+\.\s+/g, "‘‘修复：’’")}`);
                } else
                if (li.includes('新增') || li.includes('增加') || li.includes('添加') || li.includes('加入')) {
                    records.push(`${li.replace(/\d+\.\s+/g, "““新增：””")}`);
                } else {
                    records.push(`${li.replace(/\d+\.\s+/g, "优化：")}`);
                };
            };
            return {
                title: ` V ${item.版本}    ${item.日期}`,
                records: records
            };
        });
    };
    const formData = transformData(rlog);
    let pop = hikerPop.updateRecordsBottom(formData);
};

//追更
function Wp() {
    require(http + "Wp.js");
};

//影源
function Yygl() {
    require(http + "yygl.js");
};

//新增源
function Add() {
    require(http + "add.js");
};

//搜索
function sou() {
    let d = [];
    let input = MY_URL.split("##")[1];
    d.push({
        title: "搜索\t" + input,
        url: $("hiker://empty#noRecordHistory##noHistory#fypage").rule((input) => {
            putMyVar("Mysou", input);            
            require(config.依赖);
            require(config.依赖.replace(/[^/]*$/, "yso.js"));
            yso("1");
        }, input),
        col_type: "text_1",
        extra: {
            erji: "1",
        }
    });
    setResult(d);
};