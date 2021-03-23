(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{115:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(a),u=n,d=s["".concat(c,".").concat(u)]||s[u]||m[u]||i;return a?r.a.createElement(d,o(o({ref:t},p),{},{components:a})):r.a.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var p=2;p<i;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(115)),c={id:"cheatsheet",title:"Cheatsheet"},o={unversionedId:"cheatsheet",id:"cheatsheet",isDocsHomePage:!1,title:"Cheatsheet",description:"1. cpbooster comes with a short alias command called cpb to avoid writing the long command each time",source:"@site/docs/cheatsheet.mdx",slug:"/cheatsheet",permalink:"/cpbooster/docs/cheatsheet",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/cheatsheet.mdx",version:"current",sidebar:"docs",previous:{title:"What is cpbooster?",permalink:"/cpbooster/docs/about"},next:{title:"Installation",permalink:"/cpbooster/docs/installation"}},l=[],p={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"cpbooster")," comes with a short alias command called ",Object(i.b)("inlineCode",{parentName:"p"},"cpb")," to avoid writing the long command each time")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Automatically clone sample testcases files with corresponding source code files with template loaded into a desired directory"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cpb clone")," waits for competitive companion plugin to send parsed data for each problem"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create source files with corresponding template loaded"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cpb create a.py")," creates single file with corresponding template loaded based on file extension"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cpb create {a..n}.cpp"),' creates multiple consecutive files from "a.cpp" to "n.cpp"'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cpb create {a...n}.cpp")," same as previous command (Any amount of dots greater than 1 work)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cpb create {a-n}.cpp")," same as previous command (Single dash also works)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cpb create /some/path/a.cpp"),' creates "a.cpp" in the specified path instead of current location'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cpb create /some/path/{a-n}.cpp"),' creates "a.cpp ... n.cpp" in the specified path instead of current location'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Test your code against sample testcases quickly"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cpb test mycode.cpp")," test your program against all available test cases"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cpb test mycode.cpp -t 1")," test your program against the test case with the given id"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cpb test /some/path/mycode.cpp")," test a program that is not located in your current location")),Object(i.b)("p",{parentName:"li"},"Supported results:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"AC")," (Accepted)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"WA")," (Wrong Answer) Shows differences between accepted output and your output beautifully"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"TLE")," (Time Limit Exceeded)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"RTE")," (Runtime Error)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"CE")," (Compilation Error)"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Run code with your own debugging flags easily"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cpb test mycode.cpp -d")," to use keyboard as input"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cpb test mycode.cpp -t 2 -d")," to use a test case file as input"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cpb test /some/path/mycode.cpp -d")," debug a program that is not located in your current location"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Submit your code from the terminal really quickly."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cpb submit mycode.cpp")," submits your file to the corresponding judge."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"open a new terminal in the contest directory immediately after cloning it"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"List of ",Object(i.b)("strong",{parentName:"li"},"supported terminals")," for this feature:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"konsole"),Object(i.b)("li",{parentName:"ul"},"xterm"),Object(i.b)("li",{parentName:"ul"},"gnome-terminal"),Object(i.b)("li",{parentName:"ul"},"deepin-terminal"),Object(i.b)("li",{parentName:"ul"},"terminal (MacOS)"),Object(i.b)("li",{parentName:"ul"},"kitty"),Object(i.b)("li",{parentName:"ul"},"vscode",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"I recommend adding this setting to your vscode ",Object(i.b)("inlineCode",{parentName:"li"},"settings.json")," so that green doesn't look to bright:\n",Object(i.b)("inlineCode",{parentName:"li"},'"workbench.colorCustomizations" : { "terminal.ansiGreen":"#5b8a3a" }'))))))))))}b.isMDXComponent=!0}}]);