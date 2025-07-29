import{a as S,S as q,i}from"./assets/vendor-LK6CqzKq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();console.log("My API key is:",void 0);const E="51538223-25b49840deb67c415b2c65751",R="https://pixabay.com/api/";async function g(s,e=1){try{return(await S.get(R,{params:{key:E,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}catch(r){throw console.error("Error fetching images:",r),new Error("Failed to fetch images from Pixabay.")}}const h=document.querySelector(".gallery"),y=document.querySelector(".loader"),p=document.querySelector(".load-more-btn");let c;function I(){c||(c=new q(".gallery a",{captionsData:"alt",captionDelay:250}))}function b(s){const e=s.map(r=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
          <img
            class="gallery-image"
            src="${r.webformatURL}"
            alt="${r.tags}"
          />
        </a>
        <div class="image-info">
          <p class="info-item"><b>Likes</b> ${r.likes}</p>
          <p class="info-item"><b>Views</b> ${r.views}</p>
          <p class="info-item"><b>Comments</b> ${r.comments}</p>
          <p class="info-item"><b>Downloads</b> ${r.downloads}</p>
        </div>
      </li>
    `).join("");h.insertAdjacentHTML("beforeend",e),c?c.refresh():I()}function B(){h.innerHTML=""}function L(){y.classList.remove("hidden")}function w(){y.classList.add("hidden")}function v(){p.classList.remove("hidden")}function u(){p.classList.add("hidden")}const f=document.querySelector(".form"),M=f.elements["search-text"],$=document.querySelector(".load-more-btn");let l="",n=1,m=0;const P=15;f.addEventListener("submit",async s=>{if(s.preventDefault(),l=M.value.trim(),n=1,B(),u(),l===""){i.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}L();try{const e=await g(l,n);m=e.totalHits,e.hits.length===0?i.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(b(e.hits),m>P?v():i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){i.error({title:"Error",message:e.message||"Something went wrong. Please try again later.",position:"topRight"})}finally{w(),f.reset()}});$.addEventListener("click",async()=>{n+=1,u(),L();try{const s=await g(l,n);b(s.hits);const e=document.querySelector(".gallery-item");if(e){const a=e.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}n*P>=m?(u(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):v()}catch(s){i.error({title:"Error",message:s.message||"Something went wrong. Please try again later.",position:"topRight"})}finally{w()}});
//# sourceMappingURL=index.js.map
