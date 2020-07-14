(this["webpackJsonpuppeabhishek-website"]=this["webpackJsonpuppeabhishek-website"]||[]).push([[4],{44:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return o}));var n=a(7),i=n.c.div.withConfig({displayName:"styles__Styles",componentId:"sc-17cbyon-0"})(["flex:1;max-width:70%;overflow:auto;display:flex;flex-direction:column;padding:40px 15% 0 15%;.filters{justify-content:space-between;margin-bottom:40px;.each-filter{width:100%;height:40px;border:1px solid transparant;border-radius:4px;padding:5px 10px;font-size:16px;cursor:pointer;}.each-filter.active{color:white;background-color:",";}}"],(function(e){return e.theme.primaryColor})),r=n.c.div.withConfig({displayName:"styles__ProjectStyles",componentId:"sc-17cbyon-1"})(["display:flex;flex-wrap:wrap;.project{transform:rotateY(0deg);transform-style:preserve-3d;transition-property:transform;transition-duration:1s;cursor:pointer;height:200px;border:1px solid grey;flex:1 0 33%;.img{width:100%;height:100%;background-repeat:no-repeat;background-size:100% 100%;}}.project:hover{opacity:0.7;}"]),o=n.c.div.withConfig({displayName:"styles__ProjectDescriptionStyles",componentId:"sc-17cbyon-2"})(["display:flex;flex-direction:column;padding:10px;.goback{width:100px;left:10px;}.main{.header{margin-bottom:50px;justify-content:space-between;.title{font-size:3rem;}.project-links{display:flex;justify-content:space-between;a:not(:last-child){margin-right:10px;}}}.technologies{display:flex;.description{font-size:20px;width:40%;li{margin-bottom:15px;}}.slider{width:60%}@media only screen and (max-width:600px){display:block;.description{width:100%;}.slider{width:100%}}}a{cursor:pointer;}}"])},47:function(e,t,a){"use strict";a.d(t,"b",(function(){return l}));var n=a(0),i=a.n(n),r=a(1),o=a(44),s=a(48),c=a.n(s),l={Javascript:[{image:c.a,name:"memory-game",displayName:"Memory Game",technologies:["Javascript"],allImages:[c.a,c.a],description:"This is a simple memory game written in vanilla javascript. Here the user should match all the cards in the group of 2 to win the game.",demoURL:"https://uppeabhishek.github.io/memory-game/",github:"https://github.com/uppeabhishek/memory-game/",type:"Javascript"}],Python:[{image:c.a,name:"ds-algo",displayName:"Data Structures and Algorithms",technologies:["Python"],description:"In this projects I have implemented various data structures and algorithms in python.",allImages:[c.a,c.a],github:"https://github.com/uppeabhishek/Data-Structures-and-Algorithms",type:"Python"}],ReactJS:[{image:c.a,name:"sorting-visualizer",displayName:"Sorting Visualizer",technologies:["React JS"],description:'<div>\n                    <div style="font-weight: bold">\n                        Features\n                    </div>\n                    <ul>\n                        <li>\n                            Users can manually select a algorithm from the given list of algorithms.\n                        </li>\n                        <li>\n                            We can even add custom data and visualize the respective alogorithm.\n                        </li>\n                        <li>\n                            We can intialize the array either in increasing, decreasing, random (or) almost sorted manner.\n                        </li>\n                    </ul>\n                </div>',allImages:[c.a,c.a,c.a],demoURL:"https://uppeabhishek.github.io/sorting-visualizer/",github:"https://github.com/uppeabhishek/sorting-visualizer/",type:"ReactJS"}]};t.a=function(e){var t=e.name,a=[];"All"===t?Object.values(l).forEach((function(e){a=a.concat(e)})):"ReactJS"!==t&&"Javascript"!==t&&"Python"!==t||(a=a.concat(l[t]));var n=Object(r.f)(),s=function(e){n.push("/projects/".concat(e.currentTarget.dataset.type,"/").concat(e.currentTarget.dataset.name))};return i.a.createElement(o.b,{className:"projects"},a.map((function(e){return i.a.createElement("div",{key:e.name,className:"project center-items","data-name":e.name,"data-type":e.type,onClick:s},i.a.createElement("div",{className:"img",style:{backgroundImage:"url(".concat(e.image,")")}}),i.a.createElement("div",{className:"description"},e.displayName))})))}},48:function(e,t,a){e.exports=a.p+"static/media/dummyImage.0822b25f.svg"},72:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,i=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(c){i=!0,r=c}finally{try{n||null==s.return||s.return()}finally{if(i)throw r}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.r(t);var r=a(0),o=a.n(r),s=a(44),c=a(47);t.default=function(){var e=Object(r.useRef)(["All","ReactJS","Javascript","Python"]),t=i(Object(r.useState)(e.current[0]),2),a=t[0],n=t[1];return o.a.createElement(s.c,null,o.a.createElement("div",{className:"filters d-flex"},e.current.map((function(e){var t=e===a?"active":"";return o.a.createElement("div",{key:e,className:"center-items each-filter ".concat(t),role:"img",onClick:function(){n(e)},onKeyDown:function(t){return function(e,t){"Enter"===e.key&&n(t)}(t,e)}},e)}))),o.a.createElement(c.a,{name:a}))}}}]);
//# sourceMappingURL=4.74431ba5.chunk.js.map