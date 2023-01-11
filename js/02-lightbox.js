import { galleryItems } from './gallery-items.js';
// Change code below this line
const RefGallerySimpleContainer = document.querySelector('.gallery');
const cardsGallery = createCardsSimpleGallery(galleryItems);

RefGallerySimpleContainer.insertAdjacentHTML('beforeend', cardsGallery);

RefGallerySimpleContainer.addEventListener('click', onCardSimpleGalleryClick);

function createCardsSimpleGallery(e){
  return galleryItems.map(({preview, original, description}) => 
    { return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="Image ${description}" />
  </a>
  `
}).join('')};
// console.log(galleryItems);

function onCardSimpleGalleryClick(e) {
  e.preventDefault();
  // console.log(e.target.nodeName);

  if(!e.target.nodeName === 'IMG') {
    return;
  }

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
}