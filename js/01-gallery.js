import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const items = [];

galleryItems.forEach((element) => {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");

  galleryLink.href = element.original;

  const galleryImg = document.createElement("img");
  galleryImg.classList.add("gallery__image");

  galleryImg.src = element.preview;
  galleryImg.setAttribute("data-source", element.original);
  galleryImg.alt = element.description;

  galleryItem.append(galleryLink);
  galleryLink.append(galleryImg);
  items.push(galleryItem);
});

gallery.append(...items);

document.addEventListener("click", (el) => {
  el.preventDefault();
  if (el.target.nodeName !== "IMG") {
    return;
  }
  const imgSelected = el.target.getAttribute("data-source");

  const template = basicLightbox.create(
    `<img src="${imgSelected}" width="800" height="600">`,
    {
      onShow: () => {
        document.addEventListener("keydown", closeModal);
      },
      onClose: () => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );

  template.show();

  function closeModal(el) {
    if (el.key === "Escape") {
        template.close();
    }
  }
});
