const GalleryCollection = require("../db/shemes/collection");

const createGalleryCollection = (name, authorId) => {
    return new GalleryCollection({
        name: name,
        author: authorId,
    }).save();
}

const getGalleryCollections = async () => {
    return GalleryCollection.aggregate([{
            $lookup: {
                from: "galleryinstances",
                localField: "_id",
                foreignField: "galleryCollection",
                as: "photos"
            }
        }])
        .exec();
}

module.exports = {
    createGalleryCollection,
    getGalleryCollections,
}