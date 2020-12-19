const User = require("./shemes/user");
const Article = require("./shemes/article");
const GalleryCollection = require("./shemes/collection");
const {createArticle} = require("../services/articles");
const {createUser} = require("../services/users");
const fs = require('fs');
const {createGalleryInstance} = require("../services/galleryInstances");
const {getAdmin} = require("../services/users");
const {createGalleryCollection} = require("../services/collections");

User.count(function (err, count) {
    if (!err && count === 0) {
        populateUsers();
    }
});

Article.count(function (err, count) {
    if (!err && count === 0) {
        populateArticles();
    }
});

GalleryCollection.count(function (err, count) {
    if (!err && count === 0) {
        populateGallery();
    }
});

const filesPath = process.cwd() + '/src/db/fixtures/files/'

const articles = [
    {
        title: 'Funnybot',
        content: 'Jimmy hosts the Special Ed Department\'s First Annual Comedy Awards.',
        filename: 'funnybot',
    },
    {
        title: 'You\'re Getting Old',
        content: 'Just after Stan\'s 10th birthday, his worldview starts to change and so do his friendships.',
        filename: 'gettingold',
    },
    {
        title: 'Bass to Mout',
        content: 'The kids\' most scandalous secrets are being leaked on an outrageous new gossip website.',
        filename: 'basstomoth',
    }
]

const collections = [
    {
        name: 'kindergarteners',
        photos: [
            {
                title: 'Ike Broflovski',
                filename: 'Ike',
            },
            {
                title: 'Filmore Anderson',
                filename: 'FilmoreAnderson',
            },
            {
                title: 'Flora',
                filename: 'Flora',
            },
            {
                title: 'Jenny',
                filename: 'Jenny',
            },
            {
                title: 'Quaid',
                filename: 'Quaid',
            },
            {
                title: 'Sally Bands',
                filename: 'SallyBands',
            }
        ]
    },
]

const populateUsers = () => {
    createUser('admin', 'admin');
}

const populateArticles = () => {
    getAdmin()
        .then((admin) => {
            articles.forEach(a => {
                fs.readFile(filesPath + a.filename, function (err, data) {
                    createArticle(a.title, a.content, admin._id, {buffer: data});
                });
            });
        });
}

const populateGallery = () => {
    getAdmin()
        .then((admin) => {
            collections.forEach(c => {
                createGalleryCollection(c.name)
                    .then((collection) => {
                        c.photos.forEach(p => {
                            fs.readFile(filesPath + p.filename, function (err, data) {
                                createGalleryInstance(p.title, admin._id, {buffer: data}, collection._id);
                            });
                        });
                    });
            });
        });
}


