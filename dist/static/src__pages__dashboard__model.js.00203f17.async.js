webpackJsonp([18],{"5vWI":function(e,t,a){"use strict";a.d(t,"a",function(){return u}),a.d(t,"b",function(){return o});var n=a("vVw/"),r=a.n(n),c=a("ypbd"),s=a.n(c),u={reducers:{updateState:function(e,t){var a=t.payload;return r()({},e,a)}}},o=s()(u,{state:{list:[],pagination:{showSizeChanger:!0,showQuickJumper:!0,showTotal:function(e){return"Total ".concat(e," Items")},current:1,total:0,pageSize:10}},reducers:{querySuccess:function(e,t){var a=t.payload,n=a.list,c=a.pagination;return r()({},e,{list:n,pagination:r()({},e.pagination,c)})}}})},GEY2:function(e,t,a){"use strict";function n(e){return Object(d.f)({url:f,method:"get",data:e})}function r(e){return e.key="i7sau1babuzwhycn",Object(d.f)({url:"".concat(b,"/weather/now.json"),method:"get",data:e})}Object.defineProperty(t,"__esModule",{value:!0});var c=a("UVnk"),s=a.n(c),u=a("6iV/"),o=a("ypbd"),i=a.n(o),d=a("0xDb"),p=d.d.api,f=p.dashboard,l=a("5vWI"),b=d.d.APIV1;t.default=i()(l.a,{namespace:"dashboard",state:{weather:{city:"\u6df1\u5733",temperature:"30",name:"\u6674",icon:"//s5.sencdn.com/web/icons/3d_50/2.png"},sales:[],quote:{avatar:"http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236"},numbers:[],recentSales:[],comments:[],completed:[],browser:[],cpu:{},user:{avatar:"http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236"}},subscriptions:{setup:function(e){var t=e.dispatch;e.history.listen(function(e){var a=e.pathname;"/dashboard"!==a&&"/"!==a||(t({type:"query"}),t({type:"queryWeather"}))})}},effects:{query:s.a.mark(function e(t,a){var r,c,o,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,c=a.call,o=a.put,e.next=4,c(n,Object(u.parse)(r));case 4:return i=e.sent,e.next=7,o({type:"updateState",payload:i});case 7:case"end":return e.stop()}},e,this)}),queryWeather:s.a.mark(function e(t,a){var n,c,u,o,i,d,p,f;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,c=void 0===n?{}:n,u=a.call,o=a.put,c.location="shenzhen",e.next=5,u(r,c);case 5:if(i=e.sent,!(d=i.success)){e.next=12;break}return p=i.results[0],f={city:p.location.name,temperature:p.now.temperature,name:p.now.text,icon:"//s5.sencdn.com/web/icons/3d_50/".concat(p.now.code,".png")},e.next=12,o({type:"updateState",payload:{weather:f}});case 12:case"end":return e.stop()}},e,this)})}})},ypbd:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(){for(var e={state:{},subscriptions:{},effects:{},reducers:{}},t=[],a={},n=[],r={},c=[],u={},p=[],f={},l=arguments.length,b=Array(l),h=0;h<l;h++)b[h]=arguments[h];var y=b.reduce(function(e,d){return e.namespace=d.namespace,"object"!==(0,o.default)(d.state)||Array.isArray(d.state)?"state"in d&&(e.state=d.state):(i(d.state,t,a),(0,s.default)(e.state,d.state)),i(d.subscriptions,n,r),(0,s.default)(e.subscriptions,d.subscriptions),i(d.effects,c,u),(0,s.default)(e.effects,d.effects),i(d.reducers,p,f),(0,s.default)(e.reducers,d.reducers),e},e);return d(y,"state",a),d(y,"subscriptions",r),d(y,"effects",u),d(y,"reducers",f),y}Object.defineProperty(t,"__esModule",{value:!0});var c=a("aA9S"),s=n(c),u=a("hRKE"),o=n(u);t.default=r;var i=function(e,t,a){},d=function(e,t,a){}}});