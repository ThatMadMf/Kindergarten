const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

const collection = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    },
    {
        timestamps: { createdAt: 'createdAt' }
    }
);

const GalleryCollection = mongoose.model('GalleryCollection', collection);

module.exports = GalleryCollection;