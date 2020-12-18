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

GalleryCollection.count(function (err, count) {
    if (!err && count === 0) {
        populateGallery();
    }
});

const filesPath = process.cwd() + '/src/db/fixtures/files/'

const populateUsers = () => {
    createUser('admin', 'admin')
        .then((user) => {
            Article.count(function (err, count) {
                if (!err && count === 0) {

                    fs.readFile(filesPath + 'funnybot', function (err, data) {
                        createArticle(
                            'Funnybot',
                            'Jimmy hosts the Special Ed Department\'s First Annual Comedy Awards.',
                            user._id,
                            {buffer: data}
                        );
                    });
                    fs.readFile(filesPath + 'gettingold', function (err, data) {
                        createArticle(
                            'You\'re Getting Old',
                            'Just after Stan\'s 10th birthday, his worldview starts to change and so do his friendships.',
                            user._id,
                            {buffer: data}
                        );
                    });
                    fs.readFile(filesPath + 'basstomoth', function (err, data) {
                        createArticle(
                            'Bass to Mouth',
                            'The kids\' most scandalous secrets are being leaked on an outrageous new gossip website.',
                            user._id,
                            {buffer: data}
                        );
                    });
                }
            })
        })
}

const populateGallery = () => {
    getAdmin()
        .then((admin) => {
            createGalleryCollection('kindergarteners', admin._id)
                .then((collection) => {
                    fs.readFile(filesPath + 'Ike', function (err, data) {
                        createGalleryInstance("Ike Broflovski", admin._id, {buffer: data}, collection._id);
                    });
                })
        })
}


