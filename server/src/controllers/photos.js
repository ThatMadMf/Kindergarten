const collectionService = require('../services/galleryInstances');

const getAllPhotos = (req, res, next) => {
    collectionService.getGalleryInstances({})
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            console.log(err);
        })
}

const getPhotosOfCollection = (req, res, next) => {
    collectionService.getGalleryInstances({collection: req.params.collectionId});
}

module.exports = {
    getAllPhotos,
    getPhotosOfCollection,
}