(()=>{"use strict";const e=e=>{const t=document.createElement("p");return t.textContent=e,t},t=e=>{const t=document.createElement("p");return t.textContent=e,t},n=e=>{const t=document.createElement("button");return t.classList.add("btn"),t.textContent=e,t};(()=>{const d=document.querySelector("#content");d.appendChild((()=>{const e=n("Home");return e.addEventListener("click",(()=>{(()=>{const e=document.querySelector(".current-page");e.textContent="",e.appendChild((()=>{const e=document.createElement("div");return e.classList.add("home"),e.appendChild(t("First Line.")),e.appendChild(t("Second Line.")),e.appendChild(t("Third Line.")),e.appendChild(t("Fourth Line.")),e})())})()})),e})()),d.appendChild((()=>{const t=n("Menu");return t.addEventListener("click",(()=>{(()=>{const t=document.querySelector(".current-page");t.textContent="",t.appendChild((()=>{const t=document.createElement("div");return t.classList.add("menu"),t.appendChild(e("Appetiser")),t.appendChild(e("Main")),t.appendChild(e("Pudding")),t.appendChild(e("Drinks")),t})())})()})),t})());const c=document.createElement("div");d.appendChild(c),c.classList.add("current-page")})()})();