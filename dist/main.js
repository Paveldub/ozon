!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(){document.querySelectorAll(".goods .card").forEach(e=>{let t=e.querySelector(".card-price"),n=parseFloat(t.textContent),o=e.querySelector(".card-sale"),c=document.getElementById("discount-checkbox"),r=document.getElementById("min"),l=document.getElementById("max"),a=document.querySelectorAll(".catalog-list li.active");e.parentNode.style.display="",r.value&&n<r.value||l.value&&n>l.value?e.parentNode.style.display="none":c.checked&&!o?e.parentNode.style.display="none":a&&e.dataset.category!=a.textContent&&(e.parentNode.style.display="")})}n.r(t),async function(){const e=await function(){const e=document.querySelector(".goods");return fetch("../db/db.json").then(e=>{if(e.ok)return e.json();throw new Error(e.status)}).then(e=>e).catch(t=>{console.warn(t),e.innerHTML='<div style="color: red; font-weight: 700">Something went wrong!</div>'})}();e.goods.forEach(e=>{const t=document.createElement("div"),n=document.querySelector(".goods");t.className="ol-12 col-md-6 col-lg-4 col-xl-3",t.innerHTML=`\n\t\t\t\t<div class="card" data-category="${e.category}">\n\t\t\t\t${e.sale?'<div class="card-sale">🔥Hot Sale🔥</div>':""}\n\t\t\t\t\t<div class="card-img-wrapper">\n\t\t\t\t\t\t<span class="card-img-top" style="background-image: url('${e.img}')"></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="card-body justify-content-between">\n\t\t\t\t\t\t<div class="card-price">${e.price} р</div>\n\t\t\t\t\t\t<h5 class="card-title">${e.title}</h5>\n\t\t\t\t\t\t<button class="btn btn-primary">В корзину</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t`,n.appendChild(t)}),function(){const e=document.querySelectorAll(".goods .card");let t=new Set;const n=document.querySelector(".catalog-list"),c=document.querySelector(".catalog-button"),r=document.querySelector(".catalog");e.forEach(e=>{t.add(e.dataset.category)}),t.forEach(e=>{let t=document.createElement("li");t.innerHTML=e,n.appendChild(t)});const l=n.querySelectorAll("li");let a=document.querySelector(".filter-title h5");c.addEventListener("click",(function(e){r.style.display?r.style.display="":r.style.display="block","LI"===e.target.tagName&&(l.forEach(t=>{t===e.target?t.classList.add("active"):t.classList.remove("active")}),o(),a.textContent=e.target.textContent)}))}(),function(){const e=document.querySelectorAll(".goods .card"),t=document.getElementById("discount-checkbox"),n=document.getElementById("min"),c=document.getElementById("max"),r=document.querySelector(".search-wrapper_input"),l=document.querySelector(".search-btn");t.addEventListener("change",o),n.addEventListener("change",o),c.addEventListener("change",o),l.addEventListener("click",(function(){const t=new RegExp(r.value.trim(),"i");e.forEach(e=>{const n=e.querySelector(".card-title");t.test(n.textContent)?e.parentNode.style.display="":e.parentNode.style.display="none"}),r.value=""}))}(),function(){const e=document.querySelectorAll(".goods .card"),t=document.querySelector(".cart-wrapper"),n=document.getElementById("cart-empty"),o=document.querySelector(".counter");function c(){let e=t.querySelectorAll(".card"),c=t.querySelectorAll(".card-price"),r=document.querySelector(".cart-total span"),l=0;o.textContent=e.length,c.forEach(e=>{let t=parseFloat(e.textContent);l+=t}),r.textContent=l,0!==e.length?n.remove():t.appendChild(n)}e.forEach(e=>{e.querySelector("button").addEventListener("click",()=>{const n=e.cloneNode(!0);t.appendChild(n),c();const o=n.querySelector(".btn");o.textContent="Удалить из корзины",o.addEventListener("click",()=>{n.remove(),c()})})})}(),function(){const e=document.getElementById("cart"),t=document.querySelector(".cart"),n=document.querySelector(".cart-close");e.addEventListener("click",()=>{t.style.display="block",document.body.style.overflow="hidden"}),n.addEventListener("click",()=>{t.style.display="none",document.body.style.overflow=""})}(),document.querySelectorAll(".filter-check_checkbox").forEach((function(e){e.addEventListener("change",(function(){!0===this.checked?this.nextElementSibling.classList.add("checked"):this.nextElementSibling.classList.remove("checked")}))}))}()}]);