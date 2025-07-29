import{a as m,S as d,i as n}from"./assets/vendor-5YrzWRhu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const p="51531821-5afef54d8c3faaf13946a7acb",y="https://pixabay.com/api/";async function h(s){try{return(await m.get(y,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(r){throw console.error("Error fetching images:",r),new Error("Failed to fetch images from Pixabay.")}}const f=document.querySelector(".gallery"),u=document.querySelector(".loader");let i;function g(){i||(i=new d(".gallery a",{captionsData:"alt",captionDelay:250}))}function b(s){const r=s.map(t=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}"
          />
        </a>
        <div class="image-info">
          <p class="info-item"><b>Likes</b> ${t.likes}</p>
          <p class="info-item"><b>Views</b> ${t.views}</p>
          <p class="info-item"><b>Comments</b> ${t.comments}</p>
          <p class="info-item"><b>Downloads</b> ${t.downloads}</p>
        </div>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",r),i?i.refresh():g()}function L(){f.innerHTML=""}function w(){u.classList.remove("hidden")}function v(){u.classList.add("hidden")}const c=document.querySelector(".form"),P=c.elements["search-text"];c.addEventListener("submit",async s=>{s.preventDefault();const r=P.value.trim();if(r===""){n.error({title:"Error",message:"Please enter a search query.",position:"topRight",timeout:3e3});return}L(),w();try{const t=await h(r);t.hits.length===0?n.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3}):b(t.hits)}catch(t){n.error({title:"Error",message:t.message||"Something went wrong. Please try again later.",position:"topRight",timeout:5e3})}finally{v(),c.reset()}});
//# sourceMappingURL=index.js.map
