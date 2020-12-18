const GalleryInstance = require("../db/shemes/galleryInstance");

const createGalleryInstance = (title, author, img, galleryCollection) => {
    GalleryInstance.create({
        title,
        author,
        img: {
            data: img.buffer,
            contentType: 'image'
        },
        galleryCollection,
    });
}

const getGalleryInstances = (filter) => {
    return GalleryInstance.find(filter);
}

module.exports = {
    createGalleryInstance,
    getGalleryInstances,
}