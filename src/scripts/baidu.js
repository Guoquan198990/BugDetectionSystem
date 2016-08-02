(function () {
    var h = {}, mt = {}, c = {
        id: "e23800c454aa573c0ccb16b52665ac26",
        dm: ["segmentfault.com"],
        js: "tongji.baidu.com/hm-web/js/",
        etrk: [{id: "sfLogin", eventType: "onclick"}],
        icon: '',
        ctrk: true,
        align: 1,
        nv: -1,
        vdur: 1800000,
        age: 31536000000,
        rec: 0,
        rp: [],
        trust: 0,
        vcard: 0,
        qiao: 0,
        lxb: 0,
        conv: 0,
        apps: ''
    };
    var p = !0, q = null, r = !1;

    // 检测设备信息，{Ba: false, cookieEnabled: true, javaEnabled: true, language: "zh-CN", Ea: "1280x800"…}
    mt.i = {};
    mt.i.Ba = /msie (\d+\.\d+)/i.test(navigator.userAgent);
    mt.i.cookieEnabled = navigator.cookieEnabled;
    mt.i.javaEnabled = navigator.javaEnabled();
    mt.i.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
    mt.i.Ea = (window.screen.width || 0) + "x" + (window.screen.height || 0);
    mt.i.colorDepth = window.screen.colorDepth || 0;


    // 设置、获取cookie
    mt.cookie = {};
    mt.cookie.set = function (a, b, e) {
        var d;
        e.F && (d = new Date, d.setTime(d.getTime() + e.F));
        document.cookie = a + "=" + b + (e.domain ? "; domain=" + e.domain : "") + (e.path ? "; path=" + e.path : "") + (d ? "; expires=" + d.toGMTString() : "") + (e.Oa ? "; secure" : "")
    };
    mt.cookie.get = function (a) {
        return (a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] : q
    };

    //console.log(mt.cookie.set(''));

    mt.n = {};
    mt.n.P = function (a) {
        return document.getElementById(a)
    };
    mt.n.oa = function (a) {
        var b;
        for (b = "A"; (a = a.parentNode) && 1 == a.nodeType;)if (a.tagName == b)return a;
        return q
    };

    (mt.n.Ca = function () {
        function a() {
            if (!a.w) {
                a.w = p;
                for (var b = 0, g = d.length; b < g; b++)d[b]()
            }
        }

        function b() {
            try {
                document.documentElement.doScroll("left")
            } catch (d) {
                setTimeout(b, 1);
                return
            }
            a()
        }

        var e = r, d = [], g;
        document.addEventListener ? g = function () {
            document.removeEventListener("DOMContentLoaded", g, r);
            a()
        } : document.attachEvent && (g = function () {
            "complete" === document.readyState && (document.detachEvent("onreadystatechange", g), a())
        });
        (function () {
            if (!e)if (e = p, "complete" === document.readyState)a.w = p; else if (document.addEventListener)document.addEventListener("DOMContentLoaded",
                g, r), window.addEventListener("load", a, r); else if (document.attachEvent) {
                document.attachEvent("onreadystatechange", g);
                window.attachEvent("onload", a);
                var d = r;
                try {
                    d = window.frameElement == q
                } catch (l) {
                }
                document.documentElement.doScroll && d && b()
            }
        })();
        return function (b) {
            a.w ? b() : d.push(b)
        }
    }()).w = r;

    mt.event = {};
    mt.event.c = function (a, b, e) {
        a.attachEvent ? a.attachEvent("on" + b, function (d) {
            e.call(a, d)
        }) : a.addEventListener && a.addEventListener(b, e, r)
    };
    mt.event.preventDefault = function (a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = r
    };


    mt.q = {};
    mt.q.parse = function () {
        return (new Function('return (" + source + ")'))()
    };
    mt.q.stringify = function () {
        function a(d) {
            /["\\\x00-\x1f]/.test(d) && (d = d.replace(/["\\\x00-\x1f]/g, function (d) {
                var a = e[d];
                if (a)return a;
                a = d.charCodeAt();
                return "\\u00" + Math.floor(a / 16).toString(16) + (a % 16).toString(16)
            }));
            return '"' + d + '"'
        }

        function b(d) {
            return 10 > d ? "0" + d : d
        }

        var e = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
        return function (d) {
            switch (typeof d) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(d) ? String(d) : "null";
                case "string":
                    return a(d);
                case "boolean":
                    return String(d);
                default:
                    if (d === q)return "null";
                    if (d instanceof Array) {
                        var g = ["["], e = d.length, l, f, k;
                        for (f = 0; f < e; f++)switch (k = d[f], typeof k) {
                            case "undefined":
                            case "function":
                            case "unknown":
                                break;
                            default:
                                l && g.push(","), g.push(mt.q.stringify(k)), l = 1
                        }
                        g.push("]");
                        return g.join("")
                    }
                    if (d instanceof Date)return '"' + d.getFullYear() + "-" + b(d.getMonth() + 1) + "-" + b(d.getDate()) + "T" + b(d.getHours()) + ":" + b(d.getMinutes()) + ":" + b(d.getSeconds()) + '"';
                    l = ["{"];
                    f = mt.q.stringify;
                    for (e in d)if (Object.prototype.hasOwnProperty.call(d, e))switch (k =
                        d[e], typeof k) {
                        case "undefined":
                        case "unknown":
                        case "function":
                            break;
                        default:
                            g && l.push(","), g = 1, l.push(f(e) + ":" + f(k))
                    }
                    l.push("}");
                    return l.join("")
            }
        }
    }();





    mt.lang = {};
    mt.lang.e = function (a, b) {
        return "[object " + b + "]" === {}.toString.call(a)
    };
    mt.lang.La = function (a) {
        return mt.lang.e(a, "Number") && isFinite(a)
    };
    mt.lang.Na = function (a) {
        return mt.lang.e(a, "String")
    };

    mt.localStorage = {};
    mt.localStorage.C = function () {
        if (!mt.localStorage.f)try {
            mt.localStorage.f = document.createElement("input"), mt.localStorage.f.type = "hidden", mt.localStorage.f.style.display = "none", mt.localStorage.f.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.f)
        } catch (a) {
            return r
        }
        return p
    };
    mt.localStorage.set = function (a, b, e) {
        var d = new Date;
        d.setTime(d.getTime() + e || 31536E6);
        try {
            window.localStorage ? (b = d.getTime() + "|" + b, window.localStorage.setItem(a, b)) : mt.localStorage.C() && (mt.localStorage.f.expires = d.toUTCString(), mt.localStorage.f.load(document.location.hostname), mt.localStorage.f.setAttribute(a, b), mt.localStorage.f.save(document.location.hostname))
        } catch (g) {
        }
    };
    mt.localStorage.get = function (a) {
        if (window.localStorage) {
            if (a = window.localStorage.getItem(a)) {
                var b = a.indexOf("|"), e = a.substring(0, b) - 0;
                if (e && e > (new Date).getTime())return a.substring(b + 1)
            }
        } else if (mt.localStorage.C())try {
            return mt.localStorage.f.load(document.location.hostname), mt.localStorage.f.getAttribute(a)
        } catch (d) {
        }
        return q
    };
    mt.localStorage.remove = function (a) {
        if (window.localStorage)window.localStorage.removeItem(a); else if (mt.localStorage.C())try {
            mt.localStorage.f.load(document.location.hostname), mt.localStorage.f.removeAttribute(a), mt.localStorage.f.save(document.location.hostname)
        } catch (b) {
        }
    };
    mt.sessionStorage = {};
    mt.sessionStorage.set = function (a, b) {
        if (window.sessionStorage)try {
            window.sessionStorage.setItem(a, b)
        } catch (e) {
        }
    };


    mt.sessionStorage.get = function (a) {
        return window.sessionStorage ? window.sessionStorage.getItem(a) : q
    };
    mt.sessionStorage.remove = function (a) {
        window.sessionStorage && window.sessionStorage.removeItem(a)
    };


    mt.M = {};
    mt.M.log = function (a, b) {
        var e = new Image, d = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[d] = e;
        e.onload = e.onerror = e.onabort = function () {
            e.onload = e.onerror = e.onabort = q;
            e = window[d] = q;
            b && b(a)
        };
        e.src = a
    };




    mt.B = {};
    //17.0
    mt.B.ua = function () {
        var a = "";
        if (navigator.plugins && navigator.mimeTypes.length) {
            var b = navigator.plugins["Shockwave Flash"];
            b && b.description && (a = b.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
        } else if (window.ActiveXObject)try {
            if (b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a = b.GetVariable("$version")) && (a = a.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
        } catch (e) {
        }
        return a
    };
    //<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="undefined" width="undefined" height="undefined"><param name="movie" value="undefined" /><param name="flashvars" value="" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="undefined" width="undefined" height="undefined" src="undefined" flashvars="" allowscriptaccess="always" /></object>
    mt.B.ha = function (a, b, e, d, g) {
        return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + a + '" width="' + e + '" height="' + d + '"><param name="movie" value="' + b + '" /><param name="flashvars" value="' + (g || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + a + '" width="' + e + '" height="' + d + '" src="' + b + '" flashvars="' + (g || "") + '" allowscriptaccess="always" /></object>'
    };



    mt.url = {};
    mt.url.o = function (a, b) {
        var e = a.match(RegExp("(^|&|\\?|#)(" + b + ")=([^&#]*)(&|$|#)", ""));
        return e ? e[3] : q
    };
    mt.url.Ka = function (a) {
        return (a = a.match(/^(https?:)\/\//)) ? a[1] : q
    };
    mt.url.ra = function (a) {
        return (a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, "") : q
    };
    mt.url.R = function (a) {
        return (a = mt.url.ra(a)) ? a.replace(/:\d+$/, "") : a
    };
    mt.url.Ja = function (a) {
        return (a = a.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? a[2].replace(/[\?#].*/, "").replace(/^$/, "/") : q
    };

    //
    h.g = {
        Aa: "http://tongji.baidu.com/hm-web/welcome/ico",
        K: "hm.baidu.com/hm.gif",
        aa: "baidu.com",
        xa: "hmmd",
        ya: "hmpl",
        wa: "hmkw",
        va: "hmci",
        za: "hmsr",
        p: 0,
        j: Math.round(+new Date / 1E3),
        protocol: "https:" == document.location.protocol ? "https:" : "http:",
        Ma: 0,
        fa: 6E5,
        ga: 10,
        N: 1024,
        ea: 1,
        l: 2147483647,
        X: "cc cf ci ck cl cm cp cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api tt u".split(" ")
    };

    (function () {
        var a = {
            m: {}, c: function (a, e) {
                this.m[a] = this.m[a] || [];
                this.m[a].push(e)
            }, s: function (a, e) {
                this.m[a] = this.m[a] || [];
                for (var d = this.m[a].length, g = 0; g < d; g++)this.m[a][g](e)
            }
        };
        return h.k = a
    })();


    (function () {
        function a(a, d) {
            var g = document.createElement("script");
            g.charset = "utf-8";
            b.e(d, "Function") && (g.readyState ? g.onreadystatechange = function () {
                if ("loaded" === g.readyState || "complete" === g.readyState)g.onreadystatechange = q, d()
            } : g.onload = function () {
                d()
            });
            g.src = a;
            var n = document.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(g, n);
        }

        var b = mt.lang;
        return h.load = a
    })();

    (function () {
        function a() {
            var a = "";
            h.b.a.nv ? (a = encodeURIComponent(document.referrer), window.sessionStorage ? e.set("Hm_from_" + c.id, a) : b.set("Hm_from_" + c.id, a, 864E5)) : a = (window.sessionStorage ? e.get("Hm_from_" + c.id) : b.get("Hm_from_" + c.id)) || "";
            return a
        }

        var b = mt.localStorage, e = mt.sessionStorage;
        return h.O = a
    })();

    (function () {
        var a = h.g, b = mt.B, e = {
            init: function () {
                if ("" !== c.icon) {
                    var d;
                    d = c.icon.split("|");
                    var g = a.Aa + "?s=" + c.id, e = ("http:" == a.protocol ? "http://eiv" : "https://bs") + ".baidu.com" + d[0] + "." + d[1];
                    switch (d[1]) {
                        case "swf":
                            d = b.ha("HolmesIcon" + a.j, e, d[2], d[3], "s=" + g);
                            break;
                        case "gif":
                            d = '<a href="' + g + '" target="_blank"><img border="0" src="' + e + '" width="' + d[2] + '" height="' + d[3] + '"></a>';
                            break;
                        default:
                            d = '<a href="' + g + '" target="_blank">' + d[0] + "</a>"
                    }
                    document.write(d)
                }
            }
        };
        h.k.c("pv-b", e.init);
        return e
    })();

    (function () {
        var a = mt.n, b = mt.event, e = {
            Z: function () {
                b.c(document, "click", e.ia());
                for (var d = c.etrk.length, g = 0; g < d; g++) {
                    var n = c.etrk[g], l = a.P(decodeURIComponent(n.id));
                    l && b.c(l, n.eventType, e.ka())
                }
            }, ka: function () {
                return function (a) {
                    (a.target || a.srcElement).setAttribute("HM_fix", a.clientX + ":" + a.clientY);
                    h.b.a.et = 1;
                    h.b.a.ep = "{id:" + this.id + ",eventType:" + a.type + "}";
                    h.b.h()
                }
            }, ia: function () {
                return function (a) {
                    var b = a.target || a.srcElement;
                    if (b) {
                        var e = b.getAttribute("HM_fix"), l = a.clientX + ":" + a.clientY;
                        if (e &&
                            e == l)b.removeAttribute("HM_fix"); else if (e = c.etrk.length, 0 < e) {
                            for (l = {}; b && b != document.body;)b.id && (l[b.id] = ""), b = b.parentNode;
                            for (b = 0; b < e; b++) {
                                var f = decodeURIComponent(c.etrk[b].id);
                                l.hasOwnProperty(f) && (h.b.a.et = 1, h.b.a.ep = "{id:" + f + ",eventType:" + a.type + "}", h.b.h())
                            }
                        }
                    }
                }
            }
        };
        h.k.c("pv-b", e.Z);
        return e
    })();


    (function () {
        var a = mt.n, b = mt.event, e = mt.i, d = h.g, g = [], n = {
            Y: function () {
                c.ctrk && (b.c(document, "mouseup", n.da()), b.c(window, "unload", function () {
                    n.z()
                }), setInterval(function () {
                    n.z()
                }, d.fa))
            }, da: function () {
                return function (a) {
                    a = n.pa(a);
                    if ("" !== a) {
                        var b = (d.protocol + "//" + d.K + "?" + h.b.W().replace(/ep=[^&]*/, "ep=" + encodeURIComponent("[" + a + "]"))).length;
                        b + (d.l + "").length > d.N || (b + encodeURIComponent(g.join(",") + (g.length ? "," : "")).length + (d.l + "").length > d.N && n.z(), g.push(a), (g.length >= d.ga || /t:a/.test(a)) && n.z())
                    }
                }
            },
            pa: function (b) {
                if (0 === d.ea) {
                    var f = b.target || b.srcElement, k = f.tagName.toLowerCase();
                    if ("embed" == k || "object" == k)return ""
                }
                e.Ba ? (f = Math.max(document.documentElement.scrollTop, document.body.scrollTop), k = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), k = b.clientX + k, f = b.clientY + f) : (k = b.pageX, f = b.pageY);
                var m = window.innerWidth || document.documentElement.clientWidth || document.body.offsetWidth;
                switch (c.align) {
                    case 1:
                        k -= m / 2;
                        break;
                    case 2:
                        k -= m
                }
                k = "{x:" + k + ",y:" + f + ",";
                f = b.target || b.srcElement;
                return k = (b = "a" == f.tagName.toLowerCase() ? f : a.oa(f)) ? k + ("t:a,u:" + encodeURIComponent(b.href) + "}") : k + "t:b}"
            }, z: function () {
                0 !== g.length && (h.b.a.et = 2, h.b.a.ep = "[" + g.join(",") + "]", h.b.h(), g = [])
            }
        };
        h.k.c("pv-b", n.Y);
        return n
    })();

    (function () {
        var a = mt.n, b = h.g, e = h.load, d = h.O;
        h.k.c("pv-b", function () {
            c.rec && a.Ca(function () {
                for (var g = 0, n = c.rp.length; g < n; g++) {
                    var l = c.rp[g][0], f = c.rp[g][1], k = a.P("hm_t_" + l);
                    if (f && !(2 == f && !k || k && "" !== k.innerHTML))k = "", k = Math.round(Math.random() * b.l), k = 4 == f ? "http://crs.baidu.com/hl.js?" + ["siteId=" + c.id, "planId=" + l, "rnd=" + k].join("&") : "http://crs.baidu.com/t.js?" + ["siteId=" + c.id, "planId=" + l, "from=" + d(), "referer=" + encodeURIComponent(document.referrer), "title=" + encodeURIComponent(document.title), "rnd=" +
                    k].join("&"), e(k)
                }
            })
        })
    })();

    (function () {
        var a = h.g, b = h.load, e = h.O;
        h.k.c("pv-b", function () {
            if (c.trust && c.vcard) {
                var d = a.protocol + "//trust.baidu.com/vcard/v.js?" + ["siteid=" + c.vcard, "url=" + encodeURIComponent(document.location.href), "source=" + e(), "rnd=" + Math.round(Math.random() * a.l)].join("&");
                b(d)
            }
        })
    })();

    (function () {
        function a() {
            return function () {
                h.b.a.nv = 0;
                h.b.a.st = 4;
                h.b.a.et = 3;
                h.b.a.ep = h.D.sa() + "," + h.D.qa();
                h.b.h()
            }
        }

        function b() {
            clearTimeout(A);
            var a;
            y && (a = "visible" == document[y]);
            B && (a = !document[B]);
            f = "undefined" == typeof a ? p : a;
            if ((!l || !k) && f && m)u = p, s = +new Date; else if (l && k && (!f || !m))u = r, t += +new Date - s;
            l = f;
            k = m;
            A = setTimeout(b, 100)
        }

        function e(a) {
            var k = document, b = "";
            if (a in k)b = a; else for (var d = ["webkit", "ms", "moz", "o"], s = 0; s < d.length; s++) {
                var e = d[s] + a.charAt(0).toUpperCase() + a.slice(1);
                if (e in k) {
                    b =
                        e;
                    break
                }
            }
            return b
        }

        function d(a) {
            if (!("focus" == a.type || "blur" == a.type) || !(a.target && a.target != window))m = "focus" == a.type || "focusin" == a.type ? p : r, b()
        }

        var g = mt.event, n = h.k, l = p, f = p, k = p, m = p, v = +new Date, s = v, t = 0, u = p, y = e("visibilityState"), B = e("hidden"), A;
        b();
        (function () {
            var a = y.replace(/[vV]isibilityState/, "visibilitychange");
            g.c(document, a, b);
            g.c(window, "pageshow", b);
            g.c(window, "pagehide", b);
            "object" == typeof document.onfocusin ? (g.c(document, "focusin", d), g.c(document, "focusout", d)) : (g.c(window, "focus", d),
                g.c(window, "blur", d))
        })();
        h.D = {
            sa: function () {
                return +new Date - v
            }, qa: function () {
                return u ? +new Date - s + t : t
            }
        };
        n.c("pv-b", function () {
            g.c(window, "unload", a())
        });
        return h.D
    })();

    (function () {
        function a(k) {
            for (var b in k)if ({}.hasOwnProperty.call(k, b)) {
                var e = k[b];
                d.e(e, "Object") || d.e(e, "Array") ? a(e) : k[b] = String(e)
            }
        }

        function b(a) {
            return a.replace ? a.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : a
        }

        var e = mt.M, d = mt.lang, g = mt.q, n = h.g, l = h.k, f = {
            S: q, r: [], A: 0, T: r, init: function () {
                f.d = 0;
                f.S = {
                    push: function () {
                        f.J.apply(f, arguments)
                    }
                };
                l.c("pv-b", function () {
                    f.la();
                    f.ma()
                });
                l.c("pv-d", f.na);
                l.c("stag-b", function () {
                    h.b.a.api = f.d || f.A ? f.d + "_" + f.A : ""
                });
                l.c("stag-d", function () {
                    h.b.a.api =
                        0;
                    f.d = 0;
                    f.A = 0
                })
            }, la: function () {
                var a = window._hmt;
                if (a && a.length)for (var b = 0; b < a.length; b++) {
                    var d = a[b];
                    switch (d[0]) {
                        case "_setAccount":
                            1 < d.length && /^[0-9a-z]{32}$/.test(d[1]) && (f.d |= 1, window._bdhm_account = d[1]);
                            break;
                        case "_setAutoPageview":
                            if (1 < d.length && (d = d[1], r === d || p === d))f.d |= 2, window._bdhm_autoPageview = d
                    }
                }
            }, ma: function () {
                if ("undefined" === typeof window._bdhm_account || window._bdhm_account === c.id) {
                    window._bdhm_account = c.id;
                    var a = window._hmt;
                    if (a && a.length)for (var b = 0, e = a.length; b < e; b++)d.e(a[b],
                        "Array") && "_trackEvent" !== a[b][0] && "_trackRTEvent" !== a[b][0] ? f.J(a[b]) : f.r.push(a[b]);
                    window._hmt = f.S
                }
            }, na: function () {
                if (0 < f.r.length)for (var a = 0, b = f.r.length; a < b; a++)f.J(f.r[a]);
                f.r = q
            }, J: function (a) {
                if (d.e(a, "Array")) {
                    var b = a[0];
                    if (f.hasOwnProperty(b) && d.e(f[b], "Function"))f[b](a)
                }
            }, _trackPageview: function (a) {
                if (1 < a.length && a[1].charAt && "/" == a[1].charAt(0)) {
                    f.d |= 4;
                    h.b.a.et = 0;
                    h.b.a.ep = "";
                    h.b.H ? (h.b.a.nv = 0, h.b.a.st = 4) : h.b.H = p;
                    var b = h.b.a.u, d = h.b.a.su;
                    h.b.a.u = n.protocol + "//" + document.location.host +
                    a[1];
                    f.T || (h.b.a.su = document.location.href);
                    h.b.h();
                    h.b.a.u = b;
                    h.b.a.su = d
                }
            }, _trackEvent: function (a) {
                2 < a.length && (f.d |= 8, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 4, h.b.a.ep = b(a[1]) + "*" + b(a[2]) + (a[3] ? "*" + b(a[3]) : "") + (a[4] ? "*" + b(a[4]) : ""), h.b.h())
            }, _setCustomVar: function (a) {
                if (!(4 > a.length)) {
                    var d = a[1], e = a[4] || 3;
                    if (0 < d && 6 > d && 0 < e && 4 > e) {
                        f.A++;
                        for (var s = (h.b.a.cv || "*").split("!"), t = s.length; t < d - 1; t++)s.push("*");
                        s[d - 1] = e + "*" + b(a[2]) + "*" + b(a[3]);
                        h.b.a.cv = s.join("!");
                        a = h.b.a.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g,
                            "");
                        "" !== a ? h.b.setData("Hm_cv_" + c.id, encodeURIComponent(a), c.age) : h.b.Da("Hm_cv_" + c.id)
                    }
                }
            }, _setReferrerOverride: function (a) {
                1 < a.length && (h.b.a.su = a[1].charAt && "/" == a[1].charAt(0) ? n.protocol + "//" + window.location.host + a[1] : a[1], f.T = p)
            }, _trackOrder: function (b) {
                b = b[1];
                d.e(b, "Object") && (a(b), f.d |= 16, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 94, h.b.a.ep = g.stringify(b), h.b.h())
            }, _trackMobConv: function (a) {
                if (a = {
                        webim: 1,
                        tel: 2,
                        map: 3,
                        sms: 4,
                        callback: 5,
                        share: 6
                    }[a[1]])f.d |= 32, h.b.a.et = 93, h.b.a.ep = a, h.b.h()
            }, _trackRTPageview: function (b) {
                b =
                    b[1];
                d.e(b, "Object") && (a(b), b = g.stringify(b), 512 >= encodeURIComponent(b).length && (f.d |= 64, h.b.a.rt = b))
            }, _trackRTEvent: function (b) {
                b = b[1];
                if (d.e(b, "Object")) {
                    a(b);
                    b = encodeURIComponent(g.stringify(b));
                    var e = function (a) {
                        var b = h.b.a.rt;
                        f.d |= 128;
                        h.b.a.et = 90;
                        h.b.a.rt = a;
                        h.b.h();
                        h.b.a.rt = b
                    }, l = b.length;
                    if (900 >= l)e.call(this, b); else for (var l = Math.ceil(l / 900), s = "block|" + Math.round(Math.random() * n.l).toString(16) + "|" + l + "|", t = [], u = 0; u < l; u++)t.push(u), t.push(b.substring(900 * u, 900 * u + 900)), e.call(this, s + t.join("|")),
                        t = []
                }
            }, _setUserId: function (a) {
                a = a[1];
                if (d.e(a, "String") || d.e(a, "Number")) {
                    var b = h.b.G(), g = "hm-" + h.b.a.v;
                    f.V = f.V || Math.round(Math.random() * n.l);
                    e.log("//datax.baidu.com/x.gif?si=" + c.id + "&dm=" + encodeURIComponent(b) + "&ac=" + encodeURIComponent(a) + "&v=" + g + "&li=" + f.V + "&rnd=" + Math.round(Math.random() * n.l))
                }
            }
        };
        f.init();
        h.ba = f;
        return h.ba
    })();

    (function () {
        function a() {
            "undefined" == typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = p, this.a = {}, this.H = r, this.init())
        }

        var b = mt.url, e = mt.M, d = mt.B, g = mt.lang, n = mt.cookie, l = mt.i, f = mt.localStorage, k = mt.sessionStorage, m = h.g, v = h.k;
        a.prototype = {
            I: function (a, b) {
                a = "." + a.replace(/:\d+/, "");
                b = "." + b.replace(/:\d+/, "");
                var d = a.indexOf(b);
                return -1 < d && d + b.length == a.length
            }, U: function (a, b) {
                a = a.replace(/^https?:\/\//, "");
                return 0 === a.indexOf(b)
            }, t: function (a) {
                for (var d = 0; d < c.dm.length; d++)if (-1 <
                    c.dm[d].indexOf("/")) {
                    if (this.U(a, c.dm[d]))return p
                } else {
                    var e = b.R(a);
                    if (e && this.I(e, c.dm[d]))return p
                }
                return r
            }, G: function () {
                for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++)if (this.I(a, c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/, "");
                return a
            }, Q: function () {
                for (var a = 0, b = c.dm.length; a < b; a++) {
                    var d = c.dm[a];
                    if (-1 < d.indexOf("/") && this.U(document.location.href, d))return d.replace(/^[^\/]+(\/.*)/, "$1") + "/"
                }
                return "/"
            }, ta: function () {
                if (!document.referrer)return m.j - m.p > c.vdur ? 1 : 4;
                var a =
                    r;
                this.t(document.referrer) && this.t(document.location.href) ? a = p : (a = b.R(document.referrer), a = this.I(a || "", document.location.hostname));
                return a ? m.j - m.p > c.vdur ? 1 : 4 : 3
            }, getData: function (a) {
                try {
                    return n.get(a) || k.get(a) || f.get(a)
                } catch (b) {
                }
            }, setData: function (a, b, d) {
                try {
                    n.set(a, b, {domain: this.G(), path: this.Q(), F: d}), d ? f.set(a, b, d) : k.set(a, b)
                } catch (e) {
                }
            }, Da: function (a) {
                try {
                    n.set(a, "", {domain: this.G(), path: this.Q(), F: -1}), k.remove(a), f.remove(a)
                } catch (b) {
                }
            }, Ha: function () {
                var a, b, d, e, f;
                m.p = this.getData("Hm_lpvt_" +
                c.id) || 0;
                13 == m.p.length && (m.p = Math.round(m.p / 1E3));
                b = this.ta();
                a = 4 != b ? 1 : 0;
                if (d = this.getData("Hm_lvt_" + c.id)) {
                    e = d.split(",");
                    for (f = e.length - 1; 0 <= f; f--)13 == e[f].length && (e[f] = "" + Math.round(e[f] / 1E3));
                    for (; 2592E3 < m.j - e[0];)e.shift();
                    f = 4 > e.length ? 2 : 3;
                    for (1 === a && e.push(m.j); 4 < e.length;)e.shift();
                    d = e.join(",");
                    e = e[e.length - 1]
                } else d = m.j, e = "", f = 1;
                this.setData("Hm_lvt_" + c.id, d, c.age);
                this.setData("Hm_lpvt_" + c.id, m.j);
                d = m.j == this.getData("Hm_lpvt_" + c.id) ? "1" : "0";
                if (0 === c.nv && this.t(document.location.href) &&
                    ("" === document.referrer || this.t(document.referrer)))a = 0, b = 4;
                this.a.nv = a;
                this.a.st = b;
                this.a.cc = d;
                this.a.lt = e;
                this.a.lv = f
            }, W: function () {
                for (var a = [], b = 0, d = m.X.length; b < d; b++) {
                    var e = m.X[b], f = this.a[e];
                    "undefined" != typeof f && "" !== f && a.push(e + "=" + encodeURIComponent(f))
                }
                b = this.a.et;
                this.a.rt && (0 === b ? a.push("rt=" + encodeURIComponent(this.a.rt)) : 90 === b && a.push("rt=" + this.a.rt));
                return a.join("&")
            }, Ia: function () {
                this.Ha();
                this.a.si = c.id;
                this.a.su = document.referrer;
                this.a.ds = l.Ea;
                this.a.cl = l.colorDepth + "-bit";
                this.a.ln = l.language;
                this.a.ja = l.javaEnabled ? 1 : 0;
                this.a.ck = l.cookieEnabled ? 1 : 0;
                this.a.lo = "number" == typeof _bdhm_top ? 1 : 0;
                this.a.fl = d.ua();
                this.a.v = "1.0.75";
                this.a.cv = decodeURIComponent(this.getData("Hm_cv_" + c.id) || "");
                1 == this.a.nv && (this.a.tt = document.title || "");
                var a = document.location.href;
                this.a.cm = b.o(a, m.xa) || "";
                this.a.cp = b.o(a, m.ya) || "";
                this.a.cw = b.o(a, m.wa) || "";
                this.a.ci = b.o(a, m.va) || "";
                this.a.cf = b.o(a, m.za) || ""
            }, init: function () {
                try {
                    this.Ia(), 0 === this.a.nv ? this.Ga() : this.L(".*"), h.b = this, this.ca(),
                        v.s("pv-b"), this.Fa()
                } catch (a) {
                    var b = [];
                    b.push("si=" + c.id);
                    b.push("n=" + encodeURIComponent(a.name));
                    b.push("m=" + encodeURIComponent(a.message));
                    b.push("r=" + encodeURIComponent(document.referrer));
                    e.log(m.protocol + "//" + m.K + "?" + b.join("&"))
                }
            }, Fa: function () {
                function a() {
                    v.s("pv-d")
                }

                "undefined" === typeof window._bdhm_autoPageview || window._bdhm_autoPageview === p ? (this.H = p, this.a.et = 0, this.a.ep = "", this.h(a)) : a()
            }, h: function (a) {
                var b = this;
                b.a.rnd = Math.round(Math.random() * m.l);
                v.s("stag-b");
                var d = m.protocol + "//" +
                    m.K + "?" + b.W();
                v.s("stag-d");
                b.$(d);
                e.log(d, function (d) {
                    b.L(d);
                    g.e(a, "Function") && a.call(b)
                })
            }, ca: function () {
                var a = document.location.hash.substring(1), d = RegExp(c.id), e = -1 < document.referrer.indexOf(m.aa) ? p : r, f = b.o(a, "jn"), g = /^heatlink$|^select$/.test(f);
                a && (d.test(a) && e && g) && (a = document.createElement("script"), a.setAttribute("type", "text/javascript"), a.setAttribute("charset", "utf-8"), a.setAttribute("src", m.protocol + "//" + c.js + f + ".js?" + this.a.rnd), f = document.getElementsByTagName("script")[0], f.parentNode.insertBefore(a,
                    f))
            }, $: function (a) {
                var b = k.get("Hm_unsent_" + c.id) || "", d = this.a.u ? "" : "&u=" + encodeURIComponent(document.location.href), b = encodeURIComponent(a.replace(/^https?:\/\//, "") + d) + (b ? "," + b : "");
                k.set("Hm_unsent_" + c.id, b)
            }, L: function (a) {
                var b = k.get("Hm_unsent_" + c.id) || "";
                b && ((b = b.replace(RegExp(encodeURIComponent(a.replace(/^https?:\/\//, "")).replace(/([\*\(\)])/g, "\\$1") + "(%26u%3D[^,]*)?,?", "g"), "").replace(/,$/, "")) ? k.set("Hm_unsent_" + c.id, b) : k.remove("Hm_unsent_" + c.id))
            }, Ga: function () {
                var a = this, b = k.get("Hm_unsent_" +
                c.id);
                if (b)for (var b = b.split(","), d = function (b) {
                    e.log(m.protocol + "//" + decodeURIComponent(b).replace(/^https?:\/\//, ""), function (b) {
                        a.L(b)
                    })
                }, f = 0, g = b.length; f < g; f++)d(b[f])
            }
        };
        return new a
    })();

    var w = h.g, x = h.load;
    if (c.apps) {
        var z = [w.protocol, "//ers.baidu.com/app/s.js?"];
        z.push(c.apps);
        x(z.join(""))
    }

    var C = h.g, D = h.load;
    if (c.conv && "http:" === C.protocol) {
        var E = ["http://page.baidu.com/conversion_js.php?sid="];
        E.push(c.conv);
        D(E.join(""))
    }

    var F = h.g, G = h.load;

    c.lxb && G([F.protocol, "//lxbjs.baidu.com/lxb.js?sid=", c.lxb].join(""));

    var H = h.load, I = h.g.protocol;
    if (c.qiao) {
        for (var J = [I + "//goutong.baidu.com/site/"], K = c.id, L = 5381, M = K.length, N = 0; N < M; N++)L = (33 * L + Number(K.charCodeAt(N))) % 4294967296;
        2147483648 < L && (L -= 2147483648);
        J.push(L % 1E3 + "/");
        J.push(c.id + "/b.js");
        J.push("?siteId=" + c.qiao);
        H(J.join(""))
    }
    ;

    
    // console.log(H);
    $('aa').clicks(function(params) {
        
    });

})();

