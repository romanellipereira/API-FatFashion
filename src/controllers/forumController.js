const posts = require('../models/forumSchema.js');

const getAll = (req, res) => {
    posts.find(function(err, posts){
        if(err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send(posts);
    })
};

const getPostByTitle = (req, res) => {
    const title = req.params.title;
    posts.find({ titulo: title  }, function(err, post){
        if(err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send(post);
    })
};

const newPost = (req, res) => {
    console.log(req.body);

    let post = new posts(req.body);
    post.save(function(err){
        if(err) {
            res.status(500).send({ message: err.message });
        } else {
            res.status(201).send(post.toJSON());
        }
    });
};

const updatePostById = (req, res) => {
    const id = req.params.id;

    posts.findByIdAndUpdate( id , req.body , { new: true } , (err, post) => {
        if (err) {
            res.status(500).send({ message: err.message });
        } else if (!post) {
            res.status(404).send({ message: "Discussão não encontrada." });
        } else {
        res.status(200).send({ message: "Discussão atualizada com sucesso." });
        }
    });
};

const postComment = (req, res) => {
    const id = req.params.id;

    posts.updateMany({ _id: id }, { $set: { "comentarios": req.body }}, { upsert : true }, (err, post) => {
        if(err) {
            res.status(500).send({ message: err.message })
        } else if (!post) {
            res.status(404).send({ message: "Discussão não encontrada." });
        } else {
            res.status(200).send({ message: "Comentário inserido com sucesso." });
        };
    });
};

const deletePostById = (req, res) => {
    const id = req.params.id;

    posts.findByIdAndDelete( id , (err, post) => {
        if (err) {
            res.status(500).send({ message: err.message });
        } else if (!post) {
            res.status(404).send({ message: "Discussão não encontrada." });
        } else {
        res.status(200).send({ message: "Discussão removida com sucesso." });
        }
    });
}

module.exports = {
    getAll,
    getPostByTitle,
    newPost,
    updatePostById,
    postComment,
    deletePostById
}