var cardLink=function(){"use strict";var e=r("style");function t(e){return/^(https?:)?\/\//g.test(e)}function r(e,t){var r=document.createElement(e);return t&&(r.className=t),r}function n(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function i(e,t){for(var r in t)e.setAttribute(r,t[r])}function a(e,t){e.appendChild(t)}function o(e,t,o){var l=r("div","card-link"),c=function(e){var t=n("svg");t.classList.add("card-link-icon"),t.style.background="#ebebeb",i(t,{fill:"#d4d4d4",viewBox:"0 0 1024 1024"});var o=n("path");i(o,{d:"M177.152 384a357.546667 357.546667 0 0 0-23.552 128 357.546667 357.546667 0 0 0 23.552 128h140.245333a791.808 791.808 0 0 1-10.197333-128c0-44.714667 3.584-87.722667 10.197333-128H177.152z m24.405333-51.2h126.250667c15.786667-65.024 40.021333-120.405333 69.76-160.554667A359.466667 359.466667 0 0 0 201.557333 332.8zM844.8 378.709333V384h-138.197333c6.613333 40.277333 10.197333 83.285333 10.197333 128s-3.584 87.722667-10.197333 128H844.8v5.290667c16.512-41.216 25.6-86.186667 25.6-133.290667a357.418667 357.418667 0 0 0-25.6-133.290667zM822.442667 332.8a359.466667 359.466667 0 0 0-196.010667-160.554667c29.738667 40.149333 53.930667 95.573333 69.76 160.554667h126.293333zM369.365333 384a736.042667 736.042667 0 0 0-10.965333 128c0 45.354667 3.968 88.448 10.965333 128h285.269334c6.997333-39.552 10.965333-82.645333 10.965333-128s-3.968-88.448-10.965333-128H369.365333z m11.264-51.2h262.741334c-28.586667-108.032-80.725333-179.2-131.370667-179.2-50.645333 0-102.741333 71.168-131.370667 179.2z m-179.072 358.4a359.466667 359.466667 0 0 0 196.010667 160.554667c-29.738667-40.149333-53.930667-95.573333-69.76-160.554667h-126.293333z m620.885334 0h-126.250667c-15.786667 65.024-40.021333 120.405333-69.76 160.554667a359.466667 359.466667 0 0 0 196.010667-160.554667z m-441.813334 0c28.586667 108.032 80.725333 179.2 131.370667 179.2 50.645333 0 102.741333-71.168 131.370667-179.2H380.629333zM512 921.6a409.6 409.6 0 1 1 0-819.2 409.6 409.6 0 0 1 0 819.2z"}),a(t,o);var l=r("img","card-link-icon");return l.src=e,l.onload=function(){l.onload=null,t.parentNode.replaceChild(l,t)},t}(o),d=r("a","card-link-content");d.href=t;var u=r("div","card-link-text"),h=r("span","card-link-title");h.textContent=e;var f=r("span","card-link-url"),s=n("svg");i(s,{width:14,height:14,viewBox:"0 0 24 24",fill:"currentColor"});var p=n("path");return i(p,{d:"M5.327 18.883a3.005 3.005 0 010-4.25l2.608-2.607a.75.75 0 10-1.06-1.06l-2.608 2.607a4.505 4.505 0 006.37 6.37l2.608-2.607a.75.75 0 00-1.06-1.06l-2.608 2.607a3.005 3.005 0 01-4.25 0zm5.428-11.799a.75.75 0 001.06 1.06L14.48 5.48a3.005 3.005 0 014.25 4.25l-2.665 2.665a.75.75 0 001.061 1.06l2.665-2.664a4.505 4.505 0 00-6.371-6.372l-2.665 2.665zm5.323 2.117a.75.75 0 10-1.06-1.06l-7.072 7.07a.75.75 0 001.061 1.06l7.071-7.07z"}),a(s,p),a(f,s),a(f,document.createTextNode(t)),a(u,h),a(u,f),a(d,u),a(d,c),a(l,d),l}function l(e,t){fetch(e).then((function(e){return e.text()})).then(t).catch((function(r){var n=c.server;if(e.includes(n)||!n)return console.error("CardLink Error:",r);l(n+e,t)}))}function c(e){(e="forEach"in(e||{})?e:document.querySelectorAll("a[cardlink]")).forEach((function(e){if(1===e.nodeType){e.removeAttribute("cardlink");var r=e.href;t(r)&&l(r,(function(n){!function(e,r,n){var i,a,l=(new DOMParser).parseFromString(r,"text/html");if(i=l.querySelector("title")){if(i=i.textContent,a=(a=l.querySelector("body img"))&&a.getAttribute("src"),/^data:image/.test(a)&&(a=""),!a){if(a=[].slice.call(l.querySelectorAll("link[rel][href]")).find((function(e){return e.rel.includes("icon")})),!a)return;a=a.href}t(a)||(a=new URL(n).origin+a);var c=o(i,n,a);Array.from(e.attributes).forEach((function(e){c.querySelector("a").setAttribute(e.name,e.value)})),e.parentNode.replaceChild(c,e)}}(e,n,r)}))}}))}return e.textContent=".card-link{position:relative;width:100%;min-width:200px;max-width:400px;height:80px;margin:20px auto;border-radius:12px;overflow:hidden;}.card-link-content{text-decoration:none;z-index:1;position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:space-around;padding:12px;background-color:hsla(0,0%,96.5%,0.88);box-sizing:border-box;}.card-link-text{flex:1;}.card-link-title{max-height:40px;font-size:16px;font-weight:500;line-height:1.25;color:#121212;margin:0 0 5px;letter-spacing:0.2px;word-break:break-all;display:-webkit-box;text-overflow:ellipsis;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;}.card-link-url{display:-webkit-box;font-size:13px;color:#999;margin:0;line-height:1.3;overflow:hidden;word-break:break-word;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:1;}.card-link-url svg{float:left;margin:2px 5px 0 0;}.card-link-icon{width:60px;height:60px;margin:0 0 0 8px;overflow:hidden;border-radius:6px;object-fit:contain;}",document.head.appendChild(e),c}();
//# sourceMappingURL=cardlink.js.map
