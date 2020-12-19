const GalleryInstance = require("../db/shemes/galleryInstance");

const createGalleryInstance = (title, author, img, galleryCollection) => {
    return new GalleryInstance({
        title,
        author,
        img: {
            data: img.buffer,
            contentType: 'image'
        },
        galleryCollection,
    }).save();
}

const getGalleryInstances = (filter) => {
    return GalleryInstance.find(filter);
}

module.exports = {
    createGalleryInstance,
    getGalleryInstances,
}