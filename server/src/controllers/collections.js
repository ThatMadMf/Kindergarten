const collectionService = require('../services/collections');

const getCollections = (req, res, next) => {
    collectionService.getGalleryCollections()
        .then((data) => {
            res.status(200).send(data);
        })
}

const getCollection = (req, res, next) => {
    collectionService.getCollection(req.params.id)
        .then((data) => {
            if (data.length === 0) {
                res.status(404).send();
            } else {
                res.status(200).send(data[0]);
            }
        })
}

const deleteCollection = (req, res, next) => {
    collectionService.deleteCollection(req.params.id)
        .then(() => {
            res.status(204).send();
        })
        .catch((err) => {
            res.status(404).send();
        })
}

module.exports = {
    getCollections,
    getCollection,
    deleteCollection,
}