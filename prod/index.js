!(function(e) {
   var t = {};
   function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
   }
   (n.m = e),
      (n.c = t),
      (n.d = function(e, t, r) {
         n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function(e) {
         'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function(e, t) {
         if ((1 & t && (e = n(e)), 8 & t)) return e;
         if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
         var r = Object.create(null);
         if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
            for (var o in e)
               n.d(
                  r,
                  o,
                  function(t) {
                     return e[t];
                  }.bind(null, o)
               );
         return r;
      }),
      (n.n = function(e) {
         var t =
            e && e.__esModule
               ? function() {
                    return e.default;
                 }
               : function() {
                    return e;
                 };
         return n.d(t, 'a', t), t;
      }),
      (n.o = function(e, t) {
         return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 0));
})([
   function(e, t, n) {
      'use strict';
      var r =
         (this && this.__importDefault) ||
         function(e) {
            return e && e.__esModule ? e : { default: e };
         };
      Object.defineProperty(t, '__esModule', { value: !0 });
      const o = r(n(1)).default(),
         u = process.env.PORT || 3e3,
         s = process.env.PRODUCTION_URL;
      o.get('/', (e, t) => t.send('Hello World!')),
         o.use((e, t, n, r) => {
            const { status: o = 500, message: u } = e;
            n.status(o).json({ error: { message: u, unControl: !0 }, success: null });
         }),
         o.listen(u, () => console.log('APP is listening on port ' + s));
   },
   function(e, t) {
      e.exports = require('express');
   }
]);
