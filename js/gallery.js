// импорт массива картинок

import galleryItems from './app.js';

// доступ к необходимым эллементам
const ulGalleryEl = document.querySelector('ul.js-gallery');
const modalWindowEl = document.querySelector('div.js-lightbox')
const bigImage = modalWindowEl.querySelector('img.lightbox__image');

// создание HTML разметки
const ItemCreateEl = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
                <a
                    class="gallery__link"
                    href="${original}"
                >
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </li>`;
});

// добавление в HTML
ulGalleryEl.insertAdjacentHTML('afterbegin', ItemCreateEl.join(' '));

