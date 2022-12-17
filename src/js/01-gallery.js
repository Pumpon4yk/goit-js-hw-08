// Add imports above this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryRefs = document.querySelector(".gallery");
const gallery = createGallery(galleryItems);

galleryRefs.insertAdjacentHTML("beforeend", gallery)

function createGallery(arrey) {
    return arrey.map(({preview, original, description}) =>
    `
    <div>
    <a class="gallery__item" 
    href="${original}"
    onclick="return false;">
    <img class="gallery__image" 
    src="${preview}" 
    alt="${description}"/>
    </a>
    </div>
    `).join("");
}

const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250,});

lightbox.on('show.simplelightbox')