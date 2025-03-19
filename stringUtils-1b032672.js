var g = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function y(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function w(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function o() {
            return this instanceof o ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else
        n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach(function(o) {
        var s = Object.getOwnPropertyDescriptor(e, o);
        Object.defineProperty(n, o, s.get ? s : {
            enumerable: !0,
            get: function() {
                return e[o]
            }
        })
    }),
    n
}
const c = "https://gateway-run.bls.dev/api/v1"
  , p = "https://ip-check.bless.network";
function u() {
    return chrome.runtime.getManifest().version || "unknown"
}
async function f() {
    return (await chrome.storage.local.get("authToken")).authToken
}
async function m(e, t, n, o=null) {
    const s = await f()
      , r = u()
      , a = `${c}/nodes/${e}`;
    let i = "unknown";
    try {
        i = await l()
    } catch (d) {
        console.error("Error getting IP address:", d)
    }
    return (await fetch(a, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${s}`,
            "X-Extension-Version": r,
            "X-Extension-Signature": t || ""
        },
        body: JSON.stringify({
            ipAddress: i,
            hardwareId: n,
            hardwareInfo: o,
            extensionVersion: r
        })
    })).json()
}
async function S(e, t) {
    const n = await f()
      , o = u()
      , s = `${c}/nodes/${e}/start-session`;
    return (await fetch(s, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${n}`,
            "X-Extension-Version": o,
            "X-Extension-Signature": t || ""
        }
    })).json()
}
async function $(e, t) {
    const n = await f()
      , o = u()
      , s = `${c}/nodes/${e}/stop-session`;
    return (await fetch(s, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${n}`,
            "X-Extension-Version": o,
            "X-Extension-Signature": t || ""
        }
    })).json()
}
async function b(e, t, n) {
    const o = await f()
      , s = u()
      , r = `${c}/nodes/${e}/ping`;
    return (await fetch(r, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${o}`,
            "X-Extension-Version": s,
            "X-Extension-Signature": t || ""
        },
        body: JSON.stringify(n)
    })).json()
}
async function l() {
    return (await (await fetch(p)).json()).ip
}
function j(e, t=6, n=4) {
    const o = e == null ? void 0 : e.slice(0, t + 2)
      , s = e == null ? void 0 : e.slice(-n);
    return `${o}...${s}`
}
function T(e) {
    return new Date(e).toTimeString().split(" ")[0]
}
function v(e) {
    const t = isNaN(e) || e < 0 ? 0 : Math.floor(e)
      , n = Math.floor(t / 1440)
      , o = Math.floor(t % 1440 / 60)
      , s = t % 60
      , r = i => i.toString().padStart(2, "0");
    let a = "";
    return n > 0 && (a += `${n}d `),
    a += `${o}h ${r(s)}m`,
    a
}
export {c as G, v as a, w as b, g as c, u as d, S as e, T as f, y as g, $ as h, b as p, m as r, j as s};
