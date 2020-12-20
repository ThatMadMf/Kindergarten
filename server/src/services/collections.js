const mongoose = require('mongoose');

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

const getCollection = async (id) => {
    return GalleryCollection.aggregate([
        {
            $match: { _id: mongoose.Types.ObjectId(id) }
        },
        {
            $lookup: {
                from: "galleryinstances",
                localField: "_id",
                foreignField: "galleryCollection",
                as: "photos"
            }
        }
    ])
        .exec();
}

module.exports = {
    createGalleryCollection,
    getGalleryCollections,
    getCollection,
}