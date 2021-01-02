const photosService = require('../services/galleryInstances');

const getAllPhotos = (req, res, next) => {
    photosService.getGalleryInstances({})
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            console.log(err);
        })
}

const getPhotosOfCollection = (req, res, next) => {
    photosService.getGalleryInstances({collection: req.params.collectionId});
}

const updatePhoto = (req, res, next) => {
    photosService.getGalleryInstance(req.params.id);
}

const deletePhoto = (req, res, next) => {
    photosService.deleteGalleryInstance(req.params.id);
}

module.exports = {
    getAllPhotos,
    getPhotosOfCollection,
    updatePhoto,
    deletePhoto,
}