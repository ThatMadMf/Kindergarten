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

const getGalleryInstance = (id) => {
    return GalleryInstance.findOne({_id: id});
}

const updateGalleryInstance = ({title, img}, id) => {
    return GalleryInstance.findOneAndUpdate({_id: id}, {title})
}

const deleteGalleryInstance = (id) => {
    return GalleryInstance.findOneAndRemove({_id: id});
}

module.exports = {
    createGalleryInstance,
    getGalleryInstances,
    getGalleryInstance,
    updateGalleryInstance,
    deleteGalleryInstance,
}