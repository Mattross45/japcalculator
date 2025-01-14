!(function (e, t) { for (const n in t)e[n] = t[n]; }(exports, (function (e) { const t = {}; function n(r) { if (t[r]) return t[r].exports; const o = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports; } return n.m = e, n.c = t, n.d = function (e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }); }, n.r = function (e) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }); }, n.t = function (e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && typeof e === 'object' && e && e.__esModule) return e; const r = Object.create(null); if (n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && typeof e !== 'string') for (const o in e)n.d(r, o, ((t) => e[t]).bind(null, o)); return r; }, n.n = function (e) { const t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return n.d(t, 'a', t), t; }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, n.p = '', n(n.s = 16); }([function (e, t) { e.exports = require('stream'); }, function (e, t) { e.exports = require('zlib'); }, function (e, t, n) {
  const r = n(6); function o(e, t, n) { Error.call(this), this.name = e, this.message = t, this.description = n; } function i(e) { o.call(this, 'InvalidValue', e); } function a(e, t, n, r) { const i = `${r} function requires ${(function (e, t) { return t === null ? `at least ${e}` : e === null ? `up to ${t}` : e === t ? e : `from ${e} to ${t}`; }(e, t))} argument(s) but ${n} were given`; const a = `For more info, see the docs: https://docs.fauna.com/fauna/current/api/fql/functions/${r.toLowerCase()}`; o.call(this, 'InvalidArity', `${i}\n${a}`), this.min = e, this.max = t, this.actual = n; } function s(e, t) { const n = t.responseContent.errors; const r = n.length === 0 ? '(empty "errors")' : n[0].code; const i = n.length === 0 ? '(empty "errors")' : n[0].description; o.call(this, e, r, i), this.requestResult = t; } function u(e) { s.call(this, 'BadRequest', e); } function c(e) { s.call(this, 'Unauthorized', e); } function l(e) { s.call(this, 'PermissionDenied', e); } function f(e) { s.call(this, 'NotFound', e); } function p(e) { s.call(this, 'MethodNotAllowed', e); } function h(e) { s.call(this, 'InternalError', e); } function m(e) { s.call(this, 'UnavailableError', e); }r.inherits(o, Error), r.inherits(i, o), r.inherits(a, o), r.inherits(s, o), s.prototype.errors = function () { return this.requestResult.responseContent.errors; }, s.raiseForStatusCode = function (e) { const t = e.statusCode; if (t < 200 || t >= 300) switch (t) { case 400: throw new u(e); case 401: throw new c(e); case 403: throw new l(e); case 404: throw new f(e); case 405: throw new p(e); case 500: throw new h(e); case 503: throw new m(e); default: throw new s('UnknownError', e); } }, r.inherits(u, s), r.inherits(c, s), r.inherits(l, s), r.inherits(f, s), r.inherits(p, s), r.inherits(h, s), r.inherits(m, s), e.exports = {
    FaunaHTTPError: s, InvalidValue: i, InvalidArity: a, BadRequest: u, Unauthorized: c, PermissionDenied: l, NotFound: f, MethodNotAllowed: p, InternalError: h, UnavailableError: m,
  };
}, function (e, t, n) {
  const r = n(21); const o = n(11); const i = n(2); const a = n(8); const s = n(6); const u = s && s.inspect && s.inspect.custom; const c = s && s.inspect || JSON.stringify; function l() {} function f(e, t, n) { if (!e) throw new i.InvalidValue('id cannot be null or undefined'); this.value = { id: e }, t && (this.value.collection = t), n && (this.value.database = n); }l.prototype._isFaunaValue = !0, s.inherits(l, a), f.prototype._isFaunaRef = !0, s.inherits(f, l), Object.defineProperty(f.prototype, 'collection', { get() { return this.value.collection; } }), Object.defineProperty(f.prototype, 'class', { get: o((function () { return this.value.collection; }), 'class is deprecated, use collection instead') }), Object.defineProperty(f.prototype, 'database', { get() { return this.value.database; } }), Object.defineProperty(f.prototype, 'id', { get() { return this.value.id; } }), f.prototype.toJSON = function () { return { '@ref': this.value }; }, b(f, (function () {
    const e = {
      collections: 'Collection', databases: 'Database', indexes: 'Index', functions: 'Function', roles: 'Role',
    }; var t = function (n) { if (void 0 === n.collection) { var r = void 0 !== n.database ? n.database.toString() : ''; return `${n.id.charAt(0).toUpperCase() + n.id.slice(1)}(${r})`; } const o = e[n.collection.id]; if (void 0 !== o) { r = void 0 !== n.database ? `, ${n.database.toString()}` : ''; return `${o}("${n.id}"${r})`; } return `Ref(${t(n.collection)}, "${n.id}")`; }; return t(this);
  })), f.prototype.valueOf = function () { return this.value; }, f.prototype.equals = function (e) { return (e instanceof f || s.checkInstanceHasProperty(e, '_isFaunaRef')) && this.id === e.id && (void 0 === this.collection && void 0 === e.collection || this.collection.equals(e.collection)) && (void 0 === this.database && void 0 === e.database || this.database.equals(e.database)); }; const p = {
    COLLECTIONS: new f('collections'), INDEXES: new f('indexes'), DATABASES: new f('databases'), FUNCTIONS: new f('functions'), ROLES: new f('roles'), KEYS: new f('keys'),
  }; function h(e) { this.value = e; } function m(e) { if (e instanceof Date)e = e.toISOString(); else if (e.charAt(e.length - 1) !== 'Z') throw new i.InvalidValue(`Only allowed timezone is 'Z', got: ${e}`); this.value = e; } function d(e) { e instanceof Date && (e = e.toISOString().slice(0, 10)), this.value = e; } function y(e) { if (e instanceof ArrayBuffer) this.value = new Uint8Array(e); else if (typeof e === 'string') this.value = r.toByteArray(e); else { if (!(e instanceof Uint8Array)) throw new i.InvalidValue(`Bytes type expect argument to be either Uint8Array|ArrayBuffer|string, got: ${c(e)}`); this.value = e; } } function w(e) { this.value = e; } function b(e, t) { e.prototype.toString = t, e.prototype.inspect = t, u && (e.prototype[u] = t); }p.fromName = function (e) { switch (e) { case 'collections': return p.COLLECTIONS; case 'indexes': return p.INDEXES; case 'databases': return p.DATABASES; case 'functions': return p.FUNCTIONS; case 'roles': return p.ROLES; case 'keys': return p.KEYS; } return new f(e); }, s.inherits(h, l), b(h, (function () { return a.toString(this.value); })), h.prototype.toJSON = function () { return { '@set': this.value }; }, s.inherits(m, l), Object.defineProperty(m.prototype, 'date', { get() { return new Date(this.value); } }), b(m, (function () { return `Time("${this.value}")`; })), m.prototype.toJSON = function () { return { '@ts': this.value }; }, s.inherits(d, l), Object.defineProperty(d.prototype, 'date', { get() { return new Date(this.value); } }), b(d, (function () { return `Date("${this.value}")`; })), d.prototype.toJSON = function () { return { '@date': this.value }; }, s.inherits(y, l), b(y, (function () { return `Bytes("${r.fromByteArray(this.value)}")`; })), y.prototype.toJSON = function () { return { '@bytes': r.fromByteArray(this.value) }; }, s.inherits(w, l), b(w, (function () { return `Query(${a.toString(this.value)})`; })), w.prototype.toJSON = function () { return { '@query': this.value }; }, e.exports = {
    Value: l, Ref: f, Native: p, SetRef: h, FaunaTime: m, FaunaDate: d, Bytes: y, Query: w,
  };
}, function (e, t) { e.exports = require('http'); }, function (e, t) { e.exports = require('url'); }, function (e, t) { e.exports = require('util'); }, function (e, t, n) {
  const r = n(20); const o = n(11); const i = n(8); const a = n(2); const s = n(3); const u = n(12); const c = n(9); function l(e) { return d.exact(1, arguments, l.name), new i({ var: v(e) }); } var f = function (e) { return d.exact(1, arguments, f.name), new i({ object: x(e) }); }; function p() { switch (d.between(1, 2, arguments, p.name), arguments.length) { case 1: var e = arguments[0]; if (typeof e === 'function') return h(e); if (e instanceof i || c.checkInstanceHasProperty(e, '_isFaunaExpr')) return e; throw new a.InvalidValue('Lambda function takes either a Function or an Expr.'); case 2: var t = arguments[0]; var n = arguments[1]; return m(t, n); } } function h(e) { const t = r(e); switch (t.length) { case 0: throw new a.InvalidValue('Provided Function must take at least 1 argument.'); case 1: return m(t[0], e(l(t[0]))); default: return m(t, e.apply(null, t.map(((e) => l(e))))); } } function m(e, t) { return new i({ lambda: v(e), expr: v(t) }); } function d(e, t, n, r) { if (e !== null && n.length < e || t !== null && n.length > t) throw new a.InvalidArity(e, t, n.length, r); } function y(e, t) { for (const n in t) { const r = t[n]; r !== null && (e[n] = r); } return e; } function w(e) { const t = Array.isArray(e) ? e : Array.prototype.slice.call(e); return e.length === 1 ? e[0] : t; } function b(e) { const t = []; return t.push.apply(t, e), t; } function g(e, t) { return void 0 === e ? t : e; } function v(e) { return d.exact(1, arguments, v.name), e === null ? null : e instanceof i || c.checkInstanceHasProperty(e, '_isFaunaExpr') ? e : typeof e === 'symbol' ? e.toString().replace(/Symbol\((.*)\)/, ((e, t) => t)) : typeof e === 'function' ? p(e) : Array.isArray(e) ? new i(e.map(((e) => v(e)))) : e instanceof Uint8Array || e instanceof ArrayBuffer ? new s.Bytes(e) : typeof e === 'object' ? new i({ object: x(e) }) : e; } function x(e) { if (e !== null) { const t = {}; return Object.keys(e).forEach(((n) => { t[n] = v(e[n]); })), t; } return null; }d.exact = function (e, t, n) { d(e, e, t, n); }, d.max = function (e, t, n) { d(null, e, t, n); }, d.min = function (e, t, n) { d(e, null, t, n); }, d.between = function (e, t, n, r) { d(e, t, n, r); }, e.exports = {
    Ref: function e() { switch (d.between(1, 2, arguments, e.name), arguments.length) { case 1: return new i({ '@ref': v(arguments[0]) }); case 2: return new i({ ref: v(arguments[0]), id: v(arguments[1]) }); } },
    Bytes: function e(t) { return d.exact(1, arguments, e.name), new s.Bytes(t); },
    Abort: function e(t) { return d.exact(1, arguments, e.name), new i({ abort: v(t) }); },
    At: function e(t, n) { return d.exact(2, arguments, e.name), new i({ at: v(t), expr: v(n) }); },
    Let: function e(t, n) { d.exact(2, arguments, e.name); let r = []; if (r = Array.isArray(t) ? t.map(((e) => x(e))) : Object.keys(t).map(((e) => { const n = {}; return n[e] = v(t[e]), n; })), typeof n === 'function') if (Array.isArray(t)) { const o = []; t.forEach(((e) => { Object.keys(e).forEach(((e) => { o.push(l(e)); })); })), n = n.apply(null, o); } else n = n.apply(null, Object.keys(t).map(((e) => l(e)))); return new i({ let: r, in: v(n) }); },
    Var: l,
    If: function e(t, n, r) { return d.exact(3, arguments, e.name), new i({ if: v(t), then: v(n), else: v(r) }); },
    Do: function e() { d.min(1, arguments, e.name); const t = b(arguments); return new i({ do: v(t) }); },
    Object: f,
    Lambda: p,
    Call: function e(t) { d.min(1, arguments, e.name); const n = b(arguments); return n.shift(), new i({ call: v(t), arguments: v(w(n)) }); },
    Query: function e(t) { return d.exact(1, arguments, e.name), new i({ query: v(t) }); },
    Map: function e(t, n) { return d.exact(2, arguments, e.name), new i({ map: v(n), collection: v(t) }); },
    Foreach: function e(t, n) { return d.exact(2, arguments, e.name), new i({ foreach: v(n), collection: v(t) }); },
    Filter: function e(t, n) { return d.exact(2, arguments, e.name), new i({ filter: v(n), collection: v(t) }); },
    Take: function e(t, n) { return d.exact(2, arguments, e.name), new i({ take: v(t), collection: v(n) }); },
    Drop: function e(t, n) { return d.exact(2, arguments, e.name), new i({ drop: v(t), collection: v(n) }); },
    Prepend: function e(t, n) { return d.exact(2, arguments, e.name), new i({ prepend: v(t), collection: v(n) }); },
    Append: function e(t, n) { return d.exact(2, arguments, e.name), new i({ append: v(t), collection: v(n) }); },
    IsEmpty: function e(t) { return d.exact(1, arguments, e.name), new i({ is_empty: v(t) }); },
    IsNonEmpty: function e(t) { return d.exact(1, arguments, e.name), new i({ is_nonempty: v(t) }); },
    IsNumber: function e(t) { return d.exact(1, arguments, e.name), new i({ is_number: v(t) }); },
    IsDouble: function e(t) { return d.exact(1, arguments, e.name), new i({ is_double: v(t) }); },
    IsInteger: function e(t) { return d.exact(1, arguments, e.name), new i({ is_integer: v(t) }); },
    IsBoolean: function e(t) { return d.exact(1, arguments, e.name), new i({ is_boolean: v(t) }); },
    IsNull: function e(t) { return d.exact(1, arguments, e.name), new i({ is_null: v(t) }); },
    IsBytes: function e(t) { return d.exact(1, arguments, e.name), new i({ is_bytes: v(t) }); },
    IsTimestamp: function e(t) { return d.exact(1, arguments, e.name), new i({ is_timestamp: v(t) }); },
    IsDate: function e(t) { return d.exact(1, arguments, e.name), new i({ is_date: v(t) }); },
    IsString: function e(t) { return d.exact(1, arguments, e.name), new i({ is_string: v(t) }); },
    IsArray: function e(t) { return d.exact(1, arguments, e.name), new i({ is_array: v(t) }); },
    IsObject: function e(t) { return d.exact(1, arguments, e.name), new i({ is_object: v(t) }); },
    IsRef: function e(t) { return d.exact(1, arguments, e.name), new i({ is_ref: v(t) }); },
    IsSet: function e(t) { return d.exact(1, arguments, e.name), new i({ is_set: v(t) }); },
    IsDoc: function e(t) { return d.exact(1, arguments, e.name), new i({ is_doc: v(t) }); },
    IsLambda: function e(t) { return d.exact(1, arguments, e.name), new i({ is_lambda: v(t) }); },
    IsCollection: function e(t) { return d.exact(1, arguments, e.name), new i({ is_collection: v(t) }); },
    IsDatabase: function e(t) { return d.exact(1, arguments, e.name), new i({ is_database: v(t) }); },
    IsIndex: function e(t) { return d.exact(1, arguments, e.name), new i({ is_index: v(t) }); },
    IsFunction: function e(t) { return d.exact(1, arguments, e.name), new i({ is_function: v(t) }); },
    IsKey: function e(t) { return d.exact(1, arguments, e.name), new i({ is_key: v(t) }); },
    IsToken: function e(t) { return d.exact(1, arguments, e.name), new i({ is_token: v(t) }); },
    IsCredentials: function e(t) { return d.exact(1, arguments, e.name), new i({ is_credentials: v(t) }); },
    IsRole: function e(t) { return d.exact(1, arguments, e.name), new i({ is_role: v(t) }); },
    Get: function e(t, n) { return d.between(1, 2, arguments, e.name), n = g(n, null), new i(y({ get: v(t) }, { ts: v(n) })); },
    KeyFromSecret: function e(t) { return d.exact(1, arguments, e.name), new i({ key_from_secret: v(t) }); },
    Reduce: function e(t, n, r) { return d.exact(3, arguments, e.name), new i({ reduce: v(t), initial: v(n), collection: v(r) }); },
    Paginate: function e(t, n) { return d.between(1, 2, arguments, e.name), n = g(n, {}), new i(u({ paginate: v(t) }, x(n))); },
    Exists: function e(t, n) { return d.between(1, 2, arguments, e.name), n = g(n, null), new i(y({ exists: v(t) }, { ts: v(n) })); },
    Create: function e(t, n) { return d.between(1, 2, arguments, e.name), new i({ create: v(t), params: v(n) }); },
    Update: function e(t, n) { return d.exact(2, arguments, e.name), new i({ update: v(t), params: v(n) }); },
    Replace: function e(t, n) { return d.exact(2, arguments, e.name), new i({ replace: v(t), params: v(n) }); },
    Delete: function e(t) { return d.exact(1, arguments, e.name), new i({ delete: v(t) }); },
    Insert: function e(t, n, r, o) {
      return d.exact(4, arguments, e.name), new i({
        insert: v(t), ts: v(n), action: v(r), params: v(o),
      });
    },
    Remove: function e(t, n, r) { return d.exact(3, arguments, e.name), new i({ remove: v(t), ts: v(n), action: v(r) }); },
    CreateClass: o((function e(t) { return d.exact(1, arguments, e.name), new i({ create_class: v(t) }); }), 'CreateClass() is deprecated, use CreateCollection() instead'),
    CreateCollection: function e(t) { return d.exact(1, arguments, e.name), new i({ create_collection: v(t) }); },
    CreateDatabase: function e(t) { return d.exact(1, arguments, e.name), new i({ create_database: v(t) }); },
    CreateIndex: function e(t) { return d.exact(1, arguments, e.name), new i({ create_index: v(t) }); },
    CreateKey: function e(t) { return d.exact(1, arguments, e.name), new i({ create_key: v(t) }); },
    CreateFunction: function e(t) { return d.exact(1, arguments, e.name), new i({ create_function: v(t) }); },
    CreateRole: function e(t) { return d.exact(1, arguments, e.name), new i({ create_role: v(t) }); },
    Singleton: function e(t) { return d.exact(1, arguments, e.name), new i({ singleton: v(t) }); },
    Events: function e(t) { return d.exact(1, arguments, e.name), new i({ events: v(t) }); },
    Match: function e(t) { d.min(1, arguments, e.name); const n = b(arguments); return n.shift(), new i({ match: v(t), terms: v(w(n)) }); },
    Union: function e() { return d.min(1, arguments, e.name), new i({ union: v(w(arguments)) }); },
    Merge: function e(t, n, r) { return d.between(2, 3, arguments, e.name), new i(y({ merge: v(t), with: v(n) }, { lambda: v(r) })); },
    Intersection: function e() { return d.min(1, arguments, e.name), new i({ intersection: v(w(arguments)) }); },
    Difference: function e() { return d.min(1, arguments, e.name), new i({ difference: v(w(arguments)) }); },
    Distinct: function e(t) { return d.exact(1, arguments, e.name), new i({ distinct: v(t) }); },
    Join: function e(t, n) { return d.exact(2, arguments, e.name), new i({ join: v(t), with: v(n) }); },
    Range: function e(t, n, r) { return d.exact(3, arguments, e.name), new i({ range: v(t), from: v(n), to: v(r) }); },
    Login: function e(t, n) { return d.exact(2, arguments, e.name), new i({ login: v(t), params: v(n) }); },
    Logout: function e(t) { return d.exact(1, arguments, e.name), new i({ logout: v(t) }); },
    Identify: function e(t, n) { return d.exact(2, arguments, e.name), new i({ identify: v(t), password: v(n) }); },
    Identity: function e() { return d.exact(0, arguments, e.name), new i({ identity: null }); },
    HasIdentity: function e() { return d.exact(0, arguments, e.name), new i({ has_identity: null }); },
    Concat: function e(t, n) { return d.min(1, arguments, e.name), n = g(n, null), new i(y({ concat: v(t) }, { separator: v(n) })); },
    Casefold: function e(t, n) { return d.min(1, arguments, e.name), new i(y({ casefold: v(t) }, { normalizer: v(n) })); },
    ContainsStr: function e(t, n) { return d.exact(2, arguments, e.name), new i({ containsstr: v(t), search: v(n) }); },
    ContainsStrRegex: function e(t, n) { return d.exact(2, arguments, e.name), new i({ containsstrregex: v(t), pattern: v(n) }); },
    StartsWith: function e(t, n) { return d.exact(2, arguments, e.name), new i({ startswith: v(t), search: v(n) }); },
    EndsWith: function e(t, n) { return d.exact(2, arguments, e.name), new i({ endswith: v(t), search: v(n) }); },
    FindStr: function e(t, n, r) { return d.between(2, 3, arguments, e.name), r = g(r, null), new i(y({ findstr: v(t), find: v(n) }, { start: v(r) })); },
    FindStrRegex: function e(t, n, r, o) { return d.between(2, 4, arguments, e.name), r = g(r, null), new i(y({ findstrregex: v(t), pattern: v(n) }, { start: v(r), num_results: v(o) })); },
    Length: function e(t) { return d.exact(1, arguments, e.name), new i({ length: v(t) }); },
    LowerCase: function e(t) { return d.exact(1, arguments, e.name), new i({ lowercase: v(t) }); },
    LTrim: function e(t) { return d.exact(1, arguments, e.name), new i({ ltrim: v(t) }); },
    NGram: function e(t, n, r) { return d.between(1, 3, arguments, e.name), n = g(n, null), r = g(r, null), new i(y({ ngram: v(t) }, { min: v(n), max: v(r) })); },
    Repeat: function e(t, n) { return d.between(1, 2, arguments, e.name), n = g(n, null), new i(y({ repeat: v(t) }, { number: v(n) })); },
    ReplaceStr: function e(t, n, r) { return d.exact(3, arguments, e.name), new i({ replacestr: v(t), find: v(n), replace: v(r) }); },
    ReplaceStrRegex: function e(t, n, r, o) { return d.between(3, 4, arguments, e.name), o = g(o, null), new i(y({ replacestrregex: v(t), pattern: v(n), replace: v(r) }, { first: v(o) })); },
    RegexEscape: function e(t) { return d.exact(1, arguments, e.name), new i({ regexescape: v(t) }); },
    RTrim: function e(t) { return d.exact(1, arguments, e.name), new i({ rtrim: v(t) }); },
    Space: function e(t) { return d.exact(1, arguments, e.name), new i({ space: v(t) }); },
    SubString: function e(t, n, r) { return d.between(1, 3, arguments, e.name), n = g(n, null), r = g(r, null), new i(y({ substring: v(t) }, { start: v(n), length: v(r) })); },
    TitleCase: function e(t) { return d.exact(1, arguments, e.name), new i({ titlecase: v(t) }); },
    Trim: function e(t) { return d.exact(1, arguments, e.name), new i({ trim: v(t) }); },
    UpperCase: function e(t) { return d.exact(1, arguments, e.name), new i({ uppercase: v(t) }); },
    Format: function e(t) { d.min(1, arguments, e.name); const n = b(arguments); return n.shift(), new i({ format: v(t), values: v(w(n)) }); },
    Time: function e(t) { return d.exact(1, arguments, e.name), new i({ time: v(t) }); },
    TimeAdd: function e(t, n, r) { return d.exact(3, arguments, e.name), new i({ time_add: v(t), offset: v(n), unit: v(r) }); },
    TimeSubtract: function e(t, n, r) { return d.exact(3, arguments, e.name), new i({ time_subtract: v(t), offset: v(n), unit: v(r) }); },
    TimeDiff: function e(t, n, r) { return d.exact(3, arguments, e.name), new i({ time_diff: v(t), other: v(n), unit: v(r) }); },
    Epoch: function e(t, n) { return d.exact(2, arguments, e.name), new i({ epoch: v(t), unit: v(n) }); },
    Date: function e(t) { return d.exact(1, arguments, e.name), new i({ date: v(t) }); },
    Now: function e() { return d.exact(0, arguments, e.name), new i({ now: v(null) }); },
    NextId: o((function e() { return d.exact(0, arguments, e.name), new i({ next_id: null }); }), 'NextId() is deprecated, use NewId() instead'),
    NewId: function e() { return d.exact(0, arguments, e.name), new i({ new_id: null }); },
    Database: function e(t, n) { switch (d.between(1, 2, arguments, e.name), arguments.length) { case 1: return new i({ database: v(t) }); case 2: return new i({ database: v(t), scope: v(n) }); } },
    Index: function e(t, n) { switch (d.between(1, 2, arguments, e.name), arguments.length) { case 1: return new i({ index: v(t) }); case 2: return new i({ index: v(t), scope: v(n) }); } },
    Class: o((function e(t, n) { switch (d.between(1, 2, arguments, e.name), arguments.length) { case 1: return new i({ class: v(t) }); case 2: return new i({ class: v(t), scope: v(n) }); } }), 'Class() is deprecated, use Collection() instead'),
    Collection: function e(t, n) { switch (d.between(1, 2, arguments, e.name), arguments.length) { case 1: return new i({ collection: v(t) }); case 2: return new i({ collection: v(t), scope: v(n) }); } },
    Function: function e(t, n) { switch (d.between(1, 2, arguments, e.name), arguments.length) { case 1: return new i({ function: v(t) }); case 2: return new i({ function: v(t), scope: v(n) }); } },
    Role: function e(t, n) { return d.between(1, 2, arguments, e.name), n = g(n, null), new i(y({ role: v(t) }, { scope: v(n) })); },
    Classes: o((function e(t) { return d.max(1, arguments, e.name), t = g(t, null), new i({ classes: v(t) }); }), 'Classes() is deprecated, use Collections() instead'),
    Collections: function e(t) { return d.max(1, arguments, e.name), t = g(t, null), new i({ collections: v(t) }); },
    Databases: function e(t) { return d.max(1, arguments, e.name), t = g(t, null), new i({ databases: v(t) }); },
    Indexes: function e(t) { return d.max(1, arguments, e.name), t = g(t, null), new i({ indexes: v(t) }); },
    Functions: function e(t) { return d.max(1, arguments, e.name), t = g(t, null), new i({ functions: v(t) }); },
    Roles: function e(t) { return d.max(1, arguments, e.name), t = g(t, null), new i({ roles: v(t) }); },
    Keys: function e(t) { return d.max(1, arguments, e.name), t = g(t, null), new i({ keys: v(t) }); },
    Tokens: function e(t) { return d.max(1, arguments, e.name), t = g(t, null), new i({ tokens: v(t) }); },
    Credentials: function e(t) { return d.max(1, arguments, e.name), t = g(t, null), new i({ credentials: v(t) }); },
    Equals: function e() { return d.min(1, arguments, e.name), new i({ equals: v(w(arguments)) }); },
    Contains: o((function e(t, n) { return d.exact(2, arguments, e.name), new i({ contains: v(t), in: v(n) }); }), 'Contains() is deprecated, use ContainsPath() instead'),
    ContainsPath: function e(t, n) { return d.exact(2, arguments, e.name), new i({ contains_path: v(t), in: v(n) }); },
    ContainsField: function e(t, n) { return d.exact(2, arguments, e.name), new i({ contains_field: v(t), in: v(n) }); },
    ContainsValue: function e(t, n) { return d.exact(2, arguments, e.name), new i({ contains_value: v(t), in: v(n) }); },
    Select: function e(t, n, r) { d.between(2, 3, arguments, e.name); const o = { select: v(t), from: v(n) }; return void 0 !== r && (o.default = v(r)), new i(o); },
    SelectAll: o((function e(t, n) { return d.exact(2, arguments, e.name), new i({ select_all: v(t), from: v(n) }); }), 'SelectAll() is deprecated. Avoid use.'),
    Abs: function e(t) { return d.exact(1, arguments, e.name), new i({ abs: v(t) }); },
    Add: function e() { return d.min(1, arguments, e.name), new i({ add: v(w(arguments)) }); },
    BitAnd: function e() { return d.min(1, arguments, e.name), new i({ bitand: v(w(arguments)) }); },
    BitNot: function e(t) { return d.exact(1, arguments, e.name), new i({ bitnot: v(t) }); },
    BitOr: function e() { return d.min(1, arguments, e.name), new i({ bitor: v(w(arguments)) }); },
    BitXor: function e() { return d.min(1, arguments, e.name), new i({ bitxor: v(w(arguments)) }); },
    Ceil: function e(t) { return d.exact(1, arguments, e.name), new i({ ceil: v(t) }); },
    Divide: function e() { return d.min(1, arguments, e.name), new i({ divide: v(w(arguments)) }); },
    Floor: function e(t) { return d.exact(1, arguments, e.name), new i({ floor: v(t) }); },
    Max: function e() { return d.min(1, arguments, e.name), new i({ max: v(w(arguments)) }); },
    Min: function e() { return d.min(1, arguments, e.name), new i({ min: v(w(arguments)) }); },
    Modulo: function e() { return d.min(1, arguments, e.name), new i({ modulo: v(w(arguments)) }); },
    Multiply: function e() { return d.min(1, arguments, e.name), new i({ multiply: v(w(arguments)) }); },
    Round: function e(t, n) { return d.min(1, arguments, e.name), n = g(n, null), new i(y({ round: v(t) }, { precision: v(n) })); },
    Subtract: function e() { return d.min(1, arguments, e.name), new i({ subtract: v(w(arguments)) }); },
    Sign: function e(t) { return d.exact(1, arguments, e.name), new i({ sign: v(t) }); },
    Sqrt: function e(t) { return d.exact(1, arguments, e.name), new i({ sqrt: v(t) }); },
    Trunc: function e(t, n) { return d.min(1, arguments, e.name), n = g(n, null), new i(y({ trunc: v(t) }, { precision: v(n) })); },
    Count: function e(t) { return d.exact(1, arguments, e.name), new i({ count: v(t) }); },
    Sum: function e(t) { return d.exact(1, arguments, e.name), new i({ sum: v(t) }); },
    Mean: function e(t) { return d.exact(1, arguments, e.name), new i({ mean: v(t) }); },
    Any: function e(t) { return d.exact(1, arguments, e.name), new i({ any: v(t) }); },
    All: function e(t) { return d.exact(1, arguments, e.name), new i({ all: v(t) }); },
    Acos: function e(t) { return d.exact(1, arguments, e.name), new i({ acos: v(t) }); },
    Asin: function e(t) { return d.exact(1, arguments, e.name), new i({ asin: v(t) }); },
    Atan: function e(t) { return d.exact(1, arguments, e.name), new i({ atan: v(t) }); },
    Cos: function e(t) { return d.exact(1, arguments, e.name), new i({ cos: v(t) }); },
    Cosh: function e(t) { return d.exact(1, arguments, e.name), new i({ cosh: v(t) }); },
    Degrees: function e(t) { return d.exact(1, arguments, e.name), new i({ degrees: v(t) }); },
    Exp: function e(t) { return d.exact(1, arguments, e.name), new i({ exp: v(t) }); },
    Hypot: function e(t, n) { return d.min(1, arguments, e.name), n = g(n, null), new i(y({ hypot: v(t) }, { b: v(n) })); },
    Ln: function e(t) { return d.exact(1, arguments, e.name), new i({ ln: v(t) }); },
    Log: function e(t) { return d.exact(1, arguments, e.name), new i({ log: v(t) }); },
    Pow: function e(t, n) { return d.min(1, arguments, e.name), n = g(n, null), new i(y({ pow: v(t) }, { exp: v(n) })); },
    Radians: function e(t) { return d.exact(1, arguments, e.name), new i({ radians: v(t) }); },
    Sin: function e(t) { return d.exact(1, arguments, e.name), new i({ sin: v(t) }); },
    Sinh: function e(t) { return d.exact(1, arguments, e.name), new i({ sinh: v(t) }); },
    Tan: function e(t) { return d.exact(1, arguments, e.name), new i({ tan: v(t) }); },
    Tanh: function e(t) { return d.exact(1, arguments, e.name), new i({ tanh: v(t) }); },
    LT: function e() { return d.min(1, arguments, e.name), new i({ lt: v(w(arguments)) }); },
    LTE: function e() { return d.min(1, arguments, e.name), new i({ lte: v(w(arguments)) }); },
    GT: function e() { return d.min(1, arguments, e.name), new i({ gt: v(w(arguments)) }); },
    GTE: function e() { return d.min(1, arguments, e.name), new i({ gte: v(w(arguments)) }); },
    And: function e() { return d.min(1, arguments, e.name), new i({ and: v(w(arguments)) }); },
    Or: function e() { return d.min(1, arguments, e.name), new i({ or: v(w(arguments)) }); },
    Not: function e(t) { return d.exact(1, arguments, e.name), new i({ not: v(t) }); },
    ToString: function e(t) { return d.exact(1, arguments, e.name), new i({ to_string: v(t) }); },
    ToNumber: function e(t) { return d.exact(1, arguments, e.name), new i({ to_number: v(t) }); },
    ToObject: function e(t) { return d.exact(1, arguments, e.name), new i({ to_object: v(t) }); },
    ToArray: function e(t) { return d.exact(1, arguments, e.name), new i({ to_array: v(t) }); },
    ToDouble: function e(t) { return d.exact(1, arguments, e.name), new i({ to_double: v(t) }); },
    ToInteger: function e(t) { return d.exact(1, arguments, e.name), new i({ to_integer: v(t) }); },
    ToTime: function e(t) { return d.exact(1, arguments, e.name), new i({ to_time: v(t) }); },
    ToSeconds: function e(t) { return d.exact(1, arguments, e.name), new i({ to_seconds: v(t) }); },
    ToMicros: function e(t) { return d.exact(1, arguments, e.name), new i({ to_micros: v(t) }); },
    ToMillis: function e(t) { return d.exact(1, arguments, e.name), new i({ to_millis: v(t) }); },
    DayOfMonth: function e(t) { return d.exact(1, arguments, e.name), new i({ day_of_month: v(t) }); },
    DayOfWeek: function e(t) { return d.exact(1, arguments, e.name), new i({ day_of_week: v(t) }); },
    DayOfYear: function e(t) { return d.exact(1, arguments, e.name), new i({ day_of_year: v(t) }); },
    Second: function e(t) { return d.exact(1, arguments, e.name), new i({ second: v(t) }); },
    Minute: function e(t) { return d.exact(1, arguments, e.name), new i({ minute: v(t) }); },
    Hour: function e(t) { return d.exact(1, arguments, e.name), new i({ hour: v(t) }); },
    Month: function e(t) { return d.exact(1, arguments, e.name), new i({ month: v(t) }); },
    Year: function e(t) { return d.exact(1, arguments, e.name), new i({ year: v(t) }); },
    ToDate: function e(t) { return d.exact(1, arguments, e.name), new i({ to_date: v(t) }); },
    MoveDatabase: function e(t, n) { return d.exact(2, arguments, e.name), new i({ move_database: v(t), to: v(n) }); },
    Documents: function e(t) { return d.exact(1, arguments, e.name), new i({ documents: v(t) }); },
    Reverse: function e(t) { return d.exact(1, arguments, e.name), new i({ reverse: v(t) }); },
    wrap: v,
  };
}, function (e, t, n) {
  const r = n(9); function o(e) { this.raw = e; }o.prototype._isFaunaExpr = !0, o.prototype.toJSON = function () { return this.raw; }; const i = ['Do', 'Call', 'Union', 'Intersection', 'Difference', 'Equals', 'Add', 'BitAnd', 'BitOr', 'BitXor', 'Divide', 'Max', 'Min', 'Modulo', 'Multiply', 'Subtract', 'LT', 'LTE', 'GT', 'GTE', 'And', 'Or']; const a = {
    containsstrregex: 'ContainsStrRegex', endswith: 'EndsWith', findstr: 'FindStr', findstrregex: 'FindStrRegex', gt: 'GT', gte: 'GTE', is_nonempty: 'is_non_empty', lowercase: 'LowerCase', lt: 'LT', lte: 'LTE', ltrim: 'LTrim', rtrim: 'RTrim', regexescape: 'RegexEscape', replacestr: 'ReplaceStr', replacestrregex: 'ReplaceStrRegex', startswith: 'StartsWith', substring: 'SubString', titlecase: 'TitleCase', uppercase: 'UpperCase',
  }; function s(e) { return e instanceof o || r.checkInstanceHasProperty(e, '_isFaunaExpr'); } function u(e) { return `{${Object.keys(e).map(((t) => `${t}: ${l(e[t])}`)).join(', ')}}`; } function c(e, t) { return e.map(((e) => t(e))).join(', '); } var l = function (e, t) { if (s(e)) { if ('value' in e) return e.toString(); e = e.raw; } if (e === null) return 'null'; switch (typeof e) { case 'string': return JSON.stringify(e); case 'symbol': case 'number': case 'boolean': return e.toString(); case 'undefined': return 'undefined'; } if (Array.isArray(e)) { const n = c(e, l); return i.indexOf(t) != -1 ? n : `[${n}]`; } if ('match' in e) { const r = l(e.match); let o = e.terms || []; return s(o) && (o = o.raw), Array.isArray(o) && o.length == 0 ? `Match(${r})` : Array.isArray(o) ? `Match(${r}, [${c(o, l)}])` : `Match(${r}, ${l(o)})`; } if ('paginate' in e) { if (Object.keys(e).length === 1) return `Paginate(${l(e.paginate)})`; const f = { ...e }; return delete f.paginate, `Paginate(${l(e.paginate)}, ${u(f)})`; } if ('let' in e && 'in' in e) { return `Let(${Array.isArray(e.let) ? `[${c(e.let, u)}]` : u(e.let)}, ${l(e.in)})`; } if ('object' in e) return u(e.object); if ('select' in e) return `Select(${l(e.select)}, ${l(e.from)})`; if ('contains_path' in e) return `ContainsPath(${l(e.contains_path)}, ${l(e.in)})`; if ('contains_field' in e) return `ContainsField(${l(e.contains_field)}, ${l(e.in)})`; if ('contains_value' in e) return `ContainsValue(${l(e.contains_value)}, ${l(e.in)})`; if ('containsstr' in e) return `ContainsStr(${l(e.containsstr)}, ${l(e.search)})`; if ('filter' in e) return `Filter(${l(e.collection)}, ${l(e.filter)})`; if ('lambda' in e) return `Lambda(${l(e.lambda)}, ${l(e.expr)})`; if ('foreach' in e) return `Foreach(${l(e.collection)}, ${l(e.foreach)})`; if ('if' in e) return `If(${l(e.if)}, ${l(e.then)}, ${l(e.else)})`; if ('call' in e) return `Call(${l(e.call)}, ${l(e.arguments)})`; if ('databases' in e) return e.databases ? `Databases(${l(e.databases)})` : 'Databases()'; if ('collections' in e) return e.collections ? `Collections(${l(e.collections)})` : 'Collections()'; if ('documents' in e) return `Documents(${l(e.documents)})`; if ('map' in e) return `Map(${l(e.collection)}, ${l(e.map)})`; const p = Object.keys(e); let h = p[0]; h = (function (e) { return e in a && (e = a[e]), e.split('_').map(((e) => e.charAt(0).toUpperCase() + e.slice(1))).join(''); }(h)); let m = p.map(((t) => { const n = e[t]; return l(n, h); })); return m = m.join(', '), `${h}(${m})`; }; o.toString = l, e.exports = o;
}, function (e, t, n) {
  e.exports = {
    applyDefaults(e, t) { const n = {}; for (const r in e) { if (!(r in t)) throw new Error(`No such option ${r}`); n[r] = e[r]; } for (const o in t)o in n || (n[o] = t[o]); return n; }, removeNullAndUndefinedValues(e) { const t = {}; for (const n in e) { const r = e[n]; r != null && (t[n] = r); } return t; }, removeUndefinedValues(e) { const t = {}; for (const n in e) { const r = e[n]; void 0 !== r && (t[n] = r); } return t; }, checkInstanceHasProperty(e, t) { return typeof e === 'object' && e !== null && Boolean(e[t]); },
  };
}, function (e, t) { e.exports = require('https'); }, function (e, t, n) { e.exports = n(6).deprecate; }, function (e, t, n) {
  /*
object-assign
(c) Sindre Sorhus
@license MIT
*/const r = Object.getOwnPropertySymbols; const o = Object.prototype.hasOwnProperty; const i = Object.prototype.propertyIsEnumerable; function a(e) { if (e == null) throw new TypeError('Object.assign cannot be called with null or undefined'); return Object(e); }e.exports = (function () { try { if (!Object.assign) return !1; const e = new String('abc'); if (e[5] = 'de', Object.getOwnPropertyNames(e)[0] === '5') return !1; for (var t = {}, n = 0; n < 10; n++)t[`_${String.fromCharCode(n)}`] = n; if (Object.getOwnPropertyNames(t).map(((e) => t[e])).join('') !== '0123456789') return !1; const r = {}; return 'abcdefghijklmnopqrst'.split('').forEach(((e) => { r[e] = e; })), Object.keys({ ...r }).join('') === 'abcdefghijklmnopqrst'; } catch (e) { return !1; } }()) ? Object.assign : function (e, t) { for (var n, s, u = a(e), c = 1; c < arguments.length; c++) { for (const l in n = Object(arguments[c]))o.call(n, l) && (u[l] = n[l]); if (r) { s = r(n); for (let f = 0; f < s.length; f++)i.call(n, s[f]) && (u[s[f]] = n[s[f]]); } } return u; };
}, function (e, t, n) {
  const r = n(3); function o(e, t) { if (typeof t !== 'object' || t === null) return t; if ('@ref' in t) { const n = t['@ref']; if (!('collection' in n) && !('database' in n)) return r.Native.fromName(n.id); const i = o('collection', n.collection); const a = o('database', n.database); return new r.Ref(n.id, i, a); } return '@obj' in t ? t['@obj'] : '@set' in t ? new r.SetRef(t['@set']) : '@ts' in t ? new r.FaunaTime(t['@ts']) : '@date' in t ? new r.FaunaDate(t['@date']) : '@bytes' in t ? new r.Bytes(t['@bytes']) : '@query' in t ? new r.Query(t['@query']) : t; }e.exports = { toJSON(e, t) { return (t = void 0 !== t && t) ? JSON.stringify(e, null, '  ') : JSON.stringify(e); }, parseJSON(e) { return JSON.parse(e, o); } };
}, function (e, t, n) {
  function r(e, t, n, r, o, i, a, s, u, c, l) { this.method = e, this.path = t, this.query = n, this.requestRaw = r, this.requestContent = o, this.responseRaw = i, this.responseContent = a, this.statusCode = s, this.responseHeaders = u, this.startTime = c, this.endTime = l; }Object.defineProperty(r.prototype, 'timeTaken', { get() { return this.endTime - this.startTime; } }), e.exports = r;
}, function (e, t, n) {
  const r = n(7); const o = n(12); function i(e, t, n, r) { void 0 === n && (n = {}), void 0 === r && (r = {}), this.reverse = !1, this.params = {}, this.before = void 0, this.after = void 0, o(this.params, n); const i = this.params.cursor || this.params; 'before' in i ? (this.before = i.before, delete i.before) : 'after' in i && (this.after = i.after, delete i.after), this.options = {}, o(this.options, r), this.client = e, this.set = t, this._faunaFunctions = []; }i.prototype.map = function (e) { const t = this._clone(); return t._faunaFunctions.push(((t) => r.Map(t, e))), t; }, i.prototype.filter = function (e) { const t = this._clone(); return t._faunaFunctions.push(((t) => r.Filter(t, e))), t; }, i.prototype.each = function (e) { return this._retrieveNextPage(this.after, !1).then(this._consumePages(e, !1)); }, i.prototype.eachReverse = function (e) { return this._retrieveNextPage(this.before, !0).then(this._consumePages(e, !0)); }, i.prototype.previousPage = function () { return this._retrieveNextPage(this.before, !0).then(this._adjustCursors.bind(this)); }, i.prototype.nextPage = function () { return this._retrieveNextPage(this.after, !1).then(this._adjustCursors.bind(this)); }, i.prototype._adjustCursors = function (e) { return void 0 !== e.after && (this.after = e.after), void 0 !== e.before && (this.before = e.before), e.data; }, i.prototype._consumePages = function (e, t) { const n = this; return function (r) { let o; const i = []; return r.data.forEach(((e) => { e.document && (e.instance = e.document), e.value && e.value.document && (e.value.instance = e.value.document), i.push(e); })), e(i), void 0 !== (o = t ? r.before : r.after) ? n._retrieveNextPage(o, t).then(n._consumePages(e, t)) : Promise.resolve(); }; }, i.prototype._retrieveNextPage = function (e, t) { const n = {}; o(n, this.params); const i = n.cursor || n; void 0 !== e ? t ? i.before = e : i.after = e : t && (i.before = null); let a = r.Paginate(this.set, n); return this._faunaFunctions.length > 0 && this._faunaFunctions.forEach(((e) => { a = e(a); })), this.client.query(a, this.options); }, i.prototype._clone = function () {
    return Object.create(i.prototype, {
      client: { value: this.client }, set: { value: this.set }, _faunaFunctions: { value: this._faunaFunctions }, before: { value: this.before }, after: { value: this.after },
    });
  }, e.exports = i;
}, function (e, t, n) { const r = n(17); const o = r.query; const i = new r.Client({ secret: process.env.FAUNADB_SERVER_SECRET }); t.handler = async function (e, t) { const n = JSON.parse(e.body); console.log('Function `todo-create` invoked', n); const r = { data: n }; return i.query(o.Create(o.Ref('classes/todos'), r)).then((e) => (console.log('success', e), { statusCode: 200, body: JSON.stringify(e) })).catch((e) => (console.log('error', e), { statusCode: 400, body: JSON.stringify(e) })); }; }, function (e, t, n) {
  e.exports = {
    Client: n(18), Expr: n(8), PageHelper: n(15), RequestResult: n(14), clientLogger: n(27), errors: n(2), values: n(3), query: n(7),
  };
}, function (e, t, n) {
  const r = n(19); const o = n(2); const i = n(7); const a = n(3); const s = n(13); const u = n(14); const c = n(9); const l = n(15); const f = n(22); function p(e) {
    const t = typeof window === 'undefined'; const r = c.applyDefaults(e, {
      domain: 'db.fauna.com', scheme: 'https', port: null, secret: null, timeout: 60, observer: null, keepAlive: !0, headers: {}, fetch: void 0, queryTimeout: null,
    }); const o = r.scheme === 'https'; r.port === null && (r.port = o ? 443 : 80), this._baseUrl = `${r.scheme}://${r.domain}:${r.port}`, this._timeout = Math.floor(1e3 * r.timeout), this._secret = r.secret, this._observer = r.observer, this._lastSeen = null, this._headers = r.headers, this._fetch = r.fetch || n(25), this._queryTimeout = r.queryTimeout, t && r.keepAlive && (this._keepAliveEnabledAgent = new (n(o ? 10 : 4).Agent)({ keepAlive: !0 }));
  } function h(e, t) { return void 0 === e ? t : e; } function m(e) { return `Basic ${r(`${e}:`)}`; }p.prototype.query = function (e, t) { return this._execute('POST', '', i.wrap(e), null, t); }, p.prototype.paginate = function (e, t, n) { return t = h(t, {}), n = h(n, {}), new l(this, e, t, n); }, p.prototype.ping = function (e, t) { return this._execute('GET', 'ping', null, { scope: e, timeout: t }); }, p.prototype.getLastTxnTime = function () { return this._lastSeen; }, p.prototype.syncLastTxnTime = function (e) { (this._lastSeen == null || this._lastSeen < e) && (this._lastSeen = e); }, p.prototype._execute = function (e, t, n, r, i) { r = h(r, null), (t instanceof a.Ref || c.checkInstanceHasProperty(t, '_isFaunaRef')) && (t = t.value), r !== null && (r = c.removeUndefinedValues(r)); const l = Date.now(); const f = this; const p = ['GET', 'HEAD'].indexOf(e) >= 0 ? void 0 : JSON.stringify(n); return this._performRequest(e, t, p, r, i).then(((i) => { const a = Date.now(); const c = i.text; const h = s.parseJSON(c); const m = new u(e, t, r, p, n, c, h, i.status, (function (e) { const t = {}; for (const n of e.headers.entries()) { const r = n[0]; const o = n[1]; t[r] = o; } return t; }(i)), l, a); return i.headers.has('x-txn-time') && f.syncLastTxnTime(parseInt(i.headers.get('x-txn-time'), 10)), f._observer != null && f._observer(m, f), o.FaunaHTTPError.raiseForStatusCode(m), h.resource; })); }, p.prototype._performRequest = function (e, t, n, r, o) {
    const i = f(this._baseUrl); i.set('pathname', t), i.set('query', r); const a = (o = h(o, {})).secret || this._secret; let s = this._queryTimeout; return o && o.queryTimeout && (s = o.queryTimeout), this._fetch(i.href, {
      agent: this._keepAliveEnabledAgent,
      body: n,
      headers: c.removeNullAndUndefinedValues({
        ...this._headers, Authorization: a && m(a), 'X-FaunaDB-API-Version': '3', 'X-Fauna-Driver': 'Javascript', 'X-Last-Seen-Txn': this._lastSeen, 'X-Query-Timeout': s,
      }),
      method: e,
      timeout: this._timeout,
    }).then(((e) => e.text().then(((t) => (e.text = t, e)))));
  }, e.exports = p;
}, function (e, t) { e.exports = function (e) { return new Buffer(e).toString('base64'); }; }, function (e, t, n) {
  e.exports = function (e) { if (typeof e !== 'function') throw new Error('Could not parse function signature for injection dependencies: Object is not a function'); if (!e.length) return []; const t = /^()\(?([^)=]*)\)? *=>/.exec(`${e}`) || /^[^(]+([^ \(]*) *\(([^\)]*)\)/.exec(`${e}`); if (!t) throw new Error(`Could not parse function signature for injection dependencies: ${e}`); let n = t[2].replace(/\/\*[\S\s]*?\*\//g, ' ').replace(/\/\/.*/g, ' '); function r(e, t, n) { return t + n.split(',').map(((e) => e && e.trim())).filter(Boolean).join('@'); } return (n = (n = n.replace(/(\{)([^}]*)\}/g, r)).replace(/(\[)([^}]*)\]/g, r)).split(',').map(((e) => e && e.trim())).map(((e) => (e[0] === '{' ? e.substring(1).split('@') : e[0] === '[' ? { items: e.substring(1).split('@') } : e))).filter(Boolean); };
}, function (e, t, n) {
  t.byteLength = function (e) { const t = c(e); const n = t[0]; const r = t[1]; return 3 * (n + r) / 4 - r; }, t.toByteArray = function (e) { let t; let n; const r = c(e); const a = r[0]; const s = r[1]; const u = new i(function (e, t, n) { return 3 * (t + n) / 4 - n; }(0, a, s)); let l = 0; const f = s > 0 ? a - 4 : a; for (n = 0; n < f; n += 4)t = o[e.charCodeAt(n)] << 18 | o[e.charCodeAt(n + 1)] << 12 | o[e.charCodeAt(n + 2)] << 6 | o[e.charCodeAt(n + 3)], u[l++] = t >> 16 & 255, u[l++] = t >> 8 & 255, u[l++] = 255 & t; s === 2 && (t = o[e.charCodeAt(n)] << 2 | o[e.charCodeAt(n + 1)] >> 4, u[l++] = 255 & t); s === 1 && (t = o[e.charCodeAt(n)] << 10 | o[e.charCodeAt(n + 1)] << 4 | o[e.charCodeAt(n + 2)] >> 2, u[l++] = t >> 8 & 255, u[l++] = 255 & t); return u; }, t.fromByteArray = function (e) { for (var t, n = e.length, o = n % 3, i = [], a = 0, s = n - o; a < s; a += 16383)i.push(l(e, a, a + 16383 > s ? s : a + 16383)); o === 1 ? (t = e[n - 1], i.push(`${r[t >> 2] + r[t << 4 & 63]}==`)) : o === 2 && (t = (e[n - 2] << 8) + e[n - 1], i.push(`${r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63]}=`)); return i.join(''); }; for (var r = [], o = [], i = typeof Uint8Array !== 'undefined' ? Uint8Array : Array, a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', s = 0, u = a.length; s < u; ++s)r[s] = a[s], o[a.charCodeAt(s)] = s; function c(e) { const t = e.length; if (t % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4'); let n = e.indexOf('='); return n === -1 && (n = t), [n, n === t ? 0 : 4 - n % 4]; } function l(e, t, n) { for (var o, i, a = [], s = t; s < n; s += 3)o = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), a.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]); return a.join(''); }o['-'.charCodeAt(0)] = 62, o['_'.charCodeAt(0)] = 63;
}, function (e, t, n) {
  const r = n(23); const o = n(24); const i = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//; const a = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i; const s = new RegExp('^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+'); function u(e) { return (e || '').toString().replace(s, ''); } const c = [['#', 'hash'], ['?', 'query'], function (e) { return e.replace('\\', '/'); }, ['/', 'pathname'], ['@', 'auth', 1], [NaN, 'host', void 0, 1, 1], [/:(\d+)$/, 'port', void 0, 1], [NaN, 'hostname', void 0, 1, 1]]; const l = { hash: 1, query: 1 }; function f(e) { let t; const n = (typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}).location || {}; let r = {}; const o = typeof (e = e || n); if (e.protocol === 'blob:')r = new h(unescape(e.pathname), {}); else if (o === 'string') for (t in r = new h(e, {}), l) delete r[t]; else if (o === 'object') { for (t in e)t in l || (r[t] = e[t]); void 0 === r.slashes && (r.slashes = i.test(e.href)); } return r; } function p(e) { e = u(e); const t = a.exec(e); return { protocol: t[1] ? t[1].toLowerCase() : '', slashes: !!t[2], rest: t[3] }; } function h(e, t, n) { if (e = u(e), !(this instanceof h)) return new h(e, t, n); let i; let a; let s; let l; let m; let d; const y = c.slice(); const w = typeof t; const b = this; let g = 0; for (w !== 'object' && w !== 'string' && (n = t, t = null), n && typeof n !== 'function' && (n = o.parse), t = f(t), i = !(a = p(e || '')).protocol && !a.slashes, b.slashes = a.slashes || i && t.slashes, b.protocol = a.protocol || t.protocol || '', e = a.rest, a.slashes || (y[3] = [/(.*)/, 'pathname']); g < y.length; g++) typeof (l = y[g]) !== 'function' ? (s = l[0], d = l[1], s != s ? b[d] = e : typeof s === 'string' ? ~(m = e.indexOf(s)) && (typeof l[2] === 'number' ? (b[d] = e.slice(0, m), e = e.slice(m + l[2])) : (b[d] = e.slice(m), e = e.slice(0, m))) : (m = s.exec(e)) && (b[d] = m[1], e = e.slice(0, m.index)), b[d] = b[d] || i && l[3] && t[d] || '', l[4] && (b[d] = b[d].toLowerCase())) : e = l(e); n && (b.query = n(b.query)), i && t.slashes && b.pathname.charAt(0) !== '/' && (b.pathname !== '' || t.pathname !== '') && (b.pathname = (function (e, t) { if (e === '') return t; for (var n = (t || '/').split('/').slice(0, -1).concat(e.split('/')), r = n.length, o = n[r - 1], i = !1, a = 0; r--;)n[r] === '.' ? n.splice(r, 1) : n[r] === '..' ? (n.splice(r, 1), a++) : a && (r === 0 && (i = !0), n.splice(r, 1), a--); return i && n.unshift(''), o !== '.' && o !== '..' || n.push(''), n.join('/'); }(b.pathname, t.pathname))), r(b.port, b.protocol) || (b.host = b.hostname, b.port = ''), b.username = b.password = '', b.auth && (l = b.auth.split(':'), b.username = l[0] || '', b.password = l[1] || ''), b.origin = b.protocol && b.host && b.protocol !== 'file:' ? `${b.protocol}//${b.host}` : 'null', b.href = b.toString(); }h.prototype = { set(e, t, n) { const i = this; switch (e) { case 'query': typeof t === 'string' && t.length && (t = (n || o.parse)(t)), i[e] = t; break; case 'port': i[e] = t, r(t, i.protocol) ? t && (i.host = `${i.hostname}:${t}`) : (i.host = i.hostname, i[e] = ''); break; case 'hostname': i[e] = t, i.port && (t += `:${i.port}`), i.host = t; break; case 'host': i[e] = t, /:\d+$/.test(t) ? (t = t.split(':'), i.port = t.pop(), i.hostname = t.join(':')) : (i.hostname = t, i.port = ''); break; case 'protocol': i.protocol = t.toLowerCase(), i.slashes = !n; break; case 'pathname': case 'hash': if (t) { const a = e === 'pathname' ? '/' : '#'; i[e] = t.charAt(0) !== a ? a + t : t; } else i[e] = t; break; default: i[e] = t; } for (let s = 0; s < c.length; s++) { const u = c[s]; u[4] && (i[u[1]] = i[u[1]].toLowerCase()); } return i.origin = i.protocol && i.host && i.protocol !== 'file:' ? `${i.protocol}//${i.host}` : 'null', i.href = i.toString(), i; }, toString(e) { e && typeof e === 'function' || (e = o.stringify); let t; const n = this; let r = n.protocol; r && r.charAt(r.length - 1) !== ':' && (r += ':'); let i = r + (n.slashes ? '//' : ''); return n.username && (i += n.username, n.password && (i += `:${n.password}`), i += '@'), i += n.host + n.pathname, (t = typeof n.query === 'object' ? e(n.query) : n.query) && (i += t.charAt(0) !== '?' ? `?${t}` : t), n.hash && (i += n.hash), i; } }, h.extractProtocol = p, h.location = f, h.trimLeft = u, h.qs = o, e.exports = h;
}, function (e, t, n) {
  e.exports = function (e, t) { if (t = t.split(':')[0], !(e = +e)) return !1; switch (t) { case 'http': case 'ws': return e !== 80; case 'https': case 'wss': return e !== 443; case 'ftp': return e !== 21; case 'gopher': return e !== 70; case 'file': return !1; } return e !== 0; };
}, function (e, t, n) {
  const r = Object.prototype.hasOwnProperty; function o(e) { try { return decodeURIComponent(e.replace(/\+/g, ' ')); } catch (e) { return null; } } function i(e) { try { return encodeURIComponent(e); } catch (e) { return null; } }t.stringify = function (e, t) { t = t || ''; let n; let o; const a = []; for (o in typeof t !== 'string' && (t = '?'), e) if (r.call(e, o)) { if ((n = e[o]) || n != null && !isNaN(n) || (n = ''), o = i(o), n = i(n), o === null || n === null) continue; a.push(`${o}=${n}`); } return a.length ? t + a.join('&') : ''; }, t.parse = function (e) { for (var t, n = /([^=?#&]+)=?([^&]*)/g, r = {}; t = n.exec(e);) { const i = o(t[1]); const a = o(t[2]); i === null || a === null || i in r || (r[i] = a); } return r; };
}, function (e, t, n) { const r = n(26); const o = r.default || r; const i = function (e, t) { return /^\/\//.test(e) && (e = `https:${e}`), o.call(this, e, t); }; e.exports = t = i, t.fetch = i, t.Headers = r.Headers, t.Request = r.Request, t.Response = r.Response, t.default = i; }, function (e, t, n) {
  n.r(t), n.d(t, 'Headers', (() => E)), n.d(t, 'Request', (() => H)), n.d(t, 'Response', (() => F)), n.d(t, 'FetchError', (() => p)); const r = n(0); const o = n(4); const i = n(5); const a = n(10); const s = n(1); const u = r.Readable; const c = Symbol('buffer'); const l = Symbol('type'); class f {
    constructor() { this[l] = ''; const e = arguments[0]; const t = arguments[1]; const n = []; let r = 0; if (e) { const t = e; const o = Number(t.length); for (let e = 0; e < o; e++) { const o = t[e]; let i; i = o instanceof Buffer ? o : ArrayBuffer.isView(o) ? Buffer.from(o.buffer, o.byteOffset, o.byteLength) : o instanceof ArrayBuffer ? Buffer.from(o) : o instanceof f ? o[c] : Buffer.from(typeof o === 'string' ? o : String(o)), r += i.length, n.push(i); } } this[c] = Buffer.concat(n); const o = t && void 0 !== t.type && String(t.type).toLowerCase(); o && !/[^\u0020-\u007E]/.test(o) && (this[l] = o); }

    get size() { return this[c].length; }

    get type() { return this[l]; }

    text() { return Promise.resolve(this[c].toString()); }

    arrayBuffer() { const e = this[c]; const t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength); return Promise.resolve(t); }

    stream() { const e = new u(); return e._read = function () {}, e.push(this[c]), e.push(null), e; }

    toString() { return '[object Blob]'; }

    slice() { const e = this.size; const t = arguments[0]; const n = arguments[1]; let r; let o; r = void 0 === t ? 0 : t < 0 ? Math.max(e + t, 0) : Math.min(t, e), o = void 0 === n ? e : n < 0 ? Math.max(e + n, 0) : Math.min(n, e); const i = Math.max(o - r, 0); const a = this[c].slice(r, r + i); const s = new f([], { type: arguments[2] }); return s[c] = a, s; }
  } function p(e, t, n) { Error.call(this, e), this.message = e, this.type = t, n && (this.code = this.errno = n.code), Error.captureStackTrace(this, this.constructor); } let h; Object.defineProperties(f.prototype, { size: { enumerable: !0 }, type: { enumerable: !0 }, slice: { enumerable: !0 } }), Object.defineProperty(f.prototype, Symbol.toStringTag, {
    value: 'Blob', writable: !1, enumerable: !1, configurable: !0,
  }), p.prototype = Object.create(Error.prototype), p.prototype.constructor = p, p.prototype.name = 'FetchError'; try { h = require('encoding').convert; } catch (e) {} const m = Symbol('Body internals'); const d = r.PassThrough; function y(e) { const t = this; const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; const o = n.size; const i = void 0 === o ? 0 : o; const a = n.timeout; const s = void 0 === a ? 0 : a; e == null ? e = null : b(e) ? e = Buffer.from(e.toString()) : g(e) || Buffer.isBuffer(e) || (Object.prototype.toString.call(e) === '[object ArrayBuffer]' ? e = Buffer.from(e) : ArrayBuffer.isView(e) ? e = Buffer.from(e.buffer, e.byteOffset, e.byteLength) : e instanceof r || (e = Buffer.from(String(e)))), this[m] = { body: e, disturbed: !1, error: null }, this.size = i, this.timeout = s, e instanceof r && e.on('error', ((e) => { const n = e.name === 'AbortError' ? e : new p(`Invalid response body while trying to fetch ${t.url}: ${e.message}`, 'system', e); t[m].error = n; })); } function w() { const e = this; if (this[m].disturbed) return y.Promise.reject(new TypeError(`body used already for: ${this.url}`)); if (this[m].disturbed = !0, this[m].error) return y.Promise.reject(this[m].error); let t = this.body; if (t === null) return y.Promise.resolve(Buffer.alloc(0)); if (g(t) && (t = t.stream()), Buffer.isBuffer(t)) return y.Promise.resolve(t); if (!(t instanceof r)) return y.Promise.resolve(Buffer.alloc(0)); const n = []; let o = 0; let i = !1; return new y.Promise((((r, a) => { let s; e.timeout && (s = setTimeout((() => { i = !0, a(new p(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`, 'body-timeout')); }), e.timeout)), t.on('error', ((t) => { t.name === 'AbortError' ? (i = !0, a(t)) : a(new p(`Invalid response body while trying to fetch ${e.url}: ${t.message}`, 'system', t)); })), t.on('data', ((t) => { if (!i && t !== null) { if (e.size && o + t.length > e.size) return i = !0, void a(new p(`content size at ${e.url} over limit: ${e.size}`, 'max-size')); o += t.length, n.push(t); } })), t.on('end', (() => { if (!i) { clearTimeout(s); try { r(Buffer.concat(n, o)); } catch (t) { a(new p(`Could not create Buffer from response body for ${e.url}: ${t.message}`, 'system', t)); } } })); }))); } function b(e) { return typeof e === 'object' && typeof e.append === 'function' && typeof e.delete === 'function' && typeof e.get === 'function' && typeof e.getAll === 'function' && typeof e.has === 'function' && typeof e.set === 'function' && (e.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(e) === '[object URLSearchParams]' || typeof e.sort === 'function'); } function g(e) { return typeof e === 'object' && typeof e.arrayBuffer === 'function' && typeof e.type === 'string' && typeof e.stream === 'function' && typeof e.constructor === 'function' && typeof e.constructor.name === 'string' && /^(Blob|File)$/.test(e.constructor.name) && /^(Blob|File)$/.test(e[Symbol.toStringTag]); } function v(e) { let t; let n; let o = e.body; if (e.bodyUsed) throw new Error('cannot clone body after it is used'); return o instanceof r && typeof o.getBoundary !== 'function' && (t = new d(), n = new d(), o.pipe(t), o.pipe(n), e[m].body = t, o = n), o; } function x(e) { return e === null ? null : typeof e === 'string' ? 'text/plain;charset=UTF-8' : b(e) ? 'application/x-www-form-urlencoded;charset=UTF-8' : g(e) ? e.type || null : Buffer.isBuffer(e) || Object.prototype.toString.call(e) === '[object ArrayBuffer]' || ArrayBuffer.isView(e) ? null : typeof e.getBoundary === 'function' ? `multipart/form-data;boundary=${e.getBoundary()}` : e instanceof r ? null : 'text/plain;charset=UTF-8'; } function S(e) { const t = e.body; return t === null ? 0 : g(t) ? t.size : Buffer.isBuffer(t) ? t.length : t && typeof t.getLengthSync === 'function' && (t._lengthRetrievers && t._lengthRetrievers.length == 0 || t.hasKnownLength && t.hasKnownLength()) ? t.getLengthSync() : null; }y.prototype = {
    get body() { return this[m].body; }, get bodyUsed() { return this[m].disturbed; }, arrayBuffer() { return w.call(this).then(((e) => e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength))); }, blob() { const e = this.headers && this.headers.get('content-type') || ''; return w.call(this).then(((t) => Object.assign(new f([], { type: e.toLowerCase() }), { [c]: t }))); }, json() { const e = this; return w.call(this).then(((t) => { try { return JSON.parse(t.toString()); } catch (t) { return y.Promise.reject(new p(`invalid json response body at ${e.url} reason: ${t.message}`, 'invalid-json')); } })); }, text() { return w.call(this).then(((e) => e.toString())); }, buffer() { return w.call(this); }, textConverted() { const e = this; return w.call(this).then(((t) => (function (e, t) { if (typeof h !== 'function') throw new Error('The package `encoding` must be installed to use the textConverted() function'); const n = t.get('content-type'); let r; let o; let i = 'utf-8'; n && (r = /charset=([^;]*)/i.exec(n)); o = e.slice(0, 1024).toString(), !r && o && (r = /<meta.+?charset=(['"])(.+?)\1/i.exec(o)); !r && o && (r = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o), r || (r = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o), r && r.pop()), r && (r = /charset=(.*)/i.exec(r.pop()))); !r && o && (r = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)); r && (i = r.pop(), i !== 'gb2312' && i !== 'gbk' || (i = 'gb18030')); return h(e, 'UTF-8', i).toString(); }(t, e.headers)))); },
  }, Object.defineProperties(y.prototype, {
    body: { enumerable: !0 }, bodyUsed: { enumerable: !0 }, arrayBuffer: { enumerable: !0 }, blob: { enumerable: !0 }, json: { enumerable: !0 }, text: { enumerable: !0 },
  }), y.mixIn = function (e) { for (const t of Object.getOwnPropertyNames(y.prototype)) if (!(t in e)) { const n = Object.getOwnPropertyDescriptor(y.prototype, t); Object.defineProperty(e, t, n); } }, y.Promise = global.Promise; const _ = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/; const O = /[^\t\x20-\x7e\x80-\xff]/; function T(e) { if (e = `${e}`, _.test(e) || e === '') throw new TypeError(`${e} is not a legal HTTP header name`); } function C(e) { if (e = `${e}`, O.test(e)) throw new TypeError(`${e} is not a legal HTTP header value`); } function j(e, t) { t = t.toLowerCase(); for (const n in e) if (n.toLowerCase() === t) return n; } const A = Symbol('map'); class E {
    constructor() { const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0; if (this[A] = Object.create(null), e instanceof E) { const t = e.raw(); const n = Object.keys(t); for (const e of n) for (const n of t[e]) this.append(e, n); } else if (e == null);else { if (typeof e !== 'object') throw new TypeError('Provided initializer must be an object'); { const t = e[Symbol.iterator]; if (t != null) { if (typeof t !== 'function') throw new TypeError('Header pairs must be iterable'); const n = []; for (const t of e) { if (typeof t !== 'object' || typeof t[Symbol.iterator] !== 'function') throw new TypeError('Each header pair must be iterable'); n.push(Array.from(t)); } for (const e of n) { if (e.length !== 2) throw new TypeError('Each header pair must be a name/value tuple'); this.append(e[0], e[1]); } } else for (const t of Object.keys(e)) { const n = e[t]; this.append(t, n); } } } }

    get(e) { T(e = `${e}`); const t = j(this[A], e); return void 0 === t ? null : this[A][t].join(', '); }

    forEach(e) { const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0; let n = P(this); let r = 0; for (;r < n.length;) { const o = n[r]; const i = o[0]; const a = o[1]; e.call(t, a, i, this), n = P(this), r++; } }

    set(e, t) { t = `${t}`, T(e = `${e}`), C(t); const n = j(this[A], e); this[A][void 0 !== n ? n : e] = [t]; }

    append(e, t) { t = `${t}`, T(e = `${e}`), C(t); const n = j(this[A], e); void 0 !== n ? this[A][n].push(t) : this[A][e] = [t]; }

    has(e) { return T(e = `${e}`), void 0 !== j(this[A], e); }

    delete(e) { T(e = `${e}`); const t = j(this[A], e); void 0 !== t && delete this[A][t]; }

    raw() { return this[A]; }

    keys() { return I(this, 'key'); }

    values() { return I(this, 'value'); }

    [Symbol.iterator]() { return I(this, 'key+value'); }
  } function P(e) { const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'key+value'; const n = Object.keys(e[A]).sort(); return n.map(t === 'key' ? (e) => e.toLowerCase() : t === 'value' ? (t) => e[A][t].join(', ') : (t) => [t.toLowerCase(), e[A][t].join(', ')]); }E.prototype.entries = E.prototype[Symbol.iterator], Object.defineProperty(E.prototype, Symbol.toStringTag, {
    value: 'Headers', writable: !1, enumerable: !1, configurable: !0,
  }), Object.defineProperties(E.prototype, {
    get: { enumerable: !0 }, forEach: { enumerable: !0 }, set: { enumerable: !0 }, append: { enumerable: !0 }, has: { enumerable: !0 }, delete: { enumerable: !0 }, keys: { enumerable: !0 }, values: { enumerable: !0 }, entries: { enumerable: !0 },
  }); const R = Symbol('internal'); function I(e, t) { const n = Object.create(B); return n[R] = { target: e, kind: t, index: 0 }, n; } const B = Object.setPrototypeOf({ next() { if (!this || Object.getPrototypeOf(this) !== B) throw new TypeError('Value of `this` is not a HeadersIterator'); const e = this[R]; const t = e.target; const n = e.kind; const r = e.index; const o = P(t, n); return r >= o.length ? { value: void 0, done: !0 } : (this[R].index = r + 1, { value: o[r], done: !1 }); } }, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()))); function N(e) { const t = { __proto__: null, ...e[A] }; const n = j(e[A], 'Host'); return void 0 !== n && (t[n] = t[n][0]), t; }Object.defineProperty(B, Symbol.toStringTag, {
    value: 'HeadersIterator', writable: !1, enumerable: !1, configurable: !0,
  }); const k = Symbol('Response internals'); const q = o.STATUS_CODES; class F {
    constructor() {
      const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null; const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; y.call(this, e, t); const n = t.status || 200; const r = new E(t.headers); if (e != null && !r.has('Content-Type')) { const t = x(e); t && r.append('Content-Type', t); } this[k] = {
        url: t.url, status: n, statusText: t.statusText || q[n], headers: r, counter: t.counter,
      };
    }

    get url() { return this[k].url || ''; }

    get status() { return this[k].status; }

    get ok() { return this[k].status >= 200 && this[k].status < 300; }

    get redirected() { return this[k].counter > 0; }

    get statusText() { return this[k].statusText; }

    get headers() { return this[k].headers; }

    clone() {
      return new F(v(this), {
        url: this.url, status: this.status, statusText: this.statusText, headers: this.headers, ok: this.ok, redirected: this.redirected,
      });
    }
  }y.mixIn(F.prototype), Object.defineProperties(F.prototype, {
    url: { enumerable: !0 }, status: { enumerable: !0 }, ok: { enumerable: !0 }, redirected: { enumerable: !0 }, statusText: { enumerable: !0 }, headers: { enumerable: !0 }, clone: { enumerable: !0 },
  }), Object.defineProperty(F.prototype, Symbol.toStringTag, {
    value: 'Response', writable: !1, enumerable: !1, configurable: !0,
  }); const L = Symbol('Request internals'); const D = i.parse; const U = i.format; const M = 'destroy' in r.Readable.prototype; function z(e) { return typeof e === 'object' && typeof e[L] === 'object'; } class H {
    constructor(e) {
      let t; const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; z(e) ? t = D(e.url) : (t = e && e.href ? D(e.href) : D(`${e}`), e = {}); let r = n.method || e.method || 'GET'; if (r = r.toUpperCase(), (n.body != null || z(e) && e.body !== null) && (r === 'GET' || r === 'HEAD')) throw new TypeError('Request with GET/HEAD method cannot have body'); const o = n.body != null ? n.body : z(e) && e.body !== null ? v(e) : null; y.call(this, o, { timeout: n.timeout || e.timeout || 0, size: n.size || e.size || 0 }); const i = new E(n.headers || e.headers || {}); if (o != null && !i.has('Content-Type')) { const e = x(o); e && i.append('Content-Type', e); } let a = z(e) ? e.signal : null; if ('signal' in n && (a = n.signal), a != null && !(function (e) { const t = e && typeof e === 'object' && Object.getPrototypeOf(e); return !(!t || t.constructor.name !== 'AbortSignal'); }(a))) throw new TypeError('Expected signal to be an instanceof AbortSignal'); this[L] = {
        method: r, redirect: n.redirect || e.redirect || 'follow', headers: i, parsedURL: t, signal: a,
      }, this.follow = void 0 !== n.follow ? n.follow : void 0 !== e.follow ? e.follow : 20, this.compress = void 0 !== n.compress ? n.compress : void 0 === e.compress || e.compress, this.counter = n.counter || e.counter || 0, this.agent = n.agent || e.agent;
    }

    get method() { return this[L].method; }

    get url() { return U(this[L].parsedURL); }

    get headers() { return this[L].headers; }

    get redirect() { return this[L].redirect; }

    get signal() { return this[L].signal; }

    clone() { return new H(this); }
  } function J(e) { Error.call(this, e), this.type = 'aborted', this.message = e, Error.captureStackTrace(this, this.constructor); }y.mixIn(H.prototype), Object.defineProperty(H.prototype, Symbol.toStringTag, {
    value: 'Request', writable: !1, enumerable: !1, configurable: !0,
  }), Object.defineProperties(H.prototype, {
    method: { enumerable: !0 }, url: { enumerable: !0 }, headers: { enumerable: !0 }, redirect: { enumerable: !0 }, clone: { enumerable: !0 }, signal: { enumerable: !0 },
  }), J.prototype = Object.create(Error.prototype), J.prototype.constructor = J, J.prototype.name = 'AbortError'; const $ = r.PassThrough; const V = i.resolve; function G(e, t) {
    if (!G.Promise) throw new Error('native promise missing, set fetch.Promise to your favorite alternative'); return y.Promise = G.Promise, new G.Promise((((n, i) => {
      const u = new H(e, t); const c = (function (e) {
        const t = e[L].parsedURL; const n = new E(e[L].headers); if (n.has('Accept') || n.set('Accept', '*/*'), !t.protocol || !t.hostname) throw new TypeError('Only absolute URLs are supported'); if (!/^https?:$/.test(t.protocol)) throw new TypeError('Only HTTP(S) protocols are supported'); if (e.signal && e.body instanceof r.Readable && !M) throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8'); let o = null; if (e.body == null && /^(POST|PUT)$/i.test(e.method) && (o = '0'), e.body != null) { const t = S(e); typeof t === 'number' && (o = String(t)); }o && n.set('Content-Length', o), n.has('User-Agent') || n.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)'), e.compress && !n.has('Accept-Encoding') && n.set('Accept-Encoding', 'gzip,deflate'); let i = e.agent; return typeof i === 'function' && (i = i(t)), n.has('Connection') || i || n.set('Connection', 'close'), ({
          ...t, method: e.method, headers: N(n), agent: i,
        });
      }(u)); const l = (c.protocol === 'https:' ? a : o).request; const f = u.signal; let h = null; const m = function () { const e = new J('The user aborted a request.'); i(e), u.body && u.body instanceof r.Readable && u.body.destroy(e), h && h.body && h.body.emit('error', e); }; if (f && f.aborted) return void m(); const d = function () { m(), b(); }; const y = l(c); let w; function b() { y.abort(), f && f.removeEventListener('abort', d), clearTimeout(w); }f && f.addEventListener('abort', d), u.timeout && y.once('socket', ((e) => { w = setTimeout((() => { i(new p(`network timeout at: ${u.url}`, 'request-timeout')), b(); }), u.timeout); })), y.on('error', ((e) => { i(new p(`request to ${u.url} failed, reason: ${e.message}`, 'system', e)), b(); })), y.on('response', ((e) => {
        clearTimeout(w); const t = (function (e) { const t = new E(); for (const n of Object.keys(e)) if (!_.test(n)) if (Array.isArray(e[n])) for (const r of e[n])O.test(r) || (void 0 === t[A][n] ? t[A][n] = [r] : t[A][n].push(r)); else O.test(e[n]) || (t[A][n] = [e[n]]); return t; }(e.headers)); if (G.isRedirect(e.statusCode)) {
          const r = t.get('Location'); const o = r === null ? null : V(u.url, r); switch (u.redirect) {
            case 'error': return i(new p(`uri requested responds with a redirect, redirect mode is set to error: ${u.url}`, 'no-redirect')), void b(); case 'manual': if (o !== null) try { t.set('Location', o); } catch (e) { i(e); } break; case 'follow': if (o === null) break; if (u.counter >= u.follow) return i(new p(`maximum redirect reached at: ${u.url}`, 'max-redirect')), void b(); const r = {
              headers: new E(u.headers), follow: u.follow, counter: u.counter + 1, agent: u.agent, compress: u.compress, method: u.method, body: u.body, signal: u.signal, timeout: u.timeout, size: u.size,
            }; return e.statusCode !== 303 && u.body && S(u) === null ? (i(new p('Cannot follow redirect with body being a readable stream', 'unsupported-redirect')), void b()) : (e.statusCode !== 303 && (e.statusCode !== 301 && e.statusCode !== 302 || u.method !== 'POST') || (r.method = 'GET', r.body = void 0, r.headers.delete('content-length')), n(G(new H(o, r))), void b());
          }
        }e.once('end', (() => { f && f.removeEventListener('abort', d); })); let r = e.pipe(new $()); const o = {
          url: u.url, status: e.statusCode, statusText: e.statusMessage, headers: t, size: u.size, timeout: u.timeout, counter: u.counter,
        }; const a = t.get('Content-Encoding'); if (!u.compress || u.method === 'HEAD' || a === null || e.statusCode === 204 || e.statusCode === 304) return h = new F(r, o), void n(h); const c = { flush: s.Z_SYNC_FLUSH, finishFlush: s.Z_SYNC_FLUSH }; if (a == 'gzip' || a == 'x-gzip') return r = r.pipe(s.createGunzip(c)), h = new F(r, o), void n(h); if (a != 'deflate' && a != 'x-deflate') { if (a == 'br' && typeof s.createBrotliDecompress === 'function') return r = r.pipe(s.createBrotliDecompress()), h = new F(r, o), void n(h); h = new F(r, o), n(h); } else { e.pipe(new $()).once('data', ((e) => { r = (15 & e[0]) == 8 ? r.pipe(s.createInflate()) : r.pipe(s.createInflateRaw()), h = new F(r, o), n(h); })); }
      })), (function (e, t) { const n = t.body; n === null ? e.end() : g(n) ? n.stream().pipe(e) : Buffer.isBuffer(n) ? (e.write(n), e.end()) : n.pipe(e); }(y, u));
    })));
  }G.isRedirect = function (e) { return e === 301 || e === 302 || e === 303 || e === 307 || e === 308; }, G.Promise = global.Promise, t.default = G;
}, function (e, t, n) {
  const r = n(13); function o(e) { const t = e.query; const n = e.method; const r = e.path; const o = e.requestContent; const a = e.responseHeaders; const s = e.responseContent; const u = e.statusCode; const c = e.timeTaken; let l = ''; function f(e) { l += e; } return f(`Fauna ${n} /${r}${(function (e) { if (e == null) return ''; const t = Object.keys(e); if (t.length === 0) return ''; return `?${t.map(((t) => `${t}=${e[t]}`)).join('&')}`; }(t))}\n`), o != null && f(`  Request JSON: ${i(o)}\n`), f(`  Response headers: ${i(a)}\n`), f(`  Response JSON: ${i(s)}\n`), f(`  Response (${u}): Network latency ${c}ms\n`), l; } function i(e) { return r.toJSON(e, !0).split('\n').join('\n  '); }e.exports = { logger(e) { return function (t, n) { return e(o(t), n); }; }, showRequestResult: o };
}]))));
