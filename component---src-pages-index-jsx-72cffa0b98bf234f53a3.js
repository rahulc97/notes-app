"use strict";(self.webpackChunkacme_note=self.webpackChunkacme_note||[]).push([[230],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,l=new RegExp("^"+s.source),i=new RegExp(s.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,l=!1,i=!1;for(let o=0;o<e.length;o++){const c=e[o];s&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),s=!1,i=l,l=!0,o++):l&&i&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),i=l,l=!1,s=!0):(s=r(c)===c&&n(c)!==c,i=l,l=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(l,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,o.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return x},P:function(){return v},S:function(){return B},_:function(){return i},a:function(){return l},b:function(){return d},g:function(){return m},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function m(e,t,a,r,n,s,i,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const d=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const p=["children"],u=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=i(e,p);return r.createElement(r.Fragment,null,r.createElement(u,l({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,c=i(e,f);return r.createElement("img",l({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=i(e,h);const o=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(b,l({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:`${t}-${s}-${a}`,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var w;b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const A=["fallback"],v=function(e){let{fallback:t}=e,a=i(e,A);return t?r.createElement(y,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};v.displayName="Placeholder",v.propTypes={fallback:n.string,sources:null==(w=y.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(y,l({},e)),r.createElement("noscript",null,r.createElement(y,l({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=y.propTypes;const E=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],k=["style","className"],N=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},L={image:s().object.isRequired,alt:C},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],T=new Set;let I,P;const M=function(e){let{as:t="div",image:n,style:s,backgroundColor:d,className:m,class:p,onStartLoad:u,onLoad:g,onError:f}=e,h=i(e,S);const{width:b,height:y,layout:w}=n,A=c(b,y,w),{style:v,className:x}=A,E=i(A,j),k=(0,r.useRef)(),N=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);p&&(m=p);const C=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(w,b,y);return(0,r.useEffect)((()=>{I||(I=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return P=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==u||u({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==u||u({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(N);if(P&&T.has(N))return;let t,r;return I.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;k.current&&(k.current.innerHTML=a(l({isLoading:!0,isLoaded:T.has(N),image:n},h)),T.has(N)||(t=requestAnimationFrame((()=>{k.current&&(r=i(k.current,N,T,s,u,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{T.has(N)&&P&&(k.current.innerHTML=P(l({isLoading:T.has(N),isLoaded:T.has(N),image:n},h)),null==u||u({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,l({},E,{style:l({},v,s,{backgroundColor:d}),className:`${x}${m?` ${m}`:""}`,ref:k,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(M,e):null}));O.propTypes=L,O.displayName="GatsbyImage";const V=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function Q(e){return function(t){let{src:a,__imageData:n,__error:s}=t,o=i(t,V);return s&&console.warn(s),n?r.createElement(e,l({image:n},o)):(console.warn("Image not loaded",a),null)}}const R=Q((function(e){let{as:t="div",className:a,class:n,style:s,image:o,loading:p="lazy",imgClassName:u,imgStyle:f,backgroundColor:h,objectFit:b,objectPosition:y}=e,w=i(e,E);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=l({objectFit:b,objectPosition:y,backgroundColor:h},f);const{width:A,height:C,layout:L,images:S,placeholder:j,backgroundColor:T}=o,I=c(A,C,L),{style:P,className:M}=I,O=i(I,k),V={fallback:void 0,sources:[]};return S.fallback&&(V.fallback=l({},S.fallback,{srcSet:S.fallback.srcSet?N(S.fallback.srcSet):void 0})),S.sources&&(V.sources=S.sources.map((e=>l({},e,{srcSet:N(e.srcSet)})))),r.createElement(t,l({},O,{style:l({},P,s,{backgroundColor:h}),className:`${M}${a?` ${a}`:""}`}),r.createElement(g,{layout:L,width:A,height:C},r.createElement(v,l({},m(j,!1,L,A,C,T,b,y))),r.createElement(x,l({"data-gatsby-image-ssr":"",className:u},w,d("eager"===p,!1,V,p,f)))))})),H=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},q=new Set(["fixed","fullWidth","constrained"]),z={src:s().string.isRequired,alt:C,width:H,height:H,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!q.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};R.displayName="StaticImage",R.propTypes=z;const B=Q(O);B.displayName="StaticImage",B.propTypes=z},9357:function(e,t,a){var r=a(7294),n=a(1883);t.Z=function(e){var t;let{description:a,title:s,children:l}=e;const{site:i}=(0,n.useStaticQuery)("3000541721"),o=a||i.siteMetadata.description,c=null===(t=i.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,c?`${s} | ${c}`:s),r.createElement("meta",{name:"description",content:o}),r.createElement("meta",{property:"og:title",content:s}),r.createElement("meta",{property:"og:description",content:o}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:title",content:s}),r.createElement("meta",{name:"twitter:description",content:o}),l)}},6961:function(e,t,a){a.r(t),a.d(t,{Head:function(){return u},default:function(){return g}});var r=a(7294),n=a(9357),s=a(1883);const l=()=>{const e=(0,r.useCallback)((()=>{(0,s.navigate)("/login")}),[]),t=(0,r.useCallback)((()=>{(0,s.navigate)("/signup")}),[]);return r.createElement("div",null,r.createElement("div",{className:"w-full p-8 bg-hero bg-cover h-[912px] fixed"},r.createElement("div",{className:"text-3xl font-semibold text-white"},"Acme Notes"),r.createElement("div",{className:"text-white text-4xl font-bold relative pl-8 top-[20%]"},r.createElement("p",null,"Capture your Notes in a breeze,"),r.createElement("p",{className:"mt-2"},"Get started for free now!"),r.createElement("div",{className:"px-4 mt-3 text-base w-fit font-semibold py-2 min-w-[125px] text-center  bg-yellow2 shadow-lg cursor-pointer rounded-lg text-white",onClick:t,role:"presentation"}," Try Now "))),r.createElement("div",{className:"flex flex-row gap-4 h-fit fixed  right-8 top-8 z-[100]"},r.createElement("div",{className:"px-4 py-2 min-w-[125px] text-center bg-gray-100 cursor-pointer rounded-lg text-[#333] font-semibold shadow-lg",onClick:e,role:"presentation"}," Login "),r.createElement("div",{className:"px-4 py-2 min-w-[125px] text-center  bg-yellow2 cursor-pointer rounded-lg text-white font-semibold shadow-lg",onClick:t,role:"presentation"}," Get Started ")))};l.displayName="Topbar";var i=a(8032);const o=()=>r.createElement("div",{className:"p-10 h-[600px] w-full bg-white"},r.createElement("div",{className:"flex flex-row items-center justify-center h-full"},r.createElement(i.S,{src:"../images/teamwork.webp",placeholder:"blurred",quality:100,__imageData:a(2889)}),r.createElement("div",{className:"w-[35%] ml-14"},r.createElement("div",{className:"text-[54px] leading-[56px] mb-4"},"Effortless collaboration"),r.createElement("div",{className:"text-[18px] text-[#333] mb-8"},"Acme notes makes it easy to collaborate on projects. Real-Time Editing immediately syncs changes to keep all contributors up to date. The Tasks feature helps you outline the next steps and assign responsibilities. And with unlimited sharing permissions, everyone is the loop and on the same page."),r.createElement(s.Link,{to:"/learn-more",className:"text-[#333]"},"Learn More")))),c=()=>{const e=(0,r.useCallback)((()=>{(0,s.navigate)("/signup")}),[]);return r.createElement("div",{className:"py-10 px-[80px] h-[600px] w-full bg-white"},r.createElement("div",{className:"flex flex-row items-center justify-center h-full"},r.createElement("div",{className:"w-[45%] mr-14 max-w-[500px]"},r.createElement("div",{className:"text-[54px] leading-[56px] mb-4"},"24/7 access"),r.createElement("div",{className:"text-[18px] text-[#333] mb-8"},"Acme notes automatically syncs across all your devices so you can access your most important information anytime, anywhere. No WiFi? No problem—offline mode means you can continue to use Evernote even when the internet cuts out."),r.createElement("div",{className:"px-4 mt-3 text-base w-fit font-semibold py-2 min-w-[125px] text-center  bg-[#ff6b21] shadow-lg cursor-pointer rounded-lg text-white",onClick:e,role:"presentation"}," Start for free ")),r.createElement(i.S,{src:"../images/no-signal.webp",placeholder:"blurred",quality:100,__imageData:a(632)})))};var d=a.p+"static/editor-fecfe1815f539e24c552701858b3c4b0.gif";const m=()=>r.createElement("div",{className:"flex flex-col items-center justify-center bg-white px-[80px] py-[100px]"},r.createElement("div",{className:"w-full flex  flex-col items-center mb-[48px]"},r.createElement("div",{className:"text-[#333] text-[48px] font-bold"},"An editor designed for focus"),r.createElement("div",{className:"text-[#324232] text-[24px] text-center"},"Just start typing. Everything else fades away ",r.createElement("br",null),"so you can concentrate on the task at hand – no distractions.")),r.createElement("div",{className:"shadow-2xl"},r.createElement("img",{src:d,placeholder:"blurred",alt:"gif"}))),p=()=>r.createElement("footer",{className:"bg-[#333] h-[500px]"},r.createElement("div",{className:"text-white p-[52px]"},"Footer")),u=()=>r.createElement(n.Z,{title:"Welcome"});var g=()=>r.createElement("div",{className:"flex flex-col"},r.createElement(l,null),r.createElement("div",{className:" relative top-[612px] "},r.createElement("div",{className:"h-[800px] bg-[#eee8e2]"},"jshgfjsghfd"),r.createElement(o,null),r.createElement(m,null),r.createElement(c,null),r.createElement(p,null)))},2889:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/webp;base64,UklGRtgCAABXRUJQVlA4WAoAAAAQAAAAEwAAEQAAQUxQSLEAAAABgJpt27Ll/t3dBXfobhOQXBvR3ZmASKc6K7g7Czgkr7/e5f1eZIKImAD848zReqB+ekY8mgHA+MxUXV2Kyk8GoIjkxDhl8wH1Pr8Ku78ltlUAdNVewF3fIK7UQjz7+vb2dlZk2XoehmIuhSt9ZCqoEEkKlnvJuFcBPQdnZ2drjZalk05I2pqKgZImK2TVV4yV18V5o5HJJrmwSLJIRnPLeNV8mnd6Gdjby6Bv6A/inwMAVlA4IAACAACQDgCdASoUABIAAAAAJZgC7LwGGA2SXqAfpX5sH6gb7l1gHoAfsB6R3sU/tJ7AH6d3IDkYjwL6N+MH4AaRb8dPyAyxb8dPxV1038SdcB/K/yA/mfvN/oH4V+UB7gf8R/jn8t/GD+y//XlFP0APq89y6YIMkZI7lhe/2m+2wAD+//5gkldyMdOtJiFTKbZjEjCGALbb7Lzh8KxpVHwj/8UL//yG97WXisggzvg/ZtNmTyAGuyjKV//5Z08lu//DCH4d/byTt1sspg7I2qVybwj7ZXAPXsL/f/W34k19kRj/Og5rq0+iyGHbFKXuFxVucPJXXYQf1/mCo4EC6R09/6I1c9TSyIIV5M42J5JHF/+yBl9ae112vPPrNyPxv/0LT3v/x9fwipVGMh6MwzhX5+m+hnpL/+w1+QxLpCpEp1/+1/v/wPr3Op1fVhlK/+Dz6V05wkTfQ4T/gl/+h1+RX46OPDXZZ/7fCrO0r+o089tPy4n1K3a7e+yQY//xiNTgEzcMOsbcdP9NaPv04Phw8p7ccDOclrwuPsWN+aAd60yEoXYz7U7Hhqz2EB50b/VegpOSzpXpwmYQEkpjT7vr8fHHyAl4n17/lDuA4mTG2g/TMWKY+aZuVL1krxwpFvMG67aflnMb4P4+hQLB6lm4pojv7aVOEv2//Hb5EyQOhkAAAA=="},"images":{"fallback":{"src":"/notes-app/static/93fec2834cb0d083e156d26e963acad4/ba326/teamwork.webp","srcSet":"/notes-app/static/93fec2834cb0d083e156d26e963acad4/76b97/teamwork.webp 160w,\\n/notes-app/static/93fec2834cb0d083e156d26e963acad4/f5c87/teamwork.webp 320w,\\n/notes-app/static/93fec2834cb0d083e156d26e963acad4/ba326/teamwork.webp 640w","sizes":"(min-width: 640px) 640px, 100vw"},"sources":[]},"width":640,"height":565}')},632:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/webp;base64,UklGRrQBAABXRUJQVlA4WAoAAAAQAAAAEwAAEQAAQUxQSGMAAAABcGLb1rKc3w2v7q4DJ9kAaDQqmeoO6WvfrwOIiAkgAZ1ysdTzY1dR8T1nMmj6aWkj/Gtk9P1iuZMD1KMQB19shdj4Mv+n64sMqhStbKHBSG/KQWswYo5fRaVm+umVi2WbBAQAVlA4ICoBAACwCACdASoUABIAAAAAJZQBIs/wA3AD8ANT/6MzzAN5s/o3ueeRLjgGeAOYA/EnUANNA2Qb+K/2H8t/6ByFf6AHbnjieihI0h2fQDdv9AAA/v/8Pn7/FOfrveJFoO1cXvVoF6Gf56QpmDj//9BH6Mm3kyL6dadDS+qj/ZMge3c8HgZL//jVu9lP6Zf8f//9kp352X3s3/j//tqkOlX8l5CczubHq5If/dtN/5BxWrgaFl6BxAwrf8HVrDiXsuGAuVcgA46v9t/799Mrn/NurpvAmoH9XSiMZbMvWli/T/rTQjomCZR7dNZzPXZH7b/9U7R2/+XBjapBlrbhXaVgPgdLpoQX/hFodXr6U/IUJMUVTgP/8MJlO80+PwaAEpEBlEAYOgIjf+QTwAAA"},"images":{"fallback":{"src":"/notes-app/static/56707a688fd8a5b5790a42196e43850b/ba326/no-signal.webp","srcSet":"/notes-app/static/56707a688fd8a5b5790a42196e43850b/76b97/no-signal.webp 160w,\\n/notes-app/static/56707a688fd8a5b5790a42196e43850b/f5c87/no-signal.webp 320w,\\n/notes-app/static/56707a688fd8a5b5790a42196e43850b/ba326/no-signal.webp 640w","sizes":"(min-width: 640px) 640px, 100vw"},"sources":[]},"width":640,"height":565}')}}]);
//# sourceMappingURL=component---src-pages-index-jsx-72cffa0b98bf234f53a3.js.map