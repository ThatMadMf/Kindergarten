const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

const galleryInstanceScheme = new mongoose.Schema({
        title: {
            type: String,
            required: true,
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        img: {
            data: Buffer,
            contentType: String
        },
        galleryCollection: {
            type: Schema.Types.ObjectId,
            ref: "GalleryCollection"
        },
    },
    {
        timestamps: { createdAt: 'createdAt' }
    }
);

const GalleryInstance = mongoose.model('GalleryInstance', galleryInstanceScheme);

module.exports = GalleryInstance;
