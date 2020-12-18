const collectionService = require('../services/collections');

const getCollections = (req, res, next) => {
    collectionService.getGalleryCollections()
        .then((data) => {
            res.status(200).send(data);
        })
}

module.exports = {
    getCollections,
}