import { galleryItems } from './gallery-items.js';
// Change code below this line

const paletteContainer = document.querySelector('.gallery');
const cardsMarkup = createImageCardMark(galleryItems);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

paletteContainer.addEventListener('click', onPaletteContainerClick);

console.log(createImageCardMark(galleryItems));

function createImageCardMark(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
</a>
</div>`
    })
        .join('');
};

function onPaletteContainerClick (event){
    event.preventDefault();
    const isImage = event.target.classList.contains("gallery__image");
    if (!isImage) { 
        return;
    }


    
const modal = basicLightbox.create(`
    <div class="modal">
<img src= "${event.target.dataset.source}" class= "js-image" width="800" height="600">
    </div>
`);
modal.show();
window.addEventListener('keydown', onKeyboardClick);
function onKeyboardClick(event){
        if(event.code === 'Escape'){
        modal.close();
        window.removeEventListener('keydown', onKeyboardClick);
    }
    }
};




// console.log(galleryItems);
