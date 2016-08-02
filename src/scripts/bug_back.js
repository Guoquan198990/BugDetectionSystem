
// (function () {
//     /**
//      * @param {String}  msg   错误信息
//      * @param {String}  url      出错的文件
//      * @param {Long}    line     出错代码的行号
//      * @param {Long}    col   出错代码的列号
//      * @param {Object}  error       错误的详细信息，Anything
//      */

//     // 检索全局变量
//     var globalVarList = globalVarsDetector.detect();
//     console.log(globalVarList);
//     var bugLog = {};
//     var swatchBugFn = function() {

//     };
//     swatchBugFn.prototype = {
//         // ============================= 判断设备相关信息（pc or phone）==================================
//         deviceInfomation: function() {
//             var agent = navigator.userAgent.toLowerCase();
//             var regStr_ie = /msie [\d.]+;/gi;
//             var regStr_ff = /firefox\/[\d.]+/gi
//             var regStr_chrome = /chrome\/[\d.]+/gi;
//             var regStr_saf = /safari\/[\d.]+/gi;

//             if(agent.indexOf('mobile') != -1) {
//                 if (agent.indexOf('micromessenger') != -1) {
//                     //在微信中打开
//                     return '微信浏览器';
//                 }
//                 if (agent.indexOf('weibo') != -1) {
//                     //在新浪微博客户端打开
//                     return '新浪微博浏览器';
//                 }
//                 if (agent.indexOf('qq') != -1) {
//                     //在QQ空间打开
//                     return 'QQ空间浏览器';
//                 }
//                 if (agent.indexOf('safari') != -1) {
//                     //是否在IOS浏览器打开
//                     return 'safari浏览器';
//                 }
//                 if (agent.indexOf('android') != -1) {
//                     //是否在安卓浏览器打开
//                     return 'android浏览器';
//                 }
//             } else {
//                 //IE
//                 if (agent.indexOf("msie") > 0) {
//                     return agent.match(regStr_ie);
//                 }

//                 //firefox
//                 if (agent.indexOf("firefox") > 0) {
//                     return agent.match(regStr_ff);
//                 }

//                 //Chrome
//                 if (agent.indexOf("chrome") > 0) {
//                     return agent.match(regStr_chrome);
//                 }

//                 //Safari
//                 if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
//                     return agent.match(regStr_saf);
//                 }
//             }
//         },
//         // ============================= end 判断设备相关信息（pc or phone）==================================

//         // ============================= 计算加载时间 ==================================
//         getPerformanceTiming: function() {
//             var performance = window.performance;
//             var timing = performance.timing;
//             var times = {};
//             var _this = this;

//             // 判断当前浏览器是否支持 performance
//             times.performance = performance ? !0 : !1;

//             // DNS 查询完成时间
//             times.dns = timing.domainLookupEnd - timing.domainLookupStart;
//             times.dns = _this.numSecsBI(times.dns).value + _this.numSecsBI(times.dns).unit;

//             // TCP 完成建立连接时间
//             times.tcp = timing.connectEnd - timing.connectStart;
//             times.tcp = _this.numSecsBI(times.tcp).value + _this.numSecsBI(times.tcp).unit;

//             // DOM 完成渲染的时间(即白屏时间)
//             times.baiping = timing.domLoading - timing.navigationStart;
//             times.baiping = _this.numSecsBI(times.baiping).value + _this.numSecsBI(times.baiping).unit;

//             // 页面加载时间
//             times.loadPage = timing.domContentLoadedEventEnd - timing.navigationStart;
//             times.loadPage = times.loadPage < 0 ? 0 : times.loadPage;
//             times.loadPage = _this.numSecsBI(times.loadPage).value + _this.numSecsBI(times.loadPage).unit;

//             // 资源加载时间
//             times.sourceLoad = timing.loadEventEnd - timing.navigationStart;
//             times.sourceLoad = times.sourceLoad < 0 ? 0 : times.sourceLoad;
//             // times.sourceLoad = 1469673287903 - 1469673239943;
//             times.sourceLoad = _this.numSecsBI(times.sourceLoad).value + _this.numSecsBI(times.sourceLoad).unit;

//             // 资源加载数量
//             times.sourceNum = performance.getEntriesByType('resource').length;
//             return times;
//         },
//         roundBi: function(a) {
//             return isNaN(a) ? 0 : Math.round(a);
//         },
//         numbericBI: function(a) {
//             var b, c, d = parseFloat(a);
//             if (isNaN(d) || 0 === d) return "0.00";
//             b = 0;
//             do b += 2, c = d.toFixed(b); while (0 === parseFloat(c) && 6 > b);
//             return d = c, d.toString().replace(/(\d{1,3})(?=(\d{3})+(?:\.))/g, "$1,")
//         },
//         numSecsBI: function(a) {
//             var _this = this;
//             return 1e3 > a ? {
//                 value: _this.roundBi(a),
//                 unit: " ms"
//             } : a >= 1e3 && 6e4 > a ? {
//                 value: _this.numbericBI(a / 1e3),
//                 unit: " s"
//             } : {
//                 value: _this.numbericBI(times / 6e4),
//                 unit: " min"
//             }
//         }
//         // ============================= end 计算加载时间 ==================================
//     }

    
//     // 处理 JS 脚本语法异常
//     bugLog.jsError = [];
//     window.onerror = function(msg,url,line,col,error) {
//         // 没有 url 不上报，上报也不知道错误
//         if(msg != "Script error." && !url) {
//             return true;
//         }

//         setTimeout(function() {
//             var data = {};
//             col = col || (window.event && window.event.errorCharacter) || 0;

//             data.url = url;
//             data.line = line;
//             data.col = col;
//             if(!!error && !!error.stack) {
//                 data.msg = error.message;
//             } else if(!!arguments.callee) {
//                 var ext =[];
//                 var f = arguments.callee.caller, c = 3;

//                 while(f && (--c > 0)) {
//                     ext.push(f.toString());
//                     if(f == f.caller) {
//                         break;
//                     }
//                     f = f.caller;
//                 }
//                 ext = ext.join(',');
//                 data.msg = ext;
//             }
//             bugLog.jsError.push(data);
//             outputResult('js错误信息', data);
//         }, 0);
//     };

//     bugLog.imgError = [];
//     var fnValidateImage = function (oImg) {
//         img = new Image();
//         img.onerror = function () {
//             bugLog.imgError.push(this.getAttribute('src'));
//             // console.log(bugLog.imgError);
//         };
//         img.src = oImg.src;
//     };
//     var aImg = document.getElementsByTagName('img');
//     var i = aImg.length;
//     while (--i !== -1) {
//         fnValidateImage(aImg[i]);
//     }

//     // 向后台发送错误信息
//     window.onload = function() {
//         // 处理请求参数
        
//         var bugPostData = {
//             jsError: JSON.stringify(bugLog.jsError),
//             imgError: JSON.stringify(bugLog.imgError)
//         }
//         $.ajax({
//             'url': '/',
//             'type': 'post',
//             'data': bugPostData
//         }).done(function(data) {
//             debugger
//         }).fail(function(error) {
//             debugger
//         });
//         // debugger
//         // var xhr = new XMLHttpRequest();
//         // xhr.open("POST", "/", true);
//         // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//         // xhr.onreadystatechange = function () {
//         //     debugger
//         //     var XMLHttpReq = xhr;
//         //     if (XMLHttpReq.readyState == 4) {
//         //         if (XMLHttpReq.status == 200) {
//         //             var text = XMLHttpReq.responseText;

//         //             console.log(text);
//         //         }
//         //     }
//         // };
//         // xhr.send(bugPostData); 
//     }
    

    

//     var swatchBugFun = new swatchBugFn();

//     function outputResult(title, result) {
//         var jsonStr = "";
//         for (key in result) {
//             jsonStr += key + ": " + result[key] + "<br/>";
//         }
//         $('.container').append('<h2>' + title + '</h2>' + jsonStr);
//     }
    

//     // 检测设备信息，{Ba: "msie 8.0", cookieEnabled: true, javaEnabled: true, language: "zh-CN", Ea: "1280x800"…}
//     bugLog.i = {};
//     bugLog.i.Ba = swatchBugFun.deviceInfomation();
//     bugLog.i.cookieEnabled = navigator.cookieEnabled;
//     bugLog.i.javaEnabled = navigator.javaEnabled();
//     bugLog.i.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
//     bugLog.i.Ea = (window.screen.width || 0) + "x" + (window.screen.height || 0);
//     bugLog.i.colorDepth = window.screen.colorDepth || 0;
//     outputResult('检测设备相关信息', bugLog.i);

//     // 页面加载时间
//     bugLog.loadTime = swatchBugFun.getPerformanceTiming();
//     outputResult('页面加载时间', bugLog.loadTime);
//     console.log(aa);
// })();





















//     // 页面加载时间
//     // var performance = window.performance;
//     // performance 数据说明
//     // performance = {
//     //     // memory: 是非标准属性，只在 chrome 中有
//     //     // 关注的问题：内存
//     //     memory: {
//     //         usedJSHeapSize: 16100000, // JS 对象（包括 v8 引擎内部对象）占用的内存，一定小于 totalJSHeapSize
//     //         totalJSHeapSize: 35100000, // 可使用的内存
//     //         jsHeapSizeLimit: 793000000 // 内存大小限制
//     //     },
//     //     // navigation: 页面来源
//     //     navigation: {
//     //         redirectCount: 0, // 如果有重定向的话，页面通过几次重定向跳转而来
//     //         type: 0 //   0: 即 TYPE_NAVIGATENEXT 正常进入的页面（非刷新、非重定向等）;
//     //                 //   1: 即 TYPE_RELOAD 通过 window.location.reload() 刷新页面;
//     //                 //   2: 即 TYPE_BACK_FORWARD 通过浏览器的前进后退按钮进入的页面（历史记录）;
//     //                 // 255: 即 TYPE_UNDEFINED 非以上方式进入的页面
//     //     },
//     //     timing: {
//     //         // 在同一个浏览器上下文中，前一个网页（与当前页面不一定同域）unload 的时间戳，如果无前一个网页 unload，则与 fetchStart 值相等
//     //         navigationStart: 1441112691935,
//     //         // 前一个网页（与当前页面同域）unload 的时间戳，如果无前一个网页 unload 或者前一个网页与当前页面不同域，则值为 0
//     //         unloadEventStart: 0,
//     //         // 和 unloadEventStart 相对应，返回前一个网页 unload 事件绑定的回调函数执行完毕的时间戳
//     //         unloadEventEnd: 0,
//     //         // 第一个 HTTP 重定向发生时的时间。有跳转且是同域名内的重定向才算，否则值为 0
//     //         redirectStart: 0,
//     //         // 最后一个 HTTP 重定向完成时的时间。有跳转且是同域名内的重定向才算，否则值为 0
//     //         redirectEnd: 0,
//     //         // 浏览器准备好使用 HTTP 请求抓取文档的时间，这发生在检查本地缓存之前
//     //         fetchStart: 1441112692155,
//     //         // DNS 域名查询完成的时间，如果是用来本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等
//     //         domainLookupEnd: 1441112692155,
//     //         // HTTP (TCP)开始建立连接的时间，如果是持久连接，则与 fetchStart 值相等
//     //         // 注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始时间
//     //         connectStart: 1441112692155,
//     //         // HTTP (TCP)完成建立连接的时间（完成握手），如果是持久连接，则与 fetchStart 值相等
//     //         // 注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成时间
//     //         // 注意这里握手结束，包括安全连接建立完成、SOCKS 授权通过
//     //         connectEnd: 1441112692155,
//     //         // HTTPS 连接开始的时间，如果不是安全连接，则值为 0
//     //         secureConnectionStart: 0,
//     //         // HTTP 请求读取真实文档开始的时间（完成建立连接），包括从本地读取缓存
//     //         // 连接错误重连时，这里显示的也是新建立连接的时间
//     //         requestStart: 1441112692686,
//     //         // HTTP 响应全部接收完成的时间（获取最后一个字节），包括从本地读取缓存
//     //         responseEnd: 1441112692687,
//     //         // 开始解析渲染 DOM 树的时间，此时 Document.readyState 变为 loading，并将抛出 readystatechange 相关事件
//     //         domLoading: 1441112692690,
//     //         // 完成解析 DOM 树的时间，Document.readyState 变为 interactive，并将抛出 readystatechange 相关事件
//     //         // 注意只是 DOM 树解析完成，这时候并没有开始加载网页的资源
//     //         domInteractive: 1441112693093,
//     //         // DOM 解析完成后，网页内资源加载开始的时间
//     //         // 在 DOMContentLoaded 事件抛出前发生
//     //         domContentLoadedEventStart: 1441112693093,
//     //         // DOM 解析完成后，网页内资源加载完成的时间（如 JS 脚本加载执行完毕）
//     //         domContentLoadedEventEnd: 1441112693101,
//     //         // DOM 树解析完成，且资源也准备就绪的时间，Document.readyState 变为 Complete，并将抛出 readystatechange 相关事件
//     //         domComplete: 1441112693214,
//     //         // load 事件发送给文档，也即 load 回调函数开始执行的时间
//     //         // 注意如果没有绑定 load 事件，值为 0
//     //         loadEventEnd: 1441112693215
//     //     }
//     // };
//
