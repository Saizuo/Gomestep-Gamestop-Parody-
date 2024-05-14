var by = (e,t)=>()=>(t || e((t = {
  exports: {}
}).exports, t),
t.exports);
var Lb = by((Ab,pc)=>{
  function Oh(e, t) {
      for (var r = 0; r < t.length; r++) {
          const n = t[r];
          if (typeof n != "string" && !Array.isArray(n)) {
              for (const i in n)
                  if (i !== "default" && !(i in e)) {
                      const o = Object.getOwnPropertyDescriptor(n, i);
                      o && Object.defineProperty(e, i, o.get ? o : {
                          enumerable: !0,
                          get: ()=>n[i]
                      })
                  }
          }
      }
      return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
      }))
  }
  (function() {
      const t = document.createElement("link").relList;
      if (t && t.supports && t.supports("modulepreload"))
          return;
      for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
          n(i);
      new MutationObserver(i=>{
          for (const o of i)
              if (o.type === "childList")
                  for (const l of o.addedNodes)
                      l.tagName === "LINK" && l.rel === "modulepreload" && n(l)
      }
      ).observe(document, {
          childList: !0,
          subtree: !0
      });
      function r(i) {
          const o = {};
          return i.integrity && (o.integrity = i.integrity),
          i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
          i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
          o
      }
      function n(i) {
          if (i.ep)
              return;
          i.ep = !0;
          const o = r(i);
          fetch(i.href, o)
      }
  }
  )();
  var Io = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function Wn(e) {
      return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
  }
  var jh = {
      exports: {}
  }
    , na = {}
    , bh = {
      exports: {}
  }
    , X = {};
  /**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
  var vo = Symbol.for("react.element")
    , Ny = Symbol.for("react.portal")
    , My = Symbol.for("react.fragment")
    , Ly = Symbol.for("react.strict_mode")
    , Iy = Symbol.for("react.profiler")
    , Dy = Symbol.for("react.provider")
    , Ay = Symbol.for("react.context")
    , Fy = Symbol.for("react.forward_ref")
    , zy = Symbol.for("react.suspense")
    , Uy = Symbol.for("react.memo")
    , By = Symbol.for("react.lazy")
    , Hf = Symbol.iterator;
  function Hy(e) {
      return e === null || typeof e != "object" ? null : (e = Hf && e[Hf] || e["@@iterator"],
      typeof e == "function" ? e : null)
  }
  var Nh = {
      isMounted: function() {
          return !1
      },
      enqueueForceUpdate: function() {},
      enqueueReplaceState: function() {},
      enqueueSetState: function() {}
  }
    , Mh = Object.assign
    , Lh = {};
  function Kn(e, t, r) {
      this.props = e,
      this.context = t,
      this.refs = Lh,
      this.updater = r || Nh
  }
  Kn.prototype.isReactComponent = {};
  Kn.prototype.setState = function(e, t) {
      if (typeof e != "object" && typeof e != "function" && e != null)
          throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, e, t, "setState")
  }
  ;
  Kn.prototype.forceUpdate = function(e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate")
  }
  ;
  function Ih() {}
  Ih.prototype = Kn.prototype;
  function hc(e, t, r) {
      this.props = e,
      this.context = t,
      this.refs = Lh,
      this.updater = r || Nh
  }
  var vc = hc.prototype = new Ih;
  vc.constructor = hc;
  Mh(vc, Kn.prototype);
  vc.isPureReactComponent = !0;
  var Vf = Array.isArray
    , Dh = Object.prototype.hasOwnProperty
    , mc = {
      current: null
  }
    , Ah = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
  };
  function Fh(e, t, r) {
      var n, i = {}, o = null, l = null;
      if (t != null)
          for (n in t.ref !== void 0 && (l = t.ref),
          t.key !== void 0 && (o = "" + t.key),
          t)
              Dh.call(t, n) && !Ah.hasOwnProperty(n) && (i[n] = t[n]);
      var a = arguments.length - 2;
      if (a === 1)
          i.children = r;
      else if (1 < a) {
          for (var u = Array(a), s = 0; s < a; s++)
              u[s] = arguments[s + 2];
          i.children = u
      }
      if (e && e.defaultProps)
          for (n in a = e.defaultProps,
          a)
              i[n] === void 0 && (i[n] = a[n]);
      return {
          $$typeof: vo,
          type: e,
          key: o,
          ref: l,
          props: i,
          _owner: mc.current
      }
  }
  function Vy(e, t) {
      return {
          $$typeof: vo,
          type: e.type,
          key: t,
          ref: e.ref,
          props: e.props,
          _owner: e._owner
      }
  }
  function gc(e) {
      return typeof e == "object" && e !== null && e.$$typeof === vo
  }
  function Wy(e) {
      var t = {
          "=": "=0",
          ":": "=2"
      };
      return "$" + e.replace(/[=:]/g, function(r) {
          return t[r]
      })
  }
  var Wf = /\/+/g;
  function Wa(e, t) {
      return typeof e == "object" && e !== null && e.key != null ? Wy("" + e.key) : t.toString(36)
  }
  function al(e, t, r, n, i) {
      var o = typeof e;
      (o === "undefined" || o === "boolean") && (e = null);
      var l = !1;
      if (e === null)
          l = !0;
      else
          switch (o) {
          case "string":
          case "number":
              l = !0;
              break;
          case "object":
              switch (e.$$typeof) {
              case vo:
              case Ny:
                  l = !0
              }
          }
      if (l)
          return l = e,
          i = i(l),
          e = n === "" ? "." + Wa(l, 0) : n,
          Vf(i) ? (r = "",
          e != null && (r = e.replace(Wf, "$&/") + "/"),
          al(i, t, r, "", function(s) {
              return s
          })) : i != null && (gc(i) && (i = Vy(i, r + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(Wf, "$&/") + "/") + e)),
          t.push(i)),
          1;
      if (l = 0,
      n = n === "" ? "." : n + ":",
      Vf(e))
          for (var a = 0; a < e.length; a++) {
              o = e[a];
              var u = n + Wa(o, a);
              l += al(o, t, r, u, i)
          }
      else if (u = Hy(e),
      typeof u == "function")
          for (e = u.call(e),
          a = 0; !(o = e.next()).done; )
              o = o.value,
              u = n + Wa(o, a++),
              l += al(o, t, r, u, i);
      else if (o === "object")
          throw t = String(e),
          Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
      return l
  }
  function Do(e, t, r) {
      if (e == null)
          return e;
      var n = []
        , i = 0;
      return al(e, n, "", "", function(o) {
          return t.call(r, o, i++)
      }),
      n
  }
  function Ky(e) {
      if (e._status === -1) {
          var t = e._result;
          t = t(),
          t.then(function(r) {
              (e._status === 0 || e._status === -1) && (e._status = 1,
              e._result = r)
          }, function(r) {
              (e._status === 0 || e._status === -1) && (e._status = 2,
              e._result = r)
          }),
          e._status === -1 && (e._status = 0,
          e._result = t)
      }
      if (e._status === 1)
          return e._result.default;
      throw e._result
  }
  var Ze = {
      current: null
  }
    , ul = {
      transition: null
  }
    , Gy = {
      ReactCurrentDispatcher: Ze,
      ReactCurrentBatchConfig: ul,
      ReactCurrentOwner: mc
  };
  function zh() {
      throw Error("act(...) is not supported in production builds of React.")
  }
  X.Children = {
      map: Do,
      forEach: function(e, t, r) {
          Do(e, function() {
              t.apply(this, arguments)
          }, r)
      },
      count: function(e) {
          var t = 0;
          return Do(e, function() {
              t++
          }),
          t
      },
      toArray: function(e) {
          return Do(e, function(t) {
              return t
          }) || []
      },
      only: function(e) {
          if (!gc(e))
              throw Error("React.Children.only expected to receive a single React element child.");
          return e
      }
  };
  X.Component = Kn;
  X.Fragment = My;
  X.Profiler = Iy;
  X.PureComponent = hc;
  X.StrictMode = Ly;
  X.Suspense = zy;
  X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gy;
  X.act = zh;
  X.cloneElement = function(e, t, r) {
      if (e == null)
          throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
      var n = Mh({}, e.props)
        , i = e.key
        , o = e.ref
        , l = e._owner;
      if (t != null) {
          if (t.ref !== void 0 && (o = t.ref,
          l = mc.current),
          t.key !== void 0 && (i = "" + t.key),
          e.type && e.type.defaultProps)
              var a = e.type.defaultProps;
          for (u in t)
              Dh.call(t, u) && !Ah.hasOwnProperty(u) && (n[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u])
      }
      var u = arguments.length - 2;
      if (u === 1)
          n.children = r;
      else if (1 < u) {
          a = Array(u);
          for (var s = 0; s < u; s++)
              a[s] = arguments[s + 2];
          n.children = a
      }
      return {
          $$typeof: vo,
          type: e.type,
          key: i,
          ref: o,
          props: n,
          _owner: l
      }
  }
  ;
  X.createContext = function(e) {
      return e = {
          $$typeof: Ay,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
      },
      e.Provider = {
          $$typeof: Dy,
          _context: e
      },
      e.Consumer = e
  }
  ;
  X.createElement = Fh;
  X.createFactory = function(e) {
      var t = Fh.bind(null, e);
      return t.type = e,
      t
  }
  ;
  X.createRef = function() {
      return {
          current: null
      }
  }
  ;
  X.forwardRef = function(e) {
      return {
          $$typeof: Fy,
          render: e
      }
  }
  ;
  X.isValidElement = gc;
  X.lazy = function(e) {
      return {
          $$typeof: By,
          _payload: {
              _status: -1,
              _result: e
          },
          _init: Ky
      }
  }
  ;
  X.memo = function(e, t) {
      return {
          $$typeof: Uy,
          type: e,
          compare: t === void 0 ? null : t
      }
  }
  ;
  X.startTransition = function(e) {
      var t = ul.transition;
      ul.transition = {};
      try {
          e()
      } finally {
          ul.transition = t
      }
  }
  ;
  X.unstable_act = zh;
  X.useCallback = function(e, t) {
      return Ze.current.useCallback(e, t)
  }
  ;
  X.useContext = function(e) {
      return Ze.current.useContext(e)
  }
  ;
  X.useDebugValue = function() {}
  ;
  X.useDeferredValue = function(e) {
      return Ze.current.useDeferredValue(e)
  }
  ;
  X.useEffect = function(e, t) {
      return Ze.current.useEffect(e, t)
  }
  ;
  X.useId = function() {
      return Ze.current.useId()
  }
  ;
  X.useImperativeHandle = function(e, t, r) {
      return Ze.current.useImperativeHandle(e, t, r)
  }
  ;
  X.useInsertionEffect = function(e, t) {
      return Ze.current.useInsertionEffect(e, t)
  }
  ;
  X.useLayoutEffect = function(e, t) {
      return Ze.current.useLayoutEffect(e, t)
  }
  ;
  X.useMemo = function(e, t) {
      return Ze.current.useMemo(e, t)
  }
  ;
  X.useReducer = function(e, t, r) {
      return Ze.current.useReducer(e, t, r)
  }
  ;
  X.useRef = function(e) {
      return Ze.current.useRef(e)
  }
  ;
  X.useState = function(e) {
      return Ze.current.useState(e)
  }
  ;
  X.useSyncExternalStore = function(e, t, r) {
      return Ze.current.useSyncExternalStore(e, t, r)
  }
  ;
  X.useTransition = function() {
      return Ze.current.useTransition()
  }
  ;
  X.version = "18.3.1";
  bh.exports = X;
  var w = bh.exports;
  const U = Wn(w)
    , In = Oh({
      __proto__: null,
      default: U
  }, [w]);
  /**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
  var Qy = w
    , Yy = Symbol.for("react.element")
    , qy = Symbol.for("react.fragment")
    , Xy = Object.prototype.hasOwnProperty
    , Jy = Qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
    , Zy = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
  };
  function Uh(e, t, r) {
      var n, i = {}, o = null, l = null;
      r !== void 0 && (o = "" + r),
      t.key !== void 0 && (o = "" + t.key),
      t.ref !== void 0 && (l = t.ref);
      for (n in t)
          Xy.call(t, n) && !Zy.hasOwnProperty(n) && (i[n] = t[n]);
      if (e && e.defaultProps)
          for (n in t = e.defaultProps,
          t)
              i[n] === void 0 && (i[n] = t[n]);
      return {
          $$typeof: Yy,
          type: e,
          key: o,
          ref: l,
          props: i,
          _owner: Jy.current
      }
  }
  na.Fragment = qy;
  na.jsx = Uh;
  na.jsxs = Uh;
  jh.exports = na;
  var T = jh.exports
    , Hu = {}
    , Bh = {
      exports: {}
  }
    , ht = {}
    , Hh = {
      exports: {}
  }
    , Vh = {};
  /**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
  (function(e) {
      function t($, F) {
          var z = $.length;
          $.push(F);
          e: for (; 0 < z; ) {
              var Z = z - 1 >>> 1
                , q = $[Z];
              if (0 < i(q, F))
                  $[Z] = F,
                  $[z] = q,
                  z = Z;
              else
                  break e
          }
      }
      function r($) {
          return $.length === 0 ? null : $[0]
      }
      function n($) {
          if ($.length === 0)
              return null;
          var F = $[0]
            , z = $.pop();
          if (z !== F) {
              $[0] = z;
              e: for (var Z = 0, q = $.length, tt = q >>> 1; Z < tt; ) {
                  var pe = 2 * (Z + 1) - 1
                    , rt = $[pe]
                    , De = pe + 1
                    , nt = $[De];
                  if (0 > i(rt, z))
                      De < q && 0 > i(nt, rt) ? ($[Z] = nt,
                      $[De] = z,
                      Z = De) : ($[Z] = rt,
                      $[pe] = z,
                      Z = pe);
                  else if (De < q && 0 > i(nt, z))
                      $[Z] = nt,
                      $[De] = z,
                      Z = De;
                  else
                      break e
              }
          }
          return F
      }
      function i($, F) {
          var z = $.sortIndex - F.sortIndex;
          return z !== 0 ? z : $.id - F.id
      }
      if (typeof performance == "object" && typeof performance.now == "function") {
          var o = performance;
          e.unstable_now = function() {
              return o.now()
          }
      } else {
          var l = Date
            , a = l.now();
          e.unstable_now = function() {
              return l.now() - a
          }
      }
      var u = []
        , s = []
        , c = 1
        , f = null
        , d = 3
        , y = !1
        , g = !1
        , m = !1
        , E = typeof setTimeout == "function" ? setTimeout : null
        , h = typeof clearTimeout == "function" ? clearTimeout : null
        , p = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function v($) {
          for (var F = r(s); F !== null; ) {
              if (F.callback === null)
                  n(s);
              else if (F.startTime <= $)
                  n(s),
                  F.sortIndex = F.expirationTime,
                  t(u, F);
              else
                  break;
              F = r(s)
          }
      }
      function C($) {
          if (m = !1,
          v($),
          !g)
              if (r(u) !== null)
                  g = !0,
                  W(k);
              else {
                  var F = r(s);
                  F !== null && J(C, F.startTime - $)
              }
      }
      function k($, F) {
          g = !1,
          m && (m = !1,
          h(O),
          O = -1),
          y = !0;
          var z = d;
          try {
              for (v(F),
              f = r(u); f !== null && (!(f.expirationTime > F) || $ && !V()); ) {
                  var Z = f.callback;
                  if (typeof Z == "function") {
                      f.callback = null,
                      d = f.priorityLevel;
                      var q = Z(f.expirationTime <= F);
                      F = e.unstable_now(),
                      typeof q == "function" ? f.callback = q : f === r(u) && n(u),
                      v(F)
                  } else
                      n(u);
                  f = r(u)
              }
              if (f !== null)
                  var tt = !0;
              else {
                  var pe = r(s);
                  pe !== null && J(C, pe.startTime - F),
                  tt = !1
              }
              return tt
          } finally {
              f = null,
              d = z,
              y = !1
          }
      }
      var b = !1
        , S = null
        , O = -1
        , L = 5
        , M = -1;
      function V() {
          return !(e.unstable_now() - M < L)
      }
      function ie() {
          if (S !== null) {
              var $ = e.unstable_now();
              M = $;
              var F = !0;
              try {
                  F = S(!0, $)
              } finally {
                  F ? ne() : (b = !1,
                  S = null)
              }
          } else
              b = !1
      }
      var ne;
      if (typeof p == "function")
          ne = function() {
              p(ie)
          }
          ;
      else if (typeof MessageChannel < "u") {
          var se = new MessageChannel
            , oe = se.port2;
          se.port1.onmessage = ie,
          ne = function() {
              oe.postMessage(null)
          }
      } else
          ne = function() {
              E(ie, 0)
          }
          ;
      function W($) {
          S = $,
          b || (b = !0,
          ne())
      }
      function J($, F) {
          O = E(function() {
              $(e.unstable_now())
          }, F)
      }
      e.unstable_IdlePriority = 5,
      e.unstable_ImmediatePriority = 1,
      e.unstable_LowPriority = 4,
      e.unstable_NormalPriority = 3,
      e.unstable_Profiling = null,
      e.unstable_UserBlockingPriority = 2,
      e.unstable_cancelCallback = function($) {
          $.callback = null
      }
      ,
      e.unstable_continueExecution = function() {
          g || y || (g = !0,
          W(k))
      }
      ,
      e.unstable_forceFrameRate = function($) {
          0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < $ ? Math.floor(1e3 / $) : 5
      }
      ,
      e.unstable_getCurrentPriorityLevel = function() {
          return d
      }
      ,
      e.unstable_getFirstCallbackNode = function() {
          return r(u)
      }
      ,
      e.unstable_next = function($) {
          switch (d) {
          case 1:
          case 2:
          case 3:
              var F = 3;
              break;
          default:
              F = d
          }
          var z = d;
          d = F;
          try {
              return $()
          } finally {
              d = z
          }
      }
      ,
      e.unstable_pauseExecution = function() {}
      ,
      e.unstable_requestPaint = function() {}
      ,
      e.unstable_runWithPriority = function($, F) {
          switch ($) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
              break;
          default:
              $ = 3
          }
          var z = d;
          d = $;
          try {
              return F()
          } finally {
              d = z
          }
      }
      ,
      e.unstable_scheduleCallback = function($, F, z) {
          var Z = e.unstable_now();
          switch (typeof z == "object" && z !== null ? (z = z.delay,
          z = typeof z == "number" && 0 < z ? Z + z : Z) : z = Z,
          $) {
          case 1:
              var q = -1;
              break;
          case 2:
              q = 250;
              break;
          case 5:
              q = 1073741823;
              break;
          case 4:
              q = 1e4;
              break;
          default:
              q = 5e3
          }
          return q = z + q,
          $ = {
              id: c++,
              callback: F,
              priorityLevel: $,
              startTime: z,
              expirationTime: q,
              sortIndex: -1
          },
          z > Z ? ($.sortIndex = z,
          t(s, $),
          r(u) === null && $ === r(s) && (m ? (h(O),
          O = -1) : m = !0,
          J(C, z - Z))) : ($.sortIndex = q,
          t(u, $),
          g || y || (g = !0,
          W(k))),
          $
      }
      ,
      e.unstable_shouldYield = V,
      e.unstable_wrapCallback = function($) {
          var F = d;
          return function() {
              var z = d;
              d = F;
              try {
                  return $.apply(this, arguments)
              } finally {
                  d = z
              }
          }
      }
  }
  )(Vh);
  Hh.exports = Vh;
  var e0 = Hh.exports;
  /**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
  var t0 = w
    , pt = e0;
  function j(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)
          t += "&args[]=" + encodeURIComponent(arguments[r]);
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }
  var Wh = new Set
    , Ki = {};
  function ln(e, t) {
      Dn(e, t),
      Dn(e + "Capture", t)
  }
  function Dn(e, t) {
      for (Ki[e] = t,
      e = 0; e < t.length; e++)
          Wh.add(t[e])
  }
  var Jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
    , Vu = Object.prototype.hasOwnProperty
    , r0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
    , Kf = {}
    , Gf = {};
  function n0(e) {
      return Vu.call(Gf, e) ? !0 : Vu.call(Kf, e) ? !1 : r0.test(e) ? Gf[e] = !0 : (Kf[e] = !0,
      !1)
  }
  function i0(e, t, r, n) {
      if (r !== null && r.type === 0)
          return !1;
      switch (typeof t) {
      case "function":
      case "symbol":
          return !0;
      case "boolean":
          return n ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
          e !== "data-" && e !== "aria-");
      default:
          return !1
      }
  }
  function o0(e, t, r, n) {
      if (t === null || typeof t > "u" || i0(e, t, r, n))
          return !0;
      if (n)
          return !1;
      if (r !== null)
          switch (r.type) {
          case 3:
              return !t;
          case 4:
              return t === !1;
          case 5:
              return isNaN(t);
          case 6:
              return isNaN(t) || 1 > t
          }
      return !1
  }
  function et(e, t, r, n, i, o, l) {
      this.acceptsBooleans = t === 2 || t === 3 || t === 4,
      this.attributeName = n,
      this.attributeNamespace = i,
      this.mustUseProperty = r,
      this.propertyName = e,
      this.type = t,
      this.sanitizeURL = o,
      this.removeEmptyString = l
  }
  var He = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
      He[e] = new et(e,0,!1,e,null,!1,!1)
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0];
      He[t] = new et(t,1,!1,e[1],null,!1,!1)
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      He[e] = new et(e,2,!1,e.toLowerCase(),null,!1,!1)
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      He[e] = new et(e,2,!1,e,null,!1,!1)
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
      He[e] = new et(e,3,!1,e.toLowerCase(),null,!1,!1)
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(e) {
      He[e] = new et(e,3,!0,e,null,!1,!1)
  });
  ["capture", "download"].forEach(function(e) {
      He[e] = new et(e,4,!1,e,null,!1,!1)
  });
  ["cols", "rows", "size", "span"].forEach(function(e) {
      He[e] = new et(e,6,!1,e,null,!1,!1)
  });
  ["rowSpan", "start"].forEach(function(e) {
      He[e] = new et(e,5,!1,e.toLowerCase(),null,!1,!1)
  });
  var yc = /[\-:]([a-z])/g;
  function wc(e) {
      return e[1].toUpperCase()
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
      var t = e.replace(yc, wc);
      He[t] = new et(t,1,!1,e,null,!1,!1)
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
      var t = e.replace(yc, wc);
      He[t] = new et(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
      var t = e.replace(yc, wc);
      He[t] = new et(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
  });
  ["tabIndex", "crossOrigin"].forEach(function(e) {
      He[e] = new et(e,1,!1,e.toLowerCase(),null,!1,!1)
  });
  He.xlinkHref = new et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
  ["src", "href", "action", "formAction"].forEach(function(e) {
      He[e] = new et(e,1,!1,e.toLowerCase(),null,!0,!0)
  });
  function Sc(e, t, r, n) {
      var i = He.hasOwnProperty(t) ? He[t] : null;
      (i !== null ? i.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (o0(t, r, i, n) && (r = null),
      n || i === null ? n0(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : i.mustUseProperty ? e[i.propertyName] = r === null ? i.type === 3 ? !1 : "" : r : (t = i.attributeName,
      n = i.attributeNamespace,
      r === null ? e.removeAttribute(t) : (i = i.type,
      r = i === 3 || i === 4 && r === !0 ? "" : "" + r,
      n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
  }
  var rr = t0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
    , Ao = Symbol.for("react.element")
    , gn = Symbol.for("react.portal")
    , yn = Symbol.for("react.fragment")
    , xc = Symbol.for("react.strict_mode")
    , Wu = Symbol.for("react.profiler")
    , Kh = Symbol.for("react.provider")
    , Gh = Symbol.for("react.context")
    , Ec = Symbol.for("react.forward_ref")
    , Ku = Symbol.for("react.suspense")
    , Gu = Symbol.for("react.suspense_list")
    , Pc = Symbol.for("react.memo")
    , fr = Symbol.for("react.lazy")
    , Qh = Symbol.for("react.offscreen")
    , Qf = Symbol.iterator;
  function fi(e) {
      return e === null || typeof e != "object" ? null : (e = Qf && e[Qf] || e["@@iterator"],
      typeof e == "function" ? e : null)
  }
  var Ce = Object.assign, Ka;
  function Ti(e) {
      if (Ka === void 0)
          try {
              throw Error()
          } catch (r) {
              var t = r.stack.trim().match(/\n( *(at )?)/);
              Ka = t && t[1] || ""
          }
      return `
` + Ka + e
  }
  var Ga = !1;
  function Qa(e, t) {
      if (!e || Ga)
          return "";
      Ga = !0;
      var r = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
          if (t)
              if (t = function() {
                  throw Error()
              }
              ,
              Object.defineProperty(t.prototype, "props", {
                  set: function() {
                      throw Error()
                  }
              }),
              typeof Reflect == "object" && Reflect.construct) {
                  try {
                      Reflect.construct(t, [])
                  } catch (s) {
                      var n = s
                  }
                  Reflect.construct(e, [], t)
              } else {
                  try {
                      t.call()
                  } catch (s) {
                      n = s
                  }
                  e.call(t.prototype)
              }
          else {
              try {
                  throw Error()
              } catch (s) {
                  n = s
              }
              e()
          }
      } catch (s) {
          if (s && n && typeof s.stack == "string") {
              for (var i = s.stack.split(`
`), o = n.stack.split(`
`), l = i.length - 1, a = o.length - 1; 1 <= l && 0 <= a && i[l] !== o[a]; )
                  a--;
              for (; 1 <= l && 0 <= a; l--,
              a--)
                  if (i[l] !== o[a]) {
                      if (l !== 1 || a !== 1)
                          do
                              if (l--,
                              a--,
                              0 > a || i[l] !== o[a]) {
                                  var u = `
` + i[l].replace(" at new ", " at ");
                                  return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)),
                                  u
                              }
                          while (1 <= l && 0 <= a);
                      break
                  }
          }
      } finally {
          Ga = !1,
          Error.prepareStackTrace = r
      }
      return (e = e ? e.displayName || e.name : "") ? Ti(e) : ""
  }
  function l0(e) {
      switch (e.tag) {
      case 5:
          return Ti(e.type);
      case 16:
          return Ti("Lazy");
      case 13:
          return Ti("Suspense");
      case 19:
          return Ti("SuspenseList");
      case 0:
      case 2:
      case 15:
          return e = Qa(e.type, !1),
          e;
      case 11:
          return e = Qa(e.type.render, !1),
          e;
      case 1:
          return e = Qa(e.type, !0),
          e;
      default:
          return ""
      }
  }
  function Qu(e) {
      if (e == null)
          return null;
      if (typeof e == "function")
          return e.displayName || e.name || null;
      if (typeof e == "string")
          return e;
      switch (e) {
      case yn:
          return "Fragment";
      case gn:
          return "Portal";
      case Wu:
          return "Profiler";
      case xc:
          return "StrictMode";
      case Ku:
          return "Suspense";
      case Gu:
          return "SuspenseList"
      }
      if (typeof e == "object")
          switch (e.$$typeof) {
          case Gh:
              return (e.displayName || "Context") + ".Consumer";
          case Kh:
              return (e._context.displayName || "Context") + ".Provider";
          case Ec:
              var t = e.render;
              return e = e.displayName,
              e || (e = t.displayName || t.name || "",
              e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
              e;
          case Pc:
              return t = e.displayName || null,
              t !== null ? t : Qu(e.type) || "Memo";
          case fr:
              t = e._payload,
              e = e._init;
              try {
                  return Qu(e(t))
              } catch {}
          }
      return null
  }
  function a0(e) {
      var t = e.type;
      switch (e.tag) {
      case 24:
          return "Cache";
      case 9:
          return (t.displayName || "Context") + ".Consumer";
      case 10:
          return (t._context.displayName || "Context") + ".Provider";
      case 18:
          return "DehydratedFragment";
      case 11:
          return e = t.render,
          e = e.displayName || e.name || "",
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
          return "Fragment";
      case 5:
          return t;
      case 4:
          return "Portal";
      case 3:
          return "Root";
      case 6:
          return "Text";
      case 16:
          return Qu(t);
      case 8:
          return t === xc ? "StrictMode" : "Mode";
      case 22:
          return "Offscreen";
      case 12:
          return "Profiler";
      case 21:
          return "Scope";
      case 13:
          return "Suspense";
      case 19:
          return "SuspenseList";
      case 25:
          return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
          if (typeof t == "function")
              return t.displayName || t.name || null;
          if (typeof t == "string")
              return t
      }
      return null
  }
  function kr(e) {
      switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
          return e;
      case "object":
          return e;
      default:
          return ""
      }
  }
  function Yh(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
  }
  function u0(e) {
      var t = Yh(e) ? "checked" : "value"
        , r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
        , n = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
          var i = r.get
            , o = r.set;
          return Object.defineProperty(e, t, {
              configurable: !0,
              get: function() {
                  return i.call(this)
              },
              set: function(l) {
                  n = "" + l,
                  o.call(this, l)
              }
          }),
          Object.defineProperty(e, t, {
              enumerable: r.enumerable
          }),
          {
              getValue: function() {
                  return n
              },
              setValue: function(l) {
                  n = "" + l
              },
              stopTracking: function() {
                  e._valueTracker = null,
                  delete e[t]
              }
          }
      }
  }
  function Fo(e) {
      e._valueTracker || (e._valueTracker = u0(e))
  }
  function qh(e) {
      if (!e)
          return !1;
      var t = e._valueTracker;
      if (!t)
          return !0;
      var r = t.getValue()
        , n = "";
      return e && (n = Yh(e) ? e.checked ? "true" : "false" : e.value),
      e = n,
      e !== r ? (t.setValue(e),
      !0) : !1
  }
  function xl(e) {
      if (e = e || (typeof document < "u" ? document : void 0),
      typeof e > "u")
          return null;
      try {
          return e.activeElement || e.body
      } catch {
          return e.body
      }
  }
  function Yu(e, t) {
      var r = t.checked;
      return Ce({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: r ?? e._wrapperState.initialChecked
      })
  }
  function Yf(e, t) {
      var r = t.defaultValue == null ? "" : t.defaultValue
        , n = t.checked != null ? t.checked : t.defaultChecked;
      r = kr(t.value != null ? t.value : r),
      e._wrapperState = {
          initialChecked: n,
          initialValue: r,
          controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
      }
  }
  function Xh(e, t) {
      t = t.checked,
      t != null && Sc(e, "checked", t, !1)
  }
  function qu(e, t) {
      Xh(e, t);
      var r = kr(t.value)
        , n = t.type;
      if (r != null)
          n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
      else if (n === "submit" || n === "reset") {
          e.removeAttribute("value");
          return
      }
      t.hasOwnProperty("value") ? Xu(e, t.type, r) : t.hasOwnProperty("defaultValue") && Xu(e, t.type, kr(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
  }
  function qf(e, t, r) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          var n = t.type;
          if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null))
              return;
          t = "" + e._wrapperState.initialValue,
          r || t === e.value || (e.value = t),
          e.defaultValue = t
      }
      r = e.name,
      r !== "" && (e.name = ""),
      e.defaultChecked = !!e._wrapperState.initialChecked,
      r !== "" && (e.name = r)
  }
  function Xu(e, t, r) {
      (t !== "number" || xl(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r))
  }
  var ki = Array.isArray;
  function On(e, t, r, n) {
      if (e = e.options,
      t) {
          t = {};
          for (var i = 0; i < r.length; i++)
              t["$" + r[i]] = !0;
          for (r = 0; r < e.length; r++)
              i = t.hasOwnProperty("$" + e[r].value),
              e[r].selected !== i && (e[r].selected = i),
              i && n && (e[r].defaultSelected = !0)
      } else {
          for (r = "" + kr(r),
          t = null,
          i = 0; i < e.length; i++) {
              if (e[i].value === r) {
                  e[i].selected = !0,
                  n && (e[i].defaultSelected = !0);
                  return
              }
              t !== null || e[i].disabled || (t = e[i])
          }
          t !== null && (t.selected = !0)
      }
  }
  function Ju(e, t) {
      if (t.dangerouslySetInnerHTML != null)
          throw Error(j(91));
      return Ce({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue
      })
  }
  function Xf(e, t) {
      var r = t.value;
      if (r == null) {
          if (r = t.children,
          t = t.defaultValue,
          r != null) {
              if (t != null)
                  throw Error(j(92));
              if (ki(r)) {
                  if (1 < r.length)
                      throw Error(j(93));
                  r = r[0]
              }
              t = r
          }
          t == null && (t = ""),
          r = t
      }
      e._wrapperState = {
          initialValue: kr(r)
      }
  }
  function Jh(e, t) {
      var r = kr(t.value)
        , n = kr(t.defaultValue);
      r != null && (r = "" + r,
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      n != null && (e.defaultValue = "" + n)
  }
  function Jf(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
  }
  function Zh(e) {
      switch (e) {
      case "svg":
          return "http://www.w3.org/2000/svg";
      case "math":
          return "http://www.w3.org/1998/Math/MathML";
      default:
          return "http://www.w3.org/1999/xhtml"
      }
  }
  function Zu(e, t) {
      return e == null || e === "http://www.w3.org/1999/xhtml" ? Zh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
  }
  var zo, ev = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, i) {
          MSApp.execUnsafeLocalFunction(function() {
              return e(t, r, n, i)
          })
      }
      : e
  }(function(e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
          e.innerHTML = t;
      else {
          for (zo = zo || document.createElement("div"),
          zo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = zo.firstChild; e.firstChild; )
              e.removeChild(e.firstChild);
          for (; t.firstChild; )
              e.appendChild(t.firstChild)
      }
  });
  function Gi(e, t) {
      if (t) {
          var r = e.firstChild;
          if (r && r === e.lastChild && r.nodeType === 3) {
              r.nodeValue = t;
              return
          }
      }
      e.textContent = t
  }
  var Mi = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
  }
    , s0 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Mi).forEach(function(e) {
      s0.forEach(function(t) {
          t = t + e.charAt(0).toUpperCase() + e.substring(1),
          Mi[t] = Mi[e]
      })
  });
  function tv(e, t, r) {
      return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || Mi.hasOwnProperty(e) && Mi[e] ? ("" + t).trim() : t + "px"
  }
  function rv(e, t) {
      e = e.style;
      for (var r in t)
          if (t.hasOwnProperty(r)) {
              var n = r.indexOf("--") === 0
                , i = tv(r, t[r], n);
              r === "float" && (r = "cssFloat"),
              n ? e.setProperty(r, i) : e[r] = i
          }
  }
  var c0 = Ce({
      menuitem: !0
  }, {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
  });
  function es(e, t) {
      if (t) {
          if (c0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
              throw Error(j(137, e));
          if (t.dangerouslySetInnerHTML != null) {
              if (t.children != null)
                  throw Error(j(60));
              if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                  throw Error(j(61))
          }
          if (t.style != null && typeof t.style != "object")
              throw Error(j(62))
      }
  }
  function ts(e, t) {
      if (e.indexOf("-") === -1)
          return typeof t.is == "string";
      switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
          return !1;
      default:
          return !0
      }
  }
  var rs = null;
  function Cc(e) {
      return e = e.target || e.srcElement || window,
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
  }
  var ns = null
    , jn = null
    , bn = null;
  function Zf(e) {
      if (e = yo(e)) {
          if (typeof ns != "function")
              throw Error(j(280));
          var t = e.stateNode;
          t && (t = ua(t),
          ns(e.stateNode, e.type, t))
      }
  }
  function nv(e) {
      jn ? bn ? bn.push(e) : bn = [e] : jn = e
  }
  function iv() {
      if (jn) {
          var e = jn
            , t = bn;
          if (bn = jn = null,
          Zf(e),
          t)
              for (e = 0; e < t.length; e++)
                  Zf(t[e])
      }
  }
  function ov(e, t) {
      return e(t)
  }
  function lv() {}
  var Ya = !1;
  function av(e, t, r) {
      if (Ya)
          return e(t, r);
      Ya = !0;
      try {
          return ov(e, t, r)
      } finally {
          Ya = !1,
          (jn !== null || bn !== null) && (lv(),
          iv())
      }
  }
  function Qi(e, t) {
      var r = e.stateNode;
      if (r === null)
          return null;
      var n = ua(r);
      if (n === null)
          return null;
      r = n[t];
      e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
          (n = !n.disabled) || (e = e.type,
          n = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
          e = !n;
          break e;
      default:
          e = !1
      }
      if (e)
          return null;
      if (r && typeof r != "function")
          throw Error(j(231, t, typeof r));
      return r
  }
  var is = !1;
  if (Jt)
      try {
          var di = {};
          Object.defineProperty(di, "passive", {
              get: function() {
                  is = !0
              }
          }),
          window.addEventListener("test", di, di),
          window.removeEventListener("test", di, di)
      } catch {
          is = !1
      }
  function f0(e, t, r, n, i, o, l, a, u) {
      var s = Array.prototype.slice.call(arguments, 3);
      try {
          t.apply(r, s)
      } catch (c) {
          this.onError(c)
      }
  }
  var Li = !1
    , El = null
    , Pl = !1
    , os = null
    , d0 = {
      onError: function(e) {
          Li = !0,
          El = e
      }
  };
  function p0(e, t, r, n, i, o, l, a, u) {
      Li = !1,
      El = null,
      f0.apply(d0, arguments)
  }
  function h0(e, t, r, n, i, o, l, a, u) {
      if (p0.apply(this, arguments),
      Li) {
          if (Li) {
              var s = El;
              Li = !1,
              El = null
          } else
              throw Error(j(198));
          Pl || (Pl = !0,
          os = s)
      }
  }
  function an(e) {
      var t = e
        , r = e;
      if (e.alternate)
          for (; t.return; )
              t = t.return;
      else {
          e = t;
          do
              t = e,
              t.flags & 4098 && (r = t.return),
              e = t.return;
          while (e)
      }
      return t.tag === 3 ? r : null
  }
  function uv(e) {
      if (e.tag === 13) {
          var t = e.memoizedState;
          if (t === null && (e = e.alternate,
          e !== null && (t = e.memoizedState)),
          t !== null)
              return t.dehydrated
      }
      return null
  }
  function ed(e) {
      if (an(e) !== e)
          throw Error(j(188))
  }
  function v0(e) {
      var t = e.alternate;
      if (!t) {
          if (t = an(e),
          t === null)
              throw Error(j(188));
          return t !== e ? null : e
      }
      for (var r = e, n = t; ; ) {
          var i = r.return;
          if (i === null)
              break;
          var o = i.alternate;
          if (o === null) {
              if (n = i.return,
              n !== null) {
                  r = n;
                  continue
              }
              break
          }
          if (i.child === o.child) {
              for (o = i.child; o; ) {
                  if (o === r)
                      return ed(i),
                      e;
                  if (o === n)
                      return ed(i),
                      t;
                  o = o.sibling
              }
              throw Error(j(188))
          }
          if (r.return !== n.return)
              r = i,
              n = o;
          else {
              for (var l = !1, a = i.child; a; ) {
                  if (a === r) {
                      l = !0,
                      r = i,
                      n = o;
                      break
                  }
                  if (a === n) {
                      l = !0,
                      n = i,
                      r = o;
                      break
                  }
                  a = a.sibling
              }
              if (!l) {
                  for (a = o.child; a; ) {
                      if (a === r) {
                          l = !0,
                          r = o,
                          n = i;
                          break
                      }
                      if (a === n) {
                          l = !0,
                          n = o,
                          r = i;
                          break
                      }
                      a = a.sibling
                  }
                  if (!l)
                      throw Error(j(189))
              }
          }
          if (r.alternate !== n)
              throw Error(j(190))
      }
      if (r.tag !== 3)
          throw Error(j(188));
      return r.stateNode.current === r ? e : t
  }
  function sv(e) {
      return e = v0(e),
      e !== null ? cv(e) : null
  }
  function cv(e) {
      if (e.tag === 5 || e.tag === 6)
          return e;
      for (e = e.child; e !== null; ) {
          var t = cv(e);
          if (t !== null)
              return t;
          e = e.sibling
      }
      return null
  }
  var fv = pt.unstable_scheduleCallback
    , td = pt.unstable_cancelCallback
    , m0 = pt.unstable_shouldYield
    , g0 = pt.unstable_requestPaint
    , Re = pt.unstable_now
    , y0 = pt.unstable_getCurrentPriorityLevel
    , _c = pt.unstable_ImmediatePriority
    , dv = pt.unstable_UserBlockingPriority
    , Cl = pt.unstable_NormalPriority
    , w0 = pt.unstable_LowPriority
    , pv = pt.unstable_IdlePriority
    , ia = null
    , Bt = null;
  function S0(e) {
      if (Bt && typeof Bt.onCommitFiberRoot == "function")
          try {
              Bt.onCommitFiberRoot(ia, e, void 0, (e.current.flags & 128) === 128)
          } catch {}
  }
  var Mt = Math.clz32 ? Math.clz32 : P0
    , x0 = Math.log
    , E0 = Math.LN2;
  function P0(e) {
      return e >>>= 0,
      e === 0 ? 32 : 31 - (x0(e) / E0 | 0) | 0
  }
  var Uo = 64
    , Bo = 4194304;
  function $i(e) {
      switch (e & -e) {
      case 1:
          return 1;
      case 2:
          return 2;
      case 4:
          return 4;
      case 8:
          return 8;
      case 16:
          return 16;
      case 32:
          return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
          return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
          return e & 130023424;
      case 134217728:
          return 134217728;
      case 268435456:
          return 268435456;
      case 536870912:
          return 536870912;
      case 1073741824:
          return 1073741824;
      default:
          return e
      }
  }
  function _l(e, t) {
      var r = e.pendingLanes;
      if (r === 0)
          return 0;
      var n = 0
        , i = e.suspendedLanes
        , o = e.pingedLanes
        , l = r & 268435455;
      if (l !== 0) {
          var a = l & ~i;
          a !== 0 ? n = $i(a) : (o &= l,
          o !== 0 && (n = $i(o)))
      } else
          l = r & ~i,
          l !== 0 ? n = $i(l) : o !== 0 && (n = $i(o));
      if (n === 0)
          return 0;
      if (t !== 0 && t !== n && !(t & i) && (i = n & -n,
      o = t & -t,
      i >= o || i === 16 && (o & 4194240) !== 0))
          return t;
      if (n & 4 && (n |= r & 16),
      t = e.entangledLanes,
      t !== 0)
          for (e = e.entanglements,
          t &= n; 0 < t; )
              r = 31 - Mt(t),
              i = 1 << r,
              n |= e[r],
              t &= ~i;
      return n
  }
  function C0(e, t) {
      switch (e) {
      case 1:
      case 2:
      case 4:
          return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
          return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
          return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
          return -1;
      default:
          return -1
      }
  }
  function _0(e, t) {
      for (var r = e.suspendedLanes, n = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
          var l = 31 - Mt(o)
            , a = 1 << l
            , u = i[l];
          u === -1 ? (!(a & r) || a & n) && (i[l] = C0(a, t)) : u <= t && (e.expiredLanes |= a),
          o &= ~a
      }
  }
  function ls(e) {
      return e = e.pendingLanes & -1073741825,
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  }
  function hv() {
      var e = Uo;
      return Uo <<= 1,
      !(Uo & 4194240) && (Uo = 64),
      e
  }
  function qa(e) {
      for (var t = [], r = 0; 31 > r; r++)
          t.push(e);
      return t
  }
  function mo(e, t, r) {
      e.pendingLanes |= t,
      t !== 536870912 && (e.suspendedLanes = 0,
      e.pingedLanes = 0),
      e = e.eventTimes,
      t = 31 - Mt(t),
      e[t] = r
  }
  function R0(e, t) {
      var r = e.pendingLanes & ~t;
      e.pendingLanes = t,
      e.suspendedLanes = 0,
      e.pingedLanes = 0,
      e.expiredLanes &= t,
      e.mutableReadLanes &= t,
      e.entangledLanes &= t,
      t = e.entanglements;
      var n = e.eventTimes;
      for (e = e.expirationTimes; 0 < r; ) {
          var i = 31 - Mt(r)
            , o = 1 << i;
          t[i] = 0,
          n[i] = -1,
          e[i] = -1,
          r &= ~o
      }
  }
  function Rc(e, t) {
      var r = e.entangledLanes |= t;
      for (e = e.entanglements; r; ) {
          var n = 31 - Mt(r)
            , i = 1 << n;
          i & t | e[n] & t && (e[n] |= t),
          r &= ~i
      }
  }
  var le = 0;
  function vv(e) {
      return e &= -e,
      1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
  }
  var mv, Tc, gv, yv, wv, as = !1, Ho = [], wr = null, Sr = null, xr = null, Yi = new Map, qi = new Map, pr = [], T0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function rd(e, t) {
      switch (e) {
      case "focusin":
      case "focusout":
          wr = null;
          break;
      case "dragenter":
      case "dragleave":
          Sr = null;
          break;
      case "mouseover":
      case "mouseout":
          xr = null;
          break;
      case "pointerover":
      case "pointerout":
          Yi.delete(t.pointerId);
          break;
      case "gotpointercapture":
      case "lostpointercapture":
          qi.delete(t.pointerId)
      }
  }
  function pi(e, t, r, n, i, o) {
      return e === null || e.nativeEvent !== o ? (e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: n,
          nativeEvent: o,
          targetContainers: [i]
      },
      t !== null && (t = yo(t),
      t !== null && Tc(t)),
      e) : (e.eventSystemFlags |= n,
      t = e.targetContainers,
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e)
  }
  function k0(e, t, r, n, i) {
      switch (t) {
      case "focusin":
          return wr = pi(wr, e, t, r, n, i),
          !0;
      case "dragenter":
          return Sr = pi(Sr, e, t, r, n, i),
          !0;
      case "mouseover":
          return xr = pi(xr, e, t, r, n, i),
          !0;
      case "pointerover":
          var o = i.pointerId;
          return Yi.set(o, pi(Yi.get(o) || null, e, t, r, n, i)),
          !0;
      case "gotpointercapture":
          return o = i.pointerId,
          qi.set(o, pi(qi.get(o) || null, e, t, r, n, i)),
          !0
      }
      return !1
  }
  function Sv(e) {
      var t = Br(e.target);
      if (t !== null) {
          var r = an(t);
          if (r !== null) {
              if (t = r.tag,
              t === 13) {
                  if (t = uv(r),
                  t !== null) {
                      e.blockedOn = t,
                      wv(e.priority, function() {
                          gv(r)
                      });
                      return
                  }
              } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
                  e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
                  return
              }
          }
      }
      e.blockedOn = null
  }
  function sl(e) {
      if (e.blockedOn !== null)
          return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
          var r = us(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (r === null) {
              r = e.nativeEvent;
              var n = new r.constructor(r.type,r);
              rs = n,
              r.target.dispatchEvent(n),
              rs = null
          } else
              return t = yo(r),
              t !== null && Tc(t),
              e.blockedOn = r,
              !1;
          t.shift()
      }
      return !0
  }
  function nd(e, t, r) {
      sl(e) && r.delete(t)
  }
  function $0() {
      as = !1,
      wr !== null && sl(wr) && (wr = null),
      Sr !== null && sl(Sr) && (Sr = null),
      xr !== null && sl(xr) && (xr = null),
      Yi.forEach(nd),
      qi.forEach(nd)
  }
  function hi(e, t) {
      e.blockedOn === t && (e.blockedOn = null,
      as || (as = !0,
      pt.unstable_scheduleCallback(pt.unstable_NormalPriority, $0)))
  }
  function Xi(e) {
      function t(i) {
          return hi(i, e)
      }
      if (0 < Ho.length) {
          hi(Ho[0], e);
          for (var r = 1; r < Ho.length; r++) {
              var n = Ho[r];
              n.blockedOn === e && (n.blockedOn = null)
          }
      }
      for (wr !== null && hi(wr, e),
      Sr !== null && hi(Sr, e),
      xr !== null && hi(xr, e),
      Yi.forEach(t),
      qi.forEach(t),
      r = 0; r < pr.length; r++)
          n = pr[r],
          n.blockedOn === e && (n.blockedOn = null);
      for (; 0 < pr.length && (r = pr[0],
      r.blockedOn === null); )
          Sv(r),
          r.blockedOn === null && pr.shift()
  }
  var Nn = rr.ReactCurrentBatchConfig
    , Rl = !0;
  function O0(e, t, r, n) {
      var i = le
        , o = Nn.transition;
      Nn.transition = null;
      try {
          le = 1,
          kc(e, t, r, n)
      } finally {
          le = i,
          Nn.transition = o
      }
  }
  function j0(e, t, r, n) {
      var i = le
        , o = Nn.transition;
      Nn.transition = null;
      try {
          le = 4,
          kc(e, t, r, n)
      } finally {
          le = i,
          Nn.transition = o
      }
  }
  function kc(e, t, r, n) {
      if (Rl) {
          var i = us(e, t, r, n);
          if (i === null)
              lu(e, t, n, Tl, r),
              rd(e, n);
          else if (k0(i, e, t, r, n))
              n.stopPropagation();
          else if (rd(e, n),
          t & 4 && -1 < T0.indexOf(e)) {
              for (; i !== null; ) {
                  var o = yo(i);
                  if (o !== null && mv(o),
                  o = us(e, t, r, n),
                  o === null && lu(e, t, n, Tl, r),
                  o === i)
                      break;
                  i = o
              }
              i !== null && n.stopPropagation()
          } else
              lu(e, t, n, null, r)
      }
  }
  var Tl = null;
  function us(e, t, r, n) {
      if (Tl = null,
      e = Cc(n),
      e = Br(e),
      e !== null)
          if (t = an(e),
          t === null)
              e = null;
          else if (r = t.tag,
          r === 13) {
              if (e = uv(t),
              e !== null)
                  return e;
              e = null
          } else if (r === 3) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                  return t.tag === 3 ? t.stateNode.containerInfo : null;
              e = null
          } else
              t !== e && (e = null);
      return Tl = e,
      null
  }
  function xv(e) {
      switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
          return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
          return 4;
      case "message":
          switch (y0()) {
          case _c:
              return 1;
          case dv:
              return 4;
          case Cl:
          case w0:
              return 16;
          case pv:
              return 536870912;
          default:
              return 16
          }
      default:
          return 16
      }
  }
  var mr = null
    , $c = null
    , cl = null;
  function Ev() {
      if (cl)
          return cl;
      var e, t = $c, r = t.length, n, i = "value"in mr ? mr.value : mr.textContent, o = i.length;
      for (e = 0; e < r && t[e] === i[e]; e++)
          ;
      var l = r - e;
      for (n = 1; n <= l && t[r - n] === i[o - n]; n++)
          ;
      return cl = i.slice(e, 1 < n ? 1 - n : void 0)
  }
  function fl(e) {
      var t = e.keyCode;
      return "charCode"in e ? (e = e.charCode,
      e === 0 && t === 13 && (e = 13)) : e = t,
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
  }
  function Vo() {
      return !0
  }
  function id() {
      return !1
  }
  function vt(e) {
      function t(r, n, i, o, l) {
          this._reactName = r,
          this._targetInst = i,
          this.type = n,
          this.nativeEvent = o,
          this.target = l,
          this.currentTarget = null;
          for (var a in e)
              e.hasOwnProperty(a) && (r = e[a],
              this[a] = r ? r(o) : o[a]);
          return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Vo : id,
          this.isPropagationStopped = id,
          this
      }
      return Ce(t.prototype, {
          preventDefault: function() {
              this.defaultPrevented = !0;
              var r = this.nativeEvent;
              r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1),
              this.isDefaultPrevented = Vo)
          },
          stopPropagation: function() {
              var r = this.nativeEvent;
              r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
              this.isPropagationStopped = Vo)
          },
          persist: function() {},
          isPersistent: Vo
      }),
      t
  }
  var Gn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
          return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0
  }, Oc = vt(Gn), go = Ce({}, Gn, {
      view: 0,
      detail: 0
  }), b0 = vt(go), Xa, Ja, vi, oa = Ce({}, go, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: jc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
          return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
      },
      movementX: function(e) {
          return "movementX"in e ? e.movementX : (e !== vi && (vi && e.type === "mousemove" ? (Xa = e.screenX - vi.screenX,
          Ja = e.screenY - vi.screenY) : Ja = Xa = 0,
          vi = e),
          Xa)
      },
      movementY: function(e) {
          return "movementY"in e ? e.movementY : Ja
      }
  }), od = vt(oa), N0 = Ce({}, oa, {
      dataTransfer: 0
  }), M0 = vt(N0), L0 = Ce({}, go, {
      relatedTarget: 0
  }), Za = vt(L0), I0 = Ce({}, Gn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
  }), D0 = vt(I0), A0 = Ce({}, Gn, {
      clipboardData: function(e) {
          return "clipboardData"in e ? e.clipboardData : window.clipboardData
      }
  }), F0 = vt(A0), z0 = Ce({}, Gn, {
      data: 0
  }), ld = vt(z0), U0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
  }, B0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
  }, H0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
  };
  function V0(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = H0[e]) ? !!t[e] : !1
  }
  function jc() {
      return V0
  }
  var W0 = Ce({}, go, {
      key: function(e) {
          if (e.key) {
              var t = U0[e.key] || e.key;
              if (t !== "Unidentified")
                  return t
          }
          return e.type === "keypress" ? (e = fl(e),
          e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? B0[e.keyCode] || "Unidentified" : ""
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: jc,
      charCode: function(e) {
          return e.type === "keypress" ? fl(e) : 0
      },
      keyCode: function(e) {
          return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
      },
      which: function(e) {
          return e.type === "keypress" ? fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
      }
  })
    , K0 = vt(W0)
    , G0 = Ce({}, oa, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
  })
    , ad = vt(G0)
    , Q0 = Ce({}, go, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: jc
  })
    , Y0 = vt(Q0)
    , q0 = Ce({}, Gn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
  })
    , X0 = vt(q0)
    , J0 = Ce({}, oa, {
      deltaX: function(e) {
          return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
      },
      deltaY: function(e) {
          return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
      },
      deltaZ: 0,
      deltaMode: 0
  })
    , Z0 = vt(J0)
    , e1 = [9, 13, 27, 32]
    , bc = Jt && "CompositionEvent"in window
    , Ii = null;
  Jt && "documentMode"in document && (Ii = document.documentMode);
  var t1 = Jt && "TextEvent"in window && !Ii
    , Pv = Jt && (!bc || Ii && 8 < Ii && 11 >= Ii)
    , ud = " "
    , sd = !1;
  function Cv(e, t) {
      switch (e) {
      case "keyup":
          return e1.indexOf(t.keyCode) !== -1;
      case "keydown":
          return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
          return !0;
      default:
          return !1
      }
  }
  function _v(e) {
      return e = e.detail,
      typeof e == "object" && "data"in e ? e.data : null
  }
  var wn = !1;
  function r1(e, t) {
      switch (e) {
      case "compositionend":
          return _v(t);
      case "keypress":
          return t.which !== 32 ? null : (sd = !0,
          ud);
      case "textInput":
          return e = t.data,
          e === ud && sd ? null : e;
      default:
          return null
      }
  }
  function n1(e, t) {
      if (wn)
          return e === "compositionend" || !bc && Cv(e, t) ? (e = Ev(),
          cl = $c = mr = null,
          wn = !1,
          e) : null;
      switch (e) {
      case "paste":
          return null;
      case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
              if (t.char && 1 < t.char.length)
                  return t.char;
              if (t.which)
                  return String.fromCharCode(t.which)
          }
          return null;
      case "compositionend":
          return Pv && t.locale !== "ko" ? null : t.data;
      default:
          return null
      }
  }
  var i1 = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
  };
  function cd(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!i1[e.type] : t === "textarea"
  }
  function Rv(e, t, r, n) {
      nv(n),
      t = kl(t, "onChange"),
      0 < t.length && (r = new Oc("onChange","change",null,r,n),
      e.push({
          event: r,
          listeners: t
      }))
  }
  var Di = null
    , Ji = null;
  function o1(e) {
      Dv(e, 0)
  }
  function la(e) {
      var t = En(e);
      if (qh(t))
          return e
  }
  function l1(e, t) {
      if (e === "change")
          return t
  }
  var Tv = !1;
  if (Jt) {
      var eu;
      if (Jt) {
          var tu = "oninput"in document;
          if (!tu) {
              var fd = document.createElement("div");
              fd.setAttribute("oninput", "return;"),
              tu = typeof fd.oninput == "function"
          }
          eu = tu
      } else
          eu = !1;
      Tv = eu && (!document.documentMode || 9 < document.documentMode)
  }
  function dd() {
      Di && (Di.detachEvent("onpropertychange", kv),
      Ji = Di = null)
  }
  function kv(e) {
      if (e.propertyName === "value" && la(Ji)) {
          var t = [];
          Rv(t, Ji, e, Cc(e)),
          av(o1, t)
      }
  }
  function a1(e, t, r) {
      e === "focusin" ? (dd(),
      Di = t,
      Ji = r,
      Di.attachEvent("onpropertychange", kv)) : e === "focusout" && dd()
  }
  function u1(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
          return la(Ji)
  }
  function s1(e, t) {
      if (e === "click")
          return la(t)
  }
  function c1(e, t) {
      if (e === "input" || e === "change")
          return la(t)
  }
  function f1(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
  }
  var It = typeof Object.is == "function" ? Object.is : f1;
  function Zi(e, t) {
      if (It(e, t))
          return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
          return !1;
      var r = Object.keys(e)
        , n = Object.keys(t);
      if (r.length !== n.length)
          return !1;
      for (n = 0; n < r.length; n++) {
          var i = r[n];
          if (!Vu.call(t, i) || !It(e[i], t[i]))
              return !1
      }
      return !0
  }
  function pd(e) {
      for (; e && e.firstChild; )
          e = e.firstChild;
      return e
  }
  function hd(e, t) {
      var r = pd(e);
      e = 0;
      for (var n; r; ) {
          if (r.nodeType === 3) {
              if (n = e + r.textContent.length,
              e <= t && n >= t)
                  return {
                      node: r,
                      offset: t - e
                  };
              e = n
          }
          e: {
              for (; r; ) {
                  if (r.nextSibling) {
                      r = r.nextSibling;
                      break e
                  }
                  r = r.parentNode
              }
              r = void 0
          }
          r = pd(r)
      }
  }
  function $v(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $v(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
  }
  function Ov() {
      for (var e = window, t = xl(); t instanceof e.HTMLIFrameElement; ) {
          try {
              var r = typeof t.contentWindow.location.href == "string"
          } catch {
              r = !1
          }
          if (r)
              e = t.contentWindow;
          else
              break;
          t = xl(e.document)
      }
      return t
  }
  function Nc(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
  }
  function d1(e) {
      var t = Ov()
        , r = e.focusedElem
        , n = e.selectionRange;
      if (t !== r && r && r.ownerDocument && $v(r.ownerDocument.documentElement, r)) {
          if (n !== null && Nc(r)) {
              if (t = n.start,
              e = n.end,
              e === void 0 && (e = t),
              "selectionStart"in r)
                  r.selectionStart = t,
                  r.selectionEnd = Math.min(e, r.value.length);
              else if (e = (t = r.ownerDocument || document) && t.defaultView || window,
              e.getSelection) {
                  e = e.getSelection();
                  var i = r.textContent.length
                    , o = Math.min(n.start, i);
                  n = n.end === void 0 ? o : Math.min(n.end, i),
                  !e.extend && o > n && (i = n,
                  n = o,
                  o = i),
                  i = hd(r, o);
                  var l = hd(r, n);
                  i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(),
                  t.setStart(i.node, i.offset),
                  e.removeAllRanges(),
                  o > n ? (e.addRange(t),
                  e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset),
                  e.addRange(t)))
              }
          }
          for (t = [],
          e = r; e = e.parentNode; )
              e.nodeType === 1 && t.push({
                  element: e,
                  left: e.scrollLeft,
                  top: e.scrollTop
              });
          for (typeof r.focus == "function" && r.focus(),
          r = 0; r < t.length; r++)
              e = t[r],
              e.element.scrollLeft = e.left,
              e.element.scrollTop = e.top
      }
  }
  var p1 = Jt && "documentMode"in document && 11 >= document.documentMode
    , Sn = null
    , ss = null
    , Ai = null
    , cs = !1;
  function vd(e, t, r) {
      var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
      cs || Sn == null || Sn !== xl(n) || (n = Sn,
      "selectionStart"in n && Nc(n) ? n = {
          start: n.selectionStart,
          end: n.selectionEnd
      } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(),
      n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset
      }),
      Ai && Zi(Ai, n) || (Ai = n,
      n = kl(ss, "onSelect"),
      0 < n.length && (t = new Oc("onSelect","select",null,t,r),
      e.push({
          event: t,
          listeners: n
      }),
      t.target = Sn)))
  }
  function Wo(e, t) {
      var r = {};
      return r[e.toLowerCase()] = t.toLowerCase(),
      r["Webkit" + e] = "webkit" + t,
      r["Moz" + e] = "moz" + t,
      r
  }
  var xn = {
      animationend: Wo("Animation", "AnimationEnd"),
      animationiteration: Wo("Animation", "AnimationIteration"),
      animationstart: Wo("Animation", "AnimationStart"),
      transitionend: Wo("Transition", "TransitionEnd")
  }
    , ru = {}
    , jv = {};
  Jt && (jv = document.createElement("div").style,
  "AnimationEvent"in window || (delete xn.animationend.animation,
  delete xn.animationiteration.animation,
  delete xn.animationstart.animation),
  "TransitionEvent"in window || delete xn.transitionend.transition);
  function aa(e) {
      if (ru[e])
          return ru[e];
      if (!xn[e])
          return e;
      var t = xn[e], r;
      for (r in t)
          if (t.hasOwnProperty(r) && r in jv)
              return ru[e] = t[r];
      return e
  }
  var bv = aa("animationend")
    , Nv = aa("animationiteration")
    , Mv = aa("animationstart")
    , Lv = aa("transitionend")
    , Iv = new Map
    , md = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function jr(e, t) {
      Iv.set(e, t),
      ln(t, [e])
  }
  for (var nu = 0; nu < md.length; nu++) {
      var iu = md[nu]
        , h1 = iu.toLowerCase()
        , v1 = iu[0].toUpperCase() + iu.slice(1);
      jr(h1, "on" + v1)
  }
  jr(bv, "onAnimationEnd");
  jr(Nv, "onAnimationIteration");
  jr(Mv, "onAnimationStart");
  jr("dblclick", "onDoubleClick");
  jr("focusin", "onFocus");
  jr("focusout", "onBlur");
  jr(Lv, "onTransitionEnd");
  Dn("onMouseEnter", ["mouseout", "mouseover"]);
  Dn("onMouseLeave", ["mouseout", "mouseover"]);
  Dn("onPointerEnter", ["pointerout", "pointerover"]);
  Dn("onPointerLeave", ["pointerout", "pointerover"]);
  ln("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  ln("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  ln("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  ln("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  ln("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Oi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
    , m1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Oi));
  function gd(e, t, r) {
      var n = e.type || "unknown-event";
      e.currentTarget = r,
      h0(n, t, void 0, e),
      e.currentTarget = null
  }
  function Dv(e, t) {
      t = (t & 4) !== 0;
      for (var r = 0; r < e.length; r++) {
          var n = e[r]
            , i = n.event;
          n = n.listeners;
          e: {
              var o = void 0;
              if (t)
                  for (var l = n.length - 1; 0 <= l; l--) {
                      var a = n[l]
                        , u = a.instance
                        , s = a.currentTarget;
                      if (a = a.listener,
                      u !== o && i.isPropagationStopped())
                          break e;
                      gd(i, a, s),
                      o = u
                  }
              else
                  for (l = 0; l < n.length; l++) {
                      if (a = n[l],
                      u = a.instance,
                      s = a.currentTarget,
                      a = a.listener,
                      u !== o && i.isPropagationStopped())
                          break e;
                      gd(i, a, s),
                      o = u
                  }
          }
      }
      if (Pl)
          throw e = os,
          Pl = !1,
          os = null,
          e
  }
  function ce(e, t) {
      var r = t[vs];
      r === void 0 && (r = t[vs] = new Set);
      var n = e + "__bubble";
      r.has(n) || (Av(t, e, 2, !1),
      r.add(n))
  }
  function ou(e, t, r) {
      var n = 0;
      t && (n |= 4),
      Av(r, e, n, t)
  }
  var Ko = "_reactListening" + Math.random().toString(36).slice(2);
  function eo(e) {
      if (!e[Ko]) {
          e[Ko] = !0,
          Wh.forEach(function(r) {
              r !== "selectionchange" && (m1.has(r) || ou(r, !1, e),
              ou(r, !0, e))
          });
          var t = e.nodeType === 9 ? e : e.ownerDocument;
          t === null || t[Ko] || (t[Ko] = !0,
          ou("selectionchange", !1, t))
      }
  }
  function Av(e, t, r, n) {
      switch (xv(t)) {
      case 1:
          var i = O0;
          break;
      case 4:
          i = j0;
          break;
      default:
          i = kc
      }
      r = i.bind(null, t, r, e),
      i = void 0,
      !is || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
      n ? i !== void 0 ? e.addEventListener(t, r, {
          capture: !0,
          passive: i
      }) : e.addEventListener(t, r, !0) : i !== void 0 ? e.addEventListener(t, r, {
          passive: i
      }) : e.addEventListener(t, r, !1)
  }
  function lu(e, t, r, n, i) {
      var o = n;
      if (!(t & 1) && !(t & 2) && n !== null)
          e: for (; ; ) {
              if (n === null)
                  return;
              var l = n.tag;
              if (l === 3 || l === 4) {
                  var a = n.stateNode.containerInfo;
                  if (a === i || a.nodeType === 8 && a.parentNode === i)
                      break;
                  if (l === 4)
                      for (l = n.return; l !== null; ) {
                          var u = l.tag;
                          if ((u === 3 || u === 4) && (u = l.stateNode.containerInfo,
                          u === i || u.nodeType === 8 && u.parentNode === i))
                              return;
                          l = l.return
                      }
                  for (; a !== null; ) {
                      if (l = Br(a),
                      l === null)
                          return;
                      if (u = l.tag,
                      u === 5 || u === 6) {
                          n = o = l;
                          continue e
                      }
                      a = a.parentNode
                  }
              }
              n = n.return
          }
      av(function() {
          var s = o
            , c = Cc(r)
            , f = [];
          e: {
              var d = Iv.get(e);
              if (d !== void 0) {
                  var y = Oc
                    , g = e;
                  switch (e) {
                  case "keypress":
                      if (fl(r) === 0)
                          break e;
                  case "keydown":
                  case "keyup":
                      y = K0;
                      break;
                  case "focusin":
                      g = "focus",
                      y = Za;
                      break;
                  case "focusout":
                      g = "blur",
                      y = Za;
                      break;
                  case "beforeblur":
                  case "afterblur":
                      y = Za;
                      break;
                  case "click":
                      if (r.button === 2)
                          break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                      y = od;
                      break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                      y = M0;
                      break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                      y = Y0;
                      break;
                  case bv:
                  case Nv:
                  case Mv:
                      y = D0;
                      break;
                  case Lv:
                      y = X0;
                      break;
                  case "scroll":
                      y = b0;
                      break;
                  case "wheel":
                      y = Z0;
                      break;
                  case "copy":
                  case "cut":
                  case "paste":
                      y = F0;
                      break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                      y = ad
                  }
                  var m = (t & 4) !== 0
                    , E = !m && e === "scroll"
                    , h = m ? d !== null ? d + "Capture" : null : d;
                  m = [];
                  for (var p = s, v; p !== null; ) {
                      v = p;
                      var C = v.stateNode;
                      if (v.tag === 5 && C !== null && (v = C,
                      h !== null && (C = Qi(p, h),
                      C != null && m.push(to(p, C, v)))),
                      E)
                          break;
                      p = p.return
                  }
                  0 < m.length && (d = new y(d,g,null,r,c),
                  f.push({
                      event: d,
                      listeners: m
                  }))
              }
          }
          if (!(t & 7)) {
              e: {
                  if (d = e === "mouseover" || e === "pointerover",
                  y = e === "mouseout" || e === "pointerout",
                  d && r !== rs && (g = r.relatedTarget || r.fromElement) && (Br(g) || g[Zt]))
                      break e;
                  if ((y || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window,
                  y ? (g = r.relatedTarget || r.toElement,
                  y = s,
                  g = g ? Br(g) : null,
                  g !== null && (E = an(g),
                  g !== E || g.tag !== 5 && g.tag !== 6) && (g = null)) : (y = null,
                  g = s),
                  y !== g)) {
                      if (m = od,
                      C = "onMouseLeave",
                      h = "onMouseEnter",
                      p = "mouse",
                      (e === "pointerout" || e === "pointerover") && (m = ad,
                      C = "onPointerLeave",
                      h = "onPointerEnter",
                      p = "pointer"),
                      E = y == null ? d : En(y),
                      v = g == null ? d : En(g),
                      d = new m(C,p + "leave",y,r,c),
                      d.target = E,
                      d.relatedTarget = v,
                      C = null,
                      Br(c) === s && (m = new m(h,p + "enter",g,r,c),
                      m.target = v,
                      m.relatedTarget = E,
                      C = m),
                      E = C,
                      y && g)
                          t: {
                              for (m = y,
                              h = g,
                              p = 0,
                              v = m; v; v = dn(v))
                                  p++;
                              for (v = 0,
                              C = h; C; C = dn(C))
                                  v++;
                              for (; 0 < p - v; )
                                  m = dn(m),
                                  p--;
                              for (; 0 < v - p; )
                                  h = dn(h),
                                  v--;
                              for (; p--; ) {
                                  if (m === h || h !== null && m === h.alternate)
                                      break t;
                                  m = dn(m),
                                  h = dn(h)
                              }
                              m = null
                          }
                      else
                          m = null;
                      y !== null && yd(f, d, y, m, !1),
                      g !== null && E !== null && yd(f, E, g, m, !0)
                  }
              }
              e: {
                  if (d = s ? En(s) : window,
                  y = d.nodeName && d.nodeName.toLowerCase(),
                  y === "select" || y === "input" && d.type === "file")
                      var k = l1;
                  else if (cd(d))
                      if (Tv)
                          k = c1;
                      else {
                          k = u1;
                          var b = a1
                      }
                  else
                      (y = d.nodeName) && y.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (k = s1);
                  if (k && (k = k(e, s))) {
                      Rv(f, k, r, c);
                      break e
                  }
                  b && b(e, d, s),
                  e === "focusout" && (b = d._wrapperState) && b.controlled && d.type === "number" && Xu(d, "number", d.value)
              }
              switch (b = s ? En(s) : window,
              e) {
              case "focusin":
                  (cd(b) || b.contentEditable === "true") && (Sn = b,
                  ss = s,
                  Ai = null);
                  break;
              case "focusout":
                  Ai = ss = Sn = null;
                  break;
              case "mousedown":
                  cs = !0;
                  break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                  cs = !1,
                  vd(f, r, c);
                  break;
              case "selectionchange":
                  if (p1)
                      break;
              case "keydown":
              case "keyup":
                  vd(f, r, c)
              }
              var S;
              if (bc)
                  e: {
                      switch (e) {
                      case "compositionstart":
                          var O = "onCompositionStart";
                          break e;
                      case "compositionend":
                          O = "onCompositionEnd";
                          break e;
                      case "compositionupdate":
                          O = "onCompositionUpdate";
                          break e
                      }
                      O = void 0
                  }
              else
                  wn ? Cv(e, r) && (O = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (O = "onCompositionStart");
              O && (Pv && r.locale !== "ko" && (wn || O !== "onCompositionStart" ? O === "onCompositionEnd" && wn && (S = Ev()) : (mr = c,
              $c = "value"in mr ? mr.value : mr.textContent,
              wn = !0)),
              b = kl(s, O),
              0 < b.length && (O = new ld(O,e,null,r,c),
              f.push({
                  event: O,
                  listeners: b
              }),
              S ? O.data = S : (S = _v(r),
              S !== null && (O.data = S)))),
              (S = t1 ? r1(e, r) : n1(e, r)) && (s = kl(s, "onBeforeInput"),
              0 < s.length && (c = new ld("onBeforeInput","beforeinput",null,r,c),
              f.push({
                  event: c,
                  listeners: s
              }),
              c.data = S))
          }
          Dv(f, t)
      })
  }
  function to(e, t, r) {
      return {
          instance: e,
          listener: t,
          currentTarget: r
      }
  }
  function kl(e, t) {
      for (var r = t + "Capture", n = []; e !== null; ) {
          var i = e
            , o = i.stateNode;
          i.tag === 5 && o !== null && (i = o,
          o = Qi(e, r),
          o != null && n.unshift(to(e, o, i)),
          o = Qi(e, t),
          o != null && n.push(to(e, o, i))),
          e = e.return
      }
      return n
  }
  function dn(e) {
      if (e === null)
          return null;
      do
          e = e.return;
      while (e && e.tag !== 5);
      return e || null
  }
  function yd(e, t, r, n, i) {
      for (var o = t._reactName, l = []; r !== null && r !== n; ) {
          var a = r
            , u = a.alternate
            , s = a.stateNode;
          if (u !== null && u === n)
              break;
          a.tag === 5 && s !== null && (a = s,
          i ? (u = Qi(r, o),
          u != null && l.unshift(to(r, u, a))) : i || (u = Qi(r, o),
          u != null && l.push(to(r, u, a)))),
          r = r.return
      }
      l.length !== 0 && e.push({
          event: t,
          listeners: l
      })
  }
  var g1 = /\r\n?/g
    , y1 = /\u0000|\uFFFD/g;
  function wd(e) {
      return (typeof e == "string" ? e : "" + e).replace(g1, `
`).replace(y1, "")
  }
  function Go(e, t, r) {
      if (t = wd(t),
      wd(e) !== t && r)
          throw Error(j(425))
  }
  function $l() {}
  var fs = null
    , ds = null;
  function ps(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
  }
  var hs = typeof setTimeout == "function" ? setTimeout : void 0
    , w1 = typeof clearTimeout == "function" ? clearTimeout : void 0
    , Sd = typeof Promise == "function" ? Promise : void 0
    , S1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sd < "u" ? function(e) {
      return Sd.resolve(null).then(e).catch(x1)
  }
  : hs;
  function x1(e) {
      setTimeout(function() {
          throw e
      })
  }
  function au(e, t) {
      var r = t
        , n = 0;
      do {
          var i = r.nextSibling;
          if (e.removeChild(r),
          i && i.nodeType === 8)
              if (r = i.data,
              r === "/$") {
                  if (n === 0) {
                      e.removeChild(i),
                      Xi(t);
                      return
                  }
                  n--
              } else
                  r !== "$" && r !== "$?" && r !== "$!" || n++;
          r = i
      } while (r);
      Xi(t)
  }
  function Er(e) {
      for (; e != null; e = e.nextSibling) {
          var t = e.nodeType;
          if (t === 1 || t === 3)
              break;
          if (t === 8) {
              if (t = e.data,
              t === "$" || t === "$!" || t === "$?")
                  break;
              if (t === "/$")
                  return null
          }
      }
      return e
  }
  function xd(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
          if (e.nodeType === 8) {
              var r = e.data;
              if (r === "$" || r === "$!" || r === "$?") {
                  if (t === 0)
                      return e;
                  t--
              } else
                  r === "/$" && t++
          }
          e = e.previousSibling
      }
      return null
  }
  var Qn = Math.random().toString(36).slice(2)
    , Ut = "__reactFiber$" + Qn
    , ro = "__reactProps$" + Qn
    , Zt = "__reactContainer$" + Qn
    , vs = "__reactEvents$" + Qn
    , E1 = "__reactListeners$" + Qn
    , P1 = "__reactHandles$" + Qn;
  function Br(e) {
      var t = e[Ut];
      if (t)
          return t;
      for (var r = e.parentNode; r; ) {
          if (t = r[Zt] || r[Ut]) {
              if (r = t.alternate,
              t.child !== null || r !== null && r.child !== null)
                  for (e = xd(e); e !== null; ) {
                      if (r = e[Ut])
                          return r;
                      e = xd(e)
                  }
              return t
          }
          e = r,
          r = e.parentNode
      }
      return null
  }
  function yo(e) {
      return e = e[Ut] || e[Zt],
      !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
  }
  function En(e) {
      if (e.tag === 5 || e.tag === 6)
          return e.stateNode;
      throw Error(j(33))
  }
  function ua(e) {
      return e[ro] || null
  }
  var ms = []
    , Pn = -1;
  function br(e) {
      return {
          current: e
      }
  }
  function de(e) {
      0 > Pn || (e.current = ms[Pn],
      ms[Pn] = null,
      Pn--)
  }
  function ue(e, t) {
      Pn++,
      ms[Pn] = e.current,
      e.current = t
  }
  var $r = {}
    , Ye = br($r)
    , lt = br(!1)
    , en = $r;
  function An(e, t) {
      var r = e.type.contextTypes;
      if (!r)
          return $r;
      var n = e.stateNode;
      if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
          return n.__reactInternalMemoizedMaskedChildContext;
      var i = {}, o;
      for (o in r)
          i[o] = t[o];
      return n && (e = e.stateNode,
      e.__reactInternalMemoizedUnmaskedChildContext = t,
      e.__reactInternalMemoizedMaskedChildContext = i),
      i
  }
  function at(e) {
      return e = e.childContextTypes,
      e != null
  }
  function Ol() {
      de(lt),
      de(Ye)
  }
  function Ed(e, t, r) {
      if (Ye.current !== $r)
          throw Error(j(168));
      ue(Ye, t),
      ue(lt, r)
  }
  function Fv(e, t, r) {
      var n = e.stateNode;
      if (t = t.childContextTypes,
      typeof n.getChildContext != "function")
          return r;
      n = n.getChildContext();
      for (var i in n)
          if (!(i in t))
              throw Error(j(108, a0(e) || "Unknown", i));
      return Ce({}, r, n)
  }
  function jl(e) {
      return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || $r,
      en = Ye.current,
      ue(Ye, e),
      ue(lt, lt.current),
      !0
  }
  function Pd(e, t, r) {
      var n = e.stateNode;
      if (!n)
          throw Error(j(169));
      r ? (e = Fv(e, t, en),
      n.__reactInternalMemoizedMergedChildContext = e,
      de(lt),
      de(Ye),
      ue(Ye, e)) : de(lt),
      ue(lt, r)
  }
  var Kt = null
    , sa = !1
    , uu = !1;
  function zv(e) {
      Kt === null ? Kt = [e] : Kt.push(e)
  }
  function C1(e) {
      sa = !0,
      zv(e)
  }
  function Nr() {
      if (!uu && Kt !== null) {
          uu = !0;
          var e = 0
            , t = le;
          try {
              var r = Kt;
              for (le = 1; e < r.length; e++) {
                  var n = r[e];
                  do
                      n = n(!0);
                  while (n !== null)
              }
              Kt = null,
              sa = !1
          } catch (i) {
              throw Kt !== null && (Kt = Kt.slice(e + 1)),
              fv(_c, Nr),
              i
          } finally {
              le = t,
              uu = !1
          }
      }
      return null
  }
  var Cn = []
    , _n = 0
    , bl = null
    , Nl = 0
    , St = []
    , xt = 0
    , tn = null
    , Gt = 1
    , Qt = "";
  function Dr(e, t) {
      Cn[_n++] = Nl,
      Cn[_n++] = bl,
      bl = e,
      Nl = t
  }
  function Uv(e, t, r) {
      St[xt++] = Gt,
      St[xt++] = Qt,
      St[xt++] = tn,
      tn = e;
      var n = Gt;
      e = Qt;
      var i = 32 - Mt(n) - 1;
      n &= ~(1 << i),
      r += 1;
      var o = 32 - Mt(t) + i;
      if (30 < o) {
          var l = i - i % 5;
          o = (n & (1 << l) - 1).toString(32),
          n >>= l,
          i -= l,
          Gt = 1 << 32 - Mt(t) + i | r << i | n,
          Qt = o + e
      } else
          Gt = 1 << o | r << i | n,
          Qt = e
  }
  function Mc(e) {
      e.return !== null && (Dr(e, 1),
      Uv(e, 1, 0))
  }
  function Lc(e) {
      for (; e === bl; )
          bl = Cn[--_n],
          Cn[_n] = null,
          Nl = Cn[--_n],
          Cn[_n] = null;
      for (; e === tn; )
          tn = St[--xt],
          St[xt] = null,
          Qt = St[--xt],
          St[xt] = null,
          Gt = St[--xt],
          St[xt] = null
  }
  var dt = null
    , ft = null
    , ge = !1
    , Nt = null;
  function Bv(e, t) {
      var r = Pt(5, null, null, 0);
      r.elementType = "DELETED",
      r.stateNode = t,
      r.return = e,
      t = e.deletions,
      t === null ? (e.deletions = [r],
      e.flags |= 16) : t.push(r)
  }
  function Cd(e, t) {
      switch (e.tag) {
      case 5:
          var r = e.type;
          return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
          t !== null ? (e.stateNode = t,
          dt = e,
          ft = Er(t.firstChild),
          !0) : !1;
      case 6:
          return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
          t !== null ? (e.stateNode = t,
          dt = e,
          ft = null,
          !0) : !1;
      case 13:
          return t = t.nodeType !== 8 ? null : t,
          t !== null ? (r = tn !== null ? {
              id: Gt,
              overflow: Qt
          } : null,
          e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824
          },
          r = Pt(18, null, null, 0),
          r.stateNode = t,
          r.return = e,
          e.child = r,
          dt = e,
          ft = null,
          !0) : !1;
      default:
          return !1
      }
  }
  function gs(e) {
      return (e.mode & 1) !== 0 && (e.flags & 128) === 0
  }
  function ys(e) {
      if (ge) {
          var t = ft;
          if (t) {
              var r = t;
              if (!Cd(e, t)) {
                  if (gs(e))
                      throw Error(j(418));
                  t = Er(r.nextSibling);
                  var n = dt;
                  t && Cd(e, t) ? Bv(n, r) : (e.flags = e.flags & -4097 | 2,
                  ge = !1,
                  dt = e)
              }
          } else {
              if (gs(e))
                  throw Error(j(418));
              e.flags = e.flags & -4097 | 2,
              ge = !1,
              dt = e
          }
      }
  }
  function _d(e) {
      for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
          e = e.return;
      dt = e
  }
  function Qo(e) {
      if (e !== dt)
          return !1;
      if (!ge)
          return _d(e),
          ge = !0,
          !1;
      var t;
      if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
      t = t !== "head" && t !== "body" && !ps(e.type, e.memoizedProps)),
      t && (t = ft)) {
          if (gs(e))
              throw Hv(),
              Error(j(418));
          for (; t; )
              Bv(e, t),
              t = Er(t.nextSibling)
      }
      if (_d(e),
      e.tag === 13) {
          if (e = e.memoizedState,
          e = e !== null ? e.dehydrated : null,
          !e)
              throw Error(j(317));
          e: {
              for (e = e.nextSibling,
              t = 0; e; ) {
                  if (e.nodeType === 8) {
                      var r = e.data;
                      if (r === "/$") {
                          if (t === 0) {
                              ft = Er(e.nextSibling);
                              break e
                          }
                          t--
                      } else
                          r !== "$" && r !== "$!" && r !== "$?" || t++
                  }
                  e = e.nextSibling
              }
              ft = null
          }
      } else
          ft = dt ? Er(e.stateNode.nextSibling) : null;
      return !0
  }
  function Hv() {
      for (var e = ft; e; )
          e = Er(e.nextSibling)
  }
  function Fn() {
      ft = dt = null,
      ge = !1
  }
  function Ic(e) {
      Nt === null ? Nt = [e] : Nt.push(e)
  }
  var _1 = rr.ReactCurrentBatchConfig;
  function mi(e, t, r) {
      if (e = r.ref,
      e !== null && typeof e != "function" && typeof e != "object") {
          if (r._owner) {
              if (r = r._owner,
              r) {
                  if (r.tag !== 1)
                      throw Error(j(309));
                  var n = r.stateNode
              }
              if (!n)
                  throw Error(j(147, e));
              var i = n
                , o = "" + e;
              return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(l) {
                  var a = i.refs;
                  l === null ? delete a[o] : a[o] = l
              }
              ,
              t._stringRef = o,
              t)
          }
          if (typeof e != "string")
              throw Error(j(284));
          if (!r._owner)
              throw Error(j(290, e))
      }
      return e
  }
  function Yo(e, t) {
      throw e = Object.prototype.toString.call(t),
      Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
  }
  function Rd(e) {
      var t = e._init;
      return t(e._payload)
  }
  function Vv(e) {
      function t(h, p) {
          if (e) {
              var v = h.deletions;
              v === null ? (h.deletions = [p],
              h.flags |= 16) : v.push(p)
          }
      }
      function r(h, p) {
          if (!e)
              return null;
          for (; p !== null; )
              t(h, p),
              p = p.sibling;
          return null
      }
      function n(h, p) {
          for (h = new Map; p !== null; )
              p.key !== null ? h.set(p.key, p) : h.set(p.index, p),
              p = p.sibling;
          return h
      }
      function i(h, p) {
          return h = Rr(h, p),
          h.index = 0,
          h.sibling = null,
          h
      }
      function o(h, p, v) {
          return h.index = v,
          e ? (v = h.alternate,
          v !== null ? (v = v.index,
          v < p ? (h.flags |= 2,
          p) : v) : (h.flags |= 2,
          p)) : (h.flags |= 1048576,
          p)
      }
      function l(h) {
          return e && h.alternate === null && (h.flags |= 2),
          h
      }
      function a(h, p, v, C) {
          return p === null || p.tag !== 6 ? (p = vu(v, h.mode, C),
          p.return = h,
          p) : (p = i(p, v),
          p.return = h,
          p)
      }
      function u(h, p, v, C) {
          var k = v.type;
          return k === yn ? c(h, p, v.props.children, C, v.key) : p !== null && (p.elementType === k || typeof k == "object" && k !== null && k.$$typeof === fr && Rd(k) === p.type) ? (C = i(p, v.props),
          C.ref = mi(h, p, v),
          C.return = h,
          C) : (C = yl(v.type, v.key, v.props, null, h.mode, C),
          C.ref = mi(h, p, v),
          C.return = h,
          C)
      }
      function s(h, p, v, C) {
          return p === null || p.tag !== 4 || p.stateNode.containerInfo !== v.containerInfo || p.stateNode.implementation !== v.implementation ? (p = mu(v, h.mode, C),
          p.return = h,
          p) : (p = i(p, v.children || []),
          p.return = h,
          p)
      }
      function c(h, p, v, C, k) {
          return p === null || p.tag !== 7 ? (p = qr(v, h.mode, C, k),
          p.return = h,
          p) : (p = i(p, v),
          p.return = h,
          p)
      }
      function f(h, p, v) {
          if (typeof p == "string" && p !== "" || typeof p == "number")
              return p = vu("" + p, h.mode, v),
              p.return = h,
              p;
          if (typeof p == "object" && p !== null) {
              switch (p.$$typeof) {
              case Ao:
                  return v = yl(p.type, p.key, p.props, null, h.mode, v),
                  v.ref = mi(h, null, p),
                  v.return = h,
                  v;
              case gn:
                  return p = mu(p, h.mode, v),
                  p.return = h,
                  p;
              case fr:
                  var C = p._init;
                  return f(h, C(p._payload), v)
              }
              if (ki(p) || fi(p))
                  return p = qr(p, h.mode, v, null),
                  p.return = h,
                  p;
              Yo(h, p)
          }
          return null
      }
      function d(h, p, v, C) {
          var k = p !== null ? p.key : null;
          if (typeof v == "string" && v !== "" || typeof v == "number")
              return k !== null ? null : a(h, p, "" + v, C);
          if (typeof v == "object" && v !== null) {
              switch (v.$$typeof) {
              case Ao:
                  return v.key === k ? u(h, p, v, C) : null;
              case gn:
                  return v.key === k ? s(h, p, v, C) : null;
              case fr:
                  return k = v._init,
                  d(h, p, k(v._payload), C)
              }
              if (ki(v) || fi(v))
                  return k !== null ? null : c(h, p, v, C, null);
              Yo(h, v)
          }
          return null
      }
      function y(h, p, v, C, k) {
          if (typeof C == "string" && C !== "" || typeof C == "number")
              return h = h.get(v) || null,
              a(p, h, "" + C, k);
          if (typeof C == "object" && C !== null) {
              switch (C.$$typeof) {
              case Ao:
                  return h = h.get(C.key === null ? v : C.key) || null,
                  u(p, h, C, k);
              case gn:
                  return h = h.get(C.key === null ? v : C.key) || null,
                  s(p, h, C, k);
              case fr:
                  var b = C._init;
                  return y(h, p, v, b(C._payload), k)
              }
              if (ki(C) || fi(C))
                  return h = h.get(v) || null,
                  c(p, h, C, k, null);
              Yo(p, C)
          }
          return null
      }
      function g(h, p, v, C) {
          for (var k = null, b = null, S = p, O = p = 0, L = null; S !== null && O < v.length; O++) {
              S.index > O ? (L = S,
              S = null) : L = S.sibling;
              var M = d(h, S, v[O], C);
              if (M === null) {
                  S === null && (S = L);
                  break
              }
              e && S && M.alternate === null && t(h, S),
              p = o(M, p, O),
              b === null ? k = M : b.sibling = M,
              b = M,
              S = L
          }
          if (O === v.length)
              return r(h, S),
              ge && Dr(h, O),
              k;
          if (S === null) {
              for (; O < v.length; O++)
                  S = f(h, v[O], C),
                  S !== null && (p = o(S, p, O),
                  b === null ? k = S : b.sibling = S,
                  b = S);
              return ge && Dr(h, O),
              k
          }
          for (S = n(h, S); O < v.length; O++)
              L = y(S, h, O, v[O], C),
              L !== null && (e && L.alternate !== null && S.delete(L.key === null ? O : L.key),
              p = o(L, p, O),
              b === null ? k = L : b.sibling = L,
              b = L);
          return e && S.forEach(function(V) {
              return t(h, V)
          }),
          ge && Dr(h, O),
          k
      }
      function m(h, p, v, C) {
          var k = fi(v);
          if (typeof k != "function")
              throw Error(j(150));
          if (v = k.call(v),
          v == null)
              throw Error(j(151));
          for (var b = k = null, S = p, O = p = 0, L = null, M = v.next(); S !== null && !M.done; O++,
          M = v.next()) {
              S.index > O ? (L = S,
              S = null) : L = S.sibling;
              var V = d(h, S, M.value, C);
              if (V === null) {
                  S === null && (S = L);
                  break
              }
              e && S && V.alternate === null && t(h, S),
              p = o(V, p, O),
              b === null ? k = V : b.sibling = V,
              b = V,
              S = L
          }
          if (M.done)
              return r(h, S),
              ge && Dr(h, O),
              k;
          if (S === null) {
              for (; !M.done; O++,
              M = v.next())
                  M = f(h, M.value, C),
                  M !== null && (p = o(M, p, O),
                  b === null ? k = M : b.sibling = M,
                  b = M);
              return ge && Dr(h, O),
              k
          }
          for (S = n(h, S); !M.done; O++,
          M = v.next())
              M = y(S, h, O, M.value, C),
              M !== null && (e && M.alternate !== null && S.delete(M.key === null ? O : M.key),
              p = o(M, p, O),
              b === null ? k = M : b.sibling = M,
              b = M);
          return e && S.forEach(function(ie) {
              return t(h, ie)
          }),
          ge && Dr(h, O),
          k
      }
      function E(h, p, v, C) {
          if (typeof v == "object" && v !== null && v.type === yn && v.key === null && (v = v.props.children),
          typeof v == "object" && v !== null) {
              switch (v.$$typeof) {
              case Ao:
                  e: {
                      for (var k = v.key, b = p; b !== null; ) {
                          if (b.key === k) {
                              if (k = v.type,
                              k === yn) {
                                  if (b.tag === 7) {
                                      r(h, b.sibling),
                                      p = i(b, v.props.children),
                                      p.return = h,
                                      h = p;
                                      break e
                                  }
                              } else if (b.elementType === k || typeof k == "object" && k !== null && k.$$typeof === fr && Rd(k) === b.type) {
                                  r(h, b.sibling),
                                  p = i(b, v.props),
                                  p.ref = mi(h, b, v),
                                  p.return = h,
                                  h = p;
                                  break e
                              }
                              r(h, b);
                              break
                          } else
                              t(h, b);
                          b = b.sibling
                      }
                      v.type === yn ? (p = qr(v.props.children, h.mode, C, v.key),
                      p.return = h,
                      h = p) : (C = yl(v.type, v.key, v.props, null, h.mode, C),
                      C.ref = mi(h, p, v),
                      C.return = h,
                      h = C)
                  }
                  return l(h);
              case gn:
                  e: {
                      for (b = v.key; p !== null; ) {
                          if (p.key === b)
                              if (p.tag === 4 && p.stateNode.containerInfo === v.containerInfo && p.stateNode.implementation === v.implementation) {
                                  r(h, p.sibling),
                                  p = i(p, v.children || []),
                                  p.return = h,
                                  h = p;
                                  break e
                              } else {
                                  r(h, p);
                                  break
                              }
                          else
                              t(h, p);
                          p = p.sibling
                      }
                      p = mu(v, h.mode, C),
                      p.return = h,
                      h = p
                  }
                  return l(h);
              case fr:
                  return b = v._init,
                  E(h, p, b(v._payload), C)
              }
              if (ki(v))
                  return g(h, p, v, C);
              if (fi(v))
                  return m(h, p, v, C);
              Yo(h, v)
          }
          return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
          p !== null && p.tag === 6 ? (r(h, p.sibling),
          p = i(p, v),
          p.return = h,
          h = p) : (r(h, p),
          p = vu(v, h.mode, C),
          p.return = h,
          h = p),
          l(h)) : r(h, p)
      }
      return E
  }
  var zn = Vv(!0)
    , Wv = Vv(!1)
    , Ml = br(null)
    , Ll = null
    , Rn = null
    , Dc = null;
  function Ac() {
      Dc = Rn = Ll = null
  }
  function Fc(e) {
      var t = Ml.current;
      de(Ml),
      e._currentValue = t
  }
  function ws(e, t, r) {
      for (; e !== null; ) {
          var n = e.alternate;
          if ((e.childLanes & t) !== t ? (e.childLanes |= t,
          n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
          e === r)
              break;
          e = e.return
      }
  }
  function Mn(e, t) {
      Ll = e,
      Dc = Rn = null,
      e = e.dependencies,
      e !== null && e.firstContext !== null && (e.lanes & t && (ot = !0),
      e.firstContext = null)
  }
  function _t(e) {
      var t = e._currentValue;
      if (Dc !== e)
          if (e = {
              context: e,
              memoizedValue: t,
              next: null
          },
          Rn === null) {
              if (Ll === null)
                  throw Error(j(308));
              Rn = e,
              Ll.dependencies = {
                  lanes: 0,
                  firstContext: e
              }
          } else
              Rn = Rn.next = e;
      return t
  }
  var Hr = null;
  function zc(e) {
      Hr === null ? Hr = [e] : Hr.push(e)
  }
  function Kv(e, t, r, n) {
      var i = t.interleaved;
      return i === null ? (r.next = r,
      zc(t)) : (r.next = i.next,
      i.next = r),
      t.interleaved = r,
      er(e, n)
  }
  function er(e, t) {
      e.lanes |= t;
      var r = e.alternate;
      for (r !== null && (r.lanes |= t),
      r = e,
      e = e.return; e !== null; )
          e.childLanes |= t,
          r = e.alternate,
          r !== null && (r.childLanes |= t),
          r = e,
          e = e.return;
      return r.tag === 3 ? r.stateNode : null
  }
  var dr = !1;
  function Uc(e) {
      e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: {
              pending: null,
              interleaved: null,
              lanes: 0
          },
          effects: null
      }
  }
  function Gv(e, t) {
      e = e.updateQueue,
      t.updateQueue === e && (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects
      })
  }
  function Yt(e, t) {
      return {
          eventTime: e,
          lane: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null
      }
  }
  function Pr(e, t, r) {
      var n = e.updateQueue;
      if (n === null)
          return null;
      if (n = n.shared,
      re & 2) {
          var i = n.pending;
          return i === null ? t.next = t : (t.next = i.next,
          i.next = t),
          n.pending = t,
          er(e, r)
      }
      return i = n.interleaved,
      i === null ? (t.next = t,
      zc(n)) : (t.next = i.next,
      i.next = t),
      n.interleaved = t,
      er(e, r)
  }
  function dl(e, t, r) {
      if (t = t.updateQueue,
      t !== null && (t = t.shared,
      (r & 4194240) !== 0)) {
          var n = t.lanes;
          n &= e.pendingLanes,
          r |= n,
          t.lanes = r,
          Rc(e, r)
      }
  }
  function Td(e, t) {
      var r = e.updateQueue
        , n = e.alternate;
      if (n !== null && (n = n.updateQueue,
      r === n)) {
          var i = null
            , o = null;
          if (r = r.firstBaseUpdate,
          r !== null) {
              do {
                  var l = {
                      eventTime: r.eventTime,
                      lane: r.lane,
                      tag: r.tag,
                      payload: r.payload,
                      callback: r.callback,
                      next: null
                  };
                  o === null ? i = o = l : o = o.next = l,
                  r = r.next
              } while (r !== null);
              o === null ? i = o = t : o = o.next = t
          } else
              i = o = t;
          r = {
              baseState: n.baseState,
              firstBaseUpdate: i,
              lastBaseUpdate: o,
              shared: n.shared,
              effects: n.effects
          },
          e.updateQueue = r;
          return
      }
      e = r.lastBaseUpdate,
      e === null ? r.firstBaseUpdate = t : e.next = t,
      r.lastBaseUpdate = t
  }
  function Il(e, t, r, n) {
      var i = e.updateQueue;
      dr = !1;
      var o = i.firstBaseUpdate
        , l = i.lastBaseUpdate
        , a = i.shared.pending;
      if (a !== null) {
          i.shared.pending = null;
          var u = a
            , s = u.next;
          u.next = null,
          l === null ? o = s : l.next = s,
          l = u;
          var c = e.alternate;
          c !== null && (c = c.updateQueue,
          a = c.lastBaseUpdate,
          a !== l && (a === null ? c.firstBaseUpdate = s : a.next = s,
          c.lastBaseUpdate = u))
      }
      if (o !== null) {
          var f = i.baseState;
          l = 0,
          c = s = u = null,
          a = o;
          do {
              var d = a.lane
                , y = a.eventTime;
              if ((n & d) === d) {
                  c !== null && (c = c.next = {
                      eventTime: y,
                      lane: 0,
                      tag: a.tag,
                      payload: a.payload,
                      callback: a.callback,
                      next: null
                  });
                  e: {
                      var g = e
                        , m = a;
                      switch (d = t,
                      y = r,
                      m.tag) {
                      case 1:
                          if (g = m.payload,
                          typeof g == "function") {
                              f = g.call(y, f, d);
                              break e
                          }
                          f = g;
                          break e;
                      case 3:
                          g.flags = g.flags & -65537 | 128;
                      case 0:
                          if (g = m.payload,
                          d = typeof g == "function" ? g.call(y, f, d) : g,
                          d == null)
                              break e;
                          f = Ce({}, f, d);
                          break e;
                      case 2:
                          dr = !0
                      }
                  }
                  a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                  d = i.effects,
                  d === null ? i.effects = [a] : d.push(a))
              } else
                  y = {
                      eventTime: y,
                      lane: d,
                      tag: a.tag,
                      payload: a.payload,
                      callback: a.callback,
                      next: null
                  },
                  c === null ? (s = c = y,
                  u = f) : c = c.next = y,
                  l |= d;
              if (a = a.next,
              a === null) {
                  if (a = i.shared.pending,
                  a === null)
                      break;
                  d = a,
                  a = d.next,
                  d.next = null,
                  i.lastBaseUpdate = d,
                  i.shared.pending = null
              }
          } while (!0);
          if (c === null && (u = f),
          i.baseState = u,
          i.firstBaseUpdate = s,
          i.lastBaseUpdate = c,
          t = i.shared.interleaved,
          t !== null) {
              i = t;
              do
                  l |= i.lane,
                  i = i.next;
              while (i !== t)
          } else
              o === null && (i.shared.lanes = 0);
          nn |= l,
          e.lanes = l,
          e.memoizedState = f
      }
  }
  function kd(e, t, r) {
      if (e = t.effects,
      t.effects = null,
      e !== null)
          for (t = 0; t < e.length; t++) {
              var n = e[t]
                , i = n.callback;
              if (i !== null) {
                  if (n.callback = null,
                  n = r,
                  typeof i != "function")
                      throw Error(j(191, i));
                  i.call(n)
              }
          }
  }
  var wo = {}
    , Ht = br(wo)
    , no = br(wo)
    , io = br(wo);
  function Vr(e) {
      if (e === wo)
          throw Error(j(174));
      return e
  }
  function Bc(e, t) {
      switch (ue(io, t),
      ue(no, e),
      ue(Ht, wo),
      e = t.nodeType,
      e) {
      case 9:
      case 11:
          t = (t = t.documentElement) ? t.namespaceURI : Zu(null, "");
          break;
      default:
          e = e === 8 ? t.parentNode : t,
          t = e.namespaceURI || null,
          e = e.tagName,
          t = Zu(t, e)
      }
      de(Ht),
      ue(Ht, t)
  }
  function Un() {
      de(Ht),
      de(no),
      de(io)
  }
  function Qv(e) {
      Vr(io.current);
      var t = Vr(Ht.current)
        , r = Zu(t, e.type);
      t !== r && (ue(no, e),
      ue(Ht, r))
  }
  function Hc(e) {
      no.current === e && (de(Ht),
      de(no))
  }
  var xe = br(0);
  function Dl(e) {
      for (var t = e; t !== null; ) {
          if (t.tag === 13) {
              var r = t.memoizedState;
              if (r !== null && (r = r.dehydrated,
              r === null || r.data === "$?" || r.data === "$!"))
                  return t
          } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
              if (t.flags & 128)
                  return t
          } else if (t.child !== null) {
              t.child.return = t,
              t = t.child;
              continue
          }
          if (t === e)
              break;
          for (; t.sibling === null; ) {
              if (t.return === null || t.return === e)
                  return null;
              t = t.return
          }
          t.sibling.return = t.return,
          t = t.sibling
      }
      return null
  }
  var su = [];
  function Vc() {
      for (var e = 0; e < su.length; e++)
          su[e]._workInProgressVersionPrimary = null;
      su.length = 0
  }
  var pl = rr.ReactCurrentDispatcher
    , cu = rr.ReactCurrentBatchConfig
    , rn = 0
    , Pe = null
    , $e = null
    , Me = null
    , Al = !1
    , Fi = !1
    , oo = 0
    , R1 = 0;
  function Ve() {
      throw Error(j(321))
  }
  function Wc(e, t) {
      if (t === null)
          return !1;
      for (var r = 0; r < t.length && r < e.length; r++)
          if (!It(e[r], t[r]))
              return !1;
      return !0
  }
  function Kc(e, t, r, n, i, o) {
      if (rn = o,
      Pe = t,
      t.memoizedState = null,
      t.updateQueue = null,
      t.lanes = 0,
      pl.current = e === null || e.memoizedState === null ? O1 : j1,
      e = r(n, i),
      Fi) {
          o = 0;
          do {
              if (Fi = !1,
              oo = 0,
              25 <= o)
                  throw Error(j(301));
              o += 1,
              Me = $e = null,
              t.updateQueue = null,
              pl.current = b1,
              e = r(n, i)
          } while (Fi)
      }
      if (pl.current = Fl,
      t = $e !== null && $e.next !== null,
      rn = 0,
      Me = $e = Pe = null,
      Al = !1,
      t)
          throw Error(j(300));
      return e
  }
  function Gc() {
      var e = oo !== 0;
      return oo = 0,
      e
  }
  function zt() {
      var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
      };
      return Me === null ? Pe.memoizedState = Me = e : Me = Me.next = e,
      Me
  }
  function Rt() {
      if ($e === null) {
          var e = Pe.alternate;
          e = e !== null ? e.memoizedState : null
      } else
          e = $e.next;
      var t = Me === null ? Pe.memoizedState : Me.next;
      if (t !== null)
          Me = t,
          $e = e;
      else {
          if (e === null)
              throw Error(j(310));
          $e = e,
          e = {
              memoizedState: $e.memoizedState,
              baseState: $e.baseState,
              baseQueue: $e.baseQueue,
              queue: $e.queue,
              next: null
          },
          Me === null ? Pe.memoizedState = Me = e : Me = Me.next = e
      }
      return Me
  }
  function lo(e, t) {
      return typeof t == "function" ? t(e) : t
  }
  function fu(e) {
      var t = Rt()
        , r = t.queue;
      if (r === null)
          throw Error(j(311));
      r.lastRenderedReducer = e;
      var n = $e
        , i = n.baseQueue
        , o = r.pending;
      if (o !== null) {
          if (i !== null) {
              var l = i.next;
              i.next = o.next,
              o.next = l
          }
          n.baseQueue = i = o,
          r.pending = null
      }
      if (i !== null) {
          o = i.next,
          n = n.baseState;
          var a = l = null
            , u = null
            , s = o;
          do {
              var c = s.lane;
              if ((rn & c) === c)
                  u !== null && (u = u.next = {
                      lane: 0,
                      action: s.action,
                      hasEagerState: s.hasEagerState,
                      eagerState: s.eagerState,
                      next: null
                  }),
                  n = s.hasEagerState ? s.eagerState : e(n, s.action);
              else {
                  var f = {
                      lane: c,
                      action: s.action,
                      hasEagerState: s.hasEagerState,
                      eagerState: s.eagerState,
                      next: null
                  };
                  u === null ? (a = u = f,
                  l = n) : u = u.next = f,
                  Pe.lanes |= c,
                  nn |= c
              }
              s = s.next
          } while (s !== null && s !== o);
          u === null ? l = n : u.next = a,
          It(n, t.memoizedState) || (ot = !0),
          t.memoizedState = n,
          t.baseState = l,
          t.baseQueue = u,
          r.lastRenderedState = n
      }
      if (e = r.interleaved,
      e !== null) {
          i = e;
          do
              o = i.lane,
              Pe.lanes |= o,
              nn |= o,
              i = i.next;
          while (i !== e)
      } else
          i === null && (r.lanes = 0);
      return [t.memoizedState, r.dispatch]
  }
  function du(e) {
      var t = Rt()
        , r = t.queue;
      if (r === null)
          throw Error(j(311));
      r.lastRenderedReducer = e;
      var n = r.dispatch
        , i = r.pending
        , o = t.memoizedState;
      if (i !== null) {
          r.pending = null;
          var l = i = i.next;
          do
              o = e(o, l.action),
              l = l.next;
          while (l !== i);
          It(o, t.memoizedState) || (ot = !0),
          t.memoizedState = o,
          t.baseQueue === null && (t.baseState = o),
          r.lastRenderedState = o
      }
      return [o, n]
  }
  function Yv() {}
  function qv(e, t) {
      var r = Pe
        , n = Rt()
        , i = t()
        , o = !It(n.memoizedState, i);
      if (o && (n.memoizedState = i,
      ot = !0),
      n = n.queue,
      Qc(Zv.bind(null, r, n, e), [e]),
      n.getSnapshot !== t || o || Me !== null && Me.memoizedState.tag & 1) {
          if (r.flags |= 2048,
          ao(9, Jv.bind(null, r, n, i, t), void 0, null),
          Le === null)
              throw Error(j(349));
          rn & 30 || Xv(r, t, i)
      }
      return i
  }
  function Xv(e, t, r) {
      e.flags |= 16384,
      e = {
          getSnapshot: t,
          value: r
      },
      t = Pe.updateQueue,
      t === null ? (t = {
          lastEffect: null,
          stores: null
      },
      Pe.updateQueue = t,
      t.stores = [e]) : (r = t.stores,
      r === null ? t.stores = [e] : r.push(e))
  }
  function Jv(e, t, r, n) {
      t.value = r,
      t.getSnapshot = n,
      em(t) && tm(e)
  }
  function Zv(e, t, r) {
      return r(function() {
          em(t) && tm(e)
      })
  }
  function em(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
          var r = t();
          return !It(e, r)
      } catch {
          return !0
      }
  }
  function tm(e) {
      var t = er(e, 1);
      t !== null && Lt(t, e, 1, -1)
  }
  function $d(e) {
      var t = zt();
      return typeof e == "function" && (e = e()),
      t.memoizedState = t.baseState = e,
      e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: lo,
          lastRenderedState: e
      },
      t.queue = e,
      e = e.dispatch = $1.bind(null, Pe, e),
      [t.memoizedState, e]
  }
  function ao(e, t, r, n) {
      return e = {
          tag: e,
          create: t,
          destroy: r,
          deps: n,
          next: null
      },
      t = Pe.updateQueue,
      t === null ? (t = {
          lastEffect: null,
          stores: null
      },
      Pe.updateQueue = t,
      t.lastEffect = e.next = e) : (r = t.lastEffect,
      r === null ? t.lastEffect = e.next = e : (n = r.next,
      r.next = e,
      e.next = n,
      t.lastEffect = e)),
      e
  }
  function rm() {
      return Rt().memoizedState
  }
  function hl(e, t, r, n) {
      var i = zt();
      Pe.flags |= e,
      i.memoizedState = ao(1 | t, r, void 0, n === void 0 ? null : n)
  }
  function ca(e, t, r, n) {
      var i = Rt();
      n = n === void 0 ? null : n;
      var o = void 0;
      if ($e !== null) {
          var l = $e.memoizedState;
          if (o = l.destroy,
          n !== null && Wc(n, l.deps)) {
              i.memoizedState = ao(t, r, o, n);
              return
          }
      }
      Pe.flags |= e,
      i.memoizedState = ao(1 | t, r, o, n)
  }
  function Od(e, t) {
      return hl(8390656, 8, e, t)
  }
  function Qc(e, t) {
      return ca(2048, 8, e, t)
  }
  function nm(e, t) {
      return ca(4, 2, e, t)
  }
  function im(e, t) {
      return ca(4, 4, e, t)
  }
  function om(e, t) {
      if (typeof t == "function")
          return e = e(),
          t(e),
          function() {
              t(null)
          }
          ;
      if (t != null)
          return e = e(),
          t.current = e,
          function() {
              t.current = null
          }
  }
  function lm(e, t, r) {
      return r = r != null ? r.concat([e]) : null,
      ca(4, 4, om.bind(null, t, e), r)
  }
  function Yc() {}
  function am(e, t) {
      var r = Rt();
      t = t === void 0 ? null : t;
      var n = r.memoizedState;
      return n !== null && t !== null && Wc(t, n[1]) ? n[0] : (r.memoizedState = [e, t],
      e)
  }
  function um(e, t) {
      var r = Rt();
      t = t === void 0 ? null : t;
      var n = r.memoizedState;
      return n !== null && t !== null && Wc(t, n[1]) ? n[0] : (e = e(),
      r.memoizedState = [e, t],
      e)
  }
  function sm(e, t, r) {
      return rn & 21 ? (It(r, t) || (r = hv(),
      Pe.lanes |= r,
      nn |= r,
      e.baseState = !0),
      t) : (e.baseState && (e.baseState = !1,
      ot = !0),
      e.memoizedState = r)
  }
  function T1(e, t) {
      var r = le;
      le = r !== 0 && 4 > r ? r : 4,
      e(!0);
      var n = cu.transition;
      cu.transition = {};
      try {
          e(!1),
          t()
      } finally {
          le = r,
          cu.transition = n
      }
  }
  function cm() {
      return Rt().memoizedState
  }
  function k1(e, t, r) {
      var n = _r(e);
      if (r = {
          lane: n,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null
      },
      fm(e))
          dm(t, r);
      else if (r = Kv(e, t, r, n),
      r !== null) {
          var i = Je();
          Lt(r, e, n, i),
          pm(r, t, n)
      }
  }
  function $1(e, t, r) {
      var n = _r(e)
        , i = {
          lane: n,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null
      };
      if (fm(e))
          dm(t, i);
      else {
          var o = e.alternate;
          if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
          o !== null))
              try {
                  var l = t.lastRenderedState
                    , a = o(l, r);
                  if (i.hasEagerState = !0,
                  i.eagerState = a,
                  It(a, l)) {
                      var u = t.interleaved;
                      u === null ? (i.next = i,
                      zc(t)) : (i.next = u.next,
                      u.next = i),
                      t.interleaved = i;
                      return
                  }
              } catch {} finally {}
          r = Kv(e, t, i, n),
          r !== null && (i = Je(),
          Lt(r, e, n, i),
          pm(r, t, n))
      }
  }
  function fm(e) {
      var t = e.alternate;
      return e === Pe || t !== null && t === Pe
  }
  function dm(e, t) {
      Fi = Al = !0;
      var r = e.pending;
      r === null ? t.next = t : (t.next = r.next,
      r.next = t),
      e.pending = t
  }
  function pm(e, t, r) {
      if (r & 4194240) {
          var n = t.lanes;
          n &= e.pendingLanes,
          r |= n,
          t.lanes = r,
          Rc(e, r)
      }
  }
  var Fl = {
      readContext: _t,
      useCallback: Ve,
      useContext: Ve,
      useEffect: Ve,
      useImperativeHandle: Ve,
      useInsertionEffect: Ve,
      useLayoutEffect: Ve,
      useMemo: Ve,
      useReducer: Ve,
      useRef: Ve,
      useState: Ve,
      useDebugValue: Ve,
      useDeferredValue: Ve,
      useTransition: Ve,
      useMutableSource: Ve,
      useSyncExternalStore: Ve,
      useId: Ve,
      unstable_isNewReconciler: !1
  }
    , O1 = {
      readContext: _t,
      useCallback: function(e, t) {
          return zt().memoizedState = [e, t === void 0 ? null : t],
          e
      },
      useContext: _t,
      useEffect: Od,
      useImperativeHandle: function(e, t, r) {
          return r = r != null ? r.concat([e]) : null,
          hl(4194308, 4, om.bind(null, t, e), r)
      },
      useLayoutEffect: function(e, t) {
          return hl(4194308, 4, e, t)
      },
      useInsertionEffect: function(e, t) {
          return hl(4, 2, e, t)
      },
      useMemo: function(e, t) {
          var r = zt();
          return t = t === void 0 ? null : t,
          e = e(),
          r.memoizedState = [e, t],
          e
      },
      useReducer: function(e, t, r) {
          var n = zt();
          return t = r !== void 0 ? r(t) : t,
          n.memoizedState = n.baseState = t,
          e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t
          },
          n.queue = e,
          e = e.dispatch = k1.bind(null, Pe, e),
          [n.memoizedState, e]
      },
      useRef: function(e) {
          var t = zt();
          return e = {
              current: e
          },
          t.memoizedState = e
      },
      useState: $d,
      useDebugValue: Yc,
      useDeferredValue: function(e) {
          return zt().memoizedState = e
      },
      useTransition: function() {
          var e = $d(!1)
            , t = e[0];
          return e = T1.bind(null, e[1]),
          zt().memoizedState = e,
          [t, e]
      },
      useMutableSource: function() {},
      useSyncExternalStore: function(e, t, r) {
          var n = Pe
            , i = zt();
          if (ge) {
              if (r === void 0)
                  throw Error(j(407));
              r = r()
          } else {
              if (r = t(),
              Le === null)
                  throw Error(j(349));
              rn & 30 || Xv(n, t, r)
          }
          i.memoizedState = r;
          var o = {
              value: r,
              getSnapshot: t
          };
          return i.queue = o,
          Od(Zv.bind(null, n, o, e), [e]),
          n.flags |= 2048,
          ao(9, Jv.bind(null, n, o, r, t), void 0, null),
          r
      },
      useId: function() {
          var e = zt()
            , t = Le.identifierPrefix;
          if (ge) {
              var r = Qt
                , n = Gt;
              r = (n & ~(1 << 32 - Mt(n) - 1)).toString(32) + r,
              t = ":" + t + "R" + r,
              r = oo++,
              0 < r && (t += "H" + r.toString(32)),
              t += ":"
          } else
              r = R1++,
              t = ":" + t + "r" + r.toString(32) + ":";
          return e.memoizedState = t
      },
      unstable_isNewReconciler: !1
  }
    , j1 = {
      readContext: _t,
      useCallback: am,
      useContext: _t,
      useEffect: Qc,
      useImperativeHandle: lm,
      useInsertionEffect: nm,
      useLayoutEffect: im,
      useMemo: um,
      useReducer: fu,
      useRef: rm,
      useState: function() {
          return fu(lo)
      },
      useDebugValue: Yc,
      useDeferredValue: function(e) {
          var t = Rt();
          return sm(t, $e.memoizedState, e)
      },
      useTransition: function() {
          var e = fu(lo)[0]
            , t = Rt().memoizedState;
          return [e, t]
      },
      useMutableSource: Yv,
      useSyncExternalStore: qv,
      useId: cm,
      unstable_isNewReconciler: !1
  }
    , b1 = {
      readContext: _t,
      useCallback: am,
      useContext: _t,
      useEffect: Qc,
      useImperativeHandle: lm,
      useInsertionEffect: nm,
      useLayoutEffect: im,
      useMemo: um,
      useReducer: du,
      useRef: rm,
      useState: function() {
          return du(lo)
      },
      useDebugValue: Yc,
      useDeferredValue: function(e) {
          var t = Rt();
          return $e === null ? t.memoizedState = e : sm(t, $e.memoizedState, e)
      },
      useTransition: function() {
          var e = du(lo)[0]
            , t = Rt().memoizedState;
          return [e, t]
      },
      useMutableSource: Yv,
      useSyncExternalStore: qv,
      useId: cm,
      unstable_isNewReconciler: !1
  };
  function Ot(e, t) {
      if (e && e.defaultProps) {
          t = Ce({}, t),
          e = e.defaultProps;
          for (var r in e)
              t[r] === void 0 && (t[r] = e[r]);
          return t
      }
      return t
  }
  function Ss(e, t, r, n) {
      t = e.memoizedState,
      r = r(n, t),
      r = r == null ? t : Ce({}, t, r),
      e.memoizedState = r,
      e.lanes === 0 && (e.updateQueue.baseState = r)
  }
  var fa = {
      isMounted: function(e) {
          return (e = e._reactInternals) ? an(e) === e : !1
      },
      enqueueSetState: function(e, t, r) {
          e = e._reactInternals;
          var n = Je()
            , i = _r(e)
            , o = Yt(n, i);
          o.payload = t,
          r != null && (o.callback = r),
          t = Pr(e, o, i),
          t !== null && (Lt(t, e, i, n),
          dl(t, e, i))
      },
      enqueueReplaceState: function(e, t, r) {
          e = e._reactInternals;
          var n = Je()
            , i = _r(e)
            , o = Yt(n, i);
          o.tag = 1,
          o.payload = t,
          r != null && (o.callback = r),
          t = Pr(e, o, i),
          t !== null && (Lt(t, e, i, n),
          dl(t, e, i))
      },
      enqueueForceUpdate: function(e, t) {
          e = e._reactInternals;
          var r = Je()
            , n = _r(e)
            , i = Yt(r, n);
          i.tag = 2,
          t != null && (i.callback = t),
          t = Pr(e, i, n),
          t !== null && (Lt(t, e, n, r),
          dl(t, e, n))
      }
  };
  function jd(e, t, r, n, i, o, l) {
      return e = e.stateNode,
      typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, o, l) : t.prototype && t.prototype.isPureReactComponent ? !Zi(r, n) || !Zi(i, o) : !0
  }
  function hm(e, t, r) {
      var n = !1
        , i = $r
        , o = t.contextType;
      return typeof o == "object" && o !== null ? o = _t(o) : (i = at(t) ? en : Ye.current,
      n = t.contextTypes,
      o = (n = n != null) ? An(e, i) : $r),
      t = new t(r,o),
      e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
      t.updater = fa,
      e.stateNode = t,
      t._reactInternals = e,
      n && (e = e.stateNode,
      e.__reactInternalMemoizedUnmaskedChildContext = i,
      e.__reactInternalMemoizedMaskedChildContext = o),
      t
  }
  function bd(e, t, r, n) {
      e = t.state,
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n),
      typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n),
      t.state !== e && fa.enqueueReplaceState(t, t.state, null)
  }
  function xs(e, t, r, n) {
      var i = e.stateNode;
      i.props = r,
      i.state = e.memoizedState,
      i.refs = {},
      Uc(e);
      var o = t.contextType;
      typeof o == "object" && o !== null ? i.context = _t(o) : (o = at(t) ? en : Ye.current,
      i.context = An(e, o)),
      i.state = e.memoizedState,
      o = t.getDerivedStateFromProps,
      typeof o == "function" && (Ss(e, t, o, r),
      i.state = e.memoizedState),
      typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
      t !== i.state && fa.enqueueReplaceState(i, i.state, null),
      Il(e, r, i, n),
      i.state = e.memoizedState),
      typeof i.componentDidMount == "function" && (e.flags |= 4194308)
  }
  function Bn(e, t) {
      try {
          var r = ""
            , n = t;
          do
              r += l0(n),
              n = n.return;
          while (n);
          var i = r
      } catch (o) {
          i = `
Error generating stack: ` + o.message + `
` + o.stack
      }
      return {
          value: e,
          source: t,
          stack: i,
          digest: null
      }
  }
  function pu(e, t, r) {
      return {
          value: e,
          source: null,
          stack: r ?? null,
          digest: t ?? null
      }
  }
  function Es(e, t) {
      try {
          console.error(t.value)
      } catch (r) {
          setTimeout(function() {
              throw r
          })
      }
  }
  var N1 = typeof WeakMap == "function" ? WeakMap : Map;
  function vm(e, t, r) {
      r = Yt(-1, r),
      r.tag = 3,
      r.payload = {
          element: null
      };
      var n = t.value;
      return r.callback = function() {
          Ul || (Ul = !0,
          bs = n),
          Es(e, t)
      }
      ,
      r
  }
  function mm(e, t, r) {
      r = Yt(-1, r),
      r.tag = 3;
      var n = e.type.getDerivedStateFromError;
      if (typeof n == "function") {
          var i = t.value;
          r.payload = function() {
              return n(i)
          }
          ,
          r.callback = function() {
              Es(e, t)
          }
      }
      var o = e.stateNode;
      return o !== null && typeof o.componentDidCatch == "function" && (r.callback = function() {
          Es(e, t),
          typeof n != "function" && (Cr === null ? Cr = new Set([this]) : Cr.add(this));
          var l = t.stack;
          this.componentDidCatch(t.value, {
              componentStack: l !== null ? l : ""
          })
      }
      ),
      r
  }
  function Nd(e, t, r) {
      var n = e.pingCache;
      if (n === null) {
          n = e.pingCache = new N1;
          var i = new Set;
          n.set(t, i)
      } else
          i = n.get(t),
          i === void 0 && (i = new Set,
          n.set(t, i));
      i.has(r) || (i.add(r),
      e = G1.bind(null, e, t, r),
      t.then(e, e))
  }
  function Md(e) {
      do {
          var t;
          if ((t = e.tag === 13) && (t = e.memoizedState,
          t = t !== null ? t.dehydrated !== null : !0),
          t)
              return e;
          e = e.return
      } while (e !== null);
      return null
  }
  function Ld(e, t, r, n, i) {
      return e.mode & 1 ? (e.flags |= 65536,
      e.lanes = i,
      e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
      r.flags |= 131072,
      r.flags &= -52805,
      r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Yt(-1, 1),
      t.tag = 2,
      Pr(r, t, 1))),
      r.lanes |= 1),
      e)
  }
  var M1 = rr.ReactCurrentOwner
    , ot = !1;
  function Xe(e, t, r, n) {
      t.child = e === null ? Wv(t, null, r, n) : zn(t, e.child, r, n)
  }
  function Id(e, t, r, n, i) {
      r = r.render;
      var o = t.ref;
      return Mn(t, i),
      n = Kc(e, t, r, n, o, i),
      r = Gc(),
      e !== null && !ot ? (t.updateQueue = e.updateQueue,
      t.flags &= -2053,
      e.lanes &= ~i,
      tr(e, t, i)) : (ge && r && Mc(t),
      t.flags |= 1,
      Xe(e, t, n, i),
      t.child)
  }
  function Dd(e, t, r, n, i) {
      if (e === null) {
          var o = r.type;
          return typeof o == "function" && !nf(o) && o.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15,
          t.type = o,
          gm(e, t, o, n, i)) : (e = yl(r.type, null, n, t, t.mode, i),
          e.ref = t.ref,
          e.return = t,
          t.child = e)
      }
      if (o = e.child,
      !(e.lanes & i)) {
          var l = o.memoizedProps;
          if (r = r.compare,
          r = r !== null ? r : Zi,
          r(l, n) && e.ref === t.ref)
              return tr(e, t, i)
      }
      return t.flags |= 1,
      e = Rr(o, n),
      e.ref = t.ref,
      e.return = t,
      t.child = e
  }
  function gm(e, t, r, n, i) {
      if (e !== null) {
          var o = e.memoizedProps;
          if (Zi(o, n) && e.ref === t.ref)
              if (ot = !1,
              t.pendingProps = n = o,
              (e.lanes & i) !== 0)
                  e.flags & 131072 && (ot = !0);
              else
                  return t.lanes = e.lanes,
                  tr(e, t, i)
      }
      return Ps(e, t, r, n, i)
  }
  function ym(e, t, r) {
      var n = t.pendingProps
        , i = n.children
        , o = e !== null ? e.memoizedState : null;
      if (n.mode === "hidden")
          if (!(t.mode & 1))
              t.memoizedState = {
                  baseLanes: 0,
                  cachePool: null,
                  transitions: null
              },
              ue(kn, st),
              st |= r;
          else {
              if (!(r & 1073741824))
                  return e = o !== null ? o.baseLanes | r : r,
                  t.lanes = t.childLanes = 1073741824,
                  t.memoizedState = {
                      baseLanes: e,
                      cachePool: null,
                      transitions: null
                  },
                  t.updateQueue = null,
                  ue(kn, st),
                  st |= e,
                  null;
              t.memoizedState = {
                  baseLanes: 0,
                  cachePool: null,
                  transitions: null
              },
              n = o !== null ? o.baseLanes : r,
              ue(kn, st),
              st |= n
          }
      else
          o !== null ? (n = o.baseLanes | r,
          t.memoizedState = null) : n = r,
          ue(kn, st),
          st |= n;
      return Xe(e, t, i, r),
      t.child
  }
  function wm(e, t) {
      var r = t.ref;
      (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512,
      t.flags |= 2097152)
  }
  function Ps(e, t, r, n, i) {
      var o = at(r) ? en : Ye.current;
      return o = An(t, o),
      Mn(t, i),
      r = Kc(e, t, r, n, o, i),
      n = Gc(),
      e !== null && !ot ? (t.updateQueue = e.updateQueue,
      t.flags &= -2053,
      e.lanes &= ~i,
      tr(e, t, i)) : (ge && n && Mc(t),
      t.flags |= 1,
      Xe(e, t, r, i),
      t.child)
  }
  function Ad(e, t, r, n, i) {
      if (at(r)) {
          var o = !0;
          jl(t)
      } else
          o = !1;
      if (Mn(t, i),
      t.stateNode === null)
          vl(e, t),
          hm(t, r, n),
          xs(t, r, n, i),
          n = !0;
      else if (e === null) {
          var l = t.stateNode
            , a = t.memoizedProps;
          l.props = a;
          var u = l.context
            , s = r.contextType;
          typeof s == "object" && s !== null ? s = _t(s) : (s = at(r) ? en : Ye.current,
          s = An(t, s));
          var c = r.getDerivedStateFromProps
            , f = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
          f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== n || u !== s) && bd(t, l, n, s),
          dr = !1;
          var d = t.memoizedState;
          l.state = d,
          Il(t, n, l, i),
          u = t.memoizedState,
          a !== n || d !== u || lt.current || dr ? (typeof c == "function" && (Ss(t, r, c, n),
          u = t.memoizedState),
          (a = dr || jd(t, r, a, n, d, u, s)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(),
          typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
          typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          t.memoizedProps = n,
          t.memoizedState = u),
          l.props = n,
          l.state = u,
          l.context = s,
          n = a) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          n = !1)
      } else {
          l = t.stateNode,
          Gv(e, t),
          a = t.memoizedProps,
          s = t.type === t.elementType ? a : Ot(t.type, a),
          l.props = s,
          f = t.pendingProps,
          d = l.context,
          u = r.contextType,
          typeof u == "object" && u !== null ? u = _t(u) : (u = at(r) ? en : Ye.current,
          u = An(t, u));
          var y = r.getDerivedStateFromProps;
          (c = typeof y == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== f || d !== u) && bd(t, l, n, u),
          dr = !1,
          d = t.memoizedState,
          l.state = d,
          Il(t, n, l, i);
          var g = t.memoizedState;
          a !== f || d !== g || lt.current || dr ? (typeof y == "function" && (Ss(t, r, y, n),
          g = t.memoizedState),
          (s = dr || jd(t, r, s, n, d, g, u) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(n, g, u),
          typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(n, g, u)),
          typeof l.componentDidUpdate == "function" && (t.flags |= 4),
          typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
          typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
          t.memoizedProps = n,
          t.memoizedState = g),
          l.props = n,
          l.state = g,
          l.context = u,
          n = s) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
          typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
          n = !1)
      }
      return Cs(e, t, r, n, o, i)
  }
  function Cs(e, t, r, n, i, o) {
      wm(e, t);
      var l = (t.flags & 128) !== 0;
      if (!n && !l)
          return i && Pd(t, r, !1),
          tr(e, t, o);
      n = t.stateNode,
      M1.current = t;
      var a = l && typeof r.getDerivedStateFromError != "function" ? null : n.render();
      return t.flags |= 1,
      e !== null && l ? (t.child = zn(t, e.child, null, o),
      t.child = zn(t, null, a, o)) : Xe(e, t, a, o),
      t.memoizedState = n.state,
      i && Pd(t, r, !0),
      t.child
  }
  function Sm(e) {
      var t = e.stateNode;
      t.pendingContext ? Ed(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ed(e, t.context, !1),
      Bc(e, t.containerInfo)
  }
  function Fd(e, t, r, n, i) {
      return Fn(),
      Ic(i),
      t.flags |= 256,
      Xe(e, t, r, n),
      t.child
  }
  var _s = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0
  };
  function Rs(e) {
      return {
          baseLanes: e,
          cachePool: null,
          transitions: null
      }
  }
  function xm(e, t, r) {
      var n = t.pendingProps, i = xe.current, o = !1, l = (t.flags & 128) !== 0, a;
      if ((a = l) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
      a ? (o = !0,
      t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
      ue(xe, i & 1),
      e === null)
          return ys(t),
          e = t.memoizedState,
          e !== null && (e = e.dehydrated,
          e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
          null) : (l = n.children,
          e = n.fallback,
          o ? (n = t.mode,
          o = t.child,
          l = {
              mode: "hidden",
              children: l
          },
          !(n & 1) && o !== null ? (o.childLanes = 0,
          o.pendingProps = l) : o = ha(l, n, 0, null),
          e = qr(e, n, r, null),
          o.return = t,
          e.return = t,
          o.sibling = e,
          t.child = o,
          t.child.memoizedState = Rs(r),
          t.memoizedState = _s,
          e) : qc(t, l));
      if (i = e.memoizedState,
      i !== null && (a = i.dehydrated,
      a !== null))
          return L1(e, t, l, n, a, i, r);
      if (o) {
          o = n.fallback,
          l = t.mode,
          i = e.child,
          a = i.sibling;
          var u = {
              mode: "hidden",
              children: n.children
          };
          return !(l & 1) && t.child !== i ? (n = t.child,
          n.childLanes = 0,
          n.pendingProps = u,
          t.deletions = null) : (n = Rr(i, u),
          n.subtreeFlags = i.subtreeFlags & 14680064),
          a !== null ? o = Rr(a, o) : (o = qr(o, l, r, null),
          o.flags |= 2),
          o.return = t,
          n.return = t,
          n.sibling = o,
          t.child = n,
          n = o,
          o = t.child,
          l = e.child.memoizedState,
          l = l === null ? Rs(r) : {
              baseLanes: l.baseLanes | r,
              cachePool: null,
              transitions: l.transitions
          },
          o.memoizedState = l,
          o.childLanes = e.childLanes & ~r,
          t.memoizedState = _s,
          n
      }
      return o = e.child,
      e = o.sibling,
      n = Rr(o, {
          mode: "visible",
          children: n.children
      }),
      !(t.mode & 1) && (n.lanes = r),
      n.return = t,
      n.sibling = null,
      e !== null && (r = t.deletions,
      r === null ? (t.deletions = [e],
      t.flags |= 16) : r.push(e)),
      t.child = n,
      t.memoizedState = null,
      n
  }
  function qc(e, t) {
      return t = ha({
          mode: "visible",
          children: t
      }, e.mode, 0, null),
      t.return = e,
      e.child = t
  }
  function qo(e, t, r, n) {
      return n !== null && Ic(n),
      zn(t, e.child, null, r),
      e = qc(t, t.pendingProps.children),
      e.flags |= 2,
      t.memoizedState = null,
      e
  }
  function L1(e, t, r, n, i, o, l) {
      if (r)
          return t.flags & 256 ? (t.flags &= -257,
          n = pu(Error(j(422))),
          qo(e, t, l, n)) : t.memoizedState !== null ? (t.child = e.child,
          t.flags |= 128,
          null) : (o = n.fallback,
          i = t.mode,
          n = ha({
              mode: "visible",
              children: n.children
          }, i, 0, null),
          o = qr(o, i, l, null),
          o.flags |= 2,
          n.return = t,
          o.return = t,
          n.sibling = o,
          t.child = n,
          t.mode & 1 && zn(t, e.child, null, l),
          t.child.memoizedState = Rs(l),
          t.memoizedState = _s,
          o);
      if (!(t.mode & 1))
          return qo(e, t, l, null);
      if (i.data === "$!") {
          if (n = i.nextSibling && i.nextSibling.dataset,
          n)
              var a = n.dgst;
          return n = a,
          o = Error(j(419)),
          n = pu(o, n, void 0),
          qo(e, t, l, n)
      }
      if (a = (l & e.childLanes) !== 0,
      ot || a) {
          if (n = Le,
          n !== null) {
              switch (l & -l) {
              case 4:
                  i = 2;
                  break;
              case 16:
                  i = 8;
                  break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                  i = 32;
                  break;
              case 536870912:
                  i = 268435456;
                  break;
              default:
                  i = 0
              }
              i = i & (n.suspendedLanes | l) ? 0 : i,
              i !== 0 && i !== o.retryLane && (o.retryLane = i,
              er(e, i),
              Lt(n, e, i, -1))
          }
          return rf(),
          n = pu(Error(j(421))),
          qo(e, t, l, n)
      }
      return i.data === "$?" ? (t.flags |= 128,
      t.child = e.child,
      t = Q1.bind(null, e),
      i._reactRetry = t,
      null) : (e = o.treeContext,
      ft = Er(i.nextSibling),
      dt = t,
      ge = !0,
      Nt = null,
      e !== null && (St[xt++] = Gt,
      St[xt++] = Qt,
      St[xt++] = tn,
      Gt = e.id,
      Qt = e.overflow,
      tn = t),
      t = qc(t, n.children),
      t.flags |= 4096,
      t)
  }
  function zd(e, t, r) {
      e.lanes |= t;
      var n = e.alternate;
      n !== null && (n.lanes |= t),
      ws(e.return, t, r)
  }
  function hu(e, t, r, n, i) {
      var o = e.memoizedState;
      o === null ? e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: r,
          tailMode: i
      } : (o.isBackwards = t,
      o.rendering = null,
      o.renderingStartTime = 0,
      o.last = n,
      o.tail = r,
      o.tailMode = i)
  }
  function Em(e, t, r) {
      var n = t.pendingProps
        , i = n.revealOrder
        , o = n.tail;
      if (Xe(e, t, n.children, r),
      n = xe.current,
      n & 2)
          n = n & 1 | 2,
          t.flags |= 128;
      else {
          if (e !== null && e.flags & 128)
              e: for (e = t.child; e !== null; ) {
                  if (e.tag === 13)
                      e.memoizedState !== null && zd(e, r, t);
                  else if (e.tag === 19)
                      zd(e, r, t);
                  else if (e.child !== null) {
                      e.child.return = e,
                      e = e.child;
                      continue
                  }
                  if (e === t)
                      break e;
                  for (; e.sibling === null; ) {
                      if (e.return === null || e.return === t)
                          break e;
                      e = e.return
                  }
                  e.sibling.return = e.return,
                  e = e.sibling
              }
          n &= 1
      }
      if (ue(xe, n),
      !(t.mode & 1))
          t.memoizedState = null;
      else
          switch (i) {
          case "forwards":
              for (r = t.child,
              i = null; r !== null; )
                  e = r.alternate,
                  e !== null && Dl(e) === null && (i = r),
                  r = r.sibling;
              r = i,
              r === null ? (i = t.child,
              t.child = null) : (i = r.sibling,
              r.sibling = null),
              hu(t, !1, i, r, o);
              break;
          case "backwards":
              for (r = null,
              i = t.child,
              t.child = null; i !== null; ) {
                  if (e = i.alternate,
                  e !== null && Dl(e) === null) {
                      t.child = i;
                      break
                  }
                  e = i.sibling,
                  i.sibling = r,
                  r = i,
                  i = e
              }
              hu(t, !0, r, null, o);
              break;
          case "together":
              hu(t, !1, null, null, void 0);
              break;
          default:
              t.memoizedState = null
          }
      return t.child
  }
  function vl(e, t) {
      !(t.mode & 1) && e !== null && (e.alternate = null,
      t.alternate = null,
      t.flags |= 2)
  }
  function tr(e, t, r) {
      if (e !== null && (t.dependencies = e.dependencies),
      nn |= t.lanes,
      !(r & t.childLanes))
          return null;
      if (e !== null && t.child !== e.child)
          throw Error(j(153));
      if (t.child !== null) {
          for (e = t.child,
          r = Rr(e, e.pendingProps),
          t.child = r,
          r.return = t; e.sibling !== null; )
              e = e.sibling,
              r = r.sibling = Rr(e, e.pendingProps),
              r.return = t;
          r.sibling = null
      }
      return t.child
  }
  function I1(e, t, r) {
      switch (t.tag) {
      case 3:
          Sm(t),
          Fn();
          break;
      case 5:
          Qv(t);
          break;
      case 1:
          at(t.type) && jl(t);
          break;
      case 4:
          Bc(t, t.stateNode.containerInfo);
          break;
      case 10:
          var n = t.type._context
            , i = t.memoizedProps.value;
          ue(Ml, n._currentValue),
          n._currentValue = i;
          break;
      case 13:
          if (n = t.memoizedState,
          n !== null)
              return n.dehydrated !== null ? (ue(xe, xe.current & 1),
              t.flags |= 128,
              null) : r & t.child.childLanes ? xm(e, t, r) : (ue(xe, xe.current & 1),
              e = tr(e, t, r),
              e !== null ? e.sibling : null);
          ue(xe, xe.current & 1);
          break;
      case 19:
          if (n = (r & t.childLanes) !== 0,
          e.flags & 128) {
              if (n)
                  return Em(e, t, r);
              t.flags |= 128
          }
          if (i = t.memoizedState,
          i !== null && (i.rendering = null,
          i.tail = null,
          i.lastEffect = null),
          ue(xe, xe.current),
          n)
              break;
          return null;
      case 22:
      case 23:
          return t.lanes = 0,
          ym(e, t, r)
      }
      return tr(e, t, r)
  }
  var Pm, Ts, Cm, _m;
  Pm = function(e, t) {
      for (var r = t.child; r !== null; ) {
          if (r.tag === 5 || r.tag === 6)
              e.appendChild(r.stateNode);
          else if (r.tag !== 4 && r.child !== null) {
              r.child.return = r,
              r = r.child;
              continue
          }
          if (r === t)
              break;
          for (; r.sibling === null; ) {
              if (r.return === null || r.return === t)
                  return;
              r = r.return
          }
          r.sibling.return = r.return,
          r = r.sibling
      }
  }
  ;
  Ts = function() {}
  ;
  Cm = function(e, t, r, n) {
      var i = e.memoizedProps;
      if (i !== n) {
          e = t.stateNode,
          Vr(Ht.current);
          var o = null;
          switch (r) {
          case "input":
              i = Yu(e, i),
              n = Yu(e, n),
              o = [];
              break;
          case "select":
              i = Ce({}, i, {
                  value: void 0
              }),
              n = Ce({}, n, {
                  value: void 0
              }),
              o = [];
              break;
          case "textarea":
              i = Ju(e, i),
              n = Ju(e, n),
              o = [];
              break;
          default:
              typeof i.onClick != "function" && typeof n.onClick == "function" && (e.onclick = $l)
          }
          es(r, n);
          var l;
          r = null;
          for (s in i)
              if (!n.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
                  if (s === "style") {
                      var a = i[s];
                      for (l in a)
                          a.hasOwnProperty(l) && (r || (r = {}),
                          r[l] = "")
                  } else
                      s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Ki.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
          for (s in n) {
              var u = n[s];
              if (a = i != null ? i[s] : void 0,
              n.hasOwnProperty(s) && u !== a && (u != null || a != null))
                  if (s === "style")
                      if (a) {
                          for (l in a)
                              !a.hasOwnProperty(l) || u && u.hasOwnProperty(l) || (r || (r = {}),
                              r[l] = "");
                          for (l in u)
                              u.hasOwnProperty(l) && a[l] !== u[l] && (r || (r = {}),
                              r[l] = u[l])
                      } else
                          r || (o || (o = []),
                          o.push(s, r)),
                          r = u;
                  else
                      s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                      a = a ? a.__html : void 0,
                      u != null && a !== u && (o = o || []).push(s, u)) : s === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(s, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (Ki.hasOwnProperty(s) ? (u != null && s === "onScroll" && ce("scroll", e),
                      o || a === u || (o = [])) : (o = o || []).push(s, u))
          }
          r && (o = o || []).push("style", r);
          var s = o;
          (t.updateQueue = s) && (t.flags |= 4)
      }
  }
  ;
  _m = function(e, t, r, n) {
      r !== n && (t.flags |= 4)
  }
  ;
  function gi(e, t) {
      if (!ge)
          switch (e.tailMode) {
          case "hidden":
              t = e.tail;
              for (var r = null; t !== null; )
                  t.alternate !== null && (r = t),
                  t = t.sibling;
              r === null ? e.tail = null : r.sibling = null;
              break;
          case "collapsed":
              r = e.tail;
              for (var n = null; r !== null; )
                  r.alternate !== null && (n = r),
                  r = r.sibling;
              n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null
          }
  }
  function We(e) {
      var t = e.alternate !== null && e.alternate.child === e.child
        , r = 0
        , n = 0;
      if (t)
          for (var i = e.child; i !== null; )
              r |= i.lanes | i.childLanes,
              n |= i.subtreeFlags & 14680064,
              n |= i.flags & 14680064,
              i.return = e,
              i = i.sibling;
      else
          for (i = e.child; i !== null; )
              r |= i.lanes | i.childLanes,
              n |= i.subtreeFlags,
              n |= i.flags,
              i.return = e,
              i = i.sibling;
      return e.subtreeFlags |= n,
      e.childLanes = r,
      t
  }
  function D1(e, t, r) {
      var n = t.pendingProps;
      switch (Lc(t),
      t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
          return We(t),
          null;
      case 1:
          return at(t.type) && Ol(),
          We(t),
          null;
      case 3:
          return n = t.stateNode,
          Un(),
          de(lt),
          de(Ye),
          Vc(),
          n.pendingContext && (n.context = n.pendingContext,
          n.pendingContext = null),
          (e === null || e.child === null) && (Qo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
          Nt !== null && (Ls(Nt),
          Nt = null))),
          Ts(e, t),
          We(t),
          null;
      case 5:
          Hc(t);
          var i = Vr(io.current);
          if (r = t.type,
          e !== null && t.stateNode != null)
              Cm(e, t, r, n, i),
              e.ref !== t.ref && (t.flags |= 512,
              t.flags |= 2097152);
          else {
              if (!n) {
                  if (t.stateNode === null)
                      throw Error(j(166));
                  return We(t),
                  null
              }
              if (e = Vr(Ht.current),
              Qo(t)) {
                  n = t.stateNode,
                  r = t.type;
                  var o = t.memoizedProps;
                  switch (n[Ut] = t,
                  n[ro] = o,
                  e = (t.mode & 1) !== 0,
                  r) {
                  case "dialog":
                      ce("cancel", n),
                      ce("close", n);
                      break;
                  case "iframe":
                  case "object":
                  case "embed":
                      ce("load", n);
                      break;
                  case "video":
                  case "audio":
                      for (i = 0; i < Oi.length; i++)
                          ce(Oi[i], n);
                      break;
                  case "source":
                      ce("error", n);
                      break;
                  case "img":
                  case "image":
                  case "link":
                      ce("error", n),
                      ce("load", n);
                      break;
                  case "details":
                      ce("toggle", n);
                      break;
                  case "input":
                      Yf(n, o),
                      ce("invalid", n);
                      break;
                  case "select":
                      n._wrapperState = {
                          wasMultiple: !!o.multiple
                      },
                      ce("invalid", n);
                      break;
                  case "textarea":
                      Xf(n, o),
                      ce("invalid", n)
                  }
                  es(r, o),
                  i = null;
                  for (var l in o)
                      if (o.hasOwnProperty(l)) {
                          var a = o[l];
                          l === "children" ? typeof a == "string" ? n.textContent !== a && (o.suppressHydrationWarning !== !0 && Go(n.textContent, a, e),
                          i = ["children", a]) : typeof a == "number" && n.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Go(n.textContent, a, e),
                          i = ["children", "" + a]) : Ki.hasOwnProperty(l) && a != null && l === "onScroll" && ce("scroll", n)
                      }
                  switch (r) {
                  case "input":
                      Fo(n),
                      qf(n, o, !0);
                      break;
                  case "textarea":
                      Fo(n),
                      Jf(n);
                      break;
                  case "select":
                  case "option":
                      break;
                  default:
                      typeof o.onClick == "function" && (n.onclick = $l)
                  }
                  n = i,
                  t.updateQueue = n,
                  n !== null && (t.flags |= 4)
              } else {
                  l = i.nodeType === 9 ? i : i.ownerDocument,
                  e === "http://www.w3.org/1999/xhtml" && (e = Zh(r)),
                  e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = l.createElement("div"),
                  e.innerHTML = "<script><\/script>",
                  e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = l.createElement(r, {
                      is: n.is
                  }) : (e = l.createElement(r),
                  r === "select" && (l = e,
                  n.multiple ? l.multiple = !0 : n.size && (l.size = n.size))) : e = l.createElementNS(e, r),
                  e[Ut] = t,
                  e[ro] = n,
                  Pm(e, t, !1, !1),
                  t.stateNode = e;
                  e: {
                      switch (l = ts(r, n),
                      r) {
                      case "dialog":
                          ce("cancel", e),
                          ce("close", e),
                          i = n;
                          break;
                      case "iframe":
                      case "object":
                      case "embed":
                          ce("load", e),
                          i = n;
                          break;
                      case "video":
                      case "audio":
                          for (i = 0; i < Oi.length; i++)
                              ce(Oi[i], e);
                          i = n;
                          break;
                      case "source":
                          ce("error", e),
                          i = n;
                          break;
                      case "img":
                      case "image":
                      case "link":
                          ce("error", e),
                          ce("load", e),
                          i = n;
                          break;
                      case "details":
                          ce("toggle", e),
                          i = n;
                          break;
                      case "input":
                          Yf(e, n),
                          i = Yu(e, n),
                          ce("invalid", e);
                          break;
                      case "option":
                          i = n;
                          break;
                      case "select":
                          e._wrapperState = {
                              wasMultiple: !!n.multiple
                          },
                          i = Ce({}, n, {
                              value: void 0
                          }),
                          ce("invalid", e);
                          break;
                      case "textarea":
                          Xf(e, n),
                          i = Ju(e, n),
                          ce("invalid", e);
                          break;
                      default:
                          i = n
                      }
                      es(r, i),
                      a = i;
                      for (o in a)
                          if (a.hasOwnProperty(o)) {
                              var u = a[o];
                              o === "style" ? rv(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                              u != null && ev(e, u)) : o === "children" ? typeof u == "string" ? (r !== "textarea" || u !== "") && Gi(e, u) : typeof u == "number" && Gi(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ki.hasOwnProperty(o) ? u != null && o === "onScroll" && ce("scroll", e) : u != null && Sc(e, o, u, l))
                          }
                      switch (r) {
                      case "input":
                          Fo(e),
                          qf(e, n, !1);
                          break;
                      case "textarea":
                          Fo(e),
                          Jf(e);
                          break;
                      case "option":
                          n.value != null && e.setAttribute("value", "" + kr(n.value));
                          break;
                      case "select":
                          e.multiple = !!n.multiple,
                          o = n.value,
                          o != null ? On(e, !!n.multiple, o, !1) : n.defaultValue != null && On(e, !!n.multiple, n.defaultValue, !0);
                          break;
                      default:
                          typeof i.onClick == "function" && (e.onclick = $l)
                      }
                      switch (r) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                          n = !!n.autoFocus;
                          break e;
                      case "img":
                          n = !0;
                          break e;
                      default:
                          n = !1
                      }
                  }
                  n && (t.flags |= 4)
              }
              t.ref !== null && (t.flags |= 512,
              t.flags |= 2097152)
          }
          return We(t),
          null;
      case 6:
          if (e && t.stateNode != null)
              _m(e, t, e.memoizedProps, n);
          else {
              if (typeof n != "string" && t.stateNode === null)
                  throw Error(j(166));
              if (r = Vr(io.current),
              Vr(Ht.current),
              Qo(t)) {
                  if (n = t.stateNode,
                  r = t.memoizedProps,
                  n[Ut] = t,
                  (o = n.nodeValue !== r) && (e = dt,
                  e !== null))
                      switch (e.tag) {
                      case 3:
                          Go(n.nodeValue, r, (e.mode & 1) !== 0);
                          break;
                      case 5:
                          e.memoizedProps.suppressHydrationWarning !== !0 && Go(n.nodeValue, r, (e.mode & 1) !== 0)
                      }
                  o && (t.flags |= 4)
              } else
                  n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n),
                  n[Ut] = t,
                  t.stateNode = n
          }
          return We(t),
          null;
      case 13:
          if (de(xe),
          n = t.memoizedState,
          e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
              if (ge && ft !== null && t.mode & 1 && !(t.flags & 128))
                  Hv(),
                  Fn(),
                  t.flags |= 98560,
                  o = !1;
              else if (o = Qo(t),
              n !== null && n.dehydrated !== null) {
                  if (e === null) {
                      if (!o)
                          throw Error(j(318));
                      if (o = t.memoizedState,
                      o = o !== null ? o.dehydrated : null,
                      !o)
                          throw Error(j(317));
                      o[Ut] = t
                  } else
                      Fn(),
                      !(t.flags & 128) && (t.memoizedState = null),
                      t.flags |= 4;
                  We(t),
                  o = !1
              } else
                  Nt !== null && (Ls(Nt),
                  Nt = null),
                  o = !0;
              if (!o)
                  return t.flags & 65536 ? t : null
          }
          return t.flags & 128 ? (t.lanes = r,
          t) : (n = n !== null,
          n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192,
          t.mode & 1 && (e === null || xe.current & 1 ? je === 0 && (je = 3) : rf())),
          t.updateQueue !== null && (t.flags |= 4),
          We(t),
          null);
      case 4:
          return Un(),
          Ts(e, t),
          e === null && eo(t.stateNode.containerInfo),
          We(t),
          null;
      case 10:
          return Fc(t.type._context),
          We(t),
          null;
      case 17:
          return at(t.type) && Ol(),
          We(t),
          null;
      case 19:
          if (de(xe),
          o = t.memoizedState,
          o === null)
              return We(t),
              null;
          if (n = (t.flags & 128) !== 0,
          l = o.rendering,
          l === null)
              if (n)
                  gi(o, !1);
              else {
                  if (je !== 0 || e !== null && e.flags & 128)
                      for (e = t.child; e !== null; ) {
                          if (l = Dl(e),
                          l !== null) {
                              for (t.flags |= 128,
                              gi(o, !1),
                              n = l.updateQueue,
                              n !== null && (t.updateQueue = n,
                              t.flags |= 4),
                              t.subtreeFlags = 0,
                              n = r,
                              r = t.child; r !== null; )
                                  o = r,
                                  e = n,
                                  o.flags &= 14680066,
                                  l = o.alternate,
                                  l === null ? (o.childLanes = 0,
                                  o.lanes = e,
                                  o.child = null,
                                  o.subtreeFlags = 0,
                                  o.memoizedProps = null,
                                  o.memoizedState = null,
                                  o.updateQueue = null,
                                  o.dependencies = null,
                                  o.stateNode = null) : (o.childLanes = l.childLanes,
                                  o.lanes = l.lanes,
                                  o.child = l.child,
                                  o.subtreeFlags = 0,
                                  o.deletions = null,
                                  o.memoizedProps = l.memoizedProps,
                                  o.memoizedState = l.memoizedState,
                                  o.updateQueue = l.updateQueue,
                                  o.type = l.type,
                                  e = l.dependencies,
                                  o.dependencies = e === null ? null : {
                                      lanes: e.lanes,
                                      firstContext: e.firstContext
                                  }),
                                  r = r.sibling;
                              return ue(xe, xe.current & 1 | 2),
                              t.child
                          }
                          e = e.sibling
                      }
                  o.tail !== null && Re() > Hn && (t.flags |= 128,
                  n = !0,
                  gi(o, !1),
                  t.lanes = 4194304)
              }
          else {
              if (!n)
                  if (e = Dl(l),
                  e !== null) {
                      if (t.flags |= 128,
                      n = !0,
                      r = e.updateQueue,
                      r !== null && (t.updateQueue = r,
                      t.flags |= 4),
                      gi(o, !0),
                      o.tail === null && o.tailMode === "hidden" && !l.alternate && !ge)
                          return We(t),
                          null
                  } else
                      2 * Re() - o.renderingStartTime > Hn && r !== 1073741824 && (t.flags |= 128,
                      n = !0,
                      gi(o, !1),
                      t.lanes = 4194304);
              o.isBackwards ? (l.sibling = t.child,
              t.child = l) : (r = o.last,
              r !== null ? r.sibling = l : t.child = l,
              o.last = l)
          }
          return o.tail !== null ? (t = o.tail,
          o.rendering = t,
          o.tail = t.sibling,
          o.renderingStartTime = Re(),
          t.sibling = null,
          r = xe.current,
          ue(xe, n ? r & 1 | 2 : r & 1),
          t) : (We(t),
          null);
      case 22:
      case 23:
          return tf(),
          n = t.memoizedState !== null,
          e !== null && e.memoizedState !== null !== n && (t.flags |= 8192),
          n && t.mode & 1 ? st & 1073741824 && (We(t),
          t.subtreeFlags & 6 && (t.flags |= 8192)) : We(t),
          null;
      case 24:
          return null;
      case 25:
          return null
      }
      throw Error(j(156, t.tag))
  }
  function A1(e, t) {
      switch (Lc(t),
      t.tag) {
      case 1:
          return at(t.type) && Ol(),
          e = t.flags,
          e & 65536 ? (t.flags = e & -65537 | 128,
          t) : null;
      case 3:
          return Un(),
          de(lt),
          de(Ye),
          Vc(),
          e = t.flags,
          e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
          t) : null;
      case 5:
          return Hc(t),
          null;
      case 13:
          if (de(xe),
          e = t.memoizedState,
          e !== null && e.dehydrated !== null) {
              if (t.alternate === null)
                  throw Error(j(340));
              Fn()
          }
          return e = t.flags,
          e & 65536 ? (t.flags = e & -65537 | 128,
          t) : null;
      case 19:
          return de(xe),
          null;
      case 4:
          return Un(),
          null;
      case 10:
          return Fc(t.type._context),
          null;
      case 22:
      case 23:
          return tf(),
          null;
      case 24:
          return null;
      default:
          return null
      }
  }
  var Xo = !1
    , Ke = !1
    , F1 = typeof WeakSet == "function" ? WeakSet : Set
    , I = null;
  function Tn(e, t) {
      var r = e.ref;
      if (r !== null)
          if (typeof r == "function")
              try {
                  r(null)
              } catch (n) {
                  _e(e, t, n)
              }
          else
              r.current = null
  }
  function ks(e, t, r) {
      try {
          r()
      } catch (n) {
          _e(e, t, n)
      }
  }
  var Ud = !1;
  function z1(e, t) {
      if (fs = Rl,
      e = Ov(),
      Nc(e)) {
          if ("selectionStart"in e)
              var r = {
                  start: e.selectionStart,
                  end: e.selectionEnd
              };
          else
              e: {
                  r = (r = e.ownerDocument) && r.defaultView || window;
                  var n = r.getSelection && r.getSelection();
                  if (n && n.rangeCount !== 0) {
                      r = n.anchorNode;
                      var i = n.anchorOffset
                        , o = n.focusNode;
                      n = n.focusOffset;
                      try {
                          r.nodeType,
                          o.nodeType
                      } catch {
                          r = null;
                          break e
                      }
                      var l = 0
                        , a = -1
                        , u = -1
                        , s = 0
                        , c = 0
                        , f = e
                        , d = null;
                      t: for (; ; ) {
                          for (var y; f !== r || i !== 0 && f.nodeType !== 3 || (a = l + i),
                          f !== o || n !== 0 && f.nodeType !== 3 || (u = l + n),
                          f.nodeType === 3 && (l += f.nodeValue.length),
                          (y = f.firstChild) !== null; )
                              d = f,
                              f = y;
                          for (; ; ) {
                              if (f === e)
                                  break t;
                              if (d === r && ++s === i && (a = l),
                              d === o && ++c === n && (u = l),
                              (y = f.nextSibling) !== null)
                                  break;
                              f = d,
                              d = f.parentNode
                          }
                          f = y
                      }
                      r = a === -1 || u === -1 ? null : {
                          start: a,
                          end: u
                      }
                  } else
                      r = null
              }
          r = r || {
              start: 0,
              end: 0
          }
      } else
          r = null;
      for (ds = {
          focusedElem: e,
          selectionRange: r
      },
      Rl = !1,
      I = t; I !== null; )
          if (t = I,
          e = t.child,
          (t.subtreeFlags & 1028) !== 0 && e !== null)
              e.return = t,
              I = e;
          else
              for (; I !== null; ) {
                  t = I;
                  try {
                      var g = t.alternate;
                      if (t.flags & 1024)
                          switch (t.tag) {
                          case 0:
                          case 11:
                          case 15:
                              break;
                          case 1:
                              if (g !== null) {
                                  var m = g.memoizedProps
                                    , E = g.memoizedState
                                    , h = t.stateNode
                                    , p = h.getSnapshotBeforeUpdate(t.elementType === t.type ? m : Ot(t.type, m), E);
                                  h.__reactInternalSnapshotBeforeUpdate = p
                              }
                              break;
                          case 3:
                              var v = t.stateNode.containerInfo;
                              v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                              break;
                          case 5:
                          case 6:
                          case 4:
                          case 17:
                              break;
                          default:
                              throw Error(j(163))
                          }
                  } catch (C) {
                      _e(t, t.return, C)
                  }
                  if (e = t.sibling,
                  e !== null) {
                      e.return = t.return,
                      I = e;
                      break
                  }
                  I = t.return
              }
      return g = Ud,
      Ud = !1,
      g
  }
  function zi(e, t, r) {
      var n = t.updateQueue;
      if (n = n !== null ? n.lastEffect : null,
      n !== null) {
          var i = n = n.next;
          do {
              if ((i.tag & e) === e) {
                  var o = i.destroy;
                  i.destroy = void 0,
                  o !== void 0 && ks(t, r, o)
              }
              i = i.next
          } while (i !== n)
      }
  }
  function da(e, t) {
      if (t = t.updateQueue,
      t = t !== null ? t.lastEffect : null,
      t !== null) {
          var r = t = t.next;
          do {
              if ((r.tag & e) === e) {
                  var n = r.create;
                  r.destroy = n()
              }
              r = r.next
          } while (r !== t)
      }
  }
  function $s(e) {
      var t = e.ref;
      if (t !== null) {
          var r = e.stateNode;
          switch (e.tag) {
          case 5:
              e = r;
              break;
          default:
              e = r
          }
          typeof t == "function" ? t(e) : t.current = e
      }
  }
  function Rm(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null,
      Rm(t)),
      e.child = null,
      e.deletions = null,
      e.sibling = null,
      e.tag === 5 && (t = e.stateNode,
      t !== null && (delete t[Ut],
      delete t[ro],
      delete t[vs],
      delete t[E1],
      delete t[P1])),
      e.stateNode = null,
      e.return = null,
      e.dependencies = null,
      e.memoizedProps = null,
      e.memoizedState = null,
      e.pendingProps = null,
      e.stateNode = null,
      e.updateQueue = null
  }
  function Tm(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4
  }
  function Bd(e) {
      e: for (; ; ) {
          for (; e.sibling === null; ) {
              if (e.return === null || Tm(e.return))
                  return null;
              e = e.return
          }
          for (e.sibling.return = e.return,
          e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
              if (e.flags & 2 || e.child === null || e.tag === 4)
                  continue e;
              e.child.return = e,
              e = e.child
          }
          if (!(e.flags & 2))
              return e.stateNode
      }
  }
  function Os(e, t, r) {
      var n = e.tag;
      if (n === 5 || n === 6)
          e = e.stateNode,
          t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode,
          t.insertBefore(e, r)) : (t = r,
          t.appendChild(e)),
          r = r._reactRootContainer,
          r != null || t.onclick !== null || (t.onclick = $l));
      else if (n !== 4 && (e = e.child,
      e !== null))
          for (Os(e, t, r),
          e = e.sibling; e !== null; )
              Os(e, t, r),
              e = e.sibling
  }
  function js(e, t, r) {
      var n = e.tag;
      if (n === 5 || n === 6)
          e = e.stateNode,
          t ? r.insertBefore(e, t) : r.appendChild(e);
      else if (n !== 4 && (e = e.child,
      e !== null))
          for (js(e, t, r),
          e = e.sibling; e !== null; )
              js(e, t, r),
              e = e.sibling
  }
  var Ue = null
    , jt = !1;
  function lr(e, t, r) {
      for (r = r.child; r !== null; )
          km(e, t, r),
          r = r.sibling
  }
  function km(e, t, r) {
      if (Bt && typeof Bt.onCommitFiberUnmount == "function")
          try {
              Bt.onCommitFiberUnmount(ia, r)
          } catch {}
      switch (r.tag) {
      case 5:
          Ke || Tn(r, t);
      case 6:
          var n = Ue
            , i = jt;
          Ue = null,
          lr(e, t, r),
          Ue = n,
          jt = i,
          Ue !== null && (jt ? (e = Ue,
          r = r.stateNode,
          e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : Ue.removeChild(r.stateNode));
          break;
      case 18:
          Ue !== null && (jt ? (e = Ue,
          r = r.stateNode,
          e.nodeType === 8 ? au(e.parentNode, r) : e.nodeType === 1 && au(e, r),
          Xi(e)) : au(Ue, r.stateNode));
          break;
      case 4:
          n = Ue,
          i = jt,
          Ue = r.stateNode.containerInfo,
          jt = !0,
          lr(e, t, r),
          Ue = n,
          jt = i;
          break;
      case 0:
      case 11:
      case 14:
      case 15:
          if (!Ke && (n = r.updateQueue,
          n !== null && (n = n.lastEffect,
          n !== null))) {
              i = n = n.next;
              do {
                  var o = i
                    , l = o.destroy;
                  o = o.tag,
                  l !== void 0 && (o & 2 || o & 4) && ks(r, t, l),
                  i = i.next
              } while (i !== n)
          }
          lr(e, t, r);
          break;
      case 1:
          if (!Ke && (Tn(r, t),
          n = r.stateNode,
          typeof n.componentWillUnmount == "function"))
              try {
                  n.props = r.memoizedProps,
                  n.state = r.memoizedState,
                  n.componentWillUnmount()
              } catch (a) {
                  _e(r, t, a)
              }
          lr(e, t, r);
          break;
      case 21:
          lr(e, t, r);
          break;
      case 22:
          r.mode & 1 ? (Ke = (n = Ke) || r.memoizedState !== null,
          lr(e, t, r),
          Ke = n) : lr(e, t, r);
          break;
      default:
          lr(e, t, r)
      }
  }
  function Hd(e) {
      var t = e.updateQueue;
      if (t !== null) {
          e.updateQueue = null;
          var r = e.stateNode;
          r === null && (r = e.stateNode = new F1),
          t.forEach(function(n) {
              var i = Y1.bind(null, e, n);
              r.has(n) || (r.add(n),
              n.then(i, i))
          })
      }
  }
  function $t(e, t) {
      var r = t.deletions;
      if (r !== null)
          for (var n = 0; n < r.length; n++) {
              var i = r[n];
              try {
                  var o = e
                    , l = t
                    , a = l;
                  e: for (; a !== null; ) {
                      switch (a.tag) {
                      case 5:
                          Ue = a.stateNode,
                          jt = !1;
                          break e;
                      case 3:
                          Ue = a.stateNode.containerInfo,
                          jt = !0;
                          break e;
                      case 4:
                          Ue = a.stateNode.containerInfo,
                          jt = !0;
                          break e
                      }
                      a = a.return
                  }
                  if (Ue === null)
                      throw Error(j(160));
                  km(o, l, i),
                  Ue = null,
                  jt = !1;
                  var u = i.alternate;
                  u !== null && (u.return = null),
                  i.return = null
              } catch (s) {
                  _e(i, t, s)
              }
          }
      if (t.subtreeFlags & 12854)
          for (t = t.child; t !== null; )
              $m(t, e),
              t = t.sibling
  }
  function $m(e, t) {
      var r = e.alternate
        , n = e.flags;
      switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
          if ($t(t, e),
          Ft(e),
          n & 4) {
              try {
                  zi(3, e, e.return),
                  da(3, e)
              } catch (m) {
                  _e(e, e.return, m)
              }
              try {
                  zi(5, e, e.return)
              } catch (m) {
                  _e(e, e.return, m)
              }
          }
          break;
      case 1:
          $t(t, e),
          Ft(e),
          n & 512 && r !== null && Tn(r, r.return);
          break;
      case 5:
          if ($t(t, e),
          Ft(e),
          n & 512 && r !== null && Tn(r, r.return),
          e.flags & 32) {
              var i = e.stateNode;
              try {
                  Gi(i, "")
              } catch (m) {
                  _e(e, e.return, m)
              }
          }
          if (n & 4 && (i = e.stateNode,
          i != null)) {
              var o = e.memoizedProps
                , l = r !== null ? r.memoizedProps : o
                , a = e.type
                , u = e.updateQueue;
              if (e.updateQueue = null,
              u !== null)
                  try {
                      a === "input" && o.type === "radio" && o.name != null && Xh(i, o),
                      ts(a, l);
                      var s = ts(a, o);
                      for (l = 0; l < u.length; l += 2) {
                          var c = u[l]
                            , f = u[l + 1];
                          c === "style" ? rv(i, f) : c === "dangerouslySetInnerHTML" ? ev(i, f) : c === "children" ? Gi(i, f) : Sc(i, c, f, s)
                      }
                      switch (a) {
                      case "input":
                          qu(i, o);
                          break;
                      case "textarea":
                          Jh(i, o);
                          break;
                      case "select":
                          var d = i._wrapperState.wasMultiple;
                          i._wrapperState.wasMultiple = !!o.multiple;
                          var y = o.value;
                          y != null ? On(i, !!o.multiple, y, !1) : d !== !!o.multiple && (o.defaultValue != null ? On(i, !!o.multiple, o.defaultValue, !0) : On(i, !!o.multiple, o.multiple ? [] : "", !1))
                      }
                      i[ro] = o
                  } catch (m) {
                      _e(e, e.return, m)
                  }
          }
          break;
      case 6:
          if ($t(t, e),
          Ft(e),
          n & 4) {
              if (e.stateNode === null)
                  throw Error(j(162));
              i = e.stateNode,
              o = e.memoizedProps;
              try {
                  i.nodeValue = o
              } catch (m) {
                  _e(e, e.return, m)
              }
          }
          break;
      case 3:
          if ($t(t, e),
          Ft(e),
          n & 4 && r !== null && r.memoizedState.isDehydrated)
              try {
                  Xi(t.containerInfo)
              } catch (m) {
                  _e(e, e.return, m)
              }
          break;
      case 4:
          $t(t, e),
          Ft(e);
          break;
      case 13:
          $t(t, e),
          Ft(e),
          i = e.child,
          i.flags & 8192 && (o = i.memoizedState !== null,
          i.stateNode.isHidden = o,
          !o || i.alternate !== null && i.alternate.memoizedState !== null || (Zc = Re())),
          n & 4 && Hd(e);
          break;
      case 22:
          if (c = r !== null && r.memoizedState !== null,
          e.mode & 1 ? (Ke = (s = Ke) || c,
          $t(t, e),
          Ke = s) : $t(t, e),
          Ft(e),
          n & 8192) {
              if (s = e.memoizedState !== null,
              (e.stateNode.isHidden = s) && !c && e.mode & 1)
                  for (I = e,
                  c = e.child; c !== null; ) {
                      for (f = I = c; I !== null; ) {
                          switch (d = I,
                          y = d.child,
                          d.tag) {
                          case 0:
                          case 11:
                          case 14:
                          case 15:
                              zi(4, d, d.return);
                              break;
                          case 1:
                              Tn(d, d.return);
                              var g = d.stateNode;
                              if (typeof g.componentWillUnmount == "function") {
                                  n = d,
                                  r = d.return;
                                  try {
                                      t = n,
                                      g.props = t.memoizedProps,
                                      g.state = t.memoizedState,
                                      g.componentWillUnmount()
                                  } catch (m) {
                                      _e(n, r, m)
                                  }
                              }
                              break;
                          case 5:
                              Tn(d, d.return);
                              break;
                          case 22:
                              if (d.memoizedState !== null) {
                                  Wd(f);
                                  continue
                              }
                          }
                          y !== null ? (y.return = d,
                          I = y) : Wd(f)
                      }
                      c = c.sibling
                  }
              e: for (c = null,
              f = e; ; ) {
                  if (f.tag === 5) {
                      if (c === null) {
                          c = f;
                          try {
                              i = f.stateNode,
                              s ? (o = i.style,
                              typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = f.stateNode,
                              u = f.memoizedProps.style,
                              l = u != null && u.hasOwnProperty("display") ? u.display : null,
                              a.style.display = tv("display", l))
                          } catch (m) {
                              _e(e, e.return, m)
                          }
                      }
                  } else if (f.tag === 6) {
                      if (c === null)
                          try {
                              f.stateNode.nodeValue = s ? "" : f.memoizedProps
                          } catch (m) {
                              _e(e, e.return, m)
                          }
                  } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                      f.child.return = f,
                      f = f.child;
                      continue
                  }
                  if (f === e)
                      break e;
                  for (; f.sibling === null; ) {
                      if (f.return === null || f.return === e)
                          break e;
                      c === f && (c = null),
                      f = f.return
                  }
                  c === f && (c = null),
                  f.sibling.return = f.return,
                  f = f.sibling
              }
          }
          break;
      case 19:
          $t(t, e),
          Ft(e),
          n & 4 && Hd(e);
          break;
      case 21:
          break;
      default:
          $t(t, e),
          Ft(e)
      }
  }
  function Ft(e) {
      var t = e.flags;
      if (t & 2) {
          try {
              e: {
                  for (var r = e.return; r !== null; ) {
                      if (Tm(r)) {
                          var n = r;
                          break e
                      }
                      r = r.return
                  }
                  throw Error(j(160))
              }
              switch (n.tag) {
              case 5:
                  var i = n.stateNode;
                  n.flags & 32 && (Gi(i, ""),
                  n.flags &= -33);
                  var o = Bd(e);
                  js(e, o, i);
                  break;
              case 3:
              case 4:
                  var l = n.stateNode.containerInfo
                    , a = Bd(e);
                  Os(e, a, l);
                  break;
              default:
                  throw Error(j(161))
              }
          } catch (u) {
              _e(e, e.return, u)
          }
          e.flags &= -3
      }
      t & 4096 && (e.flags &= -4097)
  }
  function U1(e, t, r) {
      I = e,
      Om(e)
  }
  function Om(e, t, r) {
      for (var n = (e.mode & 1) !== 0; I !== null; ) {
          var i = I
            , o = i.child;
          if (i.tag === 22 && n) {
              var l = i.memoizedState !== null || Xo;
              if (!l) {
                  var a = i.alternate
                    , u = a !== null && a.memoizedState !== null || Ke;
                  a = Xo;
                  var s = Ke;
                  if (Xo = l,
                  (Ke = u) && !s)
                      for (I = i; I !== null; )
                          l = I,
                          u = l.child,
                          l.tag === 22 && l.memoizedState !== null ? Kd(i) : u !== null ? (u.return = l,
                          I = u) : Kd(i);
                  for (; o !== null; )
                      I = o,
                      Om(o),
                      o = o.sibling;
                  I = i,
                  Xo = a,
                  Ke = s
              }
              Vd(e)
          } else
              i.subtreeFlags & 8772 && o !== null ? (o.return = i,
              I = o) : Vd(e)
      }
  }
  function Vd(e) {
      for (; I !== null; ) {
          var t = I;
          if (t.flags & 8772) {
              var r = t.alternate;
              try {
                  if (t.flags & 8772)
                      switch (t.tag) {
                      case 0:
                      case 11:
                      case 15:
                          Ke || da(5, t);
                          break;
                      case 1:
                          var n = t.stateNode;
                          if (t.flags & 4 && !Ke)
                              if (r === null)
                                  n.componentDidMount();
                              else {
                                  var i = t.elementType === t.type ? r.memoizedProps : Ot(t.type, r.memoizedProps);
                                  n.componentDidUpdate(i, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                              }
                          var o = t.updateQueue;
                          o !== null && kd(t, o, n);
                          break;
                      case 3:
                          var l = t.updateQueue;
                          if (l !== null) {
                              if (r = null,
                              t.child !== null)
                                  switch (t.child.tag) {
                                  case 5:
                                      r = t.child.stateNode;
                                      break;
                                  case 1:
                                      r = t.child.stateNode
                                  }
                              kd(t, l, r)
                          }
                          break;
                      case 5:
                          var a = t.stateNode;
                          if (r === null && t.flags & 4) {
                              r = a;
                              var u = t.memoizedProps;
                              switch (t.type) {
                              case "button":
                              case "input":
                              case "select":
                              case "textarea":
                                  u.autoFocus && r.focus();
                                  break;
                              case "img":
                                  u.src && (r.src = u.src)
                              }
                          }
                          break;
                      case 6:
                          break;
                      case 4:
                          break;
                      case 12:
                          break;
                      case 13:
                          if (t.memoizedState === null) {
                              var s = t.alternate;
                              if (s !== null) {
                                  var c = s.memoizedState;
                                  if (c !== null) {
                                      var f = c.dehydrated;
                                      f !== null && Xi(f)
                                  }
                              }
                          }
                          break;
                      case 19:
                      case 17:
                      case 21:
                      case 22:
                      case 23:
                      case 25:
                          break;
                      default:
                          throw Error(j(163))
                      }
                  Ke || t.flags & 512 && $s(t)
              } catch (d) {
                  _e(t, t.return, d)
              }
          }
          if (t === e) {
              I = null;
              break
          }
          if (r = t.sibling,
          r !== null) {
              r.return = t.return,
              I = r;
              break
          }
          I = t.return
      }
  }
  function Wd(e) {
      for (; I !== null; ) {
          var t = I;
          if (t === e) {
              I = null;
              break
          }
          var r = t.sibling;
          if (r !== null) {
              r.return = t.return,
              I = r;
              break
          }
          I = t.return
      }
  }
  function Kd(e) {
      for (; I !== null; ) {
          var t = I;
          try {
              switch (t.tag) {
              case 0:
              case 11:
              case 15:
                  var r = t.return;
                  try {
                      da(4, t)
                  } catch (u) {
                      _e(t, r, u)
                  }
                  break;
              case 1:
                  var n = t.stateNode;
                  if (typeof n.componentDidMount == "function") {
                      var i = t.return;
                      try {
                          n.componentDidMount()
                      } catch (u) {
                          _e(t, i, u)
                      }
                  }
                  var o = t.return;
                  try {
                      $s(t)
                  } catch (u) {
                      _e(t, o, u)
                  }
                  break;
              case 5:
                  var l = t.return;
                  try {
                      $s(t)
                  } catch (u) {
                      _e(t, l, u)
                  }
              }
          } catch (u) {
              _e(t, t.return, u)
          }
          if (t === e) {
              I = null;
              break
          }
          var a = t.sibling;
          if (a !== null) {
              a.return = t.return,
              I = a;
              break
          }
          I = t.return
      }
  }
  var B1 = Math.ceil
    , zl = rr.ReactCurrentDispatcher
    , Xc = rr.ReactCurrentOwner
    , Ct = rr.ReactCurrentBatchConfig
    , re = 0
    , Le = null
    , ke = null
    , Be = 0
    , st = 0
    , kn = br(0)
    , je = 0
    , uo = null
    , nn = 0
    , pa = 0
    , Jc = 0
    , Ui = null
    , it = null
    , Zc = 0
    , Hn = 1 / 0
    , Wt = null
    , Ul = !1
    , bs = null
    , Cr = null
    , Jo = !1
    , gr = null
    , Bl = 0
    , Bi = 0
    , Ns = null
    , ml = -1
    , gl = 0;
  function Je() {
      return re & 6 ? Re() : ml !== -1 ? ml : ml = Re()
  }
  function _r(e) {
      return e.mode & 1 ? re & 2 && Be !== 0 ? Be & -Be : _1.transition !== null ? (gl === 0 && (gl = hv()),
      gl) : (e = le,
      e !== 0 || (e = window.event,
      e = e === void 0 ? 16 : xv(e.type)),
      e) : 1
  }
  function Lt(e, t, r, n) {
      if (50 < Bi)
          throw Bi = 0,
          Ns = null,
          Error(j(185));
      mo(e, r, n),
      (!(re & 2) || e !== Le) && (e === Le && (!(re & 2) && (pa |= r),
      je === 4 && hr(e, Be)),
      ut(e, n),
      r === 1 && re === 0 && !(t.mode & 1) && (Hn = Re() + 500,
      sa && Nr()))
  }
  function ut(e, t) {
      var r = e.callbackNode;
      _0(e, t);
      var n = _l(e, e === Le ? Be : 0);
      if (n === 0)
          r !== null && td(r),
          e.callbackNode = null,
          e.callbackPriority = 0;
      else if (t = n & -n,
      e.callbackPriority !== t) {
          if (r != null && td(r),
          t === 1)
              e.tag === 0 ? C1(Gd.bind(null, e)) : zv(Gd.bind(null, e)),
              S1(function() {
                  !(re & 6) && Nr()
              }),
              r = null;
          else {
              switch (vv(n)) {
              case 1:
                  r = _c;
                  break;
              case 4:
                  r = dv;
                  break;
              case 16:
                  r = Cl;
                  break;
              case 536870912:
                  r = pv;
                  break;
              default:
                  r = Cl
              }
              r = Am(r, jm.bind(null, e))
          }
          e.callbackPriority = t,
          e.callbackNode = r
      }
  }
  function jm(e, t) {
      if (ml = -1,
      gl = 0,
      re & 6)
          throw Error(j(327));
      var r = e.callbackNode;
      if (Ln() && e.callbackNode !== r)
          return null;
      var n = _l(e, e === Le ? Be : 0);
      if (n === 0)
          return null;
      if (n & 30 || n & e.expiredLanes || t)
          t = Hl(e, n);
      else {
          t = n;
          var i = re;
          re |= 2;
          var o = Nm();
          (Le !== e || Be !== t) && (Wt = null,
          Hn = Re() + 500,
          Yr(e, t));
          do
              try {
                  W1();
                  break
              } catch (a) {
                  bm(e, a)
              }
          while (!0);
          Ac(),
          zl.current = o,
          re = i,
          ke !== null ? t = 0 : (Le = null,
          Be = 0,
          t = je)
      }
      if (t !== 0) {
          if (t === 2 && (i = ls(e),
          i !== 0 && (n = i,
          t = Ms(e, i))),
          t === 1)
              throw r = uo,
              Yr(e, 0),
              hr(e, n),
              ut(e, Re()),
              r;
          if (t === 6)
              hr(e, n);
          else {
              if (i = e.current.alternate,
              !(n & 30) && !H1(i) && (t = Hl(e, n),
              t === 2 && (o = ls(e),
              o !== 0 && (n = o,
              t = Ms(e, o))),
              t === 1))
                  throw r = uo,
                  Yr(e, 0),
                  hr(e, n),
                  ut(e, Re()),
                  r;
              switch (e.finishedWork = i,
              e.finishedLanes = n,
              t) {
              case 0:
              case 1:
                  throw Error(j(345));
              case 2:
                  Ar(e, it, Wt);
                  break;
              case 3:
                  if (hr(e, n),
                  (n & 130023424) === n && (t = Zc + 500 - Re(),
                  10 < t)) {
                      if (_l(e, 0) !== 0)
                          break;
                      if (i = e.suspendedLanes,
                      (i & n) !== n) {
                          Je(),
                          e.pingedLanes |= e.suspendedLanes & i;
                          break
                      }
                      e.timeoutHandle = hs(Ar.bind(null, e, it, Wt), t);
                      break
                  }
                  Ar(e, it, Wt);
                  break;
              case 4:
                  if (hr(e, n),
                  (n & 4194240) === n)
                      break;
                  for (t = e.eventTimes,
                  i = -1; 0 < n; ) {
                      var l = 31 - Mt(n);
                      o = 1 << l,
                      l = t[l],
                      l > i && (i = l),
                      n &= ~o
                  }
                  if (n = i,
                  n = Re() - n,
                  n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * B1(n / 1960)) - n,
                  10 < n) {
                      e.timeoutHandle = hs(Ar.bind(null, e, it, Wt), n);
                      break
                  }
                  Ar(e, it, Wt);
                  break;
              case 5:
                  Ar(e, it, Wt);
                  break;
              default:
                  throw Error(j(329))
              }
          }
      }
      return ut(e, Re()),
      e.callbackNode === r ? jm.bind(null, e) : null
  }
  function Ms(e, t) {
      var r = Ui;
      return e.current.memoizedState.isDehydrated && (Yr(e, t).flags |= 256),
      e = Hl(e, t),
      e !== 2 && (t = it,
      it = r,
      t !== null && Ls(t)),
      e
  }
  function Ls(e) {
      it === null ? it = e : it.push.apply(it, e)
  }
  function H1(e) {
      for (var t = e; ; ) {
          if (t.flags & 16384) {
              var r = t.updateQueue;
              if (r !== null && (r = r.stores,
              r !== null))
                  for (var n = 0; n < r.length; n++) {
                      var i = r[n]
                        , o = i.getSnapshot;
                      i = i.value;
                      try {
                          if (!It(o(), i))
                              return !1
                      } catch {
                          return !1
                      }
                  }
          }
          if (r = t.child,
          t.subtreeFlags & 16384 && r !== null)
              r.return = t,
              t = r;
          else {
              if (t === e)
                  break;
              for (; t.sibling === null; ) {
                  if (t.return === null || t.return === e)
                      return !0;
                  t = t.return
              }
              t.sibling.return = t.return,
              t = t.sibling
          }
      }
      return !0
  }
  function hr(e, t) {
      for (t &= ~Jc,
      t &= ~pa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes; 0 < t; ) {
          var r = 31 - Mt(t)
            , n = 1 << r;
          e[r] = -1,
          t &= ~n
      }
  }
  function Gd(e) {
      if (re & 6)
          throw Error(j(327));
      Ln();
      var t = _l(e, 0);
      if (!(t & 1))
          return ut(e, Re()),
          null;
      var r = Hl(e, t);
      if (e.tag !== 0 && r === 2) {
          var n = ls(e);
          n !== 0 && (t = n,
          r = Ms(e, n))
      }
      if (r === 1)
          throw r = uo,
          Yr(e, 0),
          hr(e, t),
          ut(e, Re()),
          r;
      if (r === 6)
          throw Error(j(345));
      return e.finishedWork = e.current.alternate,
      e.finishedLanes = t,
      Ar(e, it, Wt),
      ut(e, Re()),
      null
  }
  function ef(e, t) {
      var r = re;
      re |= 1;
      try {
          return e(t)
      } finally {
          re = r,
          re === 0 && (Hn = Re() + 500,
          sa && Nr())
      }
  }
  function on(e) {
      gr !== null && gr.tag === 0 && !(re & 6) && Ln();
      var t = re;
      re |= 1;
      var r = Ct.transition
        , n = le;
      try {
          if (Ct.transition = null,
          le = 1,
          e)
              return e()
      } finally {
          le = n,
          Ct.transition = r,
          re = t,
          !(re & 6) && Nr()
      }
  }
  function tf() {
      st = kn.current,
      de(kn)
  }
  function Yr(e, t) {
      e.finishedWork = null,
      e.finishedLanes = 0;
      var r = e.timeoutHandle;
      if (r !== -1 && (e.timeoutHandle = -1,
      w1(r)),
      ke !== null)
          for (r = ke.return; r !== null; ) {
              var n = r;
              switch (Lc(n),
              n.tag) {
              case 1:
                  n = n.type.childContextTypes,
                  n != null && Ol();
                  break;
              case 3:
                  Un(),
                  de(lt),
                  de(Ye),
                  Vc();
                  break;
              case 5:
                  Hc(n);
                  break;
              case 4:
                  Un();
                  break;
              case 13:
                  de(xe);
                  break;
              case 19:
                  de(xe);
                  break;
              case 10:
                  Fc(n.type._context);
                  break;
              case 22:
              case 23:
                  tf()
              }
              r = r.return
          }
      if (Le = e,
      ke = e = Rr(e.current, null),
      Be = st = t,
      je = 0,
      uo = null,
      Jc = pa = nn = 0,
      it = Ui = null,
      Hr !== null) {
          for (t = 0; t < Hr.length; t++)
              if (r = Hr[t],
              n = r.interleaved,
              n !== null) {
                  r.interleaved = null;
                  var i = n.next
                    , o = r.pending;
                  if (o !== null) {
                      var l = o.next;
                      o.next = i,
                      n.next = l
                  }
                  r.pending = n
              }
          Hr = null
      }
      return e
  }
  function bm(e, t) {
      do {
          var r = ke;
          try {
              if (Ac(),
              pl.current = Fl,
              Al) {
                  for (var n = Pe.memoizedState; n !== null; ) {
                      var i = n.queue;
                      i !== null && (i.pending = null),
                      n = n.next
                  }
                  Al = !1
              }
              if (rn = 0,
              Me = $e = Pe = null,
              Fi = !1,
              oo = 0,
              Xc.current = null,
              r === null || r.return === null) {
                  je = 1,
                  uo = t,
                  ke = null;
                  break
              }
              e: {
                  var o = e
                    , l = r.return
                    , a = r
                    , u = t;
                  if (t = Be,
                  a.flags |= 32768,
                  u !== null && typeof u == "object" && typeof u.then == "function") {
                      var s = u
                        , c = a
                        , f = c.tag;
                      if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                          var d = c.alternate;
                          d ? (c.updateQueue = d.updateQueue,
                          c.memoizedState = d.memoizedState,
                          c.lanes = d.lanes) : (c.updateQueue = null,
                          c.memoizedState = null)
                      }
                      var y = Md(l);
                      if (y !== null) {
                          y.flags &= -257,
                          Ld(y, l, a, o, t),
                          y.mode & 1 && Nd(o, s, t),
                          t = y,
                          u = s;
                          var g = t.updateQueue;
                          if (g === null) {
                              var m = new Set;
                              m.add(u),
                              t.updateQueue = m
                          } else
                              g.add(u);
                          break e
                      } else {
                          if (!(t & 1)) {
                              Nd(o, s, t),
                              rf();
                              break e
                          }
                          u = Error(j(426))
                      }
                  } else if (ge && a.mode & 1) {
                      var E = Md(l);
                      if (E !== null) {
                          !(E.flags & 65536) && (E.flags |= 256),
                          Ld(E, l, a, o, t),
                          Ic(Bn(u, a));
                          break e
                      }
                  }
                  o = u = Bn(u, a),
                  je !== 4 && (je = 2),
                  Ui === null ? Ui = [o] : Ui.push(o),
                  o = l;
                  do {
                      switch (o.tag) {
                      case 3:
                          o.flags |= 65536,
                          t &= -t,
                          o.lanes |= t;
                          var h = vm(o, u, t);
                          Td(o, h);
                          break e;
                      case 1:
                          a = u;
                          var p = o.type
                            , v = o.stateNode;
                          if (!(o.flags & 128) && (typeof p.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Cr === null || !Cr.has(v)))) {
                              o.flags |= 65536,
                              t &= -t,
                              o.lanes |= t;
                              var C = mm(o, a, t);
                              Td(o, C);
                              break e
                          }
                      }
                      o = o.return
                  } while (o !== null)
              }
              Lm(r)
          } catch (k) {
              t = k,
              ke === r && r !== null && (ke = r = r.return);
              continue
          }
          break
      } while (!0)
  }
  function Nm() {
      var e = zl.current;
      return zl.current = Fl,
      e === null ? Fl : e
  }
  function rf() {
      (je === 0 || je === 3 || je === 2) && (je = 4),
      Le === null || !(nn & 268435455) && !(pa & 268435455) || hr(Le, Be)
  }
  function Hl(e, t) {
      var r = re;
      re |= 2;
      var n = Nm();
      (Le !== e || Be !== t) && (Wt = null,
      Yr(e, t));
      do
          try {
              V1();
              break
          } catch (i) {
              bm(e, i)
          }
      while (!0);
      if (Ac(),
      re = r,
      zl.current = n,
      ke !== null)
          throw Error(j(261));
      return Le = null,
      Be = 0,
      je
  }
  function V1() {
      for (; ke !== null; )
          Mm(ke)
  }
  function W1() {
      for (; ke !== null && !m0(); )
          Mm(ke)
  }
  function Mm(e) {
      var t = Dm(e.alternate, e, st);
      e.memoizedProps = e.pendingProps,
      t === null ? Lm(e) : ke = t,
      Xc.current = null
  }
  function Lm(e) {
      var t = e;
      do {
          var r = t.alternate;
          if (e = t.return,
          t.flags & 32768) {
              if (r = A1(r, t),
              r !== null) {
                  r.flags &= 32767,
                  ke = r;
                  return
              }
              if (e !== null)
                  e.flags |= 32768,
                  e.subtreeFlags = 0,
                  e.deletions = null;
              else {
                  je = 6,
                  ke = null;
                  return
              }
          } else if (r = D1(r, t, st),
          r !== null) {
              ke = r;
              return
          }
          if (t = t.sibling,
          t !== null) {
              ke = t;
              return
          }
          ke = t = e
      } while (t !== null);
      je === 0 && (je = 5)
  }
  function Ar(e, t, r) {
      var n = le
        , i = Ct.transition;
      try {
          Ct.transition = null,
          le = 1,
          K1(e, t, r, n)
      } finally {
          Ct.transition = i,
          le = n
      }
      return null
  }
  function K1(e, t, r, n) {
      do
          Ln();
      while (gr !== null);
      if (re & 6)
          throw Error(j(327));
      r = e.finishedWork;
      var i = e.finishedLanes;
      if (r === null)
          return null;
      if (e.finishedWork = null,
      e.finishedLanes = 0,
      r === e.current)
          throw Error(j(177));
      e.callbackNode = null,
      e.callbackPriority = 0;
      var o = r.lanes | r.childLanes;
      if (R0(e, o),
      e === Le && (ke = Le = null,
      Be = 0),
      !(r.subtreeFlags & 2064) && !(r.flags & 2064) || Jo || (Jo = !0,
      Am(Cl, function() {
          return Ln(),
          null
      })),
      o = (r.flags & 15990) !== 0,
      r.subtreeFlags & 15990 || o) {
          o = Ct.transition,
          Ct.transition = null;
          var l = le;
          le = 1;
          var a = re;
          re |= 4,
          Xc.current = null,
          z1(e, r),
          $m(r, e),
          d1(ds),
          Rl = !!fs,
          ds = fs = null,
          e.current = r,
          U1(r),
          g0(),
          re = a,
          le = l,
          Ct.transition = o
      } else
          e.current = r;
      if (Jo && (Jo = !1,
      gr = e,
      Bl = i),
      o = e.pendingLanes,
      o === 0 && (Cr = null),
      S0(r.stateNode),
      ut(e, Re()),
      t !== null)
          for (n = e.onRecoverableError,
          r = 0; r < t.length; r++)
              i = t[r],
              n(i.value, {
                  componentStack: i.stack,
                  digest: i.digest
              });
      if (Ul)
          throw Ul = !1,
          e = bs,
          bs = null,
          e;
      return Bl & 1 && e.tag !== 0 && Ln(),
      o = e.pendingLanes,
      o & 1 ? e === Ns ? Bi++ : (Bi = 0,
      Ns = e) : Bi = 0,
      Nr(),
      null
  }
  function Ln() {
      if (gr !== null) {
          var e = vv(Bl)
            , t = Ct.transition
            , r = le;
          try {
              if (Ct.transition = null,
              le = 16 > e ? 16 : e,
              gr === null)
                  var n = !1;
              else {
                  if (e = gr,
                  gr = null,
                  Bl = 0,
                  re & 6)
                      throw Error(j(331));
                  var i = re;
                  for (re |= 4,
                  I = e.current; I !== null; ) {
                      var o = I
                        , l = o.child;
                      if (I.flags & 16) {
                          var a = o.deletions;
                          if (a !== null) {
                              for (var u = 0; u < a.length; u++) {
                                  var s = a[u];
                                  for (I = s; I !== null; ) {
                                      var c = I;
                                      switch (c.tag) {
                                      case 0:
                                      case 11:
                                      case 15:
                                          zi(8, c, o)
                                      }
                                      var f = c.child;
                                      if (f !== null)
                                          f.return = c,
                                          I = f;
                                      else
                                          for (; I !== null; ) {
                                              c = I;
                                              var d = c.sibling
                                                , y = c.return;
                                              if (Rm(c),
                                              c === s) {
                                                  I = null;
                                                  break
                                              }
                                              if (d !== null) {
                                                  d.return = y,
                                                  I = d;
                                                  break
                                              }
                                              I = y
                                          }
                                  }
                              }
                              var g = o.alternate;
                              if (g !== null) {
                                  var m = g.child;
                                  if (m !== null) {
                                      g.child = null;
                                      do {
                                          var E = m.sibling;
                                          m.sibling = null,
                                          m = E
                                      } while (m !== null)
                                  }
                              }
                              I = o
                          }
                      }
                      if (o.subtreeFlags & 2064 && l !== null)
                          l.return = o,
                          I = l;
                      else
                          e: for (; I !== null; ) {
                              if (o = I,
                              o.flags & 2048)
                                  switch (o.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                      zi(9, o, o.return)
                                  }
                              var h = o.sibling;
                              if (h !== null) {
                                  h.return = o.return,
                                  I = h;
                                  break e
                              }
                              I = o.return
                          }
                  }
                  var p = e.current;
                  for (I = p; I !== null; ) {
                      l = I;
                      var v = l.child;
                      if (l.subtreeFlags & 2064 && v !== null)
                          v.return = l,
                          I = v;
                      else
                          e: for (l = p; I !== null; ) {
                              if (a = I,
                              a.flags & 2048)
                                  try {
                                      switch (a.tag) {
                                      case 0:
                                      case 11:
                                      case 15:
                                          da(9, a)
                                      }
                                  } catch (k) {
                                      _e(a, a.return, k)
                                  }
                              if (a === l) {
                                  I = null;
                                  break e
                              }
                              var C = a.sibling;
                              if (C !== null) {
                                  C.return = a.return,
                                  I = C;
                                  break e
                              }
                              I = a.return
                          }
                  }
                  if (re = i,
                  Nr(),
                  Bt && typeof Bt.onPostCommitFiberRoot == "function")
                      try {
                          Bt.onPostCommitFiberRoot(ia, e)
                      } catch {}
                  n = !0
              }
              return n
          } finally {
              le = r,
              Ct.transition = t
          }
      }
      return !1
  }
  function Qd(e, t, r) {
      t = Bn(r, t),
      t = vm(e, t, 1),
      e = Pr(e, t, 1),
      t = Je(),
      e !== null && (mo(e, 1, t),
      ut(e, t))
  }
  function _e(e, t, r) {
      if (e.tag === 3)
          Qd(e, e, r);
      else
          for (; t !== null; ) {
              if (t.tag === 3) {
                  Qd(t, e, r);
                  break
              } else if (t.tag === 1) {
                  var n = t.stateNode;
                  if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Cr === null || !Cr.has(n))) {
                      e = Bn(r, e),
                      e = mm(t, e, 1),
                      t = Pr(t, e, 1),
                      e = Je(),
                      t !== null && (mo(t, 1, e),
                      ut(t, e));
                      break
                  }
              }
              t = t.return
          }
  }
  function G1(e, t, r) {
      var n = e.pingCache;
      n !== null && n.delete(t),
      t = Je(),
      e.pingedLanes |= e.suspendedLanes & r,
      Le === e && (Be & r) === r && (je === 4 || je === 3 && (Be & 130023424) === Be && 500 > Re() - Zc ? Yr(e, 0) : Jc |= r),
      ut(e, t)
  }
  function Im(e, t) {
      t === 0 && (e.mode & 1 ? (t = Bo,
      Bo <<= 1,
      !(Bo & 130023424) && (Bo = 4194304)) : t = 1);
      var r = Je();
      e = er(e, t),
      e !== null && (mo(e, t, r),
      ut(e, r))
  }
  function Q1(e) {
      var t = e.memoizedState
        , r = 0;
      t !== null && (r = t.retryLane),
      Im(e, r)
  }
  function Y1(e, t) {
      var r = 0;
      switch (e.tag) {
      case 13:
          var n = e.stateNode
            , i = e.memoizedState;
          i !== null && (r = i.retryLane);
          break;
      case 19:
          n = e.stateNode;
          break;
      default:
          throw Error(j(314))
      }
      n !== null && n.delete(t),
      Im(e, r)
  }
  var Dm;
  Dm = function(e, t, r) {
      if (e !== null)
          if (e.memoizedProps !== t.pendingProps || lt.current)
              ot = !0;
          else {
              if (!(e.lanes & r) && !(t.flags & 128))
                  return ot = !1,
                  I1(e, t, r);
              ot = !!(e.flags & 131072)
          }
      else
          ot = !1,
          ge && t.flags & 1048576 && Uv(t, Nl, t.index);
      switch (t.lanes = 0,
      t.tag) {
      case 2:
          var n = t.type;
          vl(e, t),
          e = t.pendingProps;
          var i = An(t, Ye.current);
          Mn(t, r),
          i = Kc(null, t, n, e, i, r);
          var o = Gc();
          return t.flags |= 1,
          typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
          t.memoizedState = null,
          t.updateQueue = null,
          at(n) ? (o = !0,
          jl(t)) : o = !1,
          t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
          Uc(t),
          i.updater = fa,
          t.stateNode = i,
          i._reactInternals = t,
          xs(t, n, e, r),
          t = Cs(null, t, n, !0, o, r)) : (t.tag = 0,
          ge && o && Mc(t),
          Xe(null, t, i, r),
          t = t.child),
          t;
      case 16:
          n = t.elementType;
          e: {
              switch (vl(e, t),
              e = t.pendingProps,
              i = n._init,
              n = i(n._payload),
              t.type = n,
              i = t.tag = X1(n),
              e = Ot(n, e),
              i) {
              case 0:
                  t = Ps(null, t, n, e, r);
                  break e;
              case 1:
                  t = Ad(null, t, n, e, r);
                  break e;
              case 11:
                  t = Id(null, t, n, e, r);
                  break e;
              case 14:
                  t = Dd(null, t, n, Ot(n.type, e), r);
                  break e
              }
              throw Error(j(306, n, ""))
          }
          return t;
      case 0:
          return n = t.type,
          i = t.pendingProps,
          i = t.elementType === n ? i : Ot(n, i),
          Ps(e, t, n, i, r);
      case 1:
          return n = t.type,
          i = t.pendingProps,
          i = t.elementType === n ? i : Ot(n, i),
          Ad(e, t, n, i, r);
      case 3:
          e: {
              if (Sm(t),
              e === null)
                  throw Error(j(387));
              n = t.pendingProps,
              o = t.memoizedState,
              i = o.element,
              Gv(e, t),
              Il(t, n, null, r);
              var l = t.memoizedState;
              if (n = l.element,
              o.isDehydrated)
                  if (o = {
                      element: n,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions
                  },
                  t.updateQueue.baseState = o,
                  t.memoizedState = o,
                  t.flags & 256) {
                      i = Bn(Error(j(423)), t),
                      t = Fd(e, t, n, r, i);
                      break e
                  } else if (n !== i) {
                      i = Bn(Error(j(424)), t),
                      t = Fd(e, t, n, r, i);
                      break e
                  } else
                      for (ft = Er(t.stateNode.containerInfo.firstChild),
                      dt = t,
                      ge = !0,
                      Nt = null,
                      r = Wv(t, null, n, r),
                      t.child = r; r; )
                          r.flags = r.flags & -3 | 4096,
                          r = r.sibling;
              else {
                  if (Fn(),
                  n === i) {
                      t = tr(e, t, r);
                      break e
                  }
                  Xe(e, t, n, r)
              }
              t = t.child
          }
          return t;
      case 5:
          return Qv(t),
          e === null && ys(t),
          n = t.type,
          i = t.pendingProps,
          o = e !== null ? e.memoizedProps : null,
          l = i.children,
          ps(n, i) ? l = null : o !== null && ps(n, o) && (t.flags |= 32),
          wm(e, t),
          Xe(e, t, l, r),
          t.child;
      case 6:
          return e === null && ys(t),
          null;
      case 13:
          return xm(e, t, r);
      case 4:
          return Bc(t, t.stateNode.containerInfo),
          n = t.pendingProps,
          e === null ? t.child = zn(t, null, n, r) : Xe(e, t, n, r),
          t.child;
      case 11:
          return n = t.type,
          i = t.pendingProps,
          i = t.elementType === n ? i : Ot(n, i),
          Id(e, t, n, i, r);
      case 7:
          return Xe(e, t, t.pendingProps, r),
          t.child;
      case 8:
          return Xe(e, t, t.pendingProps.children, r),
          t.child;
      case 12:
          return Xe(e, t, t.pendingProps.children, r),
          t.child;
      case 10:
          e: {
              if (n = t.type._context,
              i = t.pendingProps,
              o = t.memoizedProps,
              l = i.value,
              ue(Ml, n._currentValue),
              n._currentValue = l,
              o !== null)
                  if (It(o.value, l)) {
                      if (o.children === i.children && !lt.current) {
                          t = tr(e, t, r);
                          break e
                      }
                  } else
                      for (o = t.child,
                      o !== null && (o.return = t); o !== null; ) {
                          var a = o.dependencies;
                          if (a !== null) {
                              l = o.child;
                              for (var u = a.firstContext; u !== null; ) {
                                  if (u.context === n) {
                                      if (o.tag === 1) {
                                          u = Yt(-1, r & -r),
                                          u.tag = 2;
                                          var s = o.updateQueue;
                                          if (s !== null) {
                                              s = s.shared;
                                              var c = s.pending;
                                              c === null ? u.next = u : (u.next = c.next,
                                              c.next = u),
                                              s.pending = u
                                          }
                                      }
                                      o.lanes |= r,
                                      u = o.alternate,
                                      u !== null && (u.lanes |= r),
                                      ws(o.return, r, t),
                                      a.lanes |= r;
                                      break
                                  }
                                  u = u.next
                              }
                          } else if (o.tag === 10)
                              l = o.type === t.type ? null : o.child;
                          else if (o.tag === 18) {
                              if (l = o.return,
                              l === null)
                                  throw Error(j(341));
                              l.lanes |= r,
                              a = l.alternate,
                              a !== null && (a.lanes |= r),
                              ws(l, r, t),
                              l = o.sibling
                          } else
                              l = o.child;
                          if (l !== null)
                              l.return = o;
                          else
                              for (l = o; l !== null; ) {
                                  if (l === t) {
                                      l = null;
                                      break
                                  }
                                  if (o = l.sibling,
                                  o !== null) {
                                      o.return = l.return,
                                      l = o;
                                      break
                                  }
                                  l = l.return
                              }
                          o = l
                      }
              Xe(e, t, i.children, r),
              t = t.child
          }
          return t;
      case 9:
          return i = t.type,
          n = t.pendingProps.children,
          Mn(t, r),
          i = _t(i),
          n = n(i),
          t.flags |= 1,
          Xe(e, t, n, r),
          t.child;
      case 14:
          return n = t.type,
          i = Ot(n, t.pendingProps),
          i = Ot(n.type, i),
          Dd(e, t, n, i, r);
      case 15:
          return gm(e, t, t.type, t.pendingProps, r);
      case 17:
          return n = t.type,
          i = t.pendingProps,
          i = t.elementType === n ? i : Ot(n, i),
          vl(e, t),
          t.tag = 1,
          at(n) ? (e = !0,
          jl(t)) : e = !1,
          Mn(t, r),
          hm(t, n, i),
          xs(t, n, i, r),
          Cs(null, t, n, !0, e, r);
      case 19:
          return Em(e, t, r);
      case 22:
          return ym(e, t, r)
      }
      throw Error(j(156, t.tag))
  }
  ;
  function Am(e, t) {
      return fv(e, t)
  }
  function q1(e, t, r, n) {
      this.tag = e,
      this.key = r,
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
      this.index = 0,
      this.ref = null,
      this.pendingProps = t,
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
      this.mode = n,
      this.subtreeFlags = this.flags = 0,
      this.deletions = null,
      this.childLanes = this.lanes = 0,
      this.alternate = null
  }
  function Pt(e, t, r, n) {
      return new q1(e,t,r,n)
  }
  function nf(e) {
      return e = e.prototype,
      !(!e || !e.isReactComponent)
  }
  function X1(e) {
      if (typeof e == "function")
          return nf(e) ? 1 : 0;
      if (e != null) {
          if (e = e.$$typeof,
          e === Ec)
              return 11;
          if (e === Pc)
              return 14
      }
      return 2
  }
  function Rr(e, t) {
      var r = e.alternate;
      return r === null ? (r = Pt(e.tag, t, e.key, e.mode),
      r.elementType = e.elementType,
      r.type = e.type,
      r.stateNode = e.stateNode,
      r.alternate = e,
      e.alternate = r) : (r.pendingProps = t,
      r.type = e.type,
      r.flags = 0,
      r.subtreeFlags = 0,
      r.deletions = null),
      r.flags = e.flags & 14680064,
      r.childLanes = e.childLanes,
      r.lanes = e.lanes,
      r.child = e.child,
      r.memoizedProps = e.memoizedProps,
      r.memoizedState = e.memoizedState,
      r.updateQueue = e.updateQueue,
      t = e.dependencies,
      r.dependencies = t === null ? null : {
          lanes: t.lanes,
          firstContext: t.firstContext
      },
      r.sibling = e.sibling,
      r.index = e.index,
      r.ref = e.ref,
      r
  }
  function yl(e, t, r, n, i, o) {
      var l = 2;
      if (n = e,
      typeof e == "function")
          nf(e) && (l = 1);
      else if (typeof e == "string")
          l = 5;
      else
          e: switch (e) {
          case yn:
              return qr(r.children, i, o, t);
          case xc:
              l = 8,
              i |= 8;
              break;
          case Wu:
              return e = Pt(12, r, t, i | 2),
              e.elementType = Wu,
              e.lanes = o,
              e;
          case Ku:
              return e = Pt(13, r, t, i),
              e.elementType = Ku,
              e.lanes = o,
              e;
          case Gu:
              return e = Pt(19, r, t, i),
              e.elementType = Gu,
              e.lanes = o,
              e;
          case Qh:
              return ha(r, i, o, t);
          default:
              if (typeof e == "object" && e !== null)
                  switch (e.$$typeof) {
                  case Kh:
                      l = 10;
                      break e;
                  case Gh:
                      l = 9;
                      break e;
                  case Ec:
                      l = 11;
                      break e;
                  case Pc:
                      l = 14;
                      break e;
                  case fr:
                      l = 16,
                      n = null;
                      break e
                  }
              throw Error(j(130, e == null ? e : typeof e, ""))
          }
      return t = Pt(l, r, t, i),
      t.elementType = e,
      t.type = n,
      t.lanes = o,
      t
  }
  function qr(e, t, r, n) {
      return e = Pt(7, e, n, t),
      e.lanes = r,
      e
  }
  function ha(e, t, r, n) {
      return e = Pt(22, e, n, t),
      e.elementType = Qh,
      e.lanes = r,
      e.stateNode = {
          isHidden: !1
      },
      e
  }
  function vu(e, t, r) {
      return e = Pt(6, e, null, t),
      e.lanes = r,
      e
  }
  function mu(e, t, r) {
      return t = Pt(4, e.children !== null ? e.children : [], e.key, t),
      t.lanes = r,
      t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation
      },
      t
  }
  function J1(e, t, r, n, i) {
      this.tag = t,
      this.containerInfo = e,
      this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
      this.timeoutHandle = -1,
      this.callbackNode = this.pendingContext = this.context = null,
      this.callbackPriority = 0,
      this.eventTimes = qa(0),
      this.expirationTimes = qa(-1),
      this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
      this.entanglements = qa(0),
      this.identifierPrefix = n,
      this.onRecoverableError = i,
      this.mutableSourceEagerHydrationData = null
  }
  function of(e, t, r, n, i, o, l, a, u) {
      return e = new J1(e,t,r,a,u),
      t === 1 ? (t = 1,
      o === !0 && (t |= 8)) : t = 0,
      o = Pt(3, null, null, t),
      e.current = o,
      o.stateNode = e,
      o.memoizedState = {
          element: n,
          isDehydrated: r,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null
      },
      Uc(o),
      e
  }
  function Z1(e, t, r) {
      var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
          $$typeof: gn,
          key: n == null ? null : "" + n,
          children: e,
          containerInfo: t,
          implementation: r
      }
  }
  function Fm(e) {
      if (!e)
          return $r;
      e = e._reactInternals;
      e: {
          if (an(e) !== e || e.tag !== 1)
              throw Error(j(170));
          var t = e;
          do {
              switch (t.tag) {
              case 3:
                  t = t.stateNode.context;
                  break e;
              case 1:
                  if (at(t.type)) {
                      t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                      break e
                  }
              }
              t = t.return
          } while (t !== null);
          throw Error(j(171))
      }
      if (e.tag === 1) {
          var r = e.type;
          if (at(r))
              return Fv(e, r, t)
      }
      return t
  }
  function zm(e, t, r, n, i, o, l, a, u) {
      return e = of(r, n, !0, e, i, o, l, a, u),
      e.context = Fm(null),
      r = e.current,
      n = Je(),
      i = _r(r),
      o = Yt(n, i),
      o.callback = t ?? null,
      Pr(r, o, i),
      e.current.lanes = i,
      mo(e, i, n),
      ut(e, n),
      e
  }
  function va(e, t, r, n) {
      var i = t.current
        , o = Je()
        , l = _r(i);
      return r = Fm(r),
      t.context === null ? t.context = r : t.pendingContext = r,
      t = Yt(o, l),
      t.payload = {
          element: e
      },
      n = n === void 0 ? null : n,
      n !== null && (t.callback = n),
      e = Pr(i, t, l),
      e !== null && (Lt(e, i, l, o),
      dl(e, i, l)),
      l
  }
  function Vl(e) {
      if (e = e.current,
      !e.child)
          return null;
      switch (e.child.tag) {
      case 5:
          return e.child.stateNode;
      default:
          return e.child.stateNode
      }
  }
  function Yd(e, t) {
      if (e = e.memoizedState,
      e !== null && e.dehydrated !== null) {
          var r = e.retryLane;
          e.retryLane = r !== 0 && r < t ? r : t
      }
  }
  function lf(e, t) {
      Yd(e, t),
      (e = e.alternate) && Yd(e, t)
  }
  function ew() {
      return null
  }
  var Um = typeof reportError == "function" ? reportError : function(e) {
      console.error(e)
  }
  ;
  function af(e) {
      this._internalRoot = e
  }
  ma.prototype.render = af.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
          throw Error(j(409));
      va(e, t, null, null)
  }
  ;
  ma.prototype.unmount = af.prototype.unmount = function() {
      var e = this._internalRoot;
      if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          on(function() {
              va(null, e, null, null)
          }),
          t[Zt] = null
      }
  }
  ;
  function ma(e) {
      this._internalRoot = e
  }
  ma.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
          var t = yv();
          e = {
              blockedOn: null,
              target: e,
              priority: t
          };
          for (var r = 0; r < pr.length && t !== 0 && t < pr[r].priority; r++)
              ;
          pr.splice(r, 0, e),
          r === 0 && Sv(e)
      }
  }
  ;
  function uf(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
  }
  function ga(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  }
  function qd() {}
  function tw(e, t, r, n, i) {
      if (i) {
          if (typeof n == "function") {
              var o = n;
              n = function() {
                  var s = Vl(l);
                  o.call(s)
              }
          }
          var l = zm(t, n, e, 0, null, !1, !1, "", qd);
          return e._reactRootContainer = l,
          e[Zt] = l.current,
          eo(e.nodeType === 8 ? e.parentNode : e),
          on(),
          l
      }
      for (; i = e.lastChild; )
          e.removeChild(i);
      if (typeof n == "function") {
          var a = n;
          n = function() {
              var s = Vl(u);
              a.call(s)
          }
      }
      var u = of(e, 0, !1, null, null, !1, !1, "", qd);
      return e._reactRootContainer = u,
      e[Zt] = u.current,
      eo(e.nodeType === 8 ? e.parentNode : e),
      on(function() {
          va(t, u, r, n)
      }),
      u
  }
  function ya(e, t, r, n, i) {
      var o = r._reactRootContainer;
      if (o) {
          var l = o;
          if (typeof i == "function") {
              var a = i;
              i = function() {
                  var u = Vl(l);
                  a.call(u)
              }
          }
          va(t, l, e, i)
      } else
          l = tw(r, t, e, i, n);
      return Vl(l)
  }
  mv = function(e) {
      switch (e.tag) {
      case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
              var r = $i(t.pendingLanes);
              r !== 0 && (Rc(t, r | 1),
              ut(t, Re()),
              !(re & 6) && (Hn = Re() + 500,
              Nr()))
          }
          break;
      case 13:
          on(function() {
              var n = er(e, 1);
              if (n !== null) {
                  var i = Je();
                  Lt(n, e, 1, i)
              }
          }),
          lf(e, 1)
      }
  }
  ;
  Tc = function(e) {
      if (e.tag === 13) {
          var t = er(e, 134217728);
          if (t !== null) {
              var r = Je();
              Lt(t, e, 134217728, r)
          }
          lf(e, 134217728)
      }
  }
  ;
  gv = function(e) {
      if (e.tag === 13) {
          var t = _r(e)
            , r = er(e, t);
          if (r !== null) {
              var n = Je();
              Lt(r, e, t, n)
          }
          lf(e, t)
      }
  }
  ;
  yv = function() {
      return le
  }
  ;
  wv = function(e, t) {
      var r = le;
      try {
          return le = e,
          t()
      } finally {
          le = r
      }
  }
  ;
  ns = function(e, t, r) {
      switch (t) {
      case "input":
          if (qu(e, r),
          t = r.name,
          r.type === "radio" && t != null) {
              for (r = e; r.parentNode; )
                  r = r.parentNode;
              for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
              t = 0; t < r.length; t++) {
                  var n = r[t];
                  if (n !== e && n.form === e.form) {
                      var i = ua(n);
                      if (!i)
                          throw Error(j(90));
                      qh(n),
                      qu(n, i)
                  }
              }
          }
          break;
      case "textarea":
          Jh(e, r);
          break;
      case "select":
          t = r.value,
          t != null && On(e, !!r.multiple, t, !1)
      }
  }
  ;
  ov = ef;
  lv = on;
  var rw = {
      usingClientEntryPoint: !1,
      Events: [yo, En, ua, nv, iv, ef]
  }
    , yi = {
      findFiberByHostInstance: Br,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom"
  }
    , nw = {
      bundleType: yi.bundleType,
      version: yi.version,
      rendererPackageName: yi.rendererPackageName,
      rendererConfig: yi.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: rr.ReactCurrentDispatcher,
      findHostInstanceByFiber: function(e) {
          return e = sv(e),
          e === null ? null : e.stateNode
      },
      findFiberByHostInstance: yi.findFiberByHostInstance || ew,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var Zo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Zo.isDisabled && Zo.supportsFiber)
          try {
              ia = Zo.inject(nw),
              Bt = Zo
          } catch {}
  }
  ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rw;
  ht.createPortal = function(e, t) {
      var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!uf(t))
          throw Error(j(200));
      return Z1(e, t, null, r)
  }
  ;
  ht.createRoot = function(e, t) {
      if (!uf(e))
          throw Error(j(299));
      var r = !1
        , n = ""
        , i = Um;
      return t != null && (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
      t = of(e, 1, !1, null, null, r, !1, n, i),
      e[Zt] = t.current,
      eo(e.nodeType === 8 ? e.parentNode : e),
      new af(t)
  }
  ;
  ht.findDOMNode = function(e) {
      if (e == null)
          return null;
      if (e.nodeType === 1)
          return e;
      var t = e._reactInternals;
      if (t === void 0)
          throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","),
          Error(j(268, e)));
      return e = sv(t),
      e = e === null ? null : e.stateNode,
      e
  }
  ;
  ht.flushSync = function(e) {
      return on(e)
  }
  ;
  ht.hydrate = function(e, t, r) {
      if (!ga(t))
          throw Error(j(200));
      return ya(null, e, t, !0, r)
  }
  ;
  ht.hydrateRoot = function(e, t, r) {
      if (!uf(e))
          throw Error(j(405));
      var n = r != null && r.hydratedSources || null
        , i = !1
        , o = ""
        , l = Um;
      if (r != null && (r.unstable_strictMode === !0 && (i = !0),
      r.identifierPrefix !== void 0 && (o = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (l = r.onRecoverableError)),
      t = zm(t, null, e, 1, r ?? null, i, !1, o, l),
      e[Zt] = t.current,
      eo(e),
      n)
          for (e = 0; e < n.length; e++)
              r = n[e],
              i = r._getVersion,
              i = i(r._source),
              t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, i] : t.mutableSourceEagerHydrationData.push(r, i);
      return new ma(t)
  }
  ;
  ht.render = function(e, t, r) {
      if (!ga(t))
          throw Error(j(200));
      return ya(null, e, t, !1, r)
  }
  ;
  ht.unmountComponentAtNode = function(e) {
      if (!ga(e))
          throw Error(j(40));
      return e._reactRootContainer ? (on(function() {
          ya(null, null, e, !1, function() {
              e._reactRootContainer = null,
              e[Zt] = null
          })
      }),
      !0) : !1
  }
  ;
  ht.unstable_batchedUpdates = ef;
  ht.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
      if (!ga(r))
          throw Error(j(200));
      if (e == null || e._reactInternals === void 0)
          throw Error(j(38));
      return ya(e, t, r, !1, n)
  }
  ;
  ht.version = "18.3.1-next-f1338f8080-20240426";
  function Bm() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
          try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bm)
          } catch (e) {
              console.error(e)
          }
  }
  Bm(),
  Bh.exports = ht;
  var So = Bh.exports;
  const iw = Wn(So)
    , ow = Oh({
      __proto__: null,
      default: iw
  }, [So]);
  var Xd = So;
  Hu.createRoot = Xd.createRoot,
  Hu.hydrateRoot = Xd.hydrateRoot;
  /**
* @remix-run/router v1.16.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
  function Se() {
      return Se = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
      }
      ,
      Se.apply(this, arguments)
  }
  var Te;
  (function(e) {
      e.Pop = "POP",
      e.Push = "PUSH",
      e.Replace = "REPLACE"
  }
  )(Te || (Te = {}));
  const Jd = "popstate";
  function lw(e) {
      e === void 0 && (e = {});
      function t(n, i) {
          let {pathname: o, search: l, hash: a} = n.location;
          return so("", {
              pathname: o,
              search: l,
              hash: a
          }, i.state && i.state.usr || null, i.state && i.state.key || "default")
      }
      function r(n, i) {
          return typeof i == "string" ? i : xo(i)
      }
      return uw(t, r, null, e)
  }
  function te(e, t) {
      if (e === !1 || e === null || typeof e > "u")
          throw new Error(t)
  }
  function Vn(e, t) {
      if (!e) {
          typeof console < "u" && console.warn(t);
          try {
              throw new Error(t)
          } catch {}
      }
  }
  function aw() {
      return Math.random().toString(36).substr(2, 8)
  }
  function Zd(e, t) {
      return {
          usr: e.state,
          key: e.key,
          idx: t
      }
  }
  function so(e, t, r, n) {
      return r === void 0 && (r = null),
      Se({
          pathname: typeof e == "string" ? e : e.pathname,
          search: "",
          hash: ""
      }, typeof t == "string" ? Mr(t) : t, {
          state: r,
          key: t && t.key || n || aw()
      })
  }
  function xo(e) {
      let {pathname: t="/", search: r="", hash: n=""} = e;
      return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
      n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
      t
  }
  function Mr(e) {
      let t = {};
      if (e) {
          let r = e.indexOf("#");
          r >= 0 && (t.hash = e.substr(r),
          e = e.substr(0, r));
          let n = e.indexOf("?");
          n >= 0 && (t.search = e.substr(n),
          e = e.substr(0, n)),
          e && (t.pathname = e)
      }
      return t
  }
  function uw(e, t, r, n) {
      n === void 0 && (n = {});
      let {window: i=document.defaultView, v5Compat: o=!1} = n
        , l = i.history
        , a = Te.Pop
        , u = null
        , s = c();
      s == null && (s = 0,
      l.replaceState(Se({}, l.state, {
          idx: s
      }), ""));
      function c() {
          return (l.state || {
              idx: null
          }).idx
      }
      function f() {
          a = Te.Pop;
          let E = c()
            , h = E == null ? null : E - s;
          s = E,
          u && u({
              action: a,
              location: m.location,
              delta: h
          })
      }
      function d(E, h) {
          a = Te.Push;
          let p = so(m.location, E, h);
          s = c() + 1;
          let v = Zd(p, s)
            , C = m.createHref(p);
          try {
              l.pushState(v, "", C)
          } catch (k) {
              if (k instanceof DOMException && k.name === "DataCloneError")
                  throw k;
              i.location.assign(C)
          }
          o && u && u({
              action: a,
              location: m.location,
              delta: 1
          })
      }
      function y(E, h) {
          a = Te.Replace;
          let p = so(m.location, E, h);
          s = c();
          let v = Zd(p, s)
            , C = m.createHref(p);
          l.replaceState(v, "", C),
          o && u && u({
              action: a,
              location: m.location,
              delta: 0
          })
      }
      function g(E) {
          let h = i.location.origin !== "null" ? i.location.origin : i.location.href
            , p = typeof E == "string" ? E : xo(E);
          return p = p.replace(/ $/, "%20"),
          te(h, "No window.location.(origin|href) available to create URL for href: " + p),
          new URL(p,h)
      }
      let m = {
          get action() {
              return a
          },
          get location() {
              return e(i, l)
          },
          listen(E) {
              if (u)
                  throw new Error("A history only accepts one active listener");
              return i.addEventListener(Jd, f),
              u = E,
              ()=>{
                  i.removeEventListener(Jd, f),
                  u = null
              }
          },
          createHref(E) {
              return t(i, E)
          },
          createURL: g,
          encodeLocation(E) {
              let h = g(E);
              return {
                  pathname: h.pathname,
                  search: h.search,
                  hash: h.hash
              }
          },
          push: d,
          replace: y,
          go(E) {
              return l.go(E)
          }
      };
      return m
  }
  var me;
  (function(e) {
      e.data = "data",
      e.deferred = "deferred",
      e.redirect = "redirect",
      e.error = "error"
  }
  )(me || (me = {}));
  const sw = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
  function cw(e) {
      return e.index === !0
  }
  function Is(e, t, r, n) {
      return r === void 0 && (r = []),
      n === void 0 && (n = {}),
      e.map((i,o)=>{
          let l = [...r, o]
            , a = typeof i.id == "string" ? i.id : l.join("-");
          if (te(i.index !== !0 || !i.children, "Cannot specify children on an index route"),
          te(!n[a], 'Found a route id collision on id "' + a + `".  Route id's must be globally unique within Data Router usages`),
          cw(i)) {
              let u = Se({}, i, t(i), {
                  id: a
              });
              return n[a] = u,
              u
          } else {
              let u = Se({}, i, t(i), {
                  id: a,
                  children: void 0
              });
              return n[a] = u,
              i.children && (u.children = Is(i.children, t, l, n)),
              u
          }
      }
      )
  }
  function $n(e, t, r) {
      r === void 0 && (r = "/");
      let n = typeof t == "string" ? Mr(t) : t
        , i = Eo(n.pathname || "/", r);
      if (i == null)
          return null;
      let o = Hm(e);
      dw(o);
      let l = null;
      for (let a = 0; l == null && a < o.length; ++a) {
          let u = Cw(i);
          l = xw(o[a], u)
      }
      return l
  }
  function fw(e, t) {
      let {route: r, pathname: n, params: i} = e;
      return {
          id: r.id,
          pathname: n,
          params: i,
          data: t[r.id],
          handle: r.handle
      }
  }
  function Hm(e, t, r, n) {
      t === void 0 && (t = []),
      r === void 0 && (r = []),
      n === void 0 && (n = "");
      let i = (o,l,a)=>{
          let u = {
              relativePath: a === void 0 ? o.path || "" : a,
              caseSensitive: o.caseSensitive === !0,
              childrenIndex: l,
              route: o
          };
          u.relativePath.startsWith("/") && (te(u.relativePath.startsWith(n), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
          u.relativePath = u.relativePath.slice(n.length));
          let s = Xr([n, u.relativePath])
            , c = r.concat(u);
          o.children && o.children.length > 0 && (te(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + s + '".')),
          Hm(o.children, t, c, s)),
          !(o.path == null && !o.index) && t.push({
              path: s,
              score: ww(s, o.index),
              routesMeta: c
          })
      }
      ;
      return e.forEach((o,l)=>{
          var a;
          if (o.path === "" || !((a = o.path) != null && a.includes("?")))
              i(o, l);
          else
              for (let u of Vm(o.path))
                  i(o, l, u)
      }
      ),
      t
  }
  function Vm(e) {
      let t = e.split("/");
      if (t.length === 0)
          return [];
      let[r,...n] = t
        , i = r.endsWith("?")
        , o = r.replace(/\?$/, "");
      if (n.length === 0)
          return i ? [o, ""] : [o];
      let l = Vm(n.join("/"))
        , a = [];
      return a.push(...l.map(u=>u === "" ? o : [o, u].join("/"))),
      i && a.push(...l),
      a.map(u=>e.startsWith("/") && u === "" ? "/" : u)
  }
  function dw(e) {
      e.sort((t,r)=>t.score !== r.score ? r.score - t.score : Sw(t.routesMeta.map(n=>n.childrenIndex), r.routesMeta.map(n=>n.childrenIndex)))
  }
  const pw = /^:[\w-]+$/
    , hw = 3
    , vw = 2
    , mw = 1
    , gw = 10
    , yw = -2
    , ep = e=>e === "*";
  function ww(e, t) {
      let r = e.split("/")
        , n = r.length;
      return r.some(ep) && (n += yw),
      t && (n += vw),
      r.filter(i=>!ep(i)).reduce((i,o)=>i + (pw.test(o) ? hw : o === "" ? mw : gw), n)
  }
  function Sw(e, t) {
      return e.length === t.length && e.slice(0, -1).every((n,i)=>n === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
  }
  function xw(e, t) {
      let {routesMeta: r} = e
        , n = {}
        , i = "/"
        , o = [];
      for (let l = 0; l < r.length; ++l) {
          let a = r[l]
            , u = l === r.length - 1
            , s = i === "/" ? t : t.slice(i.length) || "/"
            , c = Ew({
              path: a.relativePath,
              caseSensitive: a.caseSensitive,
              end: u
          }, s);
          if (!c)
              return null;
          Object.assign(n, c.params);
          let f = a.route;
          o.push({
              params: n,
              pathname: Xr([i, c.pathname]),
              pathnameBase: $w(Xr([i, c.pathnameBase])),
              route: f
          }),
          c.pathnameBase !== "/" && (i = Xr([i, c.pathnameBase]))
      }
      return o
  }
  function Ew(e, t) {
      typeof e == "string" && (e = {
          path: e,
          caseSensitive: !1,
          end: !0
      });
      let[r,n] = Pw(e.path, e.caseSensitive, e.end)
        , i = t.match(r);
      if (!i)
          return null;
      let o = i[0]
        , l = o.replace(/(.)\/+$/, "$1")
        , a = i.slice(1);
      return {
          params: n.reduce((s,c,f)=>{
              let {paramName: d, isOptional: y} = c;
              if (d === "*") {
                  let m = a[f] || "";
                  l = o.slice(0, o.length - m.length).replace(/(.)\/+$/, "$1")
              }
              const g = a[f];
              return y && !g ? s[d] = void 0 : s[d] = (g || "").replace(/%2F/g, "/"),
              s
          }
          , {}),
          pathname: o,
          pathnameBase: l,
          pattern: e
      }
  }
  function Pw(e, t, r) {
      t === void 0 && (t = !1),
      r === void 0 && (r = !0),
      Vn(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
      let n = []
        , i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (l,a,u)=>(n.push({
          paramName: a,
          isOptional: u != null
      }),
      u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
      return e.endsWith("*") ? (n.push({
          paramName: "*"
      }),
      i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
      [new RegExp(i,t ? void 0 : "i"), n]
  }
  function Cw(e) {
      try {
          return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
      } catch (t) {
          return Vn(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
          e
      }
  }
  function Eo(e, t) {
      if (t === "/")
          return e;
      if (!e.toLowerCase().startsWith(t.toLowerCase()))
          return null;
      let r = t.endsWith("/") ? t.length - 1 : t.length
        , n = e.charAt(r);
      return n && n !== "/" ? null : e.slice(r) || "/"
  }
  function _w(e, t) {
      t === void 0 && (t = "/");
      let {pathname: r, search: n="", hash: i=""} = typeof e == "string" ? Mr(e) : e;
      return {
          pathname: r ? r.startsWith("/") ? r : Rw(r, t) : t,
          search: Ow(n),
          hash: jw(i)
      }
  }
  function Rw(e, t) {
      let r = t.replace(/\/+$/, "").split("/");
      return e.split("/").forEach(i=>{
          i === ".." ? r.length > 1 && r.pop() : i !== "." && r.push(i)
      }
      ),
      r.length > 1 ? r.join("/") : "/"
  }
  function gu(e, t, r, n) {
      return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
  }
  function Wm(e) {
      return e.filter((t,r)=>r === 0 || t.route.path && t.route.path.length > 0)
  }
  function Tw(e, t) {
      let r = Wm(e);
      return t ? r.map((n,i)=>i === e.length - 1 ? n.pathname : n.pathnameBase) : r.map(n=>n.pathnameBase)
  }
  function kw(e, t, r, n) {
      n === void 0 && (n = !1);
      let i;
      typeof e == "string" ? i = Mr(e) : (i = Se({}, e),
      te(!i.pathname || !i.pathname.includes("?"), gu("?", "pathname", "search", i)),
      te(!i.pathname || !i.pathname.includes("#"), gu("#", "pathname", "hash", i)),
      te(!i.search || !i.search.includes("#"), gu("#", "search", "hash", i)));
      let o = e === "" || i.pathname === "", l = o ? "/" : i.pathname, a;
      if (l == null)
          a = r;
      else {
          let f = t.length - 1;
          if (!n && l.startsWith("..")) {
              let d = l.split("/");
              for (; d[0] === ".."; )
                  d.shift(),
                  f -= 1;
              i.pathname = d.join("/")
          }
          a = f >= 0 ? t[f] : "/"
      }
      let u = _w(i, a)
        , s = l && l !== "/" && l.endsWith("/")
        , c = (o || l === ".") && r.endsWith("/");
      return !u.pathname.endsWith("/") && (s || c) && (u.pathname += "/"),
      u
  }
  const Xr = e=>e.join("/").replace(/\/\/+/g, "/")
    , $w = e=>e.replace(/\/+$/, "").replace(/^\/*/, "/")
    , Ow = e=>!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
    , jw = e=>!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
  class sf {
      constructor(t, r, n, i) {
          i === void 0 && (i = !1),
          this.status = t,
          this.statusText = r || "",
          this.internal = i,
          n instanceof Error ? (this.data = n.toString(),
          this.error = n) : this.data = n
      }
  }
  function cf(e) {
      return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
  }
  const Km = ["post", "put", "patch", "delete"]
    , bw = new Set(Km)
    , Nw = ["get", ...Km]
    , Mw = new Set(Nw)
    , Lw = new Set([301, 302, 303, 307, 308])
    , Iw = new Set([307, 308])
    , yu = {
      state: "idle",
      location: void 0,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0
  }
    , Dw = {
      state: "idle",
      data: void 0,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0
  }
    , wi = {
      state: "unblocked",
      proceed: void 0,
      reset: void 0,
      location: void 0
  }
    , ff = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
    , Aw = e=>({
      hasErrorBoundary: !!e.hasErrorBoundary
  })
    , Gm = "remix-router-transitions";
  function Fw(e) {
      const t = e.window ? e.window : typeof window < "u" ? window : void 0
        , r = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u"
        , n = !r;
      te(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
      let i;
      if (e.mapRouteProperties)
          i = e.mapRouteProperties;
      else if (e.detectErrorBoundary) {
          let x = e.detectErrorBoundary;
          i = P=>({
              hasErrorBoundary: x(P)
          })
      } else
          i = Aw;
      let o = {}, l = Is(e.routes, i, void 0, o), a, u = e.basename || "/", s = e.unstable_dataStrategy || Hw, c = Se({
          v7_fetcherPersist: !1,
          v7_normalizeFormMethod: !1,
          v7_partialHydration: !1,
          v7_prependBasename: !1,
          v7_relativeSplatPath: !1,
          unstable_skipActionErrorRevalidation: !1
      }, e.future), f = null, d = new Set, y = null, g = null, m = null, E = e.hydrationData != null, h = $n(l, e.history.location, u), p = null;
      if (h == null) {
          let x = wt(404, {
              pathname: e.history.location.pathname
          })
            , {matches: P, route: R} = cp(l);
          h = P,
          p = {
              [R.id]: x
          }
      }
      let v, C = h.some(x=>x.route.lazy), k = h.some(x=>x.route.loader);
      if (C)
          v = !1;
      else if (!k)
          v = !0;
      else if (c.v7_partialHydration) {
          let x = e.hydrationData ? e.hydrationData.loaderData : null
            , P = e.hydrationData ? e.hydrationData.errors : null
            , R = N=>N.route.loader ? typeof N.route.loader == "function" && N.route.loader.hydrate === !0 ? !1 : x && x[N.route.id] !== void 0 || P && P[N.route.id] !== void 0 : !0;
          if (P) {
              let N = h.findIndex(D=>P[D.route.id] !== void 0);
              v = h.slice(0, N + 1).every(R)
          } else
              v = h.every(R)
      } else
          v = e.hydrationData != null;
      let b, S = {
          historyAction: e.history.action,
          location: e.history.location,
          matches: h,
          initialized: v,
          navigation: yu,
          restoreScrollPosition: e.hydrationData != null ? !1 : null,
          preventScrollReset: !1,
          revalidation: "idle",
          loaderData: e.hydrationData && e.hydrationData.loaderData || {},
          actionData: e.hydrationData && e.hydrationData.actionData || null,
          errors: e.hydrationData && e.hydrationData.errors || p,
          fetchers: new Map,
          blockers: new Map
      }, O = Te.Pop, L = !1, M, V = !1, ie = new Map, ne = null, se = !1, oe = !1, W = [], J = [], $ = new Map, F = 0, z = -1, Z = new Map, q = new Set, tt = new Map, pe = new Map, rt = new Set, De = new Map, nt = new Map, oi = !1;
      function Oo() {
          if (f = e.history.listen(x=>{
              let {action: P, location: R, delta: N} = x;
              if (oi) {
                  oi = !1;
                  return
              }
              Vn(nt.size === 0 || N != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
              let D = Ff({
                  currentLocation: S.location,
                  nextLocation: R,
                  historyAction: P
              });
              if (D && N != null) {
                  oi = !0,
                  e.history.go(N * -1),
                  bo(D, {
                      state: "blocked",
                      location: R,
                      proceed() {
                          bo(D, {
                              state: "proceeding",
                              proceed: void 0,
                              reset: void 0,
                              location: R
                          }),
                          e.history.go(N)
                      },
                      reset() {
                          let G = new Map(S.blockers);
                          G.set(D, wi),
                          we({
                              blockers: G
                          })
                      }
                  });
                  return
              }
              return Ir(P, R)
          }
          ),
          r) {
              tS(t, ie);
              let x = ()=>rS(t, ie);
              t.addEventListener("pagehide", x),
              ne = ()=>t.removeEventListener("pagehide", x)
          }
          return S.initialized || Ir(Te.Pop, S.location, {
              initialHydration: !0
          }),
          b
      }
      function Ba() {
          f && f(),
          ne && ne(),
          d.clear(),
          M && M.abort(),
          S.fetchers.forEach((x,P)=>jo(P)),
          S.blockers.forEach((x,P)=>Af(P))
      }
      function he(x) {
          return d.add(x),
          ()=>d.delete(x)
      }
      function we(x, P) {
          P === void 0 && (P = {}),
          S = Se({}, S, x);
          let R = []
            , N = [];
          c.v7_fetcherPersist && S.fetchers.forEach((D,G)=>{
              D.state === "idle" && (rt.has(G) ? N.push(G) : R.push(G))
          }
          ),
          [...d].forEach(D=>D(S, {
              deletedFetchers: N,
              unstable_viewTransitionOpts: P.viewTransitionOpts,
              unstable_flushSync: P.flushSync === !0
          })),
          c.v7_fetcherPersist && (R.forEach(D=>S.fetchers.delete(D)),
          N.forEach(D=>jo(D)))
      }
      function be(x, P, R) {
          var N, D;
          let {flushSync: G} = R === void 0 ? {} : R, B = S.actionData != null && S.navigation.formMethod != null && bt(S.navigation.formMethod) && S.navigation.state === "loading" && ((N = x.state) == null ? void 0 : N._isRedirect) !== !0, A;
          P.actionData ? Object.keys(P.actionData).length > 0 ? A = P.actionData : A = null : B ? A = S.actionData : A = null;
          let Y = P.loaderData ? up(S.loaderData, P.loaderData, P.matches || [], P.errors) : S.loaderData
            , K = S.blockers;
          K.size > 0 && (K = new Map(K),
          K.forEach((H,ve)=>K.set(ve, wi)));
          let Ae = L === !0 || S.navigation.formMethod != null && bt(S.navigation.formMethod) && ((D = x.state) == null ? void 0 : D._isRedirect) !== !0;
          a && (l = a,
          a = void 0),
          se || O === Te.Pop || (O === Te.Push ? e.history.push(x, x.state) : O === Te.Replace && e.history.replace(x, x.state));
          let Fe;
          if (O === Te.Pop) {
              let H = ie.get(S.location.pathname);
              H && H.has(x.pathname) ? Fe = {
                  currentLocation: S.location,
                  nextLocation: x
              } : ie.has(x.pathname) && (Fe = {
                  currentLocation: x,
                  nextLocation: S.location
              })
          } else if (V) {
              let H = ie.get(S.location.pathname);
              H ? H.add(x.pathname) : (H = new Set([x.pathname]),
              ie.set(S.location.pathname, H)),
              Fe = {
                  currentLocation: S.location,
                  nextLocation: x
              }
          }
          we(Se({}, P, {
              actionData: A,
              loaderData: Y,
              historyAction: O,
              location: x,
              initialized: !0,
              navigation: yu,
              revalidation: "idle",
              restoreScrollPosition: Uf(x, P.matches || S.matches),
              preventScrollReset: Ae,
              blockers: K
          }), {
              viewTransitionOpts: Fe,
              flushSync: G === !0
          }),
          O = Te.Pop,
          L = !1,
          V = !1,
          se = !1,
          oe = !1,
          W = [],
          J = []
      }
      async function Lr(x, P) {
          if (typeof x == "number") {
              e.history.go(x);
              return
          }
          let R = Ds(S.location, S.matches, u, c.v7_prependBasename, x, c.v7_relativeSplatPath, P == null ? void 0 : P.fromRouteId, P == null ? void 0 : P.relative)
            , {path: N, submission: D, error: G} = tp(c.v7_normalizeFormMethod, !1, R, P)
            , B = S.location
            , A = so(S.location, N, P && P.state);
          A = Se({}, A, e.history.encodeLocation(A));
          let Y = P && P.replace != null ? P.replace : void 0
            , K = Te.Push;
          Y === !0 ? K = Te.Replace : Y === !1 || D != null && bt(D.formMethod) && D.formAction === S.location.pathname + S.location.search && (K = Te.Replace);
          let Ae = P && "preventScrollReset"in P ? P.preventScrollReset === !0 : void 0
            , Fe = (P && P.unstable_flushSync) === !0
            , H = Ff({
              currentLocation: B,
              nextLocation: A,
              historyAction: K
          });
          if (H) {
              bo(H, {
                  state: "blocked",
                  location: A,
                  proceed() {
                      bo(H, {
                          state: "proceeding",
                          proceed: void 0,
                          reset: void 0,
                          location: A
                      }),
                      Lr(x, P)
                  },
                  reset() {
                      let ve = new Map(S.blockers);
                      ve.set(H, wi),
                      we({
                          blockers: ve
                      })
                  }
              });
              return
          }
          return await Ir(K, A, {
              submission: D,
              pendingError: G,
              preventScrollReset: Ae,
              replace: P && P.replace,
              enableViewTransition: P && P.unstable_viewTransition,
              flushSync: Fe
          })
      }
      function Sy() {
          if (Ha(),
          we({
              revalidation: "loading"
          }),
          S.navigation.state !== "submitting") {
              if (S.navigation.state === "idle") {
                  Ir(S.historyAction, S.location, {
                      startUninterruptedRevalidation: !0
                  });
                  return
              }
              Ir(O || S.historyAction, S.navigation.location, {
                  overrideNavigation: S.navigation
              })
          }
      }
      async function Ir(x, P, R) {
          M && M.abort(),
          M = null,
          O = x,
          se = (R && R.startUninterruptedRevalidation) === !0,
          $y(S.location, S.matches),
          L = (R && R.preventScrollReset) === !0,
          V = (R && R.enableViewTransition) === !0;
          let N = a || l
            , D = R && R.overrideNavigation
            , G = $n(N, P, u)
            , B = (R && R.flushSync) === !0;
          if (!G) {
              let H = wt(404, {
                  pathname: P.pathname
              })
                , {matches: ve, route: Ne} = cp(N);
              Va(),
              be(P, {
                  matches: ve,
                  loaderData: {},
                  errors: {
                      [Ne.id]: H
                  }
              }, {
                  flushSync: B
              });
              return
          }
          if (S.initialized && !oe && Yw(S.location, P) && !(R && R.submission && bt(R.submission.formMethod))) {
              be(P, {
                  matches: G
              }, {
                  flushSync: B
              });
              return
          }
          M = new AbortController;
          let A = pn(e.history, P, M.signal, R && R.submission), Y;
          if (R && R.pendingError)
              Y = [Hi(G).route.id, {
                  type: me.error,
                  error: R.pendingError
              }];
          else if (R && R.submission && bt(R.submission.formMethod)) {
              let H = await xy(A, P, R.submission, G, {
                  replace: R.replace,
                  flushSync: B
              });
              if (H.shortCircuited)
                  return;
              Y = H.pendingActionResult,
              D = wu(P, R.submission),
              B = !1,
              A = pn(e.history, A.url, A.signal)
          }
          let {shortCircuited: K, loaderData: Ae, errors: Fe} = await Ey(A, P, G, D, R && R.submission, R && R.fetcherSubmission, R && R.replace, R && R.initialHydration === !0, B, Y);
          K || (M = null,
          be(P, Se({
              matches: G
          }, sp(Y), {
              loaderData: Ae,
              errors: Fe
          })))
      }
      async function xy(x, P, R, N, D) {
          D === void 0 && (D = {}),
          Ha();
          let G = Zw(P, R);
          we({
              navigation: G
          }, {
              flushSync: D.flushSync === !0
          });
          let B, A = Fs(N, P);
          if (!A.route.action && !A.route.lazy)
              B = {
                  type: me.error,
                  error: wt(405, {
                      method: x.method,
                      pathname: P.pathname,
                      routeId: A.route.id
                  })
              };
          else if (B = (await ai("action", x, [A], N))[0],
          x.signal.aborted)
              return {
                  shortCircuited: !0
              };
          if (Kr(B)) {
              let Y;
              return D && D.replace != null ? Y = D.replace : Y = op(B.response.headers.get("Location"), new URL(x.url), u) === S.location.pathname + S.location.search,
              await li(x, B, {
                  submission: R,
                  replace: Y
              }),
              {
                  shortCircuited: !0
              }
          }
          if (Wr(B))
              throw wt(400, {
                  type: "defer-action"
              });
          if (Et(B)) {
              let Y = Hi(N, A.route.id);
              return (D && D.replace) !== !0 && (O = Te.Push),
              {
                  pendingActionResult: [Y.route.id, B]
              }
          }
          return {
              pendingActionResult: [A.route.id, B]
          }
      }
      async function Ey(x, P, R, N, D, G, B, A, Y, K) {
          let Ae = N || wu(P, D)
            , Fe = D || G || pp(Ae)
            , H = a || l
            , [ve,Ne] = rp(e.history, S, R, Fe, P, c.v7_partialHydration && A === !0, c.unstable_skipActionErrorRevalidation, oe, W, J, rt, tt, q, H, u, K);
          if (Va(ee=>!(R && R.some(qe=>qe.route.id === ee)) || ve && ve.some(qe=>qe.route.id === ee)),
          z = ++F,
          ve.length === 0 && Ne.length === 0) {
              let ee = If();
              return be(P, Se({
                  matches: R,
                  loaderData: {},
                  errors: K && Et(K[1]) ? {
                      [K[0]]: K[1].error
                  } : null
              }, sp(K), ee ? {
                  fetchers: new Map(S.fetchers)
              } : {}), {
                  flushSync: Y
              }),
              {
                  shortCircuited: !0
              }
          }
          if (!se && (!c.v7_partialHydration || !A)) {
              Ne.forEach(qe=>{
                  let yt = S.fetchers.get(qe.key)
                    , ze = Si(void 0, yt ? yt.data : void 0);
                  S.fetchers.set(qe.key, ze)
              }
              );
              let ee;
              K && !Et(K[1]) ? ee = {
                  [K[0]]: K[1].data
              } : S.actionData && (Object.keys(S.actionData).length === 0 ? ee = null : ee = S.actionData),
              we(Se({
                  navigation: Ae
              }, ee !== void 0 ? {
                  actionData: ee
              } : {}, Ne.length > 0 ? {
                  fetchers: new Map(S.fetchers)
              } : {}), {
                  flushSync: Y
              })
          }
          Ne.forEach(ee=>{
              $.has(ee.key) && ir(ee.key),
              ee.controller && $.set(ee.key, ee.controller)
          }
          );
          let si = ()=>Ne.forEach(ee=>ir(ee.key));
          M && M.signal.addEventListener("abort", si);
          let {loaderResults: or, fetcherResults: sn} = await Nf(S.matches, R, ve, Ne, x);
          if (x.signal.aborted)
              return {
                  shortCircuited: !0
              };
          M && M.signal.removeEventListener("abort", si),
          Ne.forEach(ee=>$.delete(ee.key));
          let cn = fp([...or, ...sn]);
          if (cn) {
              if (cn.idx >= ve.length) {
                  let ee = Ne[cn.idx - ve.length].key;
                  q.add(ee)
              }
              return await li(x, cn.result, {
                  replace: B
              }),
              {
                  shortCircuited: !0
              }
          }
          let {loaderData: fn, errors: At} = ap(S, R, ve, or, K, Ne, sn, De);
          De.forEach((ee,qe)=>{
              ee.subscribe(yt=>{
                  (yt || ee.done) && De.delete(qe)
              }
              )
          }
          ),
          c.v7_partialHydration && A && S.errors && Object.entries(S.errors).filter(ee=>{
              let[qe] = ee;
              return !ve.some(yt=>yt.route.id === qe)
          }
          ).forEach(ee=>{
              let[qe,yt] = ee;
              At = Object.assign(At || {}, {
                  [qe]: yt
              })
          }
          );
          let No = If()
            , Mo = Df(z)
            , Lo = No || Mo || Ne.length > 0;
          return Se({
              loaderData: fn,
              errors: At
          }, Lo ? {
              fetchers: new Map(S.fetchers)
          } : {})
      }
      function Py(x, P, R, N) {
          if (n)
              throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
          $.has(x) && ir(x);
          let D = (N && N.unstable_flushSync) === !0
            , G = a || l
            , B = Ds(S.location, S.matches, u, c.v7_prependBasename, R, c.v7_relativeSplatPath, P, N == null ? void 0 : N.relative)
            , A = $n(G, B, u);
          if (!A) {
              ui(x, P, wt(404, {
                  pathname: B
              }), {
                  flushSync: D
              });
              return
          }
          let {path: Y, submission: K, error: Ae} = tp(c.v7_normalizeFormMethod, !0, B, N);
          if (Ae) {
              ui(x, P, Ae, {
                  flushSync: D
              });
              return
          }
          let Fe = Fs(A, Y);
          if (L = (N && N.preventScrollReset) === !0,
          K && bt(K.formMethod)) {
              Cy(x, P, Y, Fe, A, D, K);
              return
          }
          tt.set(x, {
              routeId: P,
              path: Y
          }),
          _y(x, P, Y, Fe, A, D, K)
      }
      async function Cy(x, P, R, N, D, G, B) {
          if (Ha(),
          tt.delete(x),
          !N.route.action && !N.route.lazy) {
              let ze = wt(405, {
                  method: B.formMethod,
                  pathname: R,
                  routeId: P
              });
              ui(x, P, ze, {
                  flushSync: G
              });
              return
          }
          let A = S.fetchers.get(x);
          nr(x, eS(B, A), {
              flushSync: G
          });
          let Y = new AbortController
            , K = pn(e.history, R, Y.signal, B);
          $.set(x, Y);
          let Ae = F
            , H = (await ai("action", K, [N], D))[0];
          if (K.signal.aborted) {
              $.get(x) === Y && $.delete(x);
              return
          }
          if (c.v7_fetcherPersist && rt.has(x)) {
              if (Kr(H) || Et(H)) {
                  nr(x, sr(void 0));
                  return
              }
          } else {
              if (Kr(H))
                  if ($.delete(x),
                  z > Ae) {
                      nr(x, sr(void 0));
                      return
                  } else
                      return q.add(x),
                      nr(x, Si(B)),
                      li(K, H, {
                          fetcherSubmission: B
                      });
              if (Et(H)) {
                  ui(x, P, H.error);
                  return
              }
          }
          if (Wr(H))
              throw wt(400, {
                  type: "defer-action"
              });
          let ve = S.navigation.location || S.location
            , Ne = pn(e.history, ve, Y.signal)
            , si = a || l
            , or = S.navigation.state !== "idle" ? $n(si, S.navigation.location, u) : S.matches;
          te(or, "Didn't find any matches after fetcher action");
          let sn = ++F;
          Z.set(x, sn);
          let cn = Si(B, H.data);
          S.fetchers.set(x, cn);
          let[fn,At] = rp(e.history, S, or, B, ve, !1, c.unstable_skipActionErrorRevalidation, oe, W, J, rt, tt, q, si, u, [N.route.id, H]);
          At.filter(ze=>ze.key !== x).forEach(ze=>{
              let ci = ze.key
                , Bf = S.fetchers.get(ci)
                , jy = Si(void 0, Bf ? Bf.data : void 0);
              S.fetchers.set(ci, jy),
              $.has(ci) && ir(ci),
              ze.controller && $.set(ci, ze.controller)
          }
          ),
          we({
              fetchers: new Map(S.fetchers)
          });
          let No = ()=>At.forEach(ze=>ir(ze.key));
          Y.signal.addEventListener("abort", No);
          let {loaderResults: Mo, fetcherResults: Lo} = await Nf(S.matches, or, fn, At, Ne);
          if (Y.signal.aborted)
              return;
          Y.signal.removeEventListener("abort", No),
          Z.delete(x),
          $.delete(x),
          At.forEach(ze=>$.delete(ze.key));
          let ee = fp([...Mo, ...Lo]);
          if (ee) {
              if (ee.idx >= fn.length) {
                  let ze = At[ee.idx - fn.length].key;
                  q.add(ze)
              }
              return li(Ne, ee.result)
          }
          let {loaderData: qe, errors: yt} = ap(S, S.matches, fn, Mo, void 0, At, Lo, De);
          if (S.fetchers.has(x)) {
              let ze = sr(H.data);
              S.fetchers.set(x, ze)
          }
          Df(sn),
          S.navigation.state === "loading" && sn > z ? (te(O, "Expected pending action"),
          M && M.abort(),
          be(S.navigation.location, {
              matches: or,
              loaderData: qe,
              errors: yt,
              fetchers: new Map(S.fetchers)
          })) : (we({
              errors: yt,
              loaderData: up(S.loaderData, qe, or, yt),
              fetchers: new Map(S.fetchers)
          }),
          oe = !1)
      }
      async function _y(x, P, R, N, D, G, B) {
          let A = S.fetchers.get(x);
          nr(x, Si(B, A ? A.data : void 0), {
              flushSync: G
          });
          let Y = new AbortController
            , K = pn(e.history, R, Y.signal);
          $.set(x, Y);
          let Ae = F
            , H = (await ai("loader", K, [N], D))[0];
          if (Wr(H) && (H = await Xm(H, K.signal, !0) || H),
          $.get(x) === Y && $.delete(x),
          !K.signal.aborted) {
              if (rt.has(x)) {
                  nr(x, sr(void 0));
                  return
              }
              if (Kr(H))
                  if (z > Ae) {
                      nr(x, sr(void 0));
                      return
                  } else {
                      q.add(x),
                      await li(K, H);
                      return
                  }
              if (Et(H)) {
                  ui(x, P, H.error);
                  return
              }
              te(!Wr(H), "Unhandled fetcher deferred data"),
              nr(x, sr(H.data))
          }
      }
      async function li(x, P, R) {
          let {submission: N, fetcherSubmission: D, replace: G} = R === void 0 ? {} : R;
          P.response.headers.has("X-Remix-Revalidate") && (oe = !0);
          let B = P.response.headers.get("Location");
          te(B, "Expected a Location header on the redirect Response"),
          B = op(B, new URL(x.url), u);
          let A = so(S.location, B, {
              _isRedirect: !0
          });
          if (r) {
              let ve = !1;
              if (P.response.headers.has("X-Remix-Reload-Document"))
                  ve = !0;
              else if (ff.test(B)) {
                  const Ne = e.history.createURL(B);
                  ve = Ne.origin !== t.location.origin || Eo(Ne.pathname, u) == null
              }
              if (ve) {
                  G ? t.location.replace(B) : t.location.assign(B);
                  return
              }
          }
          M = null;
          let Y = G === !0 ? Te.Replace : Te.Push
            , {formMethod: K, formAction: Ae, formEncType: Fe} = S.navigation;
          !N && !D && K && Ae && Fe && (N = pp(S.navigation));
          let H = N || D;
          if (Iw.has(P.response.status) && H && bt(H.formMethod))
              await Ir(Y, A, {
                  submission: Se({}, H, {
                      formAction: B
                  }),
                  preventScrollReset: L
              });
          else {
              let ve = wu(A, N);
              await Ir(Y, A, {
                  overrideNavigation: ve,
                  fetcherSubmission: D,
                  preventScrollReset: L
              })
          }
      }
      async function ai(x, P, R, N) {
          try {
              let D = await Vw(s, x, P, R, N, o, i);
              return await Promise.all(D.map((G,B)=>{
                  if (qw(G)) {
                      let A = G.result;
                      return {
                          type: me.redirect,
                          response: Gw(A, P, R[B].route.id, N, u, c.v7_relativeSplatPath)
                      }
                  }
                  return Kw(G)
              }
              ))
          } catch (D) {
              return R.map(()=>({
                  type: me.error,
                  error: D
              }))
          }
      }
      async function Nf(x, P, R, N, D) {
          let[G,...B] = await Promise.all([R.length ? ai("loader", D, R, P) : [], ...N.map(A=>{
              if (A.matches && A.match && A.controller) {
                  let Y = pn(e.history, A.path, A.controller.signal);
                  return ai("loader", Y, [A.match], A.matches).then(K=>K[0])
              } else
                  return Promise.resolve({
                      type: me.error,
                      error: wt(404, {
                          pathname: A.path
                      })
                  })
          }
          )]);
          return await Promise.all([dp(x, R, G, G.map(()=>D.signal), !1, S.loaderData), dp(x, N.map(A=>A.match), B, N.map(A=>A.controller ? A.controller.signal : null), !0)]),
          {
              loaderResults: G,
              fetcherResults: B
          }
      }
      function Ha() {
          oe = !0,
          W.push(...Va()),
          tt.forEach((x,P)=>{
              $.has(P) && (J.push(P),
              ir(P))
          }
          )
      }
      function nr(x, P, R) {
          R === void 0 && (R = {}),
          S.fetchers.set(x, P),
          we({
              fetchers: new Map(S.fetchers)
          }, {
              flushSync: (R && R.flushSync) === !0
          })
      }
      function ui(x, P, R, N) {
          N === void 0 && (N = {});
          let D = Hi(S.matches, P);
          jo(x),
          we({
              errors: {
                  [D.route.id]: R
              },
              fetchers: new Map(S.fetchers)
          }, {
              flushSync: (N && N.flushSync) === !0
          })
      }
      function Mf(x) {
          return c.v7_fetcherPersist && (pe.set(x, (pe.get(x) || 0) + 1),
          rt.has(x) && rt.delete(x)),
          S.fetchers.get(x) || Dw
      }
      function jo(x) {
          let P = S.fetchers.get(x);
          $.has(x) && !(P && P.state === "loading" && Z.has(x)) && ir(x),
          tt.delete(x),
          Z.delete(x),
          q.delete(x),
          rt.delete(x),
          S.fetchers.delete(x)
      }
      function Ry(x) {
          if (c.v7_fetcherPersist) {
              let P = (pe.get(x) || 0) - 1;
              P <= 0 ? (pe.delete(x),
              rt.add(x)) : pe.set(x, P)
          } else
              jo(x);
          we({
              fetchers: new Map(S.fetchers)
          })
      }
      function ir(x) {
          let P = $.get(x);
          te(P, "Expected fetch controller: " + x),
          P.abort(),
          $.delete(x)
      }
      function Lf(x) {
          for (let P of x) {
              let R = Mf(P)
                , N = sr(R.data);
              S.fetchers.set(P, N)
          }
      }
      function If() {
          let x = []
            , P = !1;
          for (let R of q) {
              let N = S.fetchers.get(R);
              te(N, "Expected fetcher: " + R),
              N.state === "loading" && (q.delete(R),
              x.push(R),
              P = !0)
          }
          return Lf(x),
          P
      }
      function Df(x) {
          let P = [];
          for (let[R,N] of Z)
              if (N < x) {
                  let D = S.fetchers.get(R);
                  te(D, "Expected fetcher: " + R),
                  D.state === "loading" && (ir(R),
                  Z.delete(R),
                  P.push(R))
              }
          return Lf(P),
          P.length > 0
      }
      function Ty(x, P) {
          let R = S.blockers.get(x) || wi;
          return nt.get(x) !== P && nt.set(x, P),
          R
      }
      function Af(x) {
          S.blockers.delete(x),
          nt.delete(x)
      }
      function bo(x, P) {
          let R = S.blockers.get(x) || wi;
          te(R.state === "unblocked" && P.state === "blocked" || R.state === "blocked" && P.state === "blocked" || R.state === "blocked" && P.state === "proceeding" || R.state === "blocked" && P.state === "unblocked" || R.state === "proceeding" && P.state === "unblocked", "Invalid blocker state transition: " + R.state + " -> " + P.state);
          let N = new Map(S.blockers);
          N.set(x, P),
          we({
              blockers: N
          })
      }
      function Ff(x) {
          let {currentLocation: P, nextLocation: R, historyAction: N} = x;
          if (nt.size === 0)
              return;
          nt.size > 1 && Vn(!1, "A router only supports one blocker at a time");
          let D = Array.from(nt.entries())
            , [G,B] = D[D.length - 1]
            , A = S.blockers.get(G);
          if (!(A && A.state === "proceeding") && B({
              currentLocation: P,
              nextLocation: R,
              historyAction: N
          }))
              return G
      }
      function Va(x) {
          let P = [];
          return De.forEach((R,N)=>{
              (!x || x(N)) && (R.cancel(),
              P.push(N),
              De.delete(N))
          }
          ),
          P
      }
      function ky(x, P, R) {
          if (y = x,
          m = P,
          g = R || null,
          !E && S.navigation === yu) {
              E = !0;
              let N = Uf(S.location, S.matches);
              N != null && we({
                  restoreScrollPosition: N
              })
          }
          return ()=>{
              y = null,
              m = null,
              g = null
          }
      }
      function zf(x, P) {
          return g && g(x, P.map(N=>fw(N, S.loaderData))) || x.key
      }
      function $y(x, P) {
          if (y && m) {
              let R = zf(x, P);
              y[R] = m()
          }
      }
      function Uf(x, P) {
          if (y) {
              let R = zf(x, P)
                , N = y[R];
              if (typeof N == "number")
                  return N
          }
          return null
      }
      function Oy(x) {
          o = {},
          a = Is(x, i, void 0, o)
      }
      return b = {
          get basename() {
              return u
          },
          get future() {
              return c
          },
          get state() {
              return S
          },
          get routes() {
              return l
          },
          get window() {
              return t
          },
          initialize: Oo,
          subscribe: he,
          enableScrollRestoration: ky,
          navigate: Lr,
          fetch: Py,
          revalidate: Sy,
          createHref: x=>e.history.createHref(x),
          encodeLocation: x=>e.history.encodeLocation(x),
          getFetcher: Mf,
          deleteFetcher: Ry,
          dispose: Ba,
          getBlocker: Ty,
          deleteBlocker: Af,
          _internalFetchControllers: $,
          _internalActiveDeferreds: De,
          _internalSetRoutes: Oy
      },
      b
  }
  function zw(e) {
      return e != null && ("formData"in e && e.formData != null || "body"in e && e.body !== void 0)
  }
  function Ds(e, t, r, n, i, o, l, a) {
      let u, s;
      if (l) {
          u = [];
          for (let f of t)
              if (u.push(f),
              f.route.id === l) {
                  s = f;
                  break
              }
      } else
          u = t,
          s = t[t.length - 1];
      let c = kw(i || ".", Tw(u, o), Eo(e.pathname, r) || e.pathname, a === "path");
      return i == null && (c.search = e.search,
      c.hash = e.hash),
      (i == null || i === "" || i === ".") && s && s.route.index && !df(c.search) && (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
      n && r !== "/" && (c.pathname = c.pathname === "/" ? r : Xr([r, c.pathname])),
      xo(c)
  }
  function tp(e, t, r, n) {
      if (!n || !zw(n))
          return {
              path: r
          };
      if (n.formMethod && !Jw(n.formMethod))
          return {
              path: r,
              error: wt(405, {
                  method: n.formMethod
              })
          };
      let i = ()=>({
          path: r,
          error: wt(400, {
              type: "invalid-body"
          })
      })
        , o = n.formMethod || "get"
        , l = e ? o.toUpperCase() : o.toLowerCase()
        , a = Ym(r);
      if (n.body !== void 0) {
          if (n.formEncType === "text/plain") {
              if (!bt(l))
                  return i();
              let d = typeof n.body == "string" ? n.body : n.body instanceof FormData || n.body instanceof URLSearchParams ? Array.from(n.body.entries()).reduce((y,g)=>{
                  let[m,E] = g;
                  return "" + y + m + "=" + E + `
`
              }
              , "") : String(n.body);
              return {
                  path: r,
                  submission: {
                      formMethod: l,
                      formAction: a,
                      formEncType: n.formEncType,
                      formData: void 0,
                      json: void 0,
                      text: d
                  }
              }
          } else if (n.formEncType === "application/json") {
              if (!bt(l))
                  return i();
              try {
                  let d = typeof n.body == "string" ? JSON.parse(n.body) : n.body;
                  return {
                      path: r,
                      submission: {
                          formMethod: l,
                          formAction: a,
                          formEncType: n.formEncType,
                          formData: void 0,
                          json: d,
                          text: void 0
                      }
                  }
              } catch {
                  return i()
              }
          }
      }
      te(typeof FormData == "function", "FormData is not available in this environment");
      let u, s;
      if (n.formData)
          u = As(n.formData),
          s = n.formData;
      else if (n.body instanceof FormData)
          u = As(n.body),
          s = n.body;
      else if (n.body instanceof URLSearchParams)
          u = n.body,
          s = lp(u);
      else if (n.body == null)
          u = new URLSearchParams,
          s = new FormData;
      else
          try {
              u = new URLSearchParams(n.body),
              s = lp(u)
          } catch {
              return i()
          }
      let c = {
          formMethod: l,
          formAction: a,
          formEncType: n && n.formEncType || "application/x-www-form-urlencoded",
          formData: s,
          json: void 0,
          text: void 0
      };
      if (bt(c.formMethod))
          return {
              path: r,
              submission: c
          };
      let f = Mr(r);
      return t && f.search && df(f.search) && u.append("index", ""),
      f.search = "?" + u,
      {
          path: xo(f),
          submission: c
      }
  }
  function Uw(e, t) {
      let r = e;
      if (t) {
          let n = e.findIndex(i=>i.route.id === t);
          n >= 0 && (r = e.slice(0, n))
      }
      return r
  }
  function rp(e, t, r, n, i, o, l, a, u, s, c, f, d, y, g, m) {
      let E = m ? Et(m[1]) ? m[1].error : m[1].data : void 0
        , h = e.createURL(t.location)
        , p = e.createURL(i)
        , v = m && Et(m[1]) ? m[0] : void 0
        , C = v ? Uw(r, v) : r
        , k = m ? m[1].statusCode : void 0
        , b = l && k && k >= 400
        , S = C.filter((L,M)=>{
          let {route: V} = L;
          if (V.lazy)
              return !0;
          if (V.loader == null)
              return !1;
          if (o)
              return typeof V.loader != "function" || V.loader.hydrate ? !0 : t.loaderData[V.id] === void 0 && (!t.errors || t.errors[V.id] === void 0);
          if (Bw(t.loaderData, t.matches[M], L) || u.some(se=>se === L.route.id))
              return !0;
          let ie = t.matches[M]
            , ne = L;
          return np(L, Se({
              currentUrl: h,
              currentParams: ie.params,
              nextUrl: p,
              nextParams: ne.params
          }, n, {
              actionResult: E,
              unstable_actionStatus: k,
              defaultShouldRevalidate: b ? !1 : a || h.pathname + h.search === p.pathname + p.search || h.search !== p.search || Qm(ie, ne)
          }))
      }
      )
        , O = [];
      return f.forEach((L,M)=>{
          if (o || !r.some(oe=>oe.route.id === L.routeId) || c.has(M))
              return;
          let V = $n(y, L.path, g);
          if (!V) {
              O.push({
                  key: M,
                  routeId: L.routeId,
                  path: L.path,
                  matches: null,
                  match: null,
                  controller: null
              });
              return
          }
          let ie = t.fetchers.get(M)
            , ne = Fs(V, L.path)
            , se = !1;
          d.has(M) ? se = !1 : s.includes(M) ? se = !0 : ie && ie.state !== "idle" && ie.data === void 0 ? se = a : se = np(ne, Se({
              currentUrl: h,
              currentParams: t.matches[t.matches.length - 1].params,
              nextUrl: p,
              nextParams: r[r.length - 1].params
          }, n, {
              actionResult: E,
              unstable_actionStatus: k,
              defaultShouldRevalidate: b ? !1 : a
          })),
          se && O.push({
              key: M,
              routeId: L.routeId,
              path: L.path,
              matches: V,
              match: ne,
              controller: new AbortController
          })
      }
      ),
      [S, O]
  }
  function Bw(e, t, r) {
      let n = !t || r.route.id !== t.route.id
        , i = e[r.route.id] === void 0;
      return n || i
  }
  function Qm(e, t) {
      let r = e.route.path;
      return e.pathname !== t.pathname || r != null && r.endsWith("*") && e.params["*"] !== t.params["*"]
  }
  function np(e, t) {
      if (e.route.shouldRevalidate) {
          let r = e.route.shouldRevalidate(t);
          if (typeof r == "boolean")
              return r
      }
      return t.defaultShouldRevalidate
  }
  async function ip(e, t, r) {
      if (!e.lazy)
          return;
      let n = await e.lazy();
      if (!e.lazy)
          return;
      let i = r[e.id];
      te(i, "No route found in manifest");
      let o = {};
      for (let l in n) {
          let u = i[l] !== void 0 && l !== "hasErrorBoundary";
          Vn(!u, 'Route "' + i.id + '" has a static property "' + l + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + l + '" will be ignored.')),
          !u && !sw.has(l) && (o[l] = n[l])
      }
      Object.assign(i, o),
      Object.assign(i, Se({}, t(i), {
          lazy: void 0
      }))
  }
  function Hw(e) {
      return Promise.all(e.matches.map(t=>t.resolve()))
  }
  async function Vw(e, t, r, n, i, o, l, a) {
      let u = n.reduce((f,d)=>f.add(d.route.id), new Set)
        , s = new Set
        , c = await e({
          matches: i.map(f=>{
              let d = u.has(f.route.id);
              return Se({}, f, {
                  shouldLoad: d,
                  resolve: g=>(s.add(f.route.id),
                  d ? Ww(t, r, f, o, l, g, a) : Promise.resolve({
                      type: me.data,
                      result: void 0
                  }))
              })
          }
          ),
          request: r,
          params: i[0].params,
          context: a
      });
      return i.forEach(f=>te(s.has(f.route.id), '`match.resolve()` was not called for route id "' + f.route.id + '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),
      c.filter((f,d)=>u.has(i[d].route.id))
  }
  async function Ww(e, t, r, n, i, o, l) {
      let a, u, s = c=>{
          let f, d = new Promise((m,E)=>f = E);
          u = ()=>f(),
          t.signal.addEventListener("abort", u);
          let y = m=>typeof c != "function" ? Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ('"' + e + '" [routeId: ' + r.route.id + "]"))) : c({
              request: t,
              params: r.params,
              context: l
          }, ...m !== void 0 ? [m] : []), g;
          return o ? g = o(m=>y(m)) : g = (async()=>{
              try {
                  return {
                      type: "data",
                      result: await y()
                  }
              } catch (m) {
                  return {
                      type: "error",
                      result: m
                  }
              }
          }
          )(),
          Promise.race([g, d])
      }
      ;
      try {
          let c = r.route[e];
          if (r.route.lazy)
              if (c) {
                  let f, [d] = await Promise.all([s(c).catch(y=>{
                      f = y
                  }
                  ), ip(r.route, i, n)]);
                  if (f !== void 0)
                      throw f;
                  a = d
              } else if (await ip(r.route, i, n),
              c = r.route[e],
              c)
                  a = await s(c);
              else if (e === "action") {
                  let f = new URL(t.url)
                    , d = f.pathname + f.search;
                  throw wt(405, {
                      method: t.method,
                      pathname: d,
                      routeId: r.route.id
                  })
              } else
                  return {
                      type: me.data,
                      result: void 0
                  };
          else if (c)
              a = await s(c);
          else {
              let f = new URL(t.url)
                , d = f.pathname + f.search;
              throw wt(404, {
                  pathname: d
              })
          }
          te(a.result !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + r.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.")
      } catch (c) {
          return {
              type: me.error,
              result: c
          }
      } finally {
          u && t.signal.removeEventListener("abort", u)
      }
      return a
  }
  async function Kw(e) {
      let {result: t, type: r, status: n} = e;
      if (qm(t)) {
          let l;
          try {
              let a = t.headers.get("Content-Type");
              a && /\bapplication\/json\b/.test(a) ? t.body == null ? l = null : l = await t.json() : l = await t.text()
          } catch (a) {
              return {
                  type: me.error,
                  error: a
              }
          }
          return r === me.error ? {
              type: me.error,
              error: new sf(t.status,t.statusText,l),
              statusCode: t.status,
              headers: t.headers
          } : {
              type: me.data,
              data: l,
              statusCode: t.status,
              headers: t.headers
          }
      }
      if (r === me.error)
          return {
              type: me.error,
              error: t,
              statusCode: cf(t) ? t.status : n
          };
      if (Xw(t)) {
          var i, o;
          return {
              type: me.deferred,
              deferredData: t,
              statusCode: (i = t.init) == null ? void 0 : i.status,
              headers: ((o = t.init) == null ? void 0 : o.headers) && new Headers(t.init.headers)
          }
      }
      return {
          type: me.data,
          data: t,
          statusCode: n
      }
  }
  function Gw(e, t, r, n, i, o) {
      let l = e.headers.get("Location");
      if (te(l, "Redirects returned/thrown from loaders/actions must have a Location header"),
      !ff.test(l)) {
          let a = n.slice(0, n.findIndex(u=>u.route.id === r) + 1);
          l = Ds(new URL(t.url), a, i, !0, l, o),
          e.headers.set("Location", l)
      }
      return e
  }
  function op(e, t, r) {
      if (ff.test(e)) {
          let n = e
            , i = n.startsWith("//") ? new URL(t.protocol + n) : new URL(n)
            , o = Eo(i.pathname, r) != null;
          if (i.origin === t.origin && o)
              return i.pathname + i.search + i.hash
      }
      return e
  }
  function pn(e, t, r, n) {
      let i = e.createURL(Ym(t)).toString()
        , o = {
          signal: r
      };
      if (n && bt(n.formMethod)) {
          let {formMethod: l, formEncType: a} = n;
          o.method = l.toUpperCase(),
          a === "application/json" ? (o.headers = new Headers({
              "Content-Type": a
          }),
          o.body = JSON.stringify(n.json)) : a === "text/plain" ? o.body = n.text : a === "application/x-www-form-urlencoded" && n.formData ? o.body = As(n.formData) : o.body = n.formData
      }
      return new Request(i,o)
  }
  function As(e) {
      let t = new URLSearchParams;
      for (let[r,n] of e.entries())
          t.append(r, typeof n == "string" ? n : n.name);
      return t
  }
  function lp(e) {
      let t = new FormData;
      for (let[r,n] of e.entries())
          t.append(r, n);
      return t
  }
  function Qw(e, t, r, n, i, o) {
      let l = {}, a = null, u, s = !1, c = {}, f = n && Et(n[1]) ? n[1].error : void 0;
      return r.forEach((d,y)=>{
          let g = t[y].route.id;
          if (te(!Kr(d), "Cannot handle redirect results in processLoaderData"),
          Et(d)) {
              let m = d.error;
              f !== void 0 && (m = f,
              f = void 0),
              a = a || {};
              {
                  let E = Hi(e, g);
                  a[E.route.id] == null && (a[E.route.id] = m)
              }
              l[g] = void 0,
              s || (s = !0,
              u = cf(d.error) ? d.error.status : 500),
              d.headers && (c[g] = d.headers)
          } else
              Wr(d) ? (i.set(g, d.deferredData),
              l[g] = d.deferredData.data,
              d.statusCode != null && d.statusCode !== 200 && !s && (u = d.statusCode),
              d.headers && (c[g] = d.headers)) : (l[g] = d.data,
              d.statusCode && d.statusCode !== 200 && !s && (u = d.statusCode),
              d.headers && (c[g] = d.headers))
      }
      ),
      f !== void 0 && n && (a = {
          [n[0]]: f
      },
      l[n[0]] = void 0),
      {
          loaderData: l,
          errors: a,
          statusCode: u || 200,
          loaderHeaders: c
      }
  }
  function ap(e, t, r, n, i, o, l, a) {
      let {loaderData: u, errors: s} = Qw(t, r, n, i, a);
      for (let c = 0; c < o.length; c++) {
          let {key: f, match: d, controller: y} = o[c];
          te(l !== void 0 && l[c] !== void 0, "Did not find corresponding fetcher result");
          let g = l[c];
          if (!(y && y.signal.aborted))
              if (Et(g)) {
                  let m = Hi(e.matches, d == null ? void 0 : d.route.id);
                  s && s[m.route.id] || (s = Se({}, s, {
                      [m.route.id]: g.error
                  })),
                  e.fetchers.delete(f)
              } else if (Kr(g))
                  te(!1, "Unhandled fetcher revalidation redirect");
              else if (Wr(g))
                  te(!1, "Unhandled fetcher deferred data");
              else {
                  let m = sr(g.data);
                  e.fetchers.set(f, m)
              }
      }
      return {
          loaderData: u,
          errors: s
      }
  }
  function up(e, t, r, n) {
      let i = Se({}, t);
      for (let o of r) {
          let l = o.route.id;
          if (t.hasOwnProperty(l) ? t[l] !== void 0 && (i[l] = t[l]) : e[l] !== void 0 && o.route.loader && (i[l] = e[l]),
          n && n.hasOwnProperty(l))
              break
      }
      return i
  }
  function sp(e) {
      return e ? Et(e[1]) ? {
          actionData: {}
      } : {
          actionData: {
              [e[0]]: e[1].data
          }
      } : {}
  }
  function Hi(e, t) {
      return (t ? e.slice(0, e.findIndex(n=>n.route.id === t) + 1) : [...e]).reverse().find(n=>n.route.hasErrorBoundary === !0) || e[0]
  }
  function cp(e) {
      let t = e.length === 1 ? e[0] : e.find(r=>r.index || !r.path || r.path === "/") || {
          id: "__shim-error-route__"
      };
      return {
          matches: [{
              params: {},
              pathname: "",
              pathnameBase: "",
              route: t
          }],
          route: t
      }
  }
  function wt(e, t) {
      let {pathname: r, routeId: n, method: i, type: o} = t === void 0 ? {} : t
        , l = "Unknown Server Error"
        , a = "Unknown @remix-run/router error";
      return e === 400 ? (l = "Bad Request",
      i && r && n ? a = "You made a " + i + ' request to "' + r + '" but ' + ('did not provide a `loader` for route "' + n + '", ') + "so there is no way to handle the request." : o === "defer-action" ? a = "defer() is not supported in actions" : o === "invalid-body" && (a = "Unable to encode submission body")) : e === 403 ? (l = "Forbidden",
      a = 'Route "' + n + '" does not match URL "' + r + '"') : e === 404 ? (l = "Not Found",
      a = 'No route matches URL "' + r + '"') : e === 405 && (l = "Method Not Allowed",
      i && r && n ? a = "You made a " + i.toUpperCase() + ' request to "' + r + '" but ' + ('did not provide an `action` for route "' + n + '", ') + "so there is no way to handle the request." : i && (a = 'Invalid request method "' + i.toUpperCase() + '"')),
      new sf(e || 500,l,new Error(a),!0)
  }
  function fp(e) {
      for (let t = e.length - 1; t >= 0; t--) {
          let r = e[t];
          if (Kr(r))
              return {
                  result: r,
                  idx: t
              }
      }
  }
  function Ym(e) {
      let t = typeof e == "string" ? Mr(e) : e;
      return xo(Se({}, t, {
          hash: ""
      }))
  }
  function Yw(e, t) {
      return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== ""
  }
  function qw(e) {
      return qm(e.result) && Lw.has(e.result.status)
  }
  function Wr(e) {
      return e.type === me.deferred
  }
  function Et(e) {
      return e.type === me.error
  }
  function Kr(e) {
      return (e && e.type) === me.redirect
  }
  function Xw(e) {
      let t = e;
      return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function"
  }
  function qm(e) {
      return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u"
  }
  function Jw(e) {
      return Mw.has(e.toLowerCase())
  }
  function bt(e) {
      return bw.has(e.toLowerCase())
  }
  async function dp(e, t, r, n, i, o) {
      for (let l = 0; l < r.length; l++) {
          let a = r[l]
            , u = t[l];
          if (!u)
              continue;
          let s = e.find(f=>f.route.id === u.route.id)
            , c = s != null && !Qm(s, u) && (o && o[u.route.id]) !== void 0;
          if (Wr(a) && (i || c)) {
              let f = n[l];
              te(f, "Expected an AbortSignal for revalidating fetcher deferred result"),
              await Xm(a, f, i).then(d=>{
                  d && (r[l] = d || r[l])
              }
              )
          }
      }
  }
  async function Xm(e, t, r) {
      if (r === void 0 && (r = !1),
      !await e.deferredData.resolveData(t)) {
          if (r)
              try {
                  return {
                      type: me.data,
                      data: e.deferredData.unwrappedData
                  }
              } catch (i) {
                  return {
                      type: me.error,
                      error: i
                  }
              }
          return {
              type: me.data,
              data: e.deferredData.data
          }
      }
  }
  function df(e) {
      return new URLSearchParams(e).getAll("index").some(t=>t === "")
  }
  function Fs(e, t) {
      let r = typeof t == "string" ? Mr(t).search : t.search;
      if (e[e.length - 1].route.index && df(r || ""))
          return e[e.length - 1];
      let n = Wm(e);
      return n[n.length - 1]
  }
  function pp(e) {
      let {formMethod: t, formAction: r, formEncType: n, text: i, formData: o, json: l} = e;
      if (!(!t || !r || !n)) {
          if (i != null)
              return {
                  formMethod: t,
                  formAction: r,
                  formEncType: n,
                  formData: void 0,
                  json: void 0,
                  text: i
              };
          if (o != null)
              return {
                  formMethod: t,
                  formAction: r,
                  formEncType: n,
                  formData: o,
                  json: void 0,
                  text: void 0
              };
          if (l !== void 0)
              return {
                  formMethod: t,
                  formAction: r,
                  formEncType: n,
                  formData: void 0,
                  json: l,
                  text: void 0
              }
      }
  }
  function wu(e, t) {
      return t ? {
          state: "loading",
          location: e,
          formMethod: t.formMethod,
          formAction: t.formAction,
          formEncType: t.formEncType,
          formData: t.formData,
          json: t.json,
          text: t.text
      } : {
          state: "loading",
          location: e,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0
      }
  }
  function Zw(e, t) {
      return {
          state: "submitting",
          location: e,
          formMethod: t.formMethod,
          formAction: t.formAction,
          formEncType: t.formEncType,
          formData: t.formData,
          json: t.json,
          text: t.text
      }
  }
  function Si(e, t) {
      return e ? {
          state: "loading",
          formMethod: e.formMethod,
          formAction: e.formAction,
          formEncType: e.formEncType,
          formData: e.formData,
          json: e.json,
          text: e.text,
          data: t
      } : {
          state: "loading",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
          data: t
      }
  }
  function eS(e, t) {
      return {
          state: "submitting",
          formMethod: e.formMethod,
          formAction: e.formAction,
          formEncType: e.formEncType,
          formData: e.formData,
          json: e.json,
          text: e.text,
          data: t ? t.data : void 0
      }
  }
  function sr(e) {
      return {
          state: "idle",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
          data: e
      }
  }
  function tS(e, t) {
      try {
          let r = e.sessionStorage.getItem(Gm);
          if (r) {
              let n = JSON.parse(r);
              for (let[i,o] of Object.entries(n || {}))
                  o && Array.isArray(o) && t.set(i, new Set(o || []))
          }
      } catch {}
  }
  function rS(e, t) {
      if (t.size > 0) {
          let r = {};
          for (let[n,i] of t)
              r[n] = [...i];
          try {
              e.sessionStorage.setItem(Gm, JSON.stringify(r))
          } catch (n) {
              Vn(!1, "Failed to save applied view transitions in sessionStorage (" + n + ").")
          }
      }
  }
  /**
* React Router v6.23.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
  function zs() {
      return zs = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
      }
      ,
      zs.apply(this, arguments)
  }
  const Jm = w.createContext(null)
    , Zm = w.createContext(null)
    , eg = w.createContext(null)
    , pf = w.createContext(null)
    , Po = w.createContext({
      outlet: null,
      matches: [],
      isDataRoute: !1
  })
    , tg = w.createContext(null);
  function hf() {
      return w.useContext(pf) != null
  }
  function nS() {
      return hf() || te(!1),
      w.useContext(pf).location
  }
  const iS = w.createContext(null);
  function oS(e) {
      let t = w.useContext(Po).outlet;
      return t && w.createElement(iS.Provider, {
          value: e
      }, t)
  }
  function lS(e, t, r, n) {
      hf() || te(!1);
      let {navigator: i} = w.useContext(eg)
        , {matches: o} = w.useContext(Po)
        , l = o[o.length - 1]
        , a = l ? l.params : {};
      l && l.pathname;
      let u = l ? l.pathnameBase : "/";
      l && l.route;
      let s = nS(), c;
      c = s;
      let f = c.pathname || "/"
        , d = f;
      if (u !== "/") {
          let m = u.replace(/^\//, "").split("/");
          d = "/" + f.replace(/^\//, "").split("/").slice(m.length).join("/")
      }
      let y = $n(e, {
          pathname: d
      });
      return fS(y && y.map(m=>Object.assign({}, m, {
          params: Object.assign({}, a, m.params),
          pathname: Xr([u, i.encodeLocation ? i.encodeLocation(m.pathname).pathname : m.pathname]),
          pathnameBase: m.pathnameBase === "/" ? u : Xr([u, i.encodeLocation ? i.encodeLocation(m.pathnameBase).pathname : m.pathnameBase])
      })), o, r, n)
  }
  function aS() {
      let e = vS()
        , t = cf(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
        , r = e instanceof Error ? e.stack : null
        , i = {
          padding: "0.5rem",
          backgroundColor: "rgba(200,200,200, 0.5)"
      };
      return w.createElement(w.Fragment, null, w.createElement("h2", null, "Unexpected Application Error!"), w.createElement("h3", {
          style: {
              fontStyle: "italic"
          }
      }, t), r ? w.createElement("pre", {
          style: i
      }, r) : null, null)
  }
  const uS = w.createElement(aS, null);
  class sS extends w.Component {
      constructor(t) {
          super(t),
          this.state = {
              location: t.location,
              revalidation: t.revalidation,
              error: t.error
          }
      }
      static getDerivedStateFromError(t) {
          return {
              error: t
          }
      }
      static getDerivedStateFromProps(t, r) {
          return r.location !== t.location || r.revalidation !== "idle" && t.revalidation === "idle" ? {
              error: t.error,
              location: t.location,
              revalidation: t.revalidation
          } : {
              error: t.error !== void 0 ? t.error : r.error,
              location: r.location,
              revalidation: t.revalidation || r.revalidation
          }
      }
      componentDidCatch(t, r) {
          console.error("React Router caught the following error during render", t, r)
      }
      render() {
          return this.state.error !== void 0 ? w.createElement(Po.Provider, {
              value: this.props.routeContext
          }, w.createElement(tg.Provider, {
              value: this.state.error,
              children: this.props.component
          })) : this.props.children
      }
  }
  function cS(e) {
      let {routeContext: t, match: r, children: n} = e
        , i = w.useContext(Jm);
      return i && i.static && i.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = r.route.id),
      w.createElement(Po.Provider, {
          value: t
      }, n)
  }
  function fS(e, t, r, n) {
      var i;
      if (t === void 0 && (t = []),
      r === void 0 && (r = null),
      n === void 0 && (n = null),
      e == null) {
          var o;
          if ((o = r) != null && o.errors)
              e = r.matches;
          else
              return null
      }
      let l = e
        , a = (i = r) == null ? void 0 : i.errors;
      if (a != null) {
          let c = l.findIndex(f=>f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0);
          c >= 0 || te(!1),
          l = l.slice(0, Math.min(l.length, c + 1))
      }
      let u = !1
        , s = -1;
      if (r && n && n.v7_partialHydration)
          for (let c = 0; c < l.length; c++) {
              let f = l[c];
              if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (s = c),
              f.route.id) {
                  let {loaderData: d, errors: y} = r
                    , g = f.route.loader && d[f.route.id] === void 0 && (!y || y[f.route.id] === void 0);
                  if (f.route.lazy || g) {
                      u = !0,
                      s >= 0 ? l = l.slice(0, s + 1) : l = [l[0]];
                      break
                  }
              }
          }
      return l.reduceRight((c,f,d)=>{
          let y, g = !1, m = null, E = null;
          r && (y = a && f.route.id ? a[f.route.id] : void 0,
          m = f.route.errorElement || uS,
          u && (s < 0 && d === 0 ? (mS("route-fallback"),
          g = !0,
          E = null) : s === d && (g = !0,
          E = f.route.hydrateFallbackElement || null)));
          let h = t.concat(l.slice(0, d + 1))
            , p = ()=>{
              let v;
              return y ? v = m : g ? v = E : f.route.Component ? v = w.createElement(f.route.Component, null) : f.route.element ? v = f.route.element : v = c,
              w.createElement(cS, {
                  match: f,
                  routeContext: {
                      outlet: c,
                      matches: h,
                      isDataRoute: r != null
                  },
                  children: v
              })
          }
          ;
          return r && (f.route.ErrorBoundary || f.route.errorElement || d === 0) ? w.createElement(sS, {
              location: r.location,
              revalidation: r.revalidation,
              component: m,
              error: y,
              children: p(),
              routeContext: {
                  outlet: null,
                  matches: h,
                  isDataRoute: !0
              }
          }) : p()
      }
      , null)
  }
  var Us = function(e) {
      return e.UseBlocker = "useBlocker",
      e.UseLoaderData = "useLoaderData",
      e.UseActionData = "useActionData",
      e.UseRouteError = "useRouteError",
      e.UseNavigation = "useNavigation",
      e.UseRouteLoaderData = "useRouteLoaderData",
      e.UseMatches = "useMatches",
      e.UseRevalidator = "useRevalidator",
      e.UseNavigateStable = "useNavigate",
      e.UseRouteId = "useRouteId",
      e
  }(Us || {});
  function dS(e) {
      let t = w.useContext(Zm);
      return t || te(!1),
      t
  }
  function pS(e) {
      let t = w.useContext(Po);
      return t || te(!1),
      t
  }
  function hS(e) {
      let t = pS()
        , r = t.matches[t.matches.length - 1];
      return r.route.id || te(!1),
      r.route.id
  }
  function vS() {
      var e;
      let t = w.useContext(tg)
        , r = dS(Us.UseRouteError)
        , n = hS(Us.UseRouteError);
      return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n]
  }
  const hp = {};
  function mS(e, t, r) {
      hp[e] || (hp[e] = !0)
  }
  function gS(e) {
      return oS(e.context)
  }
  function yS(e) {
      let {basename: t="/", children: r=null, location: n, navigationType: i=Te.Pop, navigator: o, static: l=!1, future: a} = e;
      hf() && te(!1);
      let u = t.replace(/^\/*/, "/")
        , s = w.useMemo(()=>({
          basename: u,
          navigator: o,
          static: l,
          future: zs({
              v7_relativeSplatPath: !1
          }, a)
      }), [u, a, o, l]);
      typeof n == "string" && (n = Mr(n));
      let {pathname: c="/", search: f="", hash: d="", state: y=null, key: g="default"} = n
        , m = w.useMemo(()=>{
          let E = Eo(c, u);
          return E == null ? null : {
              location: {
                  pathname: E,
                  search: f,
                  hash: d,
                  state: y,
                  key: g
              },
              navigationType: i
          }
      }
      , [u, c, f, d, y, g, i]);
      return m == null ? null : w.createElement(eg.Provider, {
          value: s
      }, w.createElement(pf.Provider, {
          children: r,
          value: m
      }))
  }
  new Promise(()=>{}
  );
  function wS(e) {
      let t = {
          hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
      };
      return e.Component && Object.assign(t, {
          element: w.createElement(e.Component),
          Component: void 0
      }),
      e.HydrateFallback && Object.assign(t, {
          hydrateFallbackElement: w.createElement(e.HydrateFallback),
          HydrateFallback: void 0
      }),
      e.ErrorBoundary && Object.assign(t, {
          errorElement: w.createElement(e.ErrorBoundary),
          ErrorBoundary: void 0
      }),
      t
  }
  /**
* React Router DOM v6.23.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
  function Wl() {
      return Wl = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
      }
      ,
      Wl.apply(this, arguments)
  }
  const SS = "6";
  try {
      window.__reactRouterVersion = SS
  } catch {}
  function xS(e, t) {
      return Fw({
          basename: void 0,
          future: Wl({}, void 0, {
              v7_prependBasename: !0
          }),
          history: lw({
              window: void 0
          }),
          hydrationData: ES(),
          routes: e,
          mapRouteProperties: wS,
          unstable_dataStrategy: void 0,
          window: void 0
      }).initialize()
  }
  function ES() {
      var e;
      let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
      return t && t.errors && (t = Wl({}, t, {
          errors: PS(t.errors)
      })),
      t
  }
  function PS(e) {
      if (!e)
          return null;
      let t = Object.entries(e)
        , r = {};
      for (let[n,i] of t)
          if (i && i.__type === "RouteErrorResponse")
              r[n] = new sf(i.status,i.statusText,i.data,i.internal === !0);
          else if (i && i.__type === "Error") {
              if (i.__subType) {
                  let o = window[i.__subType];
                  if (typeof o == "function")
                      try {
                          let l = new o(i.message);
                          l.stack = "",
                          r[n] = l
                      } catch {}
              }
              if (r[n] == null) {
                  let o = new Error(i.message);
                  o.stack = "",
                  r[n] = o
              }
          } else
              r[n] = i;
      return r
  }
  const CS = w.createContext({
      isTransitioning: !1
  })
    , _S = w.createContext(new Map)
    , RS = "startTransition"
    , vp = In[RS]
    , TS = "flushSync"
    , mp = ow[TS];
  function kS(e) {
      vp ? vp(e) : e()
  }
  function xi(e) {
      mp ? mp(e) : e()
  }
  class $S {
      constructor() {
          this.status = "pending",
          this.promise = new Promise((t,r)=>{
              this.resolve = n=>{
                  this.status === "pending" && (this.status = "resolved",
                  t(n))
              }
              ,
              this.reject = n=>{
                  this.status === "pending" && (this.status = "rejected",
                  r(n))
              }
          }
          )
      }
  }
  function OS(e) {
      let {fallbackElement: t, router: r, future: n} = e
        , [i,o] = w.useState(r.state)
        , [l,a] = w.useState()
        , [u,s] = w.useState({
          isTransitioning: !1
      })
        , [c,f] = w.useState()
        , [d,y] = w.useState()
        , [g,m] = w.useState()
        , E = w.useRef(new Map)
        , {v7_startTransition: h} = n || {}
        , p = w.useCallback(S=>{
          h ? kS(S) : S()
      }
      , [h])
        , v = w.useCallback((S,O)=>{
          let {deletedFetchers: L, unstable_flushSync: M, unstable_viewTransitionOpts: V} = O;
          L.forEach(ne=>E.current.delete(ne)),
          S.fetchers.forEach((ne,se)=>{
              ne.data !== void 0 && E.current.set(se, ne.data)
          }
          );
          let ie = r.window == null || typeof r.window.document.startViewTransition != "function";
          if (!V || ie) {
              M ? xi(()=>o(S)) : p(()=>o(S));
              return
          }
          if (M) {
              xi(()=>{
                  d && (c && c.resolve(),
                  d.skipTransition()),
                  s({
                      isTransitioning: !0,
                      flushSync: !0,
                      currentLocation: V.currentLocation,
                      nextLocation: V.nextLocation
                  })
              }
              );
              let ne = r.window.document.startViewTransition(()=>{
                  xi(()=>o(S))
              }
              );
              ne.finished.finally(()=>{
                  xi(()=>{
                      f(void 0),
                      y(void 0),
                      a(void 0),
                      s({
                          isTransitioning: !1
                      })
                  }
                  )
              }
              ),
              xi(()=>y(ne));
              return
          }
          d ? (c && c.resolve(),
          d.skipTransition(),
          m({
              state: S,
              currentLocation: V.currentLocation,
              nextLocation: V.nextLocation
          })) : (a(S),
          s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: V.currentLocation,
              nextLocation: V.nextLocation
          }))
      }
      , [r.window, d, c, E, p]);
      w.useLayoutEffect(()=>r.subscribe(v), [r, v]),
      w.useEffect(()=>{
          u.isTransitioning && !u.flushSync && f(new $S)
      }
      , [u]),
      w.useEffect(()=>{
          if (c && l && r.window) {
              let S = l
                , O = c.promise
                , L = r.window.document.startViewTransition(async()=>{
                  p(()=>o(S)),
                  await O
              }
              );
              L.finished.finally(()=>{
                  f(void 0),
                  y(void 0),
                  a(void 0),
                  s({
                      isTransitioning: !1
                  })
              }
              ),
              y(L)
          }
      }
      , [p, l, c, r.window]),
      w.useEffect(()=>{
          c && l && i.location.key === l.location.key && c.resolve()
      }
      , [c, d, i.location, l]),
      w.useEffect(()=>{
          !u.isTransitioning && g && (a(g.state),
          s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: g.currentLocation,
              nextLocation: g.nextLocation
          }),
          m(void 0))
      }
      , [u.isTransitioning, g]),
      w.useEffect(()=>{}
      , []);
      let C = w.useMemo(()=>({
          createHref: r.createHref,
          encodeLocation: r.encodeLocation,
          go: S=>r.navigate(S),
          push: (S,O,L)=>r.navigate(S, {
              state: O,
              preventScrollReset: L == null ? void 0 : L.preventScrollReset
          }),
          replace: (S,O,L)=>r.navigate(S, {
              replace: !0,
              state: O,
              preventScrollReset: L == null ? void 0 : L.preventScrollReset
          })
      }), [r])
        , k = r.basename || "/"
        , b = w.useMemo(()=>({
          router: r,
          navigator: C,
          static: !1,
          basename: k
      }), [r, C, k]);
      return w.createElement(w.Fragment, null, w.createElement(Jm.Provider, {
          value: b
      }, w.createElement(Zm.Provider, {
          value: i
      }, w.createElement(_S.Provider, {
          value: E.current
      }, w.createElement(CS.Provider, {
          value: u
      }, w.createElement(yS, {
          basename: k,
          location: i.location,
          navigationType: i.historyAction,
          navigator: C,
          future: {
              v7_relativeSplatPath: r.future.v7_relativeSplatPath
          }
      }, i.initialized || r.future.v7_partialHydration ? w.createElement(jS, {
          routes: r.routes,
          future: r.future,
          state: i
      }) : t))))), null)
  }
  function jS(e) {
      let {routes: t, future: r, state: n} = e;
      return lS(t, void 0, n, r)
  }
  var gp;
  (function(e) {
      e.UseScrollRestoration = "useScrollRestoration",
      e.UseSubmit = "useSubmit",
      e.UseSubmitFetcher = "useSubmitFetcher",
      e.UseFetcher = "useFetcher",
      e.useViewTransitionState = "useViewTransitionState"
  }
  )(gp || (gp = {}));
  var yp;
  (function(e) {
      e.UseFetcher = "useFetcher",
      e.UseFetchers = "useFetchers",
      e.UseScrollRestoration = "useScrollRestoration"
  }
  )(yp || (yp = {}));
  function Ge() {
      return Ge = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
      }
      ,
      Ge.apply(this, arguments)
  }
  function bS(e, t) {
      var r = w.useState(function() {
          try {
              var l = typeof window < "u" && window.localStorage.getItem(e);
              return l || t
          } catch {
              return t
          }
      })
        , n = r[0]
        , i = r[1]
        , o = function(a) {
          try {
              var u = a instanceof Function ? a(n) : a;
              i(u),
              window.localStorage.setItem(e, u)
          } catch (s) {
              console.log(s)
          }
      };
      return [n, o]
  }
  var co = {
      items: [],
      isEmpty: !0,
      totalItems: 0,
      totalUniqueItems: 0,
      cartTotal: 0,
      metadata: {}
  }
    , rg = w.createContext(co)
    , NS = function(t) {
      return t === void 0 && (t = 12),
      [].concat(Array(t)).map(function() {
          return (~~(Math.random() * 36)).toString(36)
      }).join("")
  }
    , Co = function() {
      var t = w.useContext(rg);
      if (!t)
          throw new Error("Expected to be wrapped in a CartProvider");
      return t
  };
  function MS(e, t) {
      switch (t.type) {
      case "SET_ITEMS":
          return el(e, t.payload);
      case "ADD_ITEM":
          {
              var r = [].concat(e.items, [t.payload]);
              return el(e, r)
          }
      case "UPDATE_ITEM":
          {
              var n = e.items.map(function(o) {
                  return o.id !== t.id ? o : Ge({}, o, t.payload)
              });
              return el(e, n)
          }
      case "REMOVE_ITEM":
          {
              var i = e.items.filter(function(o) {
                  return o.id !== t.id
              });
              return el(e, i)
          }
      case "EMPTY_CART":
          return co;
      case "CLEAR_CART_META":
          return Ge({}, e, {
              metadata: {}
          });
      case "SET_CART_META":
          return Ge({}, e, {
              metadata: Ge({}, t.payload)
          });
      case "UPDATE_CART_META":
          return Ge({}, e, {
              metadata: Ge({}, e.metadata, t.payload)
          });
      default:
          throw new Error("No action specified")
      }
  }
  var el = function(t, r) {
      t === void 0 && (t = co);
      var n = AS(r)
        , i = n === 0;
      return Ge({}, co, t, {
          items: LS(r),
          totalItems: DS(r),
          totalUniqueItems: n,
          cartTotal: IS(r),
          isEmpty: i
      })
  }
    , LS = function(t) {
      return t.map(function(r) {
          return Ge({}, r, {
              itemTotal: r.price * r.quantity
          })
      })
  }
    , IS = function(t) {
      return t.reduce(function(r, n) {
          return r + n.quantity * n.price
      }, 0)
  }
    , DS = function(t) {
      return t.reduce(function(r, n) {
          return r + n.quantity
      }, 0)
  }
    , AS = function(t) {
      return t.length
  }
    , FS = function(t) {
      var r = t.children
        , n = t.id
        , i = t.defaultItems
        , o = i === void 0 ? [] : i
        , l = t.onSetItems
        , a = t.onItemAdd
        , u = t.onItemUpdate
        , s = t.onItemRemove
        , c = t.storage
        , f = c === void 0 ? bS : c
        , d = t.metadata
        , y = n || NS()
        , g = f(n ? "react-use-cart-" + y : "react-use-cart", JSON.stringify(Ge({
          id: y
      }, co, {
          items: o,
          metadata: d
      })))
        , m = g[0]
        , E = g[1]
        , h = w.useReducer(MS, JSON.parse(m))
        , p = h[0]
        , v = h[1];
      w.useEffect(function() {
          E(JSON.stringify(p))
      }, [p, E]);
      var C = function(W) {
          v({
              type: "SET_ITEMS",
              payload: W.map(function(J) {
                  return Ge({}, J, {
                      quantity: J.quantity || 1
                  })
              })
          }),
          l && l(W)
      }
        , k = function(W, J) {
          if (J === void 0 && (J = 1),
          !W.id)
              throw new Error("You must provide an `id` for items");
          if (!(J <= 0)) {
              var $ = p.items.find(function(Z) {
                  return Z.id === W.id
              });
              if (!$ && !W.hasOwnProperty("price"))
                  throw new Error("You must pass a `price` for new items");
              if (!$) {
                  var F = Ge({}, W, {
                      quantity: J
                  });
                  v({
                      type: "ADD_ITEM",
                      payload: F
                  }),
                  a && a(F);
                  return
              }
              var z = Ge({}, W, {
                  quantity: $.quantity + J
              });
              v({
                  type: "UPDATE_ITEM",
                  id: W.id,
                  payload: z
              }),
              u && u(z)
          }
      }
        , b = function(W, J) {
          !W || !J || (v({
              type: "UPDATE_ITEM",
              id: W,
              payload: J
          }),
          u && u(J))
      }
        , S = function(W, J) {
          if (J <= 0) {
              s && s(W),
              v({
                  type: "REMOVE_ITEM",
                  id: W
              });
              return
          }
          var $ = p.items.find(function(z) {
              return z.id === W
          });
          if (!$)
              throw new Error("No such item to update");
          var F = Ge({}, $, {
              quantity: J
          });
          v({
              type: "UPDATE_ITEM",
              id: W,
              payload: F
          }),
          u && u(F)
      }
        , O = function(W) {
          W && (v({
              type: "REMOVE_ITEM",
              id: W
          }),
          s && s(W))
      }
        , L = function() {
          return v({
              type: "EMPTY_CART"
          })
      }
        , M = function(W) {
          return p.items.find(function(J) {
              return J.id === W
          })
      }
        , V = function(W) {
          return p.items.some(function(J) {
              return J.id === W
          })
      }
        , ie = function() {
          v({
              type: "CLEAR_CART_META"
          })
      }
        , ne = function(W) {
          W && v({
              type: "SET_CART_META",
              payload: W
          })
      }
        , se = function(W) {
          W && v({
              type: "UPDATE_CART_META",
              payload: W
          })
      };
      return w.createElement(rg.Provider, {
          value: Ge({}, p, {
              getItem: M,
              inCart: V,
              setItems: C,
              addItem: k,
              updateItem: b,
              updateItemQuantity: S,
              removeItem: O,
              emptyCart: L,
              clearCartMetadata: ie,
              setCartMetadata: ne,
              updateCartMetadata: se
          })
      }, r)
  }
    , ng = {
      color: void 0,
      size: void 0,
      className: void 0,
      style: void 0,
      attr: void 0
  }
    , wp = U.createContext && U.createContext(ng)
    , zS = ["attr", "size", "title"];
  function US(e, t) {
      if (e == null)
          return {};
      var r = BS(e, t), n, i;
      if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
              n = o[i],
              !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
  }
  function BS(e, t) {
      if (e == null)
          return {};
      var r = {};
      for (var n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
              if (t.indexOf(n) >= 0)
                  continue;
              r[n] = e[n]
          }
      return r
  }
  function Kl() {
      return Kl = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
      }
      ,
      Kl.apply(this, arguments)
  }
  function Sp(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(i) {
              return Object.getOwnPropertyDescriptor(e, i).enumerable
          })),
          r.push.apply(r, n)
      }
      return r
  }
  function Gl(e) {
      for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t] != null ? arguments[t] : {};
          t % 2 ? Sp(Object(r), !0).forEach(function(n) {
              HS(e, n, r[n])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sp(Object(r)).forEach(function(n) {
              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
      }
      return e
  }
  function HS(e, t, r) {
      return t = VS(t),
      t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : e[t] = r,
      e
  }
  function VS(e) {
      var t = WS(e, "string");
      return typeof t == "symbol" ? t : t + ""
  }
  function WS(e, t) {
      if (typeof e != "object" || !e)
          return e;
      var r = e[Symbol.toPrimitive];
      if (r !== void 0) {
          var n = r.call(e, t || "default");
          if (typeof n != "object")
              return n;
          throw new TypeError("@@toPrimitive must return a primitive value.")
      }
      return (t === "string" ? String : Number)(e)
  }
  function ig(e) {
      return e && e.map((t,r)=>U.createElement(t.tag, Gl({
          key: r
      }, t.attr), ig(t.child)))
  }
  function KS(e) {
      return t=>U.createElement(GS, Kl({
          attr: Gl({}, e.attr)
      }, t), ig(e.child))
  }
  function GS(e) {
      var t = r=>{
          var {attr: n, size: i, title: o} = e, l = US(e, zS), a = i || r.size || "1em", u;
          return r.className && (u = r.className),
          e.className && (u = (u ? u + " " : "") + e.className),
          U.createElement("svg", Kl({
              stroke: "currentColor",
              fill: "currentColor",
              strokeWidth: ""
          }, r.attr, n, l, {
              className: u,
              style: Gl(Gl({
                  color: e.color || r.color
              }, r.style), e.style),
              height: a,
              width: a,
              xmlns: "http://www.w3.org/2000/svg"
          }), o && U.createElement("title", null, o), e.children)
      }
      ;
      return wp !== void 0 ? U.createElement(wp.Consumer, null, r=>t(r)) : t(ng)
  }
  function QS(e) {
      return KS({
          tag: "svg",
          attr: {
              viewBox: "0 0 1024 1024"
          }
      })(e)
  }
  function YS() {
      return T.jsx("div", {
          id: "MainHeader",
          className: "border-b",
          children: T.jsx("nav", {
              className: "flex items-center justify-between w-full mx-auto max-w-[1200px]",
              children: T.jsx("div", {
                  className: "flex items-center w-full bg-white",
                  children: T.jsxs("div", {
                      className: "flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto",
                      children: [T.jsx("a", {
                          href: "/",
                          children: T.jsx("img", {
                              width: "200",
                              src: "GomeSteplogo.png"
                          })
                      }), T.jsx("div", {
                          className: "w-full",
                          children: T.jsx("img", {
                              src: "search.png"
                          })
                      })]
                  })
              })
          })
      })
  }
  function qS() {
      const {totalUniqueItems: e} = Co()
        , t = ()=>{
          window.location.href = "http://test.com"
      }
      ;
      return T.jsx("div", {
          id: "TopMenu",
          className: "border-b",
          children: T.jsxs("div", {
              className: "flex items-center justify-between w-full mx-auto max-w-[1200px]",
              children: [T.jsxs("ul", {
                  id: "TopMenuLeft",
                  className: "flex items-center text-[11px] text-[#333333] px-2 h-8",
                  children: [T.jsx("li", {
                      className: "relative px-3",
                      children: T.jsx("a", {
                          href: "#",
                          className: "flex items-center gap-2 hover:underline cursor-pointer",
                          children: T.jsx("div", {
                              children: "Login"
                          })
                      })
                  }), T.jsx("li", {
                      className: "px-3 hover:underline cursor-pointer",
                      children: "Daily Deals"
                  }), T.jsx("li", {
                      className: "px-3 hover:underline cursor-pointer",
                      children: "Help & Contact"
                  })]
              }), T.jsxs("ul", {
                  id: "TopMenuRight",
                  className: "flex items-center text-[11px] text-[#333333] ",
                  children: [T.jsx("e", {
                      className: "",
                      children: T.jsx("b", {
                          href: "/cart",
                          children: ""
                      })
                  }), T.jsx("li", {
                      className: "px-3 hover:underline cursor-pointer",
                      onClick: t,
                      children: T.jsxs("div", {
                          className: "relative",
                          children: [T.jsx(QS, {
                              size: 22
                          }), T.jsx("div", {
                              className: "",
                              children: T.jsx("div", {
                                  className: " ",
                                  children: e
                              })
                          })]
                      })
                  })]
              })]
          })
      })
  }
  function XS() {
      const e = [{
          id: 1,
          name: "Telegram",
          href: "https://t.me/gomestep          "
      }, {
          id: 2,
          name: "Twitter",
          href: "https://twitter.com/eboyonsol"
      }, {
          id: 3,
          name: "Pump.fun",
          href: "https://pump.fun/EsNBGuxtHgmMywjFzc3S9Q1k92wiFGYftqAn2sKj1BQD"
      }];
      return T.jsx(T.Fragment, {
          children: T.jsx("div", {
              id: "SubMenu",
              className: "border-b",
              children: T.jsx("div", {
                  className: "flex items-center justify-evenly w-full mx-auto max-w-[1200px]",
                  children: T.jsx("ul", {
                      id: "TopMenuLeft",
                      className: `\r
                          flex \r
                          items-center \r
                          text-[13px] \r
                          text-[#333333]\r
                          px-2 \r
                          h-8\r
                      `,
                      children: e.map(t=>T.jsx("li", {
                          className: "px-3 hover:underline cursor-pointer",
                          children: T.jsxs("a", {
                              href: t.href,
                              children: [" ", t.name]
                          })
                      }, t.id))
                  })
              })
          })
      })
  }
  function JS() {
      return T.jsxs("div", {
          id: "Layout",
          className: "mx-auto",
          children: [T.jsx(qS, {}), T.jsx(YS, {}), T.jsx(XS, {})]
      })
  }
  function ZS() {
      return T.jsxs(FS, {
          children: [T.jsx(JS, {}), T.jsx(gS, {})]
      })
  }
  var ex = Object.defineProperty
    , tx = (e,t,r)=>t in e ? ex(e, t, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
  }) : e[t] = r
    , Su = (e,t,r)=>(tx(e, typeof t != "symbol" ? t + "" : t, r),
  r);
  let rx = class {
      constructor() {
          Su(this, "current", this.detect()),
          Su(this, "handoffState", "pending"),
          Su(this, "currentId", 0)
      }
      set(t) {
          this.current !== t && (this.handoffState = "pending",
          this.currentId = 0,
          this.current = t)
      }
      reset() {
          this.set(this.detect())
      }
      nextId() {
          return ++this.currentId
      }
      get isServer() {
          return this.current === "server"
      }
      get isClient() {
          return this.current === "client"
      }
      detect() {
          return typeof window > "u" || typeof document > "u" ? "server" : "client"
      }
      handoff() {
          this.handoffState === "pending" && (this.handoffState = "complete")
      }
      get isHandoffComplete() {
          return this.handoffState === "complete"
      }
  }
    , qt = new rx
    , Tt = (e,t)=>{
      qt.isServer ? w.useEffect(e, t) : w.useLayoutEffect(e, t)
  }
  ;
  function Xt(e) {
      let t = w.useRef(e);
      return Tt(()=>{
          t.current = e
      }
      , [e]),
      t
  }
  let ye = function(e) {
      let t = Xt(e);
      return U.useCallback((...r)=>t.current(...r), [t])
  };
  function wa(e) {
      typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch(t=>setTimeout(()=>{
          throw t
      }
      ))
  }
  function un() {
      let e = []
        , t = {
          addEventListener(r, n, i, o) {
              return r.addEventListener(n, i, o),
              t.add(()=>r.removeEventListener(n, i, o))
          },
          requestAnimationFrame(...r) {
              let n = requestAnimationFrame(...r);
              return t.add(()=>cancelAnimationFrame(n))
          },
          nextFrame(...r) {
              return t.requestAnimationFrame(()=>t.requestAnimationFrame(...r))
          },
          setTimeout(...r) {
              let n = setTimeout(...r);
              return t.add(()=>clearTimeout(n))
          },
          microTask(...r) {
              let n = {
                  current: !0
              };
              return wa(()=>{
                  n.current && r[0]()
              }
              ),
              t.add(()=>{
                  n.current = !1
              }
              )
          },
          style(r, n, i) {
              let o = r.style.getPropertyValue(n);
              return Object.assign(r.style, {
                  [n]: i
              }),
              this.add(()=>{
                  Object.assign(r.style, {
                      [n]: o
                  })
              }
              )
          },
          group(r) {
              let n = un();
              return r(n),
              this.add(()=>n.dispose())
          },
          add(r) {
              return e.push(r),
              ()=>{
                  let n = e.indexOf(r);
                  if (n >= 0)
                      for (let i of e.splice(n, 1))
                          i()
              }
          },
          dispose() {
              for (let r of e.splice(0))
                  r()
          }
      };
      return t
  }
  function vf() {
      let[e] = w.useState(un);
      return w.useEffect(()=>()=>e.dispose(), [e]),
      e
  }
  function nx() {
      let e = typeof document > "u";
      return "useSyncExternalStore"in In ? (t=>t.useSyncExternalStore)(In)(()=>()=>{}
      , ()=>!1, ()=>!e) : !1
  }
  function Yn() {
      let e = nx()
        , [t,r] = w.useState(qt.isHandoffComplete);
      return t && qt.isHandoffComplete === !1 && r(!1),
      w.useEffect(()=>{
          t !== !0 && r(!0)
      }
      , [t]),
      w.useEffect(()=>qt.handoff(), []),
      e ? !1 : t
  }
  var xp;
  let qn = (xp = U.useId) != null ? xp : function() {
      let e = Yn()
        , [t,r] = U.useState(e ? ()=>qt.nextId() : null);
      return Tt(()=>{
          t === null && r(qt.nextId())
      }
      , [t]),
      t != null ? "" + t : void 0
  }
  ;
  function Qe(e, t, ...r) {
      if (e in t) {
          let i = t[e];
          return typeof i == "function" ? i(...r) : i
      }
      let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(i=>`"${i}"`).join(", ")}.`);
      throw Error.captureStackTrace && Error.captureStackTrace(n, Qe),
      n
  }
  function og(e) {
      return qt.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
  }
  let Bs = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");
  var zr = (e=>(e[e.First = 1] = "First",
  e[e.Previous = 2] = "Previous",
  e[e.Next = 4] = "Next",
  e[e.Last = 8] = "Last",
  e[e.WrapAround = 16] = "WrapAround",
  e[e.NoScroll = 32] = "NoScroll",
  e))(zr || {})
    , lg = (e=>(e[e.Error = 0] = "Error",
  e[e.Overflow = 1] = "Overflow",
  e[e.Success = 2] = "Success",
  e[e.Underflow = 3] = "Underflow",
  e))(lg || {})
    , ix = (e=>(e[e.Previous = -1] = "Previous",
  e[e.Next = 1] = "Next",
  e))(ix || {});
  function ox(e=document.body) {
      return e == null ? [] : Array.from(e.querySelectorAll(Bs)).sort((t,r)=>Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)))
  }
  var ag = (e=>(e[e.Strict = 0] = "Strict",
  e[e.Loose = 1] = "Loose",
  e))(ag || {});
  function lx(e, t=0) {
      var r;
      return e === ((r = og(e)) == null ? void 0 : r.body) ? !1 : Qe(t, {
          0() {
              return e.matches(Bs)
          },
          1() {
              let n = e;
              for (; n !== null; ) {
                  if (n.matches(Bs))
                      return !0;
                  n = n.parentElement
              }
              return !1
          }
      })
  }
  var ax = (e=>(e[e.Keyboard = 0] = "Keyboard",
  e[e.Mouse = 1] = "Mouse",
  e))(ax || {});
  typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", e=>{
      e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
  }
  , !0),
  document.addEventListener("click", e=>{
      e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "")
  }
  , !0));
  function Jr(e) {
      e == null || e.focus({
          preventScroll: !0
      })
  }
  let ux = ["textarea", "input"].join(",");
  function sx(e) {
      var t, r;
      return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, ux)) != null ? r : !1
  }
  function cx(e, t=r=>r) {
      return e.slice().sort((r,n)=>{
          let i = t(r)
            , o = t(n);
          if (i === null || o === null)
              return 0;
          let l = i.compareDocumentPosition(o);
          return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
      }
      )
  }
  function wl(e, t, {sorted: r=!0, relativeTo: n=null, skipElements: i=[]}={}) {
      let o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument
        , l = Array.isArray(e) ? r ? cx(e) : e : ox(e);
      i.length > 0 && l.length > 1 && (l = l.filter(y=>!i.includes(y))),
      n = n ?? o.activeElement;
      let a = (()=>{
          if (t & 5)
              return 1;
          if (t & 10)
              return -1;
          throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
      }
      )(), u = (()=>{
          if (t & 1)
              return 0;
          if (t & 2)
              return Math.max(0, l.indexOf(n)) - 1;
          if (t & 4)
              return Math.max(0, l.indexOf(n)) + 1;
          if (t & 8)
              return l.length - 1;
          throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
      }
      )(), s = t & 32 ? {
          preventScroll: !0
      } : {}, c = 0, f = l.length, d;
      do {
          if (c >= f || c + f <= 0)
              return 0;
          let y = u + c;
          if (t & 16)
              y = (y + f) % f;
          else {
              if (y < 0)
                  return 3;
              if (y >= f)
                  return 1
          }
          d = l[y],
          d == null || d.focus(s),
          c += a
      } while (d !== o.activeElement);
      return t & 6 && sx(d) && d.select(),
      2
  }
  function ug() {
      return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
  }
  function fx() {
      return /Android/gi.test(window.navigator.userAgent)
  }
  function dx() {
      return ug() || fx()
  }
  function tl(e, t, r) {
      let n = Xt(t);
      w.useEffect(()=>{
          function i(o) {
              n.current(o)
          }
          return document.addEventListener(e, i, r),
          ()=>document.removeEventListener(e, i, r)
      }
      , [e, r])
  }
  function sg(e, t, r) {
      let n = Xt(t);
      w.useEffect(()=>{
          function i(o) {
              n.current(o)
          }
          return window.addEventListener(e, i, r),
          ()=>window.removeEventListener(e, i, r)
      }
      , [e, r])
  }
  function px(e, t, r=!0) {
      let n = w.useRef(!1);
      w.useEffect(()=>{
          requestAnimationFrame(()=>{
              n.current = r
          }
          )
      }
      , [r]);
      function i(l, a) {
          if (!n.current || l.defaultPrevented)
              return;
          let u = a(l);
          if (u === null || !u.getRootNode().contains(u) || !u.isConnected)
              return;
          let s = function c(f) {
              return typeof f == "function" ? c(f()) : Array.isArray(f) || f instanceof Set ? f : [f]
          }(e);
          for (let c of s) {
              if (c === null)
                  continue;
              let f = c instanceof HTMLElement ? c : c.current;
              if (f != null && f.contains(u) || l.composed && l.composedPath().includes(f))
                  return
          }
          return !lx(u, ag.Loose) && u.tabIndex !== -1 && l.preventDefault(),
          t(l, u)
      }
      let o = w.useRef(null);
      tl("pointerdown", l=>{
          var a, u;
          n.current && (o.current = ((u = (a = l.composedPath) == null ? void 0 : a.call(l)) == null ? void 0 : u[0]) || l.target)
      }
      , !0),
      tl("mousedown", l=>{
          var a, u;
          n.current && (o.current = ((u = (a = l.composedPath) == null ? void 0 : a.call(l)) == null ? void 0 : u[0]) || l.target)
      }
      , !0),
      tl("click", l=>{
          dx() || o.current && (i(l, ()=>o.current),
          o.current = null)
      }
      , !0),
      tl("touchend", l=>i(l, ()=>l.target instanceof HTMLElement ? l.target : null), !0),
      sg("blur", l=>i(l, ()=>window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
  }
  function _o(...e) {
      return w.useMemo(()=>og(...e), [...e])
  }
  let cg = Symbol();
  function hx(e, t=!0) {
      return Object.assign(e, {
          [cg]: t
      })
  }
  function Dt(...e) {
      let t = w.useRef(e);
      w.useEffect(()=>{
          t.current = e
      }
      , [e]);
      let r = ye(n=>{
          for (let i of t.current)
              i != null && (typeof i == "function" ? i(n) : i.current = n)
      }
      );
      return e.every(n=>n == null || (n == null ? void 0 : n[cg])) ? void 0 : r
  }
  function mf(e, t) {
      let r = w.useRef([])
        , n = ye(e);
      w.useEffect(()=>{
          let i = [...r.current];
          for (let[o,l] of t.entries())
              if (r.current[o] !== l) {
                  let a = n(t, i);
                  return r.current = t,
                  a
              }
      }
      , [n, ...t])
  }
  function Ql(...e) {
      return Array.from(new Set(e.flatMap(t=>typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ")
  }
  var Yl = (e=>(e[e.None = 0] = "None",
  e[e.RenderStrategy = 1] = "RenderStrategy",
  e[e.Static = 2] = "Static",
  e))(Yl || {})
    , yr = (e=>(e[e.Unmount = 0] = "Unmount",
  e[e.Hidden = 1] = "Hidden",
  e))(yr || {});
  function kt({ourProps: e, theirProps: t, slot: r, defaultTag: n, features: i, visible: o=!0, name: l, mergeRefs: a}) {
      a = a ?? vx;
      let u = fg(t, e);
      if (o)
          return rl(u, r, n, l, a);
      let s = i ?? 0;
      if (s & 2) {
          let {static: c=!1, ...f} = u;
          if (c)
              return rl(f, r, n, l, a)
      }
      if (s & 1) {
          let {unmount: c=!0, ...f} = u;
          return Qe(c ? 0 : 1, {
              0() {
                  return null
              },
              1() {
                  return rl({
                      ...f,
                      hidden: !0,
                      style: {
                          display: "none"
                      }
                  }, r, n, l, a)
              }
          })
      }
      return rl(u, r, n, l, a)
  }
  function rl(e, t={}, r, n, i) {
      let {as: o=r, children: l, refName: a="ref", ...u} = xu(e, ["unmount", "static"])
        , s = e.ref !== void 0 ? {
          [a]: e.ref
      } : {}
        , c = typeof l == "function" ? l(t) : l;
      "className"in u && u.className && typeof u.className == "function" && (u.className = u.className(t));
      let f = {};
      if (t) {
          let d = !1
            , y = [];
          for (let[g,m] of Object.entries(t))
              typeof m == "boolean" && (d = !0),
              m === !0 && y.push(g);
          d && (f["data-headlessui-state"] = y.join(" "))
      }
      if (o === w.Fragment && Object.keys(Ep(u)).length > 0) {
          if (!w.isValidElement(c) || Array.isArray(c) && c.length > 1)
              throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(u).map(m=>`  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
`));
          let d = c.props
            , y = typeof (d == null ? void 0 : d.className) == "function" ? (...m)=>Ql(d == null ? void 0 : d.className(...m), u.className) : Ql(d == null ? void 0 : d.className, u.className)
            , g = y ? {
              className: y
          } : {};
          return w.cloneElement(c, Object.assign({}, fg(c.props, Ep(xu(u, ["ref"]))), f, s, {
              ref: i(c.ref, s.ref)
          }, g))
      }
      return w.createElement(o, Object.assign({}, xu(u, ["ref"]), o !== w.Fragment && s, o !== w.Fragment && f), c)
  }
  function vx(...e) {
      return e.every(t=>t == null) ? void 0 : t=>{
          for (let r of e)
              r != null && (typeof r == "function" ? r(t) : r.current = t)
      }
  }
  function fg(...e) {
      if (e.length === 0)
          return {};
      if (e.length === 1)
          return e[0];
      let t = {}
        , r = {};
      for (let n of e)
          for (let i in n)
              i.startsWith("on") && typeof n[i] == "function" ? (r[i] != null || (r[i] = []),
              r[i].push(n[i])) : t[i] = n[i];
      if (t.disabled || t["aria-disabled"])
          return Object.assign(t, Object.fromEntries(Object.keys(r).map(n=>[n, void 0])));
      for (let n in r)
          Object.assign(t, {
              [n](i, ...o) {
                  let l = r[n];
                  for (let a of l) {
                      if ((i instanceof Event || (i == null ? void 0 : i.nativeEvent)instanceof Event) && i.defaultPrevented)
                          return;
                      a(i, ...o)
                  }
              }
          });
      return t
  }
  function mt(e) {
      var t;
      return Object.assign(w.forwardRef(e), {
          displayName: (t = e.displayName) != null ? t : e.name
      })
  }
  function Ep(e) {
      let t = Object.assign({}, e);
      for (let r in t)
          t[r] === void 0 && delete t[r];
      return t
  }
  function xu(e, t=[]) {
      let r = Object.assign({}, e);
      for (let n of t)
          n in r && delete r[n];
      return r
  }
  let mx = "div";
  var ql = (e=>(e[e.None = 1] = "None",
  e[e.Focusable = 2] = "Focusable",
  e[e.Hidden = 4] = "Hidden",
  e))(ql || {});
  function gx(e, t) {
      var r;
      let {features: n=1, ...i} = e
        , o = {
          ref: t,
          "aria-hidden": (n & 2) === 2 ? !0 : (r = i["aria-hidden"]) != null ? r : void 0,
          hidden: (n & 4) === 4 ? !0 : void 0,
          style: {
              position: "fixed",
              top: 1,
              left: 1,
              width: 1,
              height: 0,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: "0",
              ...(n & 4) === 4 && (n & 2) !== 2 && {
                  display: "none"
              }
          }
      };
      return kt({
          ourProps: o,
          theirProps: i,
          slot: {},
          defaultTag: mx,
          name: "Hidden"
      })
  }
  let Hs = mt(gx)
    , gf = w.createContext(null);
  gf.displayName = "OpenClosedContext";
  var ct = (e=>(e[e.Open = 1] = "Open",
  e[e.Closed = 2] = "Closed",
  e[e.Closing = 4] = "Closing",
  e[e.Opening = 8] = "Opening",
  e))(ct || {});
  function yf() {
      return w.useContext(gf)
  }
  function yx({value: e, children: t}) {
      return U.createElement(gf.Provider, {
          value: e
      }, t)
  }
  function wx(e) {
      function t() {
          document.readyState !== "loading" && (e(),
          document.removeEventListener("DOMContentLoaded", t))
      }
      typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t),
      t())
  }
  let vr = [];
  wx(()=>{
      function e(t) {
          t.target instanceof HTMLElement && t.target !== document.body && vr[0] !== t.target && (vr.unshift(t.target),
          vr = vr.filter(r=>r != null && r.isConnected),
          vr.splice(10))
      }
      window.addEventListener("click", e, {
          capture: !0
      }),
      window.addEventListener("mousedown", e, {
          capture: !0
      }),
      window.addEventListener("focus", e, {
          capture: !0
      }),
      document.body.addEventListener("click", e, {
          capture: !0
      }),
      document.body.addEventListener("mousedown", e, {
          capture: !0
      }),
      document.body.addEventListener("focus", e, {
          capture: !0
      })
  }
  );
  function Sx(e) {
      let t = e.parentElement
        , r = null;
      for (; t && !(t instanceof HTMLFieldSetElement); )
          t instanceof HTMLLegendElement && (r = t),
          t = t.parentElement;
      let n = (t == null ? void 0 : t.getAttribute("disabled")) === "";
      return n && xx(r) ? !1 : n
  }
  function xx(e) {
      if (!e)
          return !1;
      let t = e.previousElementSibling;
      for (; t !== null; ) {
          if (t instanceof HTMLLegendElement)
              return !1;
          t = t.previousElementSibling
      }
      return !0
  }
  var dg = (e=>(e.Space = " ",
  e.Enter = "Enter",
  e.Escape = "Escape",
  e.Backspace = "Backspace",
  e.Delete = "Delete",
  e.ArrowLeft = "ArrowLeft",
  e.ArrowUp = "ArrowUp",
  e.ArrowRight = "ArrowRight",
  e.ArrowDown = "ArrowDown",
  e.Home = "Home",
  e.End = "End",
  e.PageUp = "PageUp",
  e.PageDown = "PageDown",
  e.Tab = "Tab",
  e))(dg || {});
  function pg(e, t, r, n) {
      let i = Xt(r);
      w.useEffect(()=>{
          e = e ?? window;
          function o(l) {
              i.current(l)
          }
          return e.addEventListener(t, o, n),
          ()=>e.removeEventListener(t, o, n)
      }
      , [e, t, n])
  }
  function Ro() {
      let e = w.useRef(!1);
      return Tt(()=>(e.current = !0,
      ()=>{
          e.current = !1
      }
      ), []),
      e
  }
  function hg(e) {
      let t = ye(e)
        , r = w.useRef(!1);
      w.useEffect(()=>(r.current = !1,
      ()=>{
          r.current = !0,
          wa(()=>{
              r.current && t()
          }
          )
      }
      ), [t])
  }
  var ji = (e=>(e[e.Forwards = 0] = "Forwards",
  e[e.Backwards = 1] = "Backwards",
  e))(ji || {});
  function Ex() {
      let e = w.useRef(0);
      return sg("keydown", t=>{
          t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0)
      }
      , !0),
      e
  }
  function vg(e) {
      if (!e)
          return new Set;
      if (typeof e == "function")
          return new Set(e());
      let t = new Set;
      for (let r of e.current)
          r.current instanceof HTMLElement && t.add(r.current);
      return t
  }
  let Px = "div";
  var mg = (e=>(e[e.None = 1] = "None",
  e[e.InitialFocus = 2] = "InitialFocus",
  e[e.TabLock = 4] = "TabLock",
  e[e.FocusLock = 8] = "FocusLock",
  e[e.RestoreFocus = 16] = "RestoreFocus",
  e[e.All = 30] = "All",
  e))(mg || {});
  function Cx(e, t) {
      let r = w.useRef(null)
        , n = Dt(r, t)
        , {initialFocus: i, containers: o, features: l=30, ...a} = e;
      Yn() || (l = 1);
      let u = _o(r);
      Tx({
          ownerDocument: u
      }, !!(l & 16));
      let s = kx({
          ownerDocument: u,
          container: r,
          initialFocus: i
      }, !!(l & 2));
      $x({
          ownerDocument: u,
          container: r,
          containers: o,
          previousActiveElement: s
      }, !!(l & 8));
      let c = Ex()
        , f = ye(m=>{
          let E = r.current;
          E && (h=>h())(()=>{
              Qe(c.current, {
                  [ji.Forwards]: ()=>{
                      wl(E, zr.First, {
                          skipElements: [m.relatedTarget]
                      })
                  }
                  ,
                  [ji.Backwards]: ()=>{
                      wl(E, zr.Last, {
                          skipElements: [m.relatedTarget]
                      })
                  }
              })
          }
          )
      }
      )
        , d = vf()
        , y = w.useRef(!1)
        , g = {
          ref: n,
          onKeyDown(m) {
              m.key == "Tab" && (y.current = !0,
              d.requestAnimationFrame(()=>{
                  y.current = !1
              }
              ))
          },
          onBlur(m) {
              let E = vg(o);
              r.current instanceof HTMLElement && E.add(r.current);
              let h = m.relatedTarget;
              h instanceof HTMLElement && h.dataset.headlessuiFocusGuard !== "true" && (gg(E, h) || (y.current ? wl(r.current, Qe(c.current, {
                  [ji.Forwards]: ()=>zr.Next,
                  [ji.Backwards]: ()=>zr.Previous
              }) | zr.WrapAround, {
                  relativeTo: m.target
              }) : m.target instanceof HTMLElement && Jr(m.target)))
          }
      };
      return U.createElement(U.Fragment, null, !!(l & 4) && U.createElement(Hs, {
          as: "button",
          type: "button",
          "data-headlessui-focus-guard": !0,
          onFocus: f,
          features: ql.Focusable
      }), kt({
          ourProps: g,
          theirProps: a,
          defaultTag: Px,
          name: "FocusTrap"
      }), !!(l & 4) && U.createElement(Hs, {
          as: "button",
          type: "button",
          "data-headlessui-focus-guard": !0,
          onFocus: f,
          features: ql.Focusable
      }))
  }
  let _x = mt(Cx)
    , Ei = Object.assign(_x, {
      features: mg
  });
  function Rx(e=!0) {
      let t = w.useRef(vr.slice());
      return mf(([r],[n])=>{
          n === !0 && r === !1 && wa(()=>{
              t.current.splice(0)
          }
          ),
          n === !1 && r === !0 && (t.current = vr.slice())
      }
      , [e, vr, t]),
      ye(()=>{
          var r;
          return (r = t.current.find(n=>n != null && n.isConnected)) != null ? r : null
      }
      )
  }
  function Tx({ownerDocument: e}, t) {
      let r = Rx(t);
      mf(()=>{
          t || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && Jr(r())
      }
      , [t]),
      hg(()=>{
          t && Jr(r())
      }
      )
  }
  function kx({ownerDocument: e, container: t, initialFocus: r}, n) {
      let i = w.useRef(null)
        , o = Ro();
      return mf(()=>{
          if (!n)
              return;
          let l = t.current;
          l && wa(()=>{
              if (!o.current)
                  return;
              let a = e == null ? void 0 : e.activeElement;
              if (r != null && r.current) {
                  if ((r == null ? void 0 : r.current) === a) {
                      i.current = a;
                      return
                  }
              } else if (l.contains(a)) {
                  i.current = a;
                  return
              }
              r != null && r.current ? Jr(r.current) : wl(l, zr.First) === lg.Error && console.warn("There are no focusable elements inside the <FocusTrap />"),
              i.current = e == null ? void 0 : e.activeElement
          }
          )
      }
      , [n]),
      i
  }
  function $x({ownerDocument: e, container: t, containers: r, previousActiveElement: n}, i) {
      let o = Ro();
      pg(e == null ? void 0 : e.defaultView, "focus", l=>{
          if (!i || !o.current)
              return;
          let a = vg(r);
          t.current instanceof HTMLElement && a.add(t.current);
          let u = n.current;
          if (!u)
              return;
          let s = l.target;
          s && s instanceof HTMLElement ? gg(a, s) ? (n.current = s,
          Jr(s)) : (l.preventDefault(),
          l.stopPropagation(),
          Jr(u)) : Jr(n.current)
      }
      , !0)
  }
  function gg(e, t) {
      for (let r of e)
          if (r.contains(t))
              return !0;
      return !1
  }
  let yg = w.createContext(!1);
  function Ox() {
      return w.useContext(yg)
  }
  function Vs(e) {
      return U.createElement(yg.Provider, {
          value: e.force
      }, e.children)
  }
  function jx(e) {
      let t = Ox()
        , r = w.useContext(wg)
        , n = _o(e)
        , [i,o] = w.useState(()=>{
          if (!t && r !== null || qt.isServer)
              return null;
          let l = n == null ? void 0 : n.getElementById("headlessui-portal-root");
          if (l)
              return l;
          if (n === null)
              return null;
          let a = n.createElement("div");
          return a.setAttribute("id", "headlessui-portal-root"),
          n.body.appendChild(a)
      }
      );
      return w.useEffect(()=>{
          i !== null && (n != null && n.body.contains(i) || n == null || n.body.appendChild(i))
      }
      , [i, n]),
      w.useEffect(()=>{
          t || r !== null && o(r.current)
      }
      , [r, o, t]),
      i
  }
  let bx = w.Fragment;
  function Nx(e, t) {
      let r = e
        , n = w.useRef(null)
        , i = Dt(hx(c=>{
          n.current = c
      }
      ), t)
        , o = _o(n)
        , l = jx(n)
        , [a] = w.useState(()=>{
          var c;
          return qt.isServer ? null : (c = o == null ? void 0 : o.createElement("div")) != null ? c : null
      }
      )
        , u = w.useContext(Ws)
        , s = Yn();
      return Tt(()=>{
          !l || !a || l.contains(a) || (a.setAttribute("data-headlessui-portal", ""),
          l.appendChild(a))
      }
      , [l, a]),
      Tt(()=>{
          if (a && u)
              return u.register(a)
      }
      , [u, a]),
      hg(()=>{
          var c;
          !l || !a || (a instanceof Node && l.contains(a) && l.removeChild(a),
          l.childNodes.length <= 0 && ((c = l.parentElement) == null || c.removeChild(l)))
      }
      ),
      s ? !l || !a ? null : So.createPortal(kt({
          ourProps: {
              ref: i
          },
          theirProps: r,
          defaultTag: bx,
          name: "Portal"
      }), a) : null
  }
  let Mx = w.Fragment
    , wg = w.createContext(null);
  function Lx(e, t) {
      let {target: r, ...n} = e
        , i = {
          ref: Dt(t)
      };
      return U.createElement(wg.Provider, {
          value: r
      }, kt({
          ourProps: i,
          theirProps: n,
          defaultTag: Mx,
          name: "Popover.Group"
      }))
  }
  let Ws = w.createContext(null);
  function Ix() {
      let e = w.useContext(Ws)
        , t = w.useRef([])
        , r = ye(o=>(t.current.push(o),
      e && e.register(o),
      ()=>n(o)))
        , n = ye(o=>{
          let l = t.current.indexOf(o);
          l !== -1 && t.current.splice(l, 1),
          e && e.unregister(o)
      }
      )
        , i = w.useMemo(()=>({
          register: r,
          unregister: n,
          portals: t
      }), [r, n, t]);
      return [t, w.useMemo(()=>function({children: o}) {
          return U.createElement(Ws.Provider, {
              value: i
          }, o)
      }
      , [i])]
  }
  let Dx = mt(Nx)
    , Ax = mt(Lx)
    , Ks = Object.assign(Dx, {
      Group: Ax
  });
  function Fx(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
  }
  const zx = typeof Object.is == "function" ? Object.is : Fx
    , {useState: Ux, useEffect: Bx, useLayoutEffect: Hx, useDebugValue: Vx} = In;
  function Wx(e, t, r) {
      const n = t()
        , [{inst: i},o] = Ux({
          inst: {
              value: n,
              getSnapshot: t
          }
      });
      return Hx(()=>{
          i.value = n,
          i.getSnapshot = t,
          Eu(i) && o({
              inst: i
          })
      }
      , [e, n, t]),
      Bx(()=>(Eu(i) && o({
          inst: i
      }),
      e(()=>{
          Eu(i) && o({
              inst: i
          })
      }
      )), [e]),
      Vx(n),
      n
  }
  function Eu(e) {
      const t = e.getSnapshot
        , r = e.value;
      try {
          const n = t();
          return !zx(r, n)
      } catch {
          return !0
      }
  }
  function Kx(e, t, r) {
      return t()
  }
  const Gx = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
    , Qx = !Gx
    , Yx = Qx ? Kx : Wx
    , qx = "useSyncExternalStore"in In ? (e=>e.useSyncExternalStore)(In) : Yx;
  function Xx(e) {
      return qx(e.subscribe, e.getSnapshot, e.getSnapshot)
  }
  function Jx(e, t) {
      let r = e()
        , n = new Set;
      return {
          getSnapshot() {
              return r
          },
          subscribe(i) {
              return n.add(i),
              ()=>n.delete(i)
          },
          dispatch(i, ...o) {
              let l = t[i].call(r, ...o);
              l && (r = l,
              n.forEach(a=>a()))
          }
      }
  }
  function Zx() {
      let e;
      return {
          before({doc: t}) {
              var r;
              let n = t.documentElement;
              e = ((r = t.defaultView) != null ? r : window).innerWidth - n.clientWidth
          },
          after({doc: t, d: r}) {
              let n = t.documentElement
                , i = n.clientWidth - n.offsetWidth
                , o = e - i;
              r.style(n, "paddingRight", `${o}px`)
          }
      }
  }
  function eE() {
      return ug() ? {
          before({doc: e, d: t, meta: r}) {
              function n(i) {
                  return r.containers.flatMap(o=>o()).some(o=>o.contains(i))
              }
              t.microTask(()=>{
                  var i;
                  if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
                      let a = un();
                      a.style(e.documentElement, "scrollBehavior", "auto"),
                      t.add(()=>t.microTask(()=>a.dispose()))
                  }
                  let o = (i = window.scrollY) != null ? i : window.pageYOffset
                    , l = null;
                  t.addEventListener(e, "click", a=>{
                      if (a.target instanceof HTMLElement)
                          try {
                              let u = a.target.closest("a");
                              if (!u)
                                  return;
                              let {hash: s} = new URL(u.href)
                                , c = e.querySelector(s);
                              c && !n(c) && (l = c)
                          } catch {}
                  }
                  , !0),
                  t.addEventListener(e, "touchstart", a=>{
                      if (a.target instanceof HTMLElement)
                          if (n(a.target)) {
                              let u = a.target;
                              for (; u.parentElement && n(u.parentElement); )
                                  u = u.parentElement;
                              t.style(u, "overscrollBehavior", "contain")
                          } else
                              t.style(a.target, "touchAction", "none")
                  }
                  ),
                  t.addEventListener(e, "touchmove", a=>{
                      if (a.target instanceof HTMLElement)
                          if (n(a.target)) {
                              let u = a.target;
                              for (; u.parentElement && u.dataset.headlessuiPortal !== "" && !(u.scrollHeight > u.clientHeight || u.scrollWidth > u.clientWidth); )
                                  u = u.parentElement;
                              u.dataset.headlessuiPortal === "" && a.preventDefault()
                          } else
                              a.preventDefault()
                  }
                  , {
                      passive: !1
                  }),
                  t.add(()=>{
                      var a;
                      let u = (a = window.scrollY) != null ? a : window.pageYOffset;
                      o !== u && window.scrollTo(0, o),
                      l && l.isConnected && (l.scrollIntoView({
                          block: "nearest"
                      }),
                      l = null)
                  }
                  )
              }
              )
          }
      } : {}
  }
  function tE() {
      return {
          before({doc: e, d: t}) {
              t.style(e.documentElement, "overflow", "hidden")
          }
      }
  }
  function rE(e) {
      let t = {};
      for (let r of e)
          Object.assign(t, r(t));
      return t
  }
  let Gr = Jx(()=>new Map, {
      PUSH(e, t) {
          var r;
          let n = (r = this.get(e)) != null ? r : {
              doc: e,
              count: 0,
              d: un(),
              meta: new Set
          };
          return n.count++,
          n.meta.add(t),
          this.set(e, n),
          this
      },
      POP(e, t) {
          let r = this.get(e);
          return r && (r.count--,
          r.meta.delete(t)),
          this
      },
      SCROLL_PREVENT({doc: e, d: t, meta: r}) {
          let n = {
              doc: e,
              d: t,
              meta: rE(r)
          }
            , i = [eE(), Zx(), tE()];
          i.forEach(({before: o})=>o == null ? void 0 : o(n)),
          i.forEach(({after: o})=>o == null ? void 0 : o(n))
      },
      SCROLL_ALLOW({d: e}) {
          e.dispose()
      },
      TEARDOWN({doc: e}) {
          this.delete(e)
      }
  });
  Gr.subscribe(()=>{
      let e = Gr.getSnapshot()
        , t = new Map;
      for (let[r] of e)
          t.set(r, r.documentElement.style.overflow);
      for (let r of e.values()) {
          let n = t.get(r.doc) === "hidden"
            , i = r.count !== 0;
          (i && !n || !i && n) && Gr.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r),
          r.count === 0 && Gr.dispatch("TEARDOWN", r)
      }
  }
  );
  function nE(e, t, r) {
      let n = Xx(Gr)
        , i = e ? n.get(e) : void 0
        , o = i ? i.count > 0 : !1;
      return Tt(()=>{
          if (!(!e || !t))
              return Gr.dispatch("PUSH", e, r),
              ()=>Gr.dispatch("POP", e, r)
      }
      , [t, e]),
      o
  }
  let Pu = new Map
    , Pi = new Map;
  function Pp(e, t=!0) {
      Tt(()=>{
          var r;
          if (!t)
              return;
          let n = typeof e == "function" ? e() : e.current;
          if (!n)
              return;
          function i() {
              var l;
              if (!n)
                  return;
              let a = (l = Pi.get(n)) != null ? l : 1;
              if (a === 1 ? Pi.delete(n) : Pi.set(n, a - 1),
              a !== 1)
                  return;
              let u = Pu.get(n);
              u && (u["aria-hidden"] === null ? n.removeAttribute("aria-hidden") : n.setAttribute("aria-hidden", u["aria-hidden"]),
              n.inert = u.inert,
              Pu.delete(n))
          }
          let o = (r = Pi.get(n)) != null ? r : 0;
          return Pi.set(n, o + 1),
          o !== 0 || (Pu.set(n, {
              "aria-hidden": n.getAttribute("aria-hidden"),
              inert: n.inert
          }),
          n.setAttribute("aria-hidden", "true"),
          n.inert = !0),
          i
      }
      , [e, t])
  }
  function iE({defaultContainers: e=[], portals: t, mainTreeNodeRef: r}={}) {
      var n;
      let i = w.useRef((n = r == null ? void 0 : r.current) != null ? n : null)
        , o = _o(i)
        , l = ye(()=>{
          var a, u, s;
          let c = [];
          for (let f of e)
              f !== null && (f instanceof HTMLElement ? c.push(f) : "current"in f && f.current instanceof HTMLElement && c.push(f.current));
          if (t != null && t.current)
              for (let f of t.current)
                  c.push(f);
          for (let f of (a = o == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null ? a : [])
              f !== document.body && f !== document.head && f instanceof HTMLElement && f.id !== "headlessui-portal-root" && (f.contains(i.current) || f.contains((s = (u = i.current) == null ? void 0 : u.getRootNode()) == null ? void 0 : s.host) || c.some(d=>f.contains(d)) || c.push(f));
          return c
      }
      );
      return {
          resolveContainers: l,
          contains: ye(a=>l().some(u=>u.contains(a))),
          mainTreeNodeRef: i,
          MainTreeNode: w.useMemo(()=>function() {
              return r != null ? null : U.createElement(Hs, {
                  features: ql.Hidden,
                  ref: i
              })
          }
          , [i, r])
      }
  }
  let wf = w.createContext(()=>{}
  );
  wf.displayName = "StackContext";
  var Gs = (e=>(e[e.Add = 0] = "Add",
  e[e.Remove = 1] = "Remove",
  e))(Gs || {});
  function oE() {
      return w.useContext(wf)
  }
  function lE({children: e, onUpdate: t, type: r, element: n, enabled: i}) {
      let o = oE()
        , l = ye((...a)=>{
          t == null || t(...a),
          o(...a)
      }
      );
      return Tt(()=>{
          let a = i === void 0 || i === !0;
          return a && l(0, r, n),
          ()=>{
              a && l(1, r, n)
          }
      }
      , [l, r, n, i]),
      U.createElement(wf.Provider, {
          value: l
      }, e)
  }
  let Sg = w.createContext(null);
  function xg() {
      let e = w.useContext(Sg);
      if (e === null) {
          let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
          throw Error.captureStackTrace && Error.captureStackTrace(t, xg),
          t
      }
      return e
  }
  function aE() {
      let[e,t] = w.useState([]);
      return [e.length > 0 ? e.join(" ") : void 0, w.useMemo(()=>function(r) {
          let n = ye(o=>(t(l=>[...l, o]),
          ()=>t(l=>{
              let a = l.slice()
                , u = a.indexOf(o);
              return u !== -1 && a.splice(u, 1),
              a
          }
          )))
            , i = w.useMemo(()=>({
              register: n,
              slot: r.slot,
              name: r.name,
              props: r.props
          }), [n, r.slot, r.name, r.props]);
          return U.createElement(Sg.Provider, {
              value: i
          }, r.children)
      }
      , [t])]
  }
  let uE = "p";
  function sE(e, t) {
      let r = qn()
        , {id: n=`headlessui-description-${r}`, ...i} = e
        , o = xg()
        , l = Dt(t);
      Tt(()=>o.register(n), [n, o.register]);
      let a = {
          ref: l,
          ...o.props,
          id: n
      };
      return kt({
          ourProps: a,
          theirProps: i,
          slot: o.slot || {},
          defaultTag: uE,
          name: o.name || "Description"
      })
  }
  let cE = mt(sE)
    , fE = Object.assign(cE, {});
  var dE = (e=>(e[e.Open = 0] = "Open",
  e[e.Closed = 1] = "Closed",
  e))(dE || {})
    , pE = (e=>(e[e.SetTitleId = 0] = "SetTitleId",
  e))(pE || {});
  let hE = {
      0(e, t) {
          return e.titleId === t.id ? e : {
              ...e,
              titleId: t.id
          }
      }
  }
    , Xl = w.createContext(null);
  Xl.displayName = "DialogContext";
  function To(e) {
      let t = w.useContext(Xl);
      if (t === null) {
          let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
          throw Error.captureStackTrace && Error.captureStackTrace(r, To),
          r
      }
      return t
  }
  function vE(e, t, r=()=>[document.body]) {
      nE(e, t, n=>{
          var i;
          return {
              containers: [...(i = n.containers) != null ? i : [], r]
          }
      }
      )
  }
  function mE(e, t) {
      return Qe(t.type, hE, e, t)
  }
  let gE = "div"
    , yE = Yl.RenderStrategy | Yl.Static;
  function wE(e, t) {
      let r = qn()
        , {id: n=`headlessui-dialog-${r}`, open: i, onClose: o, initialFocus: l, role: a="dialog", __demoMode: u=!1, ...s} = e
        , [c,f] = w.useState(0)
        , d = w.useRef(!1);
      a = function() {
          return a === "dialog" || a === "alertdialog" ? a : (d.current || (d.current = !0,
          console.warn(`Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),
          "dialog")
      }();
      let y = yf();
      i === void 0 && y !== null && (i = (y & ct.Open) === ct.Open);
      let g = w.useRef(null)
        , m = Dt(g, t)
        , E = _o(g)
        , h = e.hasOwnProperty("open") || y !== null
        , p = e.hasOwnProperty("onClose");
      if (!h && !p)
          throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
      if (!h)
          throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
      if (!p)
          throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
      if (typeof i != "boolean")
          throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i}`);
      if (typeof o != "function")
          throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);
      let v = i ? 0 : 1
        , [C,k] = w.useReducer(mE, {
          titleId: null,
          descriptionId: null,
          panelRef: w.createRef()
      })
        , b = ye(()=>o(!1))
        , S = ye(he=>k({
          type: 0,
          id: he
      }))
        , O = Yn() ? u ? !1 : v === 0 : !1
        , L = c > 1
        , M = w.useContext(Xl) !== null
        , [V,ie] = Ix()
        , ne = {
          get current() {
              var he;
              return (he = C.panelRef.current) != null ? he : g.current
          }
      }
        , {resolveContainers: se, mainTreeNodeRef: oe, MainTreeNode: W} = iE({
          portals: V,
          defaultContainers: [ne]
      })
        , J = L ? "parent" : "leaf"
        , $ = y !== null ? (y & ct.Closing) === ct.Closing : !1
        , F = M || $ ? !1 : O
        , z = w.useCallback(()=>{
          var he, we;
          return (we = Array.from((he = E == null ? void 0 : E.querySelectorAll("body > *")) != null ? he : []).find(be=>be.id === "headlessui-portal-root" ? !1 : be.contains(oe.current) && be instanceof HTMLElement)) != null ? we : null
      }
      , [oe]);
      Pp(z, F);
      let Z = L ? !0 : O
        , q = w.useCallback(()=>{
          var he, we;
          return (we = Array.from((he = E == null ? void 0 : E.querySelectorAll("[data-headlessui-portal]")) != null ? he : []).find(be=>be.contains(oe.current) && be instanceof HTMLElement)) != null ? we : null
      }
      , [oe]);
      Pp(q, Z),
      px(se, he=>{
          he.preventDefault(),
          b()
      }
      , !(!O || L));
      let pe = !(L || v !== 0);
      pg(E == null ? void 0 : E.defaultView, "keydown", he=>{
          pe && (he.defaultPrevented || he.key === dg.Escape && (he.preventDefault(),
          he.stopPropagation(),
          b()))
      }
      ),
      vE(E, !($ || v !== 0 || M), se),
      w.useEffect(()=>{
          if (v !== 0 || !g.current)
              return;
          let he = new ResizeObserver(we=>{
              for (let be of we) {
                  let Lr = be.target.getBoundingClientRect();
                  Lr.x === 0 && Lr.y === 0 && Lr.width === 0 && Lr.height === 0 && b()
              }
          }
          );
          return he.observe(g.current),
          ()=>he.disconnect()
      }
      , [v, g, b]);
      let[De,nt] = aE()
        , oi = w.useMemo(()=>[{
          dialogState: v,
          close: b,
          setTitleId: S
      }, C], [v, C, b, S])
        , Oo = w.useMemo(()=>({
          open: v === 0
      }), [v])
        , Ba = {
          ref: m,
          id: n,
          role: a,
          "aria-modal": v === 0 ? !0 : void 0,
          "aria-labelledby": C.titleId,
          "aria-describedby": De
      };
      return U.createElement(lE, {
          type: "Dialog",
          enabled: v === 0,
          element: g,
          onUpdate: ye((he,we)=>{
              we === "Dialog" && Qe(he, {
                  [Gs.Add]: ()=>f(be=>be + 1),
                  [Gs.Remove]: ()=>f(be=>be - 1)
              })
          }
          )
      }, U.createElement(Vs, {
          force: !0
      }, U.createElement(Ks, null, U.createElement(Xl.Provider, {
          value: oi
      }, U.createElement(Ks.Group, {
          target: g
      }, U.createElement(Vs, {
          force: !1
      }, U.createElement(nt, {
          slot: Oo,
          name: "Dialog.Description"
      }, U.createElement(Ei, {
          initialFocus: l,
          containers: se,
          features: O ? Qe(J, {
              parent: Ei.features.RestoreFocus,
              leaf: Ei.features.All & ~Ei.features.FocusLock
          }) : Ei.features.None
      }, U.createElement(ie, null, kt({
          ourProps: Ba,
          theirProps: s,
          slot: Oo,
          defaultTag: gE,
          features: yE,
          visible: v === 0,
          name: "Dialog"
      }))))))))), U.createElement(W, null))
  }
  let SE = "div";
  function xE(e, t) {
      let r = qn()
        , {id: n=`headlessui-dialog-overlay-${r}`, ...i} = e
        , [{dialogState: o, close: l}] = To("Dialog.Overlay")
        , a = Dt(t)
        , u = ye(c=>{
          if (c.target === c.currentTarget) {
              if (Sx(c.currentTarget))
                  return c.preventDefault();
              c.preventDefault(),
              c.stopPropagation(),
              l()
          }
      }
      )
        , s = w.useMemo(()=>({
          open: o === 0
      }), [o]);
      return kt({
          ourProps: {
              ref: a,
              id: n,
              "aria-hidden": !0,
              onClick: u
          },
          theirProps: i,
          slot: s,
          defaultTag: SE,
          name: "Dialog.Overlay"
      })
  }
  let EE = "div";
  function PE(e, t) {
      let r = qn()
        , {id: n=`headlessui-dialog-backdrop-${r}`, ...i} = e
        , [{dialogState: o},l] = To("Dialog.Backdrop")
        , a = Dt(t);
      w.useEffect(()=>{
          if (l.panelRef.current === null)
              throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
      }
      , [l.panelRef]);
      let u = w.useMemo(()=>({
          open: o === 0
      }), [o]);
      return U.createElement(Vs, {
          force: !0
      }, U.createElement(Ks, null, kt({
          ourProps: {
              ref: a,
              id: n,
              "aria-hidden": !0
          },
          theirProps: i,
          slot: u,
          defaultTag: EE,
          name: "Dialog.Backdrop"
      })))
  }
  let CE = "div";
  function _E(e, t) {
      let r = qn()
        , {id: n=`headlessui-dialog-panel-${r}`, ...i} = e
        , [{dialogState: o},l] = To("Dialog.Panel")
        , a = Dt(t, l.panelRef)
        , u = w.useMemo(()=>({
          open: o === 0
      }), [o])
        , s = ye(c=>{
          c.stopPropagation()
      }
      );
      return kt({
          ourProps: {
              ref: a,
              id: n,
              onClick: s
          },
          theirProps: i,
          slot: u,
          defaultTag: CE,
          name: "Dialog.Panel"
      })
  }
  let RE = "h2";
  function TE(e, t) {
      let r = qn()
        , {id: n=`headlessui-dialog-title-${r}`, ...i} = e
        , [{dialogState: o, setTitleId: l}] = To("Dialog.Title")
        , a = Dt(t);
      w.useEffect(()=>(l(n),
      ()=>l(null)), [n, l]);
      let u = w.useMemo(()=>({
          open: o === 0
      }), [o]);
      return kt({
          ourProps: {
              ref: a,
              id: n
          },
          theirProps: i,
          slot: u,
          defaultTag: RE,
          name: "Dialog.Title"
      })
  }
  let kE = mt(wE)
    , $E = mt(PE)
    , OE = mt(_E)
    , jE = mt(xE)
    , bE = mt(TE)
    , NE = Object.assign(kE, {
      Backdrop: $E,
      Panel: OE,
      Overlay: jE,
      Title: bE,
      Description: fE
  });
  function ME(e=0) {
      let[t,r] = w.useState(e)
        , n = Ro()
        , i = w.useCallback(u=>{
          n.current && r(s=>s | u)
      }
      , [t, n])
        , o = w.useCallback(u=>!!(t & u), [t])
        , l = w.useCallback(u=>{
          n.current && r(s=>s & ~u)
      }
      , [r, n])
        , a = w.useCallback(u=>{
          n.current && r(s=>s ^ u)
      }
      , [r]);
      return {
          flags: t,
          addFlag: i,
          hasFlag: o,
          removeFlag: l,
          toggleFlag: a
      }
  }
  function LE(e) {
      let t = {
          called: !1
      };
      return (...r)=>{
          if (!t.called)
              return t.called = !0,
              e(...r)
      }
  }
  function Cu(e, ...t) {
      e && t.length > 0 && e.classList.add(...t)
  }
  function _u(e, ...t) {
      e && t.length > 0 && e.classList.remove(...t)
  }
  function IE(e, t) {
      let r = un();
      if (!e)
          return r.dispose;
      let {transitionDuration: n, transitionDelay: i} = getComputedStyle(e)
        , [o,l] = [n, i].map(u=>{
          let[s=0] = u.split(",").filter(Boolean).map(c=>c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c,f)=>f - c);
          return s
      }
      )
        , a = o + l;
      if (a !== 0) {
          r.group(s=>{
              s.setTimeout(()=>{
                  t(),
                  s.dispose()
              }
              , a),
              s.addEventListener(e, "transitionrun", c=>{
                  c.target === c.currentTarget && s.dispose()
              }
              )
          }
          );
          let u = r.addEventListener(e, "transitionend", s=>{
              s.target === s.currentTarget && (t(),
              u())
          }
          )
      } else
          t();
      return r.add(()=>t()),
      r.dispose
  }
  function DE(e, t, r, n) {
      let i = r ? "enter" : "leave"
        , o = un()
        , l = n !== void 0 ? LE(n) : ()=>{}
      ;
      i === "enter" && (e.removeAttribute("hidden"),
      e.style.display = "");
      let a = Qe(i, {
          enter: ()=>t.enter,
          leave: ()=>t.leave
      })
        , u = Qe(i, {
          enter: ()=>t.enterTo,
          leave: ()=>t.leaveTo
      })
        , s = Qe(i, {
          enter: ()=>t.enterFrom,
          leave: ()=>t.leaveFrom
      });
      return _u(e, ...t.base, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered),
      Cu(e, ...t.base, ...a, ...s),
      o.nextFrame(()=>{
          _u(e, ...t.base, ...a, ...s),
          Cu(e, ...t.base, ...a, ...u),
          IE(e, ()=>(_u(e, ...t.base, ...a),
          Cu(e, ...t.base, ...t.entered),
          l()))
      }
      ),
      o.dispose
  }
  function AE({immediate: e, container: t, direction: r, classes: n, onStart: i, onStop: o}) {
      let l = Ro()
        , a = vf()
        , u = Xt(r);
      Tt(()=>{
          e && (u.current = "enter")
      }
      , [e]),
      Tt(()=>{
          let s = un();
          a.add(s.dispose);
          let c = t.current;
          if (c && u.current !== "idle" && l.current)
              return s.dispose(),
              i.current(u.current),
              s.add(DE(c, n.current, u.current === "enter", ()=>{
                  s.dispose(),
                  o.current(u.current)
              }
              )),
              s.dispose
      }
      , [r])
  }
  function ar(e="") {
      return e.split(/\s+/).filter(t=>t.length > 1)
  }
  let Sa = w.createContext(null);
  Sa.displayName = "TransitionContext";
  var FE = (e=>(e.Visible = "visible",
  e.Hidden = "hidden",
  e))(FE || {});
  function zE() {
      let e = w.useContext(Sa);
      if (e === null)
          throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
      return e
  }
  function UE() {
      let e = w.useContext(xa);
      if (e === null)
          throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
      return e
  }
  let xa = w.createContext(null);
  xa.displayName = "NestingContext";
  function Ea(e) {
      return "children"in e ? Ea(e.children) : e.current.filter(({el: t})=>t.current !== null).filter(({state: t})=>t === "visible").length > 0
  }
  function Eg(e, t) {
      let r = Xt(e)
        , n = w.useRef([])
        , i = Ro()
        , o = vf()
        , l = ye((y,g=yr.Hidden)=>{
          let m = n.current.findIndex(({el: E})=>E === y);
          m !== -1 && (Qe(g, {
              [yr.Unmount]() {
                  n.current.splice(m, 1)
              },
              [yr.Hidden]() {
                  n.current[m].state = "hidden"
              }
          }),
          o.microTask(()=>{
              var E;
              !Ea(n) && i.current && ((E = r.current) == null || E.call(r))
          }
          ))
      }
      )
        , a = ye(y=>{
          let g = n.current.find(({el: m})=>m === y);
          return g ? g.state !== "visible" && (g.state = "visible") : n.current.push({
              el: y,
              state: "visible"
          }),
          ()=>l(y, yr.Unmount)
      }
      )
        , u = w.useRef([])
        , s = w.useRef(Promise.resolve())
        , c = w.useRef({
          enter: [],
          leave: [],
          idle: []
      })
        , f = ye((y,g,m)=>{
          u.current.splice(0),
          t && (t.chains.current[g] = t.chains.current[g].filter(([E])=>E !== y)),
          t == null || t.chains.current[g].push([y, new Promise(E=>{
              u.current.push(E)
          }
          )]),
          t == null || t.chains.current[g].push([y, new Promise(E=>{
              Promise.all(c.current[g].map(([h,p])=>p)).then(()=>E())
          }
          )]),
          g === "enter" ? s.current = s.current.then(()=>t == null ? void 0 : t.wait.current).then(()=>m(g)) : m(g)
      }
      )
        , d = ye((y,g,m)=>{
          Promise.all(c.current[g].splice(0).map(([E,h])=>h)).then(()=>{
              var E;
              (E = u.current.shift()) == null || E()
          }
          ).then(()=>m(g))
      }
      );
      return w.useMemo(()=>({
          children: n,
          register: a,
          unregister: l,
          onStart: f,
          onStop: d,
          wait: s,
          chains: c
      }), [a, l, n, f, d, c, s])
  }
  function BE() {}
  let HE = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
  function Cp(e) {
      var t;
      let r = {};
      for (let n of HE)
          r[n] = (t = e[n]) != null ? t : BE;
      return r
  }
  function VE(e) {
      let t = w.useRef(Cp(e));
      return w.useEffect(()=>{
          t.current = Cp(e)
      }
      , [e]),
      t
  }
  let WE = "div"
    , Pg = Yl.RenderStrategy;
  function KE(e, t) {
      var r, n;
      let {beforeEnter: i, afterEnter: o, beforeLeave: l, afterLeave: a, enter: u, enterFrom: s, enterTo: c, entered: f, leave: d, leaveFrom: y, leaveTo: g, ...m} = e
        , E = w.useRef(null)
        , h = Dt(E, t)
        , p = (r = m.unmount) == null || r ? yr.Unmount : yr.Hidden
        , {show: v, appear: C, initial: k} = zE()
        , [b,S] = w.useState(v ? "visible" : "hidden")
        , O = UE()
        , {register: L, unregister: M} = O;
      w.useEffect(()=>L(E), [L, E]),
      w.useEffect(()=>{
          if (p === yr.Hidden && E.current) {
              if (v && b !== "visible") {
                  S("visible");
                  return
              }
              return Qe(b, {
                  hidden: ()=>M(E),
                  visible: ()=>L(E)
              })
          }
      }
      , [b, E, L, M, v, p]);
      let V = Xt({
          base: ar(m.className),
          enter: ar(u),
          enterFrom: ar(s),
          enterTo: ar(c),
          entered: ar(f),
          leave: ar(d),
          leaveFrom: ar(y),
          leaveTo: ar(g)
      })
        , ie = VE({
          beforeEnter: i,
          afterEnter: o,
          beforeLeave: l,
          afterLeave: a
      })
        , ne = Yn();
      w.useEffect(()=>{
          if (ne && b === "visible" && E.current === null)
              throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
      }
      , [E, b, ne]);
      let se = k && !C
        , oe = C && v && k
        , W = !ne || se ? "idle" : v ? "enter" : "leave"
        , J = ME(0)
        , $ = ye(pe=>Qe(pe, {
          enter: ()=>{
              J.addFlag(ct.Opening),
              ie.current.beforeEnter()
          }
          ,
          leave: ()=>{
              J.addFlag(ct.Closing),
              ie.current.beforeLeave()
          }
          ,
          idle: ()=>{}
      }))
        , F = ye(pe=>Qe(pe, {
          enter: ()=>{
              J.removeFlag(ct.Opening),
              ie.current.afterEnter()
          }
          ,
          leave: ()=>{
              J.removeFlag(ct.Closing),
              ie.current.afterLeave()
          }
          ,
          idle: ()=>{}
      }))
        , z = Eg(()=>{
          S("hidden"),
          M(E)
      }
      , O)
        , Z = w.useRef(!1);
      AE({
          immediate: oe,
          container: E,
          classes: V,
          direction: W,
          onStart: Xt(pe=>{
              Z.current = !0,
              z.onStart(E, pe, $)
          }
          ),
          onStop: Xt(pe=>{
              Z.current = !1,
              z.onStop(E, pe, F),
              pe === "leave" && !Ea(z) && (S("hidden"),
              M(E))
          }
          )
      });
      let q = m
        , tt = {
          ref: h
      };
      return oe ? q = {
          ...q,
          className: Ql(m.className, ...V.current.enter, ...V.current.enterFrom)
      } : Z.current && (q.className = Ql(m.className, (n = E.current) == null ? void 0 : n.className),
      q.className === "" && delete q.className),
      U.createElement(xa.Provider, {
          value: z
      }, U.createElement(yx, {
          value: Qe(b, {
              visible: ct.Open,
              hidden: ct.Closed
          }) | J.flags
      }, kt({
          ourProps: tt,
          theirProps: q,
          defaultTag: WE,
          features: Pg,
          visible: b === "visible",
          name: "Transition.Child"
      })))
  }
  function GE(e, t) {
      let {show: r, appear: n=!1, unmount: i=!0, ...o} = e
        , l = w.useRef(null)
        , a = Dt(l, t);
      Yn();
      let u = yf();
      if (r === void 0 && u !== null && (r = (u & ct.Open) === ct.Open),
      ![!0, !1].includes(r))
          throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
      let[s,c] = w.useState(r ? "visible" : "hidden")
        , f = Eg(()=>{
          c("hidden")
      }
      )
        , [d,y] = w.useState(!0)
        , g = w.useRef([r]);
      Tt(()=>{
          d !== !1 && g.current[g.current.length - 1] !== r && (g.current.push(r),
          y(!1))
      }
      , [g, r]);
      let m = w.useMemo(()=>({
          show: r,
          appear: n,
          initial: d
      }), [r, n, d]);
      w.useEffect(()=>{
          if (r)
              c("visible");
          else if (!Ea(f))
              c("hidden");
          else {
              let v = l.current;
              if (!v)
                  return;
              let C = v.getBoundingClientRect();
              C.x === 0 && C.y === 0 && C.width === 0 && C.height === 0 && c("hidden")
          }
      }
      , [r, f]);
      let E = {
          unmount: i
      }
        , h = ye(()=>{
          var v;
          d && y(!1),
          (v = e.beforeEnter) == null || v.call(e)
      }
      )
        , p = ye(()=>{
          var v;
          d && y(!1),
          (v = e.beforeLeave) == null || v.call(e)
      }
      );
      return U.createElement(xa.Provider, {
          value: f
      }, U.createElement(Sa.Provider, {
          value: m
      }, kt({
          ourProps: {
              ...E,
              as: w.Fragment,
              children: U.createElement(Cg, {
                  ref: a,
                  ...E,
                  ...o,
                  beforeEnter: h,
                  beforeLeave: p
              })
          },
          theirProps: {},
          defaultTag: w.Fragment,
          features: Pg,
          visible: s === "visible",
          name: "Transition"
      })))
  }
  function QE(e, t) {
      let r = w.useContext(Sa) !== null
        , n = yf() !== null;
      return U.createElement(U.Fragment, null, !r && n ? U.createElement(Qs, {
          ref: t,
          ...e
      }) : U.createElement(Cg, {
          ref: t,
          ...e
      }))
  }
  let Qs = mt(GE)
    , Cg = mt(KE)
    , YE = mt(QE)
    , _p = Object.assign(Qs, {
      Child: YE,
      Root: Qs
  });
  var qE = Math.ceil
    , XE = Math.max;
  function JE(e, t, r, n) {
      for (var i = -1, o = XE(qE((t - e) / (r || 1)), 0), l = Array(o); o--; )
          l[n ? o : ++i] = e,
          e += r;
      return l
  }
  var ZE = JE;
  function eP(e, t) {
      return e === t || e !== e && t !== t
  }
  var Sf = eP
    , tP = typeof Io == "object" && Io && Io.Object === Object && Io
    , _g = tP
    , rP = _g
    , nP = typeof self == "object" && self && self.Object === Object && self
    , iP = rP || nP || Function("return this")()
    , Vt = iP
    , oP = Vt
    , lP = oP.Symbol
    , Pa = lP
    , Rp = Pa
    , Rg = Object.prototype
    , aP = Rg.hasOwnProperty
    , uP = Rg.toString
    , Ci = Rp ? Rp.toStringTag : void 0;
  function sP(e) {
      var t = aP.call(e, Ci)
        , r = e[Ci];
      try {
          e[Ci] = void 0;
          var n = !0
      } catch {}
      var i = uP.call(e);
      return n && (t ? e[Ci] = r : delete e[Ci]),
      i
  }
  var cP = sP
    , fP = Object.prototype
    , dP = fP.toString;
  function pP(e) {
      return dP.call(e)
  }
  var hP = pP
    , Tp = Pa
    , vP = cP
    , mP = hP
    , gP = "[object Null]"
    , yP = "[object Undefined]"
    , kp = Tp ? Tp.toStringTag : void 0;
  function wP(e) {
      return e == null ? e === void 0 ? yP : gP : kp && kp in Object(e) ? vP(e) : mP(e)
  }
  var ko = wP;
  function SP(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function")
  }
  var Ca = SP
    , xP = ko
    , EP = Ca
    , PP = "[object AsyncFunction]"
    , CP = "[object Function]"
    , _P = "[object GeneratorFunction]"
    , RP = "[object Proxy]";
  function TP(e) {
      if (!EP(e))
          return !1;
      var t = xP(e);
      return t == CP || t == _P || t == PP || t == RP
  }
  var Tg = TP
    , kP = 9007199254740991;
  function $P(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= kP
  }
  var kg = $P
    , OP = Tg
    , jP = kg;
  function bP(e) {
      return e != null && jP(e.length) && !OP(e)
  }
  var $g = bP
    , NP = 9007199254740991
    , MP = /^(?:0|[1-9]\d*)$/;
  function LP(e, t) {
      var r = typeof e;
      return t = t ?? NP,
      !!t && (r == "number" || r != "symbol" && MP.test(e)) && e > -1 && e % 1 == 0 && e < t
  }
  var Og = LP
    , IP = Sf
    , DP = $g
    , AP = Og
    , FP = Ca;
  function zP(e, t, r) {
      if (!FP(r))
          return !1;
      var n = typeof t;
      return (n == "number" ? DP(r) && AP(t, r.length) : n == "string" && t in r) ? IP(r[t], e) : !1
  }
  var UP = zP
    , BP = /\s/;
  function HP(e) {
      for (var t = e.length; t-- && BP.test(e.charAt(t)); )
          ;
      return t
  }
  var VP = HP
    , WP = VP
    , KP = /^\s+/;
  function GP(e) {
      return e && e.slice(0, WP(e) + 1).replace(KP, "")
  }
  var QP = GP;
  function YP(e) {
      return e != null && typeof e == "object"
  }
  var $o = YP
    , qP = ko
    , XP = $o
    , JP = "[object Symbol]";
  function ZP(e) {
      return typeof e == "symbol" || XP(e) && qP(e) == JP
  }
  var jg = ZP
    , eC = QP
    , $p = Ca
    , tC = jg
    , Op = NaN
    , rC = /^[-+]0x[0-9a-f]+$/i
    , nC = /^0b[01]+$/i
    , iC = /^0o[0-7]+$/i
    , oC = parseInt;
  function lC(e) {
      if (typeof e == "number")
          return e;
      if (tC(e))
          return Op;
      if ($p(e)) {
          var t = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = $p(t) ? t + "" : t
      }
      if (typeof e != "string")
          return e === 0 ? e : +e;
      e = eC(e);
      var r = nC.test(e);
      return r || iC.test(e) ? oC(e.slice(2), r ? 2 : 8) : rC.test(e) ? Op : +e
  }
  var bg = lC
    , aC = bg
    , jp = 1 / 0
    , uC = 17976931348623157e292;
  function sC(e) {
      if (!e)
          return e === 0 ? e : 0;
      if (e = aC(e),
      e === jp || e === -jp) {
          var t = e < 0 ? -1 : 1;
          return t * uC
      }
      return e === e ? e : 0
  }
  var Ng = sC
    , cC = ZE
    , fC = UP
    , Ru = Ng;
  function dC(e) {
      return function(t, r, n) {
          return n && typeof n != "number" && fC(t, r, n) && (r = n = void 0),
          t = Ru(t),
          r === void 0 ? (r = t,
          t = 0) : r = Ru(r),
          n = n === void 0 ? t < r ? 1 : -1 : Ru(n),
          cC(t, r, n, e)
      }
  }
  var pC = dC
    , hC = pC
    , vC = hC()
    , mC = vC;
  const gC = Wn(mC);
  function Ee() {
      return Ee = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
      }
      ,
      Ee.apply(this, arguments)
  }
  function Mg(e, t) {
      if (e == null)
          return {};
      var r = {};
      for (var n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
              if (t.indexOf(n) >= 0)
                  continue;
              r[n] = e[n]
          }
      return r
  }
  var Lg = {
      exports: {}
  }
    , ae = {};
  /** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
  var Ie = typeof Symbol == "function" && Symbol.for
    , xf = Ie ? Symbol.for("react.element") : 60103
    , Ef = Ie ? Symbol.for("react.portal") : 60106
    , _a = Ie ? Symbol.for("react.fragment") : 60107
    , Ra = Ie ? Symbol.for("react.strict_mode") : 60108
    , Ta = Ie ? Symbol.for("react.profiler") : 60114
    , ka = Ie ? Symbol.for("react.provider") : 60109
    , $a = Ie ? Symbol.for("react.context") : 60110
    , Pf = Ie ? Symbol.for("react.async_mode") : 60111
    , Oa = Ie ? Symbol.for("react.concurrent_mode") : 60111
    , ja = Ie ? Symbol.for("react.forward_ref") : 60112
    , ba = Ie ? Symbol.for("react.suspense") : 60113
    , yC = Ie ? Symbol.for("react.suspense_list") : 60120
    , Na = Ie ? Symbol.for("react.memo") : 60115
    , Ma = Ie ? Symbol.for("react.lazy") : 60116
    , wC = Ie ? Symbol.for("react.block") : 60121
    , SC = Ie ? Symbol.for("react.fundamental") : 60117
    , xC = Ie ? Symbol.for("react.responder") : 60118
    , EC = Ie ? Symbol.for("react.scope") : 60119;
  function gt(e) {
      if (typeof e == "object" && e !== null) {
          var t = e.$$typeof;
          switch (t) {
          case xf:
              switch (e = e.type,
              e) {
              case Pf:
              case Oa:
              case _a:
              case Ta:
              case Ra:
              case ba:
                  return e;
              default:
                  switch (e = e && e.$$typeof,
                  e) {
                  case $a:
                  case ja:
                  case Ma:
                  case Na:
                  case ka:
                      return e;
                  default:
                      return t
                  }
              }
          case Ef:
              return t
          }
      }
  }
  function Ig(e) {
      return gt(e) === Oa
  }
  ae.AsyncMode = Pf;
  ae.ConcurrentMode = Oa;
  ae.ContextConsumer = $a;
  ae.ContextProvider = ka;
  ae.Element = xf;
  ae.ForwardRef = ja;
  ae.Fragment = _a;
  ae.Lazy = Ma;
  ae.Memo = Na;
  ae.Portal = Ef;
  ae.Profiler = Ta;
  ae.StrictMode = Ra;
  ae.Suspense = ba;
  ae.isAsyncMode = function(e) {
      return Ig(e) || gt(e) === Pf
  }
  ;
  ae.isConcurrentMode = Ig;
  ae.isContextConsumer = function(e) {
      return gt(e) === $a
  }
  ;
  ae.isContextProvider = function(e) {
      return gt(e) === ka
  }
  ;
  ae.isElement = function(e) {
      return typeof e == "object" && e !== null && e.$$typeof === xf
  }
  ;
  ae.isForwardRef = function(e) {
      return gt(e) === ja
  }
  ;
  ae.isFragment = function(e) {
      return gt(e) === _a
  }
  ;
  ae.isLazy = function(e) {
      return gt(e) === Ma
  }
  ;
  ae.isMemo = function(e) {
      return gt(e) === Na
  }
  ;
  ae.isPortal = function(e) {
      return gt(e) === Ef
  }
  ;
  ae.isProfiler = function(e) {
      return gt(e) === Ta
  }
  ;
  ae.isStrictMode = function(e) {
      return gt(e) === Ra
  }
  ;
  ae.isSuspense = function(e) {
      return gt(e) === ba
  }
  ;
  ae.isValidElementType = function(e) {
      return typeof e == "string" || typeof e == "function" || e === _a || e === Oa || e === Ta || e === Ra || e === ba || e === yC || typeof e == "object" && e !== null && (e.$$typeof === Ma || e.$$typeof === Na || e.$$typeof === ka || e.$$typeof === $a || e.$$typeof === ja || e.$$typeof === SC || e.$$typeof === xC || e.$$typeof === EC || e.$$typeof === wC)
  }
  ;
  ae.typeOf = gt;
  Lg.exports = ae;
  var PC = Lg.exports
    , Cf = PC
    , CC = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0
  }
    , _C = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0
  }
    , RC = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0
  }
    , Dg = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0
  }
    , _f = {};
  _f[Cf.ForwardRef] = RC;
  _f[Cf.Memo] = Dg;
  function bp(e) {
      return Cf.isMemo(e) ? Dg : _f[e.$$typeof] || CC
  }
  var TC = Object.defineProperty
    , kC = Object.getOwnPropertyNames
    , Np = Object.getOwnPropertySymbols
    , $C = Object.getOwnPropertyDescriptor
    , OC = Object.getPrototypeOf
    , Mp = Object.prototype;
  function Ag(e, t, r) {
      if (typeof t != "string") {
          if (Mp) {
              var n = OC(t);
              n && n !== Mp && Ag(e, n, r)
          }
          var i = kC(t);
          Np && (i = i.concat(Np(t)));
          for (var o = bp(e), l = bp(t), a = 0; a < i.length; ++a) {
              var u = i[a];
              if (!_C[u] && !(r && r[u]) && !(l && l[u]) && !(o && o[u])) {
                  var s = $C(t, u);
                  try {
                      TC(e, u, s)
                  } catch {}
              }
          }
      }
      return e
  }
  var jC = Ag;
  const bC = Wn(jC);
  var Fg = {};
  Object.defineProperty(Fg, "__esModule", {
      value: !0
  });
  Fg.default = NC;
  function NC(e) {
      return e.displayName || e.name || (typeof e == "string" && e.length > 0 ? e : "Unknown")
  }
  function nl(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : e[t] = r,
      e
  }
  function Jl() {
      return Jl = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
      }
      ,
      Jl.apply(this, arguments)
  }
  function MC(e, t) {
      e.prototype = Object.create(t.prototype),
      e.prototype.constructor = e,
      e.__proto__ = t
  }
  function ur(e) {
      if (e === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
  }
  function LC(e) {
      var t = function(r) {
          MC(n, r);
          function n() {
              for (var o, l = arguments.length, a = new Array(l), u = 0; u < l; u++)
                  a[u] = arguments[u];
              return o = r.call.apply(r, [this].concat(a)) || this,
              nl(ur(ur(o)), "cachedTheme", void 0),
              nl(ur(ur(o)), "lastOuterTheme", void 0),
              nl(ur(ur(o)), "lastTheme", void 0),
              nl(ur(ur(o)), "renderProvider", function(s) {
                  var c = o.props.children;
                  return U.createElement(e.Provider, {
                      value: o.getTheme(s)
                  }, c)
              }),
              o
          }
          var i = n.prototype;
          return i.getTheme = function(l) {
              if (this.props.theme !== this.lastTheme || l !== this.lastOuterTheme || !this.cachedTheme)
                  if (this.lastOuterTheme = l,
                  this.lastTheme = this.props.theme,
                  typeof this.lastTheme == "function") {
                      var a = this.props.theme;
                      this.cachedTheme = a(l)
                  } else {
                      var u = this.props.theme;
                      this.cachedTheme = l ? Jl({}, l, u) : u
                  }
              return this.cachedTheme
          }
          ,
          i.render = function() {
              var l = this.props.children;
              return l ? U.createElement(e.Consumer, null, this.renderProvider) : null
          }
          ,
          n
      }(U.Component);
      return t
  }
  function IC(e) {
      return function(r) {
          var n = U.forwardRef(function(i, o) {
              return U.createElement(e.Consumer, null, function(l) {
                  return U.createElement(r, Jl({
                      theme: l,
                      ref: o
                  }, i))
              })
          });
          return bC(n, r),
          n
      }
  }
  function DC(e) {
      var t = function() {
          var n = U.useContext(e);
          return n
      };
      return t
  }
  function AC(e) {
      return {
          context: e,
          withTheme: IC(e),
          useTheme: DC(e),
          ThemeProvider: LC(e)
      }
  }
  var zg = w.createContext();
  AC(zg);
  var Lp = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e
  }
  : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  }
    , Xn = (typeof window > "u" ? "undefined" : Lp(window)) === "object" && (typeof document > "u" ? "undefined" : Lp(document)) === "object" && document.nodeType === 9;
  function fo(e) {
      "@babel/helpers - typeof";
      return fo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
          return typeof t
      }
      : function(t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      }
      ,
      fo(e)
  }
  function FC(e, t) {
      if (fo(e) != "object" || !e)
          return e;
      var r = e[Symbol.toPrimitive];
      if (r !== void 0) {
          var n = r.call(e, t);
          if (fo(n) != "object")
              return n;
          throw new TypeError("@@toPrimitive must return a primitive value.")
      }
      return String(e)
  }
  function zC(e) {
      var t = FC(e, "string");
      return fo(t) == "symbol" ? t : t + ""
  }
  function UC(e, t) {
      for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1,
          n.configurable = !0,
          "value"in n && (n.writable = !0),
          Object.defineProperty(e, zC(n.key), n)
      }
  }
  function Rf(e, t, r) {
      return t && UC(e.prototype, t),
      Object.defineProperty(e, "prototype", {
          writable: !1
      }),
      e
  }
  function Ys(e, t) {
      return Ys = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
          return n.__proto__ = i,
          n
      }
      ,
      Ys(e, t)
  }
  function Ug(e, t) {
      e.prototype = Object.create(t.prototype),
      e.prototype.constructor = e,
      Ys(e, t)
  }
  function Ip(e) {
      if (e === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
  }
  var BC = {}.constructor;
  function qs(e) {
      if (e == null || typeof e != "object")
          return e;
      if (Array.isArray(e))
          return e.map(qs);
      if (e.constructor !== BC)
          return e;
      var t = {};
      for (var r in e)
          t[r] = qs(e[r]);
      return t
  }
  function La(e, t, r) {
      e === void 0 && (e = "unnamed");
      var n = r.jss
        , i = qs(t)
        , o = n.plugins.onCreateRule(e, i, r);
      return o || (e[0],
      null)
  }
  var Dp = function(t, r) {
      for (var n = "", i = 0; i < t.length && t[i] !== "!important"; i++)
          n && (n += r),
          n += t[i];
      return n
  }
    , Zr = function(t) {
      if (!Array.isArray(t))
          return t;
      var r = "";
      if (Array.isArray(t[0]))
          for (var n = 0; n < t.length && t[n] !== "!important"; n++)
              r && (r += ", "),
              r += Dp(t[n], " ");
      else
          r = Dp(t, ", ");
      return t[t.length - 1] === "!important" && (r += " !important"),
      r
  };
  function Jn(e) {
      return e && e.format === !1 ? {
          linebreak: "",
          space: ""
      } : {
          linebreak: `
`,
          space: " "
      }
  }
  function _i(e, t) {
      for (var r = "", n = 0; n < t; n++)
          r += "  ";
      return r + e
  }
  function po(e, t, r) {
      r === void 0 && (r = {});
      var n = "";
      if (!t)
          return n;
      var i = r
        , o = i.indent
        , l = o === void 0 ? 0 : o
        , a = t.fallbacks;
      r.format === !1 && (l = -1 / 0);
      var u = Jn(r)
        , s = u.linebreak
        , c = u.space;
      if (e && l++,
      a)
          if (Array.isArray(a))
              for (var f = 0; f < a.length; f++) {
                  var d = a[f];
                  for (var y in d) {
                      var g = d[y];
                      g != null && (n && (n += s),
                      n += _i(y + ":" + c + Zr(g) + ";", l))
                  }
              }
          else
              for (var m in a) {
                  var E = a[m];
                  E != null && (n && (n += s),
                  n += _i(m + ":" + c + Zr(E) + ";", l))
              }
      for (var h in t) {
          var p = t[h];
          p != null && h !== "fallbacks" && (n && (n += s),
          n += _i(h + ":" + c + Zr(p) + ";", l))
      }
      return !n && !r.allowEmpty || !e ? n : (l--,
      n && (n = "" + s + n + s),
      _i("" + e + c + "{" + n, l) + _i("}", l))
  }
  var HC = /([[\].#*$><+~=|^:(),"'`\s])/g
    , Ap = typeof CSS < "u" && CSS.escape
    , Tf = function(e) {
      return Ap ? Ap(e) : e.replace(HC, "\\$1")
  }
    , Bg = function() {
      function e(r, n, i) {
          this.type = "style",
          this.isProcessed = !1;
          var o = i.sheet
            , l = i.Renderer;
          this.key = r,
          this.options = i,
          this.style = n,
          o ? this.renderer = o.renderer : l && (this.renderer = new l)
      }
      var t = e.prototype;
      return t.prop = function(n, i, o) {
          if (i === void 0)
              return this.style[n];
          var l = o ? o.force : !1;
          if (!l && this.style[n] === i)
              return this;
          var a = i;
          (!o || o.process !== !1) && (a = this.options.jss.plugins.onChangeValue(i, n, this));
          var u = a == null || a === !1
            , s = n in this.style;
          if (u && !s && !l)
              return this;
          var c = u && s;
          if (c ? delete this.style[n] : this.style[n] = a,
          this.renderable && this.renderer)
              return c ? this.renderer.removeProperty(this.renderable, n) : this.renderer.setProperty(this.renderable, n, a),
              this;
          var f = this.options.sheet;
          return f && f.attached,
          this
      }
      ,
      e
  }()
    , Xs = function(e) {
      Ug(t, e);
      function t(n, i, o) {
          var l;
          l = e.call(this, n, i, o) || this;
          var a = o.selector
            , u = o.scoped
            , s = o.sheet
            , c = o.generateId;
          return a ? l.selectorText = a : u !== !1 && (l.id = c(Ip(Ip(l)), s),
          l.selectorText = "." + Tf(l.id)),
          l
      }
      var r = t.prototype;
      return r.applyTo = function(i) {
          var o = this.renderer;
          if (o) {
              var l = this.toJSON();
              for (var a in l)
                  o.setProperty(i, a, l[a])
          }
          return this
      }
      ,
      r.toJSON = function() {
          var i = {};
          for (var o in this.style) {
              var l = this.style[o];
              typeof l != "object" ? i[o] = l : Array.isArray(l) && (i[o] = Zr(l))
          }
          return i
      }
      ,
      r.toString = function(i) {
          var o = this.options.sheet
            , l = o ? o.options.link : !1
            , a = l ? Ee({}, i, {
              allowEmpty: !0
          }) : i;
          return po(this.selectorText, this.style, a)
      }
      ,
      Rf(t, [{
          key: "selector",
          set: function(i) {
              if (i !== this.selectorText) {
                  this.selectorText = i;
                  var o = this.renderer
                    , l = this.renderable;
                  if (!(!l || !o)) {
                      var a = o.setSelector(l, i);
                      a || o.replaceRule(l, this)
                  }
              }
          },
          get: function() {
              return this.selectorText
          }
      }]),
      t
  }(Bg)
    , VC = {
      onCreateRule: function(t, r, n) {
          return t[0] === "@" || n.parent && n.parent.type === "keyframes" ? null : new Xs(t,r,n)
      }
  }
    , Tu = {
      indent: 1,
      children: !0
  }
    , WC = /@([\w-]+)/
    , KC = function() {
      function e(r, n, i) {
          this.type = "conditional",
          this.isProcessed = !1,
          this.key = r;
          var o = r.match(WC);
          this.at = o ? o[1] : "unknown",
          this.query = i.name || "@" + this.at,
          this.options = i,
          this.rules = new Ia(Ee({}, i, {
              parent: this
          }));
          for (var l in n)
              this.rules.add(l, n[l]);
          this.rules.process()
      }
      var t = e.prototype;
      return t.getRule = function(n) {
          return this.rules.get(n)
      }
      ,
      t.indexOf = function(n) {
          return this.rules.indexOf(n)
      }
      ,
      t.addRule = function(n, i, o) {
          var l = this.rules.add(n, i, o);
          return l ? (this.options.jss.plugins.onProcessRule(l),
          l) : null
      }
      ,
      t.replaceRule = function(n, i, o) {
          var l = this.rules.replace(n, i, o);
          return l && this.options.jss.plugins.onProcessRule(l),
          l
      }
      ,
      t.toString = function(n) {
          n === void 0 && (n = Tu);
          var i = Jn(n)
            , o = i.linebreak;
          if (n.indent == null && (n.indent = Tu.indent),
          n.children == null && (n.children = Tu.children),
          n.children === !1)
              return this.query + " {}";
          var l = this.rules.toString(n);
          return l ? this.query + " {" + o + l + o + "}" : ""
      }
      ,
      e
  }()
    , GC = /@container|@media|@supports\s+/
    , QC = {
      onCreateRule: function(t, r, n) {
          return GC.test(t) ? new KC(t,r,n) : null
      }
  }
    , ku = {
      indent: 1,
      children: !0
  }
    , YC = /@keyframes\s+([\w-]+)/
    , Js = function() {
      function e(r, n, i) {
          this.type = "keyframes",
          this.at = "@keyframes",
          this.isProcessed = !1;
          var o = r.match(YC);
          o && o[1] ? this.name = o[1] : this.name = "noname",
          this.key = this.type + "-" + this.name,
          this.options = i;
          var l = i.scoped
            , a = i.sheet
            , u = i.generateId;
          this.id = l === !1 ? this.name : Tf(u(this, a)),
          this.rules = new Ia(Ee({}, i, {
              parent: this
          }));
          for (var s in n)
              this.rules.add(s, n[s], Ee({}, i, {
                  parent: this
              }));
          this.rules.process()
      }
      var t = e.prototype;
      return t.toString = function(n) {
          n === void 0 && (n = ku);
          var i = Jn(n)
            , o = i.linebreak;
          if (n.indent == null && (n.indent = ku.indent),
          n.children == null && (n.children = ku.children),
          n.children === !1)
              return this.at + " " + this.id + " {}";
          var l = this.rules.toString(n);
          return l && (l = "" + o + l + o),
          this.at + " " + this.id + " {" + l + "}"
      }
      ,
      e
  }()
    , qC = /@keyframes\s+/
    , XC = /\$([\w-]+)/g
    , Zs = function(t, r) {
      return typeof t == "string" ? t.replace(XC, function(n, i) {
          return i in r ? r[i] : n
      }) : t
  }
    , Fp = function(t, r, n) {
      var i = t[r]
        , o = Zs(i, n);
      o !== i && (t[r] = o)
  }
    , JC = {
      onCreateRule: function(t, r, n) {
          return typeof t == "string" && qC.test(t) ? new Js(t,r,n) : null
      },
      onProcessStyle: function(t, r, n) {
          return r.type !== "style" || !n || ("animation-name"in t && Fp(t, "animation-name", n.keyframes),
          "animation"in t && Fp(t, "animation", n.keyframes)),
          t
      },
      onChangeValue: function(t, r, n) {
          var i = n.options.sheet;
          if (!i)
              return t;
          switch (r) {
          case "animation":
              return Zs(t, i.keyframes);
          case "animation-name":
              return Zs(t, i.keyframes);
          default:
              return t
          }
      }
  }
    , ZC = function(e) {
      Ug(t, e);
      function t() {
          return e.apply(this, arguments) || this
      }
      var r = t.prototype;
      return r.toString = function(i) {
          var o = this.options.sheet
            , l = o ? o.options.link : !1
            , a = l ? Ee({}, i, {
              allowEmpty: !0
          }) : i;
          return po(this.key, this.style, a)
      }
      ,
      t
  }(Bg)
    , e_ = {
      onCreateRule: function(t, r, n) {
          return n.parent && n.parent.type === "keyframes" ? new ZC(t,r,n) : null
      }
  }
    , t_ = function() {
      function e(r, n, i) {
          this.type = "font-face",
          this.at = "@font-face",
          this.isProcessed = !1,
          this.key = r,
          this.style = n,
          this.options = i
      }
      var t = e.prototype;
      return t.toString = function(n) {
          var i = Jn(n)
            , o = i.linebreak;
          if (Array.isArray(this.style)) {
              for (var l = "", a = 0; a < this.style.length; a++)
                  l += po(this.at, this.style[a]),
                  this.style[a + 1] && (l += o);
              return l
          }
          return po(this.at, this.style, n)
      }
      ,
      e
  }()
    , r_ = /@font-face/
    , n_ = {
      onCreateRule: function(t, r, n) {
          return r_.test(t) ? new t_(t,r,n) : null
      }
  }
    , i_ = function() {
      function e(r, n, i) {
          this.type = "viewport",
          this.at = "@viewport",
          this.isProcessed = !1,
          this.key = r,
          this.style = n,
          this.options = i
      }
      var t = e.prototype;
      return t.toString = function(n) {
          return po(this.key, this.style, n)
      }
      ,
      e
  }()
    , o_ = {
      onCreateRule: function(t, r, n) {
          return t === "@viewport" || t === "@-ms-viewport" ? new i_(t,r,n) : null
      }
  }
    , l_ = function() {
      function e(r, n, i) {
          this.type = "simple",
          this.isProcessed = !1,
          this.key = r,
          this.value = n,
          this.options = i
      }
      var t = e.prototype;
      return t.toString = function(n) {
          if (Array.isArray(this.value)) {
              for (var i = "", o = 0; o < this.value.length; o++)
                  i += this.key + " " + this.value[o] + ";",
                  this.value[o + 1] && (i += `
`);
              return i
          }
          return this.key + " " + this.value + ";"
      }
      ,
      e
  }()
    , a_ = {
      "@charset": !0,
      "@import": !0,
      "@namespace": !0
  }
    , u_ = {
      onCreateRule: function(t, r, n) {
          return t in a_ ? new l_(t,r,n) : null
      }
  }
    , zp = [VC, QC, JC, e_, n_, o_, u_]
    , s_ = {
      process: !0
  }
    , Up = {
      force: !0,
      process: !0
  }
    , Ia = function() {
      function e(r) {
          this.map = {},
          this.raw = {},
          this.index = [],
          this.counter = 0,
          this.options = r,
          this.classes = r.classes,
          this.keyframes = r.keyframes
      }
      var t = e.prototype;
      return t.add = function(n, i, o) {
          var l = this.options
            , a = l.parent
            , u = l.sheet
            , s = l.jss
            , c = l.Renderer
            , f = l.generateId
            , d = l.scoped
            , y = Ee({
              classes: this.classes,
              parent: a,
              sheet: u,
              jss: s,
              Renderer: c,
              generateId: f,
              scoped: d,
              name: n,
              keyframes: this.keyframes,
              selector: void 0
          }, o)
            , g = n;
          n in this.raw && (g = n + "-d" + this.counter++),
          this.raw[g] = i,
          g in this.classes && (y.selector = "." + Tf(this.classes[g]));
          var m = La(g, i, y);
          if (!m)
              return null;
          this.register(m);
          var E = y.index === void 0 ? this.index.length : y.index;
          return this.index.splice(E, 0, m),
          m
      }
      ,
      t.replace = function(n, i, o) {
          var l = this.get(n)
            , a = this.index.indexOf(l);
          l && this.remove(l);
          var u = o;
          return a !== -1 && (u = Ee({}, o, {
              index: a
          })),
          this.add(n, i, u)
      }
      ,
      t.get = function(n) {
          return this.map[n]
      }
      ,
      t.remove = function(n) {
          this.unregister(n),
          delete this.raw[n.key],
          this.index.splice(this.index.indexOf(n), 1)
      }
      ,
      t.indexOf = function(n) {
          return this.index.indexOf(n)
      }
      ,
      t.process = function() {
          var n = this.options.jss.plugins;
          this.index.slice(0).forEach(n.onProcessRule, n)
      }
      ,
      t.register = function(n) {
          this.map[n.key] = n,
          n instanceof Xs ? (this.map[n.selector] = n,
          n.id && (this.classes[n.key] = n.id)) : n instanceof Js && this.keyframes && (this.keyframes[n.name] = n.id)
      }
      ,
      t.unregister = function(n) {
          delete this.map[n.key],
          n instanceof Xs ? (delete this.map[n.selector],
          delete this.classes[n.key]) : n instanceof Js && delete this.keyframes[n.name]
      }
      ,
      t.update = function() {
          var n, i, o;
          if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) == "string" ? (n = arguments.length <= 0 ? void 0 : arguments[0],
          i = arguments.length <= 1 ? void 0 : arguments[1],
          o = arguments.length <= 2 ? void 0 : arguments[2]) : (i = arguments.length <= 0 ? void 0 : arguments[0],
          o = arguments.length <= 1 ? void 0 : arguments[1],
          n = null),
          n)
              this.updateOne(this.get(n), i, o);
          else
              for (var l = 0; l < this.index.length; l++)
                  this.updateOne(this.index[l], i, o)
      }
      ,
      t.updateOne = function(n, i, o) {
          o === void 0 && (o = s_);
          var l = this.options
            , a = l.jss.plugins
            , u = l.sheet;
          if (n.rules instanceof e) {
              n.rules.update(i, o);
              return
          }
          var s = n.style;
          if (a.onUpdate(i, n, u, o),
          o.process && s && s !== n.style) {
              a.onProcessStyle(n.style, n, u);
              for (var c in n.style) {
                  var f = n.style[c]
                    , d = s[c];
                  f !== d && n.prop(c, f, Up)
              }
              for (var y in s) {
                  var g = n.style[y]
                    , m = s[y];
                  g == null && g !== m && n.prop(y, null, Up)
              }
          }
      }
      ,
      t.toString = function(n) {
          for (var i = "", o = this.options.sheet, l = o ? o.options.link : !1, a = Jn(n), u = a.linebreak, s = 0; s < this.index.length; s++) {
              var c = this.index[s]
                , f = c.toString(n);
              !f && !l || (i && (i += u),
              i += f)
          }
          return i
      }
      ,
      e
  }()
    , Hg = function() {
      function e(r, n) {
          this.attached = !1,
          this.deployed = !1,
          this.classes = {},
          this.keyframes = {},
          this.options = Ee({}, n, {
              sheet: this,
              parent: this,
              classes: this.classes,
              keyframes: this.keyframes
          }),
          n.Renderer && (this.renderer = new n.Renderer(this)),
          this.rules = new Ia(this.options);
          for (var i in r)
              this.rules.add(i, r[i]);
          this.rules.process()
      }
      var t = e.prototype;
      return t.attach = function() {
          return this.attached ? this : (this.renderer && this.renderer.attach(),
          this.attached = !0,
          this.deployed || this.deploy(),
          this)
      }
      ,
      t.detach = function() {
          return this.attached ? (this.renderer && this.renderer.detach(),
          this.attached = !1,
          this) : this
      }
      ,
      t.addRule = function(n, i, o) {
          var l = this.queue;
          this.attached && !l && (this.queue = []);
          var a = this.rules.add(n, i, o);
          return a ? (this.options.jss.plugins.onProcessRule(a),
          this.attached ? (this.deployed && (l ? l.push(a) : (this.insertRule(a),
          this.queue && (this.queue.forEach(this.insertRule, this),
          this.queue = void 0))),
          a) : (this.deployed = !1,
          a)) : null
      }
      ,
      t.replaceRule = function(n, i, o) {
          var l = this.rules.get(n);
          if (!l)
              return this.addRule(n, i, o);
          var a = this.rules.replace(n, i, o);
          return a && this.options.jss.plugins.onProcessRule(a),
          this.attached ? (this.deployed && this.renderer && (a ? l.renderable && this.renderer.replaceRule(l.renderable, a) : this.renderer.deleteRule(l)),
          a) : (this.deployed = !1,
          a)
      }
      ,
      t.insertRule = function(n) {
          this.renderer && this.renderer.insertRule(n)
      }
      ,
      t.addRules = function(n, i) {
          var o = [];
          for (var l in n) {
              var a = this.addRule(l, n[l], i);
              a && o.push(a)
          }
          return o
      }
      ,
      t.getRule = function(n) {
          return this.rules.get(n)
      }
      ,
      t.deleteRule = function(n) {
          var i = typeof n == "object" ? n : this.rules.get(n);
          return !i || this.attached && !i.renderable ? !1 : (this.rules.remove(i),
          this.attached && i.renderable && this.renderer ? this.renderer.deleteRule(i.renderable) : !0)
      }
      ,
      t.indexOf = function(n) {
          return this.rules.indexOf(n)
      }
      ,
      t.deploy = function() {
          return this.renderer && this.renderer.deploy(),
          this.deployed = !0,
          this
      }
      ,
      t.update = function() {
          var n;
          return (n = this.rules).update.apply(n, arguments),
          this
      }
      ,
      t.updateOne = function(n, i, o) {
          return this.rules.updateOne(n, i, o),
          this
      }
      ,
      t.toString = function(n) {
          return this.rules.toString(n)
      }
      ,
      e
  }()
    , c_ = function() {
      function e() {
          this.plugins = {
              internal: [],
              external: []
          },
          this.registry = {}
      }
      var t = e.prototype;
      return t.onCreateRule = function(n, i, o) {
          for (var l = 0; l < this.registry.onCreateRule.length; l++) {
              var a = this.registry.onCreateRule[l](n, i, o);
              if (a)
                  return a
          }
          return null
      }
      ,
      t.onProcessRule = function(n) {
          if (!n.isProcessed) {
              for (var i = n.options.sheet, o = 0; o < this.registry.onProcessRule.length; o++)
                  this.registry.onProcessRule[o](n, i);
              n.style && this.onProcessStyle(n.style, n, i),
              n.isProcessed = !0
          }
      }
      ,
      t.onProcessStyle = function(n, i, o) {
          for (var l = 0; l < this.registry.onProcessStyle.length; l++)
              i.style = this.registry.onProcessStyle[l](i.style, i, o)
      }
      ,
      t.onProcessSheet = function(n) {
          for (var i = 0; i < this.registry.onProcessSheet.length; i++)
              this.registry.onProcessSheet[i](n)
      }
      ,
      t.onUpdate = function(n, i, o, l) {
          for (var a = 0; a < this.registry.onUpdate.length; a++)
              this.registry.onUpdate[a](n, i, o, l)
      }
      ,
      t.onChangeValue = function(n, i, o) {
          for (var l = n, a = 0; a < this.registry.onChangeValue.length; a++)
              l = this.registry.onChangeValue[a](l, i, o);
          return l
      }
      ,
      t.use = function(n, i) {
          i === void 0 && (i = {
              queue: "external"
          });
          var o = this.plugins[i.queue];
          o.indexOf(n) === -1 && (o.push(n),
          this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function(l, a) {
              for (var u in a)
                  u in l && l[u].push(a[u]);
              return l
          }, {
              onCreateRule: [],
              onProcessRule: [],
              onProcessStyle: [],
              onProcessSheet: [],
              onChangeValue: [],
              onUpdate: []
          }))
      }
      ,
      e
  }()
    , f_ = function() {
      function e() {
          this.registry = []
      }
      var t = e.prototype;
      return t.add = function(n) {
          var i = this.registry
            , o = n.options.index;
          if (i.indexOf(n) === -1) {
              if (i.length === 0 || o >= this.index) {
                  i.push(n);
                  return
              }
              for (var l = 0; l < i.length; l++)
                  if (i[l].options.index > o) {
                      i.splice(l, 0, n);
                      return
                  }
          }
      }
      ,
      t.reset = function() {
          this.registry = []
      }
      ,
      t.remove = function(n) {
          var i = this.registry.indexOf(n);
          this.registry.splice(i, 1)
      }
      ,
      t.toString = function(n) {
          for (var i = n === void 0 ? {} : n, o = i.attached, l = Mg(i, ["attached"]), a = Jn(l), u = a.linebreak, s = "", c = 0; c < this.registry.length; c++) {
              var f = this.registry[c];
              o != null && f.attached !== o || (s && (s += u),
              s += f.toString(l))
          }
          return s
      }
      ,
      Rf(e, [{
          key: "index",
          get: function() {
              return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index
          }
      }]),
      e
  }()
    , Vi = new f_
    , ec = typeof globalThis < "u" ? globalThis : typeof window < "u" && window.Math === Math ? window : typeof self < "u" && self.Math === Math ? self : Function("return this")()
    , tc = "2f1acc6c3a606b082e5eef5e54414ffb";
  ec[tc] == null && (ec[tc] = 0);
  var Bp = ec[tc]++
    , Hp = function(t) {
      t === void 0 && (t = {});
      var r = 0
        , n = function(o, l) {
          r += 1;
          var a = ""
            , u = "";
          return l && (l.options.classNamePrefix && (u = l.options.classNamePrefix),
          l.options.jss.id != null && (a = String(l.options.jss.id))),
          t.minify ? "" + (u || "c") + Bp + a + r : u + o.key + "-" + Bp + (a ? "-" + a : "") + "-" + r
      };
      return n
  }
    , Vg = function(t) {
      var r;
      return function() {
          return r || (r = t()),
          r
      }
  }
    , d_ = function(t, r) {
      try {
          return t.attributeStyleMap ? t.attributeStyleMap.get(r) : t.style.getPropertyValue(r)
      } catch {
          return ""
      }
  }
    , p_ = function(t, r, n) {
      try {
          var i = n;
          if (Array.isArray(n) && (i = Zr(n)),
          t.attributeStyleMap)
              t.attributeStyleMap.set(r, i);
          else {
              var o = i ? i.indexOf("!important") : -1
                , l = o > -1 ? i.substr(0, o - 1) : i;
              t.style.setProperty(r, l, o > -1 ? "important" : "")
          }
      } catch {
          return !1
      }
      return !0
  }
    , h_ = function(t, r) {
      try {
          t.attributeStyleMap ? t.attributeStyleMap.delete(r) : t.style.removeProperty(r)
      } catch {}
  }
    , v_ = function(t, r) {
      return t.selectorText = r,
      t.selectorText === r
  }
    , Wg = Vg(function() {
      return document.querySelector("head")
  });
  function m_(e, t) {
      for (var r = 0; r < e.length; r++) {
          var n = e[r];
          if (n.attached && n.options.index > t.index && n.options.insertionPoint === t.insertionPoint)
              return n
      }
      return null
  }
  function g_(e, t) {
      for (var r = e.length - 1; r >= 0; r--) {
          var n = e[r];
          if (n.attached && n.options.insertionPoint === t.insertionPoint)
              return n
      }
      return null
  }
  function y_(e) {
      for (var t = Wg(), r = 0; r < t.childNodes.length; r++) {
          var n = t.childNodes[r];
          if (n.nodeType === 8 && n.nodeValue.trim() === e)
              return n
      }
      return null
  }
  function w_(e) {
      var t = Vi.registry;
      if (t.length > 0) {
          var r = m_(t, e);
          if (r && r.renderer)
              return {
                  parent: r.renderer.element.parentNode,
                  node: r.renderer.element
              };
          if (r = g_(t, e),
          r && r.renderer)
              return {
                  parent: r.renderer.element.parentNode,
                  node: r.renderer.element.nextSibling
              }
      }
      var n = e.insertionPoint;
      if (n && typeof n == "string") {
          var i = y_(n);
          if (i)
              return {
                  parent: i.parentNode,
                  node: i.nextSibling
              }
      }
      return !1
  }
  function S_(e, t) {
      var r = t.insertionPoint
        , n = w_(t);
      if (n !== !1 && n.parent) {
          n.parent.insertBefore(e, n.node);
          return
      }
      if (r && typeof r.nodeType == "number") {
          var i = r
            , o = i.parentNode;
          o && o.insertBefore(e, i.nextSibling);
          return
      }
      Wg().appendChild(e)
  }
  var x_ = Vg(function() {
      var e = document.querySelector('meta[property="csp-nonce"]');
      return e ? e.getAttribute("content") : null
  })
    , Vp = function(t, r, n) {
      try {
          "insertRule"in t ? t.insertRule(r, n) : "appendRule"in t && t.appendRule(r)
      } catch {
          return !1
      }
      return t.cssRules[n]
  }
    , Wp = function(t, r) {
      var n = t.cssRules.length;
      return r === void 0 || r > n ? n : r
  }
    , E_ = function() {
      var t = document.createElement("style");
      return t.textContent = `
`,
      t
  }
    , P_ = function() {
      function e(r) {
          this.getPropertyValue = d_,
          this.setProperty = p_,
          this.removeProperty = h_,
          this.setSelector = v_,
          this.hasInsertedRules = !1,
          this.cssRules = [],
          r && Vi.add(r),
          this.sheet = r;
          var n = this.sheet ? this.sheet.options : {}
            , i = n.media
            , o = n.meta
            , l = n.element;
          this.element = l || E_(),
          this.element.setAttribute("data-jss", ""),
          i && this.element.setAttribute("media", i),
          o && this.element.setAttribute("data-meta", o);
          var a = x_();
          a && this.element.setAttribute("nonce", a)
      }
      var t = e.prototype;
      return t.attach = function() {
          if (!(this.element.parentNode || !this.sheet)) {
              S_(this.element, this.sheet.options);
              var n = !!(this.sheet && this.sheet.deployed);
              this.hasInsertedRules && n && (this.hasInsertedRules = !1,
              this.deploy())
          }
      }
      ,
      t.detach = function() {
          if (this.sheet) {
              var n = this.element.parentNode;
              n && n.removeChild(this.element),
              this.sheet.options.link && (this.cssRules = [],
              this.element.textContent = `
`)
          }
      }
      ,
      t.deploy = function() {
          var n = this.sheet;
          if (n) {
              if (n.options.link) {
                  this.insertRules(n.rules);
                  return
              }
              this.element.textContent = `
` + n.toString() + `
`
          }
      }
      ,
      t.insertRules = function(n, i) {
          for (var o = 0; o < n.index.length; o++)
              this.insertRule(n.index[o], o, i)
      }
      ,
      t.insertRule = function(n, i, o) {
          if (o === void 0 && (o = this.element.sheet),
          n.rules) {
              var l = n
                , a = o;
              if (n.type === "conditional" || n.type === "keyframes") {
                  var u = Wp(o, i);
                  if (a = Vp(o, l.toString({
                      children: !1
                  }), u),
                  a === !1)
                      return !1;
                  this.refCssRule(n, u, a)
              }
              return this.insertRules(l.rules, a),
              a
          }
          var s = n.toString();
          if (!s)
              return !1;
          var c = Wp(o, i)
            , f = Vp(o, s, c);
          return f === !1 ? !1 : (this.hasInsertedRules = !0,
          this.refCssRule(n, c, f),
          f)
      }
      ,
      t.refCssRule = function(n, i, o) {
          n.renderable = o,
          n.options.parent instanceof Hg && this.cssRules.splice(i, 0, o)
      }
      ,
      t.deleteRule = function(n) {
          var i = this.element.sheet
            , o = this.indexOf(n);
          return o === -1 ? !1 : (i.deleteRule(o),
          this.cssRules.splice(o, 1),
          !0)
      }
      ,
      t.indexOf = function(n) {
          return this.cssRules.indexOf(n)
      }
      ,
      t.replaceRule = function(n, i) {
          var o = this.indexOf(n);
          return o === -1 ? !1 : (this.element.sheet.deleteRule(o),
          this.cssRules.splice(o, 1),
          this.insertRule(i, o))
      }
      ,
      t.getRules = function() {
          return this.element.sheet.cssRules
      }
      ,
      e
  }()
    , C_ = 0
    , __ = function() {
      function e(r) {
          this.id = C_++,
          this.version = "10.10.0",
          this.plugins = new c_,
          this.options = {
              id: {
                  minify: !1
              },
              createGenerateId: Hp,
              Renderer: Xn ? P_ : null,
              plugins: []
          },
          this.generateId = Hp({
              minify: !1
          });
          for (var n = 0; n < zp.length; n++)
              this.plugins.use(zp[n], {
                  queue: "internal"
              });
          this.setup(r)
      }
      var t = e.prototype;
      return t.setup = function(n) {
          return n === void 0 && (n = {}),
          n.createGenerateId && (this.options.createGenerateId = n.createGenerateId),
          n.id && (this.options.id = Ee({}, this.options.id, n.id)),
          (n.createGenerateId || n.id) && (this.generateId = this.options.createGenerateId(this.options.id)),
          n.insertionPoint != null && (this.options.insertionPoint = n.insertionPoint),
          "Renderer"in n && (this.options.Renderer = n.Renderer),
          n.plugins && this.use.apply(this, n.plugins),
          this
      }
      ,
      t.createStyleSheet = function(n, i) {
          i === void 0 && (i = {});
          var o = i
            , l = o.index;
          typeof l != "number" && (l = Vi.index === 0 ? 0 : Vi.index + 1);
          var a = new Hg(n,Ee({}, i, {
              jss: this,
              generateId: i.generateId || this.generateId,
              insertionPoint: this.options.insertionPoint,
              Renderer: this.options.Renderer,
              index: l
          }));
          return this.plugins.onProcessSheet(a),
          a
      }
      ,
      t.removeStyleSheet = function(n) {
          return n.detach(),
          Vi.remove(n),
          this
      }
      ,
      t.createRule = function(n, i, o) {
          if (i === void 0 && (i = {}),
          o === void 0 && (o = {}),
          typeof n == "object")
              return this.createRule(void 0, n, i);
          var l = Ee({}, o, {
              name: n,
              jss: this,
              Renderer: this.options.Renderer
          });
          l.generateId || (l.generateId = this.generateId),
          l.classes || (l.classes = {}),
          l.keyframes || (l.keyframes = {});
          var a = La(n, i, l);
          return a && this.plugins.onProcessRule(a),
          a
      }
      ,
      t.use = function() {
          for (var n = this, i = arguments.length, o = new Array(i), l = 0; l < i; l++)
              o[l] = arguments[l];
          return o.forEach(function(a) {
              n.plugins.use(a)
          }),
          this
      }
      ,
      e
  }()
    , Kg = function(t) {
      return new __(t)
  }
    , Kp = function() {
      function e() {
          this.length = 0,
          this.sheets = new WeakMap
      }
      var t = e.prototype;
      return t.get = function(n) {
          var i = this.sheets.get(n);
          return i && i.sheet
      }
      ,
      t.add = function(n, i) {
          this.sheets.has(n) || (this.length++,
          this.sheets.set(n, {
              sheet: i,
              refs: 0
          }))
      }
      ,
      t.manage = function(n) {
          var i = this.sheets.get(n);
          if (i)
              return i.refs === 0 && i.sheet.attach(),
              i.refs++,
              i.sheet
      }
      ,
      t.unmanage = function(n) {
          var i = this.sheets.get(n);
          i && i.refs > 0 && (i.refs--,
          i.refs === 0 && i.sheet.detach())
      }
      ,
      Rf(e, [{
          key: "size",
          get: function() {
              return this.length
          }
      }]),
      e
  }()
    , kf = typeof CSS == "object" && CSS != null && "number"in CSS;
  function Gg(e) {
      var t = null;
      for (var r in e) {
          var n = e[r]
            , i = typeof n;
          if (i === "function")
              t || (t = {}),
              t[r] = n;
          else if (i === "object" && n !== null && !Array.isArray(n)) {
              var o = Gg(n);
              o && (t || (t = {}),
              t[r] = o)
          }
      }
      return t
  }
  /**
* A better abstraction over CSS.
*
* @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
* @website https://github.com/cssinjs/jss
* @license MIT
*/
  Kg();
  var Qg = Date.now()
    , $u = "fnValues" + Qg
    , Ou = "fnStyle" + ++Qg
    , R_ = function() {
      return {
          onCreateRule: function(r, n, i) {
              if (typeof n != "function")
                  return null;
              var o = La(r, {}, i);
              return o[Ou] = n,
              o
          },
          onProcessStyle: function(r, n) {
              if ($u in n || Ou in n)
                  return r;
              var i = {};
              for (var o in r) {
                  var l = r[o];
                  typeof l == "function" && (delete r[o],
                  i[o] = l)
              }
              return n[$u] = i,
              r
          },
          onUpdate: function(r, n, i, o) {
              var l = n
                , a = l[Ou];
              a && (l.style = a(r) || {});
              var u = l[$u];
              if (u)
                  for (var s in u)
                      l.prop(s, u[s](r), o)
          }
      }
  };
  function T_(e) {
      var t, r = e.Symbol;
      return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"),
      r.observable = t) : t = "@@observable",
      t
  }
  var mn;
  typeof self < "u" ? mn = self : typeof window < "u" ? mn = window : typeof global < "u" ? mn = global : typeof pc < "u" ? mn = pc : mn = Function("return this")();
  var Gp = T_(mn)
    , Qp = function(t) {
      return t && t[Gp] && t === t[Gp]()
  }
    , k_ = function(t) {
      return {
          onCreateRule: function(n, i, o) {
              if (!Qp(i))
                  return null;
              var l = i
                , a = La(n, {}, o);
              return l.subscribe(function(u) {
                  for (var s in u)
                      a.prop(s, u[s], t)
              }),
              a
          },
          onProcessRule: function(n) {
              if (!(n && n.type !== "style")) {
                  var i = n
                    , o = i.style
                    , l = function(c) {
                      var f = o[c];
                      if (!Qp(f))
                          return "continue";
                      delete o[c],
                      f.subscribe({
                          next: function(y) {
                              i.prop(c, y, t)
                          }
                      })
                  };
                  for (var a in o)
                      var u = l(a)
              }
          }
      }
  }
    , $_ = /;\n/
    , O_ = function(t) {
      for (var r = {}, n = t.split($_), i = 0; i < n.length; i++) {
          var o = (n[i] || "").trim();
          if (o) {
              var l = o.indexOf(":");
              if (l !== -1) {
                  var a = o.substr(0, l).trim()
                    , u = o.substr(l + 1).trim();
                  r[a] = u
              }
          }
      }
      return r
  }
    , j_ = function(t) {
      typeof t.style == "string" && (t.style = O_(t.style))
  };
  function b_() {
      return {
          onProcessRule: j_
      }
  }
  var Tr = "@global"
    , rc = "@global "
    , N_ = function() {
      function e(r, n, i) {
          this.type = "global",
          this.at = Tr,
          this.isProcessed = !1,
          this.key = r,
          this.options = i,
          this.rules = new Ia(Ee({}, i, {
              parent: this
          }));
          for (var o in n)
              this.rules.add(o, n[o]);
          this.rules.process()
      }
      var t = e.prototype;
      return t.getRule = function(n) {
          return this.rules.get(n)
      }
      ,
      t.addRule = function(n, i, o) {
          var l = this.rules.add(n, i, o);
          return l && this.options.jss.plugins.onProcessRule(l),
          l
      }
      ,
      t.replaceRule = function(n, i, o) {
          var l = this.rules.replace(n, i, o);
          return l && this.options.jss.plugins.onProcessRule(l),
          l
      }
      ,
      t.indexOf = function(n) {
          return this.rules.indexOf(n)
      }
      ,
      t.toString = function(n) {
          return this.rules.toString(n)
      }
      ,
      e
  }()
    , M_ = function() {
      function e(r, n, i) {
          this.type = "global",
          this.at = Tr,
          this.isProcessed = !1,
          this.key = r,
          this.options = i;
          var o = r.substr(rc.length);
          this.rule = i.jss.createRule(o, n, Ee({}, i, {
              parent: this
          }))
      }
      var t = e.prototype;
      return t.toString = function(n) {
          return this.rule ? this.rule.toString(n) : ""
      }
      ,
      e
  }()
    , L_ = /\s*,\s*/g;
  function Yg(e, t) {
      for (var r = e.split(L_), n = "", i = 0; i < r.length; i++)
          n += t + " " + r[i].trim(),
          r[i + 1] && (n += ", ");
      return n
  }
  function I_(e, t) {
      var r = e.options
        , n = e.style
        , i = n ? n[Tr] : null;
      if (i) {
          for (var o in i)
              t.addRule(o, i[o], Ee({}, r, {
                  selector: Yg(o, e.selector)
              }));
          delete n[Tr]
      }
  }
  function D_(e, t) {
      var r = e.options
        , n = e.style;
      for (var i in n)
          if (!(i[0] !== "@" || i.substr(0, Tr.length) !== Tr)) {
              var o = Yg(i.substr(Tr.length), e.selector);
              t.addRule(o, n[i], Ee({}, r, {
                  selector: o
              })),
              delete n[i]
          }
  }
  function A_() {
      function e(r, n, i) {
          if (!r)
              return null;
          if (r === Tr)
              return new N_(r,n,i);
          if (r[0] === "@" && r.substr(0, rc.length) === rc)
              return new M_(r,n,i);
          var o = i.parent;
          return o && (o.type === "global" || o.options.parent && o.options.parent.type === "global") && (i.scoped = !1),
          !i.selector && i.scoped === !1 && (i.selector = r),
          null
      }
      function t(r, n) {
          r.type !== "style" || !n || (I_(r, n),
          D_(r, n))
      }
      return {
          onCreateRule: e,
          onProcessRule: t
      }
  }
  var Sl = function(t) {
      return t && typeof t == "object" && !Array.isArray(t)
  }
    , ju = "extendCurrValue" + Date.now();
  function F_(e, t, r, n) {
      var i = typeof e.extend;
      if (i === "string") {
          if (!r)
              return;
          var o = r.getRule(e.extend);
          if (!o || o === t)
              return;
          var l = o.options.parent;
          if (l) {
              var a = l.rules.raw[e.extend];
              Qr(a, t, r, n)
          }
          return
      }
      if (Array.isArray(e.extend)) {
          for (var u = 0; u < e.extend.length; u++) {
              var s = e.extend[u]
                , c = typeof s == "string" ? Ee({}, e, {
                  extend: s
              }) : e.extend[u];
              Qr(c, t, r, n)
          }
          return
      }
      for (var f in e.extend) {
          if (f === "extend") {
              Qr(e.extend.extend, t, r, n);
              continue
          }
          if (Sl(e.extend[f])) {
              f in n || (n[f] = {}),
              Qr(e.extend[f], t, r, n[f]);
              continue
          }
          n[f] = e.extend[f]
      }
  }
  function z_(e, t, r, n) {
      for (var i in e)
          if (i !== "extend") {
              if (Sl(n[i]) && Sl(e[i])) {
                  Qr(e[i], t, r, n[i]);
                  continue
              }
              if (Sl(e[i])) {
                  n[i] = Qr(e[i], t, r);
                  continue
              }
              n[i] = e[i]
          }
  }
  function Qr(e, t, r, n) {
      return n === void 0 && (n = {}),
      F_(e, t, r, n),
      z_(e, t, r, n),
      n
  }
  function U_() {
      function e(r, n, i) {
          return "extend"in r ? Qr(r, n, i) : r
      }
      function t(r, n, i) {
          if (n !== "extend")
              return r;
          if (r == null || r === !1) {
              for (var o in i[ju])
                  i.prop(o, null);
              return i[ju] = null,
              null
          }
          if (typeof r == "object") {
              for (var l in r)
                  i.prop(l, r[l]);
              i[ju] = r
          }
          return null
      }
      return {
          onProcessStyle: e,
          onChangeValue: t
      }
  }
  var Yp = /\s*,\s*/g
    , B_ = /&/g
    , H_ = /\$([\w-]+)/g;
  function V_() {
      function e(i, o) {
          return function(l, a) {
              var u = i.getRule(a) || o && o.getRule(a);
              return u ? u.selector : a
          }
      }
      function t(i, o) {
          for (var l = o.split(Yp), a = i.split(Yp), u = "", s = 0; s < l.length; s++)
              for (var c = l[s], f = 0; f < a.length; f++) {
                  var d = a[f];
                  u && (u += ", "),
                  u += d.indexOf("&") !== -1 ? d.replace(B_, c) : c + " " + d
              }
          return u
      }
      function r(i, o, l) {
          if (l)
              return Ee({}, l, {
                  index: l.index + 1
              });
          var a = i.options.nestingLevel;
          a = a === void 0 ? 1 : a + 1;
          var u = Ee({}, i.options, {
              nestingLevel: a,
              index: o.indexOf(i) + 1
          });
          return delete u.name,
          u
      }
      function n(i, o, l) {
          if (o.type !== "style")
              return i;
          var a = o, u = a.options.parent, s, c;
          for (var f in i) {
              var d = f.indexOf("&") !== -1
                , y = f[0] === "@";
              if (!(!d && !y)) {
                  if (s = r(a, u, s),
                  d) {
                      var g = t(f, a.selector);
                      c || (c = e(u, l)),
                      g = g.replace(H_, c);
                      var m = a.key + "-" + f;
                      "replaceRule"in u ? u.replaceRule(m, i[f], Ee({}, s, {
                          selector: g
                      })) : u.addRule(m, i[f], Ee({}, s, {
                          selector: g
                      }))
                  } else
                      y && u.addRule(f, {}, s).addRule(a.key, i[f], {
                          selector: a.selector
                      });
                  delete i[f]
              }
          }
          return i
      }
      return {
          onProcessStyle: n
      }
  }
  function nc(e, t) {
      if (!t)
          return !0;
      if (Array.isArray(t)) {
          for (var r = 0; r < t.length; r++) {
              var n = nc(e, t[r]);
              if (!n)
                  return !1
          }
          return !0
      }
      if (t.indexOf(" ") > -1)
          return nc(e, t.split(" "));
      var i = e.options.parent;
      if (t[0] === "$") {
          var o = i.getRule(t.substr(1));
          return !o || o === e ? !1 : (i.classes[e.key] += " " + i.classes[o.key],
          !0)
      }
      return i.classes[e.key] += " " + t,
      !0
  }
  function W_() {
      function e(t, r) {
          return "composes"in t && (nc(r, t.composes),
          delete t.composes),
          t
      }
      return {
          onProcessStyle: e
      }
  }
  var K_ = /[A-Z]/g
    , G_ = /^ms-/
    , bu = {};
  function Q_(e) {
      return "-" + e.toLowerCase()
  }
  function qg(e) {
      if (bu.hasOwnProperty(e))
          return bu[e];
      var t = e.replace(K_, Q_);
      return bu[e] = G_.test(t) ? "-" + t : t
  }
  function Zl(e) {
      var t = {};
      for (var r in e) {
          var n = r.indexOf("--") === 0 ? r : qg(r);
          t[n] = e[r]
      }
      return e.fallbacks && (Array.isArray(e.fallbacks) ? t.fallbacks = e.fallbacks.map(Zl) : t.fallbacks = Zl(e.fallbacks)),
      t
  }
  function Y_() {
      function e(r) {
          if (Array.isArray(r)) {
              for (var n = 0; n < r.length; n++)
                  r[n] = Zl(r[n]);
              return r
          }
          return Zl(r)
      }
      function t(r, n, i) {
          if (n.indexOf("--") === 0)
              return r;
          var o = qg(n);
          return n === o ? r : (i.prop(o, r),
          null)
      }
      return {
          onProcessStyle: e,
          onChangeValue: t
      }
  }
  var _ = kf && CSS ? CSS.px : "px"
    , il = kf && CSS ? CSS.ms : "ms"
    , hn = kf && CSS ? CSS.percent : "%"
    , q_ = {
      "animation-delay": il,
      "animation-duration": il,
      "background-position": _,
      "background-position-x": _,
      "background-position-y": _,
      "background-size": _,
      border: _,
      "border-bottom": _,
      "border-bottom-left-radius": _,
      "border-bottom-right-radius": _,
      "border-bottom-width": _,
      "border-left": _,
      "border-left-width": _,
      "border-radius": _,
      "border-right": _,
      "border-right-width": _,
      "border-top": _,
      "border-top-left-radius": _,
      "border-top-right-radius": _,
      "border-top-width": _,
      "border-width": _,
      "border-block": _,
      "border-block-end": _,
      "border-block-end-width": _,
      "border-block-start": _,
      "border-block-start-width": _,
      "border-block-width": _,
      "border-inline": _,
      "border-inline-end": _,
      "border-inline-end-width": _,
      "border-inline-start": _,
      "border-inline-start-width": _,
      "border-inline-width": _,
      "border-start-start-radius": _,
      "border-start-end-radius": _,
      "border-end-start-radius": _,
      "border-end-end-radius": _,
      margin: _,
      "margin-bottom": _,
      "margin-left": _,
      "margin-right": _,
      "margin-top": _,
      "margin-block": _,
      "margin-block-end": _,
      "margin-block-start": _,
      "margin-inline": _,
      "margin-inline-end": _,
      "margin-inline-start": _,
      padding: _,
      "padding-bottom": _,
      "padding-left": _,
      "padding-right": _,
      "padding-top": _,
      "padding-block": _,
      "padding-block-end": _,
      "padding-block-start": _,
      "padding-inline": _,
      "padding-inline-end": _,
      "padding-inline-start": _,
      "mask-position-x": _,
      "mask-position-y": _,
      "mask-size": _,
      height: _,
      width: _,
      "min-height": _,
      "max-height": _,
      "min-width": _,
      "max-width": _,
      bottom: _,
      left: _,
      top: _,
      right: _,
      inset: _,
      "inset-block": _,
      "inset-block-end": _,
      "inset-block-start": _,
      "inset-inline": _,
      "inset-inline-end": _,
      "inset-inline-start": _,
      "box-shadow": _,
      "text-shadow": _,
      "column-gap": _,
      "column-rule": _,
      "column-rule-width": _,
      "column-width": _,
      "font-size": _,
      "font-size-delta": _,
      "letter-spacing": _,
      "text-decoration-thickness": _,
      "text-indent": _,
      "text-stroke": _,
      "text-stroke-width": _,
      "word-spacing": _,
      motion: _,
      "motion-offset": _,
      outline: _,
      "outline-offset": _,
      "outline-width": _,
      perspective: _,
      "perspective-origin-x": hn,
      "perspective-origin-y": hn,
      "transform-origin": hn,
      "transform-origin-x": hn,
      "transform-origin-y": hn,
      "transform-origin-z": hn,
      "transition-delay": il,
      "transition-duration": il,
      "vertical-align": _,
      "flex-basis": _,
      "shape-margin": _,
      size: _,
      gap: _,
      grid: _,
      "grid-gap": _,
      "row-gap": _,
      "grid-row-gap": _,
      "grid-column-gap": _,
      "grid-template-rows": _,
      "grid-template-columns": _,
      "grid-auto-rows": _,
      "grid-auto-columns": _,
      "box-shadow-x": _,
      "box-shadow-y": _,
      "box-shadow-blur": _,
      "box-shadow-spread": _,
      "font-line-height": _,
      "text-shadow-x": _,
      "text-shadow-y": _,
      "text-shadow-blur": _
  };
  function Xg(e) {
      var t = /(-[a-z])/g
        , r = function(l) {
          return l[1].toUpperCase()
      }
        , n = {};
      for (var i in e)
          n[i] = e[i],
          n[i.replace(t, r)] = e[i];
      return n
  }
  var X_ = Xg(q_);
  function Wi(e, t, r) {
      if (t == null)
          return t;
      if (Array.isArray(t))
          for (var n = 0; n < t.length; n++)
              t[n] = Wi(e, t[n], r);
      else if (typeof t == "object")
          if (e === "fallbacks")
              for (var i in t)
                  t[i] = Wi(i, t[i], r);
          else
              for (var o in t)
                  t[o] = Wi(e + "-" + o, t[o], r);
      else if (typeof t == "number" && isNaN(t) === !1) {
          var l = r[e] || X_[e];
          return l && !(t === 0 && l === _) ? typeof l == "function" ? l(t).toString() : "" + t + l : t.toString()
      }
      return t
  }
  function J_(e) {
      e === void 0 && (e = {});
      var t = Xg(e);
      function r(i, o) {
          if (o.type !== "style")
              return i;
          for (var l in i)
              i[l] = Wi(l, i[l], t);
          return i
      }
      function n(i, o) {
          return Wi(o, i, t)
      }
      return {
          onProcessStyle: r,
          onChangeValue: n
      }
  }
  var Z_ = {
      "background-size": !0,
      "background-position": !0,
      border: !0,
      "border-bottom": !0,
      "border-left": !0,
      "border-top": !0,
      "border-right": !0,
      "border-radius": !0,
      "border-image": !0,
      "border-width": !0,
      "border-style": !0,
      "border-color": !0,
      "box-shadow": !0,
      flex: !0,
      margin: !0,
      padding: !0,
      outline: !0,
      "transform-origin": !0,
      transform: !0,
      transition: !0
  }
    , eR = {
      position: !0,
      size: !0
  }
    , ol = {
      padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
      },
      margin: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
      },
      background: {
          attachment: null,
          color: null,
          image: null,
          position: null,
          repeat: null
      },
      border: {
          width: null,
          style: null,
          color: null
      },
      "border-top": {
          width: null,
          style: null,
          color: null
      },
      "border-right": {
          width: null,
          style: null,
          color: null
      },
      "border-bottom": {
          width: null,
          style: null,
          color: null
      },
      "border-left": {
          width: null,
          style: null,
          color: null
      },
      outline: {
          width: null,
          style: null,
          color: null
      },
      "list-style": {
          type: null,
          position: null,
          image: null
      },
      transition: {
          property: null,
          duration: null,
          "timing-function": null,
          timingFunction: null,
          delay: null
      },
      animation: {
          name: null,
          duration: null,
          "timing-function": null,
          timingFunction: null,
          delay: null,
          "iteration-count": null,
          iterationCount: null,
          direction: null,
          "fill-mode": null,
          fillMode: null,
          "play-state": null,
          playState: null
      },
      "box-shadow": {
          x: 0,
          y: 0,
          blur: 0,
          spread: 0,
          color: null,
          inset: null
      },
      "text-shadow": {
          x: 0,
          y: 0,
          blur: null,
          color: null
      }
  }
    , Nu = {
      border: {
          radius: "border-radius",
          image: "border-image",
          width: "border-width",
          style: "border-style",
          color: "border-color"
      },
      "border-bottom": {
          width: "border-bottom-width",
          style: "border-bottom-style",
          color: "border-bottom-color"
      },
      "border-top": {
          width: "border-top-width",
          style: "border-top-style",
          color: "border-top-color"
      },
      "border-left": {
          width: "border-left-width",
          style: "border-left-style",
          color: "border-left-color"
      },
      "border-right": {
          width: "border-right-width",
          style: "border-right-style",
          color: "border-right-color"
      },
      background: {
          size: "background-size",
          image: "background-image"
      },
      font: {
          style: "font-style",
          variant: "font-variant",
          weight: "font-weight",
          stretch: "font-stretch",
          size: "font-size",
          family: "font-family",
          lineHeight: "line-height",
          "line-height": "line-height"
      },
      flex: {
          grow: "flex-grow",
          basis: "flex-basis",
          direction: "flex-direction",
          wrap: "flex-wrap",
          flow: "flex-flow",
          shrink: "flex-shrink"
      },
      align: {
          self: "align-self",
          items: "align-items",
          content: "align-content"
      },
      grid: {
          "template-columns": "grid-template-columns",
          templateColumns: "grid-template-columns",
          "template-rows": "grid-template-rows",
          templateRows: "grid-template-rows",
          "template-areas": "grid-template-areas",
          templateAreas: "grid-template-areas",
          template: "grid-template",
          "auto-columns": "grid-auto-columns",
          autoColumns: "grid-auto-columns",
          "auto-rows": "grid-auto-rows",
          autoRows: "grid-auto-rows",
          "auto-flow": "grid-auto-flow",
          autoFlow: "grid-auto-flow",
          row: "grid-row",
          column: "grid-column",
          "row-start": "grid-row-start",
          rowStart: "grid-row-start",
          "row-end": "grid-row-end",
          rowEnd: "grid-row-end",
          "column-start": "grid-column-start",
          columnStart: "grid-column-start",
          "column-end": "grid-column-end",
          columnEnd: "grid-column-end",
          area: "grid-area",
          gap: "grid-gap",
          "row-gap": "grid-row-gap",
          rowGap: "grid-row-gap",
          "column-gap": "grid-column-gap",
          columnGap: "grid-column-gap"
      }
  };
  function tR(e, t, r) {
      return e.map(function(n) {
          return Zg(n, t, r, !1, !0)
      })
  }
  function Jg(e, t, r, n) {
      return r[t] == null ? e : e.length === 0 ? [] : Array.isArray(e[0]) ? Jg(e[0], t, r, n) : typeof e[0] == "object" ? tR(e, t, n) : [e]
  }
  function Zg(e, t, r, n, i) {
      if (!(ol[t] || Nu[t]))
          return [];
      var o = [];
      if (Nu[t] && (e = rR(e, r, Nu[t], n)),
      Object.keys(e).length)
          for (var l in ol[t]) {
              if (e[l]) {
                  Array.isArray(e[l]) ? o.push(eR[l] === null ? e[l] : e[l].join(" ")) : o.push(e[l]);
                  continue
              }
              ol[t][l] != null && o.push(ol[t][l])
          }
      return !o.length || i ? o : [o]
  }
  function rR(e, t, r, n) {
      for (var i in r) {
          var o = r[i];
          if (typeof e[i] < "u" && (n || !t.prop(o))) {
              var l, a = ho((l = {},
              l[o] = e[i],
              l), t)[o];
              n ? t.style.fallbacks[o] = a : t.style[o] = a
          }
          delete e[i]
      }
      return e
  }
  function ho(e, t, r) {
      for (var n in e) {
          var i = e[n];
          if (Array.isArray(i)) {
              if (!Array.isArray(i[0])) {
                  if (n === "fallbacks") {
                      for (var o = 0; o < e.fallbacks.length; o++)
                          e.fallbacks[o] = ho(e.fallbacks[o], t, !0);
                      continue
                  }
                  e[n] = Jg(i, n, Z_, t),
                  e[n].length || delete e[n]
              }
          } else if (typeof i == "object") {
              if (n === "fallbacks") {
                  e.fallbacks = ho(e.fallbacks, t, !0);
                  continue
              }
              e[n] = Zg(i, n, t, r),
              e[n].length || delete e[n]
          } else
              e[n] === "" && delete e[n]
      }
      return e
  }
  function nR() {
      function e(t, r) {
          if (!t || r.type !== "style")
              return t;
          if (Array.isArray(t)) {
              for (var n = 0; n < t.length; n++)
                  t[n] = ho(t[n], r);
              return t
          }
          return ho(t, r)
      }
      return {
          onProcessStyle: e
      }
  }
  function ic(e, t) {
      (t == null || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++)
          n[r] = e[r];
      return n
  }
  function iR(e) {
      if (Array.isArray(e))
          return ic(e)
  }
  function oR(e) {
      if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
          return Array.from(e)
  }
  function lR(e, t) {
      if (e) {
          if (typeof e == "string")
              return ic(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          if (r === "Object" && e.constructor && (r = e.constructor.name),
          r === "Map" || r === "Set")
              return Array.from(e);
          if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
              return ic(e, t)
      }
  }
  function aR() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
  }
  function uR(e) {
      return iR(e) || oR(e) || lR(e) || aR()
  }
  var bi = ""
    , oc = ""
    , ey = ""
    , ty = ""
    , sR = Xn && "ontouchstart"in document.documentElement;
  if (Xn) {
      var Mu = {
          Moz: "-moz-",
          ms: "-ms-",
          O: "-o-",
          Webkit: "-webkit-"
      }
        , cR = document.createElement("p")
        , Lu = cR.style
        , fR = "Transform";
      for (var Iu in Mu)
          if (Iu + fR in Lu) {
              bi = Iu,
              oc = Mu[Iu];
              break
          }
      bi === "Webkit" && "msHyphens"in Lu && (bi = "ms",
      oc = Mu.ms,
      ty = "edge"),
      bi === "Webkit" && "-apple-trailing-word"in Lu && (ey = "apple")
  }
  var Q = {
      js: bi,
      css: oc,
      vendor: ey,
      browser: ty,
      isTouch: sR
  };
  function dR(e) {
      return e[1] === "-" || Q.js === "ms" ? e : "@" + Q.css + "keyframes" + e.substr(10)
  }
  var pR = {
      noPrefill: ["appearance"],
      supportedProperty: function(t) {
          return t !== "appearance" ? !1 : Q.js === "ms" ? "-webkit-" + t : Q.css + t
      }
  }
    , hR = {
      noPrefill: ["color-adjust"],
      supportedProperty: function(t) {
          return t !== "color-adjust" ? !1 : Q.js === "Webkit" ? Q.css + "print-" + t : t
      }
  }
    , vR = /[-\s]+(.)?/g;
  function mR(e, t) {
      return t ? t.toUpperCase() : ""
  }
  function $f(e) {
      return e.replace(vR, mR)
  }
  function Or(e) {
      return $f("-" + e)
  }
  var gR = {
      noPrefill: ["mask"],
      supportedProperty: function(t, r) {
          if (!/^mask/.test(t))
              return !1;
          if (Q.js === "Webkit") {
              var n = "mask-image";
              if ($f(n)in r)
                  return t;
              if (Q.js + Or(n)in r)
                  return Q.css + t
          }
          return t
      }
  }, yR = {
      noPrefill: ["text-orientation"],
      supportedProperty: function(t) {
          return t !== "text-orientation" ? !1 : Q.vendor === "apple" && !Q.isTouch ? Q.css + t : t
      }
  }, wR = {
      noPrefill: ["transform"],
      supportedProperty: function(t, r, n) {
          return t !== "transform" ? !1 : n.transform ? t : Q.css + t
      }
  }, SR = {
      noPrefill: ["transition"],
      supportedProperty: function(t, r, n) {
          return t !== "transition" ? !1 : n.transition ? t : Q.css + t
      }
  }, xR = {
      noPrefill: ["writing-mode"],
      supportedProperty: function(t) {
          return t !== "writing-mode" ? !1 : Q.js === "Webkit" || Q.js === "ms" && Q.browser !== "edge" ? Q.css + t : t
      }
  }, ER = {
      noPrefill: ["user-select"],
      supportedProperty: function(t) {
          return t !== "user-select" ? !1 : Q.js === "Moz" || Q.js === "ms" || Q.vendor === "apple" ? Q.css + t : t
      }
  }, PR = {
      supportedProperty: function(t, r) {
          if (!/^break-/.test(t))
              return !1;
          if (Q.js === "Webkit") {
              var n = "WebkitColumn" + Or(t);
              return n in r ? Q.css + "column-" + t : !1
          }
          if (Q.js === "Moz") {
              var i = "page" + Or(t);
              return i in r ? "page-" + t : !1
          }
          return !1
      }
  }, CR = {
      supportedProperty: function(t, r) {
          if (!/^(border|margin|padding)-inline/.test(t))
              return !1;
          if (Q.js === "Moz")
              return t;
          var n = t.replace("-inline", "");
          return Q.js + Or(n)in r ? Q.css + n : !1
      }
  }, _R = {
      supportedProperty: function(t, r) {
          return $f(t)in r ? t : !1
      }
  }, RR = {
      supportedProperty: function(t, r) {
          var n = Or(t);
          return t[0] === "-" || t[0] === "-" && t[1] === "-" ? t : Q.js + n in r ? Q.css + t : Q.js !== "Webkit" && "Webkit" + n in r ? "-webkit-" + t : !1
      }
  }, TR = {
      supportedProperty: function(t) {
          return t.substring(0, 11) !== "scroll-snap" ? !1 : Q.js === "ms" ? "" + Q.css + t : t
      }
  }, kR = {
      supportedProperty: function(t) {
          return t !== "overscroll-behavior" ? !1 : Q.js === "ms" ? Q.css + "scroll-chaining" : t
      }
  }, $R = {
      "flex-grow": "flex-positive",
      "flex-shrink": "flex-negative",
      "flex-basis": "flex-preferred-size",
      "justify-content": "flex-pack",
      order: "flex-order",
      "align-items": "flex-align",
      "align-content": "flex-line-pack"
  }, OR = {
      supportedProperty: function(t, r) {
          var n = $R[t];
          return n && Q.js + Or(n)in r ? Q.css + n : !1
      }
  }, ry = {
      flex: "box-flex",
      "flex-grow": "box-flex",
      "flex-direction": ["box-orient", "box-direction"],
      order: "box-ordinal-group",
      "align-items": "box-align",
      "flex-flow": ["box-orient", "box-direction"],
      "justify-content": "box-pack"
  }, jR = Object.keys(ry), bR = function(t) {
      return Q.css + t
  }, NR = {
      supportedProperty: function(t, r, n) {
          var i = n.multiple;
          if (jR.indexOf(t) > -1) {
              var o = ry[t];
              if (!Array.isArray(o))
                  return Q.js + Or(o)in r ? Q.css + o : !1;
              if (!i)
                  return !1;
              for (var l = 0; l < o.length; l++)
                  if (!(Q.js + Or(o[0])in r))
                      return !1;
              return o.map(bR)
          }
          return !1
      }
  }, ny = [pR, hR, gR, yR, wR, SR, xR, ER, PR, CR, _R, RR, TR, kR, OR, NR], qp = ny.filter(function(e) {
      return e.supportedProperty
  }).map(function(e) {
      return e.supportedProperty
  }), MR = ny.filter(function(e) {
      return e.noPrefill
  }).reduce(function(e, t) {
      return e.push.apply(e, uR(t.noPrefill)),
      e
  }, []), Ni, Ur = {};
  if (Xn) {
      Ni = document.createElement("p");
      var Du = window.getComputedStyle(document.documentElement, "");
      for (var Au in Du)
          isNaN(Au) || (Ur[Du[Au]] = Du[Au]);
      MR.forEach(function(e) {
          return delete Ur[e]
      })
  }
  function lc(e, t) {
      if (t === void 0 && (t = {}),
      !Ni)
          return e;
      if (Ur[e] != null)
          return Ur[e];
      (e === "transition" || e === "transform") && (t[e] = e in Ni.style);
      for (var r = 0; r < qp.length && (Ur[e] = qp[r](e, Ni.style, t),
      !Ur[e]); r++)
          ;
      try {
          Ni.style[e] = ""
      } catch {
          return !1
      }
      return Ur[e]
  }
  var vn = {}, LR = {
      transition: 1,
      "transition-property": 1,
      "-webkit-transition": 1,
      "-webkit-transition-property": 1
  }, IR = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g, cr;
  function DR(e, t, r) {
      if (t === "var")
          return "var";
      if (t === "all")
          return "all";
      if (r === "all")
          return ", all";
      var n = t ? lc(t) : ", " + lc(r);
      return n || t || r
  }
  Xn && (cr = document.createElement("p"));
  function Xp(e, t) {
      var r = t;
      if (!cr || e === "content")
          return t;
      if (typeof r != "string" || !isNaN(parseInt(r, 10)))
          return r;
      var n = e + r;
      if (vn[n] != null)
          return vn[n];
      try {
          cr.style[e] = r
      } catch {
          return vn[n] = !1,
          !1
      }
      if (LR[e])
          r = r.replace(IR, DR);
      else if (cr.style[e] === "" && (r = Q.css + r,
      r === "-ms-flex" && (cr.style[e] = "-ms-flexbox"),
      cr.style[e] = r,
      cr.style[e] === ""))
          return vn[n] = !1,
          !1;
      return cr.style[e] = "",
      vn[n] = r,
      vn[n]
  }
  function AR() {
      function e(i) {
          if (i.type === "keyframes") {
              var o = i;
              o.at = dR(o.at)
          }
      }
      function t(i) {
          for (var o in i) {
              var l = i[o];
              if (o === "fallbacks" && Array.isArray(l)) {
                  i[o] = l.map(t);
                  continue
              }
              var a = !1
                , u = lc(o);
              u && u !== o && (a = !0);
              var s = !1
                , c = Xp(u, Zr(l));
              c && c !== l && (s = !0),
              (a || s) && (a && delete i[o],
              i[u || o] = c || l)
          }
          return i
      }
      function r(i, o) {
          return o.type !== "style" ? i : t(i)
      }
      function n(i, o) {
          return Xp(o, Zr(i)) || i
      }
      return {
          onProcessRule: e,
          onProcessStyle: r,
          onChangeValue: n
      }
  }
  function FR() {
      var e = function(r, n) {
          return r.length === n.length ? r > n ? 1 : -1 : r.length - n.length
      };
      return {
          onProcessStyle: function(r, n) {
              if (n.type !== "style")
                  return r;
              for (var i = {}, o = Object.keys(r).sort(e), l = 0; l < o.length; l++)
                  i[o[l]] = r[o[l]];
              return i
          }
      }
  }
  var zR = function(t) {
      return t === void 0 && (t = {}),
      {
          plugins: [R_(), k_(t.observable), b_(), A_(), U_(), V_(), W_(), Y_(), J_(t.defaultUnit), nR(), AR(), FR()]
      }
  }
    , UR = Number.MIN_SAFE_INTEGER || -1e9
    , BR = function() {
      return UR++
  }
    , HR = w.createContext({
      classNamePrefix: "",
      disableStylesGeneration: !1,
      isSSR: !Xn
  })
    , Jp = new Map
    , Of = function(t, r) {
      var n = t.managers;
      if (n)
          return n[r] || (n[r] = new Kp),
          n[r];
      var i = Jp.get(r);
      return i || (i = new Kp,
      Jp.set(r, i)),
      i
  }
    , Zp = function(t) {
      var r = t.sheet
        , n = t.context
        , i = t.index
        , o = t.theme;
      if (r) {
          var l = Of(n, i);
          l.manage(o),
          n.registry && n.registry.add(r)
      }
  }
    , VR = function(t) {
      if (t.sheet) {
          var r = Of(t.context, t.index);
          r.unmanage(t.theme)
      }
  }
    , WR = Kg(zR())
    , iy = new WeakMap
    , oy = function(t) {
      return iy.get(t)
  }
    , KR = function(t, r) {
      iy.set(t, r)
  }
    , GR = function(t) {
      var r = t.styles;
      return typeof r != "function" ? r : r(t.theme)
  };
  function QR(e, t) {
      var r;
      e.context.id && e.context.id.minify != null && (r = e.context.id.minify);
      var n = e.context.classNamePrefix || "";
      e.name && !r && (n += e.name.replace(/\s/g, "-") + "-");
      var i = "";
      return e.name && (i = e.name + ", "),
      i += typeof e.styles == "function" ? "Themed" : "Unthemed",
      Ee({}, e.sheetOptions, {
          index: e.index,
          meta: i,
          classNamePrefix: n,
          link: t,
          generateId: e.sheetOptions && e.sheetOptions.generateId ? e.sheetOptions.generateId : e.context.generateId
      })
  }
  var YR = function(t) {
      if (!t.context.disableStylesGeneration) {
          var r = Of(t.context, t.index)
            , n = r.get(t.theme);
          if (n)
              return n;
          var i = t.context.jss || WR
            , o = GR(t)
            , l = Gg(o)
            , a = i.createStyleSheet(o, QR(t, l !== null));
          return KR(a, {
              dynamicStyles: l,
              styles: o
          }),
          r.add(t.theme, a),
          a
      }
  }
    , qR = function(t, r) {
      for (var n in r)
          t.deleteRule(r[n])
  }
    , XR = function(t, r, n) {
      for (var i in n)
          r.updateOne(n[i], t)
  }
    , JR = function(t, r) {
      var n = oy(t);
      if (n) {
          var i = {};
          for (var o in n.dynamicStyles)
              for (var l = t.rules.index.length, a = t.addRule(o, n.dynamicStyles[o]), u = l; u < t.rules.index.length; u++) {
                  var s = t.rules.index[u];
                  t.updateOne(s, r),
                  i[a === s ? o : s.key] = s
              }
          return i
      }
  }
    , ZR = function(t, r) {
      if (!r)
          return t.classes;
      var n = oy(t);
      if (!n)
          return t.classes;
      var i = {};
      for (var o in n.styles)
          i[o] = t.classes[o],
          o in r && (i[o] += " " + t.classes[r[o].key]);
      return i
  };
  function eh(e) {
      return e ? w.useEffect : U.useInsertionEffect || w.useLayoutEffect
  }
  var Fu = {}
    , eT = function(t, r) {
      r === void 0 && (r = {});
      var n = r
        , i = n.index
        , o = i === void 0 ? BR() : i
        , l = n.theming
        , a = n.name
        , u = Mg(n, ["index", "theming", "name"])
        , s = l && l.context || zg
        , c = function(y) {
          return typeof t == "function" && (y || w.useContext(s)) || Fu
      }
        , f = {};
      return function(y) {
          var g = w.useRef(!0)
            , m = w.useContext(HR)
            , E = c(y && y.theme)
            , h = w.useMemo(function() {
              var k = YR({
                  context: m,
                  styles: t,
                  name: a,
                  theme: E,
                  index: o,
                  sheetOptions: u
              });
              return k && m.isSSR && Zp({
                  index: o,
                  context: m,
                  sheet: k,
                  theme: E
              }),
              [k, k ? JR(k, y) : null]
          }, [m, E])
            , p = h[0]
            , v = h[1];
          eh(m.isSSR)(function() {
              p && v && !g.current && XR(y, p, v)
          }, [y]),
          eh(m.isSSR)(function() {
              return p && Zp({
                  index: o,
                  context: m,
                  sheet: p,
                  theme: E
              }),
              function() {
                  p && (VR({
                      index: o,
                      context: m,
                      sheet: p,
                      theme: E
                  }),
                  v && qR(p, v))
              }
          }, [p]);
          var C = w.useMemo(function() {
              return p && v ? ZR(p, v) : f
          }, [p, v]);
          return w.useDebugValue(C),
          w.useDebugValue(E === Fu ? "No theme" : E),
          w.useEffect(function() {
              g.current = !1
          }),
          C
      }
  }
    , tT = Ng;
  function rT(e) {
      var t = tT(e)
        , r = t % 1;
      return t === t ? r ? t - r : t : 0
  }
  var nT = rT;
  function iT(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
          i[r] = t(e[r], r, e);
      return i
  }
  var oT = iT
    , lT = Array.isArray
    , Da = lT
    , th = Pa
    , aT = oT
    , uT = Da
    , sT = jg
    , cT = 1 / 0
    , rh = th ? th.prototype : void 0
    , nh = rh ? rh.toString : void 0;
  function ly(e) {
      if (typeof e == "string")
          return e;
      if (uT(e))
          return aT(e, ly) + "";
      if (sT(e))
          return nh ? nh.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -cT ? "-0" : t
  }
  var fT = ly
    , dT = fT;
  function pT(e) {
      return e == null ? "" : dT(e)
  }
  var hT = pT
    , vT = Vt
    , mT = nT
    , gT = bg
    , ih = hT
    , yT = vT.isFinite
    , wT = Math.min;
  function ST(e) {
      var t = Math[e];
      return function(r, n) {
          if (r = gT(r),
          n = n == null ? 0 : wT(mT(n), 292),
          n && yT(r)) {
              var i = (ih(r) + "e").split("e")
                , o = t(i[0] + "e" + (+i[1] + n));
              return i = (ih(o) + "e").split("e"),
              +(i[0] + "e" + (+i[1] - n))
          }
          return t(r)
      }
  }
  var xT = ST
    , ET = xT
    , PT = ET("round")
    , CT = PT;
  const Ri = Wn(CT);
  function _T() {
      this.__data__ = [],
      this.size = 0
  }
  var RT = _T
    , TT = Sf;
  function kT(e, t) {
      for (var r = e.length; r--; )
          if (TT(e[r][0], t))
              return r;
      return -1
  }
  var Aa = kT
    , $T = Aa
    , OT = Array.prototype
    , jT = OT.splice;
  function bT(e) {
      var t = this.__data__
        , r = $T(t, e);
      if (r < 0)
          return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : jT.call(t, r, 1),
      --this.size,
      !0
  }
  var NT = bT
    , MT = Aa;
  function LT(e) {
      var t = this.__data__
        , r = MT(t, e);
      return r < 0 ? void 0 : t[r][1]
  }
  var IT = LT
    , DT = Aa;
  function AT(e) {
      return DT(this.__data__, e) > -1
  }
  var FT = AT
    , zT = Aa;
  function UT(e, t) {
      var r = this.__data__
        , n = zT(r, e);
      return n < 0 ? (++this.size,
      r.push([e, t])) : r[n][1] = t,
      this
  }
  var BT = UT
    , HT = RT
    , VT = NT
    , WT = IT
    , KT = FT
    , GT = BT;
  function Zn(e) {
      var t = -1
        , r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1])
      }
  }
  Zn.prototype.clear = HT;
  Zn.prototype.delete = VT;
  Zn.prototype.get = WT;
  Zn.prototype.has = KT;
  Zn.prototype.set = GT;
  var Fa = Zn
    , QT = Fa;
  function YT() {
      this.__data__ = new QT,
      this.size = 0
  }
  var qT = YT;
  function XT(e) {
      var t = this.__data__
        , r = t.delete(e);
      return this.size = t.size,
      r
  }
  var JT = XT;
  function ZT(e) {
      return this.__data__.get(e)
  }
  var e2 = ZT;
  function t2(e) {
      return this.__data__.has(e)
  }
  var r2 = t2
    , n2 = Vt
    , i2 = n2["__core-js_shared__"]
    , o2 = i2
    , zu = o2
    , oh = function() {
      var e = /[^.]+$/.exec(zu && zu.keys && zu.keys.IE_PROTO || "");
      return e ? "Symbol(src)_1." + e : ""
  }();
  function l2(e) {
      return !!oh && oh in e
  }
  var a2 = l2
    , u2 = Function.prototype
    , s2 = u2.toString;
  function c2(e) {
      if (e != null) {
          try {
              return s2.call(e)
          } catch {}
          try {
              return e + ""
          } catch {}
      }
      return ""
  }
  var ay = c2
    , f2 = Tg
    , d2 = a2
    , p2 = Ca
    , h2 = ay
    , v2 = /[\\^$.*+?()[\]{}|]/g
    , m2 = /^\[object .+?Constructor\]$/
    , g2 = Function.prototype
    , y2 = Object.prototype
    , w2 = g2.toString
    , S2 = y2.hasOwnProperty
    , x2 = RegExp("^" + w2.call(S2).replace(v2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function E2(e) {
      if (!p2(e) || d2(e))
          return !1;
      var t = f2(e) ? x2 : m2;
      return t.test(h2(e))
  }
  var P2 = E2;
  function C2(e, t) {
      return e == null ? void 0 : e[t]
  }
  var _2 = C2
    , R2 = P2
    , T2 = _2;
  function k2(e, t) {
      var r = T2(e, t);
      return R2(r) ? r : void 0
  }
  var ei = k2
    , $2 = ei
    , O2 = Vt
    , j2 = $2(O2, "Map")
    , jf = j2
    , b2 = ei
    , N2 = b2(Object, "create")
    , za = N2
    , lh = za;
  function M2() {
      this.__data__ = lh ? lh(null) : {},
      this.size = 0
  }
  var L2 = M2;
  function I2(e) {
      var t = this.has(e) && delete this.__data__[e];
      return this.size -= t ? 1 : 0,
      t
  }
  var D2 = I2
    , A2 = za
    , F2 = "__lodash_hash_undefined__"
    , z2 = Object.prototype
    , U2 = z2.hasOwnProperty;
  function B2(e) {
      var t = this.__data__;
      if (A2) {
          var r = t[e];
          return r === F2 ? void 0 : r
      }
      return U2.call(t, e) ? t[e] : void 0
  }
  var H2 = B2
    , V2 = za
    , W2 = Object.prototype
    , K2 = W2.hasOwnProperty;
  function G2(e) {
      var t = this.__data__;
      return V2 ? t[e] !== void 0 : K2.call(t, e)
  }
  var Q2 = G2
    , Y2 = za
    , q2 = "__lodash_hash_undefined__";
  function X2(e, t) {
      var r = this.__data__;
      return this.size += this.has(e) ? 0 : 1,
      r[e] = Y2 && t === void 0 ? q2 : t,
      this
  }
  var J2 = X2
    , Z2 = L2
    , ek = D2
    , tk = H2
    , rk = Q2
    , nk = J2;
  function ti(e) {
      var t = -1
        , r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1])
      }
  }
  ti.prototype.clear = Z2;
  ti.prototype.delete = ek;
  ti.prototype.get = tk;
  ti.prototype.has = rk;
  ti.prototype.set = nk;
  var ik = ti
    , ah = ik
    , ok = Fa
    , lk = jf;
  function ak() {
      this.size = 0,
      this.__data__ = {
          hash: new ah,
          map: new (lk || ok),
          string: new ah
      }
  }
  var uk = ak;
  function sk(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
  }
  var ck = sk
    , fk = ck;
  function dk(e, t) {
      var r = e.__data__;
      return fk(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
  }
  var Ua = dk
    , pk = Ua;
  function hk(e) {
      var t = pk(this, e).delete(e);
      return this.size -= t ? 1 : 0,
      t
  }
  var vk = hk
    , mk = Ua;
  function gk(e) {
      return mk(this, e).get(e)
  }
  var yk = gk
    , wk = Ua;
  function Sk(e) {
      return wk(this, e).has(e)
  }
  var xk = Sk
    , Ek = Ua;
  function Pk(e, t) {
      var r = Ek(this, e)
        , n = r.size;
      return r.set(e, t),
      this.size += r.size == n ? 0 : 1,
      this
  }
  var Ck = Pk
    , _k = uk
    , Rk = vk
    , Tk = yk
    , kk = xk
    , $k = Ck;
  function ri(e) {
      var t = -1
        , r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1])
      }
  }
  ri.prototype.clear = _k;
  ri.prototype.delete = Rk;
  ri.prototype.get = Tk;
  ri.prototype.has = kk;
  ri.prototype.set = $k;
  var uy = ri
    , Ok = Fa
    , jk = jf
    , bk = uy
    , Nk = 200;
  function Mk(e, t) {
      var r = this.__data__;
      if (r instanceof Ok) {
          var n = r.__data__;
          if (!jk || n.length < Nk - 1)
              return n.push([e, t]),
              this.size = ++r.size,
              this;
          r = this.__data__ = new bk(n)
      }
      return r.set(e, t),
      this.size = r.size,
      this
  }
  var Lk = Mk
    , Ik = Fa
    , Dk = qT
    , Ak = JT
    , Fk = e2
    , zk = r2
    , Uk = Lk;
  function ni(e) {
      var t = this.__data__ = new Ik(e);
      this.size = t.size
  }
  ni.prototype.clear = Dk;
  ni.prototype.delete = Ak;
  ni.prototype.get = Fk;
  ni.prototype.has = zk;
  ni.prototype.set = Uk;
  var Bk = ni
    , Hk = "__lodash_hash_undefined__";
  function Vk(e) {
      return this.__data__.set(e, Hk),
      this
  }
  var Wk = Vk;
  function Kk(e) {
      return this.__data__.has(e)
  }
  var Gk = Kk
    , Qk = uy
    , Yk = Wk
    , qk = Gk;
  function ea(e) {
      var t = -1
        , r = e == null ? 0 : e.length;
      for (this.__data__ = new Qk; ++t < r; )
          this.add(e[t])
  }
  ea.prototype.add = ea.prototype.push = Yk;
  ea.prototype.has = qk;
  var Xk = ea;
  function Jk(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
          if (t(e[r], r, e))
              return !0;
      return !1
  }
  var Zk = Jk;
  function e$(e, t) {
      return e.has(t)
  }
  var t$ = e$
    , r$ = Xk
    , n$ = Zk
    , i$ = t$
    , o$ = 1
    , l$ = 2;
  function a$(e, t, r, n, i, o) {
      var l = r & o$
        , a = e.length
        , u = t.length;
      if (a != u && !(l && u > a))
          return !1;
      var s = o.get(e)
        , c = o.get(t);
      if (s && c)
          return s == t && c == e;
      var f = -1
        , d = !0
        , y = r & l$ ? new r$ : void 0;
      for (o.set(e, t),
      o.set(t, e); ++f < a; ) {
          var g = e[f]
            , m = t[f];
          if (n)
              var E = l ? n(m, g, f, t, e, o) : n(g, m, f, e, t, o);
          if (E !== void 0) {
              if (E)
                  continue;
              d = !1;
              break
          }
          if (y) {
              if (!n$(t, function(h, p) {
                  if (!i$(y, p) && (g === h || i(g, h, r, n, o)))
                      return y.push(p)
              })) {
                  d = !1;
                  break
              }
          } else if (!(g === m || i(g, m, r, n, o))) {
              d = !1;
              break
          }
      }
      return o.delete(e),
      o.delete(t),
      d
  }
  var sy = a$
    , u$ = Vt
    , s$ = u$.Uint8Array
    , c$ = s$;
  function f$(e) {
      var t = -1
        , r = Array(e.size);
      return e.forEach(function(n, i) {
          r[++t] = [i, n]
      }),
      r
  }
  var d$ = f$;
  function p$(e) {
      var t = -1
        , r = Array(e.size);
      return e.forEach(function(n) {
          r[++t] = n
      }),
      r
  }
  var h$ = p$
    , uh = Pa
    , sh = c$
    , v$ = Sf
    , m$ = sy
    , g$ = d$
    , y$ = h$
    , w$ = 1
    , S$ = 2
    , x$ = "[object Boolean]"
    , E$ = "[object Date]"
    , P$ = "[object Error]"
    , C$ = "[object Map]"
    , _$ = "[object Number]"
    , R$ = "[object RegExp]"
    , T$ = "[object Set]"
    , k$ = "[object String]"
    , $$ = "[object Symbol]"
    , O$ = "[object ArrayBuffer]"
    , j$ = "[object DataView]"
    , ch = uh ? uh.prototype : void 0
    , Uu = ch ? ch.valueOf : void 0;
  function b$(e, t, r, n, i, o, l) {
      switch (r) {
      case j$:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
          e = e.buffer,
          t = t.buffer;
      case O$:
          return !(e.byteLength != t.byteLength || !o(new sh(e), new sh(t)));
      case x$:
      case E$:
      case _$:
          return v$(+e, +t);
      case P$:
          return e.name == t.name && e.message == t.message;
      case R$:
      case k$:
          return e == t + "";
      case C$:
          var a = g$;
      case T$:
          var u = n & w$;
          if (a || (a = y$),
          e.size != t.size && !u)
              return !1;
          var s = l.get(e);
          if (s)
              return s == t;
          n |= S$,
          l.set(e, t);
          var c = m$(a(e), a(t), n, i, o, l);
          return l.delete(e),
          c;
      case $$:
          if (Uu)
              return Uu.call(e) == Uu.call(t)
      }
      return !1
  }
  var N$ = b$;
  function M$(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; )
          e[i + r] = t[r];
      return e
  }
  var L$ = M$
    , I$ = L$
    , D$ = Da;
  function A$(e, t, r) {
      var n = t(e);
      return D$(e) ? n : I$(n, r(e))
  }
  var F$ = A$;
  function z$(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
          var l = e[r];
          t(l, r, e) && (o[i++] = l)
      }
      return o
  }
  var U$ = z$;
  function B$() {
      return []
  }
  var H$ = B$
    , V$ = U$
    , W$ = H$
    , K$ = Object.prototype
    , G$ = K$.propertyIsEnumerable
    , fh = Object.getOwnPropertySymbols
    , Q$ = fh ? function(e) {
      return e == null ? [] : (e = Object(e),
      V$(fh(e), function(t) {
          return G$.call(e, t)
      }))
  }
  : W$
    , Y$ = Q$;
  function q$(e, t) {
      for (var r = -1, n = Array(e); ++r < e; )
          n[r] = t(r);
      return n
  }
  var X$ = q$
    , J$ = ko
    , Z$ = $o
    , eO = "[object Arguments]";
  function tO(e) {
      return Z$(e) && J$(e) == eO
  }
  var rO = tO
    , dh = rO
    , nO = $o
    , cy = Object.prototype
    , iO = cy.hasOwnProperty
    , oO = cy.propertyIsEnumerable
    , lO = dh(function() {
      return arguments
  }()) ? dh : function(e) {
      return nO(e) && iO.call(e, "callee") && !oO.call(e, "callee")
  }
    , aO = lO
    , ta = {
      exports: {}
  };
  function uO() {
      return !1
  }
  var sO = uO;
  ta.exports;
  (function(e, t) {
      var r = Vt
        , n = sO
        , i = t && !t.nodeType && t
        , o = i && !0 && e && !e.nodeType && e
        , l = o && o.exports === i
        , a = l ? r.Buffer : void 0
        , u = a ? a.isBuffer : void 0
        , s = u || n;
      e.exports = s
  }
  )(ta, ta.exports);
  var fy = ta.exports
    , cO = ko
    , fO = kg
    , dO = $o
    , pO = "[object Arguments]"
    , hO = "[object Array]"
    , vO = "[object Boolean]"
    , mO = "[object Date]"
    , gO = "[object Error]"
    , yO = "[object Function]"
    , wO = "[object Map]"
    , SO = "[object Number]"
    , xO = "[object Object]"
    , EO = "[object RegExp]"
    , PO = "[object Set]"
    , CO = "[object String]"
    , _O = "[object WeakMap]"
    , RO = "[object ArrayBuffer]"
    , TO = "[object DataView]"
    , kO = "[object Float32Array]"
    , $O = "[object Float64Array]"
    , OO = "[object Int8Array]"
    , jO = "[object Int16Array]"
    , bO = "[object Int32Array]"
    , NO = "[object Uint8Array]"
    , MO = "[object Uint8ClampedArray]"
    , LO = "[object Uint16Array]"
    , IO = "[object Uint32Array]"
    , fe = {};
  fe[kO] = fe[$O] = fe[OO] = fe[jO] = fe[bO] = fe[NO] = fe[MO] = fe[LO] = fe[IO] = !0;
  fe[pO] = fe[hO] = fe[RO] = fe[vO] = fe[TO] = fe[mO] = fe[gO] = fe[yO] = fe[wO] = fe[SO] = fe[xO] = fe[EO] = fe[PO] = fe[CO] = fe[_O] = !1;
  function DO(e) {
      return dO(e) && fO(e.length) && !!fe[cO(e)]
  }
  var AO = DO;
  function FO(e) {
      return function(t) {
          return e(t)
      }
  }
  var zO = FO
    , ra = {
      exports: {}
  };
  ra.exports;
  (function(e, t) {
      var r = _g
        , n = t && !t.nodeType && t
        , i = n && !0 && e && !e.nodeType && e
        , o = i && i.exports === n
        , l = o && r.process
        , a = function() {
          try {
              var u = i && i.require && i.require("util").types;
              return u || l && l.binding && l.binding("util")
          } catch {}
      }();
      e.exports = a
  }
  )(ra, ra.exports);
  var UO = ra.exports
    , BO = AO
    , HO = zO
    , ph = UO
    , hh = ph && ph.isTypedArray
    , VO = hh ? HO(hh) : BO
    , dy = VO
    , WO = X$
    , KO = aO
    , GO = Da
    , QO = fy
    , YO = Og
    , qO = dy
    , XO = Object.prototype
    , JO = XO.hasOwnProperty;
  function ZO(e, t) {
      var r = GO(e)
        , n = !r && KO(e)
        , i = !r && !n && QO(e)
        , o = !r && !n && !i && qO(e)
        , l = r || n || i || o
        , a = l ? WO(e.length, String) : []
        , u = a.length;
      for (var s in e)
          (t || JO.call(e, s)) && !(l && (s == "length" || i && (s == "offset" || s == "parent") || o && (s == "buffer" || s == "byteLength" || s == "byteOffset") || YO(s, u))) && a.push(s);
      return a
  }
  var ej = ZO
    , tj = Object.prototype;
  function rj(e) {
      var t = e && e.constructor
        , r = typeof t == "function" && t.prototype || tj;
      return e === r
  }
  var nj = rj;
  function ij(e, t) {
      return function(r) {
          return e(t(r))
      }
  }
  var oj = ij
    , lj = oj
    , aj = lj(Object.keys, Object)
    , uj = aj
    , sj = nj
    , cj = uj
    , fj = Object.prototype
    , dj = fj.hasOwnProperty;
  function pj(e) {
      if (!sj(e))
          return cj(e);
      var t = [];
      for (var r in Object(e))
          dj.call(e, r) && r != "constructor" && t.push(r);
      return t
  }
  var hj = pj
    , vj = ej
    , mj = hj
    , gj = $g;
  function yj(e) {
      return gj(e) ? vj(e) : mj(e)
  }
  var wj = yj
    , Sj = F$
    , xj = Y$
    , Ej = wj;
  function Pj(e) {
      return Sj(e, Ej, xj)
  }
  var Cj = Pj
    , vh = Cj
    , _j = 1
    , Rj = Object.prototype
    , Tj = Rj.hasOwnProperty;
  function kj(e, t, r, n, i, o) {
      var l = r & _j
        , a = vh(e)
        , u = a.length
        , s = vh(t)
        , c = s.length;
      if (u != c && !l)
          return !1;
      for (var f = u; f--; ) {
          var d = a[f];
          if (!(l ? d in t : Tj.call(t, d)))
              return !1
      }
      var y = o.get(e)
        , g = o.get(t);
      if (y && g)
          return y == t && g == e;
      var m = !0;
      o.set(e, t),
      o.set(t, e);
      for (var E = l; ++f < u; ) {
          d = a[f];
          var h = e[d]
            , p = t[d];
          if (n)
              var v = l ? n(p, h, d, t, e, o) : n(h, p, d, e, t, o);
          if (!(v === void 0 ? h === p || i(h, p, r, n, o) : v)) {
              m = !1;
              break
          }
          E || (E = d == "constructor")
      }
      if (m && !E) {
          var C = e.constructor
            , k = t.constructor;
          C != k && "constructor"in e && "constructor"in t && !(typeof C == "function" && C instanceof C && typeof k == "function" && k instanceof k) && (m = !1)
      }
      return o.delete(e),
      o.delete(t),
      m
  }
  var $j = kj
    , Oj = ei
    , jj = Vt
    , bj = Oj(jj, "DataView")
    , Nj = bj
    , Mj = ei
    , Lj = Vt
    , Ij = Mj(Lj, "Promise")
    , Dj = Ij
    , Aj = ei
    , Fj = Vt
    , zj = Aj(Fj, "Set")
    , Uj = zj
    , Bj = ei
    , Hj = Vt
    , Vj = Bj(Hj, "WeakMap")
    , Wj = Vj
    , ac = Nj
    , uc = jf
    , sc = Dj
    , cc = Uj
    , fc = Wj
    , py = ko
    , ii = ay
    , mh = "[object Map]"
    , Kj = "[object Object]"
    , gh = "[object Promise]"
    , yh = "[object Set]"
    , wh = "[object WeakMap]"
    , Sh = "[object DataView]"
    , Gj = ii(ac)
    , Qj = ii(uc)
    , Yj = ii(sc)
    , qj = ii(cc)
    , Xj = ii(fc)
    , Fr = py;
  (ac && Fr(new ac(new ArrayBuffer(1))) != Sh || uc && Fr(new uc) != mh || sc && Fr(sc.resolve()) != gh || cc && Fr(new cc) != yh || fc && Fr(new fc) != wh) && (Fr = function(e) {
      var t = py(e)
        , r = t == Kj ? e.constructor : void 0
        , n = r ? ii(r) : "";
      if (n)
          switch (n) {
          case Gj:
              return Sh;
          case Qj:
              return mh;
          case Yj:
              return gh;
          case qj:
              return yh;
          case Xj:
              return wh
          }
      return t
  }
  );
  var Jj = Fr
    , Bu = Bk
    , Zj = sy
    , eb = N$
    , tb = $j
    , xh = Jj
    , Eh = Da
    , Ph = fy
    , rb = dy
    , nb = 1
    , Ch = "[object Arguments]"
    , _h = "[object Array]"
    , ll = "[object Object]"
    , ib = Object.prototype
    , Rh = ib.hasOwnProperty;
  function ob(e, t, r, n, i, o) {
      var l = Eh(e)
        , a = Eh(t)
        , u = l ? _h : xh(e)
        , s = a ? _h : xh(t);
      u = u == Ch ? ll : u,
      s = s == Ch ? ll : s;
      var c = u == ll
        , f = s == ll
        , d = u == s;
      if (d && Ph(e)) {
          if (!Ph(t))
              return !1;
          l = !0,
          c = !1
      }
      if (d && !c)
          return o || (o = new Bu),
          l || rb(e) ? Zj(e, t, r, n, i, o) : eb(e, t, u, r, n, i, o);
      if (!(r & nb)) {
          var y = c && Rh.call(e, "__wrapped__")
            , g = f && Rh.call(t, "__wrapped__");
          if (y || g) {
              var m = y ? e.value() : e
                , E = g ? t.value() : t;
              return o || (o = new Bu),
              i(m, E, r, n, o)
          }
      }
      return d ? (o || (o = new Bu),
      tb(e, t, r, n, i, o)) : !1
  }
  var lb = ob
    , ab = lb
    , Th = $o;
  function hy(e, t, r, n, i) {
      return e === t ? !0 : e == null || t == null || !Th(e) && !Th(t) ? e !== e && t !== t : ab(e, t, r, n, hy, i)
  }
  var ub = hy
    , sb = ub;
  function cb(e, t) {
      return sb(e, t)
  }
  var fb = cb;
  const db = Wn(fb);
  var Oe = function() {
      return Oe = Object.assign || function(t) {
          for (var r, n = 1, i = arguments.length; n < i; n++) {
              r = arguments[n];
              for (var o in r)
                  Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o])
          }
          return t
      }
      ,
      Oe.apply(this, arguments)
  };
  function pb(e, t) {
      var r = {};
      for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
          for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
              t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
      return r
  }
  var dc = function(e, t, r, n, i) {
      return (e - t) * (i - n) / (r - t) + n
  }
    , vy = function(e, t) {
      var r = e + t;
      return r > 360 ? r - 360 : r
  }
    , my = function() {
      return Math.random() > .5
  }
    , gy = [0, 0, 1]
    , bf = [[1, 1, 0], [1, 0, 1], [0, 1, 1], [1, 0, 0], [0, 1, 0], gy]
    , hb = function(e) {
      return !db(bf[e], gy) && my()
  }
    , kh = 200
    , vb = 800
    , mb = .1
    , gb = .25
    , $h = .5
    , yb = bf.reduce(function(e, t, r) {
      var n;
      return Oe(Oe({}, e), (n = {},
      n["@keyframes rotation-".concat(r)] = {
          "50%": {
              transform: "rotate3d(".concat(t.map(function(i) {
                  return i / 2
              }).join(), ", 180deg)")
          },
          "100%": {
              transform: "rotate3d(".concat(t.join(), ", 360deg)")
          }
      },
      n))
  }, {})
    , wb = function(e, t, r) {
      var n = typeof t == "string" ? t : "".concat(t, "px")
        , i = e.reduce(function(o, l, a) {
          var u, s = dc(Math.abs(vy(l, 90) - 180), 0, 180, -r / 2, r / 2);
          return Oe(Oe({}, o), (u = {},
          u["@keyframes x-axis-".concat(a)] = {
              to: {
                  transform: "translateX(".concat(s, "px)")
              }
          },
          u))
      }, {});
      return Oe({
          "@keyframes y-axis": {
              to: {
                  transform: "translateY(".concat(n, ")")
              }
          }
      }, i)
  }
    , Sb = function(e, t, r, n, i) {
      var o, l = Math.round(Math.random() * (vb - kh) + kh), a = Math.round(Math.random() * (bf.length - 1)), u = t - Math.round(Math.random() * 1e3), s = Math.random() < mb, c = hb(a), f = s ? Ri(Math.random() * gb, 2) : 0, d = f * -1, y = f, g = Ri(Math.abs(dc(Math.abs(vy(e.degree, 90) - 180), 0, 180, -1, 1)), 4), m = Ri(Math.random() * $h, 4), E = Ri(Math.random() * r * (my() ? 1 : -1), 4), h = $h, p = Ri(Math.max(dc(Math.abs(e.degree - 180), 0, 180, r, -r), 0), 4);
      return o = {},
      o["&#confetti-particle-".concat(i)] = {
          animation: "$x-axis-".concat(i, " ").concat(u, "ms forwards cubic-bezier(").concat(f, ", ").concat(d, ", ").concat(y, ", ").concat(g, ")"),
          "& > div": {
              width: c ? n : Math.round(Math.random() * 4) + n / 2,
              height: c ? n : Math.round(Math.random() * 2) + n,
              animation: "$y-axis ".concat(u, "ms forwards cubic-bezier(").concat(m, ", ").concat(E, ", ").concat(h, ", ").concat(p, ")"),
              "&:after": Oe({
                  backgroundColor: e.color,
                  animation: "$rotation-".concat(a, " ").concat(l, "ms infinite linear")
              }, c ? {
                  borderRadius: "50%"
              } : {})
          }
      },
      o
  }
    , xb = function(e) {
      var t = e.particles
        , r = e.duration
        , n = e.height
        , i = e.width
        , o = e.force
        , l = e.particleSize
        , a = t.reduce(function(u, s, c) {
          return Oe(Oe({}, u), Sb(s, r, o, l, c))
      }, {});
      return eT(Oe(Oe(Oe({}, yb), wb(t.map(function(u) {
          return u.degree
      }), n, i)), {
          container: {
              width: 0,
              height: 0,
              position: "relative"
          },
          screen: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              overflow: "hidden",
              pointerEvents: "none"
          },
          particle: Oe(Oe({}, a), {
              "& > div": {
                  position: "absolute",
                  left: 0,
                  top: 0,
                  "&:after": {
                      content: "''",
                      display: "block",
                      width: "100%",
                      height: "100%"
                  }
              }
          })
      }), {
          name: "confetti-explosion"
      })
  }
    , Eb = .5
    , Pb = 12
    , Cb = "120vh"
    , _b = 1e3
    , Rb = 100
    , Tb = 2200
    , kb = ["#FFC700", "#FF0000", "#2E3191", "#41BBC7"]
    , $b = function(e, t) {
      var r = 360 / e;
      return gC(e).map(function(n) {
          return {
              color: t[n % t.length],
              degree: r * n
          }
      })
  };
  function yy(e) {
      var t = e.particleCount
        , r = t === void 0 ? Rb : t
        , n = e.duration
        , i = n === void 0 ? Tb : n
        , o = e.colors
        , l = o === void 0 ? kb : o
        , a = e.particleSize
        , u = a === void 0 ? Pb : a
        , s = e.force
        , c = s === void 0 ? Eb : s
        , f = e.height
        , d = f === void 0 ? Cb : f
        , y = e.width
        , g = y === void 0 ? _b : y
        , m = e.zIndex
        , E = e.onComplete
        , h = pb(e, ["particleCount", "duration", "colors", "particleSize", "force", "height", "width", "zIndex", "onComplete"])
        , p = w.useState()
        , v = p[0]
        , C = p[1]
        , k = $b(r, l)
        , b = xb({
          particles: k,
          duration: i,
          particleSize: u,
          force: c,
          width: g,
          height: d
      })()
        , S = w.useCallback(function(O) {
          if (O) {
              var L = O.getBoundingClientRect()
                , M = L.top
                , V = L.left;
              C({
                  top: M,
                  left: V
              })
          }
      }, []);
      return w.useEffect(function() {
          if (typeof E == "function") {
              var O = setTimeout(E, i);
              return function() {
                  return clearTimeout(O)
              }
          }
      }, [i, E]),
      T.jsx("div", Oe({
          ref: S,
          className: b.container
      }, h, {
          children: v && So.createPortal(T.jsx("div", Oe({
              className: b.screen
          }, m ? {
              style: {
                  zIndex: m
              }
          } : null, {
              children: T.jsx("div", Oe({
                  style: {
                      position: "absolute",
                      top: v.top,
                      left: v.left
                  }
              }, {
                  children: k.map(function(O, L) {
                      return T.jsx("div", Oe({
                          id: "confetti-particle-".concat(L),
                          className: b.particle
                      }, {
                          children: T.jsx("div", {})
                      }), O.degree)
                  })
              }))
          })), document.body)
      }))
  }
  function Ob({Title: e, ImageURL: t, Price: r, Description: n, Id: i}) {
      const o = Co()
        , l = ()=>{
          o.removeItem(i)
      }
      ;
      return T.jsxs("div", {
          className: "flex justify-start rounded-lg mb-2 border p-4",
          children: [T.jsx("img", {
              className: "rounded-md w-[9vw] h-[9vw] object-scale-down",
              src: t
          }), T.jsxs("div", {
              className: "overflow-hidden pl-2",
              children: [T.jsx("div", {
                  className: "font-semibold",
                  children: e
              }), T.jsx("div", {
                  className: "text-lg font-semibold ",
                  children: T.jsxs("span", {
                      className: "font-bold",
                      children: ["$", r]
                  })
              }), T.jsxs("div", {
                  className: "text-sm mt-2",
                  children: [n.substring(0, 130), "..."]
              }), T.jsx("div", {
                  onClick: l,
                  className: "text-sm w-full flex justify-start underline text-blue-500 cursor-pointer",
                  children: "Remove"
              })]
          })]
      })
  }
  function jb() {
      const e = Co();
      let[t,r] = U.useState(!1)
        , [n,i] = U.useState(!1);
      const o = ()=>{
          r(!t)
      }
        , l = ()=>{
          i(!0),
          setTimeout(()=>{
              e.emptyCart(),
              window.location.href = "/"
          }
          , 1e3)
      }
      ;
      return T.jsxs("div", {
          id: "checkoutPage",
          className: "mt-4 max-w-[1100px] mx-auto",
          children: [T.jsx("div", {
              className: "text-2xl font-bold mt-4 mb-4",
              children: "Checkout"
          }), T.jsxs("div", {
              className: "relative flex items-baseline gap-4 justify-between mx-auto w-full",
              children: [T.jsx("div", {
                  id: "Items",
                  className: "bg-white rounded-lg w-full",
                  children: e.items.map(a=>T.jsx(Ob, {
                      Title: a.name,
                      Description: a.description,
                      ImageURL: a.imageUrl,
                      Price: a.price,
                      Id: a.id
                  }))
              }), T.jsxs("div", {
                  id: "PlaceOrder",
                  className: "relative -top-[6px] w-[35%] border rounded-lg",
                  children: [T.jsxs("div", {
                      className: "p-4",
                      children: [T.jsxs("div", {
                          className: "flex items-baseline justify-between text-sm mb-1",
                          children: [T.jsxs("div", {
                              children: ["Items ", e.totalUniqueItems]
                          }), T.jsxs("div", {
                              children: ["$", e.cartTotal]
                          })]
                      }), T.jsxs("div", {
                          className: "flex items-center justify-between mb-4 text-sm",
                          children: [T.jsx("div", {
                              children: "Shipping:"
                          }), T.jsx("div", {
                              children: "Free"
                          })]
                      }), T.jsx("div", {
                          className: "border-t"
                      }), T.jsxs("div", {
                          className: "flex items-center justify-between my-4",
                          children: [T.jsx("div", {
                              className: "font-semibold",
                              children: "Order total"
                          }), T.jsxs("div", {
                              className: "text-2xl font-semibold",
                              children: ["$", e.cartTotal]
                          })]
                      }), T.jsx("div", {
                          className: "border border-gray-500 p-2 rounded-sm",
                          id: "card-element"
                      }), T.jsx("p", {
                          id: "card-error",
                          role: "alert",
                          className: "text-red-700 text-center font-semibold relative top-2"
                      }), T.jsx("button", {
                          onClick: o,
                          className: "mt-4 bg-blue-600 text-lg w-full text-white font-semibold p-3 rounded-full",
                          children: T.jsx("div", {
                              children: "Confirm and pay"
                          })
                      })]
                  }), T.jsx("div", {
                      className: "flex items-center p-4 justify-center gap-2 border-t",
                      children: T.jsx("div", {
                          className: " font-light mb-2 mt-2",
                          children: "NO MONEY BACK GUARANTEE"
                      })
                  })]
              })]
          }), T.jsx(_p, {
              appear: !0,
              show: t,
              as: w.Fragment,
              children: T.jsxs(NE, {
                  as: "div",
                  className: "relative z-10",
                  onClose: o,
                  children: [T.jsx(_p.Child, {
                      as: w.Fragment,
                      enter: "ease-out duration-300",
                      enterFrom: "opacity-0",
                      enterTo: "opacity-100",
                      leave: "ease-in duration-200",
                      leaveFrom: "opacity-100",
                      leaveTo: "opacity-0",
                      children: T.jsx("div", {
                          className: "fixed inset-0 bg-black/25"
                      })
                  }), T.jsx("div", {
                      className: "fixed inset-0 overflow-y-auto",
                      children: T.jsxs("div", {
                          className: "flex min-h-full items-center justify-center p-4 text-center",
                          onClick: l,
                          children: [T.jsx("img", {
                              src: "confirm.png"
                          }), n && T.jsx(yy, {
                              particleCount: 500
                          })]
                      })
                  })]
              })
          })]
      })
  }
  const wy = [{
      id: "001",
      name: "bullish cap",
      description: "best cap fur chad gujs whu bullish njce projacts",
      imageUrl: "/products/bullish.png",
      price: 20
  }, {
      id: "002",
      name: "red anti crip bandana",
      description: ' give your crazy trading and sniping powers, nothing is promes tho',
      imageUrl: "/products/bandenaidk.png",
      price: 25
  }, {
      id: "003",
      name: "degen bok",
      description: "grail evary ful time jub degen",
      imageUrl: "/products/degenbook.png",
      price: 9.99
  }, {
      id: "004",
      name: "the gwak gwak 2000",
      description: "allows unbeaten movement, 3 hands are needed to operate, limited time offer ",
      imageUrl: "/products/controller.png",
      price: 69
  }, {
      id: "005",
      name: "Alex's Id",
      description: "Don't ask who or where alex is now, this card is one of a kind, price is very firm",
      imageUrl: "/products/pooralex.png",
      price: 9999
  }, {
      id: "007",
      name: "official GTA 6 Preorder",
      description: "you can do everything you did in gta 5 but your a female elon musk this time, yeah, we. just. did. THAT      ",
      imageUrl: "/products/gta6.png",
      price: 150
  }, {
      id: "008",
      name: "krypto postor",
      description: "de bost postor fur your ruum, your mammy like thys one",
      imageUrl: "/products/poster.png",
      price: 10
  }, {
      id: "009",
      name: "raydium tecket",
      description: "instent 100% bondimg corve on pamp,fan",
      imageUrl: "/products/ticket.png",
      price: 1
  }, {
      id: "010",
      name: "book of pumpfluencers",
      description: "legend $BOPI",
      imageUrl: "/products/pumpfluencer.png",
      price: 69420
  }];
  function bb({Title: e, Description: t, ImageURL: r, Price: n}) {
      const i = Co()
        , [o,l] = U.useState(!1)
        , a = ()=>{
          l(!0),
          i.addItem(wy.find(u=>u.name == e), 1)
      }
      ;
      return T.jsxs("a", {
          className: "max-w-xl p-1.5 border border-gray-50 hover:border-gray-200 hover:shadow-xl bg-gray-100 rounded mx-auto",
          children: [T.jsx("img", {
              className: "rounded w-full h-[15vh] object-scale-down",
              src: r
          }), T.jsxs("div", {
              className: "pt-2 px-1",
              children: [T.jsx("div", {
                  className: "font-semibold text-lg",
                  children: e
              }), T.jsx("div", {
                  className: "font-medium text-gray-700",
                  children: t
              }), T.jsxs("div", {
                  className: "font-extrabold",
                  children: ["$", n]
              }), T.jsxs("button", {
                  onClick: a,
                  children: [o && T.jsx(yy, {}), T.jsx("img", {
                      src: "helpmeplz.png"
                  })]
              })]
          })]
      })
  }
  
  
  function Nb() {
      return Co(),
      T.jsxs("div", {
          className: "max-w-[1200px] mx-auto p-5",
          children: [T.jsx("img", {
              src: "discounty.png"
          }), T.jsx("div", {
              className: "text-2xl font-bold mt-4 mb-6 px-4",
              children: "Products"
          }), T.jsx("div", {
              className: "grid grid-cols-1 gap-4 md:grid-cols-4",
              children: wy.map(e=>T.jsx(bb, {
                  Title: e.name,
                  Description: e.description,
                  Price: e.price,
                  ImageURL: e.imageUrl
              }))
          })]
      })
  }
  const Mb = xS([{
      path: "/",
      element: T.jsx(ZS, {}),
      children: [{
          path: "",
          element: T.jsx(Nb, {})
      }, {
          path: "/cart",
          element: T.jsx(jb, {})
      }]
  }]);
  Hu.createRoot(document.getElementById("root")).render(T.jsx(U.StrictMode, {
      children: T.jsx(OS, {
          router: Mb
      })
  }))
}
);

export default Lb();
