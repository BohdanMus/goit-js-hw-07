import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector(".gallery");
const item = [];

galleryItems.forEach((element) => {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery__item");
    
    const galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery__link");

    galleryLink.href = element.original;

    const galleryImage = document.createElement("img");
    galleryImage.classList.add("gallery__image");

    galleryImage.src = element.preview;
    galleryImage.setAttribute("data-source", element.original);
    galleryImage.alt = element.description;

    galleryItem.append(galleryLink);
    galleryItem.append(galleryImage)
    item.push(galleryItem);
    
});

gallery.append(...item);

document.addEventListener("click", (el) => {
    el.preventDefault();
    if(el.target.nodeName !== "IMG") {
        return;
    }
const imgSelected = el.target.getAttribute("data-source");

const template = basicLightbox.create(
    `<img src="${imgSelected}" width="800" height="600">`
)

});
