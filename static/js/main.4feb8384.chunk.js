(this.webpackJsonptateti=this.webpackJsonptateti||[]).push([[0],{10:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(3),i=t.n(o),c=t(1);t(9);var l=function(){var e=Object(a.useState)(!1),n=Object(c.a)(e,2),t=n[0],o=n[1],i=Object(a.useState)([]),l=Object(c.a)(i,2),u=l[0],d=l[1],s=function(){for(var e=[],n=0;n<9;n++)e.push({index:n,jugador:null,valor:null});d(e)};return Object(a.useEffect)((function(){s()}),[]),Object(a.useEffect)((function(){u.length>0&&([[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].forEach((function(e){var n=u.find((function(n){return n.index===e[0]})),a=u.find((function(n){return n.index===e[1]})),r=u.find((function(n){return n.index===e[2]}));n.valor&&a.valor&&r.valor&&n.valor===a.valor&&a.valor===r.valor&&(alert("Felicidades al jugador: ".concat(t?1:2)),s())})),9===u.filter((function(e){return null!==e.valor})).length&&(alert("No hay ganador"),s()),o(!t))}),[u]),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"AppHeader"},"Turno para el jugador: ",t?1:2),r.a.createElement("main",{className:"AppMain"},r.a.createElement("div",{className:"Tablero"},u.map((function(e){return r.a.createElement("div",{key:e.index,className:"Item",onClick:function(){return function(e){if(!u.find((function(n){if(n.index===e.index&&e.valor)return!0}))){var n=u.map((function(n){return n.index===e.index?{index:e.index,jugador:t,valor:t?"X":"O"}:n}));d(n)}}(e)}},e.valor)})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,n,t){e.exports=t(10)},9:function(e,n,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.4feb8384.chunk.js.map