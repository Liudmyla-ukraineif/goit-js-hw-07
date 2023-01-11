import { galleryItems } from './gallery-items.js';
// Change code below this line

const RefGalleryContainer = document.querySelector('.gallery');
const cardsGallery = createCardsGallery(galleryItems);

RefGalleryContainer.insertAdjacentHTML('beforeend', cardsGallery);

RefGalleryContainer.addEventListener('click', onCardGalleryClick);

function createCardsGallery(galleryItems){
  return galleryItems.map(({preview, original, description}) => 
    { return `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
  `
}).join('')};

function onCardGalleryClick(e) {
  e.preventDefault();
  if(!e.target.classList.contains('gallery__image')){
    return;
  }

  const instance = basicLightbox.create(`
  <div class="modal">
    <img src="${e.target.dataset.source}" width="800" height="600">
  </div>`, 
  
  // {
  //   onShow: (instance) => {
  //     instance.addEventListener('keydown', onGalleryModalClose);
  //   },
  //   onClose: (instance) => {
  //     instance.removeEventListener('keydown', onGalleryModalClose);
  //   },
  // },
  )
  instance.show()

  function onGalleryModalClose(e){
    if(e.code === 'Escape'){
      instance.close();
    } 
  }
}