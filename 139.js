webpackJsonp([139,91],{1:function(t,e){t.exports=function(t,e,o,n){var r,a=t=t||{},l=typeof t["default"];"object"!==l&&"function"!==l||(r=t,a=t["default"]);var s="function"==typeof a?a.options:a;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),o&&(s._scopeId=o),n){var c=Object.create(s.computed||null);Object.keys(n).forEach(function(t){var e=n[t];c[t]=function(){return e}}),s.computed=c}return{esModule:r,exports:a,options:s}}},426:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{model:2}},methods:{showTotal1:function(t){return"Total "+t+" items"},showTotal2:function(t,e){return e[0]+"-"+e[1]+" of "+t+" items"}}},t.exports=e["default"]},1237:function(t,e,o){var n=o(1)(o(426),o(1350),null,null);t.exports=n.exports},1350:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("v-pagination",{attrs:{total:50,showTotal:t.showTotal1},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}}),o("br"),o("v-pagination",{attrs:{total:50,showTotal:t.showTotal2},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1)},staticRenderFns:[]}}});