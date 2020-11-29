const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

const articleScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},
    {
        timestamps: { createdAt: 'createdAt' }
    }
);

const Article = mongoose.model('Article', articleScheme);

module.exports = Article;
