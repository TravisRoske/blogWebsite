const express = require('express');
const router = express.Router();
const Post = require("./postSchema")


router.route('/')
.get((req, res) => {         // Get all blog posts
    Post.find((err, posts) => {
        if (err) {
            res.send(err);
        } else {
            res.json(posts);
        }
    });
})
.post((req, res) => {       // Create a new blog post
    const newPost = new Post(req.body);
    newPost.save((err, post) => {
        if (err) {
            res.send(err);
        } else {
            res.json(post);
        }
    });
})


router.route('/:id')
.get((req, res) => {        // Get a specific blog post by ID
    Post.findById(req.params.id, (err, post) => {
    if (err) {
        res.send(err);
    } else {
        res.json(post);
    }
    });
})
.put((req, res) => {           // Update an existing blog post
    Post.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
        if (err) {
            res.send(err);
        } else {
            res.json(post);
        }
    });
});


module.exports = router