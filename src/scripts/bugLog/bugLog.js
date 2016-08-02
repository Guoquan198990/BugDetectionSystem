(function () {
    /**
     * @param {String}  msg   错误信息
     * @param {String}  url      出错的文件
     * @param {Long}    line     出错代码的行号
     * @param {Long}    col   出错代码的列号
     * @param {Object}  error       错误的详细信息，Anything
     */

    var bugLog = {};
    // 处理压缩的 js 文件
    var mainMaps, main_source_map = null;
    ajax('/scripts/minified/main.min.js.map', 'GET', '', function(responseText) {
        mainMaps = JSON.parse(responseText);
        main_source_map = new sourceMap.SourceMapConsumer(mainMaps);
    });
    // 处理 JS 脚本语法异常
    bugLog.jsError = [];
    
    window.onerror = function(msg,url,line,col,error) {
        // 没有 url 不上报，上报也不知道错误
        if(msg != "Script error." && !url) {
            return true;
        }

        setTimeout(function() {
            var data = {};
            col = col || (window.event && window.event.errorCharacter) || 0;

            data.url = url;
            data.line = line;
            data.col = col;
            if(!!error && !!error.stack) {
                data.msg = error.message;
            } else if(!!arguments.callee) {
                var ext =[];
                var f = arguments.callee.caller, c = 3;

                while(f && (--c > 0)) {
                    ext.push(f.toString());
                    if(f == f.caller) {
                        break;
                    }
                    f = f.caller;
                }
                ext = ext.join(',');
                data.msg = ext;
            }
            // bugLog.jsError.push(data);
            var error = {
                err: error,
                stack: {
                    message: msg,
                    line: line,
                    column: col,
                    filename: url
                },
                mode: 'onerror'
            };
            parseStackTrace(error);
        }, 0);
    };

    function parseStackTrace(err) {
        var info;
        var source_map;
        var orig = {};
        if (err.mode === 'trycatch') {
            info = parseTryCatchStackTrace(err);
            source_map = catch_source_map;
        } else {
            info = err.stack;
            source_map = main_source_map;
        }
        orig = source_map.originalPositionFor({
            line: info.line,
            column: info.column
        });
        // var orig = source_map.originalPositionFor({
        //     line: info.line,
        //     column: info.column
        // });
        // orig.mode = err.mode;
        orig.name = err.stack.message;
        var sourceRoot = mainMaps.sourceRoot;
        var sourceJs = '';
        var url = err.stack.filename;
        url = url.indexOf('.min.js') === -1 ? url : orig.source;
        for(var i = 0; i < mainMaps.sources.length; i++) {
            sourceJs += (sourceRoot + mainMaps.sources[i]);
        }
        // $.each(mainMaps.sources, function(i, val) {
        //     sourceJs.push(sourceRoot + val);
        // });
        if(sourceJs.indexOf(url) === -1) {
            var errorInfo = {
                "name": err.stack.message,
                "source": err.stack.filename,
                "column": err.stack.column,
                "line": err.stack.line
            }
            bugLog.jsError.push(errorInfo);
            postSendError(errorInfo);
        } else {
            bugLog.jsError.push(orig);
            postSendError(orig);
        }
        

        // if($.inArray(url, sourceJs) === -1) {
        //     var errorInfo = {
        //         "name": err.stack.message,
        //         "source": err.stack.filename,
        //         "column": err.stack.column,
        //         "line": err.stack.line
        //     }
        //     bugLog.jsError.push(errorInfo);
        //     postSendError(errorInfo);
        // } else {
        //     bugLog.jsError.push(orig);
        //     postSendError(orig);
        // }
        
        
        // bugLog.jsError = JSON.stringify(orig, null, 4);
        // console.log(bugLog.jsError);
        // console.log(JSON.stringify(orig, null, 4));
    }

    function parseTryCatchStackTrace(err) {
        var lines = err.stack.split('\n'),
            stack;

        stack = lines[1].split(':').reverse().splice(0, 2);

        return {
            column: stack[0],
            line: stack[1]
        };
    }

    // 图片加载失败
    bugLog.imgError = [];
    var fnValidateImage = function (oImg) {
        img = new Image();
        img.onerror = function () {
            bugLog.imgError.push(this.getAttribute('src'));
            var errImg = {
                'imgSrc': this.getAttribute('src'),
                'message': '图片加载失败'
            }
            postSendError(errImg);
        };
        img.src = oImg.src;
    };
    var aImg = document.getElementsByTagName('img');
    var i = aImg.length;
    while (--i !== -1) {
        fnValidateImage(aImg[i]);
    }

    function ajax(url, method, params, successFn, failsFn) {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function (data) {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                successFn && successFn(xmlhttp.responseText);
                // console.log(xmlhttp.responseText);
                // mainMaps = JSON.parse(xmlhttp.responseText);
                // main_source_map = new sourceMap.SourceMapConsumer(mainMaps);
            } else {
                failsFn && failsFn();
            }
        }
        xmlhttp.open(method, url, true);
        if(method === 'POST') {
            xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        }
        xmlhttp.send(params);
    }

    // 向后台发送错误信息
    function postSendError(params, successFn, failFn) {
        var postData = params;
        postData = (function(obj){ // 转成post需要的字符串.
            var str = "";

            for (var prop in obj) {
                str += prop + "=" + obj[prop] + "&"
            }
            return str.substring(0, str.length - 1);
        })(postData);

        ajax('/', 'POST', postData, successFn, failFn);
    }
    
alerte(e);
})();