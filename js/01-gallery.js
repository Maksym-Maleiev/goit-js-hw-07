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

function onPaletteContainerClick(evt) {
    if (evt.target.classList.contains('.gallery')) {
        return
    }
    // const onPaletteContainerClick = event.target.dataset.image;
    // output.textContent = `Url: ${onPaletteContainerClick}`;
    // output.style.color = onPaletteContainerClick;

    console.log(evt.target);
};





// console.log(galleryItems);
