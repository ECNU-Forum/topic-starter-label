module.exports=function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=3)}([function(e,r){e.exports=flarum.core.compat.app},function(e,r){e.exports=flarum.core.compat.extend},function(e,r){e.exports=flarum.core.compat["components/PostUser"]},function(e,r,t){"use strict";t.r(r);var n=t(1),o=t(0),u=t.n(o),i=t(2),a=t.n(i);u.a.initializers.add("dem13n-topic-starter-label",(function(){Object(n.extend)(a.a.prototype,"view",(function(e){var r=u.a.current.get("routeName");if("discussion"===r||"discussion.near"===r||"blogArticle"===r){var t="blogArticle"===r?u.a.translator.trans("dem13n.forum.blog_article_author"):u.a.translator.trans("dem13n.forum.topic_starter"),n=this.attrs.post;if(!n.user().id)return;var o=n.user().id();if(!n.discussion().user().id)return;var i=n.discussion().user().id();if(!i&&!o)return;o===i&&e.children.push(m("span",{className:"topicStarter"},t))}}))}))}]);
//# sourceMappingURL=forum.js.map