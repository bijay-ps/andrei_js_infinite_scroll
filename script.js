const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apikey = 'y5rEhQXQlxj_3FqVdh3Ryxxoeqz0agup8GiJY2nUA3M';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apikey}&count=${count}`;


function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

function displayPhotos() {
    photosArray.forEach((photo) => {
        const item = document.createElement('a');
        setAttribute(item, {
            href: photo.links.html,
            target: '_blank'
        })
        const img = document.createElement('img');
        
        setAttribute(item, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        })
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch(e) {

    }
}

getPhotos();