var nt=Object.defineProperty;var f=(r,t)=>nt(r,"name",{value:t,configurable:!0});import{I as rt,J as it,K as ot,L as st,M as at,N as ut,O as lt,w as k,P as ct,j as ft,G as B,H as dt,Q as pt,R as yt,c as gt}from"./iframe.9d4e4710.js";import"./es.map.constructor.5b818587.js";function ht(r,t){for(var e=0;e<t.length;e++){const n=t[e];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in r)){const s=Object.getOwnPropertyDescriptor(n,o);s&&Object.defineProperty(r,o,s.get?s:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}f(ht,"_mergeNamespaces");var _t=rt,mt=it;_t("toPrimitive");mt();var vt=ot,bt=st,Ot=TypeError,kt=f(function(r){if(vt(this),r==="string"||r==="default")r="string";else if(r!=="number")throw Ot("Incorrect hint");return bt(this,r)},"dateToPrimitive$1"),It=at,St=ut,wt=kt,Et=lt,G=Et("toPrimitive"),W=Date.prototype;It(W,G)||St(W,G,wt);var O;(function(r){r.DONE="done",r.ERROR="error",r.ACTIVE="active",r.WAITING="waiting"})(O||(O={}));var P;function R(r){return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(r)}f(R,"_typeof");function Rt(r,t){if(r==null)return{};var e=Ct(r,t),n,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);for(o=0;o<s.length;o++)n=s[o],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,n)||(e[n]=r[n]))}return e}f(Rt,"_objectWithoutProperties");function Ct(r,t){if(r==null)return{};var e={},n=Object.keys(r),o,s;for(s=0;s<n.length;s++)o=n[s],!(t.indexOf(o)>=0)&&(e[o]=r[o]);return e}f(Ct,"_objectWithoutPropertiesLoose");function Tt(r){var t=Mt(r,"string");return R(t)==="symbol"?t:String(t)}f(Tt,"_toPropertyKey");function Mt(r,t){if(R(r)!=="object"||r===null)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var n=e.call(r,t||"default");if(R(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}f(Mt,"_toPrimitive");function M(r){return Dt(r)||At(r)||H(r)||Pt()}f(M,"_toConsumableArray");function Pt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}f(Pt,"_nonIterableSpread");function At(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}f(At,"_iterableToArray");function Dt(r){if(Array.isArray(r))return j(r)}f(Dt,"_arrayWithoutHoles");function A(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}f(A,"_defineProperty$1");function Nt(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}f(Nt,"_classCallCheck");function L(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}f(L,"_defineProperties");function jt(r,t,e){return t&&L(r.prototype,t),e&&L(r,e),Object.defineProperty(r,"prototype",{writable:!1}),r}f(jt,"_createClass");function z(r,t){return Ut(r)||Ft(r,t)||H(r,t)||xt()}f(z,"_slicedToArray");function xt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}f(xt,"_nonIterableRest");function H(r,t){if(!!r){if(typeof r=="string")return j(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return j(r,t)}}f(H,"_unsupportedIterableToArray");function j(r,t){(t==null||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}f(j,"_arrayLikeToArray");function Ft(r,t){var e=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(e!=null){var n=[],o=!0,s=!1,a,i;try{for(e=e.call(r);!(o=(a=e.next()).done)&&(n.push(a.value),!(t&&n.length===t));o=!0);}catch(u){s=!0,i=u}finally{try{!o&&e.return!=null&&e.return()}finally{if(s)throw i}}return n}}f(Ft,"_iterableToArrayLimit");function Ut(r){if(Array.isArray(r))return r}f(Ut,"_arrayWithHoles");var w={CALL:"instrumenter/call",SYNC:"instrumenter/sync",START:"instrumenter/start",BACK:"instrumenter/back",GOTO:"instrumenter/goto",NEXT:"instrumenter/next",END:"instrumenter/end"},X=((P=k.FEATURES)===null||P===void 0?void 0:P.interactionsDebugger)!==!0,K={debugger:!X,start:!1,back:!1,goto:!1,next:!1,end:!1},V=new Error("This function ran after the play function completed. Did you forget to `await` it?"),$=f(function(t){return Object.prototype.toString.call(t)==="[object Object]"},"isObject"),Bt=f(function(t){return Object.prototype.toString.call(t)==="[object Module]"},"isModule"),Gt=f(function(t){if(!$(t)&&!Bt(t))return!1;if(t.constructor===void 0)return!0;var e=t.constructor.prototype;return!(!$(e)||Object.prototype.hasOwnProperty.call(e,"isPrototypeOf")===!1)},"isInstrumentable"),Wt=f(function(t){try{return new t.constructor}catch{return{}}},"construct"),D=f(function(){return{renderPhase:void 0,isDebugging:!1,isPlaying:!1,isLocked:!1,cursor:0,calls:[],shadowCalls:[],callRefsByResult:new Map,chainedCallIds:new Set,parentId:void 0,playUntil:void 0,resolvers:{},syncTimeout:void 0,forwardedException:void 0}},"getInitialState"),Y=f(function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=(e?t.shadowCalls:t.calls).filter(function(s){return s.retain});if(!!n.length){var o=new Map(Array.from(t.callRefsByResult.entries()).filter(function(s){var a=z(s,2),i=a[1];return i.retain}));return{cursor:n.length,calls:n,callRefsByResult:o}}},"getRetainedState"),Lt=function(){function r(){var t=this;Nt(this,r),this.channel=void 0,this.initialized=!1,this.state=void 0,this.channel=ft.getChannel(),this.state=k.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__||{};var e=f(function(c){var l=c.storyId,p=c.isPlaying,h=p===void 0?!0:p,g=c.isDebugging,d=g===void 0?!1:g,y=t.getState(l);t.setState(l,Object.assign({},D(),Y(y,d),{shadowCalls:d?y.shadowCalls:[],chainedCallIds:d?y.chainedCallIds:new Set,playUntil:d?y.playUntil:void 0,isPlaying:h,isDebugging:d})),d||t.sync(l)},"resetState");this.channel.on(B,e),this.channel.on(dt,function(u){var c=u.storyId,l=u.newPhase,p=t.getState(c),h=p.isDebugging,g=p.forwardedException;if(t.setState(c,{renderPhase:l}),l==="playing"&&e({storyId:c,isDebugging:h}),l==="played"&&(t.setState(c,{isLocked:!1,isPlaying:!1,isDebugging:!1,forwardedException:void 0}),g))throw g}),this.channel.on(pt,function(){t.initialized?t.cleanup():t.initialized=!0});var n=f(function(c){var l=c.storyId,p=c.playUntil;t.getState(l).isDebugging||t.setState(l,function(g){var d=g.calls;return{calls:[],shadowCalls:d.map(function(y){return Object.assign({},y,{status:O.WAITING})}),isDebugging:!0}});var h=t.getLog(l);t.setState(l,function(g){var d,y=g.shadowCalls,m=y.findIndex(function(_){return _.id===h[0].callId});return{playUntil:p||((d=y.slice(0,m).filter(function(_){return _.interceptable}).slice(-1)[0])===null||d===void 0?void 0:d.id)}}),t.channel.emit(B,{storyId:l,isDebugging:!0})},"start"),o=f(function(c){var l,p=c.storyId,h=t.getState(p),g=h.isDebugging,d=t.getLog(p),y=g?d.findIndex(function(m){var _=m.status;return _===O.WAITING}):d.length;n({storyId:p,playUntil:(l=d[y-2])===null||l===void 0?void 0:l.callId})},"back"),s=f(function(c){var l=c.storyId,p=c.callId,h=t.getState(l),g=h.calls,d=h.shadowCalls,y=h.resolvers,m=g.find(function(b){var E=b.id;return E===p}),_=d.find(function(b){var E=b.id;return E===p});if(!m&&_&&Object.values(y).length>0){var v,I=(v=t.getLog(l).find(function(b){return b.status===O.WAITING}))===null||v===void 0?void 0:v.callId;_.id!==I&&t.setState(l,{playUntil:_.id}),Object.values(y).forEach(function(b){return b()})}else n({storyId:l,playUntil:p})},"goto"),a=f(function(c){var l=c.storyId,p=t.getState(l),h=p.resolvers;if(Object.values(h).length>0)Object.values(h).forEach(function(y){return y()});else{var g,d=(g=t.getLog(l).find(function(y){return y.status===O.WAITING}))===null||g===void 0?void 0:g.callId;d?n({storyId:l,playUntil:d}):i({storyId:l})}},"next"),i=f(function(c){var l=c.storyId;t.setState(l,{playUntil:void 0,isDebugging:!1}),Object.values(t.getState(l).resolvers).forEach(function(p){return p()})},"end");this.channel.on(w.START,n),this.channel.on(w.BACK,o),this.channel.on(w.GOTO,s),this.channel.on(w.NEXT,a),this.channel.on(w.END,i)}return f(r,"Instrumenter"),jt(r,[{key:"getState",value:f(function(e){return this.state[e]||D()},"getState")},{key:"setState",value:f(function(e,n){var o=this.getState(e),s=typeof n=="function"?n(o):n;this.state=Object.assign({},this.state,A({},e,Object.assign({},o,s))),k.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state},"setState")},{key:"cleanup",value:f(function(){this.state=Object.entries(this.state).reduce(function(e,n){var o=z(n,2),s=o[0],a=o[1],i=Y(a);return i&&(e[s]=Object.assign(D(),i)),e},{}),this.channel.emit(w.SYNC,{controlStates:K,logItems:[]}),k.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state},"cleanup")},{key:"getLog",value:f(function(e){var n=this.getState(e),o=n.calls,s=n.shadowCalls,a=M(s);o.forEach(function(u,c){a[c]=u});var i=new Set;return a.reduceRight(function(u,c){return c.args.forEach(function(l){l!=null&&l.__callId__&&i.add(l.__callId__)}),c.path.forEach(function(l){l.__callId__&&i.add(l.__callId__)}),c.interceptable&&!i.has(c.id)&&(u.unshift({callId:c.id,status:c.status}),i.add(c.id)),u},[])},"getLog")},{key:"instrument",value:f(function(e,n){var o=this;if(!Gt(e))return e;var s=n.mutate,a=s===void 0?!1:s,i=n.path,u=i===void 0?[]:i;return Object.keys(e).reduce(function(c,l){var p=e[l];return typeof p!="function"?(c[l]=o.instrument(p,Object.assign({},n,{path:u.concat(l)})),c):typeof p.__originalFn__=="function"?(c[l]=p,c):(c[l]=function(){for(var h=arguments.length,g=new Array(h),d=0;d<h;d++)g[d]=arguments[d];return o.track(l,p,g,n)},c[l].__originalFn__=p,Object.defineProperty(c[l],"name",{value:l,writable:!1}),Object.keys(p).length>0&&Object.assign(c[l],o.instrument(Object.assign({},p),Object.assign({},n,{path:u.concat(l)}))),c)},a?e:Wt(e))},"instrument")},{key:"track",value:f(function(e,n,o,s){var a,i,u,c,l=(o==null||(a=o[0])===null||a===void 0?void 0:a.__storyId__)||((i=k.window.__STORYBOOK_PREVIEW__)===null||i===void 0||(u=i.urlStore)===null||u===void 0||(c=u.selection)===null||c===void 0?void 0:c.storyId),p=this.getState(l),h=p.cursor,g=p.parentId;this.setState(l,{cursor:h+1});var d="".concat(g||l," [").concat(h,"] ").concat(e),y=s.path,m=y===void 0?[]:y,_=s.intercept,v=_===void 0?!1:_,I=s.retain,b=I===void 0?!1:I,E=typeof v=="function"?v(e,m):v,U={id:d,parentId:g,storyId:l,cursor:h,path:m,method:e,args:o,interceptable:E,retain:b},et=(E?this.intercept:this.invoke).call(this,n,U,s);return this.instrument(et,Object.assign({},s,{mutate:!0,path:[{__callId__:U.id}]}))},"track")},{key:"intercept",value:f(function(e,n,o){var s=this,a=this.getState(n.storyId),i=a.chainedCallIds,u=a.isDebugging,c=a.playUntil,l=i.has(n.id);return!u||l||c?(c===n.id&&this.setState(n.storyId,{playUntil:void 0}),this.invoke(e,n,o)):new Promise(function(p){s.setState(n.storyId,function(h){var g=h.resolvers;return{isLocked:!1,resolvers:Object.assign({},g,A({},n.id,p))}})}).then(function(){return s.setState(n.storyId,function(p){var h=p.resolvers,g=n.id;h[g];var d=Rt(h,[g].map(Tt));return{isLocked:!0,resolvers:d}}),s.invoke(e,n,o)})},"intercept")},{key:"invoke",value:f(function(e,n,o){var s=this,a=this.getState(n.storyId),i=a.callRefsByResult,u=a.forwardedException,c=a.renderPhase,l=Object.assign({},n,{args:n.args.map(function(d){if(i.has(d))return i.get(d);if(d instanceof k.window.HTMLElement){var y=d.prefix,m=d.localName,_=d.id,v=d.classList,I=d.innerText,b=Array.from(v);return{__element__:{prefix:y,localName:m,id:_,classNames:b,innerText:I}}}return d})});n.path.forEach(function(d){d!=null&&d.__callId__&&s.setState(n.storyId,function(y){var m=y.chainedCallIds;return{chainedCallIds:new Set(Array.from(m).concat(d.__callId__))}})});var p=f(function(y){if(y instanceof Error){var m=y.name,_=y.message,v=y.stack,I={name:m,message:_,stack:v};if(s.update(Object.assign({},l,{status:O.ERROR,exception:I})),s.setState(n.storyId,function(b){return{callRefsByResult:new Map([].concat(M(Array.from(b.callRefsByResult.entries())),[[y,{__callId__:n.id,retain:n.retain}]]))}}),n.interceptable&&y!==V)throw yt;return s.setState(n.storyId,{forwardedException:y}),y}throw y},"handleException");try{if(u)throw this.setState(n.storyId,{forwardedException:void 0}),u;if(c==="played"&&!n.retain)throw V;var h=o.getArgs?o.getArgs(n,this.getState(n.storyId)):n.args,g=e.apply(void 0,M(h.map(function(d){return typeof d!="function"||Object.keys(d).length?d:function(){var y=s.getState(n.storyId),m=y.cursor,_=y.parentId;s.setState(n.storyId,{cursor:0,parentId:n.id});var v=f(function(){return s.setState(n.storyId,{cursor:m,parentId:_})},"restore"),I=d.apply(void 0,arguments);return I instanceof Promise?I.then(v,v):v(),I}})));return g&&["object","function","symbol"].includes(R(g))&&this.setState(n.storyId,function(d){return{callRefsByResult:new Map([].concat(M(Array.from(d.callRefsByResult.entries())),[[g,{__callId__:n.id,retain:n.retain}]]))}}),this.update(Object.assign({},l,{status:g instanceof Promise?O.ACTIVE:O.DONE})),g instanceof Promise?g.then(function(d){return s.update(Object.assign({},l,{status:O.DONE})),d},p):g}catch(d){return p(d)}},"invoke")},{key:"update",value:f(function(e){var n=this;clearTimeout(this.getState(e.storyId).syncTimeout),this.channel.emit(w.CALL,e),this.setState(e.storyId,function(o){var s=o.calls,a=s.concat(e).reduce(function(i,u){return Object.assign(i,A({},u.id,u))},{});return{calls:Object.values(a).sort(function(i,u){return i.id.localeCompare(u.id,void 0,{numeric:!0})}),syncTimeout:setTimeout(function(){return n.sync(e.storyId)},0)}})},"update")},{key:"sync",value:f(function(e){var n=this.getState(e),o=n.isLocked,s=n.isPlaying,a=this.getLog(e),i=a.some(function(l){return l.status===O.ACTIVE});if(X||o||i||a.length===0){this.channel.emit(w.SYNC,{controlStates:K,logItems:a});return}var u=a.some(function(l){return[O.DONE,O.ERROR].includes(l.status)}),c={debugger:!0,start:u,back:u,goto:!0,next:s,end:s};this.channel.emit(w.SYNC,{controlStates:c,logItems:a})},"sync")}]),r}();function te(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};try{var e,n,o,s,a=!1,i=!1;if(((e=k.window.location)===null||e===void 0||(n=e.search)===null||n===void 0?void 0:n.indexOf("instrument=true"))!==-1?a=!0:((o=k.window.location)===null||o===void 0||(s=o.search)===null||s===void 0?void 0:s.indexOf("instrument=false"))!==-1&&(i=!0),k.window.parent===k.window&&!a||i)return r;k.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__||(k.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__=new Lt);var u=k.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__;return u.instrument(r,t)}catch(c){return ct.warn(c),r}}f(te,"instrument");var S={};Object.defineProperty(S,"__esModule",{value:!0});var J=S.spyOn=tt=S.mocked=Z=S.fn=q=S.ModuleMocker=void 0;function T(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}f(T,"_defineProperty");const N="mockConstructor",Q=/[\s!-\/:-@\[-`{-~]/,Kt=new RegExp(Q.source,"g"),Vt=new Set(["arguments","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","eval","export","extends","false","finally","for","function","if","implements","import","in","instanceof","interface","let","new","null","package","private","protected","public","return","static","super","switch","this","throw","true","try","typeof","var","void","while","with","yield"]);function $t(r,t){let e;switch(t){case 1:e=f(function(n){return r.apply(this,arguments)},"mockConstructor");break;case 2:e=f(function(n,o){return r.apply(this,arguments)},"mockConstructor");break;case 3:e=f(function(n,o,s){return r.apply(this,arguments)},"mockConstructor");break;case 4:e=f(function(n,o,s,a){return r.apply(this,arguments)},"mockConstructor");break;case 5:e=f(function(n,o,s,a,i){return r.apply(this,arguments)},"mockConstructor");break;case 6:e=f(function(n,o,s,a,i,u){return r.apply(this,arguments)},"mockConstructor");break;case 7:e=f(function(n,o,s,a,i,u,c){return r.apply(this,arguments)},"mockConstructor");break;case 8:e=f(function(n,o,s,a,i,u,c,l){return r.apply(this,arguments)},"mockConstructor");break;case 9:e=f(function(n,o,s,a,i,u,c,l,p){return r.apply(this,arguments)},"mockConstructor");break;default:e=f(function(){return r.apply(this,arguments)},"mockConstructor");break}return e}f($t,"matchArity");function x(r){return Object.prototype.toString.apply(r).slice(8,-1)}f(x,"getObjectType");function Yt(r){const t=x(r);return t==="Function"||t==="AsyncFunction"||t==="GeneratorFunction"?"function":Array.isArray(r)?"array":t==="Object"?"object":t==="Number"||t==="String"||t==="Boolean"||t==="Symbol"?"constant":t==="Map"||t==="WeakMap"||t==="Set"?"collection":t==="RegExp"?"regexp":r===void 0?"undefined":r===null?"null":null}f(Yt,"getType");function zt(r,t){if(t==="arguments"||t==="caller"||t==="callee"||t==="name"||t==="length"){const e=x(r);return e==="Function"||e==="AsyncFunction"||e==="GeneratorFunction"}return t==="source"||t==="global"||t==="ignoreCase"||t==="multiline"?x(r)==="RegExp":!1}f(zt,"isReadonlyProp");class F{constructor(t){T(this,"_environmentGlobal",void 0),T(this,"_mockState",void 0),T(this,"_mockConfigRegistry",void 0),T(this,"_spyState",void 0),T(this,"_invocationCallCounter",void 0),this._environmentGlobal=t,this._mockState=new WeakMap,this._mockConfigRegistry=new WeakMap,this._spyState=new Set,this._invocationCallCounter=1}_getSlots(t){if(!t)return[];const e=new Set,n=this._environmentGlobal.Object.prototype,o=this._environmentGlobal.Function.prototype,s=this._environmentGlobal.RegExp.prototype,a=Object.prototype,i=Function.prototype,u=RegExp.prototype;for(;t!=null&&t!==n&&t!==o&&t!==s&&t!==a&&t!==i&&t!==u;){const c=Object.getOwnPropertyNames(t);for(let l=0;l<c.length;l++){const p=c[l];if(!zt(t,p)){const h=Object.getOwnPropertyDescriptor(t,p);(h!==void 0&&!h.get||t.__esModule)&&e.add(p)}}t=Object.getPrototypeOf(t)}return Array.from(e)}_ensureMockConfig(t){let e=this._mockConfigRegistry.get(t);return e||(e=this._defaultMockConfig(),this._mockConfigRegistry.set(t,e)),e}_ensureMockState(t){let e=this._mockState.get(t);return e||(e=this._defaultMockState(),this._mockState.set(t,e)),e.calls.length>0&&(e.lastCall=e.calls[e.calls.length-1]),e}_defaultMockConfig(){return{mockImpl:void 0,mockName:"jest.fn()",specificMockImpls:[],specificReturnValues:[]}}_defaultMockState(){return{calls:[],instances:[],invocationCallOrder:[],results:[]}}_makeComponent(t,e){if(t.type==="object")return new this._environmentGlobal.Object;if(t.type==="array")return new this._environmentGlobal.Array;if(t.type==="regexp")return new this._environmentGlobal.RegExp("");if(t.type==="constant"||t.type==="collection"||t.type==="null"||t.type==="undefined")return t.value;if(t.type==="function"){const n=t.members&&t.members.prototype&&t.members.prototype.members||{},o=this._getSlots(n),s=this,a=$t(function(...u){const c=s._ensureMockState(i),l=s._ensureMockConfig(i);c.instances.push(this),c.calls.push(u);const p={type:"incomplete",value:void 0};c.results.push(p),c.invocationCallOrder.push(s._invocationCallCounter++);let h,g,d=!1;try{h=(()=>{if(this instanceof i){o.forEach(_=>{if(n[_].type==="function"){const v=this[_];this[_]=s.generateFromMetadata(n[_]),this[_]._protoImpl=v}});const m=l.specificMockImpls.length?l.specificMockImpls.shift():l.mockImpl;return m&&m.apply(this,arguments)}let y=l.specificMockImpls.shift();if(y===void 0&&(y=l.mockImpl),y)return y.apply(this,arguments);if(i._protoImpl)return i._protoImpl.apply(this,arguments)})()}catch(y){throw g=y,d=!0,y}finally{p.type=d?"throw":"return",p.value=d?g:h}return h},t.length||0),i=this._createMockFunction(t,a);return i._isMockFunction=!0,i.getMockImplementation=()=>this._ensureMockConfig(i).mockImpl,typeof e=="function"&&this._spyState.add(e),this._mockState.set(i,this._defaultMockState()),this._mockConfigRegistry.set(i,this._defaultMockConfig()),Object.defineProperty(i,"mock",{configurable:!1,enumerable:!0,get:()=>this._ensureMockState(i),set:u=>this._mockState.set(i,u)}),i.mockClear=()=>(this._mockState.delete(i),i),i.mockReset=()=>(i.mockClear(),this._mockConfigRegistry.delete(i),i),i.mockRestore=()=>(i.mockReset(),e?e():void 0),i.mockReturnValueOnce=u=>i.mockImplementationOnce(()=>u),i.mockResolvedValueOnce=u=>i.mockImplementationOnce(()=>Promise.resolve(u)),i.mockRejectedValueOnce=u=>i.mockImplementationOnce(()=>Promise.reject(u)),i.mockReturnValue=u=>i.mockImplementation(()=>u),i.mockResolvedValue=u=>i.mockImplementation(()=>Promise.resolve(u)),i.mockRejectedValue=u=>i.mockImplementation(()=>Promise.reject(u)),i.mockImplementationOnce=u=>(this._ensureMockConfig(i).specificMockImpls.push(u),i),i.mockImplementation=u=>{const c=this._ensureMockConfig(i);return c.mockImpl=u,i},i.mockReturnThis=()=>i.mockImplementation(function(){return this}),i.mockName=u=>{if(u){const c=this._ensureMockConfig(i);c.mockName=u}return i},i.getMockName=()=>this._ensureMockConfig(i).mockName||"jest.fn()",t.mockImpl&&i.mockImplementation(t.mockImpl),i}else{const n=t.type||"undefined type";throw new Error("Unrecognized type "+n)}}_createMockFunction(t,e){let n=t.name;if(!n)return e;const o="bound ";let s="";if(n&&n.startsWith(o))do n=n.substring(o.length),s=".bind(null)";while(n&&n.startsWith(o));if(n===N)return e;(Vt.has(n)||/^\d/.test(n))&&(n="$"+n),Q.test(n)&&(n=n.replace(Kt,"$"));const a="return function "+n+"() {return "+N+".apply(this,arguments);}"+s;return new this._environmentGlobal.Function(N,a)(e)}_generateMock(t,e,n){const o=this._makeComponent(t);return t.refID!=null&&(n[t.refID]=o),this._getSlots(t.members).forEach(s=>{const a=t.members&&t.members[s]||{};a.ref!=null?e.push(function(i){return()=>o[s]=n[i]}(a.ref)):o[s]=this._generateMock(a,e,n)}),t.type!=="undefined"&&t.type!=="null"&&o.prototype&&typeof o.prototype=="object"&&(o.prototype.constructor=o),o}generateFromMetadata(t){const e=[],n={},o=this._generateMock(t,e,n);return e.forEach(s=>s()),o}getMetadata(t,e){const n=e||new Map,o=n.get(t);if(o!=null)return{ref:o};const s=Yt(t);if(!s)return null;const a={type:s};if(s==="constant"||s==="collection"||s==="undefined"||s==="null")return a.value=t,a;s==="function"&&(a.name=t.name,t._isMockFunction===!0&&(a.mockImpl=t.getMockImplementation())),a.refID=n.size,n.set(t,a.refID);let i=null;return s!=="array"&&this._getSlots(t).forEach(u=>{if(s==="function"&&t._isMockFunction===!0&&u.match(/^mock/))return;const c=this.getMetadata(t[u],n);c&&(i||(i={}),i[u]=c)}),i&&(a.members=i),a}isMockFunction(t){return!!t&&t._isMockFunction===!0}fn(t){const e=t?t.length:0,n=this._makeComponent({length:e,type:"function"});return t&&n.mockImplementation(t),n}spyOn(t,e,n){if(n)return this._spyOnProperty(t,e,n);if(typeof t!="object"&&typeof t!="function")throw new Error("Cannot spyOn on a primitive value; "+this._typeOf(t)+" given");const o=t[e];if(!this.isMockFunction(o)){if(typeof o!="function")throw new Error("Cannot spy the "+e+" property because it is not a function; "+this._typeOf(o)+" given instead");const s=Object.prototype.hasOwnProperty.call(t,e);let a=Object.getOwnPropertyDescriptor(t,e),i=Object.getPrototypeOf(t);for(;!a&&i!==null;)a=Object.getOwnPropertyDescriptor(i,e),i=Object.getPrototypeOf(i);let u;if(a&&a.get){const c=a.get;u=this._makeComponent({type:"function"},()=>{a.get=c,Object.defineProperty(t,e,a)}),a.get=()=>u,Object.defineProperty(t,e,a)}else u=this._makeComponent({type:"function"},()=>{s?t[e]=o:delete t[e]}),t[e]=u;u.mockImplementation(function(){return o.apply(this,arguments)})}return t[e]}_spyOnProperty(t,e,n="get"){if(typeof t!="object"&&typeof t!="function")throw new Error("Cannot spyOn on a primitive value; "+this._typeOf(t)+" given");if(!t)throw new Error("spyOn could not find an object to spy upon for "+e);if(!e)throw new Error("No property name supplied");let o=Object.getOwnPropertyDescriptor(t,e),s=Object.getPrototypeOf(t);for(;!o&&s!==null;)o=Object.getOwnPropertyDescriptor(s,e),s=Object.getPrototypeOf(s);if(!o)throw new Error(e+" property does not exist");if(!o.configurable)throw new Error(e+" is not declared configurable");if(!o[n])throw new Error("Property "+e+" does not have access type "+n);const a=o[n];if(!this.isMockFunction(a)){if(typeof a!="function")throw new Error("Cannot spy the "+e+" property because it is not a function; "+this._typeOf(a)+" given instead");o[n]=this._makeComponent({type:"function"},()=>{o[n]=a,Object.defineProperty(t,e,o)}),o[n].mockImplementation(function(){return a.apply(this,arguments)})}return Object.defineProperty(t,e,o),o[n]}clearAllMocks(){this._mockState=new WeakMap}resetAllMocks(){this._mockConfigRegistry=new WeakMap,this._mockState=new WeakMap}restoreAllMocks(){this._spyState.forEach(t=>t()),this._spyState=new Set}_typeOf(t){return t==null?""+t:typeof t}mocked(t,e=!1){return t}}f(F,"ModuleMocker");var q=S.ModuleMocker=F;const C=new F(gt),Ht=C.fn.bind(C);var Z=S.fn=Ht;const Xt=C.spyOn.bind(C);J=S.spyOn=Xt;const Jt=C.mocked.bind(C);var tt=S.mocked=Jt;const ee=ht({__proto__:null,get spyOn(){return J},get mocked(){return tt},get fn(){return Z},get ModuleMocker(){return q},default:S},[S]);export{q as M,te as i,ee as m};
//# sourceMappingURL=index.ed81441f.js.map
