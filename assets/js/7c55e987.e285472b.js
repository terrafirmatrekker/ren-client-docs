(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{209:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return m}));var r=n(3),d=n(8),i=(n(0),n(488)),s=n(489),a={title:"LinkedList"},l={unversionedId:"gateway-sol/libraries/LinkedList",id:"gateway-sol/libraries/LinkedList",isDocsHomePage:!1,title:"LinkedList",description:"Contract: LinkedList",source:"@site/contracts/gateway-sol/libraries/LinkedList.mdx",slug:"/gateway-sol/libraries/LinkedList",permalink:"/ren-client-docs/contracts/gateway-sol/libraries/LinkedList",version:"current"},o=[{value:"Contract: <code>LinkedList</code>",id:"contract-linkedlist",children:[]},{value:"Variables",id:"variables",children:[{value:"<strong><code>NULL</code></strong>: <em><code>address</code></em>",id:"null-address",children:[]}]},{value:"Functions",id:"functions",children:[{value:"<strong><code>insertBefore</code></strong> <em><code>(struct LinkedList.List self, address target, address newNode)</code></em> (internal)",id:"insertbefore-struct-linkedlistlist-self-address-target-address-newnode-internal",children:[]},{value:"<strong><code>insertAfter</code></strong> <em><code>(struct LinkedList.List self, address target, address newNode)</code></em> (internal)",id:"insertafter-struct-linkedlistlist-self-address-target-address-newnode-internal",children:[]},{value:"<strong><code>remove</code></strong> <em><code>(struct LinkedList.List self, address node)</code></em> (internal)",id:"remove-struct-linkedlistlist-self-address-node-internal",children:[]},{value:"<strong><code>prepend</code></strong> <em><code>(struct LinkedList.List self, address node)</code></em> (internal)",id:"prepend-struct-linkedlistlist-self-address-node-internal",children:[]},{value:"<strong><code>append</code></strong> <em><code>(struct LinkedList.List self, address node)</code></em> (internal)",id:"append-struct-linkedlistlist-self-address-node-internal",children:[]},{value:"<strong><code>swap</code></strong> <em><code>(struct LinkedList.List self, address left, address right)</code></em> (internal)",id:"swap-struct-linkedlistlist-self-address-left-address-right-internal",children:[]},{value:"<strong><code>isInList</code></strong> <em><code>(struct LinkedList.List self, address node) \u2192 bool</code></em> (internal)",id:"isinlist-struct-linkedlistlist-self-address-node-\u2192-bool-internal",children:[]},{value:"<strong><code>begin</code></strong> <em><code>(struct LinkedList.List self) \u2192 address</code></em> (internal)",id:"begin-struct-linkedlistlist-self-\u2192-address-internal",children:[]},{value:"<strong><code>end</code></strong> <em><code>(struct LinkedList.List self) \u2192 address</code></em> (internal)",id:"end-struct-linkedlistlist-self-\u2192-address-internal",children:[]},{value:"<strong><code>next</code></strong> <em><code>(struct LinkedList.List self, address node) \u2192 address</code></em> (internal)",id:"next-struct-linkedlistlist-self-address-node-\u2192-address-internal",children:[]},{value:"<strong><code>previous</code></strong> <em><code>(struct LinkedList.List self, address node) \u2192 address</code></em> (internal)",id:"previous-struct-linkedlistlist-self-address-node-\u2192-address-internal",children:[]},{value:"<strong><code>elements</code></strong> <em><code>(struct LinkedList.List self, address _start, uint256 _count) \u2192 address[]</code></em> (internal)",id:"elements-struct-linkedlistlist-self-address-_start-uint256-_count-\u2192-address-internal",children:[]}]}],c={toc:o};function m(e){var t=e.components,n=Object(d.a)(e,["components"]);return Object(i.mdx)("wrapper",Object(r.default)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(s.DocTag,{type:s.DocType.Reference,mdxType:"DocTag"}),Object(i.mdx)("h2",{id:"contract-linkedlist"},"Contract: ",Object(i.mdx)("inlineCode",{parentName:"h2"},"LinkedList")),Object(i.mdx)("p",null,"LinkedList is a library for a circular double linked list."),Object(i.mdx)("hr",null),Object(i.mdx)("br",null),Object(i.mdx)("h2",{id:"variables"},"Variables"),Object(i.mdx)("h3",{id:"null-address"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"NULL")),": ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"address"))),Object(i.mdx)("hr",null),Object(i.mdx)("br",null),Object(i.mdx)("h2",{id:"functions"},"Functions"),Object(i.mdx)("h3",{id:"insertbefore-struct-linkedlistlist-self-address-target-address-newnode-internal"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"insertBefore"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(struct LinkedList.List self, address target, address newNode)"))," (internal)"),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Params")),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("inlineCode",{parentName:"p"},"self"),": The list being used.")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("inlineCode",{parentName:"p"},"target"),": The existing node in the list.")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("inlineCode",{parentName:"p"},"newNode"),": The next node to insert before the target."))),Object(i.mdx)("p",null,"Insert a new node before an existing node."),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"insertafter-struct-linkedlistlist-self-address-target-address-newnode-internal"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"insertAfter"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(struct LinkedList.List self, address target, address newNode)"))," (internal)"),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Params")),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("inlineCode",{parentName:"p"},"self"),": The list being used.")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("inlineCode",{parentName:"p"},"target"),": The existing node in the list.")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("inlineCode",{parentName:"p"},"newNode"),": The next node to insert after the target."))),Object(i.mdx)("p",null,"Insert a new node after an existing node."),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"remove-struct-linkedlistlist-self-address-node-internal"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"remove"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(struct LinkedList.List self, address node)"))," (internal)"),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Params")),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("inlineCode",{parentName:"p"},"self"),": The list being using.")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("inlineCode",{parentName:"p"},"node"),": The node in the list to be removed."))),Object(i.mdx)("p",null,"Remove a node from the list, and fix the previous and next\npointers that are pointing to the removed node. Removing anode that is not\nin the list will do nothing."),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"prepend-struct-linkedlistlist-self-address-node-internal"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"prepend"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(struct LinkedList.List self, address node)"))," (internal)"),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Params")),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("inlineCode",{parentName:"p"},"self"),": The list being used.")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("inlineCode",{parentName:"p"},"node"),": The node to insert at the beginning of the list."))),Object(i.mdx)("p",null,"Insert a node at the beginning of the list."),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"append-struct-linkedlistlist-self-address-node-internal"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"append"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(struct LinkedList.List self, address node)"))," (internal)"),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Params")),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("inlineCode",{parentName:"p"},"self"),": The list being used.")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("inlineCode",{parentName:"p"},"node"),": The node to insert at the end of the list."))),Object(i.mdx)("p",null,"Insert a node at the end of the list."),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"swap-struct-linkedlistlist-self-address-left-address-right-internal"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"swap"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(struct LinkedList.List self, address left, address right)"))," (internal)"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"isinlist-struct-linkedlistlist-self-address-node-\u2192-bool-internal"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"isInList"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(struct LinkedList.List self, address node) \u2192 bool"))," (internal)"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"begin-struct-linkedlistlist-self-\u2192-address-internal"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"begin"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(struct LinkedList.List self) \u2192 address"))," (internal)"),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Params")),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"self"),": The list being used.")),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Returns")),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"A"),": address identifying the node at the beginning of the double\nlinked list.")),Object(i.mdx)("p",null,"Get the node at the beginning of a double linked list."),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"end-struct-linkedlistlist-self-\u2192-address-internal"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"end"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(struct LinkedList.List self) \u2192 address"))," (internal)"),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Params")),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"self"),": The list being used.")),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Returns")),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"A"),": address identifying the node at the end of the double linked\nlist.")),Object(i.mdx)("p",null,"Get the node at the end of a double linked list."),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"next-struct-linkedlistlist-self-address-node-\u2192-address-internal"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"next"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(struct LinkedList.List self, address node) \u2192 address"))," (internal)"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"previous-struct-linkedlistlist-self-address-node-\u2192-address-internal"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"previous"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(struct LinkedList.List self, address node) \u2192 address"))," (internal)"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"elements-struct-linkedlistlist-self-address-_start-uint256-_count-\u2192-address-internal"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"elements"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(struct LinkedList.List self, address _start, uint256 _count) \u2192 address[]"))," (internal)"),Object(i.mdx)("hr",null))}m.isMDXComponent=!0},488:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return c})),n.d(t,"MDXProvider",(function(){return u})),n.d(t,"mdx",(function(){return x})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return m}));var r=n(0),d=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,d=function(e,t){if(null==e)return{};var n,r,d={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(d[n]=e[n]);return d}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}var c=d.a.createContext({}),m=function(e){return function(t){var n=p(t.components);return d.a.createElement(e,s({},t,{components:n}))}},p=function(e){var t=d.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return d.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return d.a.createElement(d.a.Fragment,{},t)}},O=d.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,a=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,u=c["".concat(s,".").concat(m)]||c[m]||b[m]||i;return n?d.a.createElement(u,l(l({ref:t},a),{},{components:n})):d.a.createElement(u,l({ref:t},a))}));function x(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=O;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var o=2;o<i;o++)s[o]=n[o];return d.a.createElement.apply(null,s)}return d.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},489:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var d=r(n(0));let i;t.DocType=i,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(i||(t.DocType=i={}));const s={[i.Tutorial]:"#b16bfc",[i.HowTo]:"#EC0088",[i.Reference]:"#ff823a",[i.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:{border:"2px solid "+s[e]||!1,borderRadius:"5px",color:s[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);