parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"AvVX":[function(require,module,exports) {
"use strict";function r(r,n){return a(r)||o(r,n)||e(r,n)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(r,t){if(r){if("string"==typeof r)return n(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(r,t):void 0}}function n(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function o(r,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],n=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done)&&(e.push(i.value),!t||e.length!==t);n=!0);}catch(l){o=!0,a=l}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return e}}function a(r){if(Array.isArray(r))return r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(t,e,n){for(var o="<"+t,a=0,i=Object.entries(e);a<i.length;a++){var u=r(i[a],2),l=u[0],c=u[1];o+=" "+l+'="'+c+'"'}return o+=">",n&&(Array.isArray(n)?n.forEach(function(r){o+=r}):o+=n),o+="</"+t+">"};
},{}],"NkeW":[function(require,module,exports) {
"use strict";var t=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var e=t(require("../framework/h")),r=function(t){var r=Math.floor(2*Math.random());return e.default("div",{class:"article-name"},t.title)+e.default("div",{class:"article-authors"},1==t.authors.length?t.authors:"".concat(t.authors[r]," & ").concat(t.authors[(r+1)%2]))},a=function(){return e.default("a",{class:"back-arrow fas fa-arrow-left",href:"./index.html"})};exports.default=function(t){document.title=t.title,document.getElementById("header").innerHTML=r(t),document.getElementById("wrapper").innerHTML+=a()};
},{"../framework/h":"AvVX"}],"XNoJ":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Category=void 0,function(e){e[e.Technical=0]="Technical",e[e.Cultural=1]="Cultural",e[e.Memorisation=2]="Memorisation"}(e||(e={})),exports.Category=e;
},{}],"XukQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../types/ArticleDescription"),t={title:"Palais mental dans les séries et films",icon:"photo-video",category:e.Category.Cultural,authors:["Victorine MAUREL","Margaux SÉGUY"],folderName:"Maurel_Seguy"};exports.default=t;
},{"../../types/ArticleDescription":"XNoJ"}],"uvvE":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("../../components/GenerateArticlePage")),r=e(require("./description"));t.default(r.default);
},{"../../components/GenerateArticlePage":"NkeW","./description":"XukQ"}]},{},["uvvE"], null)
//# sourceMappingURL=generate.8005d995.js.map