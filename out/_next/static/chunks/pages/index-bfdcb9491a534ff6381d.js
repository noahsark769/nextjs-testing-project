(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9917:function(e,t,n){"use strict";var i=n(3848),r=n(3115);t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,l=void 0!==r&&r,u=e.priority,d=void 0!==u&&u,p=e.loading,m=e.lazyBoundary,v=void 0===m?"200px":m,b=e.className,y=e.quality,w=e.width,x=e.height,S=e.objectFit,C=e.objectPosition,z=e.onLoadingComplete,E=e.loader,O=void 0===E?k:E,_=e.placeholder,I=void 0===_?"empty":_,L=e.blurDataURL,R=function(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),P=n?"responsive":"intrinsic";"layout"in R&&(R.layout&&(P=R.layout),delete R.layout);var D="";if(function(e){return"object"===typeof e&&(g(e)||function(e){return void 0!==e.src}(e))}(t)){var M=g(t)?t.default:t;if(!M.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(M)));if(L=L||M.blurDataURL,D=M.src,(!P||"fill"!==P)&&(x=x||M.height,w=w||M.width,!M.height||!M.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(M)))}t="string"===typeof t?t:D;var N=j(w),q=j(x),U=j(y),B=!d&&("lazy"===p||"undefined"===typeof p);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,B=!1);h.has(t)&&(B=!1);0;var T,W,H,V=s.useIntersection({rootMargin:v,disabled:!B}),K=i(V,2),F=K[0],X=K[1],Y=!B||X,J={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:S,objectPosition:C},Z="blur"===I?{filter:"blur(20px)",backgroundSize:S||"cover",backgroundImage:'url("'.concat(L,'")'),backgroundPosition:C||"0% 0%"}:{};if("fill"===P)T={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0};else if("undefined"!==typeof N&&"undefined"!==typeof q){var G=q/N,Q=isNaN(G)?"100%":"".concat(100*G,"%");"responsive"===P?(T={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},W={display:"block",boxSizing:"border-box",paddingTop:Q}):"intrinsic"===P?(T={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},W={boxSizing:"border-box",display:"block",maxWidth:"100%"},H='<svg width="'.concat(N,'" height="').concat(q,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===P&&(T={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:N,height:q})}else 0;var $={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};Y&&($=A({src:t,unoptimized:l,layout:P,width:N,quality:U,sizes:n,loader:O}));var ee=t;return o.default.createElement("div",{style:T},W?o.default.createElement("div",{style:W},H?o.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(c.toBase64(H))}):null):null,o.default.createElement("img",Object.assign({},R,$,{decoding:"async","data-nimg":P,className:b,ref:function(e){F(e),function(e,t,n,i,r){if(!e)return;var o=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===i&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),h.add(t),r){var n=e.naturalWidth,o=e.naturalHeight;r({naturalWidth:n,naturalHeight:o})}}))};e.complete?o():e.onload=o}(e,ee,0,I,z)},style:f({},J,Z)})),o.default.createElement("noscript",null,o.default.createElement("img",Object.assign({},R,A({src:t,unoptimized:l,layout:P,width:N,quality:U,sizes:n,loader:O}),{decoding:"async","data-nimg":P,style:J,className:b,loading:p||"lazy"}))),d?o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+$.src+$.srcSet+$.sizes,rel:"preload",as:"image",href:$.srcSet?void 0:$.src,imagesrcset:$.srcSet,imagesizes:$.sizes})):null)};var o=d(n(7294)),a=d(n(639)),c=n(8997),l=n(5809),s=n(7426);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){u(e,t,n[t])}))}return e}var h=new Set;var p=new Map([["default",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,o=new URL("".concat(t).concat(S(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(S(n))}],["akamai",function(e){var t=e.root,n=e.src,i=e.width;return"".concat(t).concat(S(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function g(e){return void 0!==e.default}var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom"}||l.imageConfigDefault,v=m.deviceSizes,b=m.imageSizes,y=m.loader,w=m.path,x=(m.domains,[].concat(r(v),r(b)));function A(e){var t=e.src,n=e.unoptimized,i=e.layout,o=e.width,a=e.quality,c=e.sizes,l=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var s=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var i,o=/(^|\s)(1?\d?\d)vw/g,a=[];i=o.exec(n);i)a.push(parseInt(i[2]));if(a.length){var c=.01*Math.min.apply(Math,a);return{widths:x.filter((function(e){return e>=v[0]*c})),kind:"w"}}return{widths:x,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:v,kind:"w"}:{widths:r(new Set([e,2*e].map((function(e){return x.find((function(t){return t>=e}))||x[x.length-1]})))),kind:"x"}}(o,i,c),u=s.widths,d=s.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(e,n){return"".concat(l({src:t,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:l({src:t,quality:a,width:u[f]})}}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t=p.get(y);if(t)return t(f({root:w},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(y))}function S(e){return"/"===e[0]?e.slice(1):e}v.sort((function(e,t){return e-t})),x.sort((function(e,t){return e-t}))},2167:function(e,t,n){"use strict";var i=n(3848);t.default=void 0;var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(1063),c=n(4651),l=n(7426);var s={};function u(e,t,n,i){if(e&&a.isLocalURL(t)){e.prefetch(t,n,i).catch((function(e){0}));var r=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;s[t+"%"+n+(r?"%"+r:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=c.useRouter(),d=o.default.useMemo((function(){var t=a.resolveHref(r,e.href,!0),n=i(t,2),o=n[0],c=n[1];return{href:o,as:e.as?a.resolveHref(r,e.as):c||o}}),[r,e.href,e.as]),f=d.href,h=d.as,p=e.children,g=e.replace,m=e.shallow,v=e.scroll,b=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var y=(t=o.default.Children.only(p))&&"object"===typeof t&&t.ref,w=l.useIntersection({rootMargin:"200px"}),x=i(w,2),A=x[0],j=x[1],k=o.default.useCallback((function(e){A(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,A]);o.default.useEffect((function(){var e=j&&n&&a.isLocalURL(f),t="undefined"!==typeof b?b:r&&r.locale,i=s[f+"%"+h+(t?"%"+t:"")];e&&!i&&u(r,f,h,{locale:t})}),[h,f,j,b,n,r]);var S={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,i,r,o,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==c&&i.indexOf("#")>=0&&(c=!1),t[r?"replace":"push"](n,i,{shallow:o,locale:l,scroll:c}))}(e,r,f,h,g,m,v,b)},onMouseEnter:function(e){a.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(r,f,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof b?b:r&&r.locale,z=r&&r.isLocaleDomain&&a.getDomainLocale(h,C,r&&r.locales,r&&r.domainLocales);S.href=z||a.addBasePath(a.addLocale(h,C,r&&r.defaultLocale))}return o.default.cloneElement(t,S)};t.default=d},7426:function(e,t,n){"use strict";var i=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,l=r.useRef(),s=r.useState(!1),u=i(s,2),d=u[0],f=u[1],h=r.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||d||e&&e.tagName&&(l.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:r,elements:i}),n}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return r.useEffect((function(){if(!a&&!d){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[d]),[h,d]};var r=n(7294),o=n(3447),a="undefined"!==typeof IntersectionObserver;var c=new Map},8997:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},3002:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var i=n(9008),r=n(1664),o=n(1055),a=n(5675),c={src:"/_next/static/image/public/alchemy.747e6fc091750ac7f9df18a83bdc5fcd.png",height:1200,width:1200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAANUlEQVR42mN4/erV6zdAzPDq9dsXT969ecXw+uW2TLvu528Y3l9IZVBi2PYJzoBLIRTDtAMAzOYwSZ2Pm0IAAAAASUVORK5CYII="},l=n(5893),s=function(e){var t=e.src;e.width,e.quality;return"http://localhost:3001".concat(t)};function u(){return(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)(i.default,{children:[(0,l.jsx)("title",{children:"Create Next App"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,l.jsxs)("main",{children:[(0,l.jsx)("h1",{className:"title",children:"Sup this is the first page"}),(0,l.jsx)(o.n,{}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Content to push the link down 1"}),(0,l.jsx)("h1",{children:"Content to push the link down"}),(0,l.jsx)("h1",{children:"Content to push the link down"}),(0,l.jsx)("h1",{children:"Content to push the link down"}),(0,l.jsx)("h1",{children:"Content to push the link down"}),(0,l.jsx)("h1",{children:"Content to push the link down"}),(0,l.jsx)("h1",{children:"Content to push the link down"}),(0,l.jsx)("h1",{children:"Content to push the link down 2"}),(0,l.jsx)("h1",{children:"Content to push the link down"}),(0,l.jsx)("h1",{children:"Content to push the link down"}),(0,l.jsx)("h1",{children:"Content to push the link down"}),(0,l.jsx)("h1",{children:"Content to push the link down"}),(0,l.jsx)("h1",{children:"Content to push the link down"}),(0,l.jsx)("h1",{children:"Content to push the link down"}),(0,l.jsx)("h1",{children:"Content to push the link down"}),(0,l.jsx)("h1",{children:"Content to push the link down3 "}),(0,l.jsx)("div",{style:{width:"300px",height:"300px",position:"relative"},children:(0,l.jsx)(a.default,{loader:s,src:c,alt:"Alchemy",layout:"fill",objectFit:"contain"})}),(0,l.jsx)("h1",{children:"Content to push the link down"}),(0,l.jsx)("h1",{children:"Content to push the link down"}),(0,l.jsx)("h1",{children:"Content to push the link down"}),(0,l.jsx)("h1",{children:"Content to push the link down LAST"}),(0,l.jsx)("h1",{children:(0,l.jsx)(r.default,{href:"/second-page",children:"Link to second page"})})]})]})]})}},1055:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(o.push(i.value),!t||o.length!==t);a=!0);}catch(l){c=!0,r=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw r}}return o}}(e,t)||function(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{n:function(){return c}});var o=n(7294),a=n(5893),c=function(e){var t=r(o.useState("A"),2),n=t[0],i=t[1];return(0,a.jsxs)("div",{children:[(0,a.jsxs)("h1",{children:["Heading Selected: ",n]}),(0,a.jsx)("button",{onClick:function(){return i("A")},children:"Set A"}),(0,a.jsx)("button",{onClick:function(){return i("B")},children:"Set B"})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3002)}])},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},9008:function(e,t,n){e.exports=n(639)},5675:function(e,t,n){e.exports=n(9917)},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);