(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3],{1045:function(e,t,n){"use strict";var r=n(154),i=n(58),a=n(686),o=n(64),s=n(339),l=n(687);function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){function t(t){var n;c(u(n=e.call(this,(function(e){return n.format(e)}))||this),"id",void 0),c(u(n),"label",void 0),c(u(n),"description",void 0),c(u(n),"formatFunc",void 0),c(u(n),"isInvalid",void 0);var r=t.id,i=void 0===r?Object(s.a)("config.id"):r,a=t.label,o=t.description,l=void 0===o?"":o,p=t.formatFunc,d=void 0===p?Object(s.a)("config.formatFunc"):p,f=t.isInvalid;return n.id=i,n.label=a||i,n.description=l,n.formatFunc=d,n.isInvalid=void 0!==f&&f,n}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e);var n=t.prototype;return n.format=function(e){return null==e||Number.isNaN(e)?""+e:e===Number.POSITIVE_INFINITY?"∞":e===Number.NEGATIVE_INFINITY?"-∞":this.formatFunc(e)},n.preview=function(e){return void 0===e&&(e=12345.432),e+" => "+this.format(e)},t}(l.a);var d={DOLLAR:"$,.2f",DOLLAR_ROUND:"$,d",DOLLAR_ROUND_SIGNED:"+$,d",DOLLAR_SIGNED:"+$,.2f",FLOAT:",.2f",FLOAT_1_POINT:",.1f",FLOAT_2_POINT:",.2f",FLOAT_3_POINT:",.3f",FLOAT_SIGNED:"+,.2f",FLOAT_SIGNED_1_POINT:"+,.1f",FLOAT_SIGNED_2_POINT:"+,.2f",FLOAT_SIGNED_3_POINT:"+,.3f",INTEGER:",d",INTEGER_SIGNED:"+,d",PERCENT:",.2%",PERCENT_1_POINT:",.1%",PERCENT_2_POINT:",.2%",PERCENT_3_POINT:",.3%",PERCENT_SIGNED:"+,.2%",PERCENT_SIGNED_1_POINT:"+,.1%",PERCENT_SIGNED_2_POINT:"+,.2%",PERCENT_SIGNED_3_POINT:"+,.3%",SI:".3s",SI_1_DIGIT:".1s",SI_2_DIGIT:".2s",SI_3_DIGIT:".3s",SMART_NUMBER:"SMART_NUMBER",SMART_NUMBER_SIGNED:"SMART_NUMBER_SIGNED"},f=Object(o.a)(".3~s"),h=Object(o.a)(".2~f"),m=Object(o.a)(".4~f");function g(e){void 0===e&&(e={});var t=e,n=t.description,r=t.signed,i=void 0!==r&&r,a=t.id,o=t.label,s=i?function(e){return 0<e?"+":""}:function(){return""};return new p({description:n,formatFunc:function(e){return""+s(e)+function(e){if(0===e)return"0";var t=Math.abs(e);return 1e3<=t?f(e).replace("G","B"):1<=t?h(e):.001<=t?m(e):1e-6<t?f(1e6*e)+"µ":f(e)}(e)},id:a||i?d.SMART_NUMBER_SIGNED:d.SMART_NUMBER,label:o||"Adaptive formatter"})}var v=function(e){function t(){var t;return(t=e.call(this,{name:"NumberFormatter",overwritePolicy:i.a.WARN})||this).registerValue(d.SMART_NUMBER,g()),t.registerValue(d.SMART_NUMBER_SIGNED,g({signed:!0})),t.setDefaultKey(d.SMART_NUMBER),t}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e);var n=t.prototype;return n.get=function(t){var n=(""+(t||this.defaultKey)).trim();if(this.has(n))return e.prototype.get.call(this,n);var r=function(e){var t,n=e.description,r=e.formatString,i=void 0===r?Object(s.a)("config.formatString"):r,a=e.label,l=e.locale,u=!1;try{t=void 0===l?Object(o.a)(i):Object(o.b)(l).format(i)}catch(e){t=function(e){return e+" (Invalid format: "+i+")"},u=!0}return new p({description:n,formatFunc:t,id:i,isInvalid:u,label:a})}({formatString:n});return this.registerValue(n,r),r},n.format=function(e,t){return this.get(e)(t)},t}(a.a);n.d(t,"a",(function(){return y}));var b=Object(r.a)(v);function y(e,t){return b().format(e,t)}},718:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return f}));var r=n(944),i=n(717),a=n(719);function o(){return(o=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}var s=.25,l={LAT_MAX:90,LAT_MIN:-90,LNG_MAX:180,LNG_MIN:-180};function u(e){var t=i.extent(e,(function(e){return e[1]})),n=i.extent(e,(function(e){return e[0]})),r=t[0]===t[1]?function(e){return[e[0]-s<l.LAT_MIN?l.LAT_MIN:e[0]-s,e[1]+s>l.LAT_MAX?l.LAT_MAX:e[1]+s]}(t):t,a=n[0]===n[1]?function(e){return[e[0]-s<l.LNG_MIN?l.LNG_MIN:e[0]-s,e[1]+s>l.LNG_MAX?l.LNG_MAX:e[1]+s]}(n):n;return[[a[0],r[0]],[a[1],r[1]]]}function c(e,t,n){void 0===n&&(n=10);try{var i=u(t);return o({},e,{},Object(r.a)({bounds:i,height:e.height,padding:n,width:e.width}))}catch(t){return console.error("Could not auto zoom",t),e}}function p(e,t,n,r){var i,o,s=e,l=n;return s.js_tooltip&&(l=Object(a.a)(s.js_tooltip)),l&&(i=function(e){e.picked?t({content:l(e),x:e.x,y:e.y}):t(null)}),s.js_onclick_href?o=function(e){var t=Object(a.a)(s.js_onclick_href)(e);window.open(t)}:s.table_filter&&void 0!==r&&(o=function(e){return r(e.object[s.line_column])}),{onClick:o,onHover:i,pickable:!!i}}var d={p1:.01,p5:.05,p95:.95,p99:.99};function f(e,t){return void 0===e&&(e="sum"),void 0===t&&(t=null),"count"===e?function(e){return e.length}:(n=e in d?function(n,r){var a;return a=t?n.sort((function(e,n){return i.ascending(t(e),t(n))})):n.sort(i.ascending),i.quantile(a,d[e],r)}:i[e],t?function(e){return n(e.map(t))}:function(e){return n(e)});var n}},719:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(772),i=n.n(r),a=n(773),o=n.n(a),s=n(717),l=n(723);function u(){return(u=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}var c={console:console,_:o.a,colors:l,d3array:s};function p(e,t,n){var r={},a="SAFE_EVAL_"+Math.floor(1e6*Math.random());r[a]={};var o=u({},c,{},t);Object.keys(o).forEach((function(e){r[e]=o[e]}));try{return i.a.runInNewContext(a+"="+e,r,n),r[a]}catch(e){return function(){return e}}}},723:function(e,t,n){"use strict";n.r(t),n.d(t,"hexToRGB",(function(){return i}));var r=n(26);function i(e,t){if(void 0===t&&(t=255),!e)return[0,0,0,t];var n=Object(r.g)(e);return[n.r,n.g,n.b,t]}},724:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),i=n.n(r),a=n(1),o=n.n(a);var s={label:o.a.string.isRequired,value:o.a.string.isRequired},l=function(e){function t(){return e.apply(this,arguments)||this}return function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e),t.prototype.render=function(){var e=this.props,t=e.label,n=e.value;return i.a.createElement("div",null,t,i.a.createElement("strong",null,n))},t}(i.a.PureComponent);l.propTypes=s},727:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),i=n.n(r),a=n(1),o=n.n(a),s=n(783),l=n(1073);n(774),n(741);function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=250,p={viewport:o.a.object.isRequired,layers:o.a.array.isRequired,setControlValue:o.a.func,mapStyle:o.a.string,mapboxApiAccessToken:o.a.string.isRequired,children:o.a.node,bottomMargin:o.a.number,width:o.a.number.isRequired,height:o.a.number.isRequired},d=function(e){function t(t){var n;return(n=e.call(this,t)||this).tick=n.tick.bind(u(n)),n.onViewStateChange=n.onViewStateChange.bind(u(n)),n.state={timer:setInterval(n.tick,c),viewState:t.viewport},n}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e);var n=t.prototype;return n.componentWillUnmount=function(){clearInterval(this.state.timer)},n.onViewStateChange=function(e){var t=e.viewState;this.setState({viewState:t,lastUpdate:Date.now()})},n.tick=function(){var e=this.state.lastUpdate;if(e&&Date.now()-e>c){var t=this.props.setControlValue;t&&t("viewport",this.state.viewState),this.setState({lastUpdate:null})}},n.layers=function(){return this.props.layers.some((function(e){return"function"==typeof e}))?this.props.layers.map((function(e){return"function"==typeof e?e():e})):this.props.layers},n.render=function(){var e=this.props,t=e.children,n=e.bottomMargin,r=e.height,a=e.width,o=this.state.viewState,u=r-n,c=this.layers();return i.a.createElement("div",{style:{position:"relative",width:a,height:u}},i.a.createElement(l.a,{width:a,height:u,layers:c,viewState:o,onViewStateChange:this.onViewStateChange,initWebGLParameters:!0,controller:!0},i.a.createElement(s.a,{mapStyle:this.props.mapStyle,mapboxApiAccessToken:this.props.mapboxApiAccessToken})),t)},t}(i.a.Component);d.propTypes=p,d.defaultProps={mapStyle:"light",setControlValue:function(){},children:null,bottomMargin:0}},733:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),i=n.n(r),a=n(1),o=n.n(a),s=n(1045);n(737);var l={categories:o.a.object,toggleCategory:o.a.func,showSingleCategory:o.a.func,format:o.a.string,position:o.a.oneOf([null,"tl","tr","bl","br"])},u=function(e){function t(){return e.apply(this,arguments)||this}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e);var n=t.prototype;return n.format=function(e){if(!this.props.format)return e;var t=parseFloat(e);return Object(s.a)(this.props.format,t)},n.formatCategoryLabel=function(e){if(!this.props.format)return e;if(e.includes(" - ")){var t=e.split(" - ");return this.format(t[0])+" - "+this.format(t[1])}return this.format(e)},n.render=function(){var e,t=this;if(0===Object.keys(this.props.categories).length||null===this.props.position)return null;var n=Object.entries(this.props.categories).map((function(e){var n=e[0],r=e[1],a={color:"rgba("+r.color.join(", ")+")"},o=r.enabled?"◼":"◻";return i.a.createElement("li",{key:n},i.a.createElement("a",{href:"#",onClick:function(){return t.props.toggleCategory(n)},onDoubleClick:function(){return t.props.showSingleCategory(n)}},i.a.createElement("span",{style:a},o)," ",t.formatCategoryLabel(n)))})),r="t"===this.props.position.charAt(0)?"top":"bottom",a="r"===this.props.position.charAt(1)?"right":"left",o=((e={position:"absolute"})[r]="0px",e[a]="10px",e);return i.a.createElement("div",{className:"legend",style:o},i.a.createElement("ul",{className:"categories"},n))},t}(i.a.PureComponent);u.propTypes=l,u.defaultProps={categories:{},toggleCategory:function(){},showSingleCategory:function(){},format:null,position:"tr"}},734:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(799),i=n.n(r),a=[1,0,1,0,0,0,0];function o(e,t){var n=parseInt(i()(t).format("x"),10);return parseInt(i()(t).add(e).format("x"),10)-n}function s(e,t){var n,r,s=i()(Math.min.apply(Math,e)),l=i()(Math.max.apply(Math,e));if(-1!==t.indexOf("/")){var u=t.split("/",2);u[0].endsWith("Z")?(r=i()(u[0]),n=i.a.duration(u[1])):(r=i()(u[1]),n=i.a.duration(u[0]))}else r=function(e,t){var n=i()(e).subtract(t),r=e.toArray(),o=n.toArray(),s=r.map((function(e,t){return o[t]!==e})).indexOf(!0),l=r.map((function(e,t){if(t===s){var n=e-o[t];return e-(e-a[t])%n}return t<s||-1===s?e:a[t]}));return i()(l)}(s,n=i.a.duration(t));var c,p=s.valueOf();for(c=r.clone();c.valueOf()<p;)c.add(n);for(;c.valueOf()>p;)c.subtract(n);var d,f=l.valueOf();for(d=r.clone();d.valueOf()>f;)d.subtract(n);for(;d.valueOf()<f;)d.add(n);var h=null==t?[c,d]:[c,c.clone().add(n)],m=e.every((function(e){return null===e}));return{start:parseInt(c.format("x"),10),end:parseInt(d.format("x"),10),getStep:o.bind(this,n),values:h.map((function(e){return parseInt(e.format("x"),10)})),disabled:m}}},736:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(1),o=n.n(a),s=n(727),l=n(792),u=n.n(l),c=n(690),p=n(793),d=n.n(p);n(798),n(752);function f(e){return i.a.createElement("span",{className:"BootstrapSliderWrapper"},i.a.createElement(d.a,e))}n(754);function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m={start:o.a.number.isRequired,step:o.a.number.isRequired,end:o.a.number.isRequired,values:o.a.array.isRequired,onChange:o.a.func,loopDuration:o.a.number,maxFrames:o.a.number,orientation:o.a.oneOf(["horizontal","vertical"]),reversed:o.a.bool,disabled:o.a.bool,range:o.a.bool},g=function(e){function t(t){var n;(n=e.call(this,t)||this).state={intervalId:null};var r=t.end-t.start,i=Math.min(t.maxFrames,r/t.step),a=r/i;return n.intervalMilliseconds=t.loopDuration/i,n.increment=a<t.step?t.step:a-a%t.step,n.onChange=n.onChange.bind(h(n)),n.play=n.play.bind(h(n)),n.pause=n.pause.bind(h(n)),n.stepBackward=n.stepBackward.bind(h(n)),n.stepForward=n.stepForward.bind(h(n)),n.getPlayClass=n.getPlayClass.bind(h(n)),n.formatter=n.formatter.bind(h(n)),n}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e);var n=t.prototype;return n.componentDidMount=function(){u.a.bind(["space"],this.play)},n.componentWillUnmount=function(){u.a.unbind(["space"])},n.onChange=function(e){this.props.onChange(e.target.value),null!=this.state.intervalId&&this.pause()},n.getPlayClass=function(){return null==this.state.intervalId?"fa fa-play fa-lg slider-button":"fa fa-pause fa-lg slider-button"},n.play=function(){if(!this.props.disabled)if(null!=this.state.intervalId)this.pause();else{var e=setInterval(this.stepForward,this.intervalMilliseconds);this.setState({intervalId:e})}},n.pause=function(){clearInterval(this.state.intervalId),this.setState({intervalId:null})},n.stepForward=function(){var e=this,t=this.props,n=t.start,r=t.end,i=t.step,a=t.values;if(!t.disabled){var o=(Array.isArray(a)?a:[a,a+i]).map((function(t){return t+e.increment})),s=o[1]>r?o[0]-n:0;this.props.onChange(o.map((function(e){return e-s})))}},n.stepBackward=function(){var e=this,t=this.props,n=t.start,r=t.end,i=t.step,a=t.values;if(!t.disabled){var o=(Array.isArray(a)?a:[a,a+i]).map((function(t){return t-e.increment})),s=o[0]<n?r-o[1]:0;this.props.onChange(o.map((function(e){return e+s})))}},n.formatter=function(e){if(this.props.disabled)return Object(c.b)("Data has no time steps");var t=e;return Array.isArray(e)?e[0]===e[1]&&(t=[e[0]]):t=[e],t.map((function(e){return new Date(e).toUTCString()})).join(" : ")},n.render=function(){var e=this.props,t=e.start,n=e.end,r=e.step,a=e.orientation,o=e.reversed,s=e.disabled,l=e.range,u=e.values;return i.a.createElement("div",{className:"play-slider"},i.a.createElement("div",{className:"play-slider-controls padded"},i.a.createElement("i",{className:"fa fa-step-backward fa-lg slider-button ",onClick:this.stepBackward}),i.a.createElement("i",{className:this.getPlayClass(),onClick:this.play}),i.a.createElement("i",{className:"fa fa-step-forward fa-lg slider-button ",onClick:this.stepForward})),i.a.createElement("div",{className:"play-slider-scrobbler padded"},i.a.createElement(f,{value:l?u:u[0],range:l,formatter:this.formatter,change:this.onChange,min:t,max:n,step:r,orientation:a,reversed:o,disabled:s?"disabled":"enabled"})))},t}(i.a.PureComponent);g.propTypes=m,g.defaultProps={onChange:function(){},loopDuration:15e3,maxFrames:100,orientation:"horizontal",reversed:!1,disabled:!1,range:!0},n.d(t,"a",(function(){return b}));var v={getLayers:o.a.func.isRequired,start:o.a.number.isRequired,end:o.a.number.isRequired,getStep:o.a.func,values:o.a.array.isRequired,aggregation:o.a.bool,disabled:o.a.bool,viewport:o.a.object.isRequired,children:o.a.node,mapStyle:o.a.string,mapboxApiAccessToken:o.a.string.isRequired,setControlValue:o.a.func,onValuesChange:o.a.func,width:o.a.number.isRequired,height:o.a.number.isRequired},b=function(e){function t(){return e.apply(this,arguments)||this}return function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e),t.prototype.render=function(){var e=this.props,t=e.start,n=e.end,r=e.getStep,a=e.disabled,o=e.aggregation,l=e.children,u=e.getLayers,c=e.values,p=e.onValuesChange,d=e.viewport,f=e.setControlValue,h=e.mapStyle,m=e.mapboxApiAccessToken,v=e.height,b=e.width,y=u(c);return i.a.createElement("div",null,i.a.createElement(s.a,{viewport:d,layers:y,setControlValue:f,mapStyle:h,mapboxApiAccessToken:m,bottomMargin:a?0:20,width:b,height:v}),!a&&i.a.createElement(g,{start:t,end:n,step:r(t),values:c,range:!o,onChange:p}),l)},t}(i.a.PureComponent);b.propTypes=v,b.defaultProps={aggregation:!1,disabled:!1,mapStyle:"light",setControlValue:function(){},onValuesChange:function(){}}},737:function(e,t,n){var r=n(738);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(341)(r,i);r.locals&&(e.exports=r.locals)},738:function(e,t,n){(e.exports=n(340)(!1)).push([e.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\ndiv.legend {\n    font-size: 90%;\n    position: absolute;\n    background: #fff;\n    box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);\n    margin: 24px;\n    padding: 12px 20px;\n    outline: none;\n    overflow-y: scroll;\n    max-height: 200px;\n}\n\nul.categories {\n    list-style: none;\n    padding-left: 0;\n    margin: 0;\n}\n\nul.categories li a {\n    color: rgb(51, 51, 51);\n    text-decoration: none;\n}\n\nul.categories li a span {\n    margin-right: 10px;\n}\n',""])},741:function(e,t,n){var r=n(742);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(341)(r,i);r.locals&&(e.exports=r.locals)},742:function(e,t,n){(e.exports=n(340)(!1)).push([e.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n .deckgl-tooltip > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n',""])},752:function(e,t,n){var r=n(753);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(341)(r,i);r.locals&&(e.exports=r.locals)},753:function(e,t,n){(e.exports=n(340)(!1)).push([e.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.BootstrapSliderWrapper .slider-selection {\n    background: #efefef;\n}\n\n.BootstrapSliderWrapper .slider-handle {\n    background: #b3b3b3;\n}\n\n',""])},754:function(e,t,n){var r=n(755);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(341)(r,i);r.locals&&(e.exports=r.locals)},755:function(e,t,n){(e.exports=n(340)(!1)).push([e.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.play-slider {\n    display: flex;\n    height: 40px;\n    width: 100%;\n    margin: 0;\n}\n\n.play-slider-controls {\n    flex: 0 0 80px;\n    text-align: middle;\n}\n\n.play-slider-scrobbler {\n    flex: 1 1;\n}\n\n.slider.slider-horizontal {\n    width: 100% !important;\n}\n\n.slider-button {\n    color: #b3b3b3;\n    margin-right: 5px;\n}\n\ndiv.slider > div.tooltip.tooltip-main.top.in {\n    margin-left: 0 !important;\n}\n',""])},775:function(e,t){},926:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(1),o=n.n(a),s=n(1044),l=n(736),u=n(733),c=n(724),p=n(717),d=n(861),f=n(142),h=n(344),m=n(723),g=10;function v(e,t,n){var r=e.break_points,i=e.num_buckets;if(!t)return[];if(void 0===r||0===r.length){var a=i?parseInt(i,10):g,o=Object(p.extent)(t,n),s=o[0],l=o[1];if(void 0===s)return[];var u=(l-s)/a,c=0===u?0:Math.max(0,Math.ceil(Math.log10(1/u))),d=l>l.toFixed(c)?1:0;return Array(a+1+d).fill().map((function(e,t){return(s+t*u).toFixed(c)}))}return r.sort((function(e,t){return parseFloat(e)-parseFloat(t)}))}function b(e,t,n){var r,i,a=e.break_points,o=e.num_buckets,s=e.linear_color_scheme,l=e.opacity,u=a||o?v({break_points:a,num_buckets:o},t,n):null,c=Array.isArray(s)?new f.a({colors:s,id:"custom"}):Object(h.a)().get(s);if(null!==u){var g=u.length-1,b=1<g?c.getColors(g):[c.colors[c.colors.length-1]],y=b[0],_=b[b.length-1];b.unshift(y),b.push(_);var w=u.map((function(e){return parseFloat(e)}));r=Object(d.a)().domain(w).range(b),i=function(e){return e>u[g]||e<u[0]}}else r=c.createLinearScale(Object(p.extent)(t,n)),i=function(){return!1};return function(e){var t=n(e),a=Object(m.hexToRGB)(r(t));return a[3]=i(t)?0:l/100*255,a}}var y=n(718),_=n(734),w=n(719);function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(){return(I=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}n.d(t,"getLayer",(function(){return N}));function N(e,t,n,r,a,o,l){var u=e,p=u.fill_color_picker,d=u.stroke_color_picker,f=[].concat(t.data.features);if(null!=l&&l.forEach((function(e){f=f.filter(e)})),u.js_data_mutator){var h=Object(w.a)(u.js_data_mutator);f=h(f)}var m=u.metric?u.metric.label||u.metric:null,g=null===u.metric?function(){return[p.r,p.g,p.b,255*p.a]}:b(u,f,(function(e){return e[m]})),v=function(e){var t=g(e);return 0<a.length&&-1===a.indexOf(e[u.line_column])&&(t[3]/=2),t},_=u.line_column&&u.metric&&0<=["geohash","zipcode"].indexOf(u.line_type)?function(e){return function(t){var n=e.metric.label||e.metric;return i.a.createElement("div",{className:"deckgl-tooltip"},i.a.createElement(c.a,{label:e.line_column+": ",value:""+t.object[e.line_column]}),e.metric&&i.a.createElement(c.a,{label:n+": ",value:""+t.object[n]}))}}(u):void 0;return new s.a(I({id:"path-layer-"+u.slice_id,data:f,pickable:!0,filled:u.filled,stroked:u.stroked,getPolygon:function(e){return e.polygon},getFillColor:v,getLineColor:[d.r,d.g,d.b,255*d.a],getLineWidth:u.line_width,extruded:u.extruded,getElevation:function(e){return function(e,t){return 0===t(e)[3]?0:e.elevation}(e,v)},elevationScale:u.multiplier,fp64:!0},Object(y.a)(u,r,_,o)))}var O={formData:o.a.object.isRequired,payload:o.a.object.isRequired,setControlValue:o.a.func.isRequired,viewport:o.a.object.isRequired,onAddFilter:o.a.func,setTooltip:o.a.func,width:o.a.number.isRequired,height:o.a.number.isRequired},A=function(e){function t(n){var r;return(r=e.call(this,n)||this).state=t.getDerivedStateFromProps(n),r.getLayers=r.getLayers.bind(S(r)),r.onSelect=r.onSelect.bind(S(r)),r.onValuesChange=r.onValuesChange.bind(S(r)),r}(function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t})(t,e),t.getDerivedStateFromProps=function(e,t){if(t&&e.payload.form_data===t.formData)return null;var n=e.payload.data.features||[],r=n.map((function(e){return e.__timestamp})),i=e.payload.form_data.time_grain_sqla||e.payload.form_data.granularity||"P1D",a=Object(_.a)(r,i);return{start:a.start,end:a.end,getStep:a.getStep,values:a.values,disabled:a.disabled,viewport:e.formData.autozoom?Object(y.b)(e.viewport,function(e){return e.map((function(e){return e.polygon})).flat()}(n)):e.viewport,selected:[],lastClick:0,formData:e.payload.form_data}};var n=t.prototype;return n.onSelect=function(e){var t=this.props,n=t.formData,r=t.onAddFilter,i=new Date,a=i-this.state.lastClick<=250,o=[].concat(this.state.selected);if(a)o.splice(0,o.length,e);else if(n.toggle_polygons){var s=o.indexOf(e);-1===s?o.push(e):o.splice(s,1)}else o.splice(0,1,e);this.setState({selected:o,lastClick:i}),n.table_filter&&r(n.line_column,o,!1,!0)},n.onValuesChange=function(e){this.setState({values:Array.isArray(e)?e:[e,e+this.state.getStep(e)]})},n.getLayers=function(e){if(void 0===this.props.payload.data.features)return[];var t=[];return e[0]===e[1]||e[1]===this.end?t.push((function(t){return t.__timestamp>=e[0]&&t.__timestamp<=e[1]})):t.push((function(t){return t.__timestamp>=e[0]&&t.__timestamp<e[1]})),[N(this.props.formData,this.props.payload,this.props.onAddFilter,this.props.setTooltip,this.state.selected,this.onSelect,t)]},n.render=function(){var e=this.props,t=e.payload,n=e.formData,r=e.setControlValue,a=this.state,o=a.start,s=a.end,c=a.getStep,p=a.values,d=a.disabled,f=a.viewport,h=n,m=h.metric?h.metric.label||h.metric:null,g=function(e,t,n){var r=v(e,t,n),i=b(e,t,n),a={};return r.slice(1).forEach((function(t,n){var o,s=r[n]+" - "+r[n+1],l=.5*(parseFloat(r[n])+parseFloat(r[n+1])),u=e.metric?e.metric.label||e.metric:null;a[s]={color:i((o={},o[u||e.metric]=l,o)),enabled:!0}})),a}(n,t.data.features,(function(e){return e[m]}));return i.a.createElement("div",{style:{position:"relative"}},i.a.createElement(l.a,{getLayers:this.getLayers,start:o,end:s,getStep:c,values:p,onValuesChange:this.onValuesChange,disabled:d,viewport:f,width:this.props.width,height:this.props.height,mapboxApiAccessToken:t.data.mapboxApiKey,mapStyle:n.mapbox_style,setControlValue:r,aggregation:!0},null!==n.metric&&i.a.createElement(u.a,{categories:g,position:n.legend_position,format:n.legend_format})))},t}(i.a.Component);A.propTypes=O,A.defaultProps={onAddFilter:function(){},setTooltip:function(){}};t.default=A}}]);