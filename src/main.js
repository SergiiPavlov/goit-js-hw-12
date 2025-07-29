// src/main.js
import { getImagesByQuery } from './js/pixabay-api.js'; 
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  initLightbox,
} from './js/render-functions.js'; 
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './css/styles.css'; 

const searchForm = document.querySelector('.form');
const searchInput = searchForm.elements['search-text'];

searchForm.addEventListener('submit', async event => {
  event.preventDefault(); 
  const query = searchInput.value.trim(); 

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
      position: 'topRight',
      timeout: 3000,
    });
    return;
  }

  clearGallery(); 
  showLoader(); 

  try {
      const data = await getImagesByQuery(query); 
      
    if (data.hits.length === 0) {
      iziToast.info({
        title: 'No results',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 5000,
      });
    } else {
      createGallery(data.hits); 
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message || 'Something went wrong. Please try again later.',
      position: 'topRight',
      timeout: 5000,
    });
  } finally {
    hideLoader(); 
    searchForm.reset(); 
  }
});