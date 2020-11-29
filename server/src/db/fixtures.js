const User = require("./shemes/user");
const Article = require("./shemes/article");
const {createArticle} = require("../services/articles");
const {createUser} = require("../services/users");

User.count(function (err, count) {
    if (!err && count === 0) {
        populate();
    }
})

const populate = () => {
    createUser('admin', 'admin')
        .then((user) => {
            Article.count(function (err, count) {
                if (!err && count === 0) {
                    createArticle(
                        'Funnybot',
                        'Jimmy hosts the Special Ed Department\'s First Annual Comedy Awards.',
                        user._id
                    );
                    createArticle(
                        'You\'re Getting Old',
                        'Just after Stan\'s 10th birthday, his worldview starts to change and so do his friendships.',
                        user._id
                    );
                    createArticle(
                        'Bass to Mouth',
                        'The kids\' most scandalous secrets are being leaked on an outrageous new gossip website.',
                        user._id
                    )
                }
            })
        })
}


