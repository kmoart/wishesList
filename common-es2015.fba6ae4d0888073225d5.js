(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return a}));const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=()=>{i.selection()},o=()=>{i.selectionStart()},s=()=>{i.selectionChanged()},a=()=>{i.selectionEnd()},c=t=>{i.impact(t)}},"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=t*e/n-t+"ms",r=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,r=t*i-t+"ms",o=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));const i=async(t,e,n,i,r)=>{if(t)return t.attachViewToDom(e,n,r,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>o.classList.add(t)),r&&Object.assign(o,r),e.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},r=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},PYW1:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("ePDZ"),r=n("ItpF"),o=n("2c9M");const s=(t,e)=>{let n,s;const a=(t,i,r)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(t,i);o&&e(o)?o!==n&&(l(),c(o,r)):l()},c=(t,e)=>{n=t,s||(s=n);const r=n;Object(i.g)(()=>r.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;Object(i.g)(()=>e.classList.remove("ion-activated")),t&&s!==n&&n.click(),n=void 0};return Object(r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>a(t.currentX,t.currentY,o.a),onMove:t=>a(t.currentX,t.currentY,o.b),onEnd:()=>{l(!0),Object(o.e)(),s=void 0}})}},VnTo:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i=n("mrSG"),r=n("TEn/"),o=n("fXoL"),s=n("Z16M"),a=n("tyNb"),c=n("ofXK");let l=(()=>{class t{transform(t,e=!0){return t.filter(t=>t.terminada===e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=o.Gb({name:"filtroCompletado",type:t,pure:!1}),t})();function u(t,e){if(1&t){const t=o.Lb();o.Kb(0,"ion-item-sliding"),o.Kb(1,"ion-item-options",2),o.Kb(2,"ion-item-option",3),o.Sb("click",(function(){o.bc(t);const n=e.$implicit;return o.Ub().editarTitulo(n)})),o.Ib(3,"ion-icon",4),o.Jb(),o.Jb(),o.Kb(4,"ion-item",5),o.Sb("click",(function(){o.bc(t);const n=e.$implicit;return o.Ub().listaSeleccionada(n)})),o.Kb(5,"ion-label"),o.Kb(6,"h2"),o.fc(7),o.Jb(),o.Jb(),o.Kb(8,"ion-note",6),o.fc(9),o.Jb(),o.Jb(),o.Kb(10,"ion-item-options",7),o.Kb(11,"ion-item-option",8),o.Sb("click",(function(){o.bc(t);const n=e.$implicit;return o.Ub().borrarLista(n)})),o.Ib(12,"ion-icon",9),o.Jb(),o.Jb(),o.Jb()}if(2&t){const t=e.$implicit;o.xb(7),o.gc(t.titulo),o.xb(2),o.hc("",t.items.length," items")}}let d=(()=>{class t{constructor(t,e,n){this.deseosService=t,this.router=e,this.alertCtrl=n,this.terminada=!0}ngOnInit(){}listaSeleccionada(t){this.router.navigateByUrl(this.terminada?"tabs/tab2/agregar/"+t.id:"tabs/tab1/agregar/"+t.id)}borrarLista(t){this.deseosService.borrarLista(t)}editarTitulo(t){return Object(i.a)(this,void 0,void 0,(function*(){const e=yield this.alertCtrl.create({cssClass:"my-custom-class",header:"Nuevo titulo",inputs:[{name:"titulo",type:"text",value:t.titulo,placeholder:"Nombre de la lista"}],buttons:[{text:"Cancelar",role:"cancel",handler:()=>{console.log("Cancelar"),this.lista.closeSlidingItems()}},{text:"Editar",handler:e=>{console.log(e),0!==e.titulo.lenght&&(t.titulo=e.titulo,this.deseosService.guardarStorage(),this.lista.closeSlidingItems())}}]});yield e.present()}))}}return t.\u0275fac=function(e){return new(e||t)(o.Hb(s.a),o.Hb(a.g),o.Hb(r.a))},t.\u0275cmp=o.Bb({type:t,selectors:[["app-listas"]],viewQuery:function(t,e){var n;1&t&&o.ic(r.s,!0),2&t&&o.ac(n=o.Tb())&&(e.lista=n.first)},inputs:{terminada:"terminada"},decls:3,vars:4,consts:[["color","dark"],[4,"ngFor","ngForOf"],["side","start"],["color","primary",3,"click"],["name","create-outline","slot","icon-only"],["detail","","color","dark",3,"click"],["slot","end","color","tertiary"],["side","end"],["color","danger","expandable","",3,"click"],["name","close","slot","icon-only"]],template:function(t,e){1&t&&(o.Kb(0,"ion-list",0),o.ec(1,u,13,2,"ion-item-sliding",1),o.Vb(2,"filtroCompletado"),o.Jb()),2&t&&(o.xb(1),o.Zb("ngForOf",o.Wb(2,1,e.deseosService.listas,e.terminada)))},directives:[r.s,c.h,r.q,r.p,r.o,r.l,r.n,r.r,r.u],pipes:[l],styles:[""]}),t})()},Z16M:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));class i{constructor(t){this.titulo=t,this.creadaEn=new Date,this.terminada=!1,this.items=[],this.id=(new Date).getTime()}}var r=n("fXoL");let o=(()=>{class t{constructor(){this.listas=[],this.cargarStorage(),console.log(this.listas)}crearLista(t){const e=new i(t);return this.listas.push(e),this.guardarStorage(),e.id}borrarLista(t){this.listas=this.listas.filter(e=>e.id!==t.id),this.guardarStorage()}obtenerLista(t){return t=Number(t),this.listas.find(e=>e.id===t)}guardarStorage(){localStorage.setItem("data",JSON.stringify(this.listas))}cargarStorage(){this.listas=JSON.parse(localStorage.getItem("data"))?JSON.parse(localStorage.getItem("data")):[]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},hcCc:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return a}));const i=(t,e)=>null!==e.closest(t),r=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,["ion-color-"+t]:!0}:void 0,o=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n,i)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(t,n,i)}return!1}},j1ZV:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("ofXK"),r=n("TEn/"),o=n("fXoL");let s=(()=>{class t{}return t.\u0275mod=o.Fb({type:t}),t.\u0275inj=o.Eb({factory:function(e){return new(e||t)}}),t})(),a=(()=>{class t{}return t.\u0275mod=o.Fb({type:t}),t.\u0275inj=o.Eb({factory:function(e){return new(e||t)},imports:[[i.b,r.B,s]]}),t})()},qtYk:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("ofXK"),r=n("3Pt+"),o=n("TEn/"),s=n("fXoL");let a=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(e){return new(e||t)},imports:[[i.b,r.a,o.B]]}),t})()}}]);