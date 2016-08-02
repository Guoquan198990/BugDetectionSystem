/**
 * 确保在页面上最先加载这个 js 文件，已得到最准确的检测结果
 * 页面加载之前，window 对象中已经存在的全局变量：默认都当成 window 原生携带的
 * 在需要检测全局变量的地方，调用：var globalVarList = globalVarsDetector.detect();
*/
var globalVarsDetector = (function() {
    var _onDocStart = {};
    for(var p in window) {
        _onDocStart[p] = true;
    }

    /*
     * 检测当前页面上已经存在的所有变量
     * @return {Array} 返回全局变量列表
     * @private
    */
    var _detect = function() {
        var _globalVars = [];
        for(var p in window) {
            if(!_onDocStart[p]) {
                _globalVars.push(p);
            }
        }
        return _globalVars;
    };
    return {
        detect: _detect
    }
})();