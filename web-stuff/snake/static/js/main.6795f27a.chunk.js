(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],{11:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),c=t(3),a=t.n(c),f=(t(8),t(9),t(1)),i=30,l=20,u=25,s=[],h=1,g=1,v=[[0,-1],[1,0],[0,1],[-1,0]],d=[],m=!1;function b(){var e=Object(r.useRef)(null);return Object(r.useEffect)((function(){var n=e.current.getContext("2d");!function(e){document.onkeydown=function(n){switch(n.code){case"ArrowUp":g=0;break;case"ArrowRight":g=1;break;case"ArrowDown":g=2;break;case"ArrowLeft":g=3;break;case"Space":case"Enter":k(e)}}}(n),w(),k(n)}),[]),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("canvas",{ref:e,width:750,height:500})})}function p(e,n){var t=document.timeline?document.timeline.currentTime:performance.now();!function r(o){var c=o-t,a=Math.round(c/e)*e;setTimeout((function(){return requestAnimationFrame((function(){m=!1,function(e){n=g,h=h%2===n%2?h:n;var n;for(var t=v[h],r=s[s.length-1],o=!1,c=0;c<d.length;c++)r[0]===d[c][0]&&r[1]===d[c][1]&&(o=!0,d.splice(c,1),w());r=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=s[s.length-1],r=[t[0]+e[0],t[1]+e[1]];n||s.shift();return s.push(r),r}(t,o);for(var a=0;a<s.length-1;a++)if(r[0]===s[a][0]&&r[1]===s[a][1])return console.log("game over"),!0;if(r[0]>i||r[0]<0||r[1]>l||r[1]<0)return console.log("game over"),!0;return function(e){e.fillStyle="#333333";for(var n=0;n<l;n++)for(var t=0;t<i;t++)j(e,t,n,u,1);e.fillStyle="#990000";for(var r=0;r<d.length;r++)j(e,d[r][0],d[r][1],u,1);e.fillStyle="#999999";for(var o=0;o<s.length-1;o++)j(e,s[o][0],s[o][1],u,1);e.fillStyle="#ffffff",j(e,s[s.length-1][0],s[s.length-1][1],u,1)}(e),!1}(n)||(m=!0,r(performance.now()))}))}),t+a+e-o)}(t)}function w(){for(var e=!1,n=[];!e;){e=!0,n=[Math.floor(Math.random()*i),Math.floor(Math.random()*l)];for(var t=0;t<s.length;t++)n[0]===s[t][0]&&n[1]===s[t][1]&&(e=!1)}d.push(n)}function j(e,n,t,r,o){e.fillRect(n*r+o,t*r+o,r-2*o,r-2*o)}function k(e){if(!m){var n=Math.floor(15),t=Math.floor(10);s=[[n+0,t],[n+1,t],[n+2,t]],h=1,p(200,e)}}var M=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,12)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),r(e),o(e),c(e),a(e)}))};a.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(b,{})}),document.getElementById("root")),M()},8:function(e,n,t){},9:function(e,n,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.6795f27a.chunk.js.map