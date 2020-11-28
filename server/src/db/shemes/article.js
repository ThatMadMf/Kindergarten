const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

const articleScheme = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
},
    {
        timestamps: { createdAt: 'createdAt' }
    }
);

const Article = mongoose.model('Article', articleScheme);

module.exports = Article;
